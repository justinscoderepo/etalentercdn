import { r as reactExports, k as React } from "./main-B7w5eCOl.js";
import { Y, y, n, a as n$1, K, o } from "./keyboard-Dku-r8UD.js";
let e = reactExports.createContext(void 0);
function a$1() {
  return reactExports.useContext(e);
}
function l({ value: t, children: o2 }) {
  return React.createElement(e.Provider, { value: t }, o2);
}
let a = reactExports.createContext(null);
a.displayName = "DescriptionContext";
function f() {
  let r = reactExports.useContext(a);
  if (r === null) {
    let e2 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e2, f), e2;
  }
  return r;
}
function w() {
  var r, e2;
  return (e2 = (r = reactExports.useContext(a)) == null ? void 0 : r.value) != null ? e2 : void 0;
}
function H() {
  let [r, e2] = reactExports.useState([]);
  return [r.length > 0 ? r.join(" ") : void 0, reactExports.useMemo(() => function(t) {
    let i = o((n2) => (e2((o2) => [...o2, n2]), () => e2((o2) => {
      let s = o2.slice(), p = s.indexOf(n2);
      return p !== -1 && s.splice(p, 1), s;
    }))), l2 = reactExports.useMemo(() => ({ register: i, slot: t.slot, name: t.name, props: t.props, value: t.value }), [i, t.slot, t.name, t.props, t.value]);
    return React.createElement(a.Provider, { value: l2 }, t.children);
  }, [e2])];
}
let I = "p";
function C(r, e2) {
  let c = reactExports.useId(), t = a$1(), { id: i = `headlessui-description-${c}`, ...l2 } = r, n$2 = f(), o2 = y(e2);
  n(() => n$2.register(i), [i, n$2.register]);
  let s = n$1({ ...n$2.slot, disabled: t || false }), p = { ref: o2, ...n$2.props, id: i };
  return K()({ ourProps: p, theirProps: l2, slot: s, defaultTag: I, name: n$2.name || "Description" });
}
let _ = Y(C), M = Object.assign(_, {});
export {
  H,
  M,
  a$1 as a,
  l,
  w
};
