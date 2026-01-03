import { j as jsxRuntimeExports, r as reactExports, _ as __vitePreload, L as Loader } from "./main-B7w5eCOl.js";
import { g as generateRoutes, c as createBrowserRouter, R as RouterProvider2 } from "./navigationUtils-BZC1EMRn.js";
import { w as withIframeLayout } from "./layoutUtils-Dn6dHhG-.js";
reactExports.lazy(() => __vitePreload(() => import("./Index-BY3LAgUZ.js"), true ? [] : void 0));
const JudgesScoreCard = reactExports.lazy(() => __vitePreload(() => import("./judgesScoreCardRefactored-DzjDqGzR.js"), true ? [] : void 0));
const PublicEventView = reactExports.lazy(() => __vitePreload(() => import("./publicEventView-CgyKGaUr.js"), true ? [] : void 0));
const NotFoundPage = reactExports.lazy(() => __vitePreload(() => import("./index-BlJ44tc-.js"), true ? [] : void 0));
const getJudgeRoutes = (user, context = {}) => {
  return [
    // Home and dashboard
    ...generateRoutes("/Home/Index", withIframeLayout("Home Dashboard")),
    // Judge-specific scoring routes
    ...generateRoutes("/Judge/ScoreCard", /* @__PURE__ */ jsxRuntimeExports.jsx(JudgesScoreCard, { ...context })),
    ...generateRoutes("/Coordinator/RenderScoreCardV2", /* @__PURE__ */ jsxRuntimeExports.jsx(JudgesScoreCard, { ...context })),
    // Public viewing access (judges can view event details)
    ...generateRoutes("/Public/RenderViewEvent", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicEventView, { ...context })),
    ...generateRoutes("/Public/ViewEvent/:eventName", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicEventView, { ...context })),
    // Judge profile routes
    ...generateRoutes("/Profile/ProfileSettings", withIframeLayout("Profile Settings")),
    ...generateRoutes("/MyRoles/Index", withIframeLayout("My Roles")),
    // Utility routes
    ...generateRoutes("/about", /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "About" })),
    // 404 catch-all route
    ...generateRoutes("*", /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {}))
  ];
};
const ErrorPage = reactExports.lazy(() => __vitePreload(() => import("./index-CS2r6_hj.js"), true ? [] : void 0));
const ErrorBoundary = () => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "ErrorBoundary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorPage, {}) });
const JudgeWrapper = ({ user, ...props }) => {
  const router = reactExports.useMemo(() => {
    const judgeRoutes = getJudgeRoutes(user, props);
    const routesWithErrorHandling = judgeRoutes.map((route) => ({
      ...route,
      errorElement: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, {})
    }));
    const router2 = createBrowserRouter(routesWithErrorHandling);
    return router2;
  }, [user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "JudgeWrapper-Router" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router }) });
};
export {
  JudgeWrapper as default
};
