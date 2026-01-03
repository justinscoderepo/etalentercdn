import { j as jsxRuntimeExports, r as reactExports, _ as __vitePreload, L as Loader } from "./main-B7w5eCOl.js";
import { g as generateRoutes, N as Navigate, c as createBrowserRouter, R as RouterProvider2 } from "./navigationUtils-BZC1EMRn.js";
import { w as withIframeLayout, a as withConditionalLayout } from "./layoutUtils-Dn6dHhG-.js";
reactExports.lazy(() => __vitePreload(() => import("./Index-BY3LAgUZ.js"), true ? [] : void 0));
const LiveResultPresentation = reactExports.lazy(() => __vitePreload(() => import("./liveResultPresentation-BFP33kTd.js"), true ? [] : void 0));
const PublishToSocialMedia = reactExports.lazy(() => __vitePreload(() => import("./publishToSocialMedia-CJ4IEnqo.js"), true ? [] : void 0));
const ManageResultsStatus = reactExports.lazy(() => __vitePreload(() => import("./manageResultsStatus-Br1StT24.js"), true ? [] : void 0));
const AutomatedSchedule = reactExports.lazy(() => __vitePreload(() => import("./automateSchedule-jcLsgb-7.js"), true ? [] : void 0));
const CandidatesDetailedList = reactExports.lazy(() => __vitePreload(() => import("./candidatesDetailedList-BOczuO4a.js"), true ? [] : void 0));
const ManagePublicRegistrationForm = reactExports.lazy(() => __vitePreload(() => import("./managePublicRegistrationForm-DOTdjtee.js"), true ? [] : void 0));
const ManageTeamParticipants = reactExports.lazy(() => __vitePreload(() => import("./manageTeamParticipants-D-VFNqCz.js"), true ? [] : void 0));
const OpenAiCompetitionStructure = reactExports.lazy(() => __vitePreload(() => import("./openAiCompetitionStructure-x1ddOY6V.js"), true ? [] : void 0));
const ManageEvent = reactExports.lazy(() => __vitePreload(() => import("./manageEvent-CPYyZUMP.js"), true ? [] : void 0));
const EventAdvancedSettings = reactExports.lazy(() => __vitePreload(() => import("./eventAdvancedSettings-yLeb9LAU.js"), true ? [] : void 0));
const MaxParticipation = reactExports.lazy(() => __vitePreload(() => import("./index-sBBSEcxn.js"), true ? [] : void 0));
const EligibleRegistrationNumbers = reactExports.lazy(() => __vitePreload(() => import("./index-CQvLlGo1.js"), true ? [] : void 0));
const ManageCompetitionItems = reactExports.lazy(() => __vitePreload(() => import("./ManageCompetitionItems-CkTNUluW.js"), true ? [] : void 0));
const ScoreSettings = reactExports.lazy(() => __vitePreload(() => import("./index-By7uhkms.js"), true ? [] : void 0));
const IdPrefix = reactExports.lazy(() => __vitePreload(() => import("./index-C4XMld_c.js"), true ? [] : void 0));
const EventStages = reactExports.lazy(() => __vitePreload(() => import("./index-sbEM2oue.js"), true ? [] : void 0));
const ManageCompetitionSchedule = reactExports.lazy(() => __vitePreload(() => import("./manageSchedule-mZFv5Atm.js"), true ? [] : void 0));
const TokenSystem = reactExports.lazy(() => __vitePreload(() => import("./index-DOHrl79G.js"), true ? [] : void 0));
const ManageResults = reactExports.lazy(() => __vitePreload(() => import("./index-b17CkBrl.js"), true ? [] : void 0));
const CompetitionStructure = reactExports.lazy(() => __vitePreload(() => import("./index-_C5iXQqv.js"), true ? [] : void 0));
const PublicRegistrationOuter = reactExports.lazy(() => __vitePreload(() => import("./publicRegistrationOuter-0jxplRJf.js"), true ? [] : void 0));
const EventRegistrationWrapper = reactExports.lazy(() => __vitePreload(() => import("./EventRegistrationWrapper-DScZRw7m.js"), true ? [] : void 0));
const JudgesScoreCard = reactExports.lazy(() => __vitePreload(() => import("./judgesScoreCardRefactored-DzjDqGzR.js"), true ? [] : void 0));
const JudgesAllotment = reactExports.lazy(() => __vitePreload(() => import("./index-GqWb8eI5.js"), true ? [] : void 0));
const UsersAndRoles = reactExports.lazy(() => __vitePreload(() => import("./UsersAndRoles-DVfqBSZG.js"), true ? [] : void 0));
const MainPageUsersAndRoles = reactExports.lazy(() => __vitePreload(() => import("./MainPageUsersAndRoles-BV6ezrRi.js"), true ? [] : void 0));
const ResultPresentation = reactExports.lazy(() => __vitePreload(() => import("./resultPresentation-D232zmvn.js"), true ? [] : void 0));
const Reports = reactExports.lazy(() => __vitePreload(() => import("./index-BFzRE98p.js"), true ? [] : void 0));
const PublicEventView = reactExports.lazy(() => __vitePreload(() => import("./publicEventView-CgyKGaUr.js"), true ? [] : void 0));
const ExampleParameterNavigation = reactExports.lazy(() => __vitePreload(() => import("./parameterNavigation-DB_YB19M.js"), true ? [] : void 0));
const NotFoundPage = reactExports.lazy(() => __vitePreload(() => import("./index-BlJ44tc-.js"), true ? [] : void 0));
const getSuperAdminRoutes = (user, context = {}) => {
  return [
    // Home and dashboard
    ...generateRoutes("/Home/Index", withIframeLayout("Home Dashboard")),
    // Full coordinator access
    ...generateRoutes("/Coordinator/RenderScoreCardV2", /* @__PURE__ */ jsxRuntimeExports.jsx(JudgesScoreCard, { ...context })),
    ...generateRoutes("/Coordinator/RenderCandidatesDetailedList", /* @__PURE__ */ jsxRuntimeExports.jsx(CandidatesDetailedList, { ...context })),
    ...generateRoutes("/Coordinator/RenderResultPresentation", /* @__PURE__ */ jsxRuntimeExports.jsx(ResultPresentation, { ...context })),
    ...generateRoutes("/Coordinator/RenderResultsStatus", /* @__PURE__ */ jsxRuntimeExports.jsx(ManageResultsStatus, { ...context })),
    ...generateRoutes("/Coordinator/RenderLiveResultPresentation", /* @__PURE__ */ jsxRuntimeExports.jsx(LiveResultPresentation, { ...context })),
    ...generateRoutes("/Coordinator/RenderPublishToSocialMedia", /* @__PURE__ */ jsxRuntimeExports.jsx(PublishToSocialMedia, { ...context })),
    // Reports - Dynamic Report Builder (replaces multiple old reporting pages)
    ...generateRoutes("/Coordinator/RenderReports", /* @__PURE__ */ jsxRuntimeExports.jsx(Reports, { ...context })),
    ...generateRoutes("/Coordinator/RenderPrintScoreCard", /* @__PURE__ */ jsxRuntimeExports.jsx(Reports, { ...context })),
    ...generateRoutes("/Coordinator/RenderPrintJudgesScore", /* @__PURE__ */ jsxRuntimeExports.jsx(Reports, { ...context })),
    ...generateRoutes("/Coordinator/RenderLocalWiseParticipants", /* @__PURE__ */ jsxRuntimeExports.jsx(Reports, { ...context })),
    ...generateRoutes("/Coordinator/RenderMemberShipWiseParticipants", /* @__PURE__ */ jsxRuntimeExports.jsx(Reports, { ...context })),
    // Full setup and configuration access
    ...generateRoutes("/SetUp/IframeRender", /* @__PURE__ */ jsxRuntimeExports.jsx(ManageTeamParticipants, { ...context })),
    ...generateRoutes("/SetUp/ManagePublicRegistrationOuter", /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePublicRegistrationForm, { ...context })),
    ...generateRoutes("/SetUp/RenderOpenAiCompetitionStructure", /* @__PURE__ */ jsxRuntimeExports.jsx(OpenAiCompetitionStructure, { ...context })),
    ...generateRoutes("/SetUp/RenderManageEvent", /* @__PURE__ */ jsxRuntimeExports.jsx(ManageEvent, { ...context })),
    // Redirect individual tab routes to main Manage Event page with query params
    ...generateRoutes("/SetUp/ImportData", /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/SetUp/RenderManageEvent?tab=import", replace: true })),
    ...generateRoutes("/SetUp/ExportData", /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/SetUp/RenderManageEvent?tab=export", replace: true })),
    ...generateRoutes("/SetUp/WarningMails", /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/SetUp/RenderManageEvent?tab=warning", replace: true })),
    ...generateRoutes("/SetUp/EventBackup", /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/SetUp/RenderManageEvent?tab=backup", replace: true })),
    ...generateRoutes("/Setup/RenderUserRoles", /* @__PURE__ */ jsxRuntimeExports.jsx(MainPageUsersAndRoles, { ...context })),
    // Super admin setup routes - with conditional layout
    ...generateRoutes("/SetUp/ManageCompetitionItems", withConditionalLayout(ManageCompetitionItems, context)),
    // Super admin iframe routes - all MVC pages
    ...generateRoutes("/SetUp/ManageGroups", withIframeLayout("Manage Groups")),
    ...generateRoutes("/SetUp/ManageCompetitionItemsOld", withIframeLayout("Manage Competition Items (Legacy)", { url: "/SetUp/ManageCompetitionItems", isNewPageAvailable: true })),
    ...generateRoutes("/SetUp/RenderEventAdvancedSettings", withConditionalLayout(EventAdvancedSettings, context)),
    ...generateRoutes("/SetUp/EventAdvancedSettings", withIframeLayout("Event Advanced Settings (Legacy)", { url: "/SetUp/RenderEventAdvancedSettings", isNewPageAvailable: true })),
    ...generateRoutes("/SetUp/RenderMaxParticipation", /* @__PURE__ */ jsxRuntimeExports.jsx(MaxParticipation, { ...context })),
    ...generateRoutes("/SetUp/RenderEligibleRegistrationNumbers", /* @__PURE__ */ jsxRuntimeExports.jsx(EligibleRegistrationNumbers, { ...context })),
    ...generateRoutes("/SetUp/RenderScoreSettings", /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreSettings, { ...context })),
    ...generateRoutes("/SetUp/ScoreSettings", withIframeLayout("Scoring Setup")),
    ...generateRoutes("/SetUp/RenderIdPrefix", /* @__PURE__ */ jsxRuntimeExports.jsx(IdPrefix, { ...context })),
    ...generateRoutes("/SetUp/IdPrefix", withIframeLayout("ID Card Configuration")),
    ...generateRoutes("/CompetitionStructure/RenderTab", /* @__PURE__ */ jsxRuntimeExports.jsx(CompetitionStructure, { ...context })),
    ...generateRoutes("/CompetitionStructure/Tab", withIframeLayout("Competition Structure")),
    ...generateRoutes("/CompetitionStructure/Status", withIframeLayout("Competition Structure Status")),
    ...generateRoutes("/CompetitionParticipantsTeamMembers/Manage", withIframeLayout("Team Members Management")),
    ...generateRoutes("/Coordinator/RenderTokensystem", /* @__PURE__ */ jsxRuntimeExports.jsx(TokenSystem, { ...context })),
    ...generateRoutes("/Coordinator/tokensystem", withIframeLayout("Token System")),
    ...generateRoutes("/Coordinator/CompetitionStatus", withIframeLayout("Competition Status")),
    ...generateRoutes("/Coordinator/DrawCard", withIframeLayout("Draw Score Card")),
    ...generateRoutes("/Coordinator/PrintCompetitionCandidates", withIframeLayout("Print Competition Candidates")),
    ...generateRoutes("/Coordinator/PrintScoreCard", withIframeLayout("Print Score Card")),
    ...generateRoutes("/Coordinator/PrintJudgesScore", withIframeLayout("Print Judges Score")),
    ...generateRoutes("/Coordinator/PrintResult", withIframeLayout("Print Result")),
    ...generateRoutes("/Coordinator/ManageCandidates", withIframeLayout("Manage Candidates")),
    ...generateRoutes("/Coordinator/ManageTeams", withIframeLayout("Manage Teams")),
    ...generateRoutes("/Coordinator/ManageBulkParticipants", withIframeLayout("Bulk Participants Management")),
    ...generateRoutes("/Coordinator/ParticipantsWiseCompetitions", withIframeLayout("Participants Wise Competitions")),
    ...generateRoutes("/Coordinator/LocalWiseParticipants", withIframeLayout("Local Wise Participants")),
    ...generateRoutes("/Coordinator/CandidatesCards", withIframeLayout("Candidates Cards")),
    ...generateRoutes("/Coordinator/RenderResults", /* @__PURE__ */ jsxRuntimeExports.jsx(ManageResults, { ...context })),
    ...generateRoutes("/Coordinator/Results", withIframeLayout("Results")),
    ...generateRoutes("/Coordinator/PublishResults", withIframeLayout("Publish Results")),
    ...generateRoutes("/Coordinator/PublishResultsWithAwards", withIframeLayout("Publish Results With Awards")),
    ...generateRoutes("/Coordinator/PublishPodiumResults", withIframeLayout("Publish Podium Results")),
    ...generateRoutes("/Coordinator/PublishIndividualResults", withIframeLayout("Publish Individual Results")),
    ...generateRoutes("/Coordinator/PublishAwardsResults", withIframeLayout("Publish Awards Results")),
    ...generateRoutes("/Coordinator/CandidateWiseResults", withIframeLayout("Candidate Wise Results")),
    ...generateRoutes("/Coordinator/StickerBasedResults", withIframeLayout("Trophy Stickers")),
    ...generateRoutes("/Coordinator/StickerBasedIndividualResults", withIframeLayout("Trophy Individual Stickers")),
    ...generateRoutes("/Coordinator/PrintTopCertificate", withIframeLayout("Champion Certificate")),
    ...generateRoutes("/Coordinator/PrintCertificate", withIframeLayout("Rank Certificates")),
    ...generateRoutes("/Coordinator/PrintParticipantCertificate", withIframeLayout("Participation Certificates")),
    ...generateRoutes("/Coordinator/ContentAdmin", withIframeLayout("Content Admin")),
    ...generateRoutes("/Coordinator/DrawMaster", withIframeLayout("Draw Master")),
    ...generateRoutes("/Coordinator/projector", withIframeLayout("Projector")),
    ...generateRoutes("/Coordinator/ActivityLog", withIframeLayout("Activity Log")),
    ...generateRoutes("/CompetitionSchedule/RenderManage", /* @__PURE__ */ jsxRuntimeExports.jsx(ManageCompetitionSchedule, { ...context })),
    ...generateRoutes("/CompetitionSchedule/Manage", withIframeLayout("Competition Schedule Management")),
    ...generateRoutes("/CompetitionSchedule/AutomateSchedule", withIframeLayout("Automate Schedule")),
    ...generateRoutes("/EventStages/RenderManage", /* @__PURE__ */ jsxRuntimeExports.jsx(EventStages, { ...context })),
    ...generateRoutes("/EventStages/Manage", withIframeLayout("Event Stages Management")),
    ...generateRoutes("/JudgesAllotment/RenderManage", /* @__PURE__ */ jsxRuntimeExports.jsx(JudgesAllotment, { ...context })),
    ...generateRoutes("/JudgesScoreCard/Manage", withIframeLayout("Judges Score Card Management")),
    ...generateRoutes("/JudgesDetailedScoreCard/Manage", withIframeLayout("Judges Detailed Score Card")),
    ...generateRoutes("/ScoreLog/View", withIframeLayout("Score Log")),
    ...generateRoutes("/JudgesAllotment/Manage", withIframeLayout("Judges Allotment")),
    ...generateRoutes("/Profile/ProfileSettings", withIframeLayout("Profile Settings")),
    ...generateRoutes("/MyRoles/Index", withIframeLayout("My Roles")),
    // Full user and role management
    ...generateRoutes("/UsersAndRoles", /* @__PURE__ */ jsxRuntimeExports.jsx(UsersAndRoles, { ...context })),
    // Competition scheduling
    ...generateRoutes("/CompetitionSchedule/RenderAutomateSchedule", /* @__PURE__ */ jsxRuntimeExports.jsx(AutomatedSchedule, { ...context })),
    // Public registration and viewing
    ...generateRoutes("/Home/CandidateParticipation", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicRegistrationOuter, { ...context })),
    ...generateRoutes("/Public/RenderViewEvent", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicEventView, { ...context })),
    // Dynamic routes
    ...generateRoutes("/Public/EventRegistration/:eventName", /* @__PURE__ */ jsxRuntimeExports.jsx(EventRegistrationWrapper, {})),
    ...generateRoutes("/Public/ViewEvent/:eventName", /* @__PURE__ */ jsxRuntimeExports.jsx(PublicEventView, {})),
    // Development and testing routes
    ...generateRoutes("/Example/ParameterNavigation", /* @__PURE__ */ jsxRuntimeExports.jsx(ExampleParameterNavigation, {})),
    // Utility routes
    ...generateRoutes("/about", /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "About" })),
    // 404 catch-all route
    ...generateRoutes("*", /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {}))
  ];
};
const ErrorPage = reactExports.lazy(() => __vitePreload(() => import("./index-CS2r6_hj.js"), true ? [] : void 0));
const ErrorBoundary = () => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "ErrorBoundary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorPage, {}) });
const SuperAdminWrapper = ({ user, ...props }) => {
  const router = reactExports.useMemo(() => {
    const superAdminRoutes = getSuperAdminRoutes(user, props);
    const routesWithErrorHandling = superAdminRoutes.map((route) => ({
      ...route,
      errorElement: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, {})
    }));
    const router2 = createBrowserRouter(routesWithErrorHandling);
    return router2;
  }, [user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { from: "SuperAdminWrapper-Router" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router }) });
};
export {
  SuperAdminWrapper as default
};
