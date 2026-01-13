import { r as reactExports, b as getUserData, m as useEventContext, e as useAdvancedSettings, z as zt, j as jsxRuntimeExports, L as Loader, k as React, _ as __vitePreload } from "./main-B7w5eCOl.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { F as ForwardRef } from "./PlusIcon-CAPBj82K.js";
const GroupFilterTab = React.lazy(() => __vitePreload(() => import("./groupFilterTab-Bd2toRFT.js"), true ? [] : void 0));
const OrganizationLevelManager = React.lazy(() => __vitePreload(() => import("./organizationLevelManager-D4x_FlD8.js"), true ? [] : void 0));
const ParticipantFilterTab = React.lazy(() => __vitePreload(() => import("./participantFilterTab-JS2qpto4.js"), true ? [] : void 0));
const ParticipantFilters = React.lazy(() => __vitePreload(() => import("./participantFilters-YfO2WGh2.js"), true ? [] : void 0));
const ParticipantManagementLayout = React.lazy(() => __vitePreload(() => import("./participantManagementLayout-D4nyJ2Fi.js"), true ? [] : void 0));
const RenderRegistrationForm = React.lazy(() => __vitePreload(() => import("./renderRegistrationForm-D9a5R6SE.js"), true ? [] : void 0));
const ManageBulkParticipants = ({ user }) => {
  const [updateComponentTimestamp, setUpdateComponentTimestamp] = reactExports.useState(Date.now());
  const [selectedParticipantType, setSelectedParticipantType] = reactExports.useState("");
  const [selectedGroupFilter, setSelectedGroupFilter] = reactExports.useState("");
  const [selectedOrganization, setSelectedOrganization] = reactExports.useState("");
  const [selectedOrganizations, setSelectedOrganizations] = reactExports.useState([]);
  const [pageSize, setPageSize] = reactExports.useState(10);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [selectedParticipants, setSelectedParticipants] = reactExports.useState([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = reactExports.useState(false);
  const [isRefreshing, setIsRefreshing] = reactExports.useState(false);
  let { user: loggedinUser } = getUserData() || {};
  const currentUser = user || loggedinUser;
  const { eventDetails, eventLevels, topLevels, groups, eventCacheLoaded } = useEventContext();
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
  const handlePageSizeChange = reactExports.useCallback((newPageSize) => {
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
  const handleParticipantSelection = reactExports.useCallback((selectedIds) => {
    setSelectedParticipants(selectedIds);
  }, []);
  const handleToggleAdvancedFilters = reactExports.useCallback(() => {
    setShowAdvancedFilters((prev) => !prev);
  }, []);
  const handleParticipantEdit = reactExports.useCallback(
    (participant) => {
      if (participant.TeamTeamName) {
        openTeamManagement(participant.Team);
        return;
      }
      setSelectedParticipantId(participant?.Candidate || participant?.Team || null);
      setOpen(true);
    },
    [currentUser]
  );
  const handleParticipantDelete = reactExports.useCallback(async (participant) => {
    if (window.confirm(`Are you sure you want to delete ${participant.UserName || participant.TeamTeamName}?`)) ;
  }, []);
  const handleTeamManagement = reactExports.useCallback((participant) => {
    openTeamManagement(participant.Team);
  }, []);
  const [selectedParticipantId, setSelectedParticipantId] = reactExports.useState(null);
  const [open, setOpen] = reactExports.useState(false);
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
    setSelectedOrganization("");
    setCurrentPage(1);
    zt.success("Filters cleared");
  }, [expectedCommonGroupId]);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined" && window.jQuery) {
      if (typeof window.resizeBox === "function") {
        window.resizeBox(window.jQuery);
      }
      window.jQuery(document).trigger("ready");
    }
  }, []);
  const openRegistrationForm = (candidateId = null) => {
    setSelectedParticipantId(candidateId);
    setOpen(true);
  };
  const openTeamManagement = (teamId) => {
    setSelectedParticipantId(teamId);
    setOpen(true);
  };
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
        heading: "Manage Participants",
        subHeading: "Add, edit, and manage individual and team participants with bulk operations and filtering",
        rightChildren: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => openRegistrationForm(null),
            className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-4 w-4" }),
              "Add Participant"
            ]
          }
        )
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading participant details..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      RenderRegistrationForm,
      {
        isDirectOpen: true,
        isCoordinatorView: true,
        view: "participationDetails",
        eventDetails,
        allowEdit: true,
        getParticipantsLink: "/CoordinatorJson/GetParticipants",
        closeModel: () => {
          setOpen(false);
          updateComponentTimestamp && setUpdateComponentTimestamp(Date.now());
          setSelectedParticipantId(null);
        },
        participantTypeInt: selectedParticipantType === "2" ? 2 : selectedParticipantType === "1" ? 1 : selectedParticipantType,
        candidateId: selectedParticipantId,
        setActiveTab: () => {
        }
      },
      selectedParticipantId + selectedParticipantType
    ) }),
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
          showAdvancedFilters,
          onToggleAdvancedFilters: handleToggleAdvancedFilters
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-x-2 justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading participant tabs..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ParticipantFilterTab, { selectedParticipantType, onParticipantTypeChange: handleParticipantTypeChange, selectedGroupFilter }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading group tabs..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(GroupFilterTab, { allowAll: false, selectedGroupFilter, onGroupFilterChange: handleGroupFilterChange, selectedParticipantType }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface relative", children: selectedOrganizations.length > 0 && selectedParticipantType > 0 && selectedGroupFilter > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading participants layout..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ParticipantManagementLayout,
      {
        selectedOrganizations,
        selectedGroupFilter,
        selectedParticipantType,
        selectedOrganization,
        searchTerm: filterCriterias.candidateName,
        filterCriterias,
        pageSize,
        currentPage,
        onEdit: handleParticipantEdit,
        onView: (participant) => handleParticipantEdit(participant),
        onDelete: handleParticipantDelete,
        onTeamManage: handleTeamManagement,
        loading: isRefreshing,
        selectedParticipants,
        onSelectionChange: handleParticipantSelection,
        currentUser,
        onAssignmentChange: handleCompetitionAssignmentChange,
        onPageChange: handlePageChange,
        onPageSizeChange: handlePageSizeChange,
        onClearFilters: handleClearFilters
      },
      updateComponentTimestamp
    ) }) })
  ] }) });
};
export {
  ManageBulkParticipants as default
};
