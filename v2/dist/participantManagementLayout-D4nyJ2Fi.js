import { j as jsxRuntimeExports, r as reactExports, m as useEventContext, e as useAdvancedSettings, u as useBackend, L as Loader, z as zt, i as classNames, k as React, p as post } from "./main-B7w5eCOl.js";
import { F as ForwardRef } from "./PencilIcon-Cm_gsuKe.js";
import { F as ForwardRef$1 } from "./UserGroupIcon-C7G6h27R.js";
import { F as ForwardRef$2 } from "./TrashIcon-xWLadHx8.js";
import Pagination from "./pagination-DfWoZOZ9.js";
import { u as useConfirmation } from "./useConfirmation-7dfYOxTH.js";
import { F as ForwardRef$3 } from "./PhoneIcon-DYOd9fTV.js";
import { F as ForwardRef$4 } from "./ChatBubbleBottomCenterTextIcon-CKcdu_oV.js";
import { F as ForwardRef$5 } from "./ExclamationTriangleIcon-D83nSzlE.js";
import { F as ForwardRef$6 } from "./UserIcon-BRPEvw4s.js";
import { F as ForwardRef$7 } from "./ChevronDownIcon-DrbBxP_V.js";
import { F as ForwardRef$8 } from "./ChevronRightIcon-QSnXtBoc.js";
import { F as ForwardRef$9 } from "./ArrowPathIcon-CrJmYjUD.js";
import { F as ForwardRef$a } from "./CheckIcon-8INY0B1Y.js";
import { h as ht, L as Lt, z as ze, Q as Qe } from "./dialog-DkCfFwgC.js";
import "./ChevronLeftIcon-CImaoYY0.js";
import "./ChevronRightIcon-CASqfOFz.js";
import "./TrashIcon-DMovC4zz.js";
import "./keyboard-Dku-r8UD.js";
import "./dom-XjFFvgb6.js";
import "./use-is-mounted-DkvN6zYE.js";
import "./hidden-tL6qlWMm.js";
import "./open-closed-gVG0H0sE.js";
import "./description-3iOOxFmG.js";
import "./navigationUtils-BZC1EMRn.js";
function ParticipantActionButtons({ onEdit, onDelete, onTeamManage, onAdd, showAdd = false, isTeam = false, addLabel = "Add New Individual Participant", disabled = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    showAdd && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: disabled ? void 0 : onAdd,
        disabled,
        "aria-disabled": disabled,
        className: "w-full px-2 max-w-60 text-white text-xs font-medium py-2 rounded-md mr-4 " + (disabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-yellow-900 hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"),
        children: addLabel
      }
    ),
    onEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: disabled ? void 0 : onEdit,
        disabled,
        "aria-disabled": disabled,
        className: "p-1 rounded-md " + (disabled ? "text-gray-300 bg-transparent cursor-not-allowed" : "text-gray-400 hover:text-primary hover:bg-gray-100"),
        title: disabled ? "Editing disabled" : "Edit participant",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-4 w-4" })
      }
    ),
    isTeam && onTeamManage && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: disabled ? void 0 : onTeamManage,
        disabled,
        "aria-disabled": disabled,
        className: "p-1 rounded-md " + (disabled ? "text-gray-300 bg-transparent cursor-not-allowed" : "text-gray-400 hover:text-blue-600 hover:bg-gray-100"),
        title: disabled ? "Team management disabled" : "Manage team",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-4 w-4" })
      }
    ),
    onDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: disabled ? void 0 : onDelete,
        disabled,
        "aria-disabled": disabled,
        className: "p-1 rounded-md " + (disabled ? "text-gray-300 bg-transparent cursor-not-allowed" : "text-gray-400 hover:text-red-600 hover:bg-gray-100"),
        title: disabled ? "Delete disabled" : "Delete participant",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4" })
      }
    )
  ] });
}
const ParticipantHoverDetail = ({ eventLevels, participant, isTeam, eventDetails }) => {
  if (!participant) return null;
  const hasBasicInfo = !isTeam && participant.UserDobString || !isTeam && (participant.Gender || participant.GenderName) || participant.GroupName || participant.LanguageName || isTeam && participant.TeamStrength > 0;
  const hasContactInfo = participant.Email || participant.UserMobile || participant.UserPhone;
  const hasOrganizationUnit = participant.LevelSettings && eventLevels?.length > 0 && eventLevels.some((level) => {
    const key = level.LevelName + "Name";
    return participant.LevelSettings?.[key] || participant.LevelSettings?.[level.LevelName];
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border-t-2 border-primary p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row divide-x-2 text-xs", children: [
    hasBasicInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 px-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm text-primary mb-2", children: "Basic Information" }),
      !isTeam && participant.UserDobString && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-20 text-xs", children: "DOB:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.UserDobString })
      ] }),
      !isTeam && (participant.Gender || participant.GenderName) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-20 text-xs", children: "Gender:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.Gender || participant.GenderName })
      ] }),
      participant.GroupName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-20 text-xs", children: "Group:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.GroupName })
      ] }),
      participant.LanguageName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-20 text-xs", children: "Language:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.LanguageName })
      ] }),
      isTeam && participant.TeamStrength > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-20 text-xs", children: "Strength:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-900 text-xs", children: [
          participant.TeamStrength,
          " members"
        ] })
      ] })
    ] }),
    hasContactInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 px-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm text-primary mb-2", children: "Contact Information" }),
      participant.Email && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-20 text-xs", children: "Email:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${participant.Email}`, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline break-all text-xs", children: participant.Email })
      ] }),
      participant.UserMobile && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-20 text-xs", children: "Mobile:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.UserMobile }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${participant.UserMobile}`, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-4 w-4 text-blue-500 hover:text-blue-700" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://wa.me/${participant.UserMobile}?text=${encodeURIComponent(
                `Hi ${participant.UserName || participant.TeamTeamName}, I am from ${eventDetails?.EventName} and I would like to get in touch with you regarding your participation in the event.`
              )}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-4 w-4 text-green-500 hover:text-green-700" })
            }
          )
        ] })
      ] }),
      participant.UserPhone && participant.UserPhone !== participant.UserMobile && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-20 text-xs", children: "Phone:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.UserPhone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${participant.UserPhone}`, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-4 w-4 text-blue-500 hover:text-blue-700" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://wa.me/${participant.UserPhone}?text=${encodeURIComponent(
                `Hi ${participant.UserName || participant.TeamTeamName}, I am from ${eventDetails?.EventName} and I would like to get in touch with you regarding your participation in the event.`
              )}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-4 w-4 text-green-500 hover:text-green-700" })
            }
          )
        ] })
      ] })
    ] }),
    hasOrganizationUnit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 px-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm text-primary mb-2", children: "Organization Unit" }),
      eventLevels.map((level) => {
        const key = level.LevelName + "Name";
        const value = participant.LevelSettings?.[key] || participant.LevelSettings?.[level.LevelName] || null;
        return value ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600 font-medium w-24 text-xs", children: [
            level.LevelName,
            ":"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: value })
        ] }, level.LevelName) : null;
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 px-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm text-primary mb-2", children: "Registration Details" }),
      participant.RegistrationId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-28 text-xs", children: "Registration ID:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 font-medium text-xs", children: participant.RegistrationId })
      ] }),
      participant.CandidateIdentityNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-28 text-xs", children: "Candidate ID:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.CandidateIdentityNumber })
      ] }),
      participant.TeamIdentityNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-28 text-xs", children: "Team ID:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.TeamIdentityNumber })
      ] }),
      participant.UniqueCandidateId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-28 text-xs", children: "Unique ID:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.UniqueCandidateId })
      ] }),
      participant.UniqueTeamId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-28 text-xs", children: "Unique ID:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.UniqueTeamId })
      ] }),
      participant.CreatedByUserName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-28 text-xs", children: "Created By:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.CreatedByUserName })
      ] }),
      participant.CreatedDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-28 text-xs", children: "Created On:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.CreatedDate })
      ] }),
      participant.ModifiedDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-28 text-xs", children: "Modified On:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.ModifiedDate })
      ] }),
      participant.CreatedByEmail && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-28 text-xs", children: "Creator Email:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${participant.CreatedByEmail}`, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline break-all text-xs", children: participant.CreatedByEmail })
      ] }),
      participant.CreatedByMobile && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-28 text-xs", children: "Creator Mobile:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.CreatedByMobile }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${participant.CreatedByMobile}`, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-4 w-4 text-blue-500 hover:text-blue-700" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://wa.me/${participant.CreatedByMobile}?text=${encodeURIComponent(
                `Hi ${participant.CreatedByUserName}, I am from ${eventDetails?.EventName} and I would like to get in touch with you.`
              )}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-4 w-4 text-green-500 hover:text-green-700" })
            }
          )
        ] })
      ] }),
      participant.Remarks && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium w-28 text-xs", children: "Remarks:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 text-xs", children: participant.Remarks })
      ] })
    ] }),
    isTeam && participant.TeamMembersList && participant.TeamMembersList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full space-y-1 px-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm text-primary mb-2", children: "Team Members" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-xs", children: participant.TeamMembersList.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-2 rounded border border-gray-200 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-gray-900 text-xs", children: member.UserName }),
        member.UserDobString && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-600 text-xs", children: [
          "DOB: ",
          member.UserDobString
        ] }),
        member.GenderName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-600 text-xs", children: [
          "Gender: ",
          member.GenderName
        ] })
      ] }, index)) })
    ] })
  ] }) });
};
const getCompetitionStatusBadge = (statusId, competitionStatuses) => {
  if (!statusId || !competitionStatuses) return null;
  const status = competitionStatuses.find((s) => s.CompetitionStatusId == statusId);
  if (!status) return null;
  const statusIdNum = parseInt(statusId);
  let colorClass = "bg-gray-100 text-gray-700";
  if (statusIdNum === 1) colorClass = "bg-green-100 text-green-700";
  else if (statusIdNum === 2) colorClass = "bg-indigo-100 text-indigo-700";
  else if (statusIdNum === 3) colorClass = "bg-gray-100 text-gray-700";
  else if (statusIdNum === 4) colorClass = "bg-yellow-100 text-yellow-700";
  else if (statusIdNum === 5) colorClass = "bg-blue-100 text-blue-700";
  else if (statusIdNum === 6) colorClass = "bg-purple-100 text-purple-700";
  else if (statusIdNum === 7) colorClass = "bg-red-100 text-red-700";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block px-1.5 py-0.5 rounded text-xxxs font-medium ${colorClass}`, title: status.CompetitionStatusTitle, children: status.CompetitionStatusTitle });
};
const getGenderIcon = (genderText, className = "text-xs") => {
  if (!genderText) return null;
  const genderLower = genderText.toLowerCase();
  if (genderLower.includes("female") || genderLower.includes("girl") || genderLower.includes("women")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("material-symbols-outlined inline absolute -left-0.5 -top-1.5", className, "text-pink-600"), children: "girl" });
  }
  if (genderLower.includes("male") || genderLower.includes("boy") || genderLower.includes("men")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("material-symbols-outlined inline absolute -left-0.5 -top-1.5", className, "text-blue-600"), children: "boy" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("material-symbols-outlined", className, "text-gray-500"), children: "person" });
};
const ParticipantManagementLayout = ({
  onEdit,
  onView,
  onDelete,
  onTeamManage,
  selectedGroupFilter,
  selectedParticipantType,
  selectedOrganization,
  pageSize,
  currentPage,
  filterCriterias,
  currentUser,
  onAssignmentChange,
  onPageChange,
  selectedOrganizations,
  onClearFilters
}) => {
  const [rightPanelWidth, setRightPanelWidth] = reactExports.useState(384);
  const [isResizing, setIsResizing] = reactExports.useState(false);
  const [highlightedRowId, setHighlightedRowId] = reactExports.useState(null);
  const [highlightedColumnId, setHighlightedColumnId] = reactExports.useState({
    competitionId: null,
    candidateId: null
  });
  const [activeCompetitionId, setActiveCompetitionId] = reactExports.useState(null);
  const [loadingCells, setLoadingCells] = reactExports.useState(/* @__PURE__ */ new Set());
  const [expandedParticipantId, setExpandedParticipantId] = reactExports.useState(null);
  const resizerRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const { groups, competitionStatuses, eventDetails } = useEventContext();
  const { advancedSettings } = useAdvancedSettings();
  let organizationObj = {};
  if (selectedOrganizations && selectedOrganizations.length > 0) {
    selectedOrganizations.forEach((x) => {
      organizationObj = { ...organizationObj, ...x };
    });
  }
  const {
    row: participantsData,
    status: participantsStatus,
    updateLocal: updateParticipantLocal,
    delete: deleteParticipant,
    setOffsetAndLimit
  } = useBackend("/CoordinatorJson/GetParticipants", {
    select: "participantList,userList,UserEmail,UserName,UserDobString,UserImage,UserMobile,UserPhone,Email,Group,Candidate,CandidateUser,JsonSettings,Gender,GroupName,GenderName,LanguageName,Fees,TeamTeamName,Team,TeamStrength,TeamMembersList,TeamMembers,TeamStrength,CandidateIdentityNumber,TeamIdentityNumber,CompetitionOrder,CreatedBy,CreatedByUserName,ParticipantId,UserJsonSettings,TeamJsonSettings,Remarks,LevelSettings,RegistrationId,UniqueCandidateId,UniqueTeamId,CreatedDate,ModifiedDate,CreatedByEmail,CreatedByMobile",
    filter: {
      EventCategory: currentUser?.EventCategory,
      Event: currentUser?.Event,
      ParticipantType: selectedParticipantType,
      Group: selectedGroupFilter,
      OrganizationId: selectedOrganization || void 0,
      AgeFrom: groups?.find((g) => g.EventGroupId === selectedGroupFilter)?.AgeFrom,
      AgeTo: groups?.find((g) => g.EventGroupId === selectedGroupFilter)?.AgeTo,
      ...filterCriterias || {},
      ...organizationObj
    },
    limit: pageSize,
    offset: (currentPage - 1) * pageSize,
    updateUrl: "/CoordinatorJson/SaveParticipants",
    deleteUrl: "/CompetitionParticipantsJson/Remove",
    noGet: true
    // Don't fetch until we have required filters
  });
  let participantsList = participantsData?.ParticipantsList || [];
  const usersList = participantsData?.UsersList || [];
  const competitions = participantsData?.Competitions || [];
  const eventLevels = participantsData?.OrganizationLevels || [];
  const pageDetails = participantsData;
  const participantRows = usersList.map((user) => {
    const userParticipations = participantsList.filter((participation) => {
      if (user.Team > 0) {
        return participation.Team === user.Team.toString() || participation.Candidate === user.Team.toString();
      }
      if (user.Candidate > 0) {
        return participation.Candidate === user.Candidate.toString();
      }
      return false;
    });
    return {
      ...user,
      participations: userParticipations
    };
  });
  const filteredParticipants = participantRows;
  let jsonfilterCriteria = JSON.stringify(filterCriterias);
  reactExports.useEffect(() => {
  }, [selectedOrganization, jsonfilterCriteria]);
  const handleMouseDown = (e) => {
    setIsResizing(true);
    e.preventDefault();
  };
  reactExports.useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = containerRect.right - e.clientX;
      const minWidth = 280;
      const levelsCount = Array.isArray(eventLevels) ? eventLevels.length : 0;
      const maxWidth = levelsCount > 0 ? Math.max(minWidth, levelsCount * 120) : containerRect.width * 0.6;
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setRightPanelWidth(newWidth);
      }
    };
    const handleMouseUp = () => {
      setIsResizing(false);
    };
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);
  const isParticipantAssigned = reactExports.useCallback((participant, competitionId) => {
    if (!participant.participations) return false;
    return participant.participations.some((participation) => participation.Competition === competitionId);
  }, []);
  const isParticipationLimitExceeded = (participant, competition) => {
    participant.Gender;
    if (competition?.GenderName != "Both" && competition?.GenderName != "" && participant?.GenderName != competition?.GenderName) {
      if (participant?.Gender === "Male" && competition?.GenderName === "Female") {
        return { exceeded: true, type: "gender", limit: competition?.GenderName, current: participant?.GenderName };
      }
      if (participant?.Gender === "Female" && competition?.GenderName === "Male") {
        return { exceeded: true, type: "gender", limit: competition?.GenderName, current: participant?.GenderName };
      }
    }
    if (!participant.participations || !advancedSettings) return false;
    const currentParticipationCount = participant.participations.length;
    if (selectedParticipantType.toString() === "1") {
      const maxPerCandidate = parseInt(advancedSettings.MaximumParticipationPerCandidate) || 0;
      if (maxPerCandidate > 0 && currentParticipationCount >= maxPerCandidate) {
        return { exceeded: true, type: "candidate", groupName: competition.GroupName, limit: maxPerCandidate, current: currentParticipationCount };
      }
    }
    if (selectedParticipantType.toString() === "2") {
      const maxPerGroup = parseInt(advancedSettings.MaximumParticipationPerGroup) || 0;
      if (maxPerGroup > 0 && competition.GroupName) {
        const participationsInSameGroup = participant.participations.filter((p) => {
          const comp = competitions?.find((c) => c.CompetitionStructureId === p.Competition);
          return comp && comp.GroupName === competition.GroupName;
        }).length;
        if (participationsInSameGroup >= maxPerGroup) {
          return { exceeded: true, type: "group", limit: maxPerGroup, current: participationsInSameGroup, groupName: competition.GroupName };
        }
      }
    }
    return { exceeded: false };
  };
  const handleAssignmentToggle = async (participant, competition, event) => {
    const isGlobalFreeze = advancedSettings?.FreezeParticipation === "Yes";
    const compStatusObj = competitionStatuses?.find((s) => s.CompetitionStatusId == competition.CompetitionStatus);
    const compStatusTitle = compStatusObj?.CompetitionStatusTitle || "";
    const isCompAvailable = compStatusTitle === "Not Started";
    if (isGlobalFreeze || !isCompAvailable) {
      zt.error("Modifications are currently disabled for this competition");
      return;
    }
    const isChecked = event.target.checked;
    const assigned = isParticipantAssigned(participant, competition.CompetitionStructureId);
    const participantId = selectedParticipantType == 2 ? participant.Team : participant.Candidate;
    const cellKey = `${participantId}-${competition.CompetitionStructureId}`;
    const participation = participant.participations?.find((p) => p.Competition === competition.CompetitionStructureId);
    if (isChecked) {
      if (assigned) {
        zt.success("This participant is already assigned to the selected competition.");
        return;
      }
      setLoadingCells((prev) => new Set(prev).add(cellKey));
      const organizationParams = {};
      if (participant.LevelSettings && eventLevels?.length > 0) {
        organizationParams[`UsersRolesModel`] = participant.LevelSettings;
        organizationParams[`TeamModel`] = participant.LevelSettings;
      }
      const assignmentData = {
        // Organization levels
        ...organizationParams,
        // User/Team specific fields
        ...selectedParticipantType == 1 ? {
          UserImageInList: participant.UserImage || "",
          "UsersModel[UserImage]": participant.UserImage || "",
          "UsersModel[Candidate][]": participant.Candidate || "",
          "UsersModel[CandidateUser][]": participant.CandidateUser || "",
          "UsersModel[UserName]": participant.UserName || participant.TeamTeamName || "",
          "UsersModel[UserNameTitle]": participant.UserNameTitle || "",
          "UsersModel[UserDobString]": participant.UserDobString || ""
        } : {},
        ...selectedParticipantType == 2 ? { "UsersModel[TeamTeamName]": participant.TeamTeamName || "", "UsersModel[Team][]": participant.Team || [] } : {},
        // Competition assignment
        "CompetitionParticipantsModel[CompetitionCompetitionStructureId]": competition.CompetitionStructureId,
        // Filter parameters
        ParticipantType: selectedParticipantType,
        Group: selectedGroupFilter
      };
      try {
        const { data: response } = await post("/CoordinatorJson/SaveParticipants", assignmentData);
        const pieces = response.split(",");
        const participantid = parseInt(pieces[0]);
        if (participantid) {
          const participantIdValue = selectedParticipantType == 2 ? participant.Team : participant.Candidate;
          const newParticipation = {
            Competition: competition.CompetitionStructureId.toString(),
            IdentityNumber: "",
            JsonSettings: "",
            ParticipantId: participantid.toString()
          };
          if (selectedParticipantType == 2) {
            newParticipation.Team = participantIdValue.toString();
          } else {
            newParticipation.Candidate = participantIdValue.toString();
          }
          participantsList.push(newParticipation);
          updateParticipantLocal({
            ...pageDetails,
            ParticipantsList: participantsList
          });
          setHighlightedColumnId({
            competitionId: competition.CompetitionStructureId,
            candidateId: participantIdValue
          });
          setTimeout(() => {
            setHighlightedColumnId({ competitionId: null, candidateId: null });
          }, 2e3);
          zt.success("Participation added successfully");
        }
      } catch (error) {
        console.error("Error adding participation:", error);
        zt.error("Failed to add participation");
        event.target.checked = false;
      } finally {
        setLoadingCells((prev) => {
          const next = new Set(prev);
          next.delete(cellKey);
          return next;
        });
      }
    } else {
      if (!assigned || !participation?.ParticipantId) return;
      const confirmed = await showRemovalConfirmation({
        title: "Remove Participation",
        message: `Are you sure you want to remove ${participant.UserName || participant.TeamTeamName} from ${competition.CompetitionName || competition.Title || "this competition"}?`,
        confirmText: "Remove",
        cancelText: "Cancel"
      });
      if (!confirmed) {
        event.target.checked = true;
        return;
      }
      setLoadingCells((prev) => new Set(prev).add(cellKey));
      try {
        const [_, _2, { data: response }] = await deleteParticipant({
          ParticipantId: participation.ParticipantId,
          id: participation.ParticipantId
        });
        if (response?.Results) {
          participantsList = participantsList.filter((p) => p.ParticipantId !== participation.ParticipantId);
          updateParticipantLocal({
            ...pageDetails,
            ParticipantsList: participantsList
          });
          const participantIdValue = selectedParticipantType == 2 ? participant.Team : participant.Candidate;
          setHighlightedColumnId({
            competitionId: competition.CompetitionStructureId,
            candidateId: participantIdValue
          });
          setTimeout(() => {
            setHighlightedColumnId({ competitionId: null, candidateId: null });
          }, 2e3);
          zt.success("Participation removed successfully");
        } else {
          zt.error("Can't delete this item because it's being used elsewhere");
          event.target.checked = true;
        }
      } catch (error) {
        console.error("Error removing participation:", error);
        zt.error("Failed to remove participation");
        event.target.checked = true;
      } finally {
        setLoadingCells((prev) => {
          const next = new Set(prev);
          next.delete(cellKey);
          return next;
        });
      }
    }
    if (typeof onAssignmentChange === "function") {
      onAssignmentChange(participant, competition, isChecked);
    }
  };
  const [ParticicipantConfirmationBox, showDeleteConfirmation] = useConfirmation();
  const [removalConfirmation, setRemovalConfirmation] = reactExports.useState(null);
  const showRemovalConfirmation = ({ title, message, confirmText, cancelText }) => {
    return new Promise((resolve) => {
      setRemovalConfirmation({
        title,
        message,
        confirmText,
        cancelText,
        onConfirm: () => {
          setRemovalConfirmation(null);
          resolve(true);
        },
        onCancel: () => {
          setRemovalConfirmation(null);
          resolve(false);
        }
      });
    });
  };
  const isLoading = participantsStatus !== "finished";
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading participants...", className: "h-64" });
  }
  if (!selectedGroupFilter || !selectedParticipantType) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "Please select a group and participant type." }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "flex-1 flex overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ParticicipantConfirmationBox,
      {
        title: "Delete Participant",
        description: "Are you sure you want to delete this participant?",
        confirmButtonLabel: "Delete",
        confirmButtonClick: async (item) => {
          try {
            await deleteParticipant(item);
            zt.success("Participant Deleted Successfully");
            if (typeof onDelete === "function") onDelete(item);
          } catch (ex) {
            zt.error("Failed to delete participant");
          }
        },
        className: "w-96  print:hidden"
      }
    ),
    removalConfirmation && /* @__PURE__ */ jsxRuntimeExports.jsxs(ht, { open: true, onClose: removalConfirmation.onCancel, className: "relative z-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lt, { className: "fixed inset-0 bg-gray-500/75 transition-opacity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ze, { className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:flex sm:items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { "aria-hidden": "true", className: "size-6 text-red-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Qe, { as: "h3", className: "text-base font-semibold text-gray-900", children: removalConfirmation.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: removalConfirmation.message }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: removalConfirmation.onConfirm,
              className: "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
              children: removalConfirmation.confirmText
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: removalConfirmation.onCancel,
              className: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
              children: removalConfirmation.cancelText
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        /* Hover effect for columns */
        table:has(th.competition-header:hover) tbody tr td:nth-child(n+5) {
          background-color: transparent;
        }
        ${competitions?.map(
      (comp, index) => `
          table:has(th.competition-header:nth-child(${index + 5}):hover) tbody tr td:nth-child(${index + 5}) {
            background-color: rgb(219 234 254) !important;
          }
        `
    ).join("")}

        /* Active/clicked column highlighting */
        ${activeCompetitionId ? `
          ${competitions?.map(
      (comp, index) => comp.CompetitionStructureId === activeCompetitionId ? `tbody tr td:nth-child(${index + 5}) {
                  background-color: rgb(191 219 254) !important;
                }` : ""
    ).join("")}
        ` : ""}
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col", children: [
      (selectedOrganization || filterCriterias?.candidateName || filterCriterias?.candidateIdentityNumber || filterCriterias?.teamIdentityNumber || filterCriterias?.registrationId) && pageDetails?.TotalRowCount !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-2 mt-2 mb-2 flex items-center justify-between bg-white px-4 py-2 rounded-lg border border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-700", children: [
          "Showing ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: pageDetails.RowFrom || 0 }),
          "-",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: pageDetails.RowTo || 0 }),
          " of",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-darkprimary", children: pageDetails.TotalRowCount }),
          " participants",
          filterCriterias?.candidateName && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-indigo-600 font-medium", children: [
            'matching "',
            filterCriterias.candidateName,
            '"'
          ] })
        ] }),
        onClearFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClearFilters, className: "text-sm text-primary hover:text-primaryHover font-medium transition-all duration-200", children: "Clear filters" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("thead", { className: "bg-gray-50 sticky top-0 z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { rowSpan: filterCriterias?.isIncludeStatusTitle === "Yes" ? 2 : 1, className: "w-8 px-1 py-1 text-left text-xxs font-medium text-gray-500 tracking-wider", children: "Photo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { rowSpan: filterCriterias?.isIncludeStatusTitle === "Yes" ? 2 : 1, className: "w-16 px-1 py-1 text-left text-xxs font-medium text-gray-500 tracking-wider", children: "ID" }),
            eventDetails?.AllowRegistrationId === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("th", { rowSpan: filterCriterias?.isIncludeStatusTitle === "Yes" ? 2 : 1, className: "w-20 px-1 py-1 text-left text-xxs font-medium text-gray-500 tracking-wider", children: "Registration ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { rowSpan: filterCriterias?.isIncludeStatusTitle === "Yes" ? 2 : 1, className: "min-w-16 px-1 py-1 text-left text-xxs font-medium text-gray-500 tracking-wider", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { rowSpan: filterCriterias?.isIncludeStatusTitle === "Yes" ? 2 : 1, className: "w-16 px-1 py-1 text-left text-xxs font-medium text-gray-500 tracking-wider", children: "Actions" }),
            competitions?.map((competition) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "th",
              {
                onClick: () => setActiveCompetitionId(activeCompetitionId === competition.CompetitionStructureId ? null : competition.CompetitionStructureId),
                className: classNames(
                  "competition-header w-20 px-2 py-1 text-center text-xxs font-medium text-gray-800 tracking-wider border-l border-gray-200 align-top transition-colors duration-150 cursor-pointer",
                  activeCompetitionId === competition.CompetitionStructureId ? "bg-blue-200 hover:bg-blue-300" : "bg-gray-200 hover:bg-blue-100"
                ),
                title: `${competition.CompetitionName} - ${competition.GroupName}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: classNames(
                        "text-xxs ",
                        (competition.GenderName != "Both" || competition.LanguageName != "Any/NA") && activeCompetitionId !== competition.CompetitionStructureId ? "border-b-2 border-gray-300" : ""
                      ),
                      children: competition.CompetitionName
                    }
                  ),
                  competition.GenderName != "Both" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: classNames(
                        "text-xxs text-gray-900 mt-0.5 flex items-center gap-1 justify-center align-middle relative pl-4",
                        competition.LanguageName != "Any/NA" && activeCompetitionId !== competition.CompetitionStructureId ? " border-gray-300" : ""
                      ),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        " ",
                        getGenderIcon(competition.GenderName, "text-lg"),
                        competition.GenderName
                      ] })
                    }
                  ),
                  competition.LanguageName != "Any/NA" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xxs text-gray-900 mt-0.5", children: competition.LanguageName })
                ]
              },
              competition.CompetitionStructureId
            ))
          ] }),
          filterCriterias?.isIncludeStatusTitle === "Yes" && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: competitions?.map((competition) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: classNames(
                "w-20 px-2 py-1 text-center text-xxs font-medium text-gray-800 tracking-wider border-l border-t border-gray-300 align-top",
                activeCompetitionId === competition.CompetitionStructureId ? "bg-blue-200" : "bg-gray-200"
              ),
              children: competition.CompetitionStatus && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: getCompetitionStatusBadge(competition.CompetitionStatus, competitionStatuses) })
            },
            `${competition.CompetitionStructureId}-status`
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: filteredParticipants.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { colSpan: (eventDetails?.AllowRegistrationId === 1 ? 5 : 4) + (competitions?.length || 0), className: "px-2 py-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "h-10 w-10 text-gray-300 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-medium text-gray-500", children: "No participants found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Try adjusting your filters" })
        ] }) }) : filteredParticipants.map((participant, index) => {
          const participantId = participant.Candidate || participant.Team;
          const isHighlighted = highlightedRowId === participantId;
          const isExpanded = expandedParticipantId === participantId;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setHighlightedRowId(participantId), className: classNames("hover:bg-blue-100 transition-colors border-t-2 border-gray-300", isHighlighted && "bg-blue-200"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1 align-top", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      setExpandedParticipantId(isExpanded ? null : participantId);
                    },
                    className: "text-gray-500 hover:text-primary transition-colors",
                    title: isExpanded ? "Collapse details" : "Expand details",
                    children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$7, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$8, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 flex-shrink-0", children: participant.UserImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: participant.UserImage, alt: participant.UserName || participant.TeamTeamName, className: "h-8 w-8 rounded-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center", children: participant.TeamTeamName ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-5 w-5 text-gray-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "h-5 w-5 text-gray-500" }) }) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1 align-top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-gray-900", children: participant.CandidateIdentityNumber || participant.TeamIdentityNumber }) }),
              eventDetails?.AllowRegistrationId === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1 align-top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-gray-900", children: participant.RegistrationId || "-" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-2 py-1 align-top", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-medium text-gray-900 flex items-center gap-1", children: [
                  getGenderIcon(participant.UserNameTitle || participant.GenderName, "text-xs"),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: participant.UserName || participant.TeamTeamName })
                ] }),
                participant.LevelSettings && eventLevels?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xxs text-gray-500 mt-1", children: eventLevels.map((level) => {
                  const key = level.LevelName + "Name";
                  const value = participant.LevelSettings?.[key] || participant.LevelSettings?.[level.LevelName] || null;
                  return value ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: value }, level.LevelName) : null;
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1 align-top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: (() => {
                const actionDisabled = advancedSettings?.FreezeParticipation === "Yes";
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ParticipantActionButtons,
                  {
                    onEdit: () => {
                      if (actionDisabled) {
                        zt.error("Modifications are currently disabled");
                        return;
                      }
                      onEdit && onEdit(participant);
                    },
                    isTeam: !!participant.TeamTeamName,
                    onTeamManage: () => {
                      if (actionDisabled) {
                        zt.error("Modifications are currently disabled");
                        return;
                      }
                      onTeamManage && onTeamManage(participant);
                    },
                    onDelete: () => {
                      if (actionDisabled) {
                        zt.error("Modifications are currently disabled");
                        return;
                      }
                      const deleteObject = {
                        UserRoleId: participant.Candidate || participant.Team,
                        id: participant.Candidate || participant.Team,
                        participantType: selectedParticipantType || 1
                      };
                      showDeleteConfirmation(deleteObject);
                    },
                    disabled: actionDisabled
                  }
                );
              })() }) }),
              competitions?.map((competition) => {
                const isHighlightedCell = highlightedColumnId.competitionId === competition.CompetitionStructureId && (highlightedColumnId.candidateId === participant.Candidate && participant.Candidate > 0 || highlightedColumnId.candidateId === participant.Team && participant.Team > 0);
                const isAssigned = isParticipantAssigned(participant, competition.CompetitionStructureId);
                const limitCheck = isParticipationLimitExceeded(participant, competition);
                const isGlobalFreeze = advancedSettings?.FreezeParticipation === "Yes";
                const compStatusObj = competitionStatuses?.find((s) => s.CompetitionStatusId == competition.CompetitionStatus);
                const compStatusTitle = compStatusObj?.CompetitionStatusTitle || "";
                const isCompAvailable = compStatusTitle === "Not Started";
                const isDisabled = isGlobalFreeze || !isCompAvailable || !isAssigned && limitCheck.exceeded;
                const participantIdForCell = selectedParticipantType == 2 ? participant.Team : participant.Candidate;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "td",
                  {
                    onClick: (e) => {
                      const cellKey = `${participantIdForCell}-${competition.CompetitionStructureId}`;
                      const isLoading2 = loadingCells.has(cellKey);
                      if (isLoading2) {
                        zt.success("Operation in progress, please wait...");
                        return;
                      }
                      if (isGlobalFreeze || !isCompAvailable) {
                        zt.error("Modifications are currently disabled for this competition as its status is not 'Not Started'");
                        return;
                      }
                      if (!isAssigned && limitCheck.exceeded) {
                        if (limitCheck.type === "gender") {
                          zt.error(`Its a gender restricted competition`);
                        } else if (limitCheck.type === "candidate") {
                          zt.error(`Maximum participation limit reached: ${limitCheck.current}/${limitCheck.limit} competitions per participant`);
                        } else if (limitCheck.type === "group") {
                          zt.error(`Maximum participation limit reached for group "${limitCheck.groupName}": ${limitCheck.current}/${limitCheck.limit} competitions`);
                        }
                        return;
                      }
                      const mockEvent = {
                        target: {
                          checked: !isAssigned
                        }
                      };
                      handleAssignmentToggle(participant, competition, mockEvent);
                    },
                    className: classNames(
                      "px-0.5 py-0.5 text-center border-l border-gray-200 align-top transition-all duration-200",
                      loadingCells.has(`${participantIdForCell}-${competition.CompetitionStructureId}`) ? "cursor-wait" : isDisabled ? "cursor-not-allowed bg-gray-100 text-gray-400 opacity-80" : "cursor-pointer hover:bg-blue-50 hover:shadow-sm",
                      isHighlightedCell && "bg-green-100 animate-pulse"
                    ),
                    title: isDisabled ? isGlobalFreeze ? "Participation is globally frozen" : !isCompAvailable ? `Competition is not editable (Status: ${compStatusTitle})` : limitCheck.type === "gender" ? "Gender restricted competition" : limitCheck.type === "candidate" ? `Maximum participation limit reached: ${limitCheck.current}/${limitCheck.limit} competitions per participant` : limitCheck.type === "group" ? `Maximum participation limit reached for group "${limitCheck.groupName}": ${limitCheck.current}/${limitCheck.limit} competitions` : "Participation not allowed" : void 0,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "select-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 flex justify-center group", children: (() => {
                        const cellKey = `${participantIdForCell}-${competition.CompetitionStructureId}`;
                        const isLoading2 = loadingCells.has(cellKey);
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: classNames(
                              "w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 border-2",
                              isLoading2 ? "bg-yellow-100 border-yellow-400" : isAssigned ? "bg-green-500 border-green-500 group-hover:bg-green-600 group-hover:border-green-600 group-hover:shadow-md" : isDisabled ? "bg-gray-300 border-gray-400 opacity-60 cursor-not-allowed" : "bg-white border-gray-300 group-hover:border-gray-400 group-hover:bg-gray-50 group-hover:shadow-sm"
                            ),
                            children: isLoading2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$9, { className: "w-3 h-3 text-yellow-600 animate-spin" }) : isAssigned ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$a, { className: "w-3 h-3 text-white" }) : null
                          }
                        );
                      })() }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xxxs font-medium text-gray-900", title: competition.CompetitionName || (competition.CompetitionName === void 0 ? "" : void 0), children: [
                        competition.CompetitionName || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300", children: "-" }),
                        competition.GenderName != "Both" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          " ",
                          competition.GenderName,
                          " "
                        ] }),
                        competition.LanguageName != "Any/NA" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          " ",
                          competition.LanguageName,
                          " "
                        ] })
                      ] })
                    ] })
                  },
                  competition.CompetitionStructureId
                );
              })
            ] }),
            isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: (eventDetails?.AllowRegistrationId === 1 ? 5 : 4) + (competitions?.length || 0), className: "p-0 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ParticipantHoverDetail, { eventLevels, participant, isTeam: !!participant.TeamTeamName, eventDetails }) }) }, `${participantId}-detail`)
          ] }, participantId || index);
        }) })
      ] }) }),
      filteredParticipants.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, { rowsFrom: pageDetails?.RowFrom, rowsTo: pageDetails?.RowTo, totalRowCount: pageDetails?.TotalRowCount, setOffsetAndLimit, isCompact: true })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: resizerRef, className: `w-1 cursor-col-resize transition-colors ${isResizing ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"}`, onMouseDown: handleMouseDown, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 h-8 bg-white opacity-60 rounded-full" }) }) })
  ] });
};
export {
  ParticipantManagementLayout as default,
  getCompetitionStatusBadge
};
