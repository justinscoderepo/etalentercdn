function o(e) {
  return typeof e != "object" || e === null ? false : "nodeType" in e;
}
function t(e) {
  return o(e) && "tagName" in e;
}
function n(e) {
  return t(e) && "accessKey" in e;
}
function i(e) {
  return t(e) && "tabIndex" in e;
}
function r(e) {
  return t(e) && "style" in e;
}
function u(e) {
  return n(e) && e.nodeName === "IFRAME";
}
function l(e) {
  return n(e) && e.nodeName === "INPUT";
}
function m(e) {
  return n(e) && e.nodeName === "LABEL";
}
function a(e) {
  return n(e) && e.nodeName === "FIELDSET";
}
function E(e) {
  return n(e) && e.nodeName === "LEGEND";
}
function L(e) {
  return t(e) ? e.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : false;
}
export {
  E,
  L,
  a,
  i,
  l,
  m,
  n,
  r,
  t,
  u
};
