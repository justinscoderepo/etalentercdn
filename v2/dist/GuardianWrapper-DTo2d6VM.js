import { j as jsxRuntimeExports, r as reactExports, _ as __vitePreload, L as Loader } from "./main-B7w5eCOl.js";
import { g as generateRoutes, c as createBrowserRouter, R as RouterProvider2 } from "./navigationUtils-BZC1EMRn.js";
import { w as withIframeLayout } from "./layoutUtils-Dn6dHhG-.js";
reactExports.lazy(() => __vitePreload(() => import("./Index-BY3LAgUZ.js"), true ? [] : void 0));
const PublicRegistrationOuter = reactExports.lazy(() => __vitePreload(() => import("./publicRegistrationOuter-0jxplRJf.js"), true ? [] : void 0));
const EventRegistrationWrapper = reactExports.lazy(() => __vitePreload(() => import("./EventRegistrationWrapper-DScZRw7m.js"), true ? [] : void 0));
const PublicEventView = reactExports.lazy(() => __vitePreload(() => import("./publicEventView-CgyKGaUr.js"), true ? [] : void 0));
const NotFoundPage = reactExports.lazy(() => __vitePreload(() => import("./index-BlJ44tc-.js"), true ? [] : void 0));
const getGuardianRoutes = (user, context = {}) => {
  return [
    // Home and dashboard
    ...generateRoutes("/Home/Index", withIframeLayout("Home Dashboard")),
    // Guardian registration management (for candidates under their care)
    ...generateRoutes("/Home/CandidateParticipation", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicRegistrationOuter, { ...context })),
    ...generateRoutes("/Public/EventRegistration/:eventName", /* @__PURE__ */ jsxRuntimeExports.jsx(EventRegistrationWrapper, {})),
    // Event viewing access
    ...generateRoutes("/Public/RenderViewEvent", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicEventView, { ...context })),
    ...generateRoutes("/Public/ViewEvent/:eventName", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicEventView, { ...context })),
    // Guardian profile routes
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
const GuardianWrapper = ({ user, ...props }) => {
  const router = reactExports.useMemo(() => {
    const guardianRoutes = getGuardianRoutes(user, props);
    const routesWithErrorHandling = guardianRoutes.map((route) => ({
      ...route,
      errorElement: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, {})
    }));
    const router2 = createBrowserRouter(routesWithErrorHandling);
    return router2;
  }, [user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "GuardianWrapper-Router" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router }) });
};
export {
  GuardianWrapper as default
};
