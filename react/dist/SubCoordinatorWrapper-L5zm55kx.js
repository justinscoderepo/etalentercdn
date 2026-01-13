import { j as jsxRuntimeExports, r as reactExports, _ as __vitePreload, L as Loader } from "./main-B7w5eCOl.js";
import { g as generateRoutes, c as createBrowserRouter, R as RouterProvider2 } from "./navigationUtils-BZC1EMRn.js";
import { w as withIframeLayout, a as withConditionalLayout } from "./layoutUtils-Dn6dHhG-.js";
const ManageBulkParticipants = reactExports.lazy(() => __vitePreload(() => import("./manageBulkParticipants-BcswJfMw.js"), true ? [] : void 0));
const ManageEventSubmission = reactExports.lazy(() => __vitePreload(() => import("./manageEventSubmission-BA5tPmFz.js"), true ? [] : void 0));
reactExports.lazy(() => __vitePreload(() => import("./Index-BY3LAgUZ.js"), true ? [] : void 0));
const ManageTeamParticipants = reactExports.lazy(() => __vitePreload(() => import("./manageTeamParticipants-D-VFNqCz.js"), true ? [] : void 0));
const CandidatesDetailedList = reactExports.lazy(() => __vitePreload(() => import("./candidatesDetailedList-BOczuO4a.js"), true ? [] : void 0));
const JudgesScoreCard = reactExports.lazy(() => __vitePreload(() => import("./judgesScoreCardRefactored-DzjDqGzR.js"), true ? [] : void 0));
const ManageResultsStatus = reactExports.lazy(() => __vitePreload(() => import("./manageResultsStatus-Br1StT24.js"), true ? [] : void 0));
const PublicEventView = reactExports.lazy(() => __vitePreload(() => import("./publicEventView-CgyKGaUr.js"), true ? [] : void 0));
const NotFoundPage = reactExports.lazy(() => __vitePreload(() => import("./index-BlJ44tc-.js"), true ? [] : void 0));
const getSubCoordinatorRoutes = (user, context = {}) => {
  return [
    // Home and dashboard
    ...generateRoutes("/Home/Index", withIframeLayout("Home Dashboard")),
    // Sub-coordinator specific routes - mainly participant management
    ...generateRoutes("/SetUp/IframeRender", /* @__PURE__ */ jsxRuntimeExports.jsx(ManageTeamParticipants, { ...context })),
    ...generateRoutes("/Coordinator/ManageBulkParticipants", withIframeLayout("Bulk Participants Management")),
    ...generateRoutes("/Coordinator/RenderCandidatesDetailedList", /* @__PURE__ */ jsxRuntimeExports.jsx(CandidatesDetailedList, { ...context })),
    ...generateRoutes("/Coordinator/RenderManageBulkParticipants", withConditionalLayout(ManageBulkParticipants, context)),
    ...generateRoutes("/Coordinator/RenderEventSubmission", withConditionalLayout(ManageEventSubmission, context)),
    // Sub-coordinator iframe routes - pages from MVC
    ...generateRoutes("/Coordinator/ParticipantsWiseCompetitions", withIframeLayout("Participants Wise Competitions")),
    ...generateRoutes("/Coordinator/ManageCandidates", withIframeLayout("Manage Candidates")),
    ...generateRoutes("/Coordinator/ManageTeams", withIframeLayout("Manage Teams")),
    ...generateRoutes("/Coordinator/PrintCompetitionCandidates", withIframeLayout("Print Competition Candidates")),
    ...generateRoutes("/Coordinator/LocalWiseParticipants", withIframeLayout("Local Wise Participants")),
    // Limited scoring access
    ...generateRoutes("/Coordinator/RenderScoreCardV2", /* @__PURE__ */ jsxRuntimeExports.jsx(JudgesScoreCard, { ...context })),
    // Results viewing (limited)
    ...generateRoutes("/Coordinator/RenderResultsStatus", /* @__PURE__ */ jsxRuntimeExports.jsx(ManageResultsStatus, { ...context })),
    // Public viewing access
    ...generateRoutes("/Public/RenderViewEvent", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicEventView, { ...context })),
    ...generateRoutes("/Public/ViewEvent/:eventName", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicEventView, { ...context })),
    // Sub-coordinator profile routes
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
const SubCoordinatorWrapper = ({ user, ...props }) => {
  const router = reactExports.useMemo(() => {
    const subCoordinatorRoutes = getSubCoordinatorRoutes(user, props);
    const routesWithErrorHandling = subCoordinatorRoutes.map((route) => ({
      ...route,
      errorElement: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, {})
    }));
    const router2 = createBrowserRouter(routesWithErrorHandling);
    return router2;
  }, [user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "SubCoordinatorWrapper-Router" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router }) });
};
export {
  SubCoordinatorWrapper as default
};
