import { j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { a as useNavigate, d as useLocation } from "./navigationUtils-BZC1EMRn.js";
function OldNewTabLayout({ tabs = [], children }) {
  const navigate = useNavigate();
  useLocation();
  const activeTab = tabs.find((tab) => tab.active) || tabs[0];
  const handleTabClick = (tab) => {
    if (tab.path !== activeTab?.path) {
      navigate(tab.path);
    }
  };
  if (!tabs || tabs.length === 0) {
    return children;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceVariant border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex gap-0.5 flex-1", "aria-label": "Page version tabs", children: tabs.map((tab, index) => {
      const isActive = activeTab?.path === tab.path;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => handleTabClick(tab),
          className: classNames(
            "relative px-3 py-1.5 text-xs font-medium transition-all duration-200 border-t-2",
            "focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-cyan-400",
            isActive ? "bg-cyan-50 text-cyan-700 border-cyan-500 shadow-sm" : "text-onSurfaceVariant hover:text-onSurface hover:bg-surfaceCard border-transparent hover:border-border"
          ),
          "aria-current": isActive ? "page" : void 0,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: tab.title })
        },
        index
      );
    }) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto", children })
  ] });
}
export {
  OldNewTabLayout as O
};
