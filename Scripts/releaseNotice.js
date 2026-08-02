/**
 * Release notice for the classic (MVC) portal.
 *
 * Warns the user while a deployment is running, so an outage is never silent. Two sources:
 *  - the `etalenter:release-status` window event raised by SignalRService when the release
 *    pipeline broadcasts (instant), and
 *  - a 30s poll of the API's /api/release/status (covers pages loaded after the broadcast and
 *    users with no SignalR connection).
 *
 * Wording is for users of THIS portal. The React portal shows its own wording.
 */
(function () {
    'use strict';

    var ACTIVE_POLL_MS = 30000;
    var AUTO_CLOSE_SECONDS = 8;
    var BANNER_LINGER_MS = 20000;
    var STARTED = 'started';
    var COMPLETED = 'completed';

    var NOTICES = {
        etalenterweb: {
            title: 'Release in progress on this portal',
            body: function (eta) {
                return 'We are releasing an update to this portal right now. Links and redirections to other pages will not work for the next ' + eta +
                    ' minutes, but you can continue working on this page - the API is active. The portal comes back on its own when the release finishes.';
            },
            doneTitle: 'Release finished',
            doneBody: 'The release has finished and this portal is fully active again. Links and redirections work as normal.'
        },
        react: {
            title: 'New portal update in progress',
            body: function (eta) {
                return 'We are releasing an update to the new portal. Links that open new portal pages will not work for the next ' + eta +
                    ' minutes. You can continue working here.';
            },
            doneTitle: 'New portal is back',
            doneBody: 'The new portal update has finished. Its links work again.'
        },
        api: {
            title: 'Core services are being updated',
            body: function (eta) {
                return 'We are releasing an update to our core services. Saving and loading data may fail for the next ' + eta +
                    ' minutes. Please retry after that.';
            },
            doneTitle: 'Core services are back',
            doneBody: 'The update has finished. You can continue working normally.'
        }
    };

    var state = { key: null, doneKey: null };
    var pollTimer = null;
    var autoCloseTimer = null;

    function field(source, name) {
        if (!source) return undefined;
        var camel = name.charAt(0).toLowerCase() + name.slice(1);
        return source[name] !== undefined ? source[name] : source[camel];
    }

    function normalize(status) {
        var target = (field(status, 'Target') || '').toLowerCase();
        if (!NOTICES[target]) return null;

        return {
            target: target,
            phase: (field(status, 'Phase') || '').toLowerCase(),
            etaMinutes: field(status, 'EtaMinutes') || 10,
            message: field(status, 'Message') || null,
            releaseId: field(status, 'ReleaseId') || null,
            startedAtUtc: field(status, 'StartedAtUtc') || null
        };
    }

    function minutesRemaining(notice) {
        if (!notice.startedAtUtc) return notice.etaMinutes;
        var raw = notice.startedAtUtc;
        var startedAt = new Date(raw.charAt(raw.length - 1) === 'Z' ? raw : raw + 'Z').getTime();
        if (isNaN(startedAt)) return notice.etaMinutes;
        var elapsedMinutes = (Date.now() - startedAt) / 60000;
        return Math.max(1, Math.ceil(notice.etaMinutes - elapsedMinutes));
    }

    function apiRoot() {
        if (window.apiRootPath) return window.apiRootPath;
        var isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        return isLocalhost ? 'http://localhost:8888' : window.location.origin;
    }

    // ---------------------------------------------------------------- rendering

    function bannerElement() {
        var existing = document.getElementById('etalenter-release-banner');
        if (existing) return existing;

        var banner = document.createElement('div');
        banner.id = 'etalenter-release-banner';
        banner.setAttribute('role', 'status');
        banner.style.cssText = [
            'position:fixed', 'top:0', 'left:0', 'right:0', 'z-index:999998',
            'padding:10px 16px', 'text-align:center', 'font-size:14px', 'font-weight:500',
            'color:#fff', 'background:#d97706', 'box-shadow:0 2px 6px rgba(0,0,0,.25)',
            'font-family:inherit'
        ].join(';');
        document.body.appendChild(banner);
        return banner;
    }

    function renderBanner(notice) {
        var copy = NOTICES[notice.target];
        var isDone = notice.phase === COMPLETED;
        var banner = bannerElement();

        banner.style.background = isDone ? '#059669' : '#d97706';
        banner.textContent = (isDone ? '✅ ' : '🚀 ') +
            (isDone ? copy.doneTitle : copy.title) + ': ' +
            (isDone ? copy.doneBody : (notice.message || copy.body(minutesRemaining(notice))));
    }

    function removeBanner() {
        var banner = document.getElementById('etalenter-release-banner');
        if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    }

    function showModal(notice) {
        if (document.getElementById('etalenter-release-modal')) return;

        var copy = NOTICES[notice.target];
        var isDone = notice.phase === COMPLETED;
        var accent = isDone ? '#059669' : '#d97706';

        var overlay = document.createElement('div');
        overlay.id = 'etalenter-release-modal';
        overlay.style.cssText = [
            'position:fixed', 'inset:0', 'z-index:999999', 'display:flex',
            'align-items:center', 'justify-content:center', 'padding:16px',
            'background:rgba(0,0,0,.5)', 'font-family:inherit'
        ].join(';');

        var box = document.createElement('div');
        box.style.cssText = [
            'max-width:460px', 'width:100%', 'background:#fff', 'border-radius:8px',
            'padding:24px', 'box-shadow:0 10px 30px rgba(0,0,0,.3)'
        ].join(';');

        var heading = document.createElement('h2');
        heading.textContent = (isDone ? '✅ ' : '🚀 ') + (isDone ? copy.doneTitle : copy.title);
        heading.style.cssText = 'margin:0 0 12px;font-size:18px;font-weight:600;color:#111827';

        var text = document.createElement('p');
        text.textContent = isDone ? copy.doneBody : (notice.message || copy.body(minutesRemaining(notice)));
        text.style.cssText = 'margin:0 0 8px;font-size:14px;line-height:1.5;color:#374151';

        var meta = document.createElement('p');
        meta.textContent = isDone
            ? autoCloseText(AUTO_CLOSE_SECONDS)
            : 'Expected to finish in about ' + minutesRemaining(notice) + ' minutes.' +
              (notice.releaseId ? ' (Release ' + notice.releaseId + ')' : '');
        meta.style.cssText = 'margin:0 0 20px;font-size:12px;color:#6b7280';

        var button = document.createElement('button');
        button.type = 'button';
        button.textContent = isDone ? 'Close' : 'Continue working';
        button.style.cssText = [
            'display:block', 'margin-left:auto', 'padding:8px 16px', 'border:0',
            'border-radius:4px', 'background:' + accent, 'color:#fff', 'font-size:14px',
            'font-weight:500', 'cursor:pointer'
        ].join(';');
        button.onclick = function () {
            closeModal();
        };

        box.appendChild(heading);
        box.appendChild(text);
        box.appendChild(meta);
        box.appendChild(button);
        overlay.appendChild(box);
        document.body.appendChild(overlay);

        // The all clear is information, not a decision - it takes itself off the screen.
        if (isDone) startAutoClose(meta);
    }

    function autoCloseText(seconds) {
        return 'This message closes automatically in ' + seconds + ' second' + (seconds === 1 ? '' : 's') + '.';
    }

    function startAutoClose(meta) {
        var secondsLeft = AUTO_CLOSE_SECONDS;

        autoCloseTimer = setInterval(function () {
            secondsLeft--;

            if (secondsLeft <= 0) {
                closeModal();
                return;
            }

            meta.textContent = autoCloseText(secondsLeft);
        }, 1000);
    }

    function closeModal() {
        if (autoCloseTimer) {
            clearInterval(autoCloseTimer);
            autoCloseTimer = null;
        }

        var modal = document.getElementById('etalenter-release-modal');
        if (modal && modal.parentNode) modal.parentNode.removeChild(modal);
    }

    // ---------------------------------------------------------------- state

    function apply(raw) {
        var notice = normalize(raw);
        if (!notice) return;

        if (notice.phase === COMPLETED) {
            var doneKey = notice.target + ':done:' + (notice.releaseId || notice.startedAtUtc || '');

            state.key = null;
            closeModal();
            renderBanner(notice);

            // Once per release, however many times the all clear reaches us.
            if (state.doneKey !== doneKey) {
                state.doneKey = doneKey;
                showModal(notice);
                setTimeout(removeBanner, BANNER_LINGER_MS);
            }
            return;
        }

        if (notice.phase !== STARTED) return;

        var key = notice.target + ':' + (notice.releaseId || notice.startedAtUtc || '');
        if (state.key !== key) {
            state.key = key;
            showModal(notice);
        }

        renderBanner(notice);
    }

    function clear() {
        if (!state.key) return;
        state.key = null;
        closeModal();
        removeBanner();
    }

    /**
     * SignalR is the live path. There is no interval polling: an idle page makes no status
     * calls at all. The status endpoint is only read at the moments a broadcast cannot reach
     * us, because SignalR has no history and never replays:
     *   - page load          -> a release may already have been announced before this page opened
     *   - tab becomes visible-> the same, after the machine was asleep or the tab parked
     *   - SignalR reconnect  -> anything broadcast while the socket was down was missed
     * The only repeating poll runs WHILE a release is showing, so the banner clears itself and
     * the countdown keeps moving even if the socket drops mid-release.
     */
    function schedulePoll() {
        if (pollTimer) {
            clearTimeout(pollTimer);
            pollTimer = null;
        }

        if (!state.key) return;

        pollTimer = setTimeout(poll, ACTIVE_POLL_MS);
    }

    function poll() {
        var request = new XMLHttpRequest();
        request.open('GET', apiRoot() + '/api/release/status?_=' + Date.now(), true);
        request.timeout = 8000;
        request.onload = function () {
            if (request.status !== 200) {
                schedulePoll();
                return;
            }

            var payload;
            try {
                payload = JSON.parse(request.responseText);
            } catch (e) {
                schedulePoll();
                return;
            }

            var releases = payload.Releases || payload.releases || [];
            var started = null;
            var completed = null;

            for (var i = 0; i < releases.length; i++) {
                var phase = (field(releases[i], 'Phase') || '').toLowerCase();
                if (phase === STARTED && !started) started = releases[i];
                if (phase === COMPLETED && !completed) completed = releases[i];
            }

            if (started) {
                apply(started);
            } else if (completed) {
                apply(completed);
            } else {
                // Nothing active - clears a banner left behind by a missed "complete" call.
                clear();
            }

            schedulePoll();
        };
        // A failing status call is expected while the API itself is being released.
        request.onerror = function () { schedulePoll(); };
        request.ontimeout = function () { schedulePoll(); };
        request.send();
    }

    function start() {
        window.addEventListener('etalenter:release-status', function (event) {
            apply(event.detail);
            // A release just started or ended - the polling cadence changes with it.
            schedulePoll();
        });

        window.addEventListener('etalenter:signalr-reconnected', function () {
            poll();
        });

        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'visible') poll();
        });

        // One poll per page load: this is what catches a release that started before this
        // page was opened. Each poll also re-renders the banner, keeping the countdown current.
        poll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
