// If isInIframe is true but not actually loaded in an iframe, switch to classic mode
(function() {
    'use strict';
    
    if (window.self === window.top) {
        fetch(window.location.origin + "/Version/SwitchToClassic", { method: "POST" })
            .then(res => res.json())
            .then(data => {
                if (data && data.success && data.redirectUrl) {
                    window.location.href = data.redirectUrl;
                } else {
                    // fallback: reload to root
                    window.location.href = window.location.origin + "/";
                }
            })
            .catch(() => {
                window.location.href = window.location.origin + "/";
            });
    }
})();
