import { r as reactExports, b as getUserData, c as ROLE_NAMES, d as getAvailablePathsForRole, j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
import "./v2Sidebar-iWgJGo1Y.js";
import { u as useRouteError } from "./navigationUtils-BZC1EMRn.js";
import { F as ForwardRef$2 } from "./ArrowPathIcon-BKnvswe3.js";
import { F as ForwardRef$3 } from "./HomeIcon-BEqKlpDF.js";
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
function ArrowLeftIcon({
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
    d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(ArrowLeftIcon);
function ExclamationCircleIcon({
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
    d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(ExclamationCircleIcon);
const ErrorPage = () => {
  const error = useRouteError();
  const [currentTime, setCurrentTime] = reactExports.useState(/* @__PURE__ */ new Date());
  const [showDetails, setShowDetails] = reactExports.useState(false);
  const { user, token } = getUserData() || {};
  reactExports.useEffect(() => {
    try {
      const userRole = user?.Role;
      console.error("=== ERROR PAGE - DEBUG INFO ===");
      console.error("Current URL:", window.location.pathname);
      console.error("User Role:", userRole, "(" + (ROLE_NAMES[userRole] || "Unknown") + ")");
      console.error("User ID:", user?.UId);
      console.error("Has Token:", !!token);
      console.error("Error:", error);
      console.error("Error Message:", error?.message);
      console.error("Error Status:", error?.status);
      if (userRole) {
        try {
          const availablePaths = getAvailablePathsForRole(userRole, user);
        } catch (routeError) {
          console.warn("Could not get available routes:", routeError.message);
        }
      }
      console.error("=================================");
    } catch (loggingError) {
      console.error("Error in error page logging:", loggingError.message);
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
      window.location.href = "/v2/Home/Index";
    } else {
      window.location.href = "/v2/Account/Login";
    }
  };
  const handleGoBack = () => {
    window.history.back();
  };
  const handleReload = () => {
    window.location.reload();
  };
  const getRoleDisplayName = (roleId) => {
    return ROLE_NAMES[roleId] || "Unknown Role";
  };
  const getErrorMessage = () => {
    if (error?.message) {
      return error.message;
    }
    if (error?.statusText) {
      return error.statusText;
    }
    return "An unexpected error occurred";
  };
  const getErrorSuggestions = () => {
    const suggestions = [
      { name: "Reload Page", action: handleReload, description: "Refresh and try again", icon: ForwardRef$2 },
      { name: "Go Home", action: handleGoHome, description: user ? "Return to dashboard" : "Go to login", icon: ForwardRef$3 },
      { name: "Go Back", action: handleGoBack, description: "Return to previous page", icon: ForwardRef$1 }
    ];
    return suggestions;
  };
  let errorContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl w-full text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-32 w-32 text-red-500 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 h-32 w-32 text-red-200 -z-10 transform translate-x-1 translate-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-32 w-32" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-4", children: "Unexpected Application Error" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-onSurface mb-2", children: "Something went wrong" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md text-onSurfaceVariant mb-4 max-w-md mx-auto", children: "We encountered an unexpected error while processing your request. Don't worry, we're working to fix it." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-lg p-4 mb-6 max-w-md mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-red-800 mb-2", children: "Error Details:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-700 font-mono break-words", children: getErrorMessage() }),
          (error?.stack || error?.status) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setShowDetails(!showDetails),
              className: "mt-3 text-xs text-red-600 hover:text-red-800 underline",
              children: [
                showDetails ? "Hide" : "Show",
                " technical details"
              ]
            }
          ),
          showDetails && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-red-200", children: [
            error?.status && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-red-700 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Status Code:" }),
              " ",
              error.status
            ] }),
            error?.stack && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-red-700 font-mono text-left bg-red-100 p-2 rounded overflow-auto max-h-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "whitespace-pre-wrap break-words", children: error.stack }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-onSurface mb-4", children: "What would you like to do?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: getErrorSuggestions().map((suggestion, index) => {
          const IconComponent = suggestion.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onClick: suggestion.action,
              className: "cursor-pointer bg-white p-4 rounded-lg border border-gray-200 hover:border-red-500 hover:shadow-md transition-all duration-200 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "h-8 w-8 text-onSurfaceVariant group-hover:text-red-500 transition-colors duration-200" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-onSurface mb-1", children: suggestion.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: suggestion.description })
              ]
            },
            index
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface border border-primary/20 rounded-lg p-6 max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-blue-900 mb-2", children: "Need Help?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-800 mb-3", children: "If this error persists, please contact support with the error details above." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-100 rounded-lg p-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-blue-900 mb-2", children: "📸 Help us fix this quickly!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-blue-800 mb-2", children: [
            "Please take a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "screenshot" }),
            " of this error page and send it to us on WhatsApp when this occurs. This will help us solve the issue ASAP!"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-3 mb-3 border border-blue-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-blue-900 mb-2", children: "📞 Contact Support:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs text-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium mr-2", children: "WhatsApp:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/919605656508", className: "text-blue-600 hover:text-blue-800 underline", target: "_blank", rel: "noopener noreferrer", children: "+91 96056 56508" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium mr-2", children: "Call:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+48786664862", className: "text-blue-600 hover:text-blue-800 underline", children: "+48 786 664 862" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-primary bg-surfaceCard rounded p-2 border border-primary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium mb-1", children: "Error Context (include in screenshot):" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Time: ",
            currentTime.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "URL: ",
            window.location.pathname
          ] }),
          user && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "User ID: ",
            user.UId
          ] }),
          user && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Role: ",
            getRoleDisplayName(user.Role)
          ] })
        ] })
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
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-90", children: "No active event" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium opacity-90 mb-1", children: "Organization" }),
          user.OrganizationName ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-lg", children: user.OrganizationName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm opacity-90", children: [
              "Org ID: ",
              user.Organization
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-90", children: "No organization assigned" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-onSurfaceVariant", children: [
        currentTime.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
        " •",
        " ",
        currentTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
      ] }) })
    ] }) })
  ] });
  return errorContent;
};
ErrorPage.displayName = "ErrorPage";
export {
  ErrorPage as default
};
