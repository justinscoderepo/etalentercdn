import { Y, K } from "./keyboard-Dku-r8UD.js";
let a = "span";
var s = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(s || {});
function l(t, r) {
  var n;
  let { features: d = 1, ...e } = t, o = { ref: r, "aria-hidden": (d & 2) === 2 ? true : (n = e["aria-hidden"]) != null ? n : void 0, hidden: (d & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d & 4) === 4 && (d & 2) !== 2 && { display: "none" } } };
  return K()({ ourProps: o, theirProps: e, slot: {}, defaultTag: a, name: "Hidden" });
}
let f = Y(l);
export {
  f,
  s
};
