import { B as usePublicAppContext, j as jsxRuntimeExports, L as Loader, r as reactExports, _ as __vitePreload } from "./main-B7w5eCOl.js";
const EventDetailedView = reactExports.lazy(() => __vitePreload(() => import("./eventDetailedView-C2SFbNL8.js"), true ? [] : void 0).then((module) => ({ default: module.EventDetailedView })));
function RenderEventDetailedView({ setActiveTab, onStartRegistration, closeModel }) {
  const {
    user: loggedinUser,
    isGuardian,
    isTempUser,
    eventDetails,
    participationDetails,
    participantType,
    setParticipantType,
    allStepsComponents,
    isIndividualRegistration,
    isTeamsRegistration,
    isTeamsAndIndividualRegistration,
    isIndividualRegistrationClosed,
    isTeamsRegistrationClosed,
    isLoading,
    refreshParticipationDetails
  } = usePublicAppContext();
  if (!loggedinUser || !loggedinUser.Email) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Please log in to access this form." });
  }
  const tempUser = isTempUser ? loggedinUser : null;
  const handleStartRegistration = () => {
    if (isGuardian && isTempUser) {
      setActiveTab("Registration");
    } else {
      setActiveTab("My Participation");
      const typeInt = participantType === "Individual" ? 1 : 2;
      if (onStartRegistration) {
        onStartRegistration(typeInt);
      }
    }
  };
  const handleTypeChange = (type) => {
    if (type === "Individual" || type === "Team") {
      setParticipantType(type);
    } else {
      console.warn("⚠️ handleTypeChange received invalid type:", type);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading event details..." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading event details..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    EventDetailedView,
    {
      tempUser,
      isIndividualRegistration,
      isTeamsRegistration,
      isTeamsAndIndividualRegistration,
      isIndividualRegistrationClosed,
      isTeamsRegistrationClosed,
      startNewRegistration: handleStartRegistration,
      participationDetails,
      eventDetails,
      setParticipantType: handleTypeChange,
      participantType,
      allStepsComponents
    }
  ) });
}
export {
  RenderEventDetailedView,
  RenderEventDetailedView as default
};
