import { r as reactExports, j as jsxRuntimeExports, u as useBackend, z as zt } from "./main-B7w5eCOl.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { b as ForwardRef$2, F as ForwardRef$7, a as ForwardRef$8 } from "./ClockIcon-CzpYz8Es.js";
import { F as ForwardRef$3 } from "./ArrowPathIcon-BKnvswe3.js";
import { F as ForwardRef$4 } from "./CheckCircleIcon-BMZ-5cUh.js";
import { F as ForwardRef$5 } from "./XMarkIcon-CWPDMTWO.js";
import { F as ForwardRef$6 } from "./TrophyIcon-DZ81VYDV.js";
import { M as MotionConfigContext, i as isHTMLElement, u as useConstant, P as PresenceContext, a as usePresence, b as useIsomorphicLayoutEffect, L as LayoutGroupContext, m as motion } from "./proxy-B72BOR8r.js";
import { F as ForwardRef$9 } from "./ExclamationTriangleIcon-D83nSzlE.js";
function MagnifyingGlassIcon({
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
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(MagnifyingGlassIcon);
function XCircleIcon({
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
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(XCircleIcon);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const parent = element.offsetParent;
      const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
      size.right = parentWidth - size.width - size.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function PopChild({ children, isPresent, anchorX, root }) {
  const id = reactExports.useId();
  const ref = reactExports.useRef(null);
  const size = reactExports.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  });
  const { nonce } = reactExports.useContext(MotionConfigContext);
  const composedRef = useComposedRefs(ref, children?.ref);
  reactExports.useInsertionEffect(() => {
    const { width, height, top, left, right } = size.current;
    if (isPresent || !ref.current || !width || !height)
      return;
    const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
    ref.current.dataset.motionPopId = id;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    const parent = root ?? document.head;
    parent.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            top: ${top}px !important;
          }
        `);
    }
    return () => {
      if (parent.contains(style)) {
        parent.removeChild(style);
      }
    };
  }, [isPresent]);
  return jsxRuntimeExports.jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, children: reactExports.cloneElement(children, { ref: composedRef }) });
}
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, root }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id = reactExports.useId();
  let isReusedContext = true;
  let context = reactExports.useMemo(() => {
    isReusedContext = false;
    return {
      id,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  }, [isPresent, presenceChildren, onExitComplete]);
  if (presenceAffectsLayout && isReusedContext) {
    context = { ...context };
  }
  reactExports.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  reactExports.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  if (mode === "popLayout") {
    children = jsxRuntimeExports.jsx(PopChild, { isPresent, anchorX, root, children });
  }
  return jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  reactExports.Children.forEach(children, (child) => {
    if (reactExports.isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = reactExports.useRef(true);
  const pendingPresentChildren = reactExports.useRef(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  const { forceRender } = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitComplete.has(key)) {
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender?.();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && safeToRemove?.();
        onExitComplete && onExitComplete();
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, children: child }, key);
  }) });
};
const ManageResultsStatus = ({ user }) => {
  const [filteredCompetitions, setFilteredCompetitions] = reactExports.useState([]);
  const [selectedStatusFilter, setSelectedStatusFilter] = reactExports.useState("all");
  const [expandedCompetitions, setExpandedCompetitions] = reactExports.useState(/* @__PURE__ */ new Set());
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [showOnlyPublishedResults, setShowOnlyPublishedResults] = reactExports.useState(false);
  const [selectedGroupFilter, setSelectedGroupFilter] = reactExports.useState("all");
  const {
    rows: competitions,
    status: competitionsStatus,
    setFilter: setCompetitionFilter,
    update: updateCompetition
  } = useBackend("/CompetitionStructureJson/Get", {
    select: "CompetitionStructureId,Order,CompetitionItemTitle,CompetitionItemCompetitionItemTitle,GenderGenderTitle,LanguageLanguageName,GroupGroupName,CompetitionStatus,ParticipantTypeTitle,ParticipantsCount",
    filter: {
      EventCategory: user?.EventCategory,
      Event: user?.Event
    },
    limit: 1e3,
    offset: 0,
    updateUrl: "/CompetitionStructureJson/Save"
  });
  const {
    rows: judgesData,
    status: judgesStatus,
    update: updateJudge
  } = useBackend("/JudgesAllotmentPlusUsersRolesJson/Get", {
    select: "AllotementId,JudgeUserName,ScoreStatus,Competition,Judge,ScoresSubmitted",
    filter: {
      EventCategory: user?.EventCategory,
      Event: user?.Event
    },
    limit: 1e3,
    offset: 0,
    updateUrl: "/JudgesAllotmentJson/Save"
  });
  const { rows: scheduleData, status: scheduleStatus } = useBackend("/CompetitionScheduleJson/Get", {
    select: "CompetitionStructureId,StageName",
    filter: {
      EventCategory: user?.EventCategory,
      Event: user?.Event
    },
    limit: 1e3,
    offset: 0
  });
  const { rows: competitionStatuses, status: statusesStatus } = useBackend("/CompetitionStatusJson/Get", {
    select: "CompetitionStatusId,CompetitionStatusTitle",
    limit: 100,
    offset: 0
  });
  const { rows: judgeResultStatuses, status: judgeStatusesStatus } = useBackend("/JudgesResultStatusJson/Get", {
    select: "ResultStatusId,ScoreResultStatus",
    limit: 100,
    offset: 0
  });
  const loading = competitionsStatus === "fetching" || judgesStatus === "fetching" || scheduleStatus === "fetching" || statusesStatus === "fetching" || judgeStatusesStatus === "fetching";
  const refreshing = competitionsStatus === "refreshing" || judgesStatus === "refreshing";
  const competitionStatusOptions = reactExports.useMemo(() => {
    if (!competitionStatuses) {
      return [
        { value: 3, label: "Not Started", color: "bg-surface text-onSurface", icon: ForwardRef$2 },
        { value: 5, label: "Yet To Begin", color: "bg-blue-100 text-blue-800", icon: ForwardRef$2 },
        { value: 4, label: "On Progress", color: "bg-yellow-100 text-yellow-800", icon: ForwardRef$3 },
        { value: 6, label: "Finished", color: "bg-purple-100 text-purple-800", icon: ForwardRef$4 },
        { value: 2, label: "On Review", color: "bg-indigo-100 text-indigo-800", icon: ForwardRef$3 },
        { value: 1, label: "Results Published", color: "bg-green-100 text-green-800", icon: ForwardRef$4 },
        { value: 7, label: "Cancelled", color: "bg-red-100 text-red-800", icon: ForwardRef }
      ];
    }
    return competitionStatuses.map((status) => {
      let color = "bg-gray-100 text-gray-800";
      let icon = ForwardRef$2;
      if (status.CompetitionStatusId === 1) {
        color = "bg-green-100 text-green-800";
        icon = ForwardRef$4;
      } else if (status.CompetitionStatusId === 2) {
        color = "bg-indigo-100 text-indigo-800";
        icon = ForwardRef$3;
      } else if (status.CompetitionStatusId === 3) {
        color = "bg-gray-100 text-gray-800";
        icon = ForwardRef$2;
      } else if (status.CompetitionStatusId === 4) {
        color = "bg-yellow-100 text-yellow-800";
        icon = ForwardRef$3;
      } else if (status.CompetitionStatusId === 5) {
        color = "bg-blue-100 text-blue-800";
        icon = ForwardRef$2;
      } else if (status.CompetitionStatusId === 6) {
        color = "bg-purple-100 text-purple-800";
        icon = ForwardRef$4;
      } else if (status.CompetitionStatusId === 7) {
        color = "bg-red-100 text-red-800";
        icon = ForwardRef;
      }
      return {
        value: status.CompetitionStatusId,
        label: status.CompetitionStatusTitle,
        color,
        icon
      };
    });
  }, [competitionStatuses]);
  const judgeStatusOptions = reactExports.useMemo(() => {
    if (!judgeResultStatuses) {
      return [
        { value: 1, label: "Published", color: "bg-green-100 text-green-800" },
        { value: 2, label: "Filled", color: "bg-blue-100 text-blue-800" },
        { value: 3, label: "Allowed to fill", color: "bg-yellow-100 text-yellow-800" }
      ];
    }
    return judgeResultStatuses.map((status) => {
      let color = "bg-gray-100 text-gray-800";
      if (status.ResultStatusId === 1) color = "bg-green-100 text-green-800";
      else if (status.ResultStatusId === 2) color = "bg-blue-100 text-blue-800";
      else if (status.ResultStatusId === 3) color = "bg-yellow-100 text-yellow-800";
      return {
        value: status.ResultStatusId,
        label: status.ScoreResultStatus,
        color
      };
    });
  }, [judgeResultStatuses]);
  const processedCompetitions = reactExports.useMemo(() => {
    if (!competitions) return [];
    return competitions.map((comp) => {
      const competitionJudges = judgesData ? judgesData.filter((judge) => judge.Competition === comp.CompetitionStructureId).map((judge) => ({
        id: judge.AllotementId,
        name: judge.JudgeUserName || "Unknown Judge",
        status: judge.ScoreStatus || 1,
        scoresSubmitted: judge.ScoresSubmitted || 0,
        allotmentId: judge.AllotementId,
        judgeId: judge.Judge,
        competitionId: judge.Competition
      })) : [];
      const schedule = scheduleData?.find((s) => s.CompetitionStructureId === comp.CompetitionStructureId);
      const stageName = schedule?.StageName || "TBD";
      const isResultPublished = comp.CompetitionStatus === 1;
      return {
        id: comp.CompetitionStructureId,
        competitionStructureId: comp.CompetitionStructureId,
        name: `${comp.Order} - ${comp.GroupGroupName} - ${comp.CompetitionItemTitle || comp.CompetitionItemCompetitionItemTitle} ${comp.GenderGenderTitle ? `(${comp.GenderGenderTitle})` : ""} ${comp.LanguageLanguageName ? `- ${comp.LanguageLanguageName}` : ""}`,
        category: comp.CompetitionItemTitle || comp.CompetitionItemCompetitionItemTitle,
        ageGroup: comp.GroupGroupName,
        status: comp.CompetitionStatus || 1,
        totalParticipants: comp.ParticipantsCount || 0,
        stageName,
        isResultPublished,
        judges: competitionJudges,
        order: comp.Order || 0,
        participantType: comp.ParticipantTypeTitle,
        gender: comp.GenderGenderTitle,
        language: comp.LanguageLanguageName,
        group: comp.GroupGroupName
      };
    }).sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [competitions, judgesData, scheduleData]);
  const filterOptions = reactExports.useMemo(() => {
    const baseOptions = [{ value: "all", label: "All Competitions" }];
    if (competitionStatuses && processedCompetitions.length > 0) {
      const statusOptions = competitionStatuses.map((status) => ({
        value: status.CompetitionStatusId,
        label: status.CompetitionStatusTitle,
        count: processedCompetitions.filter((comp) => comp.status === status.CompetitionStatusId).length
      })).filter((option) => option.count > 0);
      return [...baseOptions, ...statusOptions];
    }
    return baseOptions;
  }, [competitionStatuses, processedCompetitions]);
  const groupFilterOptions = reactExports.useMemo(() => {
    const baseOptions = [{ value: "all", label: "All Groups" }];
    if (processedCompetitions && processedCompetitions.length > 0) {
      const uniqueGroups = [...new Set(processedCompetitions.map((comp) => comp.group).filter(Boolean))];
      const groupOptions = uniqueGroups.map((group) => ({
        value: group,
        label: group
      }));
      return [...baseOptions, ...groupOptions];
    }
    return baseOptions;
  }, [processedCompetitions]);
  reactExports.useEffect(() => {
    let filtered = processedCompetitions;
    if (selectedGroupFilter !== "all") {
      filtered = filtered.filter((competition) => competition.group === selectedGroupFilter);
    }
    if (selectedStatusFilter !== "all") {
      filtered = filtered.filter((competition) => competition.status === parseInt(selectedStatusFilter));
    }
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(
        (competition) => competition.name.toLowerCase().includes(searchLower) || competition.category?.toLowerCase().includes(searchLower) || competition.ageGroup?.toLowerCase().includes(searchLower) || competition.stageName?.toLowerCase().includes(searchLower)
      );
    }
    if (showOnlyPublishedResults) {
      filtered = filtered.filter((competition) => competition.isResultPublished);
    }
    setFilteredCompetitions(filtered);
  }, [processedCompetitions, selectedGroupFilter, selectedStatusFilter, searchTerm, showOnlyPublishedResults]);
  const toggleCompetitionExpansion = (competitionId) => {
    const newExpanded = new Set(expandedCompetitions);
    if (newExpanded.has(competitionId)) {
      newExpanded.delete(competitionId);
    } else {
      newExpanded.add(competitionId);
    }
    setExpandedCompetitions(newExpanded);
  };
  const updateCompetitionStatus = reactExports.useCallback(
    async (competitionId, newStatus) => {
      try {
        const competition = competitions?.find((comp) => comp.CompetitionStructureId === competitionId);
        if (!competition) {
          console.error("Competition not found");
          zt.error("Competition not found");
          return;
        }
        const updateData = {
          CompetitionStructureId: competitionId,
          CompetitionStatus: newStatus,
          Event: user?.Event,
          EventCategory: user?.EventCategory,
          Order: competition.Order,
          CompetitionItem: competition.CompetitionItemTitle,
          Gender: competition.GenderGenderTitle,
          Language: competition.LanguageLanguageName,
          Group: competition.GroupGroupName,
          Status: 1
          // Active status
        };
        const result = await updateCompetition(updateData);
        if (result) {
          zt.success("Competition status updated successfully");
        } else {
          zt.error("Failed to update competition status");
        }
      } catch (error) {
        console.error("Error updating competition status:", error);
        zt.error("Failed to update competition status");
      }
    },
    [competitions, updateCompetition, user?.Event, user?.EventCategory]
  );
  const updateJudgeStatus = reactExports.useCallback(
    async (competitionId, judgeId, newStatus) => {
      try {
        const judge = judgesData?.find((j) => j.AllotementId === judgeId && j.Competition === competitionId);
        if (!judge) {
          console.error("Judge allotment not found");
          zt.error("Judge allotment not found");
          return;
        }
        const updateData = {
          AllotementId: judgeId,
          ScoreStatus: newStatus,
          Competition: competitionId,
          Judge: judge.Judge,
          Event: user?.Event,
          EventCategory: user?.EventCategory,
          Status: 1
          // Active status
        };
        const result = await updateJudge(updateData);
        if (result) {
          zt.success("Judge status updated successfully");
        } else {
          zt.error("Failed to update judge status");
        }
      } catch (error) {
        console.error("Error updating judge status:", error);
        zt.error("Failed to update judge status");
      }
    },
    [judgesData, updateJudge, user?.Event, user?.EventCategory]
  );
  const refreshData = async () => {
    try {
      await setCompetitionFilter({
        EventCategory: user?.EventCategory,
        Event: user?.Event
      });
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  };
  const getStatusBadge = (status, options) => {
    const statusOption = options.find((opt) => opt.value === status);
    if (!statusOption) return null;
    const IconComponent = statusOption.icon;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusOption.color} animate-in fade-in-0 duration-300`, children: [
      IconComponent && /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-3 h-3 mr-1" }),
      statusOption.label
    ] });
  };
  const getJudgeProgressPercentage = (judge, totalParticipants) => {
    let progressStep = 0;
    if (judge.status === 3) {
      if (judge.scoresSubmitted === 0) {
        progressStep = 3;
      } else if (judge.scoresSubmitted < totalParticipants) {
        progressStep = 4;
      } else {
        progressStep = 5;
      }
    } else if (judge.status === 2) {
      progressStep = 7;
    } else if (judge.status === 1) {
      progressStep = 9;
    }
    return Math.round(progressStep / 9 * 100);
  };
  const getCompetitionSummary = (competition) => {
    const completedJudges = competition.judges.filter((j) => j.status === 1 || j.status === 2).length;
    const filledJudges = competition.judges.filter((j) => j.status === 2).length;
    const allowedJudges = competition.judges.filter((j) => j.status === 3).length;
    const totalJudges = competition.judges.length;
    const totalScoresNeeded = competition.totalParticipants * totalJudges;
    const scoresSubmitted = competition.judges.reduce((sum, judge) => sum + judge.scoresSubmitted, 0);
    let progressStep = 0;
    if (competition.status === 7) {
      progressStep = 0;
    } else if (competition.status === 3) {
      progressStep = 1;
    } else if (competition.status === 5) {
      progressStep = 2;
    } else if (competition.status === 4) {
      if (allowedJudges === totalJudges && filledJudges === 0 && completedJudges === 0) {
        progressStep = 3;
      } else if (filledJudges > 0 && completedJudges === 0) {
        progressStep = 4;
      } else if (filledJudges === totalJudges) {
        progressStep = 5;
      } else {
        progressStep = 4;
      }
    } else if (competition.status === 6) {
      progressStep = 6;
    } else if (competition.status === 2) {
      progressStep = 7;
    } else if (competition.status === 1) {
      progressStep = 9;
    }
    const overallProgress = Math.round(progressStep / 9 * 100);
    return {
      completedJudges,
      filledJudges,
      allowedJudges,
      totalJudges,
      overallProgress,
      scoresSubmitted,
      totalScoresNeeded,
      progressStep
    };
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-surfaceCard", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-12 w-12 animate-spin mx-auto text-indigo-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-gray-600", children: "Loading results status..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Results Status Management",
        subHeading: "Monitor competition progress and manage judge assignments across all events",
        rightChildren: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: refreshData,
            disabled: refreshing,
            className: `inline-flex items-center gap-x-2 rounded-md px-6 py-2.5 text-sm font-semibold shadow-sm text-white transition-all ${refreshing ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}` }),
              refreshing ? "Refreshing..." : "Refresh"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fixed mb-5 lg:mb-7.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-4 w-4 text-onSurfaceVariant" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "pl-10 pr-10 block w-full rounded-md border-0 py-2 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
            placeholder: "Search by name, category, age group, or stage...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            "aria-label": "Search competitions"
          }
        ),
        searchTerm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100",
            onClick: () => setSearchTerm(""),
            "aria-label": "Clear search",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-4 w-4" })
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            className: "h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary focus:ring-2",
            checked: showOnlyPublishedResults,
            onChange: (e) => setShowOnlyPublishedResults(e.target.checked)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-sm font-medium text-onSurface", children: "Show only published results" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fixed mb-5 lg:mb-7.5", children: processedCompetitions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100 text-sm font-medium", children: "Total Competitions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold", children: processedCompetitions.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "h-8 w-8 text-blue-200" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl text-white transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-yellow-100 text-sm font-medium", children: "In Progress" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold", children: processedCompetitions.filter((c) => c.status === 4).length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-8 w-8 text-yellow-200" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-100 text-sm font-medium", children: "Completed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold", children: processedCompetitions.filter((c) => c.status === 6 || c.status === 2).length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-8 w-8 text-green-200" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-100 text-sm font-medium", children: "Published Results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold", children: processedCompetitions.filter((c) => c.isResultPublished).length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "h-8 w-8 text-purple-200" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fixed mb-5 lg:mb-7.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg  pt-4 ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "border-b-[#4852573e] text-[#206689] mb-3 items-center font-medium pb-1 px-1 w-full uppercase border-b text-sm", children: "FILTER BY GROUP" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: selectedGroupFilter,
          onChange: (e) => setSelectedGroupFilter(e.target.value),
          className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-darkprimary focus:ring-primary text-sm",
          children: groupFilterOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: option.label }, option.value))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden sm:flex -mb-px space-x-4 overflow-x-auto", children: groupFilterOptions.slice(0, 6).map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setSelectedGroupFilter(option.value),
          className: `whitespace-nowrap py-2 px-6 border-b-2 font-medium text-sm transition-all duration-200 ${selectedGroupFilter === option.value ? "border-primary text-primary bg-blue-50" : "border-transparent text-onSurfaceVariant hover:text-onSurface hover:border-border"}`,
          children: option.label
        },
        option.value
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fixed mb-5 lg:mb-7.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg pt-4 ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "border-b-[#4852573e] text-[#206689] mb-3 items-center font-medium pb-1 px-1 w-full uppercase border-b text-sm sm:hidden", children: "FILTER BY STATUS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: selectedStatusFilter,
          onChange: (e) => setSelectedStatusFilter(e.target.value),
          className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-darkprimary focus:ring-primary text-sm",
          children: filterOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: option.value, children: [
            option.label,
            option.value !== "all" && ` (${processedCompetitions.filter((comp) => comp.status === option.value).length})`
          ] }, option.value))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden sm:flex -mb-px space-x-8 overflow-x-auto", children: filterOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setSelectedStatusFilter(option.value),
          className: `py-3 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors relative ${selectedStatusFilter === option.value ? "border-primary text-primary bg-blue-50" : "border-transparent text-onSurfaceVariant hover:text-onSurface hover:border-border"}`,
          children: [
            option.label,
            option.value !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium ${selectedStatusFilter === option.value ? "bg-indigo-100 text-indigo-800" : "bg-gray-100 text-gray-600"}`, children: processedCompetitions.filter((comp) => comp.status === option.value).length })
          ]
        },
        option.value
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fixed mb-5 lg:mb-7.5", children: processedCompetitions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-surfaceCard px-6 py-3 rounded-lg shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-700", children: [
        "Showing ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: filteredCompetitions.length }),
        " of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: processedCompetitions.length }),
        " ",
        "competitions",
        searchTerm && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-indigo-600 font-medium", children: [
          'matching "',
          searchTerm,
          '"'
        ] })
      ] }),
      (filteredCompetitions.length !== processedCompetitions.length || searchTerm || selectedGroupFilter !== "all" || showOnlyPublishedResults) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setSearchTerm("");
            setSelectedGroupFilter("all");
            setSelectedStatusFilter("all");
            setShowOnlyPublishedResults(false);
          },
          className: "text-sm text-primary hover:text-primaryHover font-medium transition-all duration-200",
          children: "Clear all filters"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fixed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-0 sm:p-0", children: filteredCompetitions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "mx-auto h-16 w-16 text-gray-300" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-medium text-onSurface", children: "No competitions found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-500 max-w-md mx-auto", children: processedCompetitions.length > 0 ? "No competitions match your current filters. Try adjusting your search criteria or clearing filters." : "No competitions have been created yet. Create a competition to get started." }),
      (searchTerm || selectedStatusFilter !== "all" || showOnlyPublishedResults) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setSearchTerm("");
            setSelectedStatusFilter("all");
            setShowOnlyPublishedResults(false);
          },
          className: "inline-flex items-center px-4 py-2 border border-border shadow-sm text-sm font-medium rounded-md text-onSurfaceVariant bg-surfaceCard hover:bg-surface focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
          children: "Clear all filters"
        }
      ) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: filteredCompetitions.map((competition) => {
      const summary = getCompetitionSummary(competition);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          layout: true,
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.3 },
          className: `border rounded-xl p-2 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] ${competition.judges.length === 0 ? "border-red-300 bg-red-50" : "border-border bg-surfaceCard"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-2 sm:space-x-4 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => toggleCompetitionExpansion(competition.id),
                  className: "hidden sm:block mt-1 text-onSurfaceVariant hover:text-primary transition-colors p-1 rounded-full hover:bg-surface",
                  children: expandedCompetitions.has(competition.id) ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$7, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$8, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg sm:text-xl font-semibold text-onSurface mb-2", children: competition.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row sm:items-start gap-3 text-sm text-gray-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: "Category:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: competition.category })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: "Age Group:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: competition.ageGroup })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: "Stage:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: competition.stageName })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: "Judges:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: competition.judges.length })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center sm:col-span-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: "Results Published:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `ml-2 px-2 py-1 text-xs font-medium rounded-full ${competition.isResultPublished ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
                            children: competition.isResultPublished ? "Yes" : "No"
                          }
                        )
                      ] })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3", children: [
                    getStatusBadge(competition.status, competitionStatusOptions),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "select",
                      {
                        value: competition.status,
                        onChange: (e) => updateCompetitionStatus(competition.id, parseInt(e.target.value)),
                        className: "block w-full sm:w-40 rounded-md border-gray-300 shadow-sm focus:border-darkprimary focus:ring-primary text-sm transition-all duration-200 hover:border-primary",
                        children: competitionStatusOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: option.label }, option.value))
                      }
                    ),
                    (competition.status === 6 || competition.status === 2) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `/Coordinator/Results?competitionstructureid=${competition.competitionStructureId}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center px-3 py-2 border border-transparent text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "h-4 w-4 mr-1" }),
                          "Assign Winners"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200", onClick: () => toggleCompetitionExpansion(competition.id), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Overall Progress" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500", children: [
                        "(Click to ",
                        expandedCompetitions.has(competition.id) ? "hide" : "show",
                        " judges)"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-600", children: [
                        summary.overallProgress,
                        "%"
                      ] }),
                      expandedCompetitions.has(competition.id) ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$7, { className: "h-4 w-4 text-gray-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$8, { className: "h-4 w-4 text-gray-500" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out",
                      style: { width: `${summary.overallProgress}%` }
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-col sm:flex-row sm:justify-between gap-1 text-xs text-gray-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Judges: ",
                      summary.completedJudges,
                      "/",
                      summary.totalJudges,
                      " completed"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden text-primary", children: "Tap to view details" })
                  ] })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expandedCompetitions.has(competition.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.3 },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t pt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "border-b-[#4852573e] text-[#206689] mb-2 items-center font-medium pb-1 px-1 w-full uppercase border-b text-sm", children: "JUDGE ASSIGNMENTS" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-600", children: [
                      competition.judges.length,
                      " ",
                      competition.judges.length === 1 ? "judge" : "judges",
                      " assigned"
                    ] })
                  ] }),
                  competition.judges.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 bg-amber-50 border border-amber-200 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$9, { className: "h-8 w-8 text-amber-500 mx-auto mb-2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-amber-700 font-medium", children: "No judges assigned" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-600 mt-1", children: "This competition needs judge assignments to proceed." })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: competition.judges.map((judge) => {
                    const progressPercentage = getJudgeProgressPercentage(judge, competition.totalParticipants);
                    const statusLabel = judgeStatusOptions.find((opt) => opt.value === judge.status)?.label || "Unknown";
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "flex items-center justify-between p-4 bg-surfaceCard border border-border rounded-lg hover:bg-surface transition-all duration-200 hover:translate-x-1 hover:shadow-md",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-onSurface", children: judge.name }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
                                "Status: ",
                                statusLabel,
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 font-medium", children: [
                                  "(",
                                  progressPercentage,
                                  "%)"
                                ] })
                              ] })
                            ] }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: `h-2 rounded-full transition-all duration-500 ease-out ${progressPercentage === 100 ? "bg-green-600" : progressPercentage >= 78 ? "bg-blue-600" : progressPercentage >= 56 ? "bg-indigo-500" : progressPercentage >= 33 ? "bg-yellow-500" : "bg-gray-400"}`,
                                style: { width: `${progressPercentage}%` }
                              }
                            ) }) })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
                            getStatusBadge(judge.status, judgeStatusOptions),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "select",
                              {
                                value: judge.status,
                                onChange: (e) => updateJudgeStatus(competition.id, judge.id, parseInt(e.target.value)),
                                className: "block w-full sm:w-32 rounded-md border-gray-300 shadow-sm focus:border-darkprimary focus:ring-primary text-xs transition-all duration-200 hover:border-primary",
                                children: judgeStatusOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: option.label }, option.value))
                              }
                            )
                          ] })
                        ] })
                      },
                      judge.id
                    );
                  }) })
                ] })
              }
            ) })
          ]
        },
        competition.id
      );
    }) }) }) }) }) })
  ] }) });
};
export {
  ManageResultsStatus as default
};
