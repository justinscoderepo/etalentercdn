import { j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
import { a as useNavigate, h as getLinkWithParams, i as useSmartNavigateWithParams } from "./navigationUtils-BZC1EMRn.js";
const ExampleParameterNavigation = () => {
  const navigate = useNavigate();
  const smartNavigateWithParams = useSmartNavigateWithParams(navigate);
  const handleNavigateToEvent = (eventName) => {
    smartNavigateWithParams("/Public/ViewEvent/:eventName", { eventName });
  };
  const handleNavigateToRegistration = (eventName) => {
    smartNavigateWithParams("/Public/EventRegistration/:eventName", { eventName });
  };
  const eventViewLink = getLinkWithParams("/Public/ViewEvent/:eventName", { eventName: "sample-event" });
  const registrationLink = getLinkWithParams("/Public/EventRegistration/:eventName", { eventName: "sample-event" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Example Parameter-Based Navigation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium mb-2", children: "Smart Navigation with Parameters:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleNavigateToEvent("tech-summit-2025"), className: "mr-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700", children: "Navigate to Tech Summit Event" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleNavigateToRegistration("music-fest-2025"), className: "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700", children: "Navigate to Music Fest Registration" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium mb-2", children: "Generated Links with Parameters:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: eventViewLink, className: "text-blue-600 hover:underline", children: "View Sample Event (Generated Link)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: registrationLink, className: "text-blue-600 hover:underline", children: "Register for Sample Event (Generated Link)" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-gray-100 rounded", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "Generated URLs (based on current pattern):" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Event View:" }),
            " ",
            eventViewLink
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Registration:" }),
            " ",
            registrationLink
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  ExampleParameterNavigation as default
};
