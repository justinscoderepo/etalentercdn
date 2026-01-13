import { r as reactExports, k as React } from "./main-B7w5eCOl.js";
var i = Object.defineProperty;
var d$1 = (t2, e2, n2) => e2 in t2 ? i(t2, e2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[e2] = n2;
var r$1 = (t2, e2, n2) => (d$1(t2, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
let o$3 = class o {
  constructor() {
    r$1(this, "current", this.detect());
    r$1(this, "handoffState", "pending");
    r$1(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
let s$1 = new o$3();
function l(n2) {
  var u2;
  return s$1.isServer ? null : n2 == null ? document : (u2 = n2 == null ? void 0 : n2.ownerDocument) != null ? u2 : document;
}
function r(n2) {
  var u2, o3;
  return s$1.isServer ? null : n2 == null ? document : (o3 = (u2 = n2 == null ? void 0 : n2.getRootNode) == null ? void 0 : u2.call(n2)) != null ? o3 : document;
}
function e(n2) {
  var u2, o3;
  return (o3 = (u2 = r(n2)) == null ? void 0 : u2.activeElement) != null ? o3 : null;
}
function d(n2) {
  return e(n2) === n2;
}
function t$1(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}
function o$2() {
  let s2 = [], r2 = { addEventListener(e2, t2, n2, i2) {
    return e2.addEventListener(t2, n2, i2), r2.add(() => e2.removeEventListener(t2, n2, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    return r2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    return r2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$1(() => {
      t2.current && e2[0]();
    }), r2.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, n2) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: n2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o$2();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return s2.includes(e2) || s2.push(e2), () => {
      let t2 = s2.indexOf(e2);
      if (t2 >= 0) for (let n2 of s2.splice(t2, 1)) n2();
    };
  }, dispose() {
    for (let e2 of s2.splice(0)) e2();
  } };
  return r2;
}
function p() {
  let [e2] = reactExports.useState(o$2);
  return reactExports.useEffect(() => () => e2.dispose(), [e2]), e2;
}
let n$1 = (e2, t2) => {
  s$1.isServer ? reactExports.useEffect(e2, t2) : reactExports.useLayoutEffect(e2, t2);
};
function s(e2) {
  let r2 = reactExports.useRef(e2);
  return n$1(() => {
    r2.current = e2;
  }, [e2]), r2;
}
let o$1 = function(t2) {
  let e2 = s(t2);
  return React.useCallback((...r2) => e2.current(...r2), [e2]);
};
function n(e2) {
  return reactExports.useMemo(() => e2, Object.values(e2));
}
function t(...r2) {
  return Array.from(new Set(r2.flatMap((n2) => typeof n2 == "string" ? n2.split(" ") : []))).filter(Boolean).join(" ");
}
function u$1(r2, n2, ...a) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$1), t2;
}
var A = ((a) => (a[a.None = 0] = "None", a[a.RenderStrategy = 1] = "RenderStrategy", a[a.Static = 2] = "Static", a))(A || {}), C = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(C || {});
function K() {
  let n2 = $();
  return reactExports.useCallback((r2) => U({ mergeRefs: n2, ...r2 }), [n2]);
}
function U({ ourProps: n2, theirProps: r2, slot: e2, defaultTag: a, features: s2, visible: t2 = true, name: l2, mergeRefs: i2 }) {
  i2 = i2 != null ? i2 : I;
  let o3 = P(r2, n2);
  if (t2) return F(o3, e2, a, l2, i2);
  let y2 = s2 != null ? s2 : 0;
  if (y2 & 2) {
    let { static: f = false, ...u2 } = o3;
    if (f) return F(u2, e2, a, l2, i2);
  }
  if (y2 & 1) {
    let { unmount: f = true, ...u2 } = o3;
    return u$1(f ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return F({ ...u2, hidden: true, style: { display: "none" } }, e2, a, l2, i2);
    } });
  }
  return F(o3, e2, a, l2, i2);
}
function F(n2, r2 = {}, e2, a, s2) {
  let { as: t$12 = e2, children: l2, refName: i2 = "ref", ...o3 } = h(n2, ["unmount", "static"]), y2 = n2.ref !== void 0 ? { [i2]: n2.ref } : {}, f = typeof l2 == "function" ? l2(r2) : l2;
  "className" in o3 && o3.className && typeof o3.className == "function" && (o3.className = o3.className(r2)), o3["aria-labelledby"] && o3["aria-labelledby"] === o3.id && (o3["aria-labelledby"] = void 0);
  let u2 = {};
  if (r2) {
    let d2 = false, p2 = [];
    for (let [c, T2] of Object.entries(r2)) typeof T2 == "boolean" && (d2 = true), T2 === true && p2.push(c.replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`));
    if (d2) {
      u2["data-headlessui-state"] = p2.join(" ");
      for (let c of p2) u2[`data-${c}`] = "";
    }
  }
  if (b(t$12) && (Object.keys(m(o3)).length > 0 || Object.keys(m(u2)).length > 0)) if (!reactExports.isValidElement(f) || Array.isArray(f) && f.length > 1 || D(f)) {
    if (Object.keys(m(o3)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${a} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m(o3)).concat(Object.keys(m(u2))).map((d2) => `  - ${d2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d2) => `  - ${d2}`).join(`
`)].join(`
`));
  } else {
    let d2 = f.props, p2 = d2 == null ? void 0 : d2.className, c = typeof p2 == "function" ? (...R) => t(p2(...R), o3.className) : t(p2, o3.className), T2 = c ? { className: c } : {}, g = P(f.props, m(h(o3, ["ref"])));
    for (let R in u2) R in g && delete u2[R];
    return reactExports.cloneElement(f, Object.assign({}, g, u2, y2, { ref: s2(H(f), y2.ref) }, T2));
  }
  return reactExports.createElement(t$12, Object.assign({}, h(o3, ["ref"]), !b(t$12) && y2, !b(t$12) && u2), f);
}
function $() {
  let n2 = reactExports.useRef([]), r2 = reactExports.useCallback((e2) => {
    for (let a of n2.current) a != null && (typeof a == "function" ? a(e2) : a.current = e2);
  }, []);
  return (...e2) => {
    if (!e2.every((a) => a == null)) return n2.current = e2, r2;
  };
}
function I(...n2) {
  return n2.every((r2) => r2 == null) ? void 0 : (r2) => {
    for (let e2 of n2) e2 != null && (typeof e2 == "function" ? e2(r2) : e2.current = r2);
  };
}
function P(...n2) {
  if (n2.length === 0) return {};
  if (n2.length === 1) return n2[0];
  let r2 = {}, e2 = {};
  for (let s2 of n2) for (let t2 in s2) t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
  if (r2.disabled || r2["aria-disabled"]) for (let s2 in e2) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s2) && (e2[s2] = [(t2) => {
    var l2;
    return (l2 = t2 == null ? void 0 : t2.preventDefault) == null ? void 0 : l2.call(t2);
  }]);
  for (let s2 in e2) Object.assign(r2, { [s2](t2, ...l2) {
    let i2 = e2[s2];
    for (let o3 of i2) {
      if ((t2 instanceof Event || (t2 == null ? void 0 : t2.nativeEvent) instanceof Event) && t2.defaultPrevented) return;
      o3(t2, ...l2);
    }
  } });
  return r2;
}
function V(...n2) {
  if (n2.length === 0) return {};
  if (n2.length === 1) return n2[0];
  let r2 = {}, e2 = {};
  for (let s2 of n2) for (let t2 in s2) t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
  for (let s2 in e2) Object.assign(r2, { [s2](...t2) {
    let l2 = e2[s2];
    for (let i2 of l2) i2 == null || i2(...t2);
  } });
  return r2;
}
function Y(n2) {
  var r2;
  return Object.assign(reactExports.forwardRef(n2), { displayName: (r2 = n2.displayName) != null ? r2 : n2.name });
}
function m(n2) {
  let r2 = Object.assign({}, n2);
  for (let e2 in r2) r2[e2] === void 0 && delete r2[e2];
  return r2;
}
function h(n2, r2 = []) {
  let e2 = Object.assign({}, n2);
  for (let a of r2) a in e2 && delete e2[a];
  return e2;
}
function H(n2) {
  return React.version.split(".")[0] >= "19" ? n2.props.ref : n2.ref;
}
function b(n2) {
  return n2 === reactExports.Fragment || n2 === /* @__PURE__ */ Symbol.for("react.fragment");
}
function D(n2) {
  return b(n2.type);
}
let u = /* @__PURE__ */ Symbol();
function T(t2, n2 = true) {
  return Object.assign(t2, { [u]: n2 });
}
function y(...t2) {
  let n2 = reactExports.useRef(t2);
  reactExports.useEffect(() => {
    n2.current = t2;
  }, [t2]);
  let c = o$1((e2) => {
    for (let o3 of n2.current) o3 != null && (typeof o3 == "function" ? o3(e2) : o3.current = e2);
  });
  return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u])) ? void 0 : c;
}
var o2 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o2 || {});
export {
  A,
  C,
  K,
  T,
  V,
  Y,
  n as a,
  o2 as b,
  o$2 as c,
  s as d,
  d as e,
  t as f,
  b as g,
  e as h,
  l,
  m,
  n$1 as n,
  o$1 as o,
  p,
  r,
  s$1 as s,
  t$1 as t,
  u$1 as u,
  y
};
