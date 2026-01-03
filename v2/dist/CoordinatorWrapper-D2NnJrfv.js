import { r as reactExports, j as jsxRuntimeExports, L as Loader, _ as __vitePreload } from "./main-B7w5eCOl.js";
import { c as createBrowserRouter, R as RouterProvider2 } from "./navigationUtils-BZC1EMRn.js";
import { g as getCoordinatorRoutes } from "./coordinatorRouter-Dh6G1WsP.js";
import "./layoutUtils-Dn6dHhG-.js";
const ErrorPage = reactExports.lazy(() => __vitePreload(() => import("./index-CS2r6_hj.js"), true ? [] : void 0));
const ErrorBoundary = () => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "ErrorBoundary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorPage, {}) });
const CoordinatorWrapper = ({ user, ...props }) => {
  const router = reactExports.useMemo(() => {
    const coordinatorRoutes = getCoordinatorRoutes(user, props);
    const routesWithErrorHandling = coordinatorRoutes.map((route) => ({
      ...route,
      errorElement: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, {})
    }));
    return createBrowserRouter(routesWithErrorHandling);
  }, [user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "CoordinatorWrapper-Router" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router }) });
};
export {
  CoordinatorWrapper as default
};
