import { j as jsxRuntimeExports, r as reactExports, u as useBackend, _ as __vitePreload } from "./main-B7w5eCOl.js";
const IframeBox = reactExports.lazy(() => __vitePreload(() => import("./iframeBox-BHTNgrrM.js"), true ? [] : void 0));
const TeamMembers = reactExports.lazy(() => __vitePreload(() => import("./teamMembers-DZtw-aUB.js"), true ? [] : void 0));
function ManageTeamParticipants({ groupId, disabled, hideGoBack, teamId, levels, onClose, onUpdate, renderAsComponenet }) {
  let [isLoading, setIsLoading] = reactExports.useState(false);
  const { row: eventDetails } = useBackend("/EventJson/Get", { select: "EVId,EventName,Description,JsonSettings" });
  const { rows: ageWiseGroup, setFilter: setAgeFilter } = useBackend("/AgewiseGroupsJson/GetByAge", {
    sort: { sortOrder: "DESC", sortColumn: "id" },
    select: "AgeFrom,AgeTo,EventGroupId,GroupName,Status"
  });
  const {
    row: participants,
    setFilter,
    update: saveParticipantDetails,
    status: participantStatus
  } = useBackend("/CoordinatorJson/GetParticipants?ParticipantType=2&TeamId=" + teamId, {
    updateUrl: "/CoordinatorJson/SaveParticipantsDirect",
    deleteUrl: "/CoordinatorJson/RemoveUserBody",
    sort: { sortOrder: "DESC", sortColumn: "id" },
    filter: { ParticipantType: 2, TeamId: teamId, disableGetCompetitions: false, group: groupId },
    select: "participantList,userList,UserName,UserDobString,UserImage,UserMobile,UserPhone,Email,Group,Candidate,CandidateUser,JsonSettings,Gender,GroupName,Fees,TeamTeamName,Team,TeamStrength,TeamMembersList,TeamMembers,TeamStrength,CandidateIdentityNumber,TeamIdentityNumber,CompetitionOrder,MaximumCandidates"
  });
  let participantList = participants?.ParticipantsList ?? [];
  let competitions = participants?.Competitions ?? [];
  let usersList = participants?.UsersList ?? [];
  usersList.forEach((element) => {
    let participations = participantList.filter((x) => x.Candidate == element.Candidate || x.Candidate == element.Team);
    let participatingCompetitions = [];
    participations.forEach((participation) => {
      let competition = competitions.find((x) => x.CompetitionStructureId == participation.Competition);
      participatingCompetitions.push(competition);
    });
    element.participatingCompetitions = participatingCompetitions;
    let jsonSettingsValueOfTheUser = element.JsonSettings;
    try {
      let userAdditionalData = JSON.parse(jsonSettingsValueOfTheUser);
      if (userAdditionalData) {
        element.ApplicationStatus = userAdditionalData.finalSubmitted;
      }
    } catch (ex) {
    }
  });
  let selectedParticipantDetails = {};
  selectedParticipantDetails.user = {};
  selectedParticipantDetails.user = usersList.find((x) => x.Team == teamId);
  selectedParticipantDetails.participants = participantList.filter((x) => x.Candidate == teamId);
  const existingMembers = selectedParticipantDetails?.user?.TeamMembers ?? [];
  reactExports.useEffect(() => {
    if (onUpdate) {
      onUpdate(existingMembers);
    }
  }, [selectedParticipantDetails.participants]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    IframeBox,
    {
      hideGoBack,
      setOpen: () => {
        onClose();
      },
      noClose: false,
      hideTitle: renderAsComponenet === true,
      open: true,
      title: "Manage Team Participants",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        TeamMembers,
        {
          reducePadding: renderAsComponenet === true,
          groupId,
          hideGoBack,
          disabled,
          levels,
          isLoading2: participantStatus !== "finished",
          ageWiseGroup,
          setAgeFilter,
          setFilter,
          onClose,
          setIsLoading,
          saveParticipantDetails,
          eventDetails,
          participantList,
          teamId,
          selectedParticipantDetails,
          onChange: onUpdate
        }
      )
    }
  ) });
}
const RenderManageTeamParticipants = ({ renderAsComponenet, groupId, disabled, hideGoBack, teamId, levels, onClose, onUpdate }) => {
  if (!teamId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-2xl text-onSurfaceVariant", children: "Please select a team to proceed" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ManageTeamParticipants,
    {
      renderAsComponenet,
      groupId,
      disabled,
      hideGoBack,
      teamId,
      levels,
      onClose,
      onUpdate
    }
  );
};
export {
  RenderManageTeamParticipants as default
};
