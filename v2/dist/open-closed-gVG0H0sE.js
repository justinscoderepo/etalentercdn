import { k as React, r as reactExports } from "./main-B7w5eCOl.js";
import { p, n as n$1, c as o } from "./keyboard-Dku-r8UD.js";
let e = reactExports.createContext(() => {
});
function C$1({ value: t, children: o2 }) {
  return React.createElement(e.Provider, { value: t }, o2);
}
function c$1(u2 = 0) {
  let [r, a] = reactExports.useState(u2), g = reactExports.useCallback((e2) => a(e2), []), s2 = reactExports.useCallback((e2) => a((l) => l | e2), []), m = reactExports.useCallback((e2) => (r & e2) === e2, [r]), n2 = reactExports.useCallback((e2) => a((l) => l & ~e2), []), F = reactExports.useCallback((e2) => a((l) => l ^ e2), []);
  return { flags: r, setFlag: g, addFlag: s2, hasFlag: m, removeFlag: n2, toggleFlag: F };
}
var define_process_env_default = {};
var T, S;
typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T = process == null ? void 0 : define_process_env_default) == null ? void 0 : T["NODE_ENV"]) === "test" && typeof ((S = Element == null ? void 0 : Element.prototype) == null ? void 0 : S.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var A = ((i2) => (i2[i2.None = 0] = "None", i2[i2.Closed = 1] = "Closed", i2[i2.Enter = 2] = "Enter", i2[i2.Leave = 4] = "Leave", i2))(A || {});
function x(e2) {
  let r = {};
  for (let t in e2) e2[t] === true && (r[`data-${t}`] = "");
  return r;
}
function N(e2, r, t, n2) {
  let [i2, a] = reactExports.useState(t), { hasFlag: s2, addFlag: o2, removeFlag: l } = c$1(e2 && i2 ? 3 : 0), u2 = reactExports.useRef(false), f = reactExports.useRef(false), E = p();
  return n$1(() => {
    var d;
    if (e2) {
      if (t && a(true), !r) {
        t && o2(3);
        return;
      }
      return (d = n2 == null ? void 0 : n2.start) == null || d.call(n2, t), C(r, { inFlight: u2, prepare() {
        f.current ? f.current = false : f.current = u2.current, u2.current = true, !f.current && (t ? (o2(3), l(4)) : (o2(4), l(2)));
      }, run() {
        f.current ? t ? (l(3), o2(4)) : (l(4), o2(3)) : t ? l(1) : o2(1);
      }, done() {
        var p2;
        f.current && D(r) || (u2.current = false, l(7), t || a(false), (p2 = n2 == null ? void 0 : n2.end) == null || p2.call(n2, t));
      } });
    }
  }, [e2, t, r, E]), e2 ? [i2, { closed: s2(1), enter: s2(2), leave: s2(4), transition: s2(2) || s2(4) }] : [t, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function C(e2, { prepare: r, run: t, done: n2, inFlight: i2 }) {
  let a = o();
  return j(e2, { prepare: r, inFlight: i2 }), a.nextFrame(() => {
    t(), a.requestAnimationFrame(() => {
      a.add(M(e2, n2));
    });
  }), a.dispose;
}
function M(e2, r) {
  var a, s2;
  let t = o();
  if (!e2) return t.dispose;
  let n2 = false;
  t.add(() => {
    n2 = true;
  });
  let i2 = (s2 = (a = e2.getAnimations) == null ? void 0 : a.call(e2).filter((o2) => o2 instanceof CSSTransition)) != null ? s2 : [];
  return i2.length === 0 ? (r(), t.dispose) : (Promise.allSettled(i2.map((o2) => o2.finished)).then(() => {
    n2 || r();
  }), t.dispose);
}
function j(e2, { inFlight: r, prepare: t }) {
  if (r != null && r.current) {
    t();
    return;
  }
  let n2 = e2.style.transition;
  e2.style.transition = "none", t(), e2.offsetHeight, e2.style.transition = n2;
}
function D(e2) {
  var t, n2;
  return ((n2 = (t = e2.getAnimations) == null ? void 0 : t.call(e2)) != null ? n2 : []).some((i2) => i2 instanceof CSSTransition && i2.playState !== "finished");
}
let n = reactExports.createContext(null);
n.displayName = "OpenClosedContext";
var i = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i || {});
function u() {
  return reactExports.useContext(n);
}
function c({ value: o2, children: t }) {
  return React.createElement(n.Provider, { value: o2 }, t);
}
function s({ children: o2 }) {
  return React.createElement(n.Provider, { value: null }, o2);
}
export {
  C$1 as C,
  N,
  c,
  i,
  s,
  u,
  x
};
