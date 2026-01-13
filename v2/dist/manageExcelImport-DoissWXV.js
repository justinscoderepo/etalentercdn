import { r as reactExports, b as getUserData, m as useEventContext, e as useAdvancedSettings, z as zt, j as jsxRuntimeExports, L as Loader, k as React, _ as __vitePreload } from "./main-B7w5eCOl.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
const ExcelImportComponent = React.lazy(() => __vitePreload(() => import("./excelImportComponent-DVjf_nMr.js"), true ? [] : void 0));
const GroupFilterTab = React.lazy(() => __vitePreload(() => import("./groupFilterTab-Bd2toRFT.js"), true ? [] : void 0));
const OrganizationLevelManager = React.lazy(() => __vitePreload(() => import("./organizationLevelManager-D4x_FlD8.js"), true ? [] : void 0));
const ParticipantFilterTab = React.lazy(() => __vitePreload(() => import("./participantFilterTab-JS2qpto4.js"), true ? [] : void 0));
const ParticipantFilters = React.lazy(() => __vitePreload(() => import("./participantFilters-YfO2WGh2.js"), true ? [] : void 0));
const ManageExcelImport = ({ user }) => {
  const [updateComponentTimestamp, setUpdateComponentTimestamp] = reactExports.useState(Date.now);
  const [selectedParticipantType, setSelectedParticipantType] = reactExports.useState("");
  const [selectedGroupFilter, setSelectedGroupFilter] = reactExports.useState("");
  const [selectedOrganization, setSelectedOrganization] = reactExports.useState("");
  const [selectedOrganizations, setSelectedOrganizations] = reactExports.useState([]);
  const [pageSize, setPageSize] = reactExports.useState(1e5);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  let { user: loggedinUser } = getUserData() || {};
  const currentUser = user || loggedinUser;
  const { eventLevels, topLevels, groups, eventCacheLoaded } = useEventContext();
  const { advancedSettings } = useAdvancedSettings();
  const eventConfig = advancedSettings || {};
  let expectedCommonGroupId = null;
  if (groups && Array.isArray(groups) && groups.length > 0) {
    let commonGroup = groups.find((g) => g.GroupName.toLowerCase() === "common");
    if (!commonGroup) {
      commonGroup = groups.find((g) => {
        let jsonSettings = g.JsonSettings ? JSON.parse(g.JsonSettings) : {};
        return jsonSettings.IsCommon === "Yes";
      });
    }
    expectedCommonGroupId = commonGroup ? commonGroup.EventGroupId : null;
  }
  console.log("eventConfig:", eventConfig);
  const [filterCriterias, setFilterCriterias] = reactExports.useState({
    candidateName: "",
    candidateIdentityNumber: "",
    isIncludeStatusTitle: "Yes",
    isIncludeCommon: "",
    commonGroup: expectedCommonGroupId,
    isListWithoutSelectedGroup: ""
  });
  reactExports.useEffect(() => {
    setFilterCriterias((prev) => ({
      ...prev,
      isIncludeCommon: eventConfig.DefaultValueForMixingCommonWithOtherAgeGroups == "Yes" ? "true" : eventConfig.DefaultValueForMixingCommonWithOtherAgeGroups === "No" ? "false" : ""
    }));
  }, [eventConfig.DefaultValueForMixingCommonWithOtherAgeGroups]);
  const handleOrganizationChange = reactExports.useCallback((newSelections) => {
    if (Array.isArray(newSelections)) {
      setSelectedOrganizations(newSelections);
      const lastSelection = newSelections.slice().reverse().find((selection) => {
        const value = Object.values(selection)[0];
        return value && value !== "";
      });
      const finalSelection = lastSelection ? Object.values(lastSelection)[0] : "";
      setSelectedOrganization(finalSelection);
      setCurrentPage(1);
    } else {
      setSelectedOrganization(newSelections);
      setCurrentPage(1);
    }
  }, []);
  const handleFilterCriteriasChange = reactExports.useCallback((newCriterias) => {
    setFilterCriterias(newCriterias);
  }, []);
  reactExports.useCallback((newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
  }, []);
  const handlePageChange = reactExports.useCallback((newPage) => {
    setCurrentPage(newPage);
  }, []);
  const handleParticipantTypeChange = reactExports.useCallback((type) => {
    setSelectedParticipantType(type);
    setCurrentPage(1);
  }, []);
  const handleGroupFilterChange = reactExports.useCallback((groupId) => {
    setSelectedGroupFilter(groupId);
    setCurrentPage(1);
  }, []);
  const handleParticipantEdit = reactExports.useCallback((participant) => {
    zt.success("Edit functionality will be handled by ExcelImportComponent");
  }, []);
  const handleParticipantDelete = reactExports.useCallback((participant) => {
    zt.success("Delete functionality will be handled by ExcelImportComponent");
  }, []);
  const handleTeamManagement = reactExports.useCallback((participant) => {
    zt.success("Team management will be handled by ExcelImportComponent");
  }, []);
  const handleCompetitionAssignmentChange = reactExports.useCallback(() => {
  }, []);
  const handleClearFilters = reactExports.useCallback(() => {
    setFilterCriterias({
      candidateName: "",
      candidateIdentityNumber: "",
      teamIdentityNumber: "",
      registrationId: "",
      isIncludeStatusTitle: "",
      isIncludeCommon: "",
      commonGroup: expectedCommonGroupId,
      isListWithoutSelectedGroup: ""
    });
    setSelectedOrganization("");
    setSelectedParticipantType("");
    setSelectedGroupFilter("");
    setCurrentPage(1);
    zt.success("Filters cleared");
  }, [expectedCommonGroupId]);
  if (!eventCacheLoaded || selectedOrganizations === null) {
    let whichDataPending = [];
    if (!eventCacheLoaded) whichDataPending.push("event data");
    if (selectedOrganizations === null) whichDataPending.push("organization data");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading participants data..." + whichDataPending.join(", ") });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Excel Import - Bulk Participant Management",
        subHeading: "Paste participant data directly from Excel or Google Sheets for quick bulk registration"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row flex-wrap gap-2 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-[300px] px-2 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading organization manager..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        OrganizationLevelManager,
        {
          user: currentUser,
          eventLevels,
          topLevels,
          selectedOrganizations,
          onOrganizationChange: handleOrganizationChange
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-[300px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading filters..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ParticipantFilters,
        {
          filterCriterias,
          onFilterChange: handleFilterCriteriasChange,
          onApply: handleFilterCriteriasChange,
          showAdvancedFilters: false,
          onToggleAdvancedFilters: () => {
          }
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-x-2 justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading participant tabs..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ParticipantFilterTab, { selectedParticipantType, onParticipantTypeChange: handleParticipantTypeChange, selectedGroupFilter }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading group tabs..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(GroupFilterTab, { allowAll: true, selectedGroupFilter, onGroupFilterChange: handleGroupFilterChange, selectedParticipantType }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface relative", children: selectedOrganizations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading Excel import..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExcelImportComponent,
      {
        onEdit: handleParticipantEdit,
        onView: handleParticipantEdit,
        onDelete: handleParticipantDelete,
        onTeamManage: handleTeamManagement,
        selectedGroupFilter,
        selectedParticipantType,
        selectedOrganization,
        pageSize,
        currentPage,
        filterCriterias,
        currentUser,
        onAssignmentChange: handleCompetitionAssignmentChange,
        onPageChange: handlePageChange,
        selectedOrganizations,
        onClearFilters: handleClearFilters
      },
      updateComponentTimestamp
    ) }) })
  ] }) });
};
export {
  ManageExcelImport as default
};
