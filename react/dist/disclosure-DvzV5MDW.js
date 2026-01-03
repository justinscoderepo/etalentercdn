import { $ as $f7dceffc5ad7768b$export$4e328f61c538687f, a as $6179b936705e76d3$export$ae780daf29e6d456, w, e } from "./use-resolve-button-type-DPiHyuBj.js";
import { k as React, r as reactExports } from "./main-B7w5eCOl.js";
import { Y, y, T, g as b, o, a as n, K, u, V as V$1, A, b as o$1, l } from "./keyboard-Dku-r8UD.js";
import { C, c, i, u as u$1, N, x, s } from "./open-closed-gVG0H0sE.js";
import { s as s$1 } from "./bugs-BMBAUfeG.js";
import { i as i$1 } from "./dom-XjFFvgb6.js";
var t;
let a = (t = React.startTransition) != null ? t : function(i2) {
  i2();
};
var me = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(me || {}), fe = ((n2) => (n2[n2.ToggleDisclosure = 0] = "ToggleDisclosure", n2[n2.CloseDisclosure = 1] = "CloseDisclosure", n2[n2.SetButtonId = 2] = "SetButtonId", n2[n2.SetPanelId = 3] = "SetPanelId", n2[n2.SetButtonElement = 4] = "SetButtonElement", n2[n2.SetPanelElement = 5] = "SetPanelElement", n2))(fe || {});
let De = { [0]: (e2) => ({ ...e2, disclosureState: u(e2.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e2) => e2.disclosureState === 1 ? e2 : { ...e2, disclosureState: 1 }, [2](e2, t2) {
  return e2.buttonId === t2.buttonId ? e2 : { ...e2, buttonId: t2.buttonId };
}, [3](e2, t2) {
  return e2.panelId === t2.panelId ? e2 : { ...e2, panelId: t2.panelId };
}, [4](e2, t2) {
  return e2.buttonElement === t2.element ? e2 : { ...e2, buttonElement: t2.element };
}, [5](e2, t2) {
  return e2.panelElement === t2.element ? e2 : { ...e2, panelElement: t2.element };
} }, _ = reactExports.createContext(null);
_.displayName = "DisclosureContext";
function M(e2) {
  let t2 = reactExports.useContext(_);
  if (t2 === null) {
    let l2 = new Error(`<${e2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, M), l2;
  }
  return t2;
}
let F = reactExports.createContext(null);
F.displayName = "DisclosureAPIContext";
function V(e2) {
  let t2 = reactExports.useContext(F);
  if (t2 === null) {
    let l2 = new Error(`<${e2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, V), l2;
  }
  return t2;
}
let H = reactExports.createContext(null);
H.displayName = "DisclosurePanelContext";
function ye() {
  return reactExports.useContext(H);
}
function Pe(e2, t2) {
  return u(t2.type, De, e2, t2);
}
let Ee = reactExports.Fragment;
function Se(e2, t2) {
  let { defaultOpen: l$1 = false, ...p } = e2, a2 = reactExports.useRef(null), c$1 = y(t2, T((u2) => {
    a2.current = u2;
  }, e2.as === void 0 || b(e2.as))), n$1 = reactExports.useReducer(Pe, { disclosureState: l$1 ? 0 : 1, buttonElement: null, panelElement: null, buttonId: null, panelId: null }), [{ disclosureState: o$12, buttonId: r }, f] = n$1, s2 = o((u2) => {
    f({ type: 1 });
    let m = l(a2.current);
    if (!m || !r) return;
    let d = (() => u2 ? i$1(u2) ? u2 : "current" in u2 && i$1(u2.current) ? u2.current : m.getElementById(r) : m.getElementById(r))();
    d == null || d.focus();
  }), E = reactExports.useMemo(() => ({ close: s2 }), [s2]), T$1 = n({ open: o$12 === 0, close: s2 }), D = { ref: c$1 }, S = K();
  return React.createElement(_.Provider, { value: n$1 }, React.createElement(F.Provider, { value: E }, React.createElement(C, { value: s2 }, React.createElement(c, { value: u(o$12, { [0]: i.Open, [1]: i.Closed }) }, S({ ourProps: D, theirProps: p, slot: T$1, defaultTag: Ee, name: "Disclosure" })))));
}
let ge = "button";
function Ae(e$1, t2) {
  let l2 = reactExports.useId(), { id: p = `headlessui-disclosure-button-${l2}`, disabled: a2 = false, autoFocus: c2 = false, ...n$1 } = e$1, [o$2, r] = M("Disclosure.Button"), f = ye(), s2 = f === null ? false : f === o$2.panelId, E = reactExports.useRef(null), T2 = y(E, t2, o((i2) => {
    if (!s2) return r({ type: 4, element: i2 });
  }));
  reactExports.useEffect(() => {
    if (!s2) return r({ type: 2, buttonId: p }), () => {
      r({ type: 2, buttonId: null });
    };
  }, [p, r, s2]);
  let D = o((i2) => {
    var g;
    if (s2) {
      if (o$2.disclosureState === 1) return;
      switch (i2.key) {
        case o$1.Space:
        case o$1.Enter:
          i2.preventDefault(), i2.stopPropagation(), r({ type: 0 }), (g = o$2.buttonElement) == null || g.focus();
          break;
      }
    } else switch (i2.key) {
      case o$1.Space:
      case o$1.Enter:
        i2.preventDefault(), i2.stopPropagation(), r({ type: 0 });
        break;
    }
  }), S = o((i2) => {
    switch (i2.key) {
      case o$1.Space:
        i2.preventDefault();
        break;
    }
  }), u2 = o((i2) => {
    var g;
    s$1(i2.currentTarget) || a2 || (s2 ? (r({ type: 0 }), (g = o$2.buttonElement) == null || g.focus()) : r({ type: 0 }));
  }), { isFocusVisible: m, focusProps: d } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: c2 }), { isHovered: C2, hoverProps: h } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: a2 }), { pressed: $, pressProps: U } = w({ disabled: a2 }), J = n({ open: o$2.disclosureState === 0, hover: C2, active: $, disabled: a2, focus: m, autofocus: c2 }), G = e(e$1, o$2.buttonElement), X = s2 ? V$1({ ref: T2, type: G, disabled: a2 || void 0, autoFocus: c2, onKeyDown: D, onClick: u2 }, d, h, U) : V$1({ ref: T2, id: p, type: G, "aria-expanded": o$2.disclosureState === 0, "aria-controls": o$2.panelElement ? o$2.panelId : void 0, disabled: a2 || void 0, autoFocus: c2, onKeyDown: D, onKeyUp: S, onClick: u2 }, d, h, U);
  return K()({ ourProps: X, theirProps: n$1, slot: J, defaultTag: ge, name: "Disclosure.Button" });
}
let be = "div", Ce = A.RenderStrategy | A.Static;
function Re(e2, t2) {
  let l2 = reactExports.useId(), { id: p = `headlessui-disclosure-panel-${l2}`, transition: a$1 = false, ...c2 } = e2, [n$1, o$12] = M("Disclosure.Panel"), { close: r } = V("Disclosure.Panel"), [f, s$12] = reactExports.useState(null), E = y(t2, o((C2) => {
    a(() => o$12({ type: 5, element: C2 }));
  }), s$12);
  reactExports.useEffect(() => (o$12({ type: 3, panelId: p }), () => {
    o$12({ type: 3, panelId: null });
  }), [p, o$12]);
  let T2 = u$1(), [D, S] = N(a$1, f, T2 !== null ? (T2 & i.Open) === i.Open : n$1.disclosureState === 0), u2 = n({ open: n$1.disclosureState === 0, close: r }), m = { ref: E, id: p, ...x(S) }, d = K();
  return React.createElement(s, null, React.createElement(H.Provider, { value: n$1.panelId }, d({ ourProps: m, theirProps: c2, slot: u2, defaultTag: be, features: Ce, visible: D, name: "Disclosure.Panel" })));
}
let Ie = Y(Se), xe = Y(Ae), Le = Y(Re), Xe = Object.assign(Ie, { Button: xe, Panel: Le });
export {
  Le as L,
  Xe as X,
  xe as x
};
