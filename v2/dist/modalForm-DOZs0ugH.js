import { r as reactExports, j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
import { h as ht, K as Ke } from "./dialog-DkCfFwgC.js";
import { F as ForwardRef } from "./XMarkIcon-CyBmq7NC.js";
import "./keyboard-Dku-r8UD.js";
import "./dom-XjFFvgb6.js";
import "./use-is-mounted-DkvN6zYE.js";
import "./hidden-tL6qlWMm.js";
import "./open-closed-gVG0H0sE.js";
import "./description-3iOOxFmG.js";
import "./navigationUtils-BZC1EMRn.js";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ModalForm({ isPlainView, setOpen, open, title, description, children, center, fullScreen, customHeading, outerClass, childrenClass }) {
  setTimeout(() => {
    document.querySelectorAll("[inert]")?.forEach((x) => {
      x.removeAttribute("inert");
      x.removeAttribute("aria-hidden");
    });
  }, 100);
  reactExports.useEffect(() => {
  }, []);
  if (isPlainView) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 print:mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[400px] ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "print:p-0", children }) }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ht,
    {
      role: "dialog",
      open: open ?? false,
      as: "div",
      className: "relative z-[99999]",
      onClose: (x) => {
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ke.Child, { as: reactExports.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity print:hidden" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed print:relative  inset-0 z-10 overflow-y-auto print:overflow-visible", id: "fixedScrollableBox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: classNames(
              "flex min-h-full  min-w-fit items-end   mx-auto self-center  p-4  print:p-0 text-center sm:items-center sm:p-6",
              center ? "justify-center" : "justify-end",
              outerClass
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ke.Child,
              {
                as: reactExports.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 translate-y-4 translate-y-0 scale-95",
                enterTo: "opacity-100 translate-y-0 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 translate-y-0 scale-100",
                leaveTo: "opacity-0 translate-y-4 translate-y-0 scale-95",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  ht.Panel,
                  {
                    className: classNames(
                      "relative transform bg-white print:p-0 pb-2 text-left shadow-xl transition-all my-0 print:shadow-none ",
                      fullScreen ? "w-1/2 mx-auto" : "w-full md:max-w-4/5 lg:max-w-screen-lg mx-auto"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("px-4 py-4 sm:px-8 relative ", customHeading ? "" : "bg-[#193e65]"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between space-x-3", children: [
                        customHeading ? customHeading : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold leading-6 text-white", children: title }),
                          description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white", children: description || "Continue the process" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => setOpen(false),
                            className: " print:hidden absolute rounded-full top-2 p-2 right-4 bg-[#193e65] text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-2.5" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close panel" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "h-6 w-6" })
                            ]
                          }
                        )
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1  print:mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[400px] ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: childrenClass || "sm:px-6 print:p-0", children }) }) }) })
                    ]
                  }
                )
              }
            )
          }
        ) })
      ]
    },
    title
  );
}
export {
  classNames,
  ModalForm as default
};
