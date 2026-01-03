import { r as reactExports, b as getUserData, d as getAvailablePathsForRole, j as jsxRuntimeExports, A as ROLES, c as ROLE_NAMES } from "./main-B7w5eCOl.js";
import { a as useNavigate, b as useSmartNavigate } from "./navigationUtils-BZC1EMRn.js";
import { F as ForwardRef } from "./ExclamationTriangleIcon-D83nSzlE.js";
import { F as ForwardRef$1 } from "./HomeIcon-BEqKlpDF.js";
const NotFoundPage = () => {
  const navigate = useNavigate();
  const smartNavigate = useSmartNavigate(navigate);
  const [currentTime, setCurrentTime] = reactExports.useState(/* @__PURE__ */ new Date());
  const { user, token } = getUserData() || {};
  reactExports.useEffect(() => {
    const userRole = user?.Role;
    try {
      const availablePaths = getAvailablePathsForRole(userRole, user);
    } catch (error) {
      console.error("NotFound - Error getting available routes:", error);
    }
  }, []);
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(/* @__PURE__ */ new Date());
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  const handleGoHome = () => {
    if (user && token) {
      smartNavigate("/Home/Index");
    } else {
      smartNavigate("/Account/Login");
    }
  };
  const getRoleDisplayName = (roleId) => {
    return ROLE_NAMES[roleId] || "Unknown Role";
  };
  const getHomeSuggestions = () => {
    if (!user) {
      return [
        { name: "Login", path: "/Account/Login", description: "Sign in to your account" },
        { name: "Public Events", path: "/Public/ViewEvent", description: "Browse available events" },
        { name: "Register", path: "/Public/Register", description: "Create a new account" }
      ];
    }
    const suggestions = [{ name: "Dashboard", path: "/Home/Index", description: "Your main dashboard" }];
    switch (user.Role) {
      case ROLES.COORDINATOR:
      case ROLES.SUPER_ADMIN:
        suggestions.push(
          { name: "Manage Results", path: "/Coordinator/RenderResultsStatus", description: "View and manage competition results" },
          { name: "Score Cards", path: "/Coordinator/RenderScoreCardV2", description: "Access scoring interface" },
          { name: "Participants", path: "/Coordinator/RenderCandidatesDetailedList", description: "Manage participants" }
        );
        break;
      case ROLES.JUDGE:
        suggestions.push({ name: "Score Card", path: "/Judge/ScoreCard", description: "Access your scoring interface" });
        break;
      case ROLES.USER:
        suggestions.push(
          { name: "Manage Events", path: "/SetUp/RenderManageEvent", description: "Create and manage events" },
          { name: "User Roles", path: "/Setup/RenderUserRoles", description: "Manage user permissions" }
        );
        break;
      case ROLES.SUB_COORDINATOR:
        suggestions.push(
          { name: "Participants", path: "/Coordinator/RenderCandidatesDetailedList", description: "Manage participants" },
          { name: "Bulk Management", path: "/SetUp/IframeRender", description: "Bulk participant operations" }
        );
        break;
      case ROLES.CANDIDATE:
      case ROLES.GUARDIAN:
        suggestions.push(
          { name: "Registration", path: "/Home/CandidateParticipation", description: "Manage registrations" },
          { name: "View Events", path: "/Public/RenderViewEvent", description: "Browse events" }
        );
        break;
    }
    return suggestions;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl w-full text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 drop-shadow-lg", children: "404" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 text-9xl font-bold text-red-100 -z-10 transform translate-x-1 translate-y-1", children: "404" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-16 w-16 text-orange-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-onSurface mb-2", children: "Page Not Found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md text-onSurfaceVariant mb-8 max-w-md mx-auto", children: "The page you're looking for doesn't exist or has been moved. Let's get you back on track." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleGoHome,
          className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-5 w-5" }),
            "Go to ",
            user ? "Dashboard" : "Login"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-onSurface mb-4", children: "Suggested Pages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: getHomeSuggestions().map((suggestion, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => smartNavigate(suggestion.path),
            className: "cursor-pointer bg-white p-4 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-onSurface mb-1", children: suggestion.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: suggestion.description })
            ]
          },
          index
        )) })
      ] })
    ] }) }),
    user && token && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border-t border-gray-200 px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-primary to-primaryHover rounded-lg p-4 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium opacity-90 mb-1", children: "Current User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-lg", children: user.Name || user.Email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-90", children: user.Email }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20", children: [
            "ID: ",
            user.UId
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium opacity-90 mb-1", children: "Current Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-lg", children: getRoleDisplayName(user.Role) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm opacity-90", children: [
            "Role ID: ",
            user.Role
          ] }),
          user.UserRoleId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20", children: [
            "User Role: ",
            user.UserRoleId
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium opacity-90 mb-1", children: "Current Event" }),
          user.EventName ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-lg", children: user.EventName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm opacity-90", children: [
              "Event ID: ",
              user.Event
            ] }),
            user.EventCategory && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20", children: [
              "Category: ",
              user.EventCategory
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-lg", children: "No Event" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-90", children: "Not assigned to an event" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium opacity-90 mb-1", children: "System Info" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-lg", children: "eTalenter v2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-90", children: currentTime.toLocaleTimeString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20", children: "Online" })
        ] })
      ] }),
      user.EventName && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 bg-surface rounded-lg p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm", children: [
        user.StartDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-onSurfaceVariant", children: "Start Date:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: new Date(user.StartDate).toLocaleDateString() })
        ] }),
        user.EndDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-onSurfaceVariant", children: "End Date:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: new Date(user.EndDate).toLocaleDateString() })
        ] }),
        user.OrganizationName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-onSurfaceVariant", children: "Organization:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: user.OrganizationName })
        ] }),
        user.EventCreator && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-onSurfaceVariant", children: "Creator:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: user.EventCreator === user.UId ? "You" : `User ${user.EventCreator}` })
        ] })
      ] }) })
    ] }) }),
    (!user || !token) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface border-t border-border px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant mb-4", children: "You're browsing as a guest. Sign in to access personalized features." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => smartNavigate("/Account/Login"),
            className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryHover",
            children: "Sign In"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => smartNavigate("/Public/Register"),
            className: "inline-flex items-center gap-x-2 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-300",
            children: "Register"
          }
        )
      ] })
    ] }) })
  ] });
};
export {
  NotFoundPage as default
};
