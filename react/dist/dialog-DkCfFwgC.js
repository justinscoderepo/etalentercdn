import { t as requireReact, r as reactExports, k as React, R as React$1 } from "./main-B7w5eCOl.js";
import { c as o$3, s as s$3, u as u$4, o as o$4, n as n$3, l as l$2, d as s$4, t as t$2, Y, y as y$2, K, T as T$1, p as p$3, b as o$5, e as d$2, A as A$1, C as C$1, m as m$3, f as t$4, g as b$1, a as n$5 } from "./keyboard-Dku-r8UD.js";
import { n as n$4, i as i$3, u as u$5, r as r$3, l as l$3, t as t$3 } from "./dom-XjFFvgb6.js";
import { H, I as I$3, E as E$1, v as v$1, T as T$2, f as f$5, w as w$4, A } from "./use-is-mounted-DkvN6zYE.js";
import { f as f$4, s as s$5 } from "./hidden-tL6qlWMm.js";
import { u as u$6, i as i$4, N, x as x$3, c as c$4, s as s$6, C as C$2 } from "./open-closed-gVG0H0sE.js";
import { M as M$1, H as H$1 } from "./description-3iOOxFmG.js";
import { r as reactDomExports } from "./navigationUtils-BZC1EMRn.js";
var withSelector = { exports: {} };
var useSyncExternalStoreWithSelector_production = {};
var hasRequiredUseSyncExternalStoreWithSelector_production;
function requireUseSyncExternalStoreWithSelector_production() {
  if (hasRequiredUseSyncExternalStoreWithSelector_production) return useSyncExternalStoreWithSelector_production;
  hasRequiredUseSyncExternalStoreWithSelector_production = 1;
  var React2 = requireReact();
  function is(x2, y2) {
    return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React2.useSyncExternalStore, useRef = React2.useRef, useEffect = React2.useEffect, useMemo = React2.useMemo, useDebugValue = React2.useDebugValue;
  useSyncExternalStoreWithSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
    var instRef = useRef(null);
    if (null === instRef.current) {
      var inst = { hasValue: false, value: null };
      instRef.current = inst;
    } else inst = instRef.current;
    instRef = useMemo(
      function() {
        function memoizedSelector(nextSnapshot) {
          if (!hasMemo) {
            hasMemo = true;
            memoizedSnapshot = nextSnapshot;
            nextSnapshot = selector(nextSnapshot);
            if (void 0 !== isEqual && inst.hasValue) {
              var currentSelection = inst.value;
              if (isEqual(currentSelection, nextSnapshot))
                return memoizedSelection = currentSelection;
            }
            return memoizedSelection = nextSnapshot;
          }
          currentSelection = memoizedSelection;
          if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
          var nextSelection = selector(nextSnapshot);
          if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
            return memoizedSnapshot = nextSnapshot, currentSelection;
          memoizedSnapshot = nextSnapshot;
          return memoizedSelection = nextSelection;
        }
        var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
        return [
          function() {
            return memoizedSelector(getSnapshot());
          },
          null === maybeGetServerSnapshot ? void 0 : function() {
            return memoizedSelector(maybeGetServerSnapshot());
          }
        ];
      },
      [getSnapshot, getServerSnapshot, selector, isEqual]
    );
    var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
    useEffect(
      function() {
        inst.hasValue = true;
        inst.value = value;
      },
      [value]
    );
    useDebugValue(value);
    return value;
  };
  return useSyncExternalStoreWithSelector_production;
}
var hasRequiredWithSelector;
function requireWithSelector() {
  if (hasRequiredWithSelector) return withSelector.exports;
  hasRequiredWithSelector = 1;
  {
    withSelector.exports = requireUseSyncExternalStoreWithSelector_production();
  }
  return withSelector.exports;
}
var withSelectorExports = requireWithSelector();
let a$7 = class a extends Map {
  constructor(t2) {
    super();
    this.factory = t2;
  }
  get(t2) {
    let e2 = super.get(t2);
    return e2 === void 0 && (e2 = this.factory(t2), this.set(t2, e2)), e2;
  }
};
var h$1 = Object.defineProperty;
var v = (t2, e2, r2) => e2 in t2 ? h$1(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var S$3 = (t2, e2, r2) => (v(t2, e2 + "", r2), r2), b = (t2, e2, r2) => {
  if (!e2.has(t2)) throw TypeError("Cannot " + r2);
};
var i$2 = (t2, e2, r2) => (b(t2, e2, "read from private field"), r2 ? r2.call(t2) : e2.get(t2)), c$3 = (t2, e2, r2) => {
  if (e2.has(t2)) throw TypeError("Cannot add the same private member more than once");
  e2 instanceof WeakSet ? e2.add(t2) : e2.set(t2, r2);
}, u$3 = (t2, e2, r2, s2) => (b(t2, e2, "write to private field"), e2.set(t2, r2), r2);
var n$2, a$6, o$2;
class T {
  constructor(e2) {
    c$3(this, n$2, {});
    c$3(this, a$6, new a$7(() => /* @__PURE__ */ new Set()));
    c$3(this, o$2, /* @__PURE__ */ new Set());
    S$3(this, "disposables", o$3());
    u$3(this, n$2, e2), s$3.isServer && this.disposables.microTask(() => {
      this.dispose();
    });
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return i$2(this, n$2);
  }
  subscribe(e2, r2) {
    if (s$3.isServer) return () => {
    };
    let s2 = { selector: e2, callback: r2, current: e2(i$2(this, n$2)) };
    return i$2(this, o$2).add(s2), this.disposables.add(() => {
      i$2(this, o$2).delete(s2);
    });
  }
  on(e2, r2) {
    return s$3.isServer ? () => {
    } : (i$2(this, a$6).get(e2).add(r2), this.disposables.add(() => {
      i$2(this, a$6).get(e2).delete(r2);
    }));
  }
  send(e2) {
    let r2 = this.reduce(i$2(this, n$2), e2);
    if (r2 !== i$2(this, n$2)) {
      u$3(this, n$2, r2);
      for (let s2 of i$2(this, o$2)) {
        let l2 = s2.selector(i$2(this, n$2));
        j$2(s2.current, l2) || (s2.current = l2, s2.callback(l2));
      }
      for (let s2 of i$2(this, a$6).get(e2.type)) s2(i$2(this, n$2), e2);
    }
  }
}
n$2 = /* @__PURE__ */ new WeakMap(), a$6 = /* @__PURE__ */ new WeakMap(), o$2 = /* @__PURE__ */ new WeakMap();
function j$2(t2, e2) {
  return Object.is(t2, e2) ? true : typeof t2 != "object" || t2 === null || typeof e2 != "object" || e2 === null ? false : Array.isArray(t2) && Array.isArray(e2) ? t2.length !== e2.length ? false : f$3(t2[Symbol.iterator](), e2[Symbol.iterator]()) : t2 instanceof Map && e2 instanceof Map || t2 instanceof Set && e2 instanceof Set ? t2.size !== e2.size ? false : f$3(t2.entries(), e2.entries()) : p$2(t2) && p$2(e2) ? f$3(Object.entries(t2)[Symbol.iterator](), Object.entries(e2)[Symbol.iterator]()) : false;
}
function f$3(t2, e2) {
  do {
    let r2 = t2.next(), s2 = e2.next();
    if (r2.done && s2.done) return true;
    if (r2.done || s2.done || !Object.is(r2.value, s2.value)) return false;
  } while (true);
}
function p$2(t2) {
  if (Object.prototype.toString.call(t2) !== "[object Object]") return false;
  let e2 = Object.getPrototypeOf(t2);
  return e2 === null || Object.getPrototypeOf(e2) === null;
}
var a$5 = Object.defineProperty;
var r$2 = (e2, c2, t2) => c2 in e2 ? a$5(e2, c2, { enumerable: true, configurable: true, writable: true, value: t2 }) : e2[c2] = t2;
var p$1 = (e2, c2, t2) => (r$2(e2, typeof c2 != "symbol" ? c2 + "" : c2, t2), t2);
var k$1 = ((t2) => (t2[t2.Push = 0] = "Push", t2[t2.Pop = 1] = "Pop", t2))(k$1 || {});
let y$1 = { [0](e2, c2) {
  let t2 = c2.id, s2 = e2.stack, i2 = e2.stack.indexOf(t2);
  if (i2 !== -1) {
    let n2 = e2.stack.slice();
    return n2.splice(i2, 1), n2.push(t2), s2 = n2, { ...e2, stack: s2 };
  }
  return { ...e2, stack: [...e2.stack, t2] };
}, [1](e2, c2) {
  let t2 = c2.id, s2 = e2.stack.indexOf(t2);
  if (s2 === -1) return e2;
  let i2 = e2.stack.slice();
  return i2.splice(s2, 1), { ...e2, stack: i2 };
} };
let o$1 = class o extends T {
  constructor() {
    super(...arguments);
    p$1(this, "actions", { push: (t2) => this.send({ type: 0, id: t2 }), pop: (t2) => this.send({ type: 1, id: t2 }) });
    p$1(this, "selectors", { isTop: (t2, s2) => t2.stack[t2.stack.length - 1] === s2, inStack: (t2, s2) => t2.stack.includes(s2) });
  }
  static new() {
    return new o({ stack: [] });
  }
  reduce(t2, s2) {
    return u$4(s2.type, y$1, t2, s2);
  }
};
const x$2 = new a$7(() => o$1.new());
function S$2(e2, n2, r2 = j$2) {
  return withSelectorExports.useSyncExternalStoreWithSelector(o$4((i2) => e2.subscribe(s$2, i2)), o$4(() => e2.state), o$4(() => e2.state), o$4(n2), r2);
}
function s$2(e2) {
  return e2;
}
function I$2(o3, s2) {
  let t2 = reactExports.useId(), r2 = x$2.get(s2), [i2, c2] = S$2(r2, reactExports.useCallback((e2) => [r2.selectors.isTop(e2, t2), r2.selectors.inStack(e2, t2)], [r2, t2]));
  return n$3(() => {
    if (o3) return r2.actions.push(t2), () => r2.actions.pop(t2);
  }, [r2, o3, t2]), o3 ? c2 ? i2 : true : false;
}
let f$2 = /* @__PURE__ */ new Map(), u$2 = /* @__PURE__ */ new Map();
function h(t2) {
  var e2;
  let r2 = (e2 = u$2.get(t2)) != null ? e2 : 0;
  return u$2.set(t2, r2 + 1), r2 !== 0 ? () => m$2(t2) : (f$2.set(t2, { "aria-hidden": t2.getAttribute("aria-hidden"), inert: t2.inert }), t2.setAttribute("aria-hidden", "true"), t2.inert = true, () => m$2(t2));
}
function m$2(t2) {
  var i2;
  let r2 = (i2 = u$2.get(t2)) != null ? i2 : 1;
  if (r2 === 1 ? u$2.delete(t2) : u$2.set(t2, r2 - 1), r2 !== 1) return;
  let e2 = f$2.get(t2);
  e2 && (e2["aria-hidden"] === null ? t2.removeAttribute("aria-hidden") : t2.setAttribute("aria-hidden", e2["aria-hidden"]), t2.inert = e2.inert, f$2.delete(t2));
}
function y(t2, { allowed: r2, disallowed: e2 } = {}) {
  let i2 = I$2(t2, "inert-others");
  n$3(() => {
    var d2, c2;
    if (!i2) return;
    let a3 = o$3();
    for (let n2 of (d2 = e2 == null ? void 0 : e2()) != null ? d2 : []) n2 && a3.add(h(n2));
    let s2 = (c2 = r2 == null ? void 0 : r2()) != null ? c2 : [];
    for (let n2 of s2) {
      if (!n2) continue;
      let l2 = l$2(n2);
      if (!l2) continue;
      let o3 = n2.parentElement;
      for (; o3 && o3 !== l2.body; ) {
        for (let p2 of o3.children) s2.some((E2) => p2.contains(E2)) || a3.add(h(p2));
        o3 = o3.parentElement;
      }
    }
    return a3.dispose;
  }, [i2, r2, e2]);
}
function p(s2, n2, o3) {
  let i2 = s$4((t2) => {
    let e2 = t2.getBoundingClientRect();
    e2.x === 0 && e2.y === 0 && e2.width === 0 && e2.height === 0 && o3();
  });
  reactExports.useEffect(() => {
    if (!s2) return;
    let t2 = n2 === null ? null : n$4(n2) ? n2 : n2.current;
    if (!t2) return;
    let e2 = o$3();
    if (typeof ResizeObserver != "undefined") {
      let r2 = new ResizeObserver(() => i2.current(t2));
      r2.observe(t2), e2.add(() => r2.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r2 = new IntersectionObserver(() => i2.current(t2));
      r2.observe(t2), e2.add(() => r2.disconnect());
    }
    return () => e2.dispose();
  }, [n2, i2, s2]);
}
function t$1() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i$1() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n$1() {
  return t$1() || i$1();
}
function i(t2, e2, o3, n2) {
  let u2 = s$4(o3);
  reactExports.useEffect(() => {
    if (!t2) return;
    function r2(m2) {
      u2.current(m2);
    }
    return document.addEventListener(e2, r2, n2), () => document.removeEventListener(e2, r2, n2);
  }, [t2, e2, n2]);
}
function s$1(t2, e2, o3, n2) {
  let i2 = s$4(o3);
  reactExports.useEffect(() => {
    if (!t2) return;
    function r2(d2) {
      i2.current(d2);
    }
    return window.addEventListener(e2, r2, n2), () => window.removeEventListener(e2, r2, n2);
  }, [t2, e2, n2]);
}
const C = 30;
function k(o3, f2, h2) {
  let m2 = s$4(h2), s2 = reactExports.useCallback(function(e2, c2) {
    if (e2.defaultPrevented) return;
    let r2 = c2(e2);
    if (r2 === null || !r2.getRootNode().contains(r2) || !r2.isConnected) return;
    let M2 = (function u2(n2) {
      return typeof n2 == "function" ? u2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    })(f2);
    for (let u2 of M2) if (u2 !== null && (u2.contains(r2) || e2.composed && e2.composedPath().includes(u2))) return;
    return !H(r2, I$3.Loose) && r2.tabIndex !== -1 && e2.preventDefault(), m2.current(e2, r2);
  }, [m2, f2]), i$12 = reactExports.useRef(null);
  i(o3, "pointerdown", (t2) => {
    var e2, c2;
    n$1() || (i$12.current = ((c2 = (e2 = t2.composedPath) == null ? void 0 : e2.call(t2)) == null ? void 0 : c2[0]) || t2.target);
  }, true), i(o3, "pointerup", (t2) => {
    if (n$1() || !i$12.current) return;
    let e2 = i$12.current;
    return i$12.current = null, s2(t2, () => e2);
  }, true);
  let l2 = reactExports.useRef({ x: 0, y: 0 });
  i(o3, "touchstart", (t2) => {
    l2.current.x = t2.touches[0].clientX, l2.current.y = t2.touches[0].clientY;
  }, true), i(o3, "touchend", (t2) => {
    let e2 = { x: t2.changedTouches[0].clientX, y: t2.changedTouches[0].clientY };
    if (!(Math.abs(e2.x - l2.current.x) >= C || Math.abs(e2.y - l2.current.y) >= C)) return s2(t2, () => i$3(t2.target) ? t2.target : null);
  }, true), s$1(o3, "blur", (t2) => s2(t2, () => u$5(window.document.activeElement) ? window.document.activeElement : null), true);
}
function u$1(...e2) {
  return reactExports.useMemo(() => l$2(...e2), [...e2]);
}
function E(n2, e2, a3, t2) {
  let i2 = s$4(a3);
  reactExports.useEffect(() => {
    n2 = n2 != null ? n2 : window;
    function r2(o3) {
      i2.current(o3);
    }
    return n2.addEventListener(e2, r2, t2), () => n2.removeEventListener(e2, r2, t2);
  }, [n2, e2, t2]);
}
function o2(t2) {
  return reactExports.useSyncExternalStore(t2.subscribe, t2.getSnapshot, t2.getSnapshot);
}
function a$4(o3, r2) {
  let t2 = o3(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s2) {
    let i2 = r2[e2].call(t2, ...s2);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function d$1() {
  let r2;
  return { before({ doc: e2 }) {
    var l2;
    let o3 = e2.documentElement, t2 = (l2 = e2.defaultView) != null ? l2 : window;
    r2 = Math.max(0, t2.innerWidth - o3.clientWidth);
  }, after({ doc: e2, d: o3 }) {
    let t2 = e2.documentElement, l2 = Math.max(0, t2.clientWidth - t2.offsetWidth), n2 = Math.max(0, r2 - l2);
    o3.style(t2, "paddingRight", `${n2}px`);
  } };
}
function w$3() {
  return t$1() ? { before({ doc: o3, d: r2, meta: m2 }) {
    function a3(s2) {
      for (let l2 of m2().containers) for (let c2 of l2()) if (c2.contains(s2)) return true;
      return false;
    }
    r2.microTask(() => {
      var c2;
      if (window.getComputedStyle(o3.documentElement).scrollBehavior !== "auto") {
        let t2 = o$3();
        t2.style(o3.documentElement, "scrollBehavior", "auto"), r2.add(() => r2.microTask(() => t2.dispose()));
      }
      let s2 = (c2 = window.scrollY) != null ? c2 : window.pageYOffset, l2 = null;
      r2.addEventListener(o3, "click", (t2) => {
        if (i$3(t2.target)) try {
          let e2 = t2.target.closest("a");
          if (!e2) return;
          let { hash: n2 } = new URL(e2.href), f2 = o3.querySelector(n2);
          i$3(f2) && !a3(f2) && (l2 = f2);
        } catch {
        }
      }, true), r2.group((t2) => {
        r2.addEventListener(o3, "touchstart", (e2) => {
          if (t2.dispose(), i$3(e2.target) && r$3(e2.target)) if (a3(e2.target)) {
            let n2 = e2.target;
            for (; n2.parentElement && a3(n2.parentElement); ) n2 = n2.parentElement;
            t2.style(n2, "overscrollBehavior", "contain");
          } else t2.style(e2.target, "touchAction", "none");
        });
      }), r2.addEventListener(o3, "touchmove", (t2) => {
        if (i$3(t2.target)) {
          if (l$3(t2.target)) return;
          if (a3(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); ) e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else t2.preventDefault();
        }
      }, { passive: false }), r2.add(() => {
        var e2;
        let t2 = (e2 = window.scrollY) != null ? e2 : window.pageYOffset;
        s2 !== t2 && window.scrollTo(0, s2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function r$1() {
  return { before({ doc: e2, d: o3 }) {
    o3.style(e2.documentElement, "overflow", "hidden");
  } };
}
function r(e2) {
  let o3 = {};
  for (let t2 of e2) Object.assign(o3, t2(o3));
  return o3;
}
let c$2 = a$4(() => /* @__PURE__ */ new Map(), { PUSH(e2, o3) {
  var n2;
  let t2 = (n2 = this.get(e2)) != null ? n2 : { doc: e2, count: 0, d: o$3(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
  return t2.count++, t2.meta.add(o3), t2.computedMeta = r(t2.meta), this.set(e2, t2), this;
}, POP(e2, o3) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(o3), t2.computedMeta = r(t2.meta)), this;
}, SCROLL_PREVENT(e2) {
  let o3 = { doc: e2.doc, d: e2.d, meta() {
    return e2.computedMeta;
  } }, t2 = [w$3(), d$1(), r$1()];
  t2.forEach(({ before: n2 }) => n2 == null ? void 0 : n2(o3)), t2.forEach(({ after: n2 }) => n2 == null ? void 0 : n2(o3));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
c$2.subscribe(() => {
  let e2 = c$2.getSnapshot(), o3 = /* @__PURE__ */ new Map();
  for (let [t2] of e2) o3.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let n2 = o3.get(t2.doc) === "hidden", a3 = t2.count !== 0;
    (a3 && !n2 || !a3 && n2) && c$2.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && c$2.dispatch("TEARDOWN", t2);
  }
});
function a$3(r2, e2, n2 = () => ({ containers: [] })) {
  let f2 = o2(c$2), o$12 = e2 ? f2.get(e2) : void 0, i2 = o$12 ? o$12.count > 0 : false;
  return n$3(() => {
    if (!(!e2 || !r2)) return c$2.dispatch("PUSH", e2, n2), () => c$2.dispatch("POP", e2, n2);
  }, [r2, e2]), i2;
}
function f$1(e2, c2, n2 = () => [document.body]) {
  let r2 = I$2(e2, "scroll-lock");
  a$3(r2, c2, (t2) => {
    var o3;
    return { containers: [...(o3 = t2.containers) != null ? o3 : [], n2] };
  });
}
function m$1(u2, t2) {
  let e2 = reactExports.useRef([]), r2 = o$4(u2);
  reactExports.useEffect(() => {
    let o3 = [...e2.current];
    for (let [a3, l2] of t2.entries()) if (e2.current[a3] !== l2) {
      let n2 = r2(t2, o3);
      return e2.current = t2, n2;
    }
  }, [r2, ...t2]);
}
function t(n2) {
  function e2() {
    document.readyState !== "loading" && (n2(), document.removeEventListener("DOMContentLoaded", e2));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e2), e2());
}
let n = [];
t(() => {
  function e2(t2) {
    if (!i$3(t2.target) || t2.target === document.body || n[0] === t2.target) return;
    let r2 = t2.target;
    r2 = r2.closest(E$1), n.unshift(r2 != null ? r2 : t2.target), n = n.filter((o3) => o3 != null && o3.isConnected), n.splice(10);
  }
  window.addEventListener("click", e2, { capture: true }), window.addEventListener("mousedown", e2, { capture: true }), window.addEventListener("focus", e2, { capture: true }), document.body.addEventListener("click", e2, { capture: true }), document.body.addEventListener("mousedown", e2, { capture: true }), document.body.addEventListener("focus", e2, { capture: true });
});
function c$1(t2) {
  let r2 = o$4(t2), e2 = reactExports.useRef(false);
  reactExports.useEffect(() => (e2.current = false, () => {
    e2.current = true, t$2(() => {
      e2.current && r2();
    });
  }), [r2]);
}
let e = reactExports.createContext(false);
function a$2() {
  return reactExports.useContext(e);
}
function l$1(o3) {
  return React.createElement(e.Provider, { value: o3.force }, o3.children);
}
function W(e2) {
  let o3 = a$2(), l2 = reactExports.useContext(c), [r2, p2] = reactExports.useState(() => {
    var s2;
    if (!o3 && l2 !== null) return (s2 = l2.current) != null ? s2 : null;
    if (s$3.isServer) return null;
    let t2 = e2 == null ? void 0 : e2.getElementById("headlessui-portal-root");
    if (t2) return t2;
    if (e2 === null) return null;
    let n2 = e2.createElement("div");
    return n2.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(n2);
  });
  return reactExports.useEffect(() => {
    r2 !== null && (e2 != null && e2.body.contains(r2) || e2 == null || e2.body.appendChild(r2));
  }, [r2, e2]), reactExports.useEffect(() => {
    o3 || l2 !== null && p2(l2.current);
  }, [l2, p2, o3]), r2;
}
let _ = reactExports.Fragment, j$1 = Y(function(o3, l2) {
  let { ownerDocument: r2 = null, ...p2 } = o3, t2 = reactExports.useRef(null), n2 = y$2(T$1((a3) => {
    t2.current = a3;
  }), l2), s2 = u$1(t2.current), C2 = r2 != null ? r2 : s2, u2 = W(C2), y2 = reactExports.useContext(m), g = p$3(), v2 = K();
  return c$1(() => {
    var a3;
    u2 && u2.childNodes.length <= 0 && ((a3 = u2.parentElement) == null || a3.removeChild(u2));
  }), u2 ? reactDomExports.createPortal(React.createElement("div", { "data-headlessui-portal": "", ref: (a3) => {
    g.dispose(), y2 && a3 && g.add(y2.register(a3));
  } }, v2({ ourProps: { ref: n2 }, theirProps: p2, slot: {}, defaultTag: _, name: "Portal" })), u2) : null;
});
function S$1(e2, o3) {
  let l2 = y$2(o3), { enabled: r2 = true, ownerDocument: p2, ...t2 } = e2, n2 = K();
  return r2 ? React.createElement(j$1, { ...t2, ownerDocument: p2, ref: l2 }) : n2({ ourProps: { ref: l2 }, theirProps: t2, slot: {}, defaultTag: _, name: "Portal" });
}
let I$1 = reactExports.Fragment, c = reactExports.createContext(null);
function D(e2, o3) {
  let { target: l2, ...r2 } = e2, t2 = { ref: y$2(o3) }, n2 = K();
  return React.createElement(c.Provider, { value: l2 }, n2({ ourProps: t2, theirProps: r2, defaultTag: I$1, name: "Popover.Group" }));
}
let m = reactExports.createContext(null);
function ee$1() {
  let e2 = reactExports.useContext(m), o3 = reactExports.useRef([]), l2 = o$4((t2) => (o3.current.push(t2), e2 && e2.register(t2), () => r2(t2))), r2 = o$4((t2) => {
    let n2 = o3.current.indexOf(t2);
    n2 !== -1 && o3.current.splice(n2, 1), e2 && e2.unregister(t2);
  }), p2 = reactExports.useMemo(() => ({ register: l2, unregister: r2, portals: o3 }), [l2, r2, o3]);
  return [o3, reactExports.useMemo(() => function({ children: n2 }) {
    return React.createElement(m.Provider, { value: p2 }, n2);
  }, [p2])];
}
let J = Y(S$1), X$1 = Y(D), te$1 = Object.assign(J, { Group: X$1 });
function a$1(o3, r2 = typeof document != "undefined" ? document.defaultView : null, t2) {
  let n2 = I$2(o3, "escape");
  E(r2, "keydown", (e2) => {
    n2 && (e2.defaultPrevented || e2.key === o$5.Escape && t2(e2));
  });
}
function f() {
  var t2;
  let [e2] = reactExports.useState(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o3, c2] = reactExports.useState((t2 = e2 == null ? void 0 : e2.matches) != null ? t2 : false);
  return n$3(() => {
    if (!e2) return;
    function n2(r2) {
      c2(r2.matches);
    }
    return e2.addEventListener("change", n2), () => e2.removeEventListener("change", n2);
  }, [e2]), o3;
}
function S({ defaultContainers: l2 = [], portals: n2, mainTreeNode: o3 } = {}) {
  let c2 = o$4(() => {
    var r2, u2;
    let i2 = l$2(o3), t2 = [];
    for (let e2 of l2) e2 !== null && (t$3(e2) ? t2.push(e2) : "current" in e2 && t$3(e2.current) && t2.push(e2.current));
    if (n2 != null && n2.current) for (let e2 of n2.current) t2.push(e2);
    for (let e2 of (r2 = i2 == null ? void 0 : i2.querySelectorAll("html > *, body > *")) != null ? r2 : []) e2 !== document.body && e2 !== document.head && t$3(e2) && e2.id !== "headlessui-portal-root" && (o3 && (e2.contains(o3) || e2.contains((u2 = o3 == null ? void 0 : o3.getRootNode()) == null ? void 0 : u2.host)) || t2.some((E2) => e2.contains(E2)) || t2.push(e2));
    return t2;
  });
  return { resolveContainers: c2, contains: o$4((i2) => c2().some((t2) => t2.contains(i2))) };
}
let d = reactExports.createContext(null);
function j({ children: l2, node: n2 }) {
  let [o3, c2] = reactExports.useState(null), i2 = x$1(n2 != null ? n2 : o3);
  return React.createElement(d.Provider, { value: i2 }, l2, i2 === null && React.createElement(f$4, { features: s$5.Hidden, ref: (t2) => {
    var r2, u2;
    if (t2) {
      for (let e2 of (u2 = (r2 = l$2(t2)) == null ? void 0 : r2.querySelectorAll("html > *, body > *")) != null ? u2 : []) if (e2 !== document.body && e2 !== document.head && t$3(e2) && e2 != null && e2.contains(t2)) {
        c2(e2);
        break;
      }
    }
  } }));
}
function x$1(l2 = null) {
  var n2;
  return (n2 = reactExports.useContext(d)) != null ? n2 : l2;
}
function s() {
  let r2 = typeof document == "undefined";
  return "useSyncExternalStore" in React$1 ? ((o3) => o3.useSyncExternalStore)(React$1)(() => () => {
  }, () => false, () => !r2) : false;
}
function l() {
  let r2 = s(), [e2, n2] = reactExports.useState(s$3.isHandoffComplete);
  return e2 && s$3.isHandoffComplete === false && n2(false), reactExports.useEffect(() => {
    e2 !== true && n2(true);
  }, [e2]), reactExports.useEffect(() => s$3.handoff(), []), r2 ? false : e2;
}
var a2 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(a2 || {});
function u() {
  let e2 = reactExports.useRef(0);
  return s$1(true, "keydown", (r2) => {
    r2.key === "Tab" && (e2.current = r2.shiftKey ? 1 : 0);
  }, true), e2;
}
function x(o3) {
  if (!o3) return /* @__PURE__ */ new Set();
  if (typeof o3 == "function") return new Set(o3());
  let t2 = /* @__PURE__ */ new Set();
  for (let e2 of o3.current) t$3(e2.current) && t2.add(e2.current);
  return t2;
}
let $ = "div";
var G = ((n2) => (n2[n2.None = 0] = "None", n2[n2.InitialFocus = 1] = "InitialFocus", n2[n2.TabLock = 2] = "TabLock", n2[n2.FocusLock = 4] = "FocusLock", n2[n2.RestoreFocus = 8] = "RestoreFocus", n2[n2.AutoFocus = 16] = "AutoFocus", n2))(G || {});
function w$2(o3, t2) {
  let e2 = reactExports.useRef(null), r2 = y$2(e2, t2), { initialFocus: u$22, initialFocusFallback: a$12, containers: n2, features: s2 = 15, ...f2 } = o3;
  l() || (s2 = 0);
  let l$12 = u$1(e2.current);
  re(s2, { ownerDocument: l$12 });
  let T2 = ne(s2, { ownerDocument: l$12, container: e2, initialFocus: u$22, initialFocusFallback: a$12 });
  oe(s2, { ownerDocument: l$12, container: e2, containers: n2, previousActiveElement: T2 });
  let g = u(), A2 = o$4((c2) => {
    if (!n$4(e2.current)) return;
    let E2 = e2.current;
    ((V2) => V2())(() => {
      u$4(g.current, { [a2.Forwards]: () => {
        v$1(E2, T$2.First, { skipElements: [c2.relatedTarget, a$12] });
      }, [a2.Backwards]: () => {
        v$1(E2, T$2.Last, { skipElements: [c2.relatedTarget, a$12] });
      } });
    });
  }), v2 = I$2(!!(s2 & 2), "focus-trap#tab-lock"), N2 = p$3(), b2 = reactExports.useRef(false), k2 = { ref: r2, onKeyDown(c2) {
    c2.key == "Tab" && (b2.current = true, N2.requestAnimationFrame(() => {
      b2.current = false;
    }));
  }, onBlur(c2) {
    if (!(s2 & 4)) return;
    let E2 = x(n2);
    n$4(e2.current) && E2.add(e2.current);
    let L = c2.relatedTarget;
    i$3(L) && L.dataset.headlessuiFocusGuard !== "true" && (I(E2, L) || (b2.current ? v$1(e2.current, u$4(g.current, { [a2.Forwards]: () => T$2.Next, [a2.Backwards]: () => T$2.Previous }) | T$2.WrapAround, { relativeTo: c2.target }) : i$3(c2.target) && w$4(c2.target)));
  } }, B = K();
  return React.createElement(React.Fragment, null, v2 && React.createElement(f$4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: A2, features: s$5.Focusable }), B({ ourProps: k2, theirProps: f2, defaultTag: $, name: "FocusTrap" }), v2 && React.createElement(f$4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: A2, features: s$5.Focusable }));
}
let ee = Y(w$2), ge = Object.assign(ee, { features: G });
function te(o3 = true) {
  let t2 = reactExports.useRef(n.slice());
  return m$1(([e2], [r2]) => {
    r2 === true && e2 === false && t$2(() => {
      t2.current.splice(0);
    }), r2 === false && e2 === true && (t2.current = n.slice());
  }, [o3, n, t2]), o$4(() => {
    var e2;
    return (e2 = t2.current.find((r2) => r2 != null && r2.isConnected)) != null ? e2 : null;
  });
}
function re(o3, { ownerDocument: t2 }) {
  let e2 = !!(o3 & 8), r2 = te(e2);
  m$1(() => {
    e2 || d$2(t2 == null ? void 0 : t2.body) && w$4(r2());
  }, [e2]), c$1(() => {
    e2 && w$4(r2());
  });
}
function ne(o3, { ownerDocument: t2, container: e2, initialFocus: r2, initialFocusFallback: u2 }) {
  let a3 = reactExports.useRef(null), n2 = I$2(!!(o3 & 1), "focus-trap#initial-focus"), s2 = f$5();
  return m$1(() => {
    if (o3 === 0) return;
    if (!n2) {
      u2 != null && u2.current && w$4(u2.current);
      return;
    }
    let f2 = e2.current;
    f2 && t$2(() => {
      if (!s2.current) return;
      let l2 = t2 == null ? void 0 : t2.activeElement;
      if (r2 != null && r2.current) {
        if ((r2 == null ? void 0 : r2.current) === l2) {
          a3.current = l2;
          return;
        }
      } else if (f2.contains(l2)) {
        a3.current = l2;
        return;
      }
      if (r2 != null && r2.current) w$4(r2.current);
      else {
        if (o3 & 16) {
          if (v$1(f2, T$2.First | T$2.AutoFocus) !== A.Error) return;
        } else if (v$1(f2, T$2.First) !== A.Error) return;
        if (u2 != null && u2.current && (w$4(u2.current), (t2 == null ? void 0 : t2.activeElement) === u2.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a3.current = t2 == null ? void 0 : t2.activeElement;
    });
  }, [u2, n2, o3]), a3;
}
function oe(o3, { ownerDocument: t2, container: e2, containers: r2, previousActiveElement: u2 }) {
  let a3 = f$5(), n2 = !!(o3 & 4);
  E(t2 == null ? void 0 : t2.defaultView, "focus", (s2) => {
    if (!n2 || !a3.current) return;
    let f2 = x(r2);
    n$4(e2.current) && f2.add(e2.current);
    let l2 = u2.current;
    if (!l2) return;
    let T2 = s2.target;
    n$4(T2) ? I(f2, T2) ? (u2.current = T2, w$4(T2)) : (s2.preventDefault(), s2.stopPropagation(), w$4(l2)) : w$4(u2.current);
  }, true);
}
function I(o3, t2) {
  for (let e2 of o3) if (e2.contains(t2)) return true;
  return false;
}
function ue(e2) {
  var t2;
  return !!(e2.enter || e2.enterFrom || e2.enterTo || e2.leave || e2.leaveFrom || e2.leaveTo) || !b$1((t2 = e2.as) != null ? t2 : de) || React.Children.count(e2.children) === 1;
}
let V = reactExports.createContext(null);
V.displayName = "TransitionContext";
var De = ((n2) => (n2.Visible = "visible", n2.Hidden = "hidden", n2))(De || {});
function He$1() {
  let e2 = reactExports.useContext(V);
  if (e2 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e2;
}
function Ae() {
  let e2 = reactExports.useContext(w$1);
  if (e2 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e2;
}
let w$1 = reactExports.createContext(null);
w$1.displayName = "NestingContext";
function M(e2) {
  return "children" in e2 ? M(e2.children) : e2.current.filter(({ el: t2 }) => t2.current !== null).filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Te(e2, t2) {
  let n2 = s$4(e2), l2 = reactExports.useRef([]), S2 = f$5(), R = p$3(), d2 = o$4((o3, i2 = C$1.Hidden) => {
    let a3 = l2.current.findIndex(({ el: s2 }) => s2 === o3);
    a3 !== -1 && (u$4(i2, { [C$1.Unmount]() {
      l2.current.splice(a3, 1);
    }, [C$1.Hidden]() {
      l2.current[a3].state = "hidden";
    } }), R.microTask(() => {
      var s2;
      !M(l2) && S2.current && ((s2 = n2.current) == null || s2.call(n2));
    }));
  }), y2 = o$4((o3) => {
    let i2 = l2.current.find(({ el: a3 }) => a3 === o3);
    return i2 ? i2.state !== "visible" && (i2.state = "visible") : l2.current.push({ el: o3, state: "visible" }), () => d2(o3, C$1.Unmount);
  }), C2 = reactExports.useRef([]), p2 = reactExports.useRef(Promise.resolve()), h2 = reactExports.useRef({ enter: [], leave: [] }), g = o$4((o3, i2, a3) => {
    C2.current.splice(0), t2 && (t2.chains.current[i2] = t2.chains.current[i2].filter(([s2]) => s2 !== o3)), t2 == null || t2.chains.current[i2].push([o3, new Promise((s2) => {
      C2.current.push(s2);
    })]), t2 == null || t2.chains.current[i2].push([o3, new Promise((s2) => {
      Promise.all(h2.current[i2].map(([r2, f2]) => f2)).then(() => s2());
    })]), i2 === "enter" ? p2.current = p2.current.then(() => t2 == null ? void 0 : t2.wait.current).then(() => a3(i2)) : a3(i2);
  }), v2 = o$4((o3, i2, a3) => {
    Promise.all(h2.current[i2].splice(0).map(([s2, r2]) => r2)).then(() => {
      var s2;
      (s2 = C2.current.shift()) == null || s2();
    }).then(() => a3(i2));
  });
  return reactExports.useMemo(() => ({ children: l2, register: y2, unregister: d2, onStart: g, onStop: v2, wait: p2, chains: h2 }), [y2, d2, l2, g, v2, h2, p2]);
}
let de = reactExports.Fragment, fe = A$1.RenderStrategy;
function Fe(e2, t2) {
  var ee2, te2;
  let { transition: n2 = true, beforeEnter: l$12, afterEnter: S2, beforeLeave: R, afterLeave: d2, enter: y2, enterFrom: C2, enterTo: p2, entered: h2, leave: g, leaveFrom: v2, leaveTo: o3, ...i2 } = e2, [a3, s2] = reactExports.useState(null), r2 = reactExports.useRef(null), f2 = ue(e2), U = y$2(...f2 ? [r2, t2, s2] : t2 === null ? [] : [t2]), H2 = (ee2 = i2.unmount) == null || ee2 ? C$1.Unmount : C$1.Hidden, { show: u2, appear: z2, initial: K$1 } = He$1(), [m2, j2] = reactExports.useState(u2 ? "visible" : "hidden"), Q = Ae(), { register: A2, unregister: F } = Q;
  n$3(() => A2(r2), [A2, r2]), n$3(() => {
    if (H2 === C$1.Hidden && r2.current) {
      if (u2 && m2 !== "visible") {
        j2("visible");
        return;
      }
      return u$4(m2, { ["hidden"]: () => F(r2), ["visible"]: () => A2(r2) });
    }
  }, [m2, r2, A2, F, u2, H2]);
  let G2 = l();
  n$3(() => {
    if (f2 && G2 && m2 === "visible" && r2.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [r2, m2, G2, f2]);
  let ce = K$1 && !z2, Y2 = z2 && u2 && K$1, B = reactExports.useRef(false), I2 = Te(() => {
    B.current || (j2("hidden"), F(r2));
  }, Q), Z = o$4((W2) => {
    B.current = true;
    let L = W2 ? "enter" : "leave";
    I2.onStart(r2, L, (_2) => {
      _2 === "enter" ? l$12 == null || l$12() : _2 === "leave" && (R == null || R());
    });
  }), $2 = o$4((W2) => {
    let L = W2 ? "enter" : "leave";
    B.current = false, I2.onStop(r2, L, (_2) => {
      _2 === "enter" ? S2 == null || S2() : _2 === "leave" && (d2 == null || d2());
    }), L === "leave" && !M(I2) && (j2("hidden"), F(r2));
  });
  reactExports.useEffect(() => {
    f2 && n2 || (Z(u2), $2(u2));
  }, [u2, f2, n2]);
  let pe = /* @__PURE__ */ (() => !(!n2 || !f2 || !G2 || ce))(), [, T2] = N(pe, a3, u2, { start: Z, end: $2 }), Ce = m$3({ ref: U, className: ((te2 = t$4(i2.className, Y2 && y2, Y2 && C2, T2.enter && y2, T2.enter && T2.closed && C2, T2.enter && !T2.closed && p2, T2.leave && g, T2.leave && !T2.closed && v2, T2.leave && T2.closed && o3, !T2.transition && u2 && h2)) == null ? void 0 : te2.trim()) || void 0, ...x$3(T2) }), N$1 = 0;
  m2 === "visible" && (N$1 |= i$4.Open), m2 === "hidden" && (N$1 |= i$4.Closed), u2 && m2 === "hidden" && (N$1 |= i$4.Opening), !u2 && m2 === "visible" && (N$1 |= i$4.Closing);
  let he = K();
  return React.createElement(w$1.Provider, { value: I2 }, React.createElement(c$4, { value: N$1 }, he({ ourProps: Ce, theirProps: i2, defaultTag: de, features: fe, visible: m2 === "visible", name: "Transition.Child" })));
}
function Ie(e2, t2) {
  let { show: n2, appear: l$12 = false, unmount: S2 = true, ...R } = e2, d2 = reactExports.useRef(null), y2 = ue(e2), C2 = y$2(...y2 ? [d2, t2] : t2 === null ? [] : [t2]);
  l();
  let p2 = u$6();
  if (n2 === void 0 && p2 !== null && (n2 = (p2 & i$4.Open) === i$4.Open), n2 === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [h2, g] = reactExports.useState(n2 ? "visible" : "hidden"), v2 = Te(() => {
    n2 || g("hidden");
  }), [o3, i2] = reactExports.useState(true), a3 = reactExports.useRef([n2]);
  n$3(() => {
    o3 !== false && a3.current[a3.current.length - 1] !== n2 && (a3.current.push(n2), i2(false));
  }, [a3, n2]);
  let s2 = reactExports.useMemo(() => ({ show: n2, appear: l$12, initial: o3 }), [n2, l$12, o3]);
  n$3(() => {
    n2 ? g("visible") : !M(v2) && d2.current !== null && g("hidden");
  }, [n2, v2]);
  let r2 = { unmount: S2 }, f2 = o$4(() => {
    var u2;
    o3 && i2(false), (u2 = e2.beforeEnter) == null || u2.call(e2);
  }), U = o$4(() => {
    var u2;
    o3 && i2(false), (u2 = e2.beforeLeave) == null || u2.call(e2);
  }), H2 = K();
  return React.createElement(w$1.Provider, { value: v2 }, React.createElement(V.Provider, { value: s2 }, H2({ ourProps: { ...r2, as: reactExports.Fragment, children: React.createElement(me, { ref: C2, ...r2, ...R, beforeEnter: f2, beforeLeave: U }) }, theirProps: {}, defaultTag: reactExports.Fragment, features: fe, visible: h2 === "visible", name: "Transition" })));
}
function Le(e2, t2) {
  let n2 = reactExports.useContext(V) !== null, l2 = u$6() !== null;
  return React.createElement(React.Fragment, null, !n2 && l2 ? React.createElement(X, { ref: t2, ...e2 }) : React.createElement(me, { ref: t2, ...e2 }));
}
let X = Y(Ie), me = Y(Fe), Oe = Y(Le), Ke$1 = Object.assign(X, { Child: Oe, Root: X });
var we = ((o3) => (o3[o3.Open = 0] = "Open", o3[o3.Closed = 1] = "Closed", o3))(we || {}), Be = ((t2) => (t2[t2.SetTitleId = 0] = "SetTitleId", t2))(Be || {});
let Ue = { [0](e2, t2) {
  return e2.titleId === t2.id ? e2 : { ...e2, titleId: t2.id };
} }, w = reactExports.createContext(null);
w.displayName = "DialogContext";
function O(e2) {
  let t2 = reactExports.useContext(w);
  if (t2 === null) {
    let o3 = new Error(`<${e2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, O), o3;
  }
  return t2;
}
function He(e2, t2) {
  return u$4(t2.type, Ue, e2, t2);
}
let z = Y(function(t2, o3) {
  let a3 = reactExports.useId(), { id: n2 = `headlessui-dialog-${a3}`, open: i2, onClose: p$12, initialFocus: d2, role: s2 = "dialog", autoFocus: f$22 = true, __demoMode: u2 = false, unmount: y$12 = false, ...S$12 } = t2, R = reactExports.useRef(false);
  s2 = (function() {
    return s2 === "dialog" || s2 === "alertdialog" ? s2 : (R.current || (R.current = true, console.warn(`Invalid role [${s2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  })();
  let g = u$6();
  i2 === void 0 && g !== null && (i2 = (g & i$4.Open) === i$4.Open);
  let T2 = reactExports.useRef(null), I2 = y$2(T2, o3), F = u$1(T2.current), c2 = i2 ? 0 : 1, [b2, Q] = reactExports.useReducer(He, { titleId: null, descriptionId: null, panelRef: reactExports.createRef() }), m2 = o$4(() => p$12(false)), B = o$4((r2) => Q({ type: 0, id: r2 })), D2 = l() ? c2 === 0 : false, [Z, ee2] = ee$1(), te2 = { get current() {
    var r2;
    return (r2 = b2.panelRef.current) != null ? r2 : T2.current;
  } }, v2 = x$1(), { resolveContainers: M2 } = S({ mainTreeNode: v2, portals: Z, defaultContainers: [te2] }), U = g !== null ? (g & i$4.Closing) === i$4.Closing : false;
  y(u2 || U ? false : D2, { allowed: o$4(() => {
    var r2, W2;
    return [(W2 = (r2 = T2.current) == null ? void 0 : r2.closest("[data-headlessui-portal]")) != null ? W2 : null];
  }), disallowed: o$4(() => {
    var r2;
    return [(r2 = v2 == null ? void 0 : v2.closest("body > *:not(#headlessui-portal-root)")) != null ? r2 : null];
  }) });
  let P = x$2.get(null);
  n$3(() => {
    if (D2) return P.actions.push(n2), () => P.actions.pop(n2);
  }, [P, n2, D2]);
  let H2 = S$2(P, reactExports.useCallback((r2) => P.selectors.isTop(r2, n2), [P, n2]));
  k(H2, M2, (r2) => {
    r2.preventDefault(), m2();
  }), a$1(H2, F == null ? void 0 : F.defaultView, (r2) => {
    r2.preventDefault(), r2.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m2();
  }), f$1(u2 || U ? false : D2, F, M2), p(D2, T2, m2);
  let [oe2, ne2] = H$1(), re2 = reactExports.useMemo(() => [{ dialogState: c2, close: m2, setTitleId: B, unmount: y$12 }, b2], [c2, m2, B, y$12, b2]), N2 = n$5({ open: c2 === 0 }), le = { ref: I2, id: n2, role: s2, tabIndex: -1, "aria-modal": u2 ? void 0 : c2 === 0 ? true : void 0, "aria-labelledby": b2.titleId, "aria-describedby": oe2, unmount: y$12 }, ae = !f(), E2 = G.None;
  D2 && !u2 && (E2 |= G.RestoreFocus, E2 |= G.TabLock, f$22 && (E2 |= G.AutoFocus), ae && (E2 |= G.InitialFocus));
  let ie = K();
  return React.createElement(s$6, null, React.createElement(l$1, { force: true }, React.createElement(te$1, null, React.createElement(w.Provider, { value: re2 }, React.createElement(X$1, { target: T2 }, React.createElement(l$1, { force: false }, React.createElement(ne2, { slot: N2 }, React.createElement(ee2, null, React.createElement(ge, { initialFocus: d2, initialFocusFallback: T2, containers: M2, features: E2 }, React.createElement(C$2, { value: m2 }, ie({ ourProps: le, theirProps: S$12, slot: N2, defaultTag: Ne, features: We, visible: c2 === 0, name: "Dialog" })))))))))));
}), Ne = "div", We = A$1.RenderStrategy | A$1.Static;
function $e(e2, t2) {
  let { transition: o3 = false, open: a3, ...n2 } = e2, i2 = u$6(), p2 = e2.hasOwnProperty("open") || i2 !== null, d2 = e2.hasOwnProperty("onClose");
  if (!p2 && !d2) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!p2) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!d2) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i2 && typeof e2.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e2.open}`);
  if (typeof e2.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e2.onClose}`);
  return (a3 !== void 0 || o3) && !n2.static ? React.createElement(j, null, React.createElement(Ke$1, { show: a3, transition: o3, unmount: n2.unmount }, React.createElement(z, { ref: t2, ...n2 }))) : React.createElement(j, null, React.createElement(z, { ref: t2, open: a3, ...n2 }));
}
let je = "div";
function Ye(e2, t2) {
  let o3 = reactExports.useId(), { id: a3 = `headlessui-dialog-panel-${o3}`, transition: n2 = false, ...i2 } = e2, [{ dialogState: p2, unmount: d2 }, s2] = O("Dialog.Panel"), f2 = y$2(t2, s2.panelRef), u2 = n$5({ open: p2 === 0 }), y2 = o$4((I2) => {
    I2.stopPropagation();
  }), S2 = { ref: f2, id: a3, onClick: y2 }, R = n2 ? Oe : reactExports.Fragment, g = n2 ? { unmount: d2 } : {}, T2 = K();
  return React.createElement(R, { ...g }, T2({ ourProps: S2, theirProps: i2, slot: u2, defaultTag: je, name: "Dialog.Panel" }));
}
let Je = "div";
function Ke(e2, t2) {
  let { transition: o3 = false, ...a3 } = e2, [{ dialogState: n2, unmount: i2 }] = O("Dialog.Backdrop"), p2 = n$5({ open: n2 === 0 }), d2 = { ref: t2, "aria-hidden": true }, s2 = o3 ? Oe : reactExports.Fragment, f2 = o3 ? { unmount: i2 } : {}, u2 = K();
  return React.createElement(s2, { ...f2 }, u2({ ourProps: d2, theirProps: a3, slot: p2, defaultTag: Je, name: "Dialog.Backdrop" }));
}
let Xe = "h2";
function Ve(e2, t2) {
  let o3 = reactExports.useId(), { id: a3 = `headlessui-dialog-title-${o3}`, ...n2 } = e2, [{ dialogState: i2, setTitleId: p2 }] = O("Dialog.Title"), d2 = y$2(t2);
  reactExports.useEffect(() => (p2(a3), () => p2(null)), [a3, p2]);
  let s2 = n$5({ open: i2 === 0 }), f2 = { ref: d2, id: a3 };
  return K()({ ourProps: f2, theirProps: n2, slot: s2, defaultTag: Xe, name: "Dialog.Title" });
}
let qe = Y($e), ze = Y(Ye), Lt = Y(Ke), Qe = Y(Ve), ht = Object.assign(qe, { Panel: ze, Title: Qe, Description: M$1 });
export {
  Ke$1 as K,
  Lt as L,
  Qe as Q,
  ht as h,
  ze as z
};
