import { j as jsxRuntimeExports, r as reactExports, _ as __vitePreload, L as Loader } from "./main-B7w5eCOl.js";
import { g as generateRoutes, N as Navigate, c as createBrowserRouter, R as RouterProvider2 } from "./navigationUtils-BZC1EMRn.js";
import { w as withIframeLayout, a as withConditionalLayout } from "./layoutUtils-Dn6dHhG-.js";
reactExports.lazy(() => __vitePreload(() => import("./Index-BY3LAgUZ.js"), true ? [] : void 0));
const ManageEvent = reactExports.lazy(() => __vitePreload(() => import("./manageEvent-CPYyZUMP.js"), true ? [] : void 0));
const EventAdvancedSettings = reactExports.lazy(() => __vitePreload(() => import("./eventAdvancedSettings-yLeb9LAU.js"), true ? [] : void 0));
const ManageCompetitionItems = reactExports.lazy(() => __vitePreload(() => import("./ManageCompetitionItems-CkTNUluW.js"), true ? [] : void 0));
const UsersAndRoles = reactExports.lazy(() => __vitePreload(() => import("./UsersAndRoles-DVfqBSZG.js"), true ? [] : void 0));
const MainPageUsersAndRoles = reactExports.lazy(() => __vitePreload(() => import("./MainPageUsersAndRoles-BV6ezrRi.js"), true ? [] : void 0));
const ManagePublicRegistrationForm = reactExports.lazy(() => __vitePreload(() => import("./managePublicRegistrationForm-DOTdjtee.js"), true ? [] : void 0));
const OpenAiCompetitionStructure = reactExports.lazy(() => __vitePreload(() => import("./openAiCompetitionStructure-x1ddOY6V.js"), true ? [] : void 0));
const PublicEventView = reactExports.lazy(() => __vitePreload(() => import("./publicEventView-CgyKGaUr.js"), true ? [] : void 0));
const NotFoundPage = reactExports.lazy(() => __vitePreload(() => import("./index-BlJ44tc-.js"), true ? [] : void 0));
const getUserRoutes = (user, context = {}) => {
  return [
    // Home and dashboard
    ...generateRoutes("/Home/Index", withIframeLayout("Home Dashboard")),
    // Event setup and management (primary user function)
    ...generateRoutes("/SetUp/Events", withIframeLayout("Events")),
    ...generateRoutes("/SetUp/RenderManageEvent", /* @__PURE__ */ jsxRuntimeExports.jsx(ManageEvent, { ...context })),
    // Redirect individual tab routes to main Manage Event page with query params
    ...generateRoutes("/SetUp/ImportData", /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/SetUp/RenderManageEvent?tab=import", replace: true })),
    ...generateRoutes("/SetUp/ExportData", /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/SetUp/RenderManageEvent?tab=export", replace: true })),
    ...generateRoutes("/SetUp/WarningMails", /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/SetUp/RenderManageEvent?tab=warning", replace: true })),
    ...generateRoutes("/SetUp/EventBackup", /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/SetUp/RenderManageEvent?tab=backup", replace: true })),
    ...generateRoutes("/SetUp/ManagePublicRegistrationForm", /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePublicRegistrationForm, { ...context })),
    ...generateRoutes("/SetUp/RenderOpenAiCompetitionStructure", /* @__PURE__ */ jsxRuntimeExports.jsx(OpenAiCompetitionStructure, { ...context })),
    // User setup routes - with conditional layout
    ...generateRoutes("/SetUp/ManageCompetitionItems", withConditionalLayout(ManageCompetitionItems, context)),
    // User iframe routes - event setup pages from MVC
    ...generateRoutes("/SetUp/ManageGroups", withIframeLayout("Manage Groups")),
    ...generateRoutes("/SetUp/ManageCompetitionItemsOld", withIframeLayout("Manage Competition Items (Legacy)", { url: "/SetUp/ManageCompetitionItems", isNewPageAvailable: true })),
    ...generateRoutes("/SetUp/RenderEventAdvancedSettings", withConditionalLayout(EventAdvancedSettings, context)),
    ...generateRoutes("/SetUp/EventAdvancedSettings", withIframeLayout("Event Advanced Settings (Legacy)", { url: "/SetUp/RenderEventAdvancedSettings", isNewPageAvailable: true })),
    ...generateRoutes("/SetUp/ScoreSettings", withIframeLayout("Scoring Setup")),
    ...generateRoutes("/SetUp/IdPrefix", withIframeLayout("ID Card Configuration")),
    ...generateRoutes("/CompetitionStructure/Tab", withIframeLayout("Competition Structure")),
    // User and role management for their events
    ...generateRoutes("/UsersAndRoles", /* @__PURE__ */ jsxRuntimeExports.jsx(UsersAndRoles, { ...context })),
    ...generateRoutes("/Setup/RenderUserRoles", /* @__PURE__ */ jsxRuntimeExports.jsx(MainPageUsersAndRoles, { ...context })),
    // User profile and account iframe routes
    ...generateRoutes("/Profile/ProfileSettings", withIframeLayout("Profile Settings")),
    ...generateRoutes("/MyRoles/Index", withIframeLayout("My Roles")),
    // Public viewing access
    ...generateRoutes("/Public/RenderViewEvent", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicEventView, { ...context })),
    ...generateRoutes("/Public/ViewEvent/:eventName", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicEventView, { ...context })),
    // Utility routes
    ...generateRoutes("/about", /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "About" })),
    // 404 catch-all route
    ...generateRoutes("*", /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {}))
  ];
};
const ErrorPage = reactExports.lazy(() => __vitePreload(() => import("./index-CS2r6_hj.js"), true ? [] : void 0));
const ErrorBoundary = () => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "ErrorBoundary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorPage, {}) });
const UserWrapper = ({ user, ...props }) => {
  const router = reactExports.useMemo(() => {
    const userRoutes = getUserRoutes(user, props);
    const routesWithErrorHandling = userRoutes.map((route) => ({
      ...route,
      errorElement: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, {})
    }));
    const router2 = createBrowserRouter(routesWithErrorHandling);
    return router2;
  }, [user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "UserWrapper-Router" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router }) });
};
export {
  UserWrapper as default
};
