import { r as reactExports, _ as __vitePreload, j as jsxRuntimeExports, L as Loader } from "./main-B7w5eCOl.js";
import { g as generateRoutes, c as createBrowserRouter, R as RouterProvider2 } from "./navigationUtils-BZC1EMRn.js";
const AccountLogin = reactExports.lazy(() => __vitePreload(() => import("./Login-BFGc_BiR.js"), true ? [] : void 0));
const PublicRegister = reactExports.lazy(() => __vitePreload(() => import("./Register-C-FLRT_x.js"), true ? [] : void 0));
const PublicEventView = reactExports.lazy(() => __vitePreload(() => import("./publicEventView-CgyKGaUr.js"), true ? [] : void 0));
const PublicRegistrationOuter = reactExports.lazy(() => __vitePreload(() => import("./publicRegistrationOuter-0jxplRJf.js"), true ? [] : void 0));
const EventRegistrationWrapper = reactExports.lazy(() => __vitePreload(() => import("./EventRegistrationWrapper-DScZRw7m.js"), true ? [] : void 0));
const ForgotPasswordPage = reactExports.lazy(() => __vitePreload(() => import("./forgotPassword-CjNh3trh.js"), true ? [] : void 0));
const NotFoundPage = reactExports.lazy(() => __vitePreload(() => import("./index-BlJ44tc-.js"), true ? [] : void 0));
reactExports.lazy(() => __vitePreload(() => import("./index-CS2r6_hj.js"), true ? [] : void 0));
const getGuestRoutes = () => {
  return [
    // Default route redirects to login
    ...generateRoutes("", /* @__PURE__ */ jsxRuntimeExports.jsx(AccountLogin, {})),
    // Authentication routes
    ...generateRoutes("/Account/Login", /* @__PURE__ */ jsxRuntimeExports.jsx(AccountLogin, {})),
    ...generateRoutes("/Public/Register", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicRegister, {})),
    ...generateRoutes("/ForgotPasswordPage", /* @__PURE__ */ jsxRuntimeExports.jsx(ForgotPasswordPage, {})),
    // Public viewing routes
    ...generateRoutes("/Public/RenderViewEvent", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicEventView, {})),
    ...generateRoutes("/Public/ViewEvent/:eventName", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicEventView, {})),
    // Public registration routes - EventRegistrationWrapper handles initialization
    ...generateRoutes("/Public/EventRegistration/:eventName", /* @__PURE__ */ jsxRuntimeExports.jsx(EventRegistrationWrapper, {})),
    ...generateRoutes("/Home/CandidateParticipation", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicRegistrationOuter, {})),
    // Basic public information
    ...generateRoutes("/about", /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "About eTalenter Platform" })),
    // 404 catch-all route
    ...generateRoutes("*", /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {}))
  ];
};
const ErrorPage = reactExports.lazy(() => __vitePreload(() => import("./index-CS2r6_hj.js"), true ? [] : void 0));
const ErrorBoundary = () => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "ErrorBoundary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorPage, {}) });
const GuestWrapper = ({ user, ...props }) => {
  const router = reactExports.useMemo(() => {
    const guestRoutes = getGuestRoutes();
    const routesWithErrorHandling = guestRoutes.map((route) => ({
      ...route,
      errorElement: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, {})
    }));
    const router2 = createBrowserRouter(routesWithErrorHandling);
    return router2;
  }, [user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "GuestWrapper-Router" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router }) });
};
export {
  GuestWrapper as default
};
