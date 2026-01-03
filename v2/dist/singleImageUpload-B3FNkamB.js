import { r as reactExports, k as React, j as jsxRuntimeExports, L as Loader, i as classNames, v as n, w as upload } from "./main-B7w5eCOl.js";
import { C as Controller } from "./index.esm-CiAIyUc7.js";
import { V as ValidationMessage } from "./validationMessage-D3Gjn0ek.js";
import { F as ForwardRef } from "./XMarkIcon-CWPDMTWO.js";
var _ = Object.defineProperty;
var $ = (a, h, e) => h in a ? _(a, h, { enumerable: true, configurable: true, writable: true, value: e }) : a[h] = e;
var m = (a, h, e) => $(a, typeof h != "symbol" ? h + "" : h, e);
const E = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  unit: "px"
}, b = (a, h, e) => Math.min(Math.max(a, h), e), H = (...a) => a.filter((h) => h && typeof h == "string").join(" "), X = (a, h) => a === h || a.width === h.width && a.height === h.height && a.x === h.x && a.y === h.y && a.unit === h.unit;
function B(a, h, e, n2) {
  const t = D(a, e, n2);
  return a.width && (t.height = t.width / h), a.height && (t.width = t.height * h), t.y + t.height > n2 && (t.height = n2 - t.y, t.width = t.height * h), t.x + t.width > e && (t.width = e - t.x, t.height = t.width / h), a.unit === "%" ? v(t, e, n2) : t;
}
function L(a, h, e) {
  const n2 = D(a, h, e);
  return n2.x = (h - n2.width) / 2, n2.y = (e - n2.height) / 2, a.unit === "%" ? v(n2, h, e) : n2;
}
function v(a, h, e) {
  return a.unit === "%" ? { ...E, ...a, unit: "%" } : {
    unit: "%",
    x: a.x ? a.x / h * 100 : 0,
    y: a.y ? a.y / e * 100 : 0,
    width: a.width ? a.width / h * 100 : 0,
    height: a.height ? a.height / e * 100 : 0
  };
}
function D(a, h, e) {
  return a.unit ? a.unit === "px" ? { ...E, ...a, unit: "px" } : {
    unit: "px",
    x: a.x ? a.x * h / 100 : 0,
    y: a.y ? a.y * e / 100 : 0,
    width: a.width ? a.width * h / 100 : 0,
    height: a.height ? a.height * e / 100 : 0
  } : { ...E, ...a, unit: "px" };
}
function k(a, h, e, n2, t, d = 0, r = 0, o = n2, w = t) {
  const i = { ...a };
  let s = Math.min(d, n2), c = Math.min(r, t), g = Math.min(o, n2), p = Math.min(w, t);
  h && (h > 1 ? (s = r ? r * h : s, c = s / h, g = o * h) : (c = d ? d / h : c, s = c * h, p = w / h)), i.y < 0 && (i.height = Math.max(i.height + i.y, c), i.y = 0), i.x < 0 && (i.width = Math.max(i.width + i.x, s), i.x = 0);
  const l = n2 - (i.x + i.width);
  l < 0 && (i.x = Math.min(i.x, n2 - s), i.width += l);
  const C = t - (i.y + i.height);
  if (C < 0 && (i.y = Math.min(i.y, t - c), i.height += C), i.width < s && ((e === "sw" || e == "nw") && (i.x -= s - i.width), i.width = s), i.height < c && ((e === "nw" || e == "ne") && (i.y -= c - i.height), i.height = c), i.width > g && ((e === "sw" || e == "nw") && (i.x -= g - i.width), i.width = g), i.height > p && ((e === "nw" || e == "ne") && (i.y -= p - i.height), i.height = p), h) {
    const y = i.width / i.height;
    if (y < h) {
      const f = Math.max(i.width / h, c);
      (e === "nw" || e == "ne") && (i.y -= f - i.height), i.height = f;
    } else if (y > h) {
      const f = Math.max(i.height * h, s);
      (e === "sw" || e == "nw") && (i.x -= f - i.width), i.width = f;
    }
  }
  return i;
}
function I(a, h, e, n2) {
  const t = { ...a };
  return h === "ArrowLeft" ? n2 === "nw" ? (t.x -= e, t.y -= e, t.width += e, t.height += e) : n2 === "w" ? (t.x -= e, t.width += e) : n2 === "sw" ? (t.x -= e, t.width += e, t.height += e) : n2 === "ne" ? (t.y += e, t.width -= e, t.height -= e) : n2 === "e" ? t.width -= e : n2 === "se" && (t.width -= e, t.height -= e) : h === "ArrowRight" && (n2 === "nw" ? (t.x += e, t.y += e, t.width -= e, t.height -= e) : n2 === "w" ? (t.x += e, t.width -= e) : n2 === "sw" ? (t.x += e, t.width -= e, t.height -= e) : n2 === "ne" ? (t.y -= e, t.width += e, t.height += e) : n2 === "e" ? t.width += e : n2 === "se" && (t.width += e, t.height += e)), h === "ArrowUp" ? n2 === "nw" ? (t.x -= e, t.y -= e, t.width += e, t.height += e) : n2 === "n" ? (t.y -= e, t.height += e) : n2 === "ne" ? (t.y -= e, t.width += e, t.height += e) : n2 === "sw" ? (t.x += e, t.width -= e, t.height -= e) : n2 === "s" ? t.height -= e : n2 === "se" && (t.width -= e, t.height -= e) : h === "ArrowDown" && (n2 === "nw" ? (t.x += e, t.y += e, t.width -= e, t.height -= e) : n2 === "n" ? (t.y += e, t.height -= e) : n2 === "ne" ? (t.y += e, t.width -= e, t.height -= e) : n2 === "sw" ? (t.x -= e, t.width += e, t.height += e) : n2 === "s" ? t.height += e : n2 === "se" && (t.width += e, t.height += e)), t;
}
const M = { capture: true, passive: false };
let N = 0;
const x = class x2 extends reactExports.PureComponent {
  constructor() {
    super(...arguments);
    m(this, "docMoveBound", false);
    m(this, "mouseDownOnCrop", false);
    m(this, "dragStarted", false);
    m(this, "evData", {
      startClientX: 0,
      startClientY: 0,
      startCropX: 0,
      startCropY: 0,
      clientX: 0,
      clientY: 0,
      isResize: true
    });
    m(this, "componentRef", reactExports.createRef());
    m(this, "mediaRef", reactExports.createRef());
    m(this, "resizeObserver");
    m(this, "initChangeCalled", false);
    m(this, "instanceId", `rc-${N++}`);
    m(this, "state", {
      cropIsActive: false,
      newCropIsBeingDrawn: false
    });
    m(this, "onCropPointerDown", (e) => {
      const { crop: n2, disabled: t } = this.props, d = this.getBox();
      if (!n2)
        return;
      const r = D(n2, d.width, d.height);
      if (t)
        return;
      e.cancelable && e.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: true });
      const o = e.target.dataset.ord, w = !!o;
      let i = e.clientX, s = e.clientY, c = r.x, g = r.y;
      if (o) {
        const p = e.clientX - d.x, l = e.clientY - d.y;
        let C = 0, y = 0;
        o === "ne" || o == "e" ? (C = p - (r.x + r.width), y = l - r.y, c = r.x, g = r.y + r.height) : o === "se" || o === "s" ? (C = p - (r.x + r.width), y = l - (r.y + r.height), c = r.x, g = r.y) : o === "sw" || o == "w" ? (C = p - r.x, y = l - (r.y + r.height), c = r.x + r.width, g = r.y) : (o === "nw" || o == "n") && (C = p - r.x, y = l - r.y, c = r.x + r.width, g = r.y + r.height), i = c + d.x + C, s = g + d.y + y;
      }
      this.evData = {
        startClientX: i,
        startClientY: s,
        startCropX: c,
        startCropY: g,
        clientX: e.clientX,
        clientY: e.clientY,
        isResize: w,
        ord: o
      }, this.mouseDownOnCrop = true, this.setState({ cropIsActive: true });
    });
    m(this, "onComponentPointerDown", (e) => {
      const { crop: n2, disabled: t, locked: d, keepSelection: r, onChange: o } = this.props, w = this.getBox();
      if (t || d || r && n2)
        return;
      e.cancelable && e.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: true });
      const i = e.clientX - w.x, s = e.clientY - w.y, c = {
        unit: "px",
        x: i,
        y: s,
        width: 0,
        height: 0
      };
      this.evData = {
        startClientX: e.clientX,
        startClientY: e.clientY,
        startCropX: i,
        startCropY: s,
        clientX: e.clientX,
        clientY: e.clientY,
        isResize: true
      }, this.mouseDownOnCrop = true, o(D(c, w.width, w.height), v(c, w.width, w.height)), this.setState({ cropIsActive: true, newCropIsBeingDrawn: true });
    });
    m(this, "onDocPointerMove", (e) => {
      const { crop: n2, disabled: t, onChange: d, onDragStart: r } = this.props, o = this.getBox();
      if (t || !n2 || !this.mouseDownOnCrop)
        return;
      e.cancelable && e.preventDefault(), this.dragStarted || (this.dragStarted = true, r && r(e));
      const { evData: w } = this;
      w.clientX = e.clientX, w.clientY = e.clientY;
      let i;
      w.isResize ? i = this.resizeCrop() : i = this.dragCrop(), X(n2, i) || d(
        D(i, o.width, o.height),
        v(i, o.width, o.height)
      );
    });
    m(this, "onComponentKeyDown", (e) => {
      const { crop: n2, disabled: t, onChange: d, onComplete: r } = this.props;
      if (t)
        return;
      const o = e.key;
      let w = false;
      if (!n2)
        return;
      const i = this.getBox(), s = this.makePixelCrop(i), g = (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) ? x2.nudgeStepLarge : e.shiftKey ? x2.nudgeStepMedium : x2.nudgeStep;
      if (o === "ArrowLeft" ? (s.x -= g, w = true) : o === "ArrowRight" ? (s.x += g, w = true) : o === "ArrowUp" ? (s.y -= g, w = true) : o === "ArrowDown" && (s.y += g, w = true), w) {
        e.cancelable && e.preventDefault(), s.x = b(s.x, 0, i.width - s.width), s.y = b(s.y, 0, i.height - s.height);
        const p = D(s, i.width, i.height), l = v(s, i.width, i.height);
        d(p, l), r && r(p, l);
      }
    });
    m(this, "onHandlerKeyDown", (e, n2) => {
      const {
        aspect: t = 0,
        crop: d,
        disabled: r,
        minWidth: o = 0,
        minHeight: w = 0,
        maxWidth: i,
        maxHeight: s,
        onChange: c,
        onComplete: g
      } = this.props, p = this.getBox();
      if (r || !d)
        return;
      if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight")
        e.stopPropagation(), e.preventDefault();
      else
        return;
      const C = (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) ? x2.nudgeStepLarge : e.shiftKey ? x2.nudgeStepMedium : x2.nudgeStep, y = D(d, p.width, p.height), f = I(y, e.key, C, n2), R = k(
        f,
        t,
        n2,
        p.width,
        p.height,
        o,
        w,
        i,
        s
      );
      if (!X(d, R)) {
        const Y = v(R, p.width, p.height);
        c(R, Y), g && g(R, Y);
      }
    });
    m(this, "onDocPointerDone", (e) => {
      const { crop: n2, disabled: t, onComplete: d, onDragEnd: r } = this.props, o = this.getBox();
      this.unbindDocMove(), !(t || !n2) && this.mouseDownOnCrop && (this.mouseDownOnCrop = false, this.dragStarted = false, r && r(e), d && d(D(n2, o.width, o.height), v(n2, o.width, o.height)), this.setState({ cropIsActive: false, newCropIsBeingDrawn: false }));
    });
    m(this, "onDragFocus", () => {
      var e;
      (e = this.componentRef.current) == null || e.scrollTo(0, 0);
    });
  }
  get document() {
    return document;
  }
  // We unfortunately get the bounding box every time as x+y changes
  // due to scrolling.
  getBox() {
    const e = this.mediaRef.current;
    if (!e)
      return { x: 0, y: 0, width: 0, height: 0 };
    const { x: n2, y: t, width: d, height: r } = e.getBoundingClientRect();
    return { x: n2, y: t, width: d, height: r };
  }
  componentDidUpdate(e) {
    const { crop: n2, onComplete: t } = this.props;
    if (t && !e.crop && n2) {
      const { width: d, height: r } = this.getBox();
      d && r && t(D(n2, d, r), v(n2, d, r));
    }
  }
  componentWillUnmount() {
    this.resizeObserver && this.resizeObserver.disconnect(), this.unbindDocMove();
  }
  bindDocMove() {
    this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, M), this.document.addEventListener("pointerup", this.onDocPointerDone, M), this.document.addEventListener("pointercancel", this.onDocPointerDone, M), this.docMoveBound = true);
  }
  unbindDocMove() {
    this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, M), this.document.removeEventListener("pointerup", this.onDocPointerDone, M), this.document.removeEventListener("pointercancel", this.onDocPointerDone, M), this.docMoveBound = false);
  }
  getCropStyle() {
    const { crop: e } = this.props;
    if (e)
      return {
        top: `${e.y}${e.unit}`,
        left: `${e.x}${e.unit}`,
        width: `${e.width}${e.unit}`,
        height: `${e.height}${e.unit}`
      };
  }
  dragCrop() {
    const { evData: e } = this, n2 = this.getBox(), t = this.makePixelCrop(n2), d = e.clientX - e.startClientX, r = e.clientY - e.startClientY;
    return t.x = b(e.startCropX + d, 0, n2.width - t.width), t.y = b(e.startCropY + r, 0, n2.height - t.height), t;
  }
  getPointRegion(e, n2, t, d) {
    const { evData: r } = this, o = r.clientX - e.x, w = r.clientY - e.y;
    let i;
    d && n2 ? i = n2 === "nw" || n2 === "n" || n2 === "ne" : i = w < r.startCropY;
    let s;
    return t && n2 ? s = n2 === "nw" || n2 === "w" || n2 === "sw" : s = o < r.startCropX, s ? i ? "nw" : "sw" : i ? "ne" : "se";
  }
  resolveMinDimensions(e, n2, t = 0, d = 0) {
    const r = Math.min(t, e.width), o = Math.min(d, e.height);
    return !n2 || !r && !o ? [r, o] : n2 > 1 ? r ? [r, r / n2] : [o * n2, o] : o ? [o * n2, o] : [r, r / n2];
  }
  resizeCrop() {
    const { evData: e } = this, { aspect: n2 = 0, maxWidth: t, maxHeight: d } = this.props, r = this.getBox(), [o, w] = this.resolveMinDimensions(r, n2, this.props.minWidth, this.props.minHeight);
    let i = this.makePixelCrop(r);
    const s = this.getPointRegion(r, e.ord, o, w), c = e.ord || s;
    let g = e.clientX - e.startClientX, p = e.clientY - e.startClientY;
    (o && c === "nw" || c === "w" || c === "sw") && (g = Math.min(g, -o)), (w && c === "nw" || c === "n" || c === "ne") && (p = Math.min(p, -w));
    const l = {
      unit: "px",
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    s === "ne" ? (l.x = e.startCropX, l.width = g, n2 ? (l.height = l.width / n2, l.y = e.startCropY - l.height) : (l.height = Math.abs(p), l.y = e.startCropY - l.height)) : s === "se" ? (l.x = e.startCropX, l.y = e.startCropY, l.width = g, n2 ? l.height = l.width / n2 : l.height = p) : s === "sw" ? (l.x = e.startCropX + g, l.y = e.startCropY, l.width = Math.abs(g), n2 ? l.height = l.width / n2 : l.height = p) : s === "nw" && (l.x = e.startCropX + g, l.width = Math.abs(g), n2 ? (l.height = l.width / n2, l.y = e.startCropY - l.height) : (l.height = Math.abs(p), l.y = e.startCropY + p));
    const C = k(
      l,
      n2,
      s,
      r.width,
      r.height,
      o,
      w,
      t,
      d
    );
    return n2 || x2.xyOrds.indexOf(c) > -1 ? i = C : x2.xOrds.indexOf(c) > -1 ? (i.x = C.x, i.width = C.width) : x2.yOrds.indexOf(c) > -1 && (i.y = C.y, i.height = C.height), i.x = b(i.x, 0, r.width - i.width), i.y = b(i.y, 0, r.height - i.height), i;
  }
  renderCropSelection() {
    const {
      ariaLabels: e = x2.defaultProps.ariaLabels,
      disabled: n2,
      locked: t,
      renderSelectionAddon: d,
      ruleOfThirds: r,
      crop: o
    } = this.props, w = this.getCropStyle();
    if (o)
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          style: w,
          className: "ReactCrop__crop-selection",
          onPointerDown: this.onCropPointerDown,
          "aria-label": e.cropArea,
          tabIndex: 0,
          onKeyDown: this.onComponentKeyDown,
          role: "group"
        },
        !n2 && !t && /* @__PURE__ */ React.createElement("div", { className: "ReactCrop__drag-elements", onFocus: this.onDragFocus }, /* @__PURE__ */ React.createElement("div", { className: "ReactCrop__drag-bar ord-n", "data-ord": "n" }), /* @__PURE__ */ React.createElement("div", { className: "ReactCrop__drag-bar ord-e", "data-ord": "e" }), /* @__PURE__ */ React.createElement("div", { className: "ReactCrop__drag-bar ord-s", "data-ord": "s" }), /* @__PURE__ */ React.createElement("div", { className: "ReactCrop__drag-bar ord-w", "data-ord": "w" }), /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-nw",
            "data-ord": "nw",
            tabIndex: 0,
            "aria-label": e.nwDragHandle,
            onKeyDown: (i) => this.onHandlerKeyDown(i, "nw"),
            role: "button"
          }
        ), /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-n",
            "data-ord": "n",
            tabIndex: 0,
            "aria-label": e.nDragHandle,
            onKeyDown: (i) => this.onHandlerKeyDown(i, "n"),
            role: "button"
          }
        ), /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-ne",
            "data-ord": "ne",
            tabIndex: 0,
            "aria-label": e.neDragHandle,
            onKeyDown: (i) => this.onHandlerKeyDown(i, "ne"),
            role: "button"
          }
        ), /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-e",
            "data-ord": "e",
            tabIndex: 0,
            "aria-label": e.eDragHandle,
            onKeyDown: (i) => this.onHandlerKeyDown(i, "e"),
            role: "button"
          }
        ), /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-se",
            "data-ord": "se",
            tabIndex: 0,
            "aria-label": e.seDragHandle,
            onKeyDown: (i) => this.onHandlerKeyDown(i, "se"),
            role: "button"
          }
        ), /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-s",
            "data-ord": "s",
            tabIndex: 0,
            "aria-label": e.sDragHandle,
            onKeyDown: (i) => this.onHandlerKeyDown(i, "s"),
            role: "button"
          }
        ), /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-sw",
            "data-ord": "sw",
            tabIndex: 0,
            "aria-label": e.swDragHandle,
            onKeyDown: (i) => this.onHandlerKeyDown(i, "sw"),
            role: "button"
          }
        ), /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-w",
            "data-ord": "w",
            tabIndex: 0,
            "aria-label": e.wDragHandle,
            onKeyDown: (i) => this.onHandlerKeyDown(i, "w"),
            role: "button"
          }
        )),
        d && /* @__PURE__ */ React.createElement("div", { className: "ReactCrop__selection-addon", onPointerDown: (i) => i.stopPropagation() }, d(this.state)),
        r && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "ReactCrop__rule-of-thirds-hz" }), /* @__PURE__ */ React.createElement("div", { className: "ReactCrop__rule-of-thirds-vt" }))
      );
  }
  makePixelCrop(e) {
    const n2 = { ...E, ...this.props.crop || {} };
    return D(n2, e.width, e.height);
  }
  render() {
    const { aspect: e, children: n2, circularCrop: t, className: d, crop: r, disabled: o, locked: w, style: i, ruleOfThirds: s } = this.props, { cropIsActive: c, newCropIsBeingDrawn: g } = this.state, p = r ? this.renderCropSelection() : null, l = H(
      "ReactCrop",
      d,
      c && "ReactCrop--active",
      o && "ReactCrop--disabled",
      w && "ReactCrop--locked",
      g && "ReactCrop--new-crop",
      r && e && "ReactCrop--fixed-aspect",
      r && t && "ReactCrop--circular-crop",
      r && s && "ReactCrop--rule-of-thirds",
      !this.dragStarted && r && !r.width && !r.height && "ReactCrop--invisible-crop",
      t && "ReactCrop--no-animate"
    );
    return /* @__PURE__ */ React.createElement("div", { ref: this.componentRef, className: l, style: i }, /* @__PURE__ */ React.createElement("div", { ref: this.mediaRef, className: "ReactCrop__child-wrapper", onPointerDown: this.onComponentPointerDown }, n2), r ? /* @__PURE__ */ React.createElement("svg", { className: "ReactCrop__crop-mask", width: "100%", height: "100%" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("mask", { id: `hole-${this.instanceId}` }, /* @__PURE__ */ React.createElement("rect", { width: "100%", height: "100%", fill: "white" }), t ? /* @__PURE__ */ React.createElement(
      "ellipse",
      {
        cx: `${r.x + r.width / 2}${r.unit}`,
        cy: `${r.y + r.height / 2}${r.unit}`,
        rx: `${r.width / 2}${r.unit}`,
        ry: `${r.height / 2}${r.unit}`,
        fill: "black"
      }
    ) : /* @__PURE__ */ React.createElement(
      "rect",
      {
        x: `${r.x}${r.unit}`,
        y: `${r.y}${r.unit}`,
        width: `${r.width}${r.unit}`,
        height: `${r.height}${r.unit}`,
        fill: "black"
      }
    ))), /* @__PURE__ */ React.createElement("rect", { fill: "black", fillOpacity: 0.5, width: "100%", height: "100%", mask: `url(#hole-${this.instanceId})` })) : void 0, p);
  }
};
m(x, "xOrds", ["e", "w"]), m(x, "yOrds", ["n", "s"]), m(x, "xyOrds", ["nw", "ne", "se", "sw"]), m(x, "nudgeStep", 1), m(x, "nudgeStepMedium", 10), m(x, "nudgeStepLarge", 100), m(x, "defaultProps", {
  ariaLabels: {
    cropArea: "Use the arrow keys to move the crop selection area",
    nwDragHandle: "Use the arrow keys to move the north west drag handle to change the crop selection area",
    nDragHandle: "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
    neDragHandle: "Use the arrow keys to move the north east drag handle to change the crop selection area",
    eDragHandle: "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
    seDragHandle: "Use the arrow keys to move the south east drag handle to change the crop selection area",
    sDragHandle: "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
    swDragHandle: "Use the arrow keys to move the south west drag handle to change the crop selection area",
    wDragHandle: "Use the up and down arrow keys to move the west drag handle to change the crop selection area"
  }
});
function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return L(
    B(
      {
        unit: "%",
        width: 90
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}
function SingleImageUpload({
  optional,
  control,
  fieldName,
  label,
  errors,
  onChangeValidation,
  viewOnly,
  disabled,
  aspect,
  disableRequiredsymbol,
  rules,
  labelFont,
  fileUploadUrl,
  isImageOptimize
}) {
  let errorsForField = errors?.[fieldName];
  const [crop, setCrop] = reactExports.useState(centerAspectCrop(100, 100, aspect || 16 / 9));
  let [error, setError] = reactExports.useState(errorsForField);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors?.[fieldName]]);
  function dataURLtoFile(dataURL, filename) {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n2 = bstr.length;
    const u8arr = new Uint8Array(n2);
    while (n2--) {
      u8arr[n2] = bstr.charCodeAt(n2);
    }
    return new File([u8arr], filename, { type: mime });
  }
  const uploadImage = async (e, field) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const fileSize = imageFile.size / (1024 * 1024);
    if (fileSize > 10) {
      n.error("Total file size should be lesser than 10MB.");
      setIsLoading(false);
      return;
    }
    const reader = new FileReader();
    reader.onload = async function(event) {
      const formData = new FormData();
      let targetWidth;
      let targetHeight;
      const img = new Image();
      img.src = event.target.result;
      img.onload = async function() {
        if (isImageOptimize == true) {
          const uploadImageHeight = img.height;
          const uploadImageWidth = img.width;
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (uploadImageHeight > 300 && uploadImageWidth > 300) {
            if (uploadImageWidth < uploadImageHeight) {
              targetWidth = 300;
              const ratio = uploadImageWidth / targetWidth;
              targetHeight = uploadImageHeight / ratio;
            } else {
              targetHeight = 300;
              const ratio = uploadImageHeight / targetHeight;
              targetWidth = uploadImageWidth / ratio;
            }
          } else {
            targetHeight = uploadImageHeight;
            targetWidth = uploadImageWidth;
          }
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
          const resizedDataURL = canvas.toDataURL("image/jpeg");
          const resizedFile = dataURLtoFile(resizedDataURL, imageFile.name);
          let srcUrl = URL.createObjectURL(resizedFile);
          field.onChange(srcUrl);
          formData.append("file", resizedFile);
        } else {
          formData.append("file", imageFile);
        }
        try {
          let res = await upload(`${fileUploadUrl}`, formData);
          if (res.data) {
            field.onChange(res.data.Result);
            onChangeValidation(res.data.Results);
            setError("");
          } else {
            n.error("Failed to upload");
            field.onChange("");
            onChangeValidation("");
          }
        } catch (error2) {
          n.error(error2?.response?.data?.message);
          field.onChange("");
          onChangeValidation("");
        }
        setIsLoading(false);
      };
    };
    reader.readAsDataURL(imageFile);
    e.target.value = "";
  };
  if (typeof localStorage != "undefined") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden min-h-24", children: [
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: !viewOnly && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            htmlFor: fieldName,
            className: classNames(labelFont ? labelFont : " text-sm  " + (disabled ? "" : "text-center") + " block font-medium text-gray-700 mb-1", error ? "text-danger" : "text-gray-400"),
            children: [
              label || fieldName,
              !optional && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger pl-1", children: "*" })
            ]
          }
        ),
        rules && rules.required && !disableRequiredsymbol ? /* @__PURE__ */ jsxRuntimeExports.jsx("sup", {}) : "",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: fieldName,
            control,
            rules: { required: !optional },
            render: ({ field }) => {
              if (disabled) {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-auto border-0 pt-4  print:pt-0 border-b justify-center border-transparent bg-gray-50 focus:border-darkprimary focus:ring-0 sm:text-sm rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-100 relative h-full flex flex-col justify-center items-center rounded-lg tracking-wide ", children: field?.value ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: field?.value, className: "max-h-80 max-w-80 print:max-h-60" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "material-symbols-outlined text-gray-800 text-5xl \r\n                                  text-center\r\n                                  font-light",
                      children: "no_photography"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 text-xs font-medium leading-normal text-gray-400 mb-8", children: "No Image" })
                ] }) }) });
              }
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: classNames(
                    "block w-full border-0 pt-4 border-b border-transparent bg-gray-100 focus:border-darkprimary focus:ring-0 sm:text-sm",
                    error ? "border-danger" : "text-gray-200 border-purple-400"
                  ),
                  children: field?.value?.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full relative h-full flex flex-col items-center rounded-lg tracking-wide ", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: field?.value, className: "max-h-80 max-w-80" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0  pt-2 pr-2 block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "rounded-md text-shadow text-white hover:text-white focus:outline-none focus:ring-2 \r\n                                    bg-neutral-50/80                                 \r\n                                    focus:ring-white focus:ring-offset-2 bg-lightcharcoal p-2 ",
                        onClick: () => {
                          setTimeout(() => {
                            field.onChange("");
                            onChangeValidation("");
                          }, 100);
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-8 w-8 text-darkprimary", "aria-hidden": "true" })
                        ]
                      }
                    ) })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-center lg:space-x-0 sm:space-x-10 py-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-100 lg:hidden relative h-full flex flex-col items-center rounded-lg tracking-wide cursor-pointer ", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-gray-800 text-5xl font-light", children: "photo_camera" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 text-xs font-medium leading-normal text-gray-400 mb-8", children: "Take From Camera" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "file",
                          className: "hidden",
                          accept: "image/*",
                          capture: "environment",
                          onChange: (e) => {
                            uploadImage(e, field);
                          }
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-full relative h-full flex flex-col items-center rounded-lg tracking-wide cursor-pointer ", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-gray-800 text-5xl font-light", children: "photo_library" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 text-xs lg:hidden font-medium leading-normal text-gray-400 mb-8", children: "Upload From Gallery" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 text-xs hidden lg:block font-medium leading-normal text-gray-400 mb-8", children: "Upload Image" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "file",
                          className: "hidden",
                          accept: "image/*",
                          onChange: (e) => {
                            uploadImage(e, field);
                          }
                        }
                      )
                    ] })
                  ] })
                }
              );
            }
          }
        ),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "This file is required" })
      ] }) }) }) }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {});
}
export {
  SingleImageUpload,
  SingleImageUpload as default
};
