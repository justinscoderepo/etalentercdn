import { $ as $f7dceffc5ad7768b$export$4e328f61c538687f, a as $6179b936705e76d3$export$ae780daf29e6d456, w, e } from "./use-resolve-button-type-DPiHyuBj.js";
import { r as reactExports, k as React } from "./main-B7w5eCOl.js";
import { Y, y, n, o, a as n$1, V as V$1, K, d as s$2, A, u, t, b as o$1, h as e$1 } from "./keyboard-Dku-r8UD.js";
import { f as f$1, v, T, A as A$1, G } from "./use-is-mounted-DkvN6zYE.js";
import { f as f$2, s as s$1 } from "./hidden-tL6qlWMm.js";
function b({ onFocus: n2 }) {
  let [r, o2] = reactExports.useState(true), u2 = f$1();
  return r ? React.createElement(f$2, { as: "button", type: "button", features: s$1.Focusable, onFocus: (a2) => {
    a2.preventDefault();
    let e2, i = 50;
    function t2() {
      if (i-- <= 0) {
        e2 && cancelAnimationFrame(e2);
        return;
      }
      if (n2()) {
        if (cancelAnimationFrame(e2), !u2.current) return;
        o2(false);
        return;
      }
      e2 = requestAnimationFrame(t2);
    }
    e2 = requestAnimationFrame(t2);
  } }) : null;
}
const s = reactExports.createContext(null);
function a() {
  return { groups: /* @__PURE__ */ new Map(), get(o2, e2) {
    var i;
    let t2 = this.groups.get(o2);
    t2 || (t2 = /* @__PURE__ */ new Map(), this.groups.set(o2, t2));
    let n2 = (i = t2.get(e2)) != null ? i : 0;
    t2.set(e2, n2 + 1);
    let r = Array.from(t2.keys()).indexOf(e2);
    function u2() {
      let c = t2.get(e2);
      c > 1 ? t2.set(e2, c - 1) : t2.delete(e2);
    }
    return [r, u2];
  } };
}
function f({ children: o2 }) {
  let e2 = reactExports.useRef(a());
  return reactExports.createElement(s.Provider, { value: e2 }, o2);
}
function C(o2) {
  let e2 = reactExports.useContext(s);
  if (!e2) throw new Error("You must wrap your component in a <StableCollection>");
  let t2 = reactExports.useId(), [n2, r] = e2.current.get(o2, t2);
  return reactExports.useEffect(() => r, []), n2;
}
var Le = ((t2) => (t2[t2.Forwards = 0] = "Forwards", t2[t2.Backwards = 1] = "Backwards", t2))(Le || {}), _e = ((l) => (l[l.Less = -1] = "Less", l[l.Equal = 0] = "Equal", l[l.Greater = 1] = "Greater", l))(_e || {}), Se = ((n2) => (n2[n2.SetSelectedIndex = 0] = "SetSelectedIndex", n2[n2.RegisterTab = 1] = "RegisterTab", n2[n2.UnregisterTab = 2] = "UnregisterTab", n2[n2.RegisterPanel = 3] = "RegisterPanel", n2[n2.UnregisterPanel = 4] = "UnregisterPanel", n2))(Se || {});
let De = { [0](e2, r) {
  var d;
  let t2 = G(e2.tabs, (u2) => u2.current), l = G(e2.panels, (u2) => u2.current), a2 = t2.filter((u2) => {
    var T2;
    return !((T2 = u2.current) != null && T2.hasAttribute("disabled"));
  }), n2 = { ...e2, tabs: t2, panels: l };
  if (r.index < 0 || r.index > t2.length - 1) {
    let u$1 = u(Math.sign(r.index - e2.selectedIndex), { [-1]: () => 1, [0]: () => u(Math.sign(r.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    if (a2.length === 0) return n2;
    let T2 = u(u$1, { [0]: () => t2.indexOf(a2[0]), [1]: () => t2.indexOf(a2[a2.length - 1]) });
    return { ...n2, selectedIndex: T2 === -1 ? e2.selectedIndex : T2 };
  }
  let s2 = t2.slice(0, r.index), f2 = [...t2.slice(r.index), ...s2].find((u2) => a2.includes(u2));
  if (!f2) return n2;
  let b2 = (d = t2.indexOf(f2)) != null ? d : e2.selectedIndex;
  return b2 === -1 && (b2 = e2.selectedIndex), { ...n2, selectedIndex: b2 };
}, [1](e2, r) {
  if (e2.tabs.includes(r.tab)) return e2;
  let t2 = e2.tabs[e2.selectedIndex], l = G([...e2.tabs, r.tab], (n2) => n2.current), a2 = e2.selectedIndex;
  return e2.info.current.isControlled || (a2 = l.indexOf(t2), a2 === -1 && (a2 = e2.selectedIndex)), { ...e2, tabs: l, selectedIndex: a2 };
}, [2](e2, r) {
  return { ...e2, tabs: e2.tabs.filter((t2) => t2 !== r.tab) };
}, [3](e2, r) {
  return e2.panels.includes(r.panel) ? e2 : { ...e2, panels: G([...e2.panels, r.panel], (t2) => t2.current) };
}, [4](e2, r) {
  return { ...e2, panels: e2.panels.filter((t2) => t2 !== r.panel) };
} }, z = reactExports.createContext(null);
z.displayName = "TabsDataContext";
function h(e2) {
  let r = reactExports.useContext(z);
  if (r === null) {
    let t2 = new Error(`<${e2} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, h), t2;
  }
  return r;
}
let V = reactExports.createContext(null);
V.displayName = "TabsActionsContext";
function Q(e2) {
  let r = reactExports.useContext(V);
  if (r === null) {
    let t2 = new Error(`<${e2} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, Q), t2;
  }
  return r;
}
function Fe(e2, r) {
  return u(r.type, De, e2, r);
}
let Ie = "div";
function he(e2, r) {
  let { defaultIndex: t2 = 0, vertical: l = false, manual: a2 = false, onChange: n$2, selectedIndex: s2 = null, ...g } = e2;
  const f$12 = l ? "vertical" : "horizontal", b$1 = a2 ? "manual" : "auto";
  let d = s2 !== null, u2 = s$2({ isControlled: d }), T2 = y(r), [p, c] = reactExports.useReducer(Fe, { info: u2, selectedIndex: s2 != null ? s2 : t2, tabs: [], panels: [] }), v2 = n$1({ selectedIndex: p.selectedIndex }), m = s$2(n$2 || (() => {
  })), C2 = s$2(p.tabs), D = reactExports.useMemo(() => ({ orientation: f$12, activation: b$1, ...p }), [f$12, b$1, p]), P = o((i) => (c({ type: 1, tab: i }), () => c({ type: 2, tab: i }))), R = o((i) => (c({ type: 3, panel: i }), () => c({ type: 4, panel: i }))), A2 = o((i) => {
    L.current !== i && m.current(i), d || c({ type: 0, index: i });
  }), L = s$2(d ? e2.selectedIndex : p.selectedIndex), _ = reactExports.useMemo(() => ({ registerTab: P, registerPanel: R, change: A2 }), []);
  n(() => {
    c({ type: 0, index: s2 != null ? s2 : t2 });
  }, [s2]), n(() => {
    if (L.current === void 0 || p.tabs.length <= 0) return;
    let i = G(p.tabs, (S) => S.current);
    i.some((S, $) => p.tabs[$] !== S) && A2(i.indexOf(p.tabs[L.current]));
  });
  let J = { ref: T2 }, X = K();
  return React.createElement(f, null, React.createElement(V.Provider, { value: _ }, React.createElement(z.Provider, { value: D }, D.tabs.length <= 0 && React.createElement(b, { onFocus: () => {
    var i, M;
    for (let S of C2.current) if (((i = S.current) == null ? void 0 : i.tabIndex) === 0) return (M = S.current) == null || M.focus(), true;
    return false;
  } }), X({ ourProps: J, theirProps: g, slot: v2, defaultTag: Ie, name: "Tabs" }))));
}
let ve = "div";
function Ce(e2, r) {
  let { orientation: t2, selectedIndex: l } = h("Tab.List"), a2 = y(r), n2 = n$1({ selectedIndex: l }), s2 = e2, g = { ref: a2, role: "tablist", "aria-orientation": t2 };
  return K()({ ourProps: g, theirProps: s2, slot: n2, defaultTag: ve, name: "Tabs.List" });
}
let Me = "button";
function Ge(e$2, r) {
  var Y2, Z;
  let t$1 = reactExports.useId(), { id: l = `headlessui-tabs-tab-${t$1}`, disabled: a2 = false, autoFocus: n$2 = false, ...s2 } = e$2, { orientation: g, activation: f2, selectedIndex: b2, tabs: d, panels: u$1 } = h("Tab"), T$1 = Q("Tab"), p = h("Tab"), [c, v$1] = reactExports.useState(null), m = reactExports.useRef(null), C$1 = y(m, r, v$1);
  n(() => T$1.registerTab(m), [T$1, m]);
  let D = C("tabs"), P = d.indexOf(m);
  P === -1 && (P = D);
  let R = P === b2, A2 = o((o2) => {
    let E = o2();
    if (E === A$1.Success && f2 === "auto") {
      let ee = e$1(m.current), B = p.tabs.findIndex((ce) => ce.current === ee);
      B !== -1 && T$1.change(B);
    }
    return E;
  }), L = o((o2) => {
    let E = d.map((B) => B.current).filter(Boolean);
    if (o2.key === o$1.Space || o2.key === o$1.Enter) {
      o2.preventDefault(), o2.stopPropagation(), T$1.change(P);
      return;
    }
    switch (o2.key) {
      case o$1.Home:
      case o$1.PageUp:
        return o2.preventDefault(), o2.stopPropagation(), A2(() => v(E, T.First));
      case o$1.End:
      case o$1.PageDown:
        return o2.preventDefault(), o2.stopPropagation(), A2(() => v(E, T.Last));
    }
    if (A2(() => u(g, { vertical() {
      return o2.key === o$1.ArrowUp ? v(E, T.Previous | T.WrapAround) : o2.key === o$1.ArrowDown ? v(E, T.Next | T.WrapAround) : A$1.Error;
    }, horizontal() {
      return o2.key === o$1.ArrowLeft ? v(E, T.Previous | T.WrapAround) : o2.key === o$1.ArrowRight ? v(E, T.Next | T.WrapAround) : A$1.Error;
    } })) === A$1.Success) return o2.preventDefault();
  }), _ = reactExports.useRef(false), J = o(() => {
    var o2;
    _.current || (_.current = true, (o2 = m.current) == null || o2.focus({ preventScroll: true }), T$1.change(P), t(() => {
      _.current = false;
    }));
  }), X = o((o2) => {
    o2.preventDefault();
  }), { isFocusVisible: i, focusProps: M } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: n$2 }), { isHovered: S, hoverProps: $ } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: a2 }), { pressed: pe, pressProps: ue } = w({ disabled: a2 }), Te = n$1({ selected: R, hover: S, active: pe, focus: i, autofocus: n$2, disabled: a2 }), de = V$1({ ref: C$1, onKeyDown: L, onMouseDown: X, onClick: J, id: l, role: "tab", type: e(e$2, c), "aria-controls": (Z = (Y2 = u$1[P]) == null ? void 0 : Y2.current) == null ? void 0 : Z.id, "aria-selected": R, tabIndex: R ? 0 : -1, disabled: a2 || void 0, autoFocus: n$2 }, M, $, ue);
  return K()({ ourProps: de, theirProps: s2, slot: Te, defaultTag: Me, name: "Tabs.Tab" });
}
let Ue = "div";
function He(e2, r) {
  let { selectedIndex: t2 } = h("Tab.Panels"), l = y(r), a2 = n$1({ selectedIndex: t2 }), n2 = e2, s2 = { ref: l };
  return K()({ ourProps: s2, theirProps: n2, slot: a2, defaultTag: Ue, name: "Tabs.Panels" });
}
let we = "div", Oe = A.RenderStrategy | A.Static;
function Ne(e2, r) {
  var R, A2, L, _;
  let t2 = reactExports.useId(), { id: l = `headlessui-tabs-panel-${t2}`, tabIndex: a2 = 0, ...n$2 } = e2, { selectedIndex: s2, tabs: g, panels: f2 } = h("Tab.Panel"), b2 = Q("Tab.Panel"), d = reactExports.useRef(null), u2 = y(d, r);
  n(() => b2.registerPanel(d), [b2, d]);
  let T2 = C("panels"), p = f2.indexOf(d);
  p === -1 && (p = T2);
  let c = p === s2, { isFocusVisible: v2, focusProps: m } = $f7dceffc5ad7768b$export$4e328f61c538687f(), C$1 = n$1({ selected: c, focus: v2 }), D = V$1({ ref: u2, id: l, role: "tabpanel", "aria-labelledby": (A2 = (R = g[p]) == null ? void 0 : R.current) == null ? void 0 : A2.id, tabIndex: c ? a2 : -1 }, m), P = K();
  return !c && ((L = n$2.unmount) == null || L) && !((_ = n$2.static) != null && _) ? React.createElement(f$2, { "aria-hidden": "true", ...D }) : P({ ourProps: D, theirProps: n$2, slot: C$1, defaultTag: we, features: Oe, visible: c, name: "Tabs.Panel" });
}
let ke = Y(Ge), Be = Y(he), We = Y(Ce), je = Y(He), Ke = Y(Ne), dt = Object.assign(ke, { Group: Be, List: We, Panels: je, Panel: Ke });
export {
  dt as d
};
