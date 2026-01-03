import { r as reactExports, b as getUserData, m as useEventContext, e as useAdvancedSettings, z as zt, j as jsxRuntimeExports, k as React, L as Loader, _ as __vitePreload } from "./main-B7w5eCOl.js";
function DocumentArrowDownIcon({
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
    d: "M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(DocumentArrowDownIcon);
const ExcelImportComponent = React.lazy(() => __vitePreload(() => import("./excelImportComponent-DVjf_nMr.js"), true ? [] : void 0));
React.lazy(() => __vitePreload(() => import("./organizationLevelManager-D4x_FlD8.js"), true ? [] : void 0));
React.lazy(() => __vitePreload(() => import("./participantFilterTab-JS2qpto4.js"), true ? [] : void 0));
React.lazy(() => __vitePreload(() => import("./participantFilters-YfO2WGh2.js"), true ? [] : void 0));
const EventSelectionPanel = React.lazy(() => __vitePreload(() => import("./eventSelectionPanel-Bq51W-sx.js"), true ? [] : void 0));
const ManageEventSubmission = ({ user }) => {
  const [updateComponentTimestamp, setUpdateComponentTimestamp] = reactExports.useState(Date.now);
  const [selectedParticipantType, setSelectedParticipantType] = reactExports.useState("");
  const [selectedOrganization, setSelectedOrganization] = reactExports.useState("");
  const [selectedOrganizations, setSelectedOrganizations] = reactExports.useState([]);
  const [pageSize, setPageSize] = reactExports.useState(1e5);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [eventDataToImport, setEventDataToImport] = reactExports.useState(null);
  let { user: loggedinUser } = getUserData() || {};
  const currentUser = user || loggedinUser;
  const { topLevels, participantTypes, eventCacheLoaded } = useEventContext();
  useAdvancedSettings();
  const [filterCriterias, setFilterCriterias] = reactExports.useState([]);
  const handleOrganizationChange = reactExports.useCallback(
    (organizations) => {
      setSelectedOrganizations(organizations);
      if (organizations.length === 1) {
        setSelectedOrganization(organizations[0]);
      } else {
        setSelectedOrganization("");
      }
      setCurrentPage(1);
    },
    [setSelectedOrganizations, setSelectedOrganization, setCurrentPage]
  );
  const handleParticipantTypeChange = reactExports.useCallback(
    (type) => {
      setSelectedParticipantType(type);
      setCurrentPage(1);
    },
    [setSelectedParticipantType, setCurrentPage]
  );
  const handleCompetitionAssignmentChange = reactExports.useCallback(() => {
    setUpdateComponentTimestamp(Date.now());
  }, [setUpdateComponentTimestamp]);
  const handleParticipantEdit = reactExports.useCallback((participant) => {
    console.log("Edit participant:", participant);
  }, []);
  const handleParticipantDelete = reactExports.useCallback(
    (participant) => {
      setUpdateComponentTimestamp(Date.now());
    },
    [setUpdateComponentTimestamp]
  );
  const handleTeamManagement = reactExports.useCallback((team) => {
    console.log("Manage team:", team);
  }, []);
  const handlePageChange = reactExports.useCallback(
    (page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  reactExports.useCallback(
    (newFilterCriterias) => {
      setFilterCriterias(newFilterCriterias);
      setCurrentPage(1);
    },
    [setFilterCriterias, setCurrentPage]
  );
  const handleClearFilters = reactExports.useCallback(() => {
    setFilterCriterias([]);
    setCurrentPage(1);
  }, [setFilterCriterias, setCurrentPage]);
  const handleEventDataImported = reactExports.useCallback((eventData) => {
    setEventDataToImport(eventData);
    zt.success("Event data loaded. Paste into the import area below.");
  }, []);
  const handleEventDataProcessed = reactExports.useCallback(() => {
    setEventDataToImport(null);
  }, []);
  reactExports.useEffect(() => {
    if (eventCacheLoaded && topLevels && topLevels.length > 0 && selectedOrganizations.length === 0) {
      const firstOrgId = topLevels[0].EventLevelOrganizationId;
      handleOrganizationChange([firstOrgId]);
    }
  }, [eventCacheLoaded, topLevels, selectedOrganizations.length, handleOrganizationChange]);
  reactExports.useEffect(() => {
    if (eventCacheLoaded && participantTypes && participantTypes.length > 0 && !selectedParticipantType) {
      handleParticipantTypeChange(participantTypes[0].Code);
    }
  }, [eventCacheLoaded, participantTypes, selectedParticipantType, handleParticipantTypeChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard border-b border-border px-6 py-4 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-6 w-6 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-semibold text-primary", children: "Event Submission - Import Results from Events" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "Submit existing event results to the current event" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard border-b border-border px-6 py-4 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading event selection..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(EventSelectionPanel, { onEventDataImported: handleEventDataImported, currentUser }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading event submission import..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExcelImportComponent,
      {
        onEdit: handleParticipantEdit,
        onView: handleParticipantEdit,
        onDelete: handleParticipantDelete,
        onTeamManage: handleTeamManagement,
        selectedParticipantType,
        selectedOrganization,
        pageSize,
        currentPage,
        filterCriterias,
        currentUser,
        onAssignmentChange: handleCompetitionAssignmentChange,
        onPageChange: handlePageChange,
        selectedOrganizations,
        onClearFilters: handleClearFilters,
        eventDataToImport,
        onEventDataProcessed: handleEventDataProcessed
      },
      updateComponentTimestamp
    ) }) }) })
  ] });
};
export {
  ManageEventSubmission as default
};
