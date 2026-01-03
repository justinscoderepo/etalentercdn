import { u as useBackend, j as jsxRuntimeExports, r as reactExports, i as classNames } from "./main-B7w5eCOl.js";
const EventCompetitionCount = ({ component, eventDetails }) => {
  const { row: liveStatus, status: statusLoading } = useBackend("/PublicEventJson/GetLiveEventStatus", {
    filter: {
      EventId: eventDetails?.EVId,
      EventCategory: eventDetails?.EventCategory
    },
    doCache: true,
    noGet: !eventDetails?.EVId && !eventDetails?.EventCategory
  });
  const competitionCounts = {
    total: liveStatus?.TotalCompetitions || 0,
    notStarted: liveStatus?.NotStartedCount || 0,
    inProgress: liveStatus?.InProgressCount || 0,
    completed: liveStatus?.CompletedCount || 0,
    cancelled: liveStatus?.CancelledCount || 0
  };
  if (statusLoading === "loading") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      component.label && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4 text-center", children: component.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-100 rounded-lg p-3 text-center animate-pulse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 bg-gray-300 rounded mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-300 rounded" })
      ] }, i)) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    component.label && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4 text-center", children: component.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-100 rounded-lg p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl md:text-2xl font-bold text-gray-800", children: competitionCounts.total }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-gray-600", children: "Total" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-100 rounded-lg p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl md:text-2xl font-bold text-yellow-800", children: competitionCounts.notStarted }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-yellow-700", children: "Not Started" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-100 rounded-lg p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl md:text-2xl font-bold text-blue-800", children: competitionCounts.inProgress }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-blue-700", children: "In Progress" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-100 rounded-lg p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl md:text-2xl font-bold text-green-800", children: competitionCounts.completed }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-green-700", children: "Completed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-100 rounded-lg p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl md:text-2xl font-bold text-red-800", children: competitionCounts.cancelled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-red-700", children: "Cancelled" })
      ] })
    ] })
  ] });
};
const EventStageCompetitions = ({ component, eventDetails }) => {
  const [activeStage, setActiveStage] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("inprogress");
  const { rows: competitions, status: competitionsLoading } = useBackend("/PublicEventJson/GetCompetitions", {
    filter: {
      EventId: eventDetails?.EVId,
      EventCategory: eventDetails?.EventCategory
    },
    doCache: true,
    noGet: !eventDetails?.EVId && !eventDetails?.EventCategory
  });
  const { rows: stages, status: stagesLoading } = useBackend("/PublicEventJson/GetStages", {
    filter: {
      EventCategory: eventDetails?.EventCategory,
      IncludeCompetitions: true
    },
    doCache: true,
    noGet: !eventDetails?.EventCategory
  });
  const getStatusLabel = (status) => {
    switch (status) {
      case 1:
        return "Not Started";
      case 2:
        return "In Progress";
      case 3:
      case 5:
      case 6:
        return "Completed";
      case 4:
        return "Cancelled";
      default:
        return "Unknown";
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case 1:
        return "bg-yellow-100 text-yellow-800";
      case 2:
        return "bg-blue-100 text-blue-800";
      case 3:
      case 5:
      case 6:
        return "bg-green-100 text-green-800";
      case 4:
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const filteredCompetitions = competitions?.filter((comp) => {
    const stageMatch = activeStage === "all" || comp.StageName === activeStage;
    const statusMatch = statusFilter === "all" || statusFilter === "inprogress" && comp.CompetitionStatus === 2 || statusFilter === "completed" && (comp.CompetitionStatus === 3 || comp.CompetitionStatus === 5 || comp.CompetitionStatus === 6) || statusFilter === "notstarted" && comp.CompetitionStatus === 1 || statusFilter === "cancelled" && comp.CompetitionStatus === 4;
    return stageMatch && statusMatch;
  }) || [];
  if (competitionsLoading === "loading" || stagesLoading === "loading") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      component.label && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4 text-center", children: component.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-pulse space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [...Array(3)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 bg-gray-300 rounded w-20" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [...Array(3)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 bg-gray-200 rounded" }, i)) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    component.label && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4 text-center", children: component.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveStage("all"),
            className: classNames("px-3 py-1 text-sm rounded-lg transition-colors", activeStage === "all" ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"),
            children: "All Stages"
          }
        ),
        stages?.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveStage(stage.LevelName),
            className: classNames("px-3 py-1 text-sm rounded-lg transition-colors", activeStage === stage.LevelName ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"),
            children: stage.LevelName
          },
          stage.EventLevelId
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setStatusFilter("inprogress"),
            className: classNames("px-3 py-1 text-xs rounded transition-colors", statusFilter === "inprogress" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700 hover:bg-blue-200"),
            children: "In Progress"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setStatusFilter("completed"),
            className: classNames("px-3 py-1 text-xs rounded transition-colors", statusFilter === "completed" ? "bg-green-600 text-white" : "bg-green-100 text-green-700 hover:bg-green-200"),
            children: "Completed"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setStatusFilter("notstarted"),
            className: classNames("px-3 py-1 text-xs rounded transition-colors", statusFilter === "notstarted" ? "bg-yellow-600 text-white" : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"),
            children: "Not Started"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setStatusFilter("all"),
            className: classNames("px-3 py-1 text-xs rounded transition-colors", statusFilter === "all" ? "bg-gray-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"),
            children: "All Status"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: filteredCompetitions.length > 0 ? filteredCompetitions.map((competition, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-gray-200 rounded-lg p-3 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-gray-900 truncate", children: competition.CompetitionItemTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
          competition.GroupGroupName && `${competition.GroupGroupName} • `,
          competition.GenderGenderTitle && `${competition.GenderGenderTitle} • `,
          "Order: ",
          competition.Order || "N/A"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("inline-flex items-center px-2 py-1 rounded-full text-xs font-medium", getStatusColor(competition.CompetitionStatus)), children: getStatusLabel(competition.CompetitionStatus) }) })
    ] }) }, competition.CompetitionStructureId)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-gray-500 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No competitions found for the selected filters." }) }) })
  ] });
};
const EventLiveStatus = ({ component, eventDetails }) => {
  const { row: liveStatus, status: statusLoading } = useBackend("/PublicEventJson/GetLiveEventStatus", {
    filter: {
      EventId: eventDetails?.EVId,
      EventCategory: eventDetails?.EventCategory
    },
    doCache: true,
    noGet: !eventDetails?.EVId && !eventDetails?.EventCategory
  });
  const { rows: inProgressCompetitions } = useBackend("/PublicEventJson/GetCompetitions", {
    filter: {
      EventId: eventDetails?.EVId,
      EventCategory: eventDetails?.EventCategory
    },
    doCache: true,
    noGet: !eventDetails?.EVId && !eventDetails?.EventCategory
  });
  const liveCompetitions = inProgressCompetitions?.filter((c) => c.CompetitionStatus === 2) || [];
  const isEventLive = liveStatus?.InProgressCount > 0;
  if (statusLoading === "loading") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full text-center", children: [
      component.label && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: component.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center px-4 py-2 rounded-full bg-gray-100 animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-4 bg-gray-300 rounded" }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full text-center", children: [
    component.label && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: component.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames("inline-flex items-center px-4 py-2 rounded-full text-sm font-medium", isEventLive ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"), children: [
      isEventLive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" }),
      isEventLive ? "🔴 LIVE EVENT" : "📺 Event Not Live"
    ] }),
    isEventLive && liveCompetitions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Currently Live:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        liveCompetitions.slice(0, 3).map((comp) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-600 bg-blue-50 px-2 py-1 rounded", children: comp.CompetitionItemTitle }, comp.CompetitionStructureId)),
        liveCompetitions.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500", children: [
          "+",
          liveCompetitions.length - 3,
          " more competitions"
        ] })
      ] })
    ] })
  ] });
};
const EventResultsLink = ({ component, eventDetails }) => {
  const resultUrl = component.url || `/Public/Results?eventId=${eventDetails?.EVId}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full text-center", children: [
    component.label && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: component.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: resultUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            }
          ) }),
          "View Results"
        ]
      }
    )
  ] });
};
export {
  EventCompetitionCount,
  EventLiveStatus,
  EventResultsLink,
  EventStageCompetitions
};
