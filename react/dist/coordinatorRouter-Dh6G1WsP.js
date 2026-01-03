import { j as jsxRuntimeExports, r as reactExports, _ as __vitePreload } from "./main-B7w5eCOl.js";
import { w as withIframeLayout, a as withConditionalLayout } from "./layoutUtils-Dn6dHhG-.js";
import { g as generateRoutes, N as Navigate } from "./navigationUtils-BZC1EMRn.js";
const HomeIndex = reactExports.lazy(() => __vitePreload(() => import("./Index-BY3LAgUZ.js"), true ? [] : void 0));
const ThemeSettings = reactExports.lazy(() => __vitePreload(() => import("./themeSettings-BBBb2_s1.js"), true ? [] : void 0));
const LiveResultPresentation = reactExports.lazy(() => __vitePreload(() => import("./liveResultPresentation-BFP33kTd.js"), true ? [] : void 0));
const PublishToSocialMedia = reactExports.lazy(() => __vitePreload(() => import("./publishToSocialMedia-CJ4IEnqo.js"), true ? [] : void 0));
const ManageResultsStatus = reactExports.lazy(() => __vitePreload(() => import("./manageResultsStatus-Br1StT24.js"), true ? [] : void 0));
const ManageBulkParticipants = reactExports.lazy(() => __vitePreload(() => import("./manageBulkParticipants-BcswJfMw.js"), true ? [] : void 0));
const ManageExcelImport = reactExports.lazy(() => __vitePreload(() => import("./manageExcelImport-DoissWXV.js"), true ? [] : void 0));
const AutomatedSchedule = reactExports.lazy(() => __vitePreload(() => import("./automateSchedule-jcLsgb-7.js"), true ? [] : void 0));
const CandidatesDetailedList = reactExports.lazy(() => __vitePreload(() => import("./candidatesDetailedList-BOczuO4a.js"), true ? [] : void 0));
const ManagePublicRegistrationForm = reactExports.lazy(() => __vitePreload(() => import("./managePublicRegistrationForm-DOTdjtee.js"), true ? [] : void 0));
const ManageTeamParticipants = reactExports.lazy(() => __vitePreload(() => import("./manageTeamParticipants-D-VFNqCz.js"), true ? [] : void 0));
const OpenAiCompetitionStructure = reactExports.lazy(() => __vitePreload(() => import("./openAiCompetitionStructure-x1ddOY6V.js"), true ? [] : void 0));
const ManageEvent = reactExports.lazy(() => __vitePreload(() => import("./manageEvent-CPYyZUMP.js"), true ? [] : void 0));
const EventAdvancedSettings = reactExports.lazy(() => __vitePreload(() => import("./eventAdvancedSettings-yLeb9LAU.js"), true ? [] : void 0));
const MaxParticipation = reactExports.lazy(() => __vitePreload(() => import("./index-sBBSEcxn.js"), true ? [] : void 0));
const EligibleRegistrationNumbers = reactExports.lazy(() => __vitePreload(() => import("./index-CQvLlGo1.js"), true ? [] : void 0));
const ManageGroups = reactExports.lazy(() => __vitePreload(() => import("./index-D9V73M88.js"), true ? [] : void 0));
const ManageCompetitionItems = reactExports.lazy(() => __vitePreload(() => import("./index-BnXAUhtX.js"), true ? [] : void 0));
const ScoreSettings = reactExports.lazy(() => __vitePreload(() => import("./index-By7uhkms.js"), true ? [] : void 0));
const IdPrefix = reactExports.lazy(() => __vitePreload(() => import("./index-C4XMld_c.js"), true ? [] : void 0));
const EventStages = reactExports.lazy(() => __vitePreload(() => import("./index-sbEM2oue.js"), true ? [] : void 0));
const ManageCompetitionSchedule = reactExports.lazy(() => __vitePreload(() => import("./manageSchedule-mZFv5Atm.js"), true ? [] : void 0));
const TokenSystem = reactExports.lazy(() => __vitePreload(() => import("./index-DOHrl79G.js"), true ? [] : void 0));
const ManageResults = reactExports.lazy(() => __vitePreload(() => import("./index-b17CkBrl.js"), true ? [] : void 0));
const CompetitionStructure = reactExports.lazy(() => __vitePreload(() => import("./index-_C5iXQqv.js"), true ? [] : void 0));
const JudgesScoreCard = reactExports.lazy(() => __vitePreload(() => import("./judgesScoreCardRefactored-DzjDqGzR.js"), true ? [] : void 0));
const JudgesAllotment = reactExports.lazy(() => __vitePreload(() => import("./index-GqWb8eI5.js"), true ? [] : void 0));
const UsersAndRoles = reactExports.lazy(() => __vitePreload(() => import("./UsersAndRoles-DVfqBSZG.js"), true ? [] : void 0));
const MainPageUsersAndRoles = reactExports.lazy(() => __vitePreload(() => import("./MainPageUsersAndRoles-BV6ezrRi.js"), true ? [] : void 0));
const ResultPresentation = reactExports.lazy(() => __vitePreload(() => import("./resultPresentation-D232zmvn.js"), true ? [] : void 0));
const Reports = reactExports.lazy(() => __vitePreload(() => import("./index-BFzRE98p.js"), true ? [] : void 0));
const PublicEventView = reactExports.lazy(() => __vitePreload(() => import("./publicEventView-CgyKGaUr.js"), true ? [] : void 0));
const NotFoundPage = reactExports.lazy(() => __vitePreload(() => import("./index-BlJ44tc-.js"), true ? [] : void 0));
const getCoordinatorRoutes = (user, context = {}) => {
  return [
    // Home and dashboard - new component, no conditional layout needed
    ...generateRoutes("", /* @__PURE__ */ jsxRuntimeExports.jsx(HomeIndex, { ...context })),
    ...generateRoutes("/Home/Index", withIframeLayout("Home Dashboard")),
    // Settings
    ...generateRoutes("/Settings/ThemeSettings", withConditionalLayout(ThemeSettings, context)),
    // Coordinator-specific routes - with conditional layout
    ...generateRoutes("/Coordinator/RenderScoreCardV2", withConditionalLayout(JudgesScoreCard, context)),
    ...generateRoutes("/Coordinator/RenderCandidatesDetailedList", withConditionalLayout(CandidatesDetailedList, context)),
    ...generateRoutes("/Coordinator/RenderResultPresentation", withConditionalLayout(ResultPresentation, context)),
    ...generateRoutes("/Coordinator/RenderResultsStatus", withConditionalLayout(ManageResultsStatus, context)),
    ...generateRoutes("/Coordinator/RenderManageBulkParticipants", withConditionalLayout(ManageBulkParticipants, context)),
    ...generateRoutes("/Coordinator/RenderExcelImport", withConditionalLayout(ManageExcelImport, context)),
    ...generateRoutes("/Coordinator/RenderLiveResultPresentation", withConditionalLayout(LiveResultPresentation, context)),
    ...generateRoutes("/Coordinator/RenderPublishToSocialMedia", withConditionalLayout(PublishToSocialMedia, context)),
    // Reports - Dynamic Report Builder (replaces multiple old reporting pages)
    ...generateRoutes("/Coordinator/RenderReports", withConditionalLayout(Reports, context)),
    ...generateRoutes("/Coordinator/RenderPrintScoreCard", withConditionalLayout(Reports, context)),
    ...generateRoutes("/Coordinator/RenderPrintJudgesScore", withConditionalLayout(Reports, context)),
    ...generateRoutes("/Coordinator/RenderLocalWiseParticipants", withConditionalLayout(Reports, context)),
    ...generateRoutes("/Coordinator/RenderMemberShipWiseParticipants", withConditionalLayout(Reports, context)),
    // Coordinator iframe routes - pages that exist in MVC but don't have React components yet
    ...generateRoutes("/Coordinator/SubCordinators", withIframeLayout("Sub Coordinators")),
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
    ...generateRoutes("/Coordinator/RenderResults", withConditionalLayout(ManageResults, context)),
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
    // Setup and configuration routes - with conditional layout
    ...generateRoutes("/SetUp/IframeRender", withConditionalLayout(ManageTeamParticipants, context)),
    ...generateRoutes("/SetUp/ManagePublicRegistrationForm", withConditionalLayout(ManagePublicRegistrationForm, context)),
    ...generateRoutes("/SetUp/RenderOpenAiCompetitionStructure", withConditionalLayout(OpenAiCompetitionStructure, context)),
    ...generateRoutes("/SetUp/RenderManageEvent", withConditionalLayout(ManageEvent, context)),
    // Redirect individual tab routes to main Manage Event page with query params
    ...generateRoutes("/SetUp/ImportData", /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/SetUp/RenderManageEvent?tab=import", replace: true })),
    ...generateRoutes("/SetUp/ExportData", /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/SetUp/RenderManageEvent?tab=export", replace: true })),
    ...generateRoutes("/SetUp/WarningMails", /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/SetUp/RenderManageEvent?tab=warning", replace: true })),
    ...generateRoutes("/SetUp/EventBackup", /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/SetUp/RenderManageEvent?tab=backup", replace: true })),
    ...generateRoutes("/Setup/RenderUserRoles", withConditionalLayout(MainPageUsersAndRoles, context)),
    // Setup routes - with conditional layout
    ...generateRoutes("/SetUp/ManageGroups", withConditionalLayout(ManageGroups, context)),
    ...generateRoutes("/Coordinator/RenderManageAgeGroups", withConditionalLayout(ManageGroups, context)),
    ...generateRoutes("/SetUp/ManageCompetitionItems", withConditionalLayout(ManageCompetitionItems, context)),
    ...generateRoutes("/Coordinator/RenderManageCompetitionItems", withConditionalLayout(ManageCompetitionItems, context)),
    // Setup iframe routes (Old versions) - for backward compatibility
    ...generateRoutes("/SetUp/ManageGroupsOld", withIframeLayout("Manage Age Groups (Legacy)", { url: "/SetUp/ManageGroups", isNewPageAvailable: true })),
    ...generateRoutes("/AgewiseGroups/Manage", withIframeLayout("Manage Age Groups in Table (Legacy)", { url: "/AgewiseGroups/Manage" })),
    ...generateRoutes("/SetUp/ManageCompetitionItemsOld", withIframeLayout("Manage Competition Items (Legacy)", { url: "/SetUp/ManageCompetitionItems", isNewPageAvailable: true })),
    // Setup iframe routes - MVC pages without React components
    ...generateRoutes("/SetUp/RenderEventAdvancedSettings", withConditionalLayout(EventAdvancedSettings, context)),
    ...generateRoutes("/SetUp/EventAdvancedSettings", withIframeLayout("Event Advanced Settings (Legacy)", { url: "/SetUp/RenderEventAdvancedSettings", isNewPageAvailable: true })),
    ...generateRoutes("/SetUp/RenderMaxParticipation", withConditionalLayout(MaxParticipation, context)),
    ...generateRoutes("/SetUp/RenderEligibleRegistrationNumbers", withConditionalLayout(EligibleRegistrationNumbers, context)),
    ...generateRoutes("/SetUp/RenderScoreSettings", withConditionalLayout(ScoreSettings, context)),
    ...generateRoutes("/SetUp/ScoreSettings", withIframeLayout("Scoring Setup")),
    ...generateRoutes("/SetUp/RenderIdPrefix", withConditionalLayout(IdPrefix, context)),
    ...generateRoutes("/SetUp/IdPrefix", withIframeLayout("ID Card Configuration")),
    ...generateRoutes("/CompetitionStructure/RenderTab", withConditionalLayout(CompetitionStructure, context)),
    ...generateRoutes("/CompetitionStructure/Tab", withIframeLayout("Competition Structure")),
    ...generateRoutes("/CompetitionStructure/Status", withIframeLayout("Competition Structure Status")),
    ...generateRoutes("/CompetitionParticipantsTeamMembers/Manage", withIframeLayout("Team Members Management")),
    // User and role management - with conditional layout
    ...generateRoutes("/UsersAndRoles", withConditionalLayout(UsersAndRoles, context)),
    // Competition scheduling - with conditional layout
    ...generateRoutes("/CompetitionSchedule/RenderAutomateSchedule", withConditionalLayout(AutomatedSchedule, context)),
    // Competition scheduling iframe routes
    ...generateRoutes("/CompetitionSchedule/RenderManage", withConditionalLayout(ManageCompetitionSchedule, context)),
    ...generateRoutes("/CompetitionSchedule/Manage", withIframeLayout("Competition Schedule Management")),
    ...generateRoutes("/CompetitionSchedule/AutomateSchedule", withIframeLayout("Automate Schedule")),
    ...generateRoutes("/EventStages/RenderManage", withConditionalLayout(EventStages, context)),
    ...generateRoutes("/EventStages/Manage", withIframeLayout("Event Stages Management")),
    ...generateRoutes("/Coordinator/RenderTokensystem", withConditionalLayout(TokenSystem, context)),
    ...generateRoutes("/Coordinator/tokensystem", withIframeLayout("Token System")),
    // Judges and scoring iframe routes
    ...generateRoutes("/JudgesAllotment/RenderManage", withConditionalLayout(JudgesAllotment, context)),
    ...generateRoutes("/JudgesScoreCard/Manage", withIframeLayout("Judges Score Card Management")),
    ...generateRoutes("/JudgesDetailedScoreCard/Manage", withIframeLayout("Judges Detailed Score Card")),
    ...generateRoutes("/ScoreLog/View", withIframeLayout("Score Log")),
    ...generateRoutes("/JudgesAllotment/Manage", withIframeLayout("Judges Allotment")),
    // Profile and account iframe routes
    ...generateRoutes("/Profile/ProfileSettings", withIframeLayout("Profile Settings")),
    ...generateRoutes("/MyRoles/Index", withIframeLayout("My Roles")),
    // Public viewing access (coordinators can view public pages)
    ...generateRoutes("/Public/RenderViewEvent", withConditionalLayout(PublicEventView, context)),
    ...generateRoutes("/Public/ViewEvent/:eventName", withConditionalLayout(PublicEventView, context)),
    // Utility routes
    ...generateRoutes("/about", /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "About" })),
    // 404 catch-all route
    ...generateRoutes("*", withConditionalLayout(NotFoundPage, context))
  ];
};
export {
  getCoordinatorRoutes as g
};
