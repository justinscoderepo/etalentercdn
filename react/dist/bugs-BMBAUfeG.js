import { a, E } from "./dom-XjFFvgb6.js";
function s(l) {
  let e = l.parentElement, t = null;
  for (; e && !a(e); ) E(e) && (t = e), e = e.parentElement;
  let i = (e == null ? void 0 : e.getAttribute("disabled")) === "";
  return i && r(t) ? false : i;
}
function r(l) {
  if (!l) return false;
  let e = l.previousElementSibling;
  for (; e !== null; ) {
    if (E(e)) return false;
    e = e.previousElementSibling;
  }
  return true;
}
export {
  s
};
