import { r as reactExports, j as jsxRuntimeExports, L as Loader, _ as __vitePreload, k as React, B as usePublicAppContext, b as getUserData, u as useBackend, z as zt, n as isDataLoading, q as parseJson, i as classNames } from "./main-B7w5eCOl.js";
import { u as useConfirmation } from "./useConfirmation-7dfYOxTH.js";
import { e as extractUserAndRoleData, d as getAllComponentFields } from "./publicRegistrationHelper-D8ymtYJF.js";
import { B as Box } from "./box-Du61b7dg.js";
function UserGroupIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    d: "M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(UserGroupIcon);
function UserIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    d: "M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(UserIcon);
const ListUsersLazy = reactExports.lazy(() => __vitePreload(() => import("./ListUsers-Bp828D4p.js"), true ? [] : void 0).then((module) => ({ default: module.ListUsers })));
const RenderListTeamsBoxLazy = reactExports.lazy(() => __vitePreload(() => import("./RenderListTeamsBox-R1pEFyOV.js"), true ? [] : void 0).then((module) => ({ default: module.RenderListTeamsBox })));
function RenderListUsersBox({
  teams,
  allStepsComponents,
  selectedTeam,
  advancedSettings,
  onClickDelete,
  participationDetails,
  isIndividualRegistration,
  isTeamsRegistration,
  users,
  userRoles,
  selectedUser,
  onEditParticipant,
  participantType,
  setParticipantType,
  addNewParticipant,
  addNewTeamParticipant,
  tempUser
}) {
  const handleChangeUser = (user) => {
    if (onEditParticipant) {
      const userRole2 = userRoles?.find((x) => x.User === user.UId);
      onEditParticipant({ Candidate: userRole2?.UserRoleId }, false);
    }
  };
  const handleChangeTeam = (team) => {
    if (onEditParticipant) {
      onEditParticipant({ Team: team?.Team }, true);
    }
  };
  let isIndividualRegistrationClosed = advancedSettings?.DisableIndividualRegForm == "Yes";
  advancedSettings?.DisableTeamRegForm == "Yes";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col w-full", children: [
    participantType == "Individual" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      isIndividualRegistrationClosed && isIndividualRegistration ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative", role: "alert", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-bold", children: "Registration Closed!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block sm:inline", children: " Individual Registration is closed for this event." })
      ] }) }) : isIndividualRegistration && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "w-full px-2 bg-yellow-900 max-w-60 text-white text-xs font-medium py-2 mt-2 rounded-md hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary mr-4",
          onClick: addNewParticipant,
          children: "Add New Individual Participant"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          heading: "Participation Requests",
          outerClasses: "relative " + (selectedUser ? " sm:w-2/6 md:w-1/4" : "w-full") + " overflow-hidden",
          headingClasses: "px-1  lg:px-1",
          childrenClasses: "px-1 lg:px-1 py-1  w-full flex",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col max-w-full w-full", children: [
            isIndividualRegistration && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-full flex-1 flex-col flex mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ListUsersLazy,
              {
                allStepsComponents,
                onClickDelete,
                users,
                activeUser: selectedUser,
                userRoles,
                onChange: handleChangeUser,
                setParticipantType,
                participationDetails
              }
            ) }) }),
            !users?.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 flex-col justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center bg-surface rounded-full p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "size-10 text-onSurfaceVariant" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-sm font-medium text-onSurface", children: "No Participants Found" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 mb-2 text-xs text-onSurfaceVariant", children: "Please add new participants to the list by click on the Add New Participant button." })
            ] }) })
          ] })
        }
      )
    ] }),
    participantType == "Team" && isTeamsRegistration && /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      RenderListTeamsBoxLazy,
      {
        teams,
        tempUser,
        selectedTeam,
        participationDetails,
        handleChangeTeam,
        users,
        onClickDelete,
        userRoles,
        allStepsComponents,
        selectedUser,
        handleChangeUser,
        setParticipantType,
        addNewParticipant: addNewTeamParticipant
      }
    ) })
  ] }) });
}
const WithUsersListData = (props) => {
  console.log("🏗️ WithUsersListData re-render");
  const {
    eventDetails,
    eventStatus,
    participationDetails,
    participationsStatus,
    participantType,
    participantTypeInt,
    setParticipantType,
    allStepsComponents,
    jsonSettings,
    isIndividualRegistration,
    isTeamsRegistration
  } = usePublicAppContext();
  const { user: loggedinUser } = getUserData() || {};
  const {
    delete: deleteParticipant
  } = useBackend("/CandidateJson/GetParticipants", {
    deleteUrl: "/CandidateJson/RemoveUser",
    noGet: true
  });
  console.log("� Data status:", {
    participationsStatus,
    participationDetails,
    hasData: !!participationDetails
  });
  const handleDeleteParticipant = reactExports.useCallback(async (deleteItem) => {
    try {
      const deleteObject = {
        UserRoleId: participantTypeInt === 1 ? deleteItem.Candidate : deleteItem.Team,
        id: participantTypeInt === 1 ? deleteItem.Candidate : deleteItem.Team,
        participantType: participantTypeInt.toString()
      };
      await deleteParticipant(deleteObject);
      zt.success("Participant Deleted Successfully");
    } catch (error) {
      console.error("Delete participant error:", error);
      zt.error("Failed to delete participant");
      throw error;
    }
  }, [participantTypeInt, deleteParticipant]);
  const handleParticipantTypeChange = reactExports.useCallback((newType) => {
    setParticipantType(newType);
  }, [setParticipantType]);
  const componentProps = reactExports.useMemo(() => ({
    ...props,
    eventDetails,
    eventStatus,
    participationDetails,
    participationsStatus,
    participantType,
    participantTypeInt,
    allStepsComponents,
    jsonSettings,
    isIndividualRegistration,
    isTeamsRegistration,
    handleDeleteParticipant,
    handleParticipantTypeChange,
    isDataLoading: isDataLoading(eventStatus, participationsStatus)
  }), [
    props,
    eventDetails,
    eventStatus,
    participationDetails,
    participationsStatus,
    participantType,
    participantTypeInt,
    allStepsComponents,
    jsonSettings,
    isIndividualRegistration,
    isTeamsRegistration,
    handleDeleteParticipant,
    handleParticipantTypeChange
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(UsersListComponent, { ...componentProps });
};
const UsersListComponent = React.memo(({
  setActiveTab,
  onStartRegistration,
  closeModel,
  // Data Layer Props from Context
  eventDetails,
  eventStatus,
  participationDetails,
  participationsStatus,
  participantType,
  participantTypeInt,
  allStepsComponents,
  jsonSettings,
  isIndividualRegistration,
  isTeamsRegistration,
  handleDeleteParticipant,
  handleParticipantTypeChange,
  isDataLoading: isJsonLoading
}) => {
  const { user: loggedinUser } = getUserData() || {};
  if (!loggedinUser || !loggedinUser.Email) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Please log in to access this form." });
  }
  const isGuardian = loggedinUser?.RoleTitle === "Guardian";
  loggedinUser?.RoleTitle === "Candidate";
  const isTempUser = loggedinUser?.Email?.indexOf("justnshalom") !== -1;
  const [ParticicipantConfirmationBox, showConfirmation] = useConfirmation();
  const extracted = extractUserAndRoleData(participationDetails, null, null, null);
  const { userRoles, users, teams } = extracted;
  const temporaryUser = !users?.length ? parseJson(localStorage.user)?.user : null;
  const tempUser = temporaryUser && !(isGuardian && !isTempUser) ? { UId: temporaryUser?.UId } : null;
  const advancedSettings = jsonSettings?.AdditionalSettings;
  const allFields = getAllComponentFields(allStepsComponents);
  const handleEditParticipant = (candidate, isTeam = false) => {
    const typeInt = isTeam ? 2 : 1;
    const id = isTeam ? candidate.Team : candidate.Candidate;
    if (onStartRegistration) {
      onStartRegistration(typeInt, id);
    }
  };
  const handleAddNewParticipant = () => {
    const typeInt = participantType === "Individual" ? 1 : 2;
    if (onStartRegistration) {
      onStartRegistration(typeInt);
    }
  };
  const handleAddNewTeamParticipant = () => {
    if (onStartRegistration) {
      onStartRegistration(2);
    }
  };
  if (isJsonLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading participants..." });
  }
  const tabs = [];
  if (isIndividualRegistration) {
    tabs.push({ name: "Individual", icon: ForwardRef });
  }
  if (isTeamsRegistration) {
    tabs.push({ name: "Team", icon: ForwardRef$1 });
  }
  const onClickDelete = (deleteItem) => {
    if (deleteItem) {
      const deleteObject = {
        UserRoleId: participantType === "Individual" ? deleteItem.Candidate : deleteItem.Team,
        id: participantType === "Individual" ? deleteItem.Candidate : deleteItem.Team,
        participantType: participantType === "Individual" ? "1" : "2"
      };
      showConfirmation(deleteObject);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ParticicipantConfirmationBox,
      {
        title: "Delete Participant",
        description: "Are you sure you want to delete this participant?",
        confirmButtonLabel: "Delete",
        confirmButtonClick: async (item) => {
          await handleDeleteParticipant(item);
          zt.success("Participant Deleted Successfully");
        },
        className: "w-96 print:hidden"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Tabs", className: "isolate flex divide-x divide-gray-200 rounded-t-lg mb-6 mt-5", children: tabs.map((tab, tabIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            handleParticipantTypeChange(tab.name);
          },
          className: classNames(
            participantType === tab.name ? "text-sky-800 bg-sky-50" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100 bg-slate-50",
            tabIdx === 0 ? "rounded-l-lg" : "",
            tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
            "group relative justify-center flex-grow min-w-0 flex items-center px-4 py-3 text-center text-sm font-medium focus:outline-none"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: classNames(participantType === tab.name ? "text-sky-800" : "text-gray-400 group-hover:text-gray-500", "h-6 mr-2"), "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: classNames(tab.hideOnMobile ? "hidden sm:block" : ""), children: [
              "As ",
              tab.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: classNames(participantType === tab.name ? "bg-sky-800" : "bg-transparent", "absolute inset-x-0 bottom-0 h-0.5") })
          ]
        },
        tab.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mt-6 flex-col justify-center justify-items-center sm:flex-row sm:space-x-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        RenderListUsersBox,
        {
          allStepsComponents,
          allFields,
          teams,
          onClickDelete,
          tempUser,
          isIndividualRegistration,
          isTeamsRegistration,
          participantType,
          addNewParticipant: handleAddNewParticipant,
          addNewTeamParticipant: handleAddNewTeamParticipant,
          userRoles,
          users,
          participationDetails,
          advancedSettings,
          onEditParticipant: handleEditParticipant
        }
      ) }) })
    ] })
  ] });
});
UsersListComponent.displayName = "UsersListComponent";
const RenderUsersList = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(WithUsersListData, { ...props });
};
const renderUsersList = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UsersListComponent,
  WithUsersListData,
  default: RenderUsersList
}, Symbol.toStringTag, { value: "Module" }));
export {
  ForwardRef as F,
  ForwardRef$1 as a,
  renderUsersList as r
};
