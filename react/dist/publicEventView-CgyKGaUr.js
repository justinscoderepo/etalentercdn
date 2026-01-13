import { r as reactExports, B as usePublicAppContext, u as useBackend, j as jsxRuntimeExports, L as Loader, k as React, _ as __vitePreload } from "./main-B7w5eCOl.js";
const RenderComponents = React.lazy(() => __vitePreload(() => import("./renderComponents-Db-mePWR.js"), true ? [] : void 0));
const PublicEventView = () => {
  const [updateIndex, setUpdateIndex] = reactExports.useState(0);
  const urlParams = new URLSearchParams(window.location.search);
  const eventIdFromParams = urlParams.get("eventId");
  const pathParts = window.location.pathname.split("/");
  const eventNameFromPath = pathParts[pathParts.length - 1];
  const isEventNameRoute = window.location.pathname.includes("/Public/ViewEvent/") && eventNameFromPath && eventNameFromPath !== "RenderViewEvent";
  const eventId = eventIdFromParams;
  const eventName = isEventNameRoute ? eventNameFromPath.replace(/-/g, " ") : null;
  const publicContext = usePublicAppContext();
  const needsCustomFilter = eventId || eventName;
  const { row: eventDetailsFromBackend, status: eventStatusFromBackend } = useBackend("/CandidateJson/GetEvents", {
    filter: eventId ? { EVId: eventId } : { EventNameEquals: eventName },
    select: "AllowDisplayCompetitionOrder,Description,EVId,EndDateString,EventCategory,EventCategoryTitle,EventLogo,EventName,IdentityBackgroundImage,OrganizationLogo,OrganizationName,OrganizationShortName,StartDateString,Venue,JsonSettings",
    doCache: true,
    noGet: !needsCustomFilter
    // Only fetch if we have a specific filter
  });
  const eventDetails = needsCustomFilter ? eventDetailsFromBackend : publicContext.eventDetails;
  const eventStatus = needsCustomFilter ? eventStatusFromBackend : publicContext.eventStatus;
  if (!eventId && !eventName) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-onSurface mb-4", children: "Event Required" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: "Please provide a valid event ID or event name to view the live status." })
    ] }) });
  }
  if (eventStatus === "loading") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
  }
  if (!eventDetails) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-onSurface mb-4", children: "Event Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: "The requested event could not be found." })
    ] }) });
  }
  const jsonSettings = eventDetails?.JsonSettings ? JSON.parse(eventDetails.JsonSettings) : { components: {} };
  const allStepsComponents = jsonSettings.components || {};
  const sections = [
    {
      name: "Public Event View Header",
      components: allStepsComponents["Public Event View Header"] || [],
      className: "bg-surfaceCard shadow-sm border-b"
    },
    {
      name: "Public Event View Center",
      components: allStepsComponents["Public Event View Center"] || [],
      className: "flex-1 bg-surface"
    },
    {
      name: "Public Event View Footer",
      components: allStepsComponents["Public Event View Footer"] || [],
      className: "bg-surfaceCard shadow-sm border-t"
    }
  ];
  const getDefaultComponents = (sectionName) => {
    switch (sectionName) {
      case "Public Event View Header":
        return [
          { type: "event-logo", label: "", id: "default-logo" },
          { type: "event-name", label: "", id: "default-name" }
        ];
      case "Public Event View Center":
        return [
          { type: "event-live-status", label: "Live Status", id: "default-live-status" },
          { type: "event-competition-count", label: "Competition Status Overview", id: "default-count" },
          { type: "event-stage-competitions", label: "Competitions by Stage", id: "default-stages" }
        ];
      case "Public Event View Footer":
        return [{ type: "event-results-link", label: "View Results", id: "default-results" }];
      default:
        return [];
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-surface", children: [
    sections.map((section, index) => {
      const components = section.components.length > 0 ? section.components : getDefaultComponents(section.name);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: section.className, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4", children: components.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        RenderComponents,
        {
          noCustomStyles: true,
          eventDetails,
          components
        }
      ) }) }) }, section.name);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-4 right-4 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => window.location.reload(), className: "bg-primary hover:bg-primaryHover text-white p-3 rounded-full shadow-lg transition-colors", title: "Refresh Status", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }) }) }) })
  ] });
};
export {
  PublicEventView as default
};
