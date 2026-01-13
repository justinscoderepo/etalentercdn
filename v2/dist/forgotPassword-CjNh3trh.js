import { r as reactExports, k as React, D as axios, j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
import { c as clsx } from "./clsx-DgYk2OaC.js";
import { a as useNavigate, b as useSmartNavigate } from "./navigationUtils-BZC1EMRn.js";
const c = (e) => "number" == typeof e && !isNaN(e), d = (e) => "string" == typeof e, u = (e) => "function" == typeof e, p = (e) => d(e) || u(e) ? e : null, m = (e) => reactExports.isValidElement(e) || d(e) || u(e) || c(e);
function f(e, t, n) {
  void 0 === n && (n = 300);
  const { scrollHeight: o, style: s } = e;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = o + "px", s.transition = `all ${n}ms`, requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(t, n);
    });
  });
}
function g(t) {
  let { enter: a, exit: r, appendPosition: i = false, collapse: l = true, collapseDuration: c2 = 300 } = t;
  return function(t2) {
    let { children: d2, position: u2, preventExitTransition: p2, done: m2, nodeRef: g2, isIn: y2, playToast: v2 } = t2;
    const h2 = i ? `${a}--${u2}` : a, T2 = i ? `${r}--${u2}` : r, E2 = reactExports.useRef(0);
    return reactExports.useLayoutEffect(() => {
      const e = g2.current, t3 = h2.split(" "), n = (o) => {
        o.target === g2.current && (v2(), e.removeEventListener("animationend", n), e.removeEventListener("animationcancel", n), 0 === E2.current && "animationcancel" !== o.type && e.classList.remove(...t3));
      };
      e.classList.add(...t3), e.addEventListener("animationend", n), e.addEventListener("animationcancel", n);
    }, []), reactExports.useEffect(() => {
      const e = g2.current, t3 = () => {
        e.removeEventListener("animationend", t3), l ? f(e, m2, c2) : m2();
      };
      y2 || (p2 ? t3() : (E2.current = 1, e.className += ` ${T2}`, e.addEventListener("animationend", t3)));
    }, [y2]), React.createElement(React.Fragment, null, d2);
  };
}
function y(e, t) {
  return null != e ? { content: e.content, containerId: e.props.containerId, id: e.props.toastId, theme: e.props.theme, type: e.props.type, data: e.props.data || {}, isLoading: e.props.isLoading, icon: e.props.icon, status: t } : {};
}
const v = /* @__PURE__ */ new Map();
let h = [];
const T = /* @__PURE__ */ new Set(), E = (e) => T.forEach((t) => t(e)), b = () => v.size > 0;
function I(e, t) {
  var n;
  if (t) return !(null == (n = v.get(t)) || !n.isToastActive(e));
  let o = false;
  return v.forEach((t2) => {
    t2.isToastActive(e) && (o = true);
  }), o;
}
function _(e, t) {
  m(e) && (b() || h.push({ content: e, options: t }), v.forEach((n) => {
    n.buildToast(e, t);
  }));
}
function C(e, t) {
  v.forEach((n) => {
    null != t && null != t && t.containerId ? (null == t ? void 0 : t.containerId) === n.id && n.toggle(e, null == t ? void 0 : t.id) : n.toggle(e, null == t ? void 0 : t.id);
  });
}
function L(e) {
  const { subscribe: o, getSnapshot: s, setProps: i } = reactExports.useRef((function(e2) {
    const n = e2.containerId || 1;
    return { subscribe(o2) {
      const s2 = /* @__PURE__ */ (function(e3, n2, o3) {
        let s3 = 1, r2 = 0, i2 = [], l2 = [], f2 = [], g2 = n2;
        const v2 = /* @__PURE__ */ new Map(), h2 = /* @__PURE__ */ new Set(), T2 = () => {
          f2 = Array.from(v2.values()), h2.forEach((e4) => e4());
        }, E2 = (e4) => {
          l2 = null == e4 ? [] : l2.filter((t) => t !== e4), T2();
        }, b2 = (e4) => {
          const { toastId: n3, onOpen: s4, updateId: a, children: r3 } = e4.props, i3 = null == a;
          e4.staleId && v2.delete(e4.staleId), v2.set(n3, e4), l2 = [...l2, e4.props.toastId].filter((t) => t !== e4.staleId), T2(), o3(y(e4, i3 ? "added" : "updated")), i3 && u(s4) && s4(reactExports.isValidElement(r3) && r3.props);
        };
        return { id: e3, props: g2, observe: (e4) => (h2.add(e4), () => h2.delete(e4)), toggle: (e4, t) => {
          v2.forEach((n3) => {
            null != t && t !== n3.props.toastId || u(n3.toggle) && n3.toggle(e4);
          });
        }, removeToast: E2, toasts: v2, clearQueue: () => {
          r2 -= i2.length, i2 = [];
        }, buildToast: (n3, l3) => {
          if (((t) => {
            let { containerId: n4, toastId: o4, updateId: s4 } = t;
            const a = n4 ? n4 !== e3 : 1 !== e3, r3 = v2.has(o4) && null == s4;
            return a || r3;
          })(l3)) return;
          const { toastId: f3, updateId: h3, data: I2, staleId: _2, delay: C2 } = l3, L2 = () => {
            E2(f3);
          }, N2 = null == h3;
          N2 && r2++;
          const $2 = { ...g2, style: g2.toastStyle, key: s3++, ...Object.fromEntries(Object.entries(l3).filter((e4) => {
            let [t, n4] = e4;
            return null != n4;
          })), toastId: f3, updateId: h3, data: I2, closeToast: L2, isIn: false, className: p(l3.className || g2.toastClassName), bodyClassName: p(l3.bodyClassName || g2.bodyClassName), progressClassName: p(l3.progressClassName || g2.progressClassName), autoClose: !l3.isLoading && (w2 = l3.autoClose, k2 = g2.autoClose, false === w2 || c(w2) && w2 > 0 ? w2 : k2), deleteToast() {
            const e4 = v2.get(f3), { onClose: n4, children: s4 } = e4.props;
            u(n4) && n4(reactExports.isValidElement(s4) && s4.props), o3(y(e4, "removed")), v2.delete(f3), r2--, r2 < 0 && (r2 = 0), i2.length > 0 ? b2(i2.shift()) : T2();
          } };
          var w2, k2;
          $2.closeButton = g2.closeButton, false === l3.closeButton || m(l3.closeButton) ? $2.closeButton = l3.closeButton : true === l3.closeButton && ($2.closeButton = !m(g2.closeButton) || g2.closeButton);
          let P2 = n3;
          reactExports.isValidElement(n3) && !d(n3.type) ? P2 = reactExports.cloneElement(n3, { closeToast: L2, toastProps: $2, data: I2 }) : u(n3) && (P2 = n3({ closeToast: L2, toastProps: $2, data: I2 }));
          const M2 = { content: P2, props: $2, staleId: _2 };
          g2.limit && g2.limit > 0 && r2 > g2.limit && N2 ? i2.push(M2) : c(C2) ? setTimeout(() => {
            b2(M2);
          }, C2) : b2(M2);
        }, setProps(e4) {
          g2 = e4;
        }, setToggle: (e4, t) => {
          v2.get(e4).toggle = t;
        }, isToastActive: (e4) => l2.some((t) => t === e4), getSnapshot: () => f2 };
      })(n, e2, E);
      v.set(n, s2);
      const r = s2.observe(o2);
      return h.forEach((e3) => _(e3.content, e3.options)), h = [], () => {
        r(), v.delete(n);
      };
    }, setProps(e3) {
      var t;
      null == (t = v.get(n)) || t.setProps(e3);
    }, getSnapshot() {
      var e3;
      return null == (e3 = v.get(n)) ? void 0 : e3.getSnapshot();
    } };
  })(e)).current;
  i(e);
  const l = reactExports.useSyncExternalStore(o, s, s);
  return { getToastToRender: function(t) {
    if (!l) return [];
    const n = /* @__PURE__ */ new Map();
    return e.newestOnTop && l.reverse(), l.forEach((e2) => {
      const { position: t2 } = e2.props;
      n.has(t2) || n.set(t2, []), n.get(t2).push(e2);
    }), Array.from(n, (e2) => t(e2[0], e2[1]));
  }, isToastActive: I, count: null == l ? void 0 : l.length };
}
function N(e) {
  const [t, o] = reactExports.useState(false), [a, r] = reactExports.useState(false), l = reactExports.useRef(null), c2 = reactExports.useRef({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: true, canDrag: false, didMove: false }).current, { autoClose: d2, pauseOnHover: u2, closeToast: p2, onClick: m2, closeOnClick: f2 } = e;
  var g2, y2;
  function h2() {
    o(true);
  }
  function T2() {
    o(false);
  }
  function E2(n) {
    const o2 = l.current;
    c2.canDrag && o2 && (c2.didMove = true, t && T2(), c2.delta = "x" === e.draggableDirection ? n.clientX - c2.start : n.clientY - c2.start, c2.start !== n.clientX && (c2.canCloseOnClick = false), o2.style.transform = `translate3d(${"x" === e.draggableDirection ? `${c2.delta}px, var(--y)` : `0, calc(${c2.delta}px + var(--y))`},0)`, o2.style.opacity = "" + (1 - Math.abs(c2.delta / c2.removalDistance)));
  }
  function b2() {
    document.removeEventListener("pointermove", E2), document.removeEventListener("pointerup", b2);
    const t2 = l.current;
    if (c2.canDrag && c2.didMove && t2) {
      if (c2.canDrag = false, Math.abs(c2.delta) > c2.removalDistance) return r(true), e.closeToast(), void e.collapseAll();
      t2.style.transition = "transform 0.2s, opacity 0.2s", t2.style.removeProperty("transform"), t2.style.removeProperty("opacity");
    }
  }
  null == (y2 = v.get((g2 = { id: e.toastId, containerId: e.containerId, fn: o }).containerId || 1)) || y2.setToggle(g2.id, g2.fn), reactExports.useEffect(() => {
    if (e.pauseOnFocusLoss) return document.hasFocus() || T2(), window.addEventListener("focus", h2), window.addEventListener("blur", T2), () => {
      window.removeEventListener("focus", h2), window.removeEventListener("blur", T2);
    };
  }, [e.pauseOnFocusLoss]);
  const I2 = { onPointerDown: function(t2) {
    if (true === e.draggable || e.draggable === t2.pointerType) {
      c2.didMove = false, document.addEventListener("pointermove", E2), document.addEventListener("pointerup", b2);
      const n = l.current;
      c2.canCloseOnClick = true, c2.canDrag = true, n.style.transition = "none", "x" === e.draggableDirection ? (c2.start = t2.clientX, c2.removalDistance = n.offsetWidth * (e.draggablePercent / 100)) : (c2.start = t2.clientY, c2.removalDistance = n.offsetHeight * (80 === e.draggablePercent ? 1.5 * e.draggablePercent : e.draggablePercent) / 100);
    }
  }, onPointerUp: function(t2) {
    const { top: n, bottom: o2, left: s, right: a2 } = l.current.getBoundingClientRect();
    "touchend" !== t2.nativeEvent.type && e.pauseOnHover && t2.clientX >= s && t2.clientX <= a2 && t2.clientY >= n && t2.clientY <= o2 ? T2() : h2();
  } };
  return d2 && u2 && (I2.onMouseEnter = T2, e.stacked || (I2.onMouseLeave = h2)), f2 && (I2.onClick = (e2) => {
    m2 && m2(e2), c2.canCloseOnClick && p2();
  }), { playToast: h2, pauseToast: T2, isRunning: t, preventExitTransition: a, toastRef: l, eventHandlers: I2 };
}
function $(t) {
  let { delay: n, isRunning: o, closeToast: s, type: a = "default", hide: r, className: i, style: c2, controlledProgress: d2, progress: p2, rtl: m2, isIn: f2, theme: g2 } = t;
  const y2 = r || d2 && 0 === p2, v2 = { ...c2, animationDuration: `${n}ms`, animationPlayState: o ? "running" : "paused" };
  d2 && (v2.transform = `scaleX(${p2})`);
  const h2 = clsx("Toastify__progress-bar", d2 ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g2}`, `Toastify__progress-bar--${a}`, { "Toastify__progress-bar--rtl": m2 }), T2 = u(i) ? i({ rtl: m2, type: a, defaultClassName: h2 }) : clsx(h2, i), E2 = { [d2 && p2 >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: d2 && p2 < 1 ? null : () => {
    f2 && s();
  } };
  return React.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": y2 }, React.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g2} Toastify__progress-bar--${a}` }), React.createElement("div", { role: "progressbar", "aria-hidden": y2 ? "true" : "false", "aria-label": "notification timer", className: T2, style: v2, ...E2 }));
}
let w = 1;
const k = () => "" + w++;
function P(e) {
  return e && (d(e.toastId) || c(e.toastId)) ? e.toastId : k();
}
function M(e, t) {
  return _(e, t), t.toastId;
}
function x(e, t) {
  return { ...t, type: t && t.type || e, toastId: P(t) };
}
function A(e) {
  return (t, n) => M(t, x(e, n));
}
function B(e, t) {
  return M(e, x("default", t));
}
B.loading = (e, t) => M(e, x("default", { isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false, ...t })), B.promise = function(e, t, n) {
  let o, { pending: s, error: a, success: r } = t;
  s && (o = d(s) ? B.loading(s, n) : B.loading(s.render, { ...n, ...s }));
  const i = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l = (e2, t2, s2) => {
    if (null == t2) return void B.dismiss(o);
    const a2 = { type: e2, ...i, ...n, data: s2 }, r2 = d(t2) ? { render: t2 } : t2;
    return o ? B.update(o, { ...a2, ...r2 }) : B(r2.render, { ...a2, ...r2 }), s2;
  }, c2 = u(e) ? e() : e;
  return c2.then((e2) => l("success", r, e2)).catch((e2) => l("error", a, e2)), c2;
}, B.success = A("success"), B.info = A("info"), B.error = A("error"), B.warning = A("warning"), B.warn = B.warning, B.dark = (e, t) => M(e, x("default", { theme: "dark", ...t })), B.dismiss = function(e) {
  !(function(e2) {
    var t;
    if (b()) {
      if (null == e2 || d(t = e2) || c(t)) v.forEach((t2) => {
        t2.removeToast(e2);
      });
      else if (e2 && ("containerId" in e2 || "id" in e2)) {
        const t2 = v.get(e2.containerId);
        t2 ? t2.removeToast(e2.id) : v.forEach((t3) => {
          t3.removeToast(e2.id);
        });
      }
    } else h = h.filter((t2) => null != e2 && t2.options.toastId !== e2);
  })(e);
}, B.clearWaitingQueue = function(e) {
  void 0 === e && (e = {}), v.forEach((t) => {
    !t.props.limit || e.containerId && t.id !== e.containerId || t.clearQueue();
  });
}, B.isActive = I, B.update = function(e, t) {
  void 0 === t && (t = {});
  const n = ((e2, t2) => {
    var n2;
    let { containerId: o } = t2;
    return null == (n2 = v.get(o || 1)) ? void 0 : n2.toasts.get(e2);
  })(e, t);
  if (n) {
    const { props: o, content: s } = n, a = { delay: 100, ...o, ...t, toastId: t.toastId || e, updateId: k() };
    a.toastId !== e && (a.staleId = e);
    const r = a.render || s;
    delete a.render, M(r, a);
  }
}, B.done = (e) => {
  B.update(e, { progress: 1 });
}, B.onChange = function(e) {
  return T.add(e), () => {
    T.delete(e);
  };
}, B.play = (e) => C(true, e), B.pause = (e) => C(false, e);
const O = "undefined" != typeof window ? reactExports.useLayoutEffect : reactExports.useEffect, D = (t) => {
  let { theme: n, type: o, isLoading: s, ...a } = t;
  return React.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: "colored" === n ? "currentColor" : `var(--toastify-icon-color-${o})`, ...a });
}, z = { info: function(t) {
  return React.createElement(D, { ...t }, React.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(t) {
  return React.createElement(D, { ...t }, React.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(t) {
  return React.createElement(D, { ...t }, React.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(t) {
  return React.createElement(D, { ...t }, React.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return React.createElement("div", { className: "Toastify__spinner" });
} }, R = (n) => {
  const { isRunning: o, preventExitTransition: s, toastRef: r, eventHandlers: i, playToast: c2 } = N(n), { closeButton: d2, children: p2, autoClose: m2, onClick: f2, type: g2, hideProgressBar: y2, closeToast: v2, transition: h2, position: T2, className: E2, style: b2, bodyClassName: I2, bodyStyle: _2, progressClassName: C2, progressStyle: L2, updateId: w2, role: k2, progress: P2, rtl: M2, toastId: x2, deleteToast: A2, isIn: B2, isLoading: O2, closeOnClick: D2, theme: R2 } = n, S2 = clsx("Toastify__toast", `Toastify__toast-theme--${R2}`, `Toastify__toast--${g2}`, { "Toastify__toast--rtl": M2 }, { "Toastify__toast--close-on-click": D2 }), H2 = u(E2) ? E2({ rtl: M2, position: T2, type: g2, defaultClassName: S2 }) : clsx(S2, E2), F = (function(e) {
    let { theme: n2, type: o2, isLoading: s2, icon: r2 } = e, i2 = null;
    const l = { theme: n2, type: o2 };
    return false === r2 || (u(r2) ? i2 = r2({ ...l, isLoading: s2 }) : reactExports.isValidElement(r2) ? i2 = reactExports.cloneElement(r2, l) : s2 ? i2 = z.spinner() : ((e2) => e2 in z)(o2) && (i2 = z[o2](l))), i2;
  })(n), X = !!P2 || !m2, Y = { closeToast: v2, type: g2, theme: R2 };
  let q2 = null;
  return false === d2 || (q2 = u(d2) ? d2(Y) : reactExports.isValidElement(d2) ? reactExports.cloneElement(d2, Y) : (function(t) {
    let { closeToast: n2, theme: o2, ariaLabel: s2 = "close" } = t;
    return React.createElement("button", { className: `Toastify__close-button Toastify__close-button--${o2}`, type: "button", onClick: (e) => {
      e.stopPropagation(), n2(e);
    }, "aria-label": s2 }, React.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, React.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
  })(Y)), React.createElement(h2, { isIn: B2, done: A2, position: T2, preventExitTransition: s, nodeRef: r, playToast: c2 }, React.createElement("div", { id: x2, onClick: f2, "data-in": B2, className: H2, ...i, style: b2, ref: r }, React.createElement("div", { ...B2 && { role: k2 }, className: u(I2) ? I2({ type: g2 }) : clsx("Toastify__toast-body", I2), style: _2 }, null != F && React.createElement("div", { className: clsx("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !O2 }) }, F), React.createElement("div", null, p2)), q2, React.createElement($, { ...w2 && !X ? { key: `pb-${w2}` } : {}, rtl: M2, theme: R2, delay: m2, isRunning: o, isIn: B2, closeToast: v2, hide: y2, type: g2, style: L2, className: C2, controlledProgress: X, progress: P2 || 0 })));
}, S = function(e, t) {
  return void 0 === t && (t = false), { enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: t };
}, H = g(S("bounce", true));
g(S("slide", true));
g(S("zoom"));
g(S("flip"));
const q = { position: "top-right", transition: H, autoClose: 5e3, closeButton: true, pauseOnHover: true, pauseOnFocusLoss: true, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
function Q(t) {
  let o = { ...q, ...t };
  const s = t.stacked, [a, r] = reactExports.useState(true), c2 = reactExports.useRef(null), { getToastToRender: d2, isToastActive: m2, count: f2 } = L(o), { className: g2, style: y2, rtl: v2, containerId: h2 } = o;
  function T2(e) {
    const t2 = clsx("Toastify__toast-container", `Toastify__toast-container--${e}`, { "Toastify__toast-container--rtl": v2 });
    return u(g2) ? g2({ position: e, rtl: v2, defaultClassName: t2 }) : clsx(t2, p(g2));
  }
  function E2() {
    s && (r(true), B.play());
  }
  return O(() => {
    if (s) {
      var e;
      const t2 = c2.current.querySelectorAll('[data-in="true"]'), n = 12, s2 = null == (e = o.position) ? void 0 : e.includes("top");
      let r2 = 0, i = 0;
      Array.from(t2).reverse().forEach((e2, t3) => {
        const o2 = e2;
        o2.classList.add("Toastify__toast--stacked"), t3 > 0 && (o2.dataset.collapsed = `${a}`), o2.dataset.pos || (o2.dataset.pos = s2 ? "top" : "bot");
        const l = r2 * (a ? 0.2 : 1) + (a ? 0 : n * t3);
        o2.style.setProperty("--y", `${s2 ? l : -1 * l}px`), o2.style.setProperty("--g", `${n}`), o2.style.setProperty("--s", "" + (1 - (a ? i : 0))), r2 += o2.offsetHeight, i += 0.025;
      });
    }
  }, [a, f2, s]), React.createElement("div", { ref: c2, className: "Toastify", id: h2, onMouseEnter: () => {
    s && (r(false), B.pause());
  }, onMouseLeave: E2 }, d2((t2, n) => {
    const o2 = n.length ? { ...y2 } : { ...y2, pointerEvents: "none" };
    return React.createElement("div", { className: T2(t2), style: o2, key: `container-${t2}` }, n.map((t3) => {
      let { content: n2, props: o3 } = t3;
      return React.createElement(R, { ...o3, stacked: s, collapseAll: E2, isIn: m2(o3.toastId, o3.containerId), style: o3.style, key: `toast-${o3.key}` }, n2);
    }));
  }));
}
const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const smartNavigate = useSmartNavigate(navigate);
  const [email, setEmail] = reactExports.useState("");
  const [isEmailValid, setIsEmailValid] = reactExports.useState(true);
  const [isOTPSent, setIsOTPSent] = reactExports.useState(false);
  const [otpFieldVisible, setOtpFieldVisible] = reactExports.useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = reactExports.useState(false);
  const [otpValidationStatus, setOtpValidationStatus] = reactExports.useState(false);
  const [debouncedEmail, setDebouncedEmail] = reactExports.useState("");
  const [isEmailRegistered, setIsEmailRegistered] = reactExports.useState(true);
  const [isOtpValid, setisOtpValid] = reactExports.useState(false);
  const [otp, setOtp] = reactExports.useState("");
  const [newPassword, setNewPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const getUserCheckAPI = "https://etalenterapi.azurewebsites.net/PublicJson/GetUserCheck";
  const activationAPI = "https://etalenterapi.azurewebsites.net/PublicJson/UsersActivation";
  const otpCheckAPI = "https://etalenterapi.azurewebsites.net/PublicJson/GetOTPCheck";
  const newPasswordOTPAPI = "https://etalenterapi.azurewebsites.net/PublicJson/UsersForgotPassword";
  const validateEmail = (email2) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email2);
  };
  const validateOTP = (otp2) => {
    return otp2.length === 6 && /^\d{6}$/.test(otp2);
  };
  reactExports.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedEmail(email);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [email]);
  reactExports.useEffect(() => {
    if (validateEmail(debouncedEmail)) {
      const formData = { Email: debouncedEmail };
      axios.post(getUserCheckAPI, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((response) => {
        if (response.data === true) {
          setIsEmailRegistered(true);
        } else {
          setIsEmailRegistered(false);
          B.error("This email ID is not registered with us.");
        }
      }).catch((error) => {
        console.error("Error checking user:", error);
        setIsEmailRegistered(false);
        B.error("Error checking user, please try again.");
      });
    } else {
      setIsEmailValid(false);
    }
  }, [debouncedEmail]);
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setOtpFieldVisible(false);
    setIsEmailValid(validateEmail(newEmail));
    setIsOTPSent(false);
  };
  const handleOTPRequest = () => {
    if (validateEmail(email)) {
      setIsButtonDisabled(true);
      B.success("OTP button will activate in 20 seconds.");
      setTimeout(() => {
        setIsButtonDisabled(false);
        B.success("OTP is sent to your email. Please check and fill the fields. Sometimes it may take a few seconds to receive the email, kindly wait. If not found, check the spam folder.");
      }, 2e4);
      const formData = { Email: email, isForgotPassword: true };
      axios.post(activationAPI, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((response) => {
        setIsOTPSent(true);
        setOtpFieldVisible(true);
      }).catch((error) => {
        console.error("Error sending OTP:", error);
        B.error("Failed to send OTP, please try again.");
        setIsButtonDisabled(false);
      });
    } else {
      B.error("Please enter a valid email address.");
    }
  };
  const handleOTPValidate = () => {
    if (validateOTP(otp)) {
      axios.post(
        otpCheckAPI,
        { Email: email, OTP: otp },
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      ).then((response) => {
        if (response.data === true) {
          setisOtpValid(true);
          B.success("OTP is valid.");
        } else {
          B.error("OTP is not valid.");
          setisOtpValid(false);
        }
      }).catch((error) => {
        console.error("Error validating OTP:", error);
        B.error("Invalid OTP. Please try again.");
        setisOtpValid(false);
      });
    } else {
      B.error("Please enter a valid 6-digit OTP.");
    }
  };
  const handleOTPChange = (e) => {
    const newOtp = e.target.value;
    setOtp(newOtp);
    setOtpValidationStatus(validateOTP(newOtp));
    if (otpValidationStatus) {
      handleOTPValidate();
    }
  };
  reactExports.useEffect(() => {
    if (otpValidationStatus) {
      handleOTPValidate();
    }
  }, [otpValidationStatus]);
  const submitNewPassword = () => {
    if (!email || !otp || !newPassword || !confirmPassword) {
      B.error("All fields are required.");
      return;
    }
    if (newPassword !== confirmPassword) {
      B.error("Passwords do not match.");
      return;
    }
    try {
      const header = {
        "Content-Type": "multipart/form-data"
      };
      axios.post(
        newPasswordOTPAPI,
        { Email: email, OTP: otp, Password: newPassword, confirmPassword },
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      ).then((response) => {
        if (response.data === true) {
          B.success("Password Changed.");
          smartNavigate("/Account/Login");
        } else {
          B.error("Password not Changed.");
          setisOtpValid(false);
        }
      }).catch((error) => {
        console.error("Error Changing Password:", error);
        B.error("Error Changing Password.");
        setisOtpValid(false);
      });
    } catch (error) {
      console.error("Unexpected error:", error);
      B.error("An unexpected error occurred. Please try again.");
      setisOtpValid(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg w-full max-w-md mx-auto mt-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-center mb-6 text-blue-800", children: "Forgot Password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-onSurface", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            id: "email",
            value: email,
            onChange: handleEmailChange,
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3",
            placeholder: "Enter your email",
            required: true
          }
        ),
        !isEmailValid && email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: "Please enter a valid email address." }),
        !isEmailRegistered && email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: "This email ID is not registered with us." })
      ] }),
      isEmailValid && isEmailRegistered && !isOTPSent && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleOTPRequest,
          type: "button",
          disabled: isButtonDisabled,
          className: "w-full py-2 px-4 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500",
          children: "Get OTP via Email"
        }
      ),
      otpFieldVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "otp", className: "block text-sm font-medium text-onSurface", children: "Enter OTP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            id: "otp",
            value: otp,
            onChange: handleOTPChange,
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3",
            placeholder: "Enter OTP"
          }
        ),
        " "
      ] }),
      otpValidationStatus && isOtpValid && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "newPassword", className: "block text-sm font-medium text-onSurface", children: "New Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "password",
              id: "newPassword",
              value: newPassword,
              onChange: (e) => setNewPassword(e.target.value),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3",
              placeholder: "Enter new password"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium text-onSurface", children: "Confirm Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "password",
              id: "confirmPassword",
              value: confirmPassword,
              onChange: (e) => setConfirmPassword(e.target.value),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3",
              placeholder: "Confirm new password"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: submitNewPassword, className: "w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700", children: "Change Password" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Q, {})
  ] });
};
export {
  ForgotPasswordPage as default
};
