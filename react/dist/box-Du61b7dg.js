import { j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
const Box = ({ heading, description, children, outerClasses, headingClasses, childrenClasses, customHeading }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("flex max-w-full lg:py-3  print:py-0", outerClasses), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: classNames("flex w-full bg-white shadow-md p-2 print:py-0 box"),
      style: {
        background: "linear-gradient(45deg, white, white)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames("flex p-2 print:py-0 flex-col w-full"), children: [
        customHeading ? customHeading : heading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames("border-b-[#485257] text-[#206689] items-center  font-medium mb-0 pb-1 px-1 w-full uppercase border-b-2 text-base", headingClasses), children: [
          heading,
          description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("text-xs text-gray-600 font-normal normal-case  print:hidden"), children: description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(childrenClasses || "px-1 lg:px-4 py-1  w-full flex"), children })
      ] })
    }
  ) });
};
export {
  Box as B
};
