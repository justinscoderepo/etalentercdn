import { j as jsxRuntimeExports, k as React, L as Loader, _ as __vitePreload, B as usePublicAppContext, u as useBackend, n as isDataLoading, r as reactExports, b as getUserData, q as parseJson, p as post, z as zt } from "./main-B7w5eCOl.js";
import { r as registrationSteps, e as extractUserAndRoleData, g as getAvailableSteps, a as getActiveStep, b as getActiveComponents, u as updateStepData, s as saveData } from "./publicRegistrationHelper-D8ymtYJF.js";
import { B as Box } from "./box-Du61b7dg.js";
import { E as Error } from "./alert-BVY3dXZ7.js";
import "./PencilIcon-b9s3VfZ1.js";
function RegistrationNavSteps({ isSubmitted, availableSteps, submittedSteps, handleClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Progress", className: "mb-2 flex w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { role: "list", className: "divide-y divide-gray-300 rounded-md border border-gray-300 flex md:divide-y-0  w-full flex-wrap", children: availableSteps?.map((step, stepIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative md:flex md:flex-1 ", children: [
    step.status === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: step.href, "aria-current": "step", className: "group max-w-40 flex items-center truncate text-ellipsis overflow-hidden whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center px-2 py-2 text-xs font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xs", children: step.id }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 mr-3 text-xs font-medium text-indigo-600", children: step.label ?? step.name })
    ] }) }) : submittedSteps?.find((x) => x.name == step.name) || isSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: step.href, className: "group max-w-40 flex items-center truncate text-ellipsis overflow-hidden whitespace-nowrap", onClick: (event) => handleClick(stepIdx, event), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center px-2 py-2 text-xs font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gray-300 group-hover:bg-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 group-hover:text-gray-900", children: step.id }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 mr-3 text-xs font-medium text-gray-400 group-hover:text-gray-900", children: step.label ?? step.name })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: step.href, className: "group max-w-40 flex items-center truncate text-ellipsis overflow-hidden whitespace-nowrap", onClick: (event) => handleClick(stepIdx, event), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center px-2 py-2 text-xs font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 group-hover:text-gray-900", children: step.id }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 mr-3 text-xs font-medium text-gray-500 group-hover:text-gray-900", children: step.label ?? step.name })
    ] }) }),
    stepIdx !== availableSteps.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "absolute right-0 top-0 hidden h-full w-5 md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { fill: "none", viewBox: "0 0 22 80", preserveAspectRatio: "none", className: "h-full w-full text-gray-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 -2L20 40L0 82", stroke: "currentcolor", vectorEffect: "non-scaling-stroke", strokeLinejoin: "round" }) }) }) }) : null
  ] }, step.name)) }) });
}
const FormSubmission = React.lazy(() => __vitePreload(() => import("./formSubmission-JNwzFgva.js"), true ? [] : void 0));
const ModalForm = React.lazy(() => __vitePreload(() => import("./modalForm-DOZs0ugH.js"), true ? [] : void 0));
function RenderRegistrationBox({
  steps,
  userRoleJson,
  isCoordinatorView,
  gotoHome,
  participantType,
  isSubmitted,
  selectedUser,
  selectedTeam,
  eventDetails,
  activeStep,
  isLoading,
  updateIndex,
  availableSteps,
  submittedSteps,
  allStepsComponents,
  customComponents,
  data,
  onChange,
  handleClick,
  handleNext,
  components,
  tempUser,
  selectedComponent,
  setSelectedComponent,
  isDirectOpen = false,
  isProperlyLoaded = true
}) {
  if (!availableSteps || availableSteps?.length == 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-2xl text-gray-500", children: selectedUser || selectedTeam ? "Steps Loading/No Steps Found" : "Unfortunately, no steps are available at this time." });
  let isLastStep = availableSteps.findIndex((step) => step.status === "active") + 1 === availableSteps.length;
  let isGuardianRegistration = availableSteps.findIndex((step) => step.name === "Guardian Registration") > -1;
  if (selectedUser || selectedTeam || isGuardianRegistration || isDirectOpen) {
    let heading = /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500", children: [
      eventDetails?.EventName + "",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-green-200 px-4 py-1 text-[10px] font-medium text-green-700 ring-1 ring-inset ring-green-600/20 ml-2", children: "New Participant Registration" })
    ] });
    if (participantType === "Team") {
      heading = /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500", children: [
        eventDetails?.EventName + "",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-green-200 px-4 py-1 text-[10px] font-medium text-green-700 ring-1 ring-inset ring-green-600/20 ml-2", children: "New Team Registration" })
      ] });
    }
    if (selectedUser && selectedUser.Name) {
      heading = eventDetails?.EventName + " - " + selectedUser.Name;
    }
    if (userRoleJson?.FinishedSteps == true) {
      heading = eventDetails?.EventName + " - " + selectedUser.Name + " - Submitted";
    }
    let modelHeading = "Registration Form";
    let modelDescription = "Please fill the form to register for the event";
    if (selectedUser && selectedUser.Name) {
      modelHeading = selectedUser.Name + " - Registration Form";
      modelDescription = "Please continue remaining steps to complete the registration";
    }
    if (selectedTeam && selectedTeam.TeamName) {
      modelHeading = selectedTeam.TeamName + " - Registration Form";
      modelDescription = "Please continue remaining steps to complete the registration";
    }
    if (isSubmitted) {
      modelHeading = "View";
      modelDescription = "Please view the details submitted in the registration form";
    }
    if (tempUser) {
      heading = eventDetails?.EventName + " - First User Registration";
      modelHeading = "Registration Form";
      modelDescription = "Please fill the form to register for the event";
    }
    if (isGuardianRegistration) {
      heading = eventDetails?.EventName + " - Account Registration";
      modelHeading = "Account Registration Form";
      modelDescription = "Please fill the form to register an account for adding participants";
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModalForm,
      {
        title: modelHeading,
        description: modelDescription,
        open: true,
        customHeading: customComponents ? customComponents : null,
        setOpen: () => {
          gotoHome();
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { heading, outerClasses: "relative w-full", headingClasses: "px-1 lg:px-4  w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mt-5 min-h-[800px]", id: "registrationBox", children: activeStep ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          availableSteps?.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(RegistrationNavSteps, { isSubmitted, availableSteps, submittedSteps, handleClick }),
          !isProperlyLoaded ? /* @__PURE__ */ jsxRuntimeExports.jsx(Error, { info: "We couldn't find the selected user or team." }) : isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormSubmission,
            {
              isCoordinatorView,
              participantType,
              isGuardianRegistration,
              handleNext,
              isSubmitted,
              eventDetails,
              isPlayGround: false,
              onChange,
              data,
              isLastStep,
              existingComponents: components,
              selectedComponent,
              setSelectedComponent,
              components
            },
            updateIndex
          ) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-2xl text-gray-500", children: "Please select a step to proceed" }) }) })
      }
    );
  } else if (tempUser && participantType === "individual") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { heading: eventDetails + " - Event Registration", outerClasses: "relative w-3/4", headingClasses: "px-1 md:px-6  w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-2xl text-gray-500", children: "Please click on add button and proceed" }) }) });
  } else ;
}
const WithRegistrationFormData = (props) => {
  const {
    getParticipantsLink,
    participantTypeInt,
    candidateId,
    isDirectOpen = false
  } = props;
  const {
    eventDetails,
    jsonSettings,
    allStepsComponents,
    participationDetails: contextParticipationDetails,
    participationsStatus: contextParticipationsStatus,
    refreshParticipationDetails
  } = usePublicAppContext();
  const participantFilter = {
    ...candidateId && participantTypeInt == 1 ? {
      Candidate: candidateId,
      participantType: "1"
    } : candidateId && participantTypeInt == 2 ? {
      Candidate: candidateId,
      TeamId: candidateId,
      participantType: "2"
    } : isDirectOpen ? { participantType: participantTypeInt == 1 ? "1" : "2" } : {}
  };
  const {
    row: individualParticipationDetails,
    update: updateParticipations,
    status: individualParticipationsStatus,
    setFilter: setParticipationsFilter,
    filters: currentFilters
  } = useBackend(
    getParticipantsLink ? getParticipantsLink : "/CandidateJson/GetParticipants",
    {
      deleteUrl: "/CandidateJson/RemoveUser",
      mandatoryParams: ["participantType", "Candidate"],
      select: "participantList,userList,UserEmail,UserName,UserDobString,UserImage,UserMobile,UserPhone,Email,Group,Candidate,CandidateUser,JsonSettings,Gender,GroupName,Fees,TeamTeamName,Team,TeamStrength,TeamMembersList,TeamMembers,TeamStrength,CandidateIdentityNumber,TeamIdentityNumber,CompetitionOrder,CreatedBy,CreatedByUserName,ParticipationId,UserJsonSettings,TeamJsonSettings,Remarks,LevelSettings,RegistrationId",
      updateUrl: "/CandidateJson/UpdateParticipant",
      doCache: true,
      noGet: !candidateId || !participantFilter.participantType ? true : false,
      // Only fetch when candidateId exists
      limit: candidateId ? 1 : 0,
      filter: participantFilter
    }
  );
  const participationDetails = candidateId ? individualParticipationDetails : contextParticipationDetails;
  const participationsStatus = candidateId ? individualParticipationsStatus : contextParticipationsStatus;
  const updateTeam = async (data) => {
    try {
      const res = await post("/CandidateJson/UpdateTeam", data);
      return res;
    } catch (error) {
      console.error("Update team error:", error);
      throw error;
    }
  };
  const updateUser = async (data) => {
    try {
      const res = await post("/CandidateJson/UpdateUser", data);
      return res;
    } catch (error) {
      console.error("Update user error:", error);
      throw error;
    }
  };
  const updateRole = async (data) => {
    try {
      const res = await post(
        candidateId ? "/CandidateJson/UpdateUserRoles" : "/CandidateJson/UpdateUserRoles",
        data
      );
      return res;
    } catch (error) {
      console.error("Update role error:", error);
      throw error;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RegistrationFormComponent,
    {
      ...props,
      refreshParticipationDetails,
      eventDetails,
      jsonSettings,
      allStepsComponents,
      participationDetails,
      participationsStatus,
      currentFilters,
      updateParticipations,
      setParticipationsFilter,
      updateTeam,
      updateUser,
      updateRole,
      isDataLoading: isDataLoading(participationsStatus)
    }
  );
};
const RegistrationFormComponent = ({
  view,
  isCoordinatorView,
  participantTypeInt,
  candidateId,
  closeModel,
  customComponents,
  allowEdit,
  isDirectOpen = false,
  // Data Layer Props from Context
  eventDetails,
  jsonSettings,
  allStepsComponents,
  // Data Layer Props from Individual API
  participationDetails,
  currentFilters,
  updateParticipations,
  setParticipationsFilter,
  updateTeam,
  updateUser,
  updateRole,
  isDataLoading: isJsonLoading,
  refreshParticipationDetails
}) => {
  const [anyChangesSaved, setAnyChangesSaved] = reactExports.useState(true);
  const { user: loggedinUser } = getUserData() || {};
  if (!loggedinUser || !loggedinUser.Email) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Please log in to access this form." });
  }
  const isGuardian = loggedinUser?.RoleTitle === "Guardian";
  const isTempUser = loggedinUser?.Email?.indexOf("justnshalom") != -1;
  const [updateIndex, setUpdateIndex] = reactExports.useState(0);
  const [selectedUser, setSelectedUserState] = reactExports.useState(null);
  const [agreementData, setAgreementData] = reactExports.useState({});
  let [selectedTeam, setSelectedTeam] = reactExports.useState(null);
  let [isLoading, setIsLoading] = reactExports.useState(false);
  const [submittedSteps, setSubmittedSteps] = reactExports.useState([]);
  const [candidateIdState, setCandidateIdState] = reactExports.useState(candidateId);
  const participantType = participantTypeInt == 1 ? "Individual" : participantTypeInt == 2 ? "Team" : "";
  let [steps, setSteps] = reactExports.useState([...registrationSteps]);
  let allFormData = {};
  let exportedForm = {};
  const setSelectedUser = (x) => setSelectedUserState(x);
  if (candidateIdState) {
    if (participantTypeInt == 1) {
      participationDetails?.UsersList?.length ? participationDetails.UsersList[0] : null;
    } else if (participantTypeInt == 2) {
      participationDetails?.UsersList?.length ? participationDetails.UsersList[0] : null;
    }
  }
  console.log({ participationDetails });
  reactExports.useEffect(() => {
    if (candidateIdState) {
      if (participantTypeInt == 1 && currentFilters?.Candidate != candidateIdState) {
        setParticipationsFilter({
          Candidate: candidateIdState,
          participantType: "2"
        });
      } else if (participantTypeInt == 2 && (currentFilters?.Candidate != candidateIdState || currentFilters?.TeamId != candidateIdState)) {
        setParticipationsFilter({
          Candidate: candidateIdState,
          participantType: "2",
          TeamId: candidateIdState
        });
      }
    }
  }, [candidateIdState, currentFilters?.Candidate]);
  let extracted = extractUserAndRoleData(participationDetails, candidateIdState, selectedUser?.UId, selectedTeam?.Team);
  let { userRoles, userRole, users, userData, teams, teamData } = extracted;
  console.log({ participationDetails, selectedUser, selectedTeam });
  console.log({ userRoles, userRole, users, userData, teams, teamData });
  let currentUser = userData;
  let currentTeam = teamData;
  let temporaryUser = !users?.length ? parseJson(localStorage.user)?.user : null;
  if (isGuardian && !isTempUser) {
    temporaryUser = null;
  }
  if (participantType == "Team") {
    let userDetails = parseJson(localStorage.user)?.user;
    if (userDetails) {
      temporaryUser = userDetails?.Email?.indexOf("justnshalom") == -1 ? null : userDetails;
    }
  }
  let tempUser = temporaryUser ? {
    UId: temporaryUser?.UId
  } : null;
  if (tempUser) {
    userData = {
      UId: tempUser?.UId
    };
  }
  const finalIsLoading = isJsonLoading || isLoading;
  let userRoleJson = parseJson(userRole?.JsonSettings);
  let userDataJson = parseJson(userData?.JsonSettings);
  let teamJson = parseJson(teamData?.TeamJsonSettings);
  const advancedSettings = jsonSettings?.AdditionalSettings;
  const availableStepKeys = Object.keys(allStepsComponents ?? {});
  let agreementDataJson = parseJson(agreementData?.JsonSettings);
  let isAgreementStepFilled = availableStepKeys?.includes("Agreement") && allStepsComponents?.["Agreement"]?.filter((x) => x?.validate?.required && !userRoleJson[x.name] && !agreementDataJson[x.name])?.length == 0;
  if (isAgreementStepFilled) {
    localStorage.setItem("isAgreementStepFilled", "true");
  }
  if (localStorage.getItem("isAgreementStepFilled") == "true") {
    isAgreementStepFilled = true;
  }
  let availableSteps = getAvailableSteps(allStepsComponents, steps, isAgreementStepFilled, participantType, users, tempUser, view, isCoordinatorView);
  let activeStep = getActiveStep(availableSteps);
  let activeComponents = getActiveComponents(allStepsComponents, activeStep);
  let data = activeStep ? updateStepData(
    activeStep.name,
    {},
    setUpdateIndex,
    activeStep,
    userRole,
    userRoleJson,
    userData,
    userDataJson,
    participantType,
    teamData,
    participationDetails,
    allStepsComponents,
    currentUser,
    currentTeam,
    teamJson,
    false,
    agreementData
  ) : {};
  const handleClick = (index, event, override, availableSteps2, data2, activeStep2, userRole2, userRoleJson2, teamJson2) => {
    event.preventDefault();
    if (!availableSteps2) return;
    let nextStepLooking = availableSteps2[index];
    let isFInishedSteps = userRoleJson2?.FinishedSteps || teamJson2?.FinishedSteps || candidateIdState;
    if (!isFInishedSteps) {
      if (!override) {
        let currentStepIndex = availableSteps2.findIndex((step) => step.status === "active");
        let isTheStepBefore = currentStepIndex > index;
        if (!isTheStepBefore) {
          if (!submittedSteps.find((x) => x.name == nextStepLooking.name)) {
            zt.error("Please complete the current step/click the next button for proceed to the next step.");
            return;
          }
        }
      }
    }
    const updatedSteps = availableSteps2?.map((step, stepIdx) => {
      if (stepIdx === index) {
        return { ...step, status: "active" };
      } else {
        return { ...step, status: "inactive" };
      }
    });
    availableSteps2 = updatedSteps;
    activeStep2 = updatedSteps.find((step) => step.status === "active");
    if (allStepsComponents[activeStep2.name]) {
      let selectedComponents = allStepsComponents[activeStep2.name];
      selectedComponents.forEach((component) => {
        component.name = component.name.charAt(0).toLowerCase() + component.name.slice(1);
      });
      exportedForm[activeStep2.name] = [...selectedComponents];
    } else {
      exportedForm[activeStep2.name] = [];
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    steps = updatedSteps;
    setSteps(updatedSteps);
  };
  const handleNext = async (hookdata, reset, saveForLater, closeAfterSave) => {
    setIsLoading(true);
    setAnyChangesSaved(true);
    allFormData = { ...allFormData, ...hookdata };
    let nextIndex = availableSteps.findIndex((step) => step.status === "active") + 1;
    if (!saveForLater) {
      if (nextIndex >= availableSteps.length) {
        if (participantType == "Individual") {
          userRoleJson.FinishedSteps = true;
        } else {
          hookdata.FinishedSteps = true;
        }
      }
    }
    let success = await saveData(
      hookdata,
      agreementData,
      activeStep,
      userRole,
      userRoles,
      userRoleJson,
      userData,
      userDataJson,
      participantType,
      teamData,
      participationDetails,
      activeComponents,
      updateRole,
      updateUser,
      updateTeam,
      setParticipationsFilter,
      updateParticipations,
      currentUser,
      setSelectedUser,
      currentTeam,
      setSelectedTeam,
      setAgreementData,
      teamJson,
      teams,
      advancedSettings,
      saveForLater,
      setCandidateIdState
      // newly added param
    );
    if (success) {
      setSubmittedSteps([...submittedSteps, activeStep]);
      reset();
      let nextIndex2 = availableSteps.findIndex((step) => step.status === "active") + 1;
      if (nextIndex2 < availableSteps.length && !saveForLater && !closeAfterSave) {
        handleClick(
          nextIndex2,
          { preventDefault: () => {
          } },
          true,
          availableSteps,
          data,
          activeStep,
          userRole,
          userRoleJson,
          teamJson
        );
      } else {
        setSelectedUser(null);
        userRole = {};
        userDataJson = {};
        userRoleJson = {};
        teamData = {};
        setSelectedTeam(null);
        if (closeModel) {
          setCandidateIdState(null);
          closeModel();
          if (anyChangesSaved) {
            refreshParticipationDetails({
              takeNew: true
            });
          }
        }
        zt.success("Registration saved successfully!");
      }
    } else {
      zt.error("Failed to save data");
    }
    setIsLoading(false);
    setUpdateIndex(updateIndex + 1);
  };
  const onChange = (schema) => {
    exportedForm[activeStep.name] = schema;
  };
  const handleNavBarClick = (index, event) => {
    let nextStepIndex = index;
    handleClick(nextStepIndex, event, false, availableSteps, data, activeStep, userRole, userRoleJson, teamJson);
  };
  let isSubmitted = participantType == "Individual" && userRoleJson?.FinishedSteps || participantType == "Team" && teamJson?.FinishedSteps;
  if (allowEdit && candidateIdState) {
    isSubmitted = false;
  }
  allStepsComponents?.["User"] && allStepsComponents?.["User"]?.length > 0;
  allStepsComponents?.["Team"] && allStepsComponents?.["Team"]?.length > 0;
  let gotoHome = () => {
    setSelectedUser(null);
    setSelectedTeam(null);
    setSubmittedSteps([]);
    if (closeModel) {
      setCandidateIdState(null);
      closeModel();
      refreshParticipationDetails({
        takeNew: true
      });
    }
  };
  var isProperlyLoaded = true;
  if (candidateIdState > 0 && participationDetails?.UsersList?.length > 0 && (!userData && participantTypeInt == 1 || !teamData && participantTypeInt == 2)) {
    isProperlyLoaded = false;
  }
  if (candidateIdState > 0 && !participationDetails) {
    isLoading = true;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    RenderRegistrationBox,
    {
      isDirectOpen,
      isCoordinatorView,
      customComponents,
      isProperlyLoaded,
      userRoleJson,
      participantType,
      steps,
      gotoHome,
      isSubmitted,
      selectedTeam: currentTeam,
      tempUser,
      selectedUser: currentUser,
      eventDetails,
      activeStep,
      isLoading: finalIsLoading,
      onChange,
      availableSteps,
      submittedSteps,
      allStepsComponents,
      data: { ...data },
      handleClick: handleNavBarClick,
      handleNext,
      components: activeComponents,
      setSelectedComponent: () => {
      }
    }
  ) });
};
const RenderRegistrationForm = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(WithRegistrationFormData, { ...props });
};
export {
  RegistrationFormComponent,
  RenderRegistrationForm,
  WithRegistrationFormData,
  RenderRegistrationForm as default
};
