import { r as reactExports, j as jsxRuntimeExports, L as Loader, _ as __vitePreload } from "./main-B7w5eCOl.js";
import { c as createBrowserRouter, R as RouterProvider2 } from "./navigationUtils-BZC1EMRn.js";
import { g as getCoordinatorRoutes } from "./coordinatorRouter-Dh6G1WsP.js";
import "./layoutUtils-Dn6dHhG-.js";
const ErrorPage = reactExports.lazy(() => __vitePreload(() => import("./index-CS2r6_hj.js"), true ? [] : void 0));
const ErrorBoundary = () => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "ErrorBoundary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorPage, {}) });
const ProjectorWrapper = ({ user, ...props }) => {
  const router = reactExports.useMemo(() => {
    const allRoutes = getCoordinatorRoutes(user, props);
    const projectorRoutes = allRoutes.filter((route) => {
      const path = route.path;
      return path === "/" || path === "/Home/Index" || path.includes("LiveResultPresentation") || path.includes("ResultPresentation") || path.includes("Public/ViewEvent") || path === "*";
    });
    const routesWithErrorHandling = projectorRoutes.map((route) => ({
      ...route,
      errorElement: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, {})
    }));
    const router2 = createBrowserRouter(routesWithErrorHandling);
    return router2;
  }, [user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "ProjectorWrapper-Router" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router }) });
};
export {
  ProjectorWrapper as default
};
