import { j as jsxRuntimeExports, r as reactExports, _ as __vitePreload } from "./main-B7w5eCOl.js";
const IframeRender = reactExports.lazy(() => __vitePreload(() => import("./IframeRender-gdUyqfcd.js"), true ? [] : void 0));
const ConditionalLayoutWrapper = reactExports.lazy(() => __vitePreload(() => import("./ConditionalLayoutWrapper-BXraX8Ty.js"), true ? [] : void 0));
const withConditionalLayout = (Component, props = {}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ConditionalLayoutWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...props }) });
};
const withIframeLayout = (title = "Loading...", props = {}) => {
  return withConditionalLayout(IframeRender, { title, ...props });
};
export {
  withConditionalLayout as a,
  withIframeLayout as w
};
