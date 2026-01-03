import { r as reactExports, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { h as ht, L as Lt, z as ze, Q as Qe } from "./dialog-DkCfFwgC.js";
import { F as ForwardRef } from "./CheckIcon-8INY0B1Y.js";
import { F as ForwardRef$1 } from "./TrashIcon-DMovC4zz.js";
function useConfirmation() {
  const [properties, setProperties] = reactExports.useState(null);
  const [animate, setAnimate] = reactExports.useState(false);
  return [
    properties ? ({ title, description, confirmClass, confirmButtonLabel, cancelButtonLabel, confirmButtonClick, cancelButtonClick, confirmButtonDisabled }) => {
      let isDelete = title.toLowerCase().indexOf("delete") != -1;
      let isRemove = title.toLowerCase().indexOf("remove") != -1;
      if (isRemove) {
        isDelete = true;
      }
      let isApprove = title.toLowerCase().indexOf("approve") != -1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ht,
        {
          as: "div",
          open: properties !== null,
          className: "relative z-10",
          onClose: () => {
            if (cancelButtonClick) cancelButtonClick({}, properties);
            setProperties(null);
            setAnimate(false);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Lt,
              {
                transition: true,
                className: "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              ze,
              {
                transition: true,
                className: "relative transform overflow-hidden rounded-lg bg-white px-8 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    !isDelete && !isApprove ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex size-12 items-center justify-center rounded-full bg-green-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "size-6 text-green-600" }) }) : isDelete ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex size-12 items-center justify-center rounded-full bg-red-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { "aria-hidden": "true", className: "size-6 text-red-700" }) }) : isApprove ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex size-12 items-center justify-center rounded-full bg-green-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "size-6 text-green-600" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-center sm:mt-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Qe, { as: "h3", className: "text-base font-semibold text-gray-900", children: title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: description }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        disabled: confirmButtonDisabled || animate,
                        className: classNames(
                          confirmClass || "inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  sm:col-start-2",
                          isDelete ? "bg-red-600 hover:bg-red-500 focus-visible:outline-red-600" : isApprove ? "bg-green-600 hover:bg-green-500 focus-visible:outline-green-600" : "bg-green-600 hover:bg-green-500 focus-visible:outline-green-600"
                        ),
                        onClick: async (e) => {
                          e.stopPropagation();
                          setAnimate(true);
                          if (confirmButtonClick.constructor.name === "AsyncFunction") {
                            let success = await confirmButtonClick(properties);
                            if (typeof success == "undefined" || success) {
                              setProperties(null);
                            }
                          } else {
                            let success = confirmButtonClick(properties);
                            if (typeof success == "undefined" || success) {
                              setProperties(null);
                            }
                          }
                          setAnimate(false);
                        },
                        children: confirmButtonLabel
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        disabled: animate,
                        type: "button",
                        "data-autofocus": true,
                        className: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset  cursor-pointer ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0",
                        onClick: (e) => {
                          if (cancelButtonClick) cancelButtonClick(e, properties);
                          setProperties(null);
                          setAnimate(false);
                        },
                        children: cancelButtonLabel || "Cancel"
                      }
                    )
                  ] })
                ]
              }
            ) }) })
          ]
        }
      );
    } : () => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
    (item) => {
      setProperties(item);
    }
  ];
}
export {
  useConfirmation as u
};
