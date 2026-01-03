import { j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
import { F as ForwardRef } from "./XMarkIcon-CyBmq7NC.js";
function IframeBox({ hideTitle, hideGoBack, setOpen, title, description, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: !hideTitle ? "p-5 py-8" : "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: !hideTitle ? "w-full overflow-hidden rounded-md ring-1 ring-slate-900/10" : "", children: [
    !hideTitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#193e65] px-4 py-4 sm:px-8 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between space-x-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold leading-6 text-white", children: title }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white", children: description || "Continue the process" })
      ] }),
      !hideGoBack && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setOpen(false),
          className: "absolute rounded-full top-2 p-2 right-4 bg-[#193e65] text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-2.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close panel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "h-6 w-6" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: !hideTitle ? "flex h-full w-[100%] flex-col overflow-y-scroll bg-white py-6 shadow-xl" : "flex h-full w-[100%] py-3 flex-col overflow-y-scroll bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: !hideTitle ? "relative flex-1 px-2" : "relative flex-1 px-0", children }) })
  ] }) }) });
}
export {
  IframeBox as default
};
