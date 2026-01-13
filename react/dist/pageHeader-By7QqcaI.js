import { j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
const PageHeader = ({ heading, subHeading, rightChildren }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fixed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center lg:items-end justify-between gap-5 pb-5 lg:pb-7.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-gray-900", children: heading }),
      subHeading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 text-sm font-medium text-gray-600", children: subHeading })
    ] }),
    rightChildren && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2.5", children: rightChildren })
  ] }) });
};
export {
  PageHeader as P
};
