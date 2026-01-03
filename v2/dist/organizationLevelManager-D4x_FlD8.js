import { r as reactExports, z as zt, j as jsxRuntimeExports, u as useBackend, i as classNames } from "./main-B7w5eCOl.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { B as Box } from "./box-Du61b7dg.js";
import TextBox from "./textBox-CSNjK2Z2.js";
import ModalForm from "./modalForm-DOZs0ugH.js";
import { F as ForwardRef$1 } from "./PlusIcon-CAPBj82K.js";
import "./validationMessage-D3Gjn0ek.js";
import "./EyeSlashIcon-Vd-PPSmw.js";
import "./EyeIcon-DRCFFanS.js";
import "./ChatBubbleBottomCenterTextIcon-CKcdu_oV.js";
import "./dialog-DkCfFwgC.js";
import "./keyboard-Dku-r8UD.js";
import "./dom-XjFFvgb6.js";
import "./use-is-mounted-DkvN6zYE.js";
import "./hidden-tL6qlWMm.js";
import "./open-closed-gVG0H0sE.js";
import "./description-3iOOxFmG.js";
import "./navigationUtils-BZC1EMRn.js";
import "./XMarkIcon-CyBmq7NC.js";
function BuildingOfficeIcon({
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
    d: "M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(BuildingOfficeIcon);
const AddOrganizationModal = ({ isOpen, onClose, level: level2, parentOrganizationId, user, onOrganizationAdded }) => {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      organizationName: "",
      shortName: ""
    }
  });
  const formData = getValues();
  const handleAddOrganization = reactExports.useCallback(
    async (data) => {
      if (!data.organizationName?.trim()) {
        zt.error("Organization name is required");
        return;
      }
      try {
        const organizationData = {
          Name: data.organizationName,
          ShortName: data.shortName || data.organizationName.substring(0, 10).toUpperCase(),
          CompetitionLevel: level2?.EventLevelId,
          ParentOrganization: parentOrganizationId,
          OrganizationType: 2,
          // SubOrganization
          Status: 1,
          CreatedBy: user?.UId,
          AllowOrganizationId: 1
        };
        await onOrganizationAdded(organizationData);
        zt.success(`${level2?.LevelName} "${data.organizationName}" added successfully`);
        reset();
        onClose();
      } catch (error) {
        console.error("Failed to add organization:", error);
        zt.error(`Failed to add ${level2?.LevelName}. Please try again.`);
      }
    },
    [level2, parentOrganizationId, user, onOrganizationAdded, reset, onClose]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ModalForm,
    {
      open: isOpen,
      setOpen: onClose,
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Add New ",
          level2?.LevelName
        ] })
      ] }),
      center: true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { heading: `${level2?.LevelName} Details`, description: `Enter the details for the new ${level2?.LevelName}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(handleAddOrganization), className: "space-y-4 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextBox,
          {
            fieldName: "organizationName",
            label: `${level2?.LevelName} Name`,
            placeholder: `Enter ${level2?.LevelName} name...`,
            control,
            register,
            formData,
            errors,
            optional: false,
            disabled: isSubmitting
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextBox,
          {
            fieldName: "shortName",
            label: "Short Name (Optional)",
            placeholder: "Enter short name...",
            control,
            register,
            formData,
            errors,
            optional: true,
            disabled: isSubmitting,
            maxLength: 10
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              disabled: isSubmitting,
              className: "inline-flex items-center gap-x-2 rounded-md bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50",
              children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white" }),
                "Adding..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-4 w-4" }),
                "Add ",
                level2?.LevelName
              ] })
            }
          )
        ] })
      ] }) })
    }
  );
};
const OrganizationLevelManager = ({ user, eventLevels, topLevels, selectedOrganizations, onOrganizationChange, onFormDataChange, className = "" }) => {
  const [showAddOrgModal, setShowAddOrgModal] = reactExports.useState(false);
  const [currentAddLevel, setCurrentAddLevel] = reactExports.useState(null);
  const [currentParentOrgId, setCurrentParentOrgId] = reactExports.useState(null);
  const getOrgValue = reactExports.useCallback(
    (levelName) => {
      if (!Array.isArray(selectedOrganizations)) return "";
      const found = selectedOrganizations.find((item) => item[levelName] !== void 0);
      return found ? found[levelName] : "";
    },
    [selectedOrganizations]
  );
  const { rows: organizations, update: createOrganization } = useBackend("/OrganizationJson/Get", {
    select: "Id,Name,OrganizationId,ShortName,CompetitionLevel,CompetitionLevelLevelName,Order,ParentOrganization,ParentOrganizationName",
    filter: {
      Status: 1,
      OrganizationType: 2
      // SubOrganization
    },
    limit: 1e3,
    offset: 0,
    sort: { sortColumn: "Order", sortOrder: "asc" },
    updateUrl: "/OrganizationJson/Save"
  });
  const [hasInitialized, setHasInitialized] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (hasInitialized || !eventLevels || !user) return;
    if (eventLevels[0] && getOrgValue(eventLevels[0]?.LevelName)) {
      setHasInitialized(true);
      return;
    }
    const initialSelections = [];
    if (eventLevels[0]) {
      initialSelections.push({ [eventLevels[0].LevelName]: user.Organization });
    }
    if (user.Role === 3 && topLevels) {
      eventLevels.forEach((level2) => {
        if (topLevels[level2.LevelName]) {
          initialSelections.push({ [level2.LevelName]: topLevels[level2.LevelName] });
        }
      });
    }
    if (initialSelections.length > 0) {
      setHasInitialized(true);
      setTimeout(() => {
        onOrganizationChange(initialSelections);
      }, 0);
    }
  }, [eventLevels, user, topLevels, getOrgValue, hasInitialized]);
  const visibleLevels = reactExports.useMemo(() => {
    if (!eventLevels || eventLevels.length <= 1) return [];
    return eventLevels.slice(1);
  }, [eventLevels]);
  const getOrganizationsForLevel = reactExports.useCallback(
    (level2, levelIndex) => {
      if (!organizations) return [];
      const actualIndex = levelIndex + 1;
      let parentOrganizationId = null;
      if (actualIndex === 1) {
        parentOrganizationId = user?.Organization;
      } else if (actualIndex > 1) {
        const previousLevel = eventLevels[actualIndex - 1];
        parentOrganizationId = getOrgValue(previousLevel?.LevelName);
      }
      return organizations.filter((org) => {
        if (org.CompetitionLevel !== level2.EventLevelId) return false;
        if (parentOrganizationId && org.ParentOrganization != parentOrganizationId) return false;
        return true;
      });
    },
    [organizations, getOrgValue, user, eventLevels]
  );
  const handleOrganizationSelect = reactExports.useCallback(
    (levelName, orgId, levelIndex) => {
      let newSelections = [...Array.isArray(selectedOrganizations) ? selectedOrganizations : []];
      newSelections = newSelections.filter((item) => !item[levelName]);
      if (orgId) {
        newSelections.push({ [levelName]: orgId });
      }
      const actualIndex = levelIndex + 1;
      for (let i = actualIndex + 1; i < eventLevels.length; i++) {
        const nextLevel = eventLevels[i];
        if (nextLevel) {
          newSelections = newSelections.filter((item) => !item[nextLevel.LevelName]);
        }
      }
      onOrganizationChange(newSelections);
    },
    [selectedOrganizations, eventLevels, onOrganizationChange]
  );
  const handleAddOrganization = reactExports.useCallback(
    (level2, levelIndex) => {
      const actualIndex = levelIndex + 1;
      let parentOrganizationId = user?.Organization;
      if (actualIndex > 1) {
        const previousLevel = eventLevels[actualIndex - 1];
        parentOrganizationId = getOrgValue(previousLevel?.LevelName);
      }
      setCurrentAddLevel(level2);
      setCurrentParentOrgId(parentOrganizationId);
      setShowAddOrgModal(true);
    },
    [getOrgValue, eventLevels, user]
  );
  const isLevelRestricted = reactExports.useCallback(
    (levelName) => {
      return user?.Role === 3 && topLevels && topLevels[level.LevelName];
    },
    [user, topLevels]
  );
  const formData = reactExports.useMemo(() => {
    const data = {
      // Basic form compatibility values
      AllowToLoadSubOrg: "",
      OrderFrom: user?.OrganizationLevelOrder + 1 || 1,
      OrganizationType: "2",
      ParentOrganization: user?.Organization,
      // Level data
      levels: {},
      // Bulk edit values
      Group: "",
      ParticipantType: "",
      AgeFrom: "",
      AgeTo: "",
      // Organization list form values
      UsersRolesModel: {},
      TeamModel: {},
      teamrequiredelements: {},
      userrequiredelements: {}
    };
    if (eventLevels?.[0]) {
      data.levels[eventLevels[0].LevelName] = user?.Organization;
    }
    visibleLevels.forEach((level2, levelIndex) => {
      const actualIndex = levelIndex + 1;
      const isRestricted = isLevelRestricted(level2.LevelName);
      const selectedValue = getOrgValue(level2.LevelName) || "";
      if (isRestricted) {
        data.levels[level2.LevelName] = topLevels[level2.LevelName];
      } else {
        data.levels[level2.LevelName] = selectedValue;
      }
      data.UsersRolesModel[level2.LevelName] = isRestricted ? topLevels[level2.LevelName] : selectedValue;
      data.TeamModel[level2.LevelName] = isRestricted ? topLevels[level2.LevelName] : selectedValue;
      if (actualIndex > 0) {
        data.teamrequiredelements[level2.LevelName] = isRestricted ? topLevels[level2.LevelName] : selectedValue;
        data.userrequiredelements[level2.LevelName] = isRestricted ? topLevels[level2.LevelName] : selectedValue;
      }
    });
    eventLevels?.forEach((level2, index) => {
      if (index === 0) {
        data.UsersRolesModel[level2.LevelName] = user?.Organization;
        data.TeamModel[level2.LevelName] = user?.Organization;
      } else if (user?.Role === 3 && topLevels && topLevels[level2.LevelName]) {
        data.UsersRolesModel[level2.LevelName] = topLevels[level2.LevelName];
        data.TeamModel[level2.LevelName] = topLevels[level2.LevelName];
      }
    });
    return data;
  }, [user, eventLevels, visibleLevels, topLevels, getOrgValue, isLevelRestricted]);
  reactExports.useEffect(() => {
    if (onFormDataChange) {
      onFormDataChange(formData);
    }
  }, [formData, onFormDataChange]);
  if (!eventLevels || eventLevels.length <= 1) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames("w-full", className), children: [
    visibleLevels.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: classNames(
          "grid gap-3",
          visibleLevels.length === 1 && "grid-cols-1",
          visibleLevels.length === 2 && "grid-cols-1 md:grid-cols-2",
          visibleLevels.length === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          visibleLevels.length >= 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        ),
        children: visibleLevels.map((level2, levelIndex) => {
          const actualIndex = levelIndex + 1;
          const isRestricted = isLevelRestricted(level2.LevelName);
          const levelOrganizations = getOrganizationsForLevel(level2, levelIndex);
          const selectedValue = getOrgValue(level2.LevelName) || "";
          if (isRestricted) {
            return null;
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-medium text-primary flex items-center mr-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-3 w-3 mr-1" }),
                level2.LevelName
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleAddOrganization(level2, levelIndex),
                  className: "inline-flex items-center gap-x-1 rounded-md bg-primary px-2 py-0.5 text-xs font-medium text-white shadow-sm hover:bg-primaryHover",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-3 w-3" }),
                    "Add"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: `levelid_${actualIndex}`,
                name: "ParentOrganization",
                className: "pl-2 block w-full rounded-md border-0 py-1 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm text-xs text-gray-900 focus:border-darkprimary ring-gray-300",
                value: selectedValue,
                onChange: (e) => handleOrganizationSelect(level2.LevelName, e.target.value, levelIndex),
                children: [
                  actualIndex === eventLevels.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "all", children: [
                    "All ",
                    level2.LevelName?.toLowerCase(),
                    " Candidates"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "", children: [
                      "Please add ",
                      level2.LevelName?.toLowerCase(),
                      " name"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "all", children: [
                      "All ",
                      level2.LevelName?.toLowerCase(),
                      " Candidates"
                    ] })
                  ] }),
                  levelOrganizations.map((org) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: org.Id, children: [
                    org.Order && org.Order !== 0 ? `${org.Order} - ` : "",
                    org.Name
                  ] }, org.Id))
                ]
              }
            ) })
          ] }, level2.LevelName);
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddOrganizationModal,
      {
        isOpen: showAddOrgModal,
        onClose: () => {
          setShowAddOrgModal(false);
          setCurrentAddLevel(null);
          setCurrentParentOrgId(null);
        },
        level: currentAddLevel,
        parentOrganizationId: currentParentOrgId,
        user,
        onOrganizationAdded: async (organizationData) => {
          await createOrganization(organizationData);
        }
      }
    )
  ] });
};
export {
  OrganizationLevelManager as default
};
