import { r as reactExports, j as jsxRuntimeExports, u as useBackend, b as getUserData } from "./main-B7w5eCOl.js";
import { V as V2Layout } from "./v2Layout-CIEPa7M9.js";
import { a as useNavigate, b as useSmartNavigate } from "./navigationUtils-BZC1EMRn.js";
import { F as ForwardRef$3, a as ForwardRef$4, b as ForwardRef$8 } from "./ClockIcon-CzpYz8Es.js";
import { F as ForwardRef$5 } from "./ExclamationTriangleIcon-D83nSzlE.js";
import { F as ForwardRef$6 } from "./CheckCircleIcon-BMZ-5cUh.js";
import { F as ForwardRef$7 } from "./ArrowPathIcon-BKnvswe3.js";
import "./v2Sidebar-iWgJGo1Y.js";
import "./Bars3Icon-CVFng2-4.js";
import "./ChevronDownIcon-DrbBxP_V.js";
import "./CheckCircleIcon-B36U4EaE.js";
import "./GlobeAltIcon-kUk_6aZB.js";
import "./ArrowPathIcon-CrJmYjUD.js";
import "./EyeIcon-B2acEKRI.js";
import "./UserCircleIcon-Bn6O48dU.js";
import "./XMarkIcon-DzyB_jak.js";
import "./chunk-27-Cb6oRF49.js";
import "./emotion-hash.esm-D28shAk1.js";
import "./ChevronRightIcon-QSnXtBoc.js";
function ArrowTrendingDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$2 = /* @__PURE__ */ reactExports.forwardRef(ArrowTrendingDownIcon);
function ArrowTrendingUpIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(ArrowTrendingUpIcon);
function MinusIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(MinusIcon);
const StatsCard = ({
  title,
  count,
  icon,
  color = "bg-blue-500",
  isLoading = false,
  trend = "stable",
  trendValue = 0,
  onClick = null
}) => {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-4 w-4 text-green-500" });
      case "down":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4 text-red-500" });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-4 w-4 text-gray-400" });
    }
  };
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6 animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-gray-200 rounded-lg mr-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-gray-200 rounded" })
      ] })
    ] }) });
  }
  const CardContent = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6 hover:shadow-md transition-shadow duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-12 w-12 ${color} rounded-lg flex items-center justify-center mr-4`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xl", children: icon }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-onSurfaceVariant mb-1", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-onSurface", children: count?.toLocaleString() || 0 })
      ] })
    ] }),
    trendValue > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1", children: [
      getTrendIcon(),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-sm font-medium ${getTrendColor()}`, children: [
        trendValue,
        "%"
      ] })
    ] })
  ] }) });
  if (onClick) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: "w-full text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, {}) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, {});
};
const DashboardStats = ({ user }) => {
  const apiEndpoints = reactExports.useMemo(() => {
    const baseFilter = {
      EventCategory: user?.EventCategory,
      Event: user?.Event
    };
    return [
      {
        url: "/EventJson/Get",
        title: "Total Events",
        icon: "🎯",
        color: "bg-blue-500",
        filter: { CreatedBy: user?.UId },
        key: "events"
      },
      {
        url: "/UsersRolesJson/Get",
        title: "Total Participants",
        icon: "👥",
        color: "bg-green-500",
        filter: { ...baseFilter, Role: 2 },
        key: "participants"
      },
      {
        url: "/CompetitionStructureJson/Get",
        title: "Competitions",
        icon: "🏆",
        color: "bg-yellow-500",
        filter: baseFilter,
        key: "competitions"
      },
      {
        url: "/UsersRolesJson/Get",
        title: "Judges",
        icon: "⚖️",
        color: "bg-purple-500",
        filter: { ...baseFilter, Role: 6 },
        key: "judges"
      },
      {
        url: "/CompetitionParticipantsTeamsJson/Get",
        title: "Teams",
        icon: "👥",
        color: "bg-indigo-500",
        filter: baseFilter,
        key: "teams"
      },
      {
        url: "/AgewiseGroupsJson/Get",
        title: "Age Groups",
        icon: "📊",
        color: "bg-pink-500",
        filter: baseFilter,
        key: "ageGroups"
      },
      {
        url: "/EventStagesJson/Get",
        title: "Event Stages",
        icon: "🎭",
        color: "bg-cyan-500",
        filter: baseFilter,
        key: "stages"
      },
      {
        url: "/ResultReportWithCandidateJson/Get",
        title: "Results Published",
        icon: "📋",
        color: "bg-emerald-500",
        filter: baseFilter,
        key: "results"
      }
    ];
  }, [user]);
  const statsData = apiEndpoints.map((endpoint) => {
    const { rows, status } = useBackend(endpoint.url, {
      select: "1",
      // Minimal select for counting
      filter: endpoint.filter,
      limit: 1,
      offset: 0
    });
    return {
      ...endpoint,
      count: rows?.length || 0,
      totalCount: rows?.totalCount || 0,
      isLoading: status === "fetching"
    };
  });
  const isAnyLoading = statsData.some((stat) => stat.isLoading);
  if (isAnyLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: Array.from({ length: 8 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6 animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-surface rounded-lg mr-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-surface rounded mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-surface rounded" })
      ] })
    ] }) }, index)) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: statsData.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    StatsCard,
    {
      title: stat.title,
      count: stat.totalCount,
      icon: stat.icon,
      color: stat.color,
      isLoading: stat.isLoading
    },
    stat.key
  )) });
};
const QuickActions = ({ user, onActionClick }) => {
  const getRoleBasedActions = reactExports.useMemo(() => {
    const userRole = user?.Role;
    const actions = {
      "1": [
        // Event Manager
        {
          title: "Create Event",
          path: "/SetUp/RenderManageEvent",
          description: "Set up a new competition event",
          icon: "🎯",
          color: "bg-blue-500",
          category: "Events"
        },
        {
          title: "Competition Structure",
          path: "/SetUp/RenderOpenAiCompetitionStructure",
          description: "AI-powered competition setup",
          icon: "🤖",
          color: "bg-purple-500",
          category: "Setup"
        },
        {
          title: "User Management",
          path: "/Setup/RenderUserRoles",
          description: "Manage user roles and permissions",
          icon: "👥",
          color: "bg-green-500",
          category: "Users"
        },
        {
          title: "Event Analytics",
          path: "/Analytics/Events",
          description: "View event performance metrics",
          icon: "📊",
          color: "bg-yellow-500",
          category: "Analytics"
        }
      ],
      "2": [
        // Coordinator
        {
          title: "Manage Participants",
          path: "/Coordinator/RenderCandidatesDetailedList",
          description: "View and manage all participants",
          icon: "👤",
          color: "bg-blue-500",
          category: "Participants"
        },
        {
          title: "Competition Results",
          path: "/Coordinator/RenderResultsStatus",
          description: "Manage competition results",
          icon: "🏆",
          color: "bg-yellow-500",
          category: "Results"
        },
        {
          title: "Live Results",
          path: "/Coordinator/RenderLiveResultPresentation",
          description: "Present live competition results",
          icon: "📺",
          color: "bg-red-500",
          category: "Live"
        },
        {
          title: "Team Management",
          path: "/Coordinator/ManageTeams",
          description: "Organize teams and assignments",
          icon: "👥",
          color: "bg-green-500",
          category: "Teams"
        },
        {
          title: "Judge Assignment",
          path: "/Coordinator/Judges",
          description: "Assign judges to competitions",
          icon: "⚖️",
          color: "bg-purple-500",
          category: "Judges"
        },
        {
          title: "Schedule Management",
          path: "/CompetitionSchedule/Manage",
          description: "Manage event schedules",
          icon: "📅",
          color: "bg-indigo-500",
          category: "Schedule"
        }
      ],
      "5": [
        // Judge
        {
          title: "Score Card",
          path: "/Coordinator/RenderScoreCardV2",
          description: "Judge competitions and submit scores",
          icon: "📝",
          color: "bg-green-500",
          category: "Judging"
        },
        {
          title: "My Assignments",
          path: "/Judge/Assignments",
          description: "View judging assignments",
          icon: "📋",
          color: "bg-blue-500",
          category: "Schedule"
        },
        {
          title: "Score History",
          path: "/Judge/ScoreHistory",
          description: "Review previous scores",
          icon: "📊",
          color: "bg-purple-500",
          category: "History"
        }
      ],
      "6": [
        // SubCoordinator
        {
          title: "Participant Management",
          path: "/Coordinator/ManageBulkParticipants",
          description: "Manage event participants",
          icon: "👥",
          color: "bg-blue-500",
          category: "Participants"
        },
        {
          title: "Team Coordination",
          path: "/Coordinator/ManageTeams",
          description: "Coordinate team activities",
          icon: "🤝",
          color: "bg-green-500",
          category: "Teams"
        }
      ]
    };
    return actions[userRole] || [
      {
        title: "Dashboard",
        path: "/Home/Index",
        description: "Main dashboard overview",
        icon: "🏠",
        color: "bg-gray-500",
        category: "General"
      },
      {
        title: "Profile Settings",
        path: "/Profile/Settings",
        description: "Update your profile",
        icon: "⚙️",
        color: "bg-blue-500",
        category: "Settings"
      }
    ];
  }, [user?.Role]);
  const actionsByCategory = reactExports.useMemo(() => {
    const grouped = {};
    getRoleBasedActions.forEach((action) => {
      if (!grouped[action.category]) {
        grouped[action.category] = [];
      }
      grouped[action.category].push(action);
    });
    return grouped;
  }, [getRoleBasedActions]);
  const handleActionClick = (action) => {
    if (onActionClick) {
      onActionClick(action.path);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6 mb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-onSurface", children: "Quick Actions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-onSurfaceVariant", children: [
        "Role: ",
        user?.RoleTitle || "User"
      ] })
    ] }),
    Object.entries(actionsByCategory).map(([category, actions]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 last:mb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-onSurfaceVariant mb-3 uppercase tracking-wide", children: category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: actions.map((action, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "border border-border rounded-lg p-4 hover:shadow-md hover:border-primary/20 transition-all duration-200 cursor-pointer group",
          onClick: () => handleActionClick(action),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-shrink-0 w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-lg", children: action.icon }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-onSurface mb-1 group-hover:text-primary transition-colors duration-200", children: action.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-2", children: action.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center text-xs text-primary hover:text-primaryHover font-medium", children: "Open" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary group-hover:translate-x-1 transition-transform duration-200", children: "→" })
              ] })
            ] })
          ] })
        },
        index
      )) })
    ] }, category))
  ] });
};
const RecentActivity = ({ user }) => {
  const { rows: recentResults, status: resultsStatus } = useBackend("/ResultReportWithCandidateJson/Get", {
    select: "CompetitionStructureId,CandidateName,CompetitionItemTitle,ResultDateTime,TotalMark",
    filter: {
      EventCategory: user?.EventCategory,
      Event: user?.Event
    },
    sort: "ResultDateTime desc",
    limit: 5,
    offset: 0
  });
  const { rows: recentParticipants, status: participantsStatus } = useBackend("/UsersRolesJson/Get", {
    select: "UserName,Email,RoleTitle,CreatedDateTime",
    filter: {
      EventCategory: user?.EventCategory,
      Event: user?.Event,
      Role: 2
      // Participants
    },
    sort: "CreatedDateTime desc",
    limit: 3,
    offset: 0
  });
  const { rows: recentSchedule, status: scheduleStatus } = useBackend("/CompetitionScheduleJson/Get", {
    select: "CompetitionItemTitle,StageName,StartTime,UpdatedDateTime",
    filter: {
      EventCategory: user?.EventCategory,
      Event: user?.Event
    },
    sort: "UpdatedDateTime desc",
    limit: 3,
    offset: 0
  });
  const isLoading = resultsStatus === "fetching" || participantsStatus === "fetching" || scheduleStatus === "fetching";
  const formatDateTime = (dateTime) => {
    if (!dateTime) return "Recently";
    const date = new Date(dateTime);
    const now = /* @__PURE__ */ new Date();
    const diffInMinutes = Math.floor((now - date) / (1e3 * 60));
    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };
  const getActivityIcon = (type) => {
    switch (type) {
      case "result":
        return { icon: "🏆", color: "bg-yellow-500" };
      case "participant":
        return { icon: "👤", color: "bg-green-500" };
      case "schedule":
        return { icon: "📅", color: "bg-blue-500" };
      default:
        return { icon: "ℹ️", color: "bg-gray-500" };
    }
  };
  const allActivities = [
    ...(recentResults || []).map((result) => ({
      type: "result",
      title: `Result published for ${result.CompetitionItemTitle}`,
      subtitle: `${result.CandidateName} scored ${result.TotalMark}`,
      time: result.ResultDateTime,
      ...getActivityIcon("result")
    })),
    ...(recentParticipants || []).map((participant) => ({
      type: "participant",
      title: `New participant registered`,
      subtitle: `${participant.UserName} (${participant.Email})`,
      time: participant.CreatedDateTime,
      ...getActivityIcon("participant")
    })),
    ...(recentSchedule || []).map((schedule) => ({
      type: "schedule",
      title: `Schedule updated for ${schedule.CompetitionItemTitle}`,
      subtitle: `${schedule.StageName} - ${schedule.StartTime}`,
      time: schedule.UpdatedDateTime,
      ...getActivityIcon("schedule")
    }))
  ].sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 8);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-onSurface mb-4", children: "Recent Activity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 p-3 rounded-lg bg-gray-50 animate-pulse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 bg-gray-300 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-300 rounded mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-gray-300 rounded w-3/4" })
        ] })
      ] }, index)) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-onSurface mb-4", children: "Recent Activity" }),
    allActivities.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-4xl mb-4", children: "📋" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: "No recent activity found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 mt-1", children: "Activities will appear here as they happen" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: allActivities.map((activity, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-150", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-8 w-8 ${activity.color} rounded-full flex items-center justify-center flex-shrink-0`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm", children: activity.icon }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-onSurface truncate", children: activity.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-onSurfaceVariant truncate", children: activity.subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: formatDateTime(activity.time) }) })
    ] }, index)) }),
    allActivities.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-sm text-primary hover:text-primaryHover font-medium", children: "View all activities" }) })
  ] });
};
const CompetitionProgress = ({ user }) => {
  const { rows: competitions, status: competitionsStatus } = useBackend("/CompetitionStructureJson/Get", {
    select: "CompetitionStructureId,CompetitionItemTitle,CompetitionStatus,ParticipantsCount,Order",
    filter: {
      EventCategory: user?.EventCategory,
      Event: user?.Event
    },
    sort: "Order asc",
    limit: 10,
    offset: 0
  });
  const { rows: results, status: resultsStatus } = useBackend("/ResultReportWithCandidateJson/Get", {
    select: "CompetitionStructureId",
    filter: {
      EventCategory: user?.EventCategory,
      Event: user?.Event
    },
    limit: 1e3,
    offset: 0
  });
  const isLoading = competitionsStatus === "fetching" || resultsStatus === "fetching";
  const getProgressData = () => {
    if (!competitions || !results) return [];
    const resultCounts = {};
    results.forEach((result) => {
      const compId = result.CompetitionStructureId;
      resultCounts[compId] = (resultCounts[compId] || 0) + 1;
    });
    return competitions.map((comp) => {
      const completedResults = resultCounts[comp.CompetitionStructureId] || 0;
      const totalParticipants = comp.ParticipantsCount || 0;
      const progress = totalParticipants > 0 ? completedResults / totalParticipants * 100 : 0;
      return {
        ...comp,
        completedResults,
        totalParticipants,
        progress: Math.min(progress, 100)
      };
    });
  };
  const getStatusColor = (status) => {
    const statusString = typeof status === "string" ? status.toLowerCase() : String(status || "").toLowerCase();
    switch (statusString) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "ongoing":
        return "text-blue-600 bg-blue-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "cancelled":
        return "text-red-600 bg-red-100";
      default:
        return "text-onSurfaceVariant bg-surface";
    }
  };
  const getProgressColor = (progress) => {
    if (progress >= 100) return "bg-green-500";
    if (progress >= 75) return "bg-blue-500";
    if (progress >= 50) return "bg-yellow-500";
    if (progress >= 25) return "bg-orange-500";
    return "bg-red-500";
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-onSurface mb-4", children: "Competition Progress" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-pulse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded w-1/3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-gray-200 rounded w-16" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2" })
      ] }, index)) })
    ] });
  }
  const progressData = getProgressData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-onSurface mb-4", children: "Competition Progress" }),
    progressData.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-onSurfaceVariant text-4xl mb-4", children: "🏆" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: "No competitions found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant mt-1", children: "Create competitions to track progress" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: progressData.map((competition, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-gray-100 pb-4 last:border-b-0 last:pb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-onSurfaceVariant font-medium", children: [
            "#",
            competition.Order
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-onSurface truncate", children: competition.CompetitionItemTitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(competition.CompetitionStatus)}`, children: competition.CompetitionStatus || "Pending" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-onSurfaceVariant", children: [
            competition.completedResults,
            "/",
            competition.totalParticipants
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `h-2 rounded-full transition-all duration-300 ${getProgressColor(competition.progress)}`,
          style: { width: `${competition.progress}%` }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-onSurfaceVariant", children: [
          competition.totalParticipants,
          " participants"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-onSurfaceVariant", children: [
          competition.progress.toFixed(1),
          "% complete"
        ] })
      ] })
    ] }, competition.CompetitionStructureId)) }),
    progressData.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-sm text-primary hover:text-primaryHover font-medium", children: "View all competitions" }) })
  ] });
};
const EventOverview = ({ user }) => {
  const eventInfo = {
    name: user?.EventName || "No Event Selected",
    category: user?.EventCategory || "N/A",
    organization: user?.OrganizationName || "N/A",
    organizationLevel: user?.OrganizationLevel || "N/A",
    userRole: user?.RoleTitle || "User",
    eventLogo: user?.EventLogo || user?.OrganizationLogo
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6 mb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-onSurface mb-4", children: "Event Overview" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
      eventInfo.eventLogo && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: eventInfo.eventLogo,
          alt: "Event Logo",
          className: "w-16 h-16 rounded-lg object-cover border border-border",
          onError: (e) => {
            e.target.style.display = "none";
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurfaceVariant mb-1", children: "Event Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurface bg-surface px-3 py-2 rounded-md", children: eventInfo.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurfaceVariant mb-1", children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurface bg-surface px-3 py-2 rounded-md", children: eventInfo.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurfaceVariant mb-1", children: "Organization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurface bg-surface px-3 py-2 rounded-md", children: eventInfo.organization })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurfaceVariant mb-1", children: "Your Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurface bg-surface px-3 py-2 rounded-md", children: eventInfo.userRole })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: "🎯" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 mt-1", children: "Active Event" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-600", children: "✅" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 mt-1", children: "Verified User" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: "🔒" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 mt-1", children: "Secure Access" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-purple-600", children: "📊" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 mt-1", children: "Real-time Data" })
      ] })
    ] }) })
  ] });
};
const UpcomingSchedule = ({ user }) => {
  const { rows: upcomingEvents, status: eventsStatus } = useBackend("/CompetitionScheduleJson/Get", {
    select: "CompetitionScheduleId,CompetitionItemTitle,StageName,StartTime,EndTime,Location",
    filter: {
      EventCategory: user?.EventCategory,
      Event: user?.Event
    },
    sort: "StartTime asc",
    limit: 6,
    offset: 0
  });
  const isLoading = eventsStatus === "fetching";
  const formatTime = (timeString) => {
    if (!timeString) return "TBD";
    try {
      const time = /* @__PURE__ */ new Date(`2000-01-01T${timeString}`);
      return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch {
      return timeString;
    }
  };
  const formatDate = (dateTime) => {
    if (!dateTime) return "TBD";
    try {
      const date = new Date(dateTime);
      return date.toLocaleDateString([], {
        month: "short",
        day: "numeric",
        weekday: "short"
      });
    } catch {
      return "TBD";
    }
  };
  const getTimeStatus = (startTime, endTime) => {
    const now = /* @__PURE__ */ new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);
    if (now >= start && now <= end) {
      return { status: "ongoing", color: "bg-green-500", text: "Live" };
    } else if (now < start) {
      return { status: "upcoming", color: "bg-blue-500", text: "Upcoming" };
    } else {
      return { status: "completed", color: "bg-gray-500", text: "Completed" };
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-onSurface mb-4", children: "Upcoming Schedule" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: Array.from({ length: 4 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 p-3 rounded-lg bg-gray-50 animate-pulse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 bg-gray-300 rounded-lg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-300 rounded mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-gray-300 rounded w-3/4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-16 bg-gray-300 rounded" })
      ] }, index)) })
    ] });
  }
  const processedEvents = (upcomingEvents || []).map((event) => ({
    ...event,
    timeStatus: getTimeStatus(event.StartTime, event.EndTime)
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-onSurface mb-4", children: "Upcoming Schedule" }),
    processedEvents.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-4xl mb-4", children: "📅" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "No scheduled events" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 mt-1", children: "Schedule will appear here once created" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: processedEvents.map((event, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-150",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-onSurface", children: formatTime(event.StartTime) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-onSurfaceVariant", children: formatDate(event.StartTime) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-onSurface truncate", children: event.CompetitionItemTitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500", children: event.StageName }),
              event.Location && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500", children: event.Location })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${event.timeStatus.color}`, children: event.timeStatus.text }) })
        ]
      },
      event.CompetitionScheduleId || index
    )) }),
    processedEvents.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-sm text-primary hover:text-primaryHover font-medium", children: "View full schedule" }) })
  ] });
};
const ResultsManagement = ({ user }) => {
  const [expandedCompetitions, setExpandedCompetitions] = reactExports.useState(/* @__PURE__ */ new Set());
  const {
    rows: competitions,
    status: competitionsStatus
  } = useBackend("/CompetitionStructureJson/Get", {
    select: "CompetitionStructureId,Order,CompetitionItemTitle,CompetitionStatus,ParticipantsCount",
    filter: {
      EventCategory: user?.EventCategory,
      Event: user?.Event
    },
    limit: 20,
    offset: 0,
    sort: "Order asc",
    updateUrl: "/CompetitionStructureJson/Save"
  });
  const {
    rows: judgesData,
    status: judgesStatus
  } = useBackend("/JudgesAllotmentPlusUsersRolesJson/Get", {
    select: "AllotementId,JudgeUserName,ScoreStatus,Competition,Judge",
    filter: {
      EventCategory: user?.EventCategory,
      Event: user?.Event
    },
    limit: 100,
    offset: 0
  });
  const isLoading = competitionsStatus === "fetching" || judgesStatus === "fetching";
  const getStatusInfo = (status) => {
    const statusMap = {
      3: { label: "Not Started", color: "bg-gray-100 text-gray-800", icon: ForwardRef$8 },
      5: { label: "Yet To Begin", color: "bg-blue-100 text-blue-800", icon: ForwardRef$8 },
      4: { label: "On Progress", color: "bg-yellow-100 text-yellow-800", icon: ForwardRef$7 },
      6: { label: "Finished", color: "bg-purple-100 text-purple-800", icon: ForwardRef$6 },
      2: { label: "On Review", color: "bg-indigo-100 text-indigo-800", icon: ForwardRef$7 },
      1: { label: "Results Published", color: "bg-green-100 text-green-800", icon: ForwardRef$6 },
      7: { label: "Cancelled", color: "bg-red-100 text-red-800", icon: ForwardRef$5 }
    };
    return statusMap[status] || { label: `Status ${status}`, color: "bg-gray-100 text-gray-800", icon: ForwardRef$8 };
  };
  const toggleExpanded = (competitionId) => {
    const newExpanded = new Set(expandedCompetitions);
    if (newExpanded.has(competitionId)) {
      newExpanded.delete(competitionId);
    } else {
      newExpanded.add(competitionId);
    }
    setExpandedCompetitions(newExpanded);
  };
  const getJudgesForCompetition = (competitionId) => {
    if (!judgesData) return [];
    return judgesData.filter((judge) => judge.Competition === competitionId);
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded mb-4 animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 bg-gray-200 rounded animate-pulse" }, i)) })
    ] });
  }
  const competitionsList = competitions || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-onSurface mb-4", children: "Competition Status Overview" }),
    competitionsList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-center py-8", children: "No competitions found for this event." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      competitionsList.slice(0, 8).map((competition) => {
        const statusInfo = getStatusInfo(competition.CompetitionStatus);
        const StatusIcon = statusInfo.icon;
        const judges = getJudgesForCompetition(competition.CompetitionStructureId);
        const isExpanded = expandedCompetitions.has(competition.CompetitionStructureId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "p-4 cursor-pointer hover:bg-surface",
              onClick: () => toggleExpanded(competition.CompetitionStructureId),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1", children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-4 w-4 text-gray-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-4 w-4 text-gray-500" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-onSurface", children: competition.CompetitionItemTitle }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
                      "Order: ",
                      competition.Order,
                      " • Participants: ",
                      competition.ParticipantsCount || 0
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { className: "h-4 w-4 text-gray-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusInfo.color}`, children: statusInfo.label })
                ] })
              ] })
            }
          ),
          isExpanded && judges.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border bg-surface p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-xs font-medium text-onSurfaceVariant mb-2", children: "Assigned Judges" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: judges.map((judge) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: judge.JudgeUserName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-xs ${judge.ScoreStatus === 1 ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`, children: judge.ScoreStatus === 1 ? "Completed" : "Pending" })
            ] }, judge.AllotementId)) })
          ] })
        ] }, competition.CompetitionStructureId);
      }),
      competitionsList.length > 8 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500", children: [
        "Showing 8 of ",
        competitionsList.length,
        " competitions"
      ] }) })
    ] })
  ] });
};
const HomePage = () => {
  const navigate = useNavigate();
  const smartNavigate = useSmartNavigate(navigate);
  const { user, token } = getUserData() || {};
  const handleActionClick = (path) => {
    smartNavigate(path);
  };
  const getRoleBasedTitle = () => {
    const userRole = user?.Role;
    switch (userRole) {
      case 9:
        return "Event Manager Dashboard";
      case 5:
        return "Coordinator Dashboard";
      case 2:
        return "Participant Dashboard";
      case 6:
        return "Sub-Coordinator Dashboard";
      case 7:
        return "Judge Dashboard";
      default:
        return "eTalenter Dashboard";
    }
  };
  const renderRoleBasedContent = () => {
    const userRole = user?.Role;
    if (!user || userRole === 9) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-onSurface mb-6", children: "For Enquiries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:hello@talenter.in",
              className: "inline-flex items-center text-lg text-primary hover:text-primaryHover",
              children: "📧 hello@talenter.in"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "tel:+918138966310",
              className: "inline-flex items-center text-lg text-primary hover:text-primaryHover",
              children: "📞 +91 8138 966 310"
            }
          )
        ] })
      ] });
    }
    switch (userRole) {
      case 2:
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(EventOverview, { user }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-onSurface mb-4", children: "Participant Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: "Welcome to your participant portal. Here you can manage your competition participation." })
          ] })
        ] });
      case 5:
      // Coordinator role
      case 6:
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(EventOverview, { user }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardStats, { user }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xl:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuickActions, { user, onActionClick: handleActionClick }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xl:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UpcomingSchedule, { user }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CompetitionProgress, { user }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResultsManagement, { user })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RecentActivity, { user }) })
        ] });
      case 7:
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(EventOverview, { user }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-onSurface mb-4", children: "Judge Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: "Access your scoring assignments and competition management tools." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleActionClick("/Judge/ScoreCard"),
                  className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  children: "⚖️ Score Card"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleActionClick("/Judge/MyAssignments"),
                  className: "inline-flex items-center gap-x-2 rounded-md bg-surface px-6 py-2.5 text-sm font-semibold text-onSurface shadow-sm hover:bg-surfaceHover",
                  children: "📋 My Assignments"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RecentActivity, { user })
        ] });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(EventOverview, { user }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-onSurface mb-4", children: "Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: "Welcome to eTalenter platform." })
          ] })
        ] });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(V2Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-onSurface mb-2", children: getRoleBasedTitle() }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-onSurfaceVariant", children: [
        "Welcome back, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: user?.UserName || user?.Name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-onSurfaceVariant ml-2", children: [
          "(",
          user?.RoleTitle || "User",
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant mt-1", children: "Managing competition excellence with comprehensive insights" })
    ] }),
    renderRoleBasedContent(),
    (user?.Role === 5 || user?.Role === 6) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 bg-primaryContainer rounded-lg p-6 border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-onSurface mb-4", children: "eTalenter Platform Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-surfaceCard rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "🎯" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-onSurface", children: "Event Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-onSurfaceVariant mt-1", children: "Complete event lifecycle" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-surfaceCard rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "👥" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-onSurface", children: "Participant System" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-onSurfaceVariant mt-1", children: "Registration & management" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-surfaceCard rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "⚖️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-onSurface", children: "Judging Platform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-onSurfaceVariant mt-1", children: "Real-time scoring" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-surfaceCard rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "📊" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-onSurface", children: "Analytics & Reports" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-onSurfaceVariant mt-1", children: "Comprehensive insights" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-surfaceCard rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "🏆" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-onSurface", children: "Result Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-onSurfaceVariant mt-1", children: "Automated processing" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-surfaceCard rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "📅" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-onSurface", children: "Schedule Control" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-onSurfaceVariant mt-1", children: "Timeline optimization" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-surfaceCard rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "🔒" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-onSurface", children: "Security & Access" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-onSurfaceVariant mt-1", children: "Role-based permissions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-surfaceCard rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "📱" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-onSurface", children: "Mobile Ready" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-onSurfaceVariant mt-1", children: "Cross-platform support" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 text-center border-t border-border pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "Powered by eTalenter Platform - Revolutionizing Competition Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center space-x-4 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center text-xs text-green-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mr-2" }),
          "System Operational"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-onSurfaceVariant", children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-onSurfaceVariant", children: "Version 2.0 - Enhanced Performance" })
      ] })
    ] })
  ] }) });
};
export {
  HomePage as default
};
