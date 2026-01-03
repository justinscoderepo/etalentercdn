import { r, h as e, u, l, n } from "./keyboard-Dku-r8UD.js";
import { r as reactExports } from "./main-B7w5eCOl.js";
let E = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(","), S = ["[data-autofocus]"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var T = ((o) => (o[o.First = 1] = "First", o[o.Previous = 2] = "Previous", o[o.Next = 4] = "Next", o[o.Last = 8] = "Last", o[o.WrapAround = 16] = "WrapAround", o[o.NoScroll = 32] = "NoScroll", o[o.AutoFocus = 64] = "AutoFocus", o))(T || {}), A = ((n2) => (n2[n2.Error = 0] = "Error", n2[n2.Overflow = 1] = "Overflow", n2[n2.Success = 2] = "Success", n2[n2.Underflow = 3] = "Underflow", n2))(A || {}), O = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(O || {});
function x(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(E)).sort((r2, t) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function h(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(S)).sort((r2, t) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var I = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(I || {});
function H(e2, r2 = 0) {
  var t;
  return e2 === ((t = l(e2)) == null ? void 0 : t.body) ? false : u(r2, { [0]() {
    return e2.matches(E);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(E)) return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
var g = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(g || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
  e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e2) => {
  e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function w(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let _ = ["textarea", "input"].join(",");
function P(e2) {
  var r2, t;
  return (t = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, _)) != null ? t : false;
}
function G(e2, r2 = (t) => t) {
  return e2.slice().sort((t, l2) => {
    let n2 = r2(t), a = r2(l2);
    if (n2 === null || a === null) return 0;
    let u2 = n2.compareDocumentPosition(a);
    return u2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v(e$1, r$1, { sorted: t = true, relativeTo: l2 = null, skipElements: n2 = [] } = {}) {
  let a = Array.isArray(e$1) ? e$1.length > 0 ? r(e$1[0]) : document : r(e$1), u2 = Array.isArray(e$1) ? t ? G(e$1) : e$1 : r$1 & 64 ? h(e$1) : x(e$1);
  n2.length > 0 && u2.length > 1 && (u2 = u2.filter((i) => !n2.some((d) => d != null && "current" in d ? (d == null ? void 0 : d.current) === i : d === i))), l2 = l2 != null ? l2 : a == null ? void 0 : a.activeElement;
  let o = (() => {
    if (r$1 & 5) return 1;
    if (r$1 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M = (() => {
    if (r$1 & 1) return 0;
    if (r$1 & 2) return Math.max(0, u2.indexOf(l2)) - 1;
    if (r$1 & 4) return Math.max(0, u2.indexOf(l2)) + 1;
    if (r$1 & 8) return u2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), N = r$1 & 32 ? { preventScroll: true } : {}, m = 0, c = u2.length, s;
  do {
    if (m >= c || m + c <= 0) return 0;
    let i = M + m;
    if (r$1 & 16) i = (i + c) % c;
    else {
      if (i < 0) return 3;
      if (i >= c) return 1;
    }
    s = u2[i], s == null || s.focus(N), m += o;
  } while (s !== e(s));
  return r$1 & 6 && P(s) && s.select(), 2;
}
function f() {
  let e2 = reactExports.useRef(false);
  return n(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}
export {
  A,
  E,
  G,
  H,
  I,
  T,
  f,
  v,
  w
};
