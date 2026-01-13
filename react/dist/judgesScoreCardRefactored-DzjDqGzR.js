import { r as reactExports, j as jsxRuntimeExports, i as classNames, z as zt, b as getUserData, u as useBackend } from "./main-B7w5eCOl.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { F as ForwardRef$3 } from "./ClipboardDocumentListIcon-D2bvKHu6.js";
import { F as ForwardRef$4 } from "./CheckCircleIcon-B36U4EaE.js";
import { F as ForwardRef$5 } from "./CheckCircleIcon-BMZ-5cUh.js";
import { F as ForwardRef$6 } from "./StarIcon-Cu8oGMVF.js";
import { F as ForwardRef$7 } from "./TrashIcon-DMovC4zz.js";
import { F as ForwardRef$8 } from "./TrophyIcon-DZ81VYDV.js";
function StarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
}
const ForwardRef$2 = /* @__PURE__ */ reactExports.forwardRef(StarIcon);
function UserIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(UserIcon);
function ArrowPathIcon({
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
    fillRule: "evenodd",
    d: "M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(ArrowPathIcon);
const CompetitionsList = ({
  competitions,
  processedCompetitions,
  competitionsStatus,
  selectedCompetition,
  onCompetitionSelect,
  getCompetitionStatusPriority,
  selectedGroupFilter,
  setSelectedGroupFilter
}) => {
  const [filteredCompetitions, setFilteredCompetitions] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let filtered = processedCompetitions;
    if (selectedGroupFilter !== "all") {
      filtered = filtered.filter((comp) => comp.competitionGroupName === selectedGroupFilter);
    }
    setFilteredCompetitions(filtered);
  }, [processedCompetitions, selectedGroupFilter]);
  const formatCompetitionTitle = (comp) => {
    const order = comp.competitionOrder + " -" || "";
    const group = comp.competitionGroupName || "";
    const itemTitle = comp.competitionItemTitle || "";
    const gender = comp.competitionGenderTitle || "";
    const language = comp.competitionLanguageName || "";
    const status = comp.statusTitle || "";
    const isGenderMixed = comp.competitionGender === 3;
    const isLanguageAll = comp.competitionLanguage === 4;
    let titleParts = [];
    if (order) titleParts.push(order);
    if (group) titleParts.push(group);
    if (itemTitle) titleParts.push(itemTitle);
    if (!isGenderMixed && !isLanguageAll) {
      if (gender) titleParts.push(gender);
      if (language) titleParts.push(language);
    } else if (isGenderMixed && !isLanguageAll) {
      if (language) titleParts.push(language);
    } else if (!isGenderMixed && isLanguageAll) {
      if (gender) titleParts.push(gender);
    }
    if (status) titleParts.push(`- ${status}`);
    return titleParts.join(" ").trim() || `Competition ${comp.competitionId}`;
  };
  const getGroupPriority = (aggregatedStatus) => {
    switch (aggregatedStatus) {
      case "Filling in Progress":
        return 1;
      // Highest priority
      case "Allowed to Fill":
        return 2;
      // Second priority  
      case "Filled":
        return 3;
      // Third priority
      case "Published":
        return 4;
      // Lowest priority
      case "No Judges Assigned":
        return 5;
      // Last
      default:
        return 6;
    }
  };
  const formatOptgroupLabel = (comp) => {
    const group = comp.competitionGroupName || "";
    let aggregatedStatus = "";
    if (comp.judges && comp.judges.length > 0) {
      const filledJudges = comp.judges.filter((judge) => judge.scoreStatus === 1 || judge.scoreStatus === "1").length;
      const publishedJudges = comp.judges.filter((judge) => judge.scoreStatus === 2 || judge.scoreStatus === "2").length;
      const allowedToFillJudges = comp.judges.filter((judge) => !judge.scoreStatus || judge.scoreStatus === 0 || judge.scoreStatus === "0" || judge.scoreStatus === 3 || judge.scoreStatus === "3").length;
      const totalJudges = comp.judges.length;
      if (allowedToFillJudges > 0 && allowedToFillJudges !== totalJudges) {
        aggregatedStatus = "Filling in Progress";
      } else if (allowedToFillJudges === totalJudges) {
        aggregatedStatus = "Allowed to Fill";
      } else if (filledJudges + publishedJudges === totalJudges) {
        aggregatedStatus = "Filled";
      } else if (publishedJudges === totalJudges) {
        aggregatedStatus = "Published";
      }
    }
    comp._groupPriority = getGroupPriority(aggregatedStatus);
    if (group && aggregatedStatus) {
      return `${group} - ${aggregatedStatus}`;
    }
    if (group) return group;
    if (aggregatedStatus) return aggregatedStatus;
    return "General";
  };
  const getStatusColor = (comp) => {
    if (comp.inProgressJudges > 0) return "bg-blue-50 border-blue-200 text-blue-700";
    if (comp.finishedJudges === comp.totalJudges && comp.competitionStatus !== 4) return "bg-green-50 border-green-200 text-green-700";
    if (comp.competitionStatus === 4) return "bg-purple-50 border-purple-200 text-purple-700";
    return "bg-surface border-border text-onSurfaceVariant";
  };
  if (competitionsStatus === "loading") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "Loading competitions..." })
    ] }) });
  }
  if (processedCompetitions.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-12 w-12 text-onSurfaceVariant mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-onSurface mb-2", children: "No Competitions Available" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "No competitions have been assigned yet." })
    ] });
  }
  if (filteredCompetitions.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "border-b-2 border-b-[#485257] text-[#206689] items-center mb-4 font-medium pb-1 px-1 w-full uppercase text-lg", children: "Competition & Judge Selection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-12 w-12 text-onSurfaceVariant mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-onSurface mb-2", children: "No Competitions Found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "No competitions match the selected group filter. Try adjusting your filter settings." })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block lg:hidden ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        value: selectedCompetition,
        onChange: (e) => onCompetitionSelect(e.target.value),
        className: "block w-full rounded-md border-0 py-2 pl-3 pr-10 text-onSurface ring-1 ring-inset ring-border focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm sm:leading-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: selectedGroupFilter === "all" ? "Choose Competition..." : `Choose Competition from ${selectedGroupFilter}...` }),
          (() => {
            const grouped = filteredCompetitions.reduce((acc, comp) => {
              const groupLabel = formatOptgroupLabel(comp);
              if (!acc[groupLabel]) acc[groupLabel] = [];
              acc[groupLabel].push(comp);
              return acc;
            }, {});
            return Object.entries(grouped).sort(([, competitionsA], [, competitionsB]) => {
              const priorityA = competitionsA[0]?._groupPriority || 999;
              const priorityB = competitionsB[0]?._groupPriority || 999;
              return priorityA - priorityB;
            }).map(([groupLabel, competitions2]) => /* @__PURE__ */ jsxRuntimeExports.jsx("optgroup", { label: groupLabel, children: competitions2.map((comp) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "option",
                {
                  value: comp.competitionId,
                  "data-competition-status": comp.competitionStatus,
                  "data-allotment-id": comp.allotementId,
                  children: [
                    formatCompetitionTitle(comp),
                    " (",
                    comp.totalJudges,
                    " judges)"
                  ]
                },
                comp.competitionId
              );
            }) }, groupLabel));
          })()
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-surface hover:scrollbar-thumb-onSurfaceVariant", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full pr-2", children: (() => {
      const grouped = filteredCompetitions.reduce((acc, comp) => {
        const groupLabel = formatOptgroupLabel(comp);
        if (!acc[groupLabel]) acc[groupLabel] = [];
        acc[groupLabel].push(comp);
        return acc;
      }, {});
      return Object.entries(grouped).sort(([, competitionsA], [, competitionsB]) => {
        const priorityA = competitionsA[0]?._groupPriority || 999;
        const priorityB = competitionsB[0]?._groupPriority || 999;
        return priorityA - priorityB;
      }).map(([groupLabel, competitions2]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold bg-surfaceCard text-onSurfaceVariant uppercase tracking-wide mb-2 px-2 sticky top-0  py-1 z-10", children: groupLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: competitions2.map((comp) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => onCompetitionSelect(comp.competitionId),
              className: `w-full text-left py-3 px-3 rounded-lg border transition-colors ${selectedCompetition === comp.competitionId ? "bg-surface text-primary border-primary" : getStatusColor(comp)}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-medium mr-1 text-xs break-words ${selectedCompetition === comp.competitionId ? "text-primary" : "text-onSurface"}`, title: formatCompetitionTitle(comp), children: formatCompetitionTitle(comp) }) }),
                  comp.competitionCode && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mb-3 ${selectedCompetition === comp.competitionId ? "text-onSurface" : "text-onSurface"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs break-words", title: `Code: ${comp.competitionCode}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Code:" }),
                    " ",
                    comp.competitionCode
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs space-y-1", children: [
                  comp.finishedJudges > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center space-x-1 ${selectedCompetition === comp.competitionId ? "text-green-800" : "text-green-800"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-5 w-5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: comp.finishedJudges })
                  ] }),
                  comp.inProgressJudges > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center space-x-1 ${selectedCompetition === comp.competitionId ? "text-blue-800" : "text-blue-800"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: comp.inProgressJudges })
                  ] }),
                  comp.notStartedJudges > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center space-x-1 ${selectedCompetition === comp.competitionId ? "text-onSurfaceVariant" : "text-onSurfaceVariant"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-5 w-5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: comp.notStartedJudges })
                  ] })
                ] }) })
              ] })
            },
            comp.competitionId
          );
        }) })
      ] }, groupLabel));
    })() }) }) })
  ] });
};
const JudgesList = ({ processedCompetitions, selectedCompetition, selectedJudges, onJudgeSelect }) => {
  const [isWideScreen, setIsWideScreen] = reactExports.useState(false);
  const [localSelectedJudges, setLocalSelectedJudges] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth > 1200);
    };
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);
  reactExports.useEffect(() => {
    if (selectedJudges && selectedJudges.length > 0) {
      setLocalSelectedJudges(selectedJudges);
    }
  }, [selectedJudges]);
  const getJudgeStatusColor = (judge) => {
    if (judge.scoreStatus === 1 || judge.scoreStatus === "1") return "bg-green-50 border-green-200 text-green-700";
    if (judge.scoreStatus === 2 || judge.scoreStatus === "2") return "bg-blue-50 border-blue-200 text-blue-700";
    return "bg-surface border-border text-onSurfaceVariant";
  };
  const getJudgeStatusText = (judge) => {
    if (judge.scoreStatus === 1 || judge.scoreStatus === "1") return "Filled";
    if (judge.scoreStatus === 2 || judge.scoreStatus === "2") return "Published";
    return "Allowed To Fill";
  };
  const handleJudgeToggle = (judgeId) => {
    if (isWideScreen) {
      const updatedJudges = localSelectedJudges.includes(judgeId) ? localSelectedJudges.filter((id) => id !== judgeId) : [...localSelectedJudges, judgeId];
      setLocalSelectedJudges(updatedJudges);
      onJudgeSelect(updatedJudges);
    } else {
      const updatedJudges = [judgeId];
      setLocalSelectedJudges(updatedJudges);
      onJudgeSelect(updatedJudges);
    }
  };
  const isJudgeSelected = (judgeId) => {
    return localSelectedJudges.includes(judgeId.toString());
  };
  if (!selectedCompetition) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-12 w-12 text-onSurfaceVariant mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-onSurface mb-2", children: "Select a Competition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "Choose a competition to see available judges." })
    ] });
  }
  const selectedCompetitionData = processedCompetitions.find((c) => c.competitionId == selectedCompetition);
  const judges = selectedCompetitionData?.judges || [];
  if (judges.length === 0 && selectedCompetition) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-12 w-12 text-onSurfaceVariant mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-onSurface mb-2", children: "No Judges Available" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "No judges found for this competition." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: selectedCompetition && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row gap-2 flex-wrap", children: judges.map((judge) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "label",
    {
      className: `group relative flex rounded-lg border p-2 sm:p-3 min-w-24 sm:min-w-28 flex-1 sm:flex-none cursor-pointer transition-colors ${isJudgeSelected(judge.judgeId) ? "border-primary bg-primary text-white shadow-sm" : `${getJudgeStatusColor(judge)} hover:border-primary hover:shadow-sm bg-surfaceCard`}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: isWideScreen ? "checkbox" : "radio",
            name: isWideScreen ? `judge-${judge.judgeId}` : "judge",
            value: judge.judgeId,
            checked: isJudgeSelected(judge.judgeId),
            onChange: () => handleJudgeToggle(judge.judgeId.toString()),
            className: "absolute inset-0 appearance-none focus:outline-none border-transparent outline-0 invisible"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block text-xs sm:text-sm font-semibold ${isJudgeSelected(judge.judgeId) ? "text-white" : "text-onSurface"}`, children: judge.judgeName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block text-[10px] mt-0.5 sm:mt-1 ${isJudgeSelected(judge.judgeId) ? "text-blue-100" : "text-onSurfaceVariant"}`, children: getJudgeStatusText(judge) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1 right-1 sm:bottom-2 sm:right-2", children: (judge.scoreStatus === 1 || judge.scoreStatus === "1" || judge.scoreStatus === 2 || judge.scoreStatus === "2") && /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: `h-3 w-3 sm:h-4 sm:w-4 ${isJudgeSelected(judge.judgeId) ? "text-green-200" : "text-green-500"}` }) })
      ]
    },
    judge.judgeId
  )) }) }) }) });
};
const ParticipantsList = ({
  participants,
  participantsStatus,
  activeParticipantId,
  currentParticipantIndex,
  participantScores,
  onParticipantSelect,
  onNavigateParticipant,
  judgeId,
  showJudgeSpecificScores = false
}) => {
  const getParticipantScore = (participantId) => {
    if (showJudgeSpecificScores && judgeId) {
      const judgeSpecificKey = `judge_${judgeId}_${participantId}`;
      return participantScores[judgeSpecificKey] || participantScores[participantId] || "-";
    }
    return participantScores[participantId] || "-";
  };
  if (participantsStatus === "loading") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard rounded-lg shadow-sm p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-onSurfaceVariant py-4", children: "Loading participants..." }) });
  }
  if (!participants || participants.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard rounded-lg shadow-sm p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-onSurfaceVariant py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-12 w-12 text-onSurfaceVariant mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No participants found" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard rounded-lg shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[calc(100vh-200px)] overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: participants.map((participant, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => onParticipantSelect(participant.ParticipantId, index),
      className: classNames(
        "w-full text-left p-3 rounded-md transition-colors",
        participant.ParticipantId === activeParticipantId ? "bg-primary text-white" : "hover:bg-surface bg-surfaceCard border border-border"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("text-sm font-medium", participant.ParticipantId === activeParticipantId ? "text-white" : "text-onSurface"), children: participant.IdentityNumber ? participant.IdentityNumber : participant.CandidateIdentityNumber || participant.ParticipantNumber }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("text-sm font-medium", participant.ParticipantId === activeParticipantId ? "text-green-200" : "text-primary"), children: getParticipantScore(participant.ParticipantId) })
      ] })
    },
    participant.ParticipantId
  )) }) }) }) });
};
const StarRating = ({ value, onChange, maxStars = 10, criteriaId, participantId, disabled = false }) => {
  const [hoverValue, setHoverValue] = reactExports.useState(0);
  const handleStarClick = (starValue) => {
    if (disabled) return;
    onChange(starValue, criteriaId, participantId);
  };
  const handleStarHover = (starValue) => {
    if (disabled) return;
    setHoverValue(starValue);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-1 mb-2 w-full", children: [...Array(maxStars)].map((_, index) => {
    const starValue = index + 1;
    const isActive = starValue <= (hoverValue || value || 0);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        disabled,
        className: classNames(
          "flex-1 flex items-center justify-center p-1 transition-colors duration-150 max-w-8 max-h-8 aspect-square",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
          isActive ? "text-yellow-400" : "text-onSurfaceVariant hover:text-yellow-200"
        ),
        onMouseEnter: () => handleStarHover(starValue),
        onMouseLeave: () => setHoverValue(0),
        onClick: () => handleStarClick(starValue),
        children: isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "w-full h-full min-w-4 min-h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "w-full h-full min-w-4 min-h-4" })
      },
      index
    );
  }) }) });
};
const MarksInput = ({ value, onChange, maxMarks = 100, minMarks = 0, criteriaId, participantId, disabled = false, placeholder = "Enter marks" }) => {
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    const numValue = parseFloat(newValue);
    if (!isNaN(numValue) && numValue >= minMarks && numValue <= maxMarks) {
      onChange(numValue, criteriaId, participantId);
    } else if (newValue === "") {
      onChange(0, criteriaId, participantId);
    }
  };
  const handleBlur = () => {
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < minMarks) {
      onChange(minMarks, criteriaId, participantId);
    } else if (numValue > maxMarks) {
      onChange(maxMarks, criteriaId, participantId);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "number",
      min: minMarks,
      max: maxMarks,
      step: "0.1",
      value: value || "",
      onChange: handleInputChange,
      onBlur: handleBlur,
      disabled,
      placeholder,
      className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border disabled:bg-surface disabled:cursor-not-allowed"
    }
  ) }) });
};
const CountInput = ({ value, onChange, maxCount = 10, minCount = 0, criteriaId, participantId, disabled = false, label = "Count" }) => {
  const handleIncrement = () => {
    if (disabled || (value || 0) >= maxCount) return;
    const newValue = (value || 0) + 1;
    onChange(newValue, criteriaId, participantId);
  };
  const handleDecrement = () => {
    if (disabled || (value || 0) <= minCount) return;
    const newValue = Math.max(minCount, (value || 0) - 1);
    onChange(newValue, criteriaId, participantId);
  };
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= minCount && newValue <= maxCount) {
      onChange(newValue, criteriaId, participantId);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: handleDecrement,
        disabled: disabled || (value || 0) <= minCount,
        className: "inline-flex items-center justify-center w-8 h-8 rounded-md bg-surface hover:bg-border disabled:opacity-50 disabled:cursor-not-allowed text-onSurfaceVariant",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-medium", children: "−" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 max-w-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "number",
        step: "0.1",
        min: minCount,
        max: maxCount,
        value: value || 0,
        onChange: handleInputChange,
        disabled,
        className: "text-center pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border disabled:bg-surface disabled:cursor-not-allowed"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: handleIncrement,
        disabled: disabled || (value || 0) >= maxCount,
        className: "inline-flex items-center justify-center w-8 h-8 rounded-md bg-surface hover:bg-border disabled:opacity-50 disabled:cursor-not-allowed text-onSurfaceVariant",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-medium", children: "+" })
      }
    )
  ] });
};
const ScoringBox = ({
  activeParticipantId,
  participants,
  competitionDetails,
  criteriaScores,
  participantScores,
  participantNotes,
  onScoreChange,
  onNotesChange,
  onSaveScore,
  onDeleteScore,
  selectedCompetition,
  processedCompetitions,
  selectedJudges,
  currentJudgeId
}) => {
  const [isSaving, setIsSaving] = reactExports.useState(false);
  const [localScores, setLocalScores] = reactExports.useState({});
  const [localNotes, setLocalNotes] = reactExports.useState("");
  const [totalScore, setTotalScore] = reactExports.useState(0);
  const activeParticipant = participants?.find((p) => p.ParticipantId === activeParticipantId);
  const currentCompetition = processedCompetitions?.find((comp) => comp.competitionId == selectedCompetition);
  const getCurrentJudgeName = () => {
    if (!currentJudgeId || !currentCompetition || !currentCompetition.judges) return "";
    const judge = currentCompetition.judges.find((j) => j.judgeId.toString() === currentJudgeId.toString());
    return judge ? judge.judgeName : `Judge ${currentJudgeId}`;
  };
  const getJudgeSpecificKey = (baseKey, judgeId = currentJudgeId) => {
    return selectedJudges.length > 1 ? `${baseKey}_judge_${judgeId}` : baseKey;
  };
  const checkValueBasedScoring = () => {
    if (!competitionDetails || competitionDetails.length === 0) return false;
    let isAllValuesAreEqualToCompetitionMaximumScore = competitionDetails.every((criteria) => criteria.Value && criteria.Value != 0 && criteria.Value == currentCompetition.competitionMaximumScore);
    if (isAllValuesAreEqualToCompetitionMaximumScore) return false;
    return competitionDetails.every((criteria) => criteria.Value && criteria.Value != 0);
  };
  const calculateTotalFromCriteria = (scores = localScores) => {
    if (!competitionDetails || competitionDetails.length === 0) return totalScore;
    let calculatedTotal = 0;
    const hasValueBasedScoring = checkValueBasedScoring();
    competitionDetails.forEach((criteria) => {
      const criteriaId = criteria.DetailId || criteria.CompetitionDetailsId;
      const score = scores[criteriaId] || 0;
      calculatedTotal += score;
    });
    return hasValueBasedScoring ? calculatedTotal : calculatedTotal / competitionDetails.length;
  };
  const distributeTotalToCriteria = (newTotalScore) => {
    setTotalScore(newTotalScore);
    if (!competitionDetails || competitionDetails.length === 0) return;
    const newScores = { ...localScores };
    const hasValueBasedScoring = checkValueBasedScoring();
    if (hasValueBasedScoring) {
      const totalValue = competitionDetails.reduce((sum, criteria) => {
        return sum + (criteria.Value || 0);
      }, 0);
      competitionDetails.forEach((criteria) => {
        const criteriaId = criteria.DetailId || criteria.CompetitionDetailsId;
        const criteriaValue = criteria.Value || 0;
        const proportionalScore = totalValue > 0 ? newTotalScore * criteriaValue / totalValue : 0;
        const maxAllowed = criteria.Value || 10;
        newScores[criteriaId] = Math.min(proportionalScore, maxAllowed);
      });
    } else {
      competitionDetails.forEach((criteria) => {
        const criteriaId = criteria.DetailId || criteria.CompetitionDetailsId;
        const maxAllowed = criteria.Value || 10;
        newScores[criteriaId] = Math.min(newTotalScore, maxAllowed);
      });
    }
    setLocalScores(newScores);
  };
  reactExports.useEffect(() => {
    if (activeParticipantId && currentJudgeId) {
      const newLocalScores = {};
      const judgeSpecificScoreKey = getJudgeSpecificKey(activeParticipantId);
      const existingTotalScore = participantScores[judgeSpecificScoreKey] || 0;
      setTotalScore(existingTotalScore);
      if (competitionDetails && competitionDetails.length > 0) {
        competitionDetails.forEach((criteria) => {
          const criteriaId = criteria.DetailId || criteria.CompetitionDetailsId;
          const scoreKey = getJudgeSpecificKey(`${criteriaId}_${activeParticipantId}`);
          newLocalScores[criteriaId] = criteriaScores[scoreKey] || 0;
        });
        const hasCriteriaScores = Object.values(newLocalScores).some((score) => score > 0);
        if (!hasCriteriaScores && existingTotalScore > 0) {
          const calculatedTotal = calculateTotalFromCriteria(newLocalScores);
          if (calculatedTotal !== existingTotalScore) {
            distributeTotalToCriteria(existingTotalScore);
            return;
          }
        }
      }
      setLocalScores(newLocalScores);
      const judgeSpecificNotesKey = getJudgeSpecificKey(activeParticipantId);
      setLocalNotes(participantNotes[judgeSpecificNotesKey] || "");
    }
  }, [activeParticipantId, participantScores, criteriaScores, participantNotes, competitionDetails, currentJudgeId]);
  if (!activeParticipant) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard rounded-lg shadow-sm p-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant text-sm", children: "Select a participant to begin scoring" }) });
  }
  const handleSave = async () => {
    setIsSaving(true);
    try {
      const saveData = {
        ...activeParticipant,
        judgeId: currentJudgeId,
        totalScore,
        criteriaScores: localScores,
        notes: localNotes
      };
      await onSaveScore(activeParticipantId, null, totalScore, currentJudgeId);
      if (competitionDetails && competitionDetails.length > 0) {
        for (const criteria of competitionDetails) {
          const criteriaId = criteria.DetailId || criteria.CompetitionDetailsId;
          const score = localScores[criteriaId] || 0;
          onScoreChange(score, criteriaId, activeParticipantId, currentJudgeId);
          await onSaveScore(activeParticipantId, criteriaId, score, currentJudgeId);
        }
      }
      onNotesChange(activeParticipantId, localNotes, currentJudgeId);
      zt.success(`Score saved successfully for ${getCurrentJudgeName()}!`);
    } catch (error) {
      console.error("Error saving scores:", error);
      zt.error("Failed to save score. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete the score for this participant from ${getCurrentJudgeName()}?`)) {
      setIsSaving(true);
      try {
        await onDeleteScore(activeParticipantId, null, currentJudgeId);
        if (competitionDetails && competitionDetails.length > 0) {
          for (const criteria of competitionDetails) {
            const criteriaId = criteria.DetailId || criteria.CompetitionDetailsId;
            await onDeleteScore(activeParticipantId, criteriaId, currentJudgeId);
          }
        }
        setTotalScore(0);
        setLocalScores({});
        setLocalNotes("");
        zt.success(`Score deleted successfully for ${getCurrentJudgeName()}!`);
      } catch (error) {
        console.error("Error deleting scores:", error);
        zt.error("Failed to delete score. Please try again.");
      } finally {
        setIsSaving(false);
      }
    }
  };
  const getTotalMaxScore = () => {
    return currentCompetition?.competitionMaximumScore || 10;
  };
  const getInputType = () => {
    const scoreLabel = currentCompetition?.scoreLabel;
    switch (scoreLabel) {
      case 1:
        return "marks";
      case 2:
        return "count";
      case 3:
      // Rating out of 10
      case 4:
        return "star";
      default:
        return "marks";
    }
  };
  const getCompetitionInputType = () => {
    return getInputType();
  };
  const getTotalScoreInputComponent = () => {
    const totalMaxScore = getTotalMaxScore();
    const inputType = getCompetitionInputType();
    const commonProps = {
      value: totalScore,
      onChange: (score) => distributeTotalToCriteria(score),
      disabled: isSaving,
      criteriaId: "total",
      participantId: activeParticipantId
    };
    if (inputType === "count") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CountInput, { ...commonProps, maxCount: totalMaxScore, label: "Total Count" });
    } else if (inputType === "marks") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(MarksInput, { ...commonProps, maxMarks: totalMaxScore, placeholder: "Enter total score" });
    } else {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { ...commonProps, maxStars: Math.min(totalMaxScore, 10), maxScore: totalMaxScore });
    }
  };
  const getScoringInputComponent = (criteria, scoreKey) => {
    const criteriaId = criteria.DetailId || criteria.CompetitionDetailsId;
    const currentScore = localScores[criteriaId] || 0;
    const maxScore = criteria.Value || 10;
    const inputType = getCompetitionInputType();
    const handleLocalScoreChange = (score, criteriaId2, participantId) => {
      const newScores = { ...localScores, [criteriaId2]: score };
      setLocalScores(newScores);
      const newTotal = calculateTotalFromCriteria(newScores);
      setTotalScore(newTotal);
    };
    if (inputType === "count") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CountInput, { value: currentScore, onChange: handleLocalScoreChange, maxCount: maxScore, criteriaId, participantId: activeParticipantId, disabled: isSaving });
    } else if (inputType === "star") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: currentScore, onChange: handleLocalScoreChange, maxStars: 10, maxScore, criteriaId, participantId: activeParticipantId, disabled: isSaving });
    } else {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(MarksInput, { value: currentScore, onChange: handleLocalScoreChange, maxMarks: maxScore, criteriaId, participantId: activeParticipantId, disabled: isSaving });
    }
  };
  const hasDetailedCriteria = competitionDetails && competitionDetails.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-md font-medium text-onSurface", children: activeParticipant.CandidateName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-onSurfaceVariant mt-1", children: [
        "ID: #",
        activeParticipant.CandidateIdentityNumber || activeParticipant.TeamIdentityNumber
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b-[#4852573e] text-[#206689] mb-4 items-center font-medium pb-1 px-1 w-full uppercase border-b text-sm", children: "Enter Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-onSurface text-sm mb-1", children: "Total Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-onSurfaceVariant", children: hasDetailedCriteria ? "Enter total score (will auto-distribute to criteria below)" : "Enter the participant's total score" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: getTotalScoreInputComponent() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-primary", children: [
            totalScore.toFixed(1),
            " / ",
            getTotalMaxScore()
          ] }) })
        ] })
      ] }),
      hasDetailedCriteria && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b-[#4852573e] text-[#206689] mb-4 items-center font-medium pb-1 px-1 w-full uppercase border-b text-sm", children: "Detailed Criteria Scoring (Optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border rounded-lg p-4 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: competitionDetails.map((criteria, index) => {
          `${criteria.DetailId || criteria.CompetitionDetailsId}_${activeParticipantId}`;
          const criteriaId = criteria.DetailId || criteria.CompetitionDetailsId;
          const currentScore = localScores[criteriaId] || 0;
          const inputType = getCompetitionInputType();
          const showScoreDisplay = inputType === "star";
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: index > 0 ? "border-t border-border pt-4" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-onSurface text-sm", children: criteria.CriteriaName || criteria.CompetitionDetailsTitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-onSurfaceVariant mt-1", children: [
                "Max: ",
                criteria.Value || 10,
                " points"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: getScoringInputComponent(criteria) }),
              showScoreDisplay && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-primary", children: [
                currentScore.toFixed(1),
                " / ",
                criteria.Value || 10
              ] }) })
            ] })
          ] }) }, criteria.DetailId || criteria.CompetitionDetailsId);
        }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold leading-6 text-onSurface mb-2", children: "Additional Notes (Optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: localNotes,
            onChange: (e) => setLocalNotes(e.target.value),
            disabled: isSaving,
            placeholder: "Add any additional comments or notes about this participant's performance...",
            rows: 3,
            className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border disabled:bg-surface"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleDelete,
            disabled: isSaving,
            className: "inline-flex items-center gap-x-2 rounded-md bg-surface px-4 py-2 text-sm font-semibold text-onSurfaceVariant shadow-sm hover:bg-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$7, { className: "-mr-0.5 h-5 w-5" }),
              "Delete Score"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleSave,
            disabled: isSaving || totalScore === 0,
            className: classNames(
              "inline-flex items-center gap-x-2 rounded-md px-6 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              isSaving || totalScore === 0 ? "bg-surface text-onSurfaceVariant cursor-not-allowed" : "bg-primary text-white hover:bg-primaryHover"
            ),
            children: isSaving ? "Saving..." : "Save Score"
          }
        )
      ] })
    ] })
  ] });
};
const JudgesScoreCard = ({ user: propUser }) => {
  const { user, token } = getUserData() || {};
  const [selectedJudges, setSelectedJudges] = reactExports.useState([]);
  const [selectedCompetition, setSelectedCompetition] = reactExports.useState("");
  const [activeParticipantId, setActiveParticipantId] = reactExports.useState(null);
  const [currentParticipantIndex, setCurrentParticipantIndex] = reactExports.useState(0);
  const [isFinishing, setIsFinishing] = reactExports.useState(false);
  const [processedCompetitions, setProcessedCompetitions] = reactExports.useState([]);
  const [selectedGroupFilter, setSelectedGroupFilter] = reactExports.useState("all");
  const [criteriaScores, setCriteriaScores] = reactExports.useState({});
  const [participantScores, setParticipantScores] = reactExports.useState({});
  const [participantNotes, setParticipantNotes] = reactExports.useState({});
  const {
    rows: competitions,
    status: competitionsStatus,
    update: updateCompetition
  } = useBackend(`/JudgesAllotmentWithScoreLabelJson/Get`, {
    select: "AllotementId,Competition,CompetitionParticipantType,CompetitionParticipantTypeTitle,CompetitionGroup,CompetitionGroupGroupName,CompetitionCompetitionItem,CompetitionItemTitle,CompetitionItemScoreLabel,ScoreLabelLabel,CompetitionLanguage,CompetitionLanguageLanguageName,CompetitionGender,CompetitionGenderGenderTitle,CompetitionCompetitionStatus,CompetitionCompetitionStatusCompetitionStatusTitle,CompetitionEventEventName,CompetitionOrder,CompetitionMaximumScore,CompetitionFees,CompetitionMaximumMinutes,CompetitionMaximumSeconds,CompetitionMinimumMinutes,CompetitionMinimumSeconds,CompetitionWarningMinute,CompetitionWarningSecond,ScoreStatus,ScoreStatusScoreResultStatus,Phase,PhaseTitle,Stage,StageTitle,Judge,Visibility,Status,EventEventName,Order,ModifiedDateString,CompetitionStatusTitle",
    filter: {
      NoGrouping: true,
      CreatedBy: user?.UId,
      // Only competitions created by the logged-in user
      Status: "1",
      // Active competitions
      Event: user?.Event
      // Keep event filter but remove EventCategory to see all judges
    },
    sort: {
      sortColumn: "CompetitionOrder"
    },
    updateUrl: "/JudgesAllotmentJson/SaveJudgeStatus"
  });
  const { rows: judgeUsers } = useBackend(`/UsersRolesJson/Get`, {
    select: "UId,UserRoleId,UserName,Name,Role,Status",
    filter: {
      Role: "6",
      // Judge role
      Status: "1"
      // Active users only
    }
  });
  const {
    rows: participants,
    status: participantsStatus,
    setFilter: setParticipantsFilter
  } = useBackend(`/CompetitionParticipantsScoreCardJson/Get`, {
    select: "ParticipantId,CandidateIdentityNumber,CompetitionCompetitionItem,CompetitionGender,CompetitionGroup,CompetitionLanguage,CompetitionMaximumScore,CompetitionParticipantType,IdentityNumber,Notes,ParticipantIdScore,ParticipantIdScorecardId,ParticipantType,Status,TeamIdentityNumber,CandidateName,ParticipantNumber,ScorecardId",
    filter: {
      Status: "1"
    },
    noGet: true,
    // Initially disabled, will be enabled via setFilter
    updateUrl: "/JudgeJson/SaveScore",
    deleteUrl: "/JudgeJson/DeleteScore"
  });
  const {
    rows: judgeScores,
    setFilter: setJudgeScoresFilter
  } = useBackend(`/JudgesDetailedScoreCardJson/Get`, {
    select: "JudgesDetailedScoreCardId,ParticipantId,CompetitionDetailsId,Score,Judge,Competition,ScoreCard",
    filter: {},
    noGet: true,
    // Initially disabled
    updateUrl: "/JudgesDetailedScoreCardJson/Save",
    deleteUrl: "/JudgesDetailedScoreCardJson/Remove"
  });
  const {
    rows: competitionDetails,
    setFilter: setCompetitionDetailsFilter
  } = useBackend(`/CompetitionDetailsJson/Get`, {
    select: "CriteriaName,DetailId,Order,SecondValue,Status,Value,Competition,CompetitionDetailsTitle,MaxScore,MinScore,CompetitionItem,ParticipantType,Gender,Group,Language,CompetitionDetailsId",
    filter: {},
    noGet: true,
    // Initially disabled
    updateUrl: "/CompetitionDetailsJson/Save"
  });
  const getCompetitionStatusPriority = (comp) => {
    if (comp.inProgressJudges > 0) return 1;
    if (comp.finishedJudges === comp.totalJudges && comp.competitionStatus !== 4) return 2;
    if (comp.notStartedJudges === comp.totalJudges) return 4;
    if (comp.competitionStatus === 4) return 5;
    return 3;
  };
  reactExports.useEffect(() => {
    if (user && user.Role === 6 && processedCompetitions.length > 0) {
      const allJudges = processedCompetitions.flatMap((comp) => comp.judges);
      const matchingJudge = allJudges.find((judge) => judge.judgeName === user.UserName || judge.judgeUserName === user.UserName || judge.judgeId === user.UId || judge.judgeId === user.UserRoleId);
      if (matchingJudge) {
        setSelectedJudges([matchingJudge.judgeId.toString()]);
      }
    }
  }, [user, processedCompetitions]);
  reactExports.useEffect(() => {
    if (competitions && competitions.length > 0 && judgeUsers && judgeUsers.length > 0) {
      const competitionGroups = competitions.reduce((acc, comp) => {
        const key = comp.Competition;
        if (!acc[key]) {
          acc[key] = {
            competitionId: key,
            allotementId: comp.AllotementId,
            competitionName: comp.CompetitionEventEventName || `Competition ${key}`,
            competitionCode: comp.CompetitionCode || "",
            statusTitle: comp.CompetitionStatusTitle || comp.CompetitionCompetitionStatusCompetitionStatusTitle || "Unknown Status",
            competitionStatus: comp.CompetitionCompetitionStatus,
            competitionItemTitle: comp.CompetitionItemTitle,
            competitionGender: comp.CompetitionGender,
            competitionGenderTitle: comp.CompetitionGenderGenderTitle,
            competitionGroupName: comp.CompetitionGroupGroupName,
            competitionItemScoreLabel: comp.CompetitionItemScoreLabel,
            competitionLanguage: comp.CompetitionLanguage,
            competitionLanguageName: comp.CompetitionLanguageLanguageName,
            competitionOrder: comp.CompetitionOrder || comp.Order,
            competitionParticipantTypeTitle: comp.CompetitionParticipantTypeTitle,
            scoreLabel: comp.CompetitionItemScoreLabel,
            scoreLabelLabel: comp.ScoreLabelLabel,
            scoreStatus: comp.ScoreStatus,
            scoreStatusTitle: comp.ScoreStatusScoreResultStatus,
            competitionMaximumScore: comp.CompetitionMaximumScore > 0 ? comp.CompetitionMaximumScore : 10,
            competitionFees: comp.CompetitionFees,
            phaseTitle: comp.PhaseTitle,
            stageTitle: comp.StageTitle,
            judges: [],
            totalJudges: 0,
            finishedJudges: 0,
            inProgressJudges: 0,
            notStartedJudges: 0
          };
        }
        const existingJudge = acc[key].judges.find((j) => j.judgeId === comp.Judge && j.allotmentId === comp.AllotementId);
        if (!existingJudge) {
          const judgeUser = judgeUsers.find((ju) => ju.UserRoleId === comp.Judge);
          const judgeName = judgeUser ? judgeUser.Name || judgeUser.UserName : `Judge ${comp.Judge}`;
          acc[key].judges.push({
            judgeId: comp.Judge,
            judgeName,
            judgeUserName: judgeUser?.UserName || "",
            scoreStatus: comp.ScoreStatus,
            allotmentId: comp.AllotementId
          });
          acc[key].totalJudges++;
          if (comp.ScoreStatus === 1 || comp.ScoreStatus === "1") {
            acc[key].finishedJudges++;
          } else if (comp.ScoreStatus === 2 || comp.ScoreStatus === "2") {
            acc[key].inProgressJudges++;
          } else {
            acc[key].notStartedJudges++;
          }
        }
        return acc;
      }, {});
      const competitionArray = Object.values(competitionGroups).sort((a, b) => {
        const statusComparison = getCompetitionStatusPriority(a) - getCompetitionStatusPriority(b);
        if (statusComparison !== 0) return statusComparison;
        const orderA = a.competitionOrder || 0;
        const orderB = b.competitionOrder || 0;
        return orderA - orderB;
      });
      setProcessedCompetitions(competitionArray);
    }
  }, [competitions, judgeUsers]);
  const groupFilterOptions = reactExports.useMemo(() => {
    const groups = [...new Set(processedCompetitions.map((comp) => comp.competitionGroupName).filter(Boolean))];
    return [
      { value: "all", label: "All Groups", count: processedCompetitions.length },
      ...groups.map((group) => ({
        value: group,
        label: group,
        count: processedCompetitions.filter((comp) => comp.competitionGroupName === group).length
      }))
    ];
  }, [processedCompetitions]);
  reactExports.useEffect(() => {
    if (selectedJudges.length > 0 && selectedCompetition) {
      setParticipantsFilter({
        Judge: selectedJudges[0],
        // Use first selected judge for now
        Competition: selectedCompetition,
        Status: "1"
      });
    }
  }, [selectedJudges, selectedCompetition]);
  reactExports.useEffect(() => {
    if (selectedJudges.length > 0 && selectedCompetition) {
      setJudgeScoresFilter({
        Judge: selectedJudges[0],
        // Use first selected judge for now
        Competition: selectedCompetition
      });
    }
  }, [selectedJudges, selectedCompetition]);
  reactExports.useEffect(() => {
    if (selectedCompetition) {
      setCompetitionDetailsFilter({
        Competition: selectedCompetition
      });
    }
  }, [selectedCompetition]);
  reactExports.useEffect(() => {
    if (judgeScores && judgeScores.length > 0) {
      const newCriteriaScores = {};
      const newParticipantScores = {};
      const newNotes = {};
      judgeScores.forEach((score) => {
        if (score.CriteriaId) {
          newCriteriaScores[`${score.CriteriaId}_${score.ParticipantId}`] = score.Score;
        }
        if (score.TotalScore) {
          newParticipantScores[score.ParticipantId] = score.TotalScore;
        }
        if (score.Notes) {
          newNotes[score.ParticipantId] = score.Notes;
        }
      });
      setCriteriaScores(newCriteriaScores);
      setParticipantScores(newParticipantScores);
      setParticipantNotes(newNotes);
    }
  }, [judgeScores]);
  reactExports.useEffect(() => {
    if (participants && participants.length > 0 && !activeParticipantId) {
      setActiveParticipantId(participants[0].ParticipantId);
      setCurrentParticipantIndex(0);
    }
  }, [participants, activeParticipantId]);
  const handleCompetitionSelect = (competitionId) => {
    setSelectedCompetition(competitionId);
    setActiveParticipantId(null);
    setCurrentParticipantIndex(0);
  };
  const handleJudgeSelect = (judgeSelection) => {
    setSelectedJudges(judgeSelection);
    setActiveParticipantId(null);
    setCurrentParticipantIndex(0);
  };
  const handleParticipantSelect = (participantId, index) => {
    setActiveParticipantId(participantId);
    setCurrentParticipantIndex(index);
  };
  const handleNavigateParticipant = (direction) => {
    if (!participants || participants.length === 0) return;
    let newIndex;
    if (direction === "next") {
      newIndex = currentParticipantIndex + 1;
      if (newIndex >= participants.length) newIndex = 0;
    } else {
      newIndex = currentParticipantIndex - 1;
      if (newIndex < 0) newIndex = participants.length - 1;
    }
    setCurrentParticipantIndex(newIndex);
    setActiveParticipantId(participants[newIndex]?.ParticipantId);
  };
  const handleScoreChange = (score, criteriaId, participantId, judgeId = null) => {
    const effectiveJudgeId = judgeId || selectedJudges[0];
    const keyPrefix = selectedJudges.length > 1 ? `judge_${effectiveJudgeId}_` : "";
    if (criteriaId === null) {
      setParticipantScores((prev) => ({
        ...prev,
        [`${keyPrefix}${participantId}`]: score
      }));
    } else {
      const key = `${keyPrefix}${criteriaId}_${participantId}`;
      setCriteriaScores((prev) => ({
        ...prev,
        [key]: score
      }));
      updateParticipantTotalScore(participantId, effectiveJudgeId);
    }
  };
  const handleNotesChange = (participantId, notes, judgeId = null) => {
    const effectiveJudgeId = judgeId || selectedJudges[0];
    const keyPrefix = selectedJudges.length > 1 ? `judge_${effectiveJudgeId}_` : "";
    setParticipantNotes((prev) => ({
      ...prev,
      [`${keyPrefix}${participantId}`]: notes
    }));
  };
  const updateParticipantTotalScore = (participantId, judgeId = null) => {
    const effectiveJudgeId = judgeId || selectedJudges[0];
    const keyPrefix = selectedJudges.length > 1 ? `judge_${effectiveJudgeId}_` : "";
    const criteriaKeys = Object.keys(criteriaScores).filter((key) => key.endsWith(`_${participantId}`) && (selectedJudges.length === 1 || key.startsWith(`judge_${effectiveJudgeId}_`)));
    const total = criteriaKeys.reduce((sum, key) => {
      return sum + (criteriaScores[key] || 0);
    }, 0);
    setParticipantScores((prev) => ({
      ...prev,
      [`${keyPrefix}${participantId}`]: total
    }));
  };
  const saveScore = async (participantId, criteriaId = null, score = null, judgeId = null) => {
    const effectiveJudgeId = judgeId || selectedJudges[0];
    const keyPrefix = selectedJudges.length > 1 ? `judge_${effectiveJudgeId}_` : "";
    try {
      const postdata = {};
      postdata.Scores = [];
      if (criteriaId) {
        const scoreData = {
          Judge: effectiveJudgeId,
          Competition: selectedCompetition,
          ParticipantId: participantId,
          CriteriaId: criteriaId,
          Score: score || criteriaScores[`${keyPrefix}${criteriaId}_${participantId}`] || 0,
          AllotementId: competitions?.find((c) => c.Competition === selectedCompetition)?.AllotementId
        };
        postdata.Scores.push(scoreData);
      } else {
        if (competitionDetails && competitionDetails.length > 0) {
          competitionDetails.forEach((criteria) => {
            const criteriaScoreKey = `${keyPrefix}${criteria.DetailId || criteria.CompetitionDetailsId}_${participantId}`;
            const criteriaScore = criteriaScores[criteriaScoreKey] || 0;
            if (criteriaScore > 0) {
              const scoreData = {
                Judge: effectiveJudgeId,
                Competition: selectedCompetition,
                ParticipantId: participantId,
                CriteriaId: criteria.DetailId || criteria.CompetitionDetailsId,
                Score: criteriaScore,
                AllotementId: competitions?.find((c) => c.Competition === selectedCompetition)?.AllotementId
              };
              postdata.Scores.push(scoreData);
            }
          });
          const totalScoreData = {
            Judge: effectiveJudgeId,
            Competition: selectedCompetition,
            ParticipantId: participantId,
            ScoreCardScore: participantScores[`${keyPrefix}${participantId}`] || 0,
            IsTotalScore: true,
            AllotementId: competitions?.find((c) => c.Competition === selectedCompetition)?.AllotementId
          };
          postdata.Scores.push(totalScoreData);
        } else {
          const scoreData = {
            Judge: effectiveJudgeId,
            Competition: selectedCompetition,
            ParticipantId: participantId,
            ScoreCardScore: participantScores[`${keyPrefix}${participantId}`] || 0,
            AllotementId: competitions?.find((c) => c.Competition === selectedCompetition)?.AllotementId
          };
          postdata.Scores.push(scoreData);
        }
      }
      postdata.notes = participantNotes[`${keyPrefix}${participantId}`] || "";
      postdata.JudgeId = effectiveJudgeId;
      const response = await fetch("/JudgeJson/SaveScore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postdata)
      });
      const result = await response.json();
      if (result.Results > 0 && result.Results !== "0") {
        return result.Results;
      } else {
        throw new Error(typeof result.Results === "string" ? result.Results : "Failed to save score");
      }
    } catch (error) {
      console.error("Error saving score:", error);
      throw error;
    }
  };
  const deleteScore = async (participantId, criteriaId = null, judgeId = null) => {
    const effectiveJudgeId = judgeId || selectedJudges[0];
    const keyPrefix = selectedJudges.length > 1 ? `judge_${effectiveJudgeId}_` : "";
    try {
      const deleteData = {
        Judge: effectiveJudgeId,
        Competition: selectedCompetition,
        ParticipantId: participantId
      };
      if (criteriaId) {
        deleteData.CriteriaId = criteriaId;
        const response = await fetch("/JudgesScoreCardJson/Remove", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(deleteData)
        });
        const result = await response.json();
        if (result.success !== false) {
          setCriteriaScores((prev) => {
            const newState = { ...prev };
            delete newState[`${keyPrefix}${criteriaId}_${participantId}`];
            return newState;
          });
        }
      } else {
        const response = await fetch("/JudgesScoreCardJson/Remove", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(deleteData)
        });
        const result = await response.json();
        if (result.success !== false) {
          setParticipantScores((prev) => {
            const newState = { ...prev };
            delete newState[`${keyPrefix}${participantId}`];
            return newState;
          });
          setCriteriaScores((prev) => {
            const newState = { ...prev };
            Object.keys(newState).forEach((key) => {
              if (key.endsWith(`_${participantId}`) && (selectedJudges.length === 1 || key.startsWith(`judge_${effectiveJudgeId}_`))) {
                delete newState[key];
              }
            });
            return newState;
          });
          setParticipantNotes((prev) => {
            const newState = { ...prev };
            delete newState[`${keyPrefix}${participantId}`];
            return newState;
          });
        }
      }
      return true;
    } catch (error) {
      console.error("Error deleting score:", error);
      throw error;
    }
  };
  const markAsFinished = async () => {
    if (selectedJudges.length === 0 || !selectedCompetition) return;
    setIsFinishing(true);
    try {
      const finishData = {
        Competition: selectedCompetition,
        ScoreStatus: 1,
        AllotementId: competitions?.find((c) => c.Competition === selectedCompetition)?.AllotementId
      };
      await updateCompetition(finishData);
      zt.success("Competition marked as finished!");
    } catch (error) {
      console.error("Error marking as finished:", error);
      zt.error("Failed to mark competition as finished.");
    } finally {
      setIsFinishing(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Scoring Panel",
        subHeading: "Select a judge and competition to begin scoring participants",
        rightChildren: selectedJudges.length > 0 && selectedCompetition && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: markAsFinished,
            disabled: isFinishing,
            className: classNames(
              "inline-flex items-center gap-x-2 rounded-md px-4 py-2 text-sm font-semibold shadow-sm",
              isFinishing ? "bg-surface text-onSurfaceVariant cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-4 w-4" }),
              isFinishing ? "Finishing..." : "Mark as Finished"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 lg:px-6 py-2", children: [
      processedCompetitions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-t-lg lg:rounded-lg py-2 px-2 lg:px-6 ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden lg:mb-4 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: selectedGroupFilter,
            onChange: (e) => setSelectedGroupFilter(e.target.value),
            className: "block w-full rounded-md border-border shadow-sm focus:border-darkprimary focus:ring-primary text-sm",
            children: groupFilterOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: option.value, children: [
              option.label,
              " (",
              option.count,
              ")"
            ] }, option.value))
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex -mb-px space-x-4 overflow-x-auto", children: groupFilterOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setSelectedGroupFilter(option.value),
            className: `whitespace-nowrap py-2 px-6 border-b-2 font-medium text-sm transition-all duration-200 ${selectedGroupFilter === option.value ? "border-primary text-primary bg-blue-50" : "border-transparent text-onSurfaceVariant hover:text-onSurface hover:border-border"}`,
            children: [
              option.label,
              " (",
              option.count,
              ")"
            ]
          },
          option.value
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white lg:border-t-2 lg:border-primary rounded-lg shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CompetitionsList,
          {
            competitions,
            processedCompetitions,
            competitionsStatus,
            selectedCompetition,
            onCompetitionSelect: handleCompetitionSelect,
            getCompetitionStatusPriority,
            selectedGroupFilter,
            setSelectedGroupFilter
          }
        ) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(JudgesList, { processedCompetitions, selectedCompetition, selectedJudges, onJudgeSelect: handleJudgeSelect }) }) }),
          selectedJudges.length > 0 && selectedCompetition && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-x-1 flex flex-row overflow-x-auto", children: selectedJudges.map((judgeId, index) => {
            const selectedCompetitionData = processedCompetitions.find((c) => c.competitionId == selectedCompetition);
            const judge = selectedCompetitionData?.judges?.find((j) => j.judgeId.toString() === judgeId.toString());
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/10 border border-primary/20 rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-primary", children: [
                  "Judge: ",
                  judge?.judgeName || `Judge ${judgeId}`
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-onSurfaceVariant mt-1", children: [
                  "Status: ",
                  judge?.scoreStatus === 1 || judge?.scoreStatus === "1" ? "Filled" : judge?.scoreStatus === 2 || judge?.scoreStatus === "2" ? "Published" : "Allowed To Fill"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ParticipantsList,
                  {
                    participants,
                    participantsStatus,
                    activeParticipantId,
                    currentParticipantIndex,
                    participantScores,
                    onParticipantSelect: handleParticipantSelect,
                    onNavigateParticipant: handleNavigateParticipant,
                    judgeId,
                    showJudgeSpecificScores: selectedJudges.length > 1
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ScoringBox,
                  {
                    activeParticipantId,
                    participants,
                    competitionDetails,
                    criteriaScores,
                    participantScores,
                    participantNotes,
                    onScoreChange: handleScoreChange,
                    onNotesChange: handleNotesChange,
                    onSaveScore: saveScore,
                    onDeleteScore: deleteScore,
                    selectedCompetition,
                    processedCompetitions,
                    selectedJudges: [judgeId],
                    currentJudgeId: judgeId
                  }
                ) })
              ] })
            ] }, judgeId);
          }) })
        ] })
      ] }),
      (selectedJudges.length === 0 || !selectedCompetition) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$8, { className: "h-12 w-12 text-onSurfaceVariant mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-onSurface mb-2", children: "Welcome to Judge Scoring Panel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant mb-4", children: "Please select a judge and competition to begin scoring participants." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-onSurfaceVariant", children: "Enhanced with modern UX patterns and interactive scoring features" })
      ] })
    ] })
  ] }) });
};
export {
  JudgesScoreCard as default
};
