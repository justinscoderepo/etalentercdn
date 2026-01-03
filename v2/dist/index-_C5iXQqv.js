import { x as useAppContext, r as reactExports, u as useBackend, j as jsxRuntimeExports, p as post, z as zt } from "./main-B7w5eCOl.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { O as OldNewTabLayout } from "./OldNewTabLayout-g9TCcW0h.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { F as ForwardRef } from "./PlusIcon-CAPBj82K.js";
import { F as ForwardRef$1 } from "./PencilIcon-Cm_gsuKe.js";
import { F as ForwardRef$2 } from "./TrashIcon-xWLadHx8.js";
import { d as dt } from "./tabs-C66TNEoR.js";
import "./navigationUtils-BZC1EMRn.js";
import "./use-resolve-button-type-DPiHyuBj.js";
import "./keyboard-Dku-r8UD.js";
import "./use-is-mounted-DkvN6zYE.js";
import "./hidden-tL6qlWMm.js";
function CompetitionStructureList({ participantType, group, competitionItem }) {
  const { eventDetails } = useAppContext();
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [editingStructure, setEditingStructure] = reactExports.useState(null);
  const { rows: structures = [], refetch } = useBackend("/CompetitionStructureJson/Get", {
    filter: `EventCategory=${eventDetails?.EventCategoryId || 0}&ParticipantType=${participantType}&Group=${group}&CompetitionItem=${competitionItem}`,
    select: "CompetitionStructureId,Order,MaximumScore,MaximumMinutes,MaximumSeconds,MinimumMinutes,MinimumSeconds,WarningMinute,WarningSecond,Fees,Remarks,Gender,GenderGenderTitle,Language,LanguageLanguageName,CompetitionStatus,CompetitionStatusCompetitionStatusTitle",
    sort: "Order asc"
  });
  const { rows: genders = [] } = useBackend("/GenderJson/Get", {
    select: "GenderId,GenderTitle"
  });
  const { rows: languages = [] } = useBackend("/LanguageJson/Get", {
    select: "LanguageId,LanguageName"
  });
  const { rows: statuses = [] } = useBackend("/CompetitionStatusJson/Get", {
    select: "CompetitionStatusId,CompetitionStatusTitle"
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await post("/CompetitionStructureJson/Save", {
        ...data,
        EventCategory: eventDetails?.EventCategoryId,
        ParticipantType: participantType,
        Group: group,
        CompetitionItem: competitionItem
      });
      zt.success(editingStructure ? "Structure updated successfully" : "Structure created successfully");
      refetch();
      reset();
      setShowAddForm(false);
      setEditingStructure(null);
    } catch (error) {
      zt.error("Failed to save competition structure");
    }
  };
  const handleEdit = (structure) => {
    setEditingStructure(structure);
    setShowAddForm(true);
    reset({
      CompetitionStructureId: structure.CompetitionStructureId,
      Order: structure.Order,
      MaximumScore: structure.MaximumScore,
      MaximumMinutes: structure.MaximumMinutes,
      MaximumSeconds: structure.MaximumSeconds,
      MinimumMinutes: structure.MinimumMinutes,
      MinimumSeconds: structure.MinimumSeconds,
      WarningMinute: structure.WarningMinute,
      WarningSecond: structure.WarningSecond,
      Fees: structure.Fees,
      Remarks: structure.Remarks,
      Gender: structure.Gender,
      Language: structure.Language,
      CompetitionStatus: structure.CompetitionStatus
    });
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this competition structure?")) return;
    try {
      await post("/CompetitionStructureJson/Remove", { CompetitionStructureId: id });
      zt.success("Structure deleted successfully");
      refetch();
    } catch (error) {
      zt.error("Failed to delete structure");
    }
  };
  const handleCancel = () => {
    setShowAddForm(false);
    setEditingStructure(null);
    reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    showAddForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface p-4 rounded-lg border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-onSurface mb-4", children: editingStructure ? "Edit Competition Structure" : "Add New Structure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Order *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                ...register("Order", { required: true, valueAsNumber: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "1"
              }
            ),
            errors.Order && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "Required" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Gender *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                ...register("Gender", { required: true, valueAsNumber: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary ring-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Gender" }),
                  genders.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: g.GenderId, children: g.GenderTitle }, g.GenderId))
                ]
              }
            ),
            errors.Gender && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "Required" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Language *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                ...register("Language", { required: true, valueAsNumber: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary ring-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Language" }),
                  languages.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l.LanguageId, children: l.LanguageName }, l.LanguageId))
                ]
              }
            ),
            errors.Language && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "Required" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Max Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                ...register("MaximumScore", { valueAsNumber: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "100"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Max Minutes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                ...register("MaximumMinutes", { valueAsNumber: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "5"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Max Seconds" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                ...register("MaximumSeconds", { valueAsNumber: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "0"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Warning Min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                ...register("WarningMinute", { valueAsNumber: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "1"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Warning Sec" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                ...register("WarningSecond", { valueAsNumber: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "0"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Fees" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                step: "0.01",
                ...register("Fees", { valueAsNumber: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "0.00"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Remarks" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                ...register("Remarks"),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "Optional remarks"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                ...register("CompetitionStatus", { valueAsNumber: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary ring-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Status" }),
                  statuses.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.CompetitionStatusId, children: s.CompetitionStatusTitle }, s.CompetitionStatusId))
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-x-2 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleCancel,
              className: "inline-flex items-center gap-x-2 rounded-md bg-surface px-4 py-2 text-sm font-semibold text-onSurfaceVariant shadow-sm hover:bg-surfaceCard border border-border",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
              children: [
                editingStructure ? "Update" : "Add",
                " Structure"
              ]
            }
          )
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setShowAddForm(true),
        className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-4 w-4" }),
          "Add Structure"
        ]
      }
    ) }),
    structures.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 bg-surface rounded-lg border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "No structures created yet. Add your first structure above." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto border border-border rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Gender" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Language" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Max Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Max Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Warning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Fees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right text-xs font-medium text-onSurfaceVariant uppercase", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-surfaceCard divide-y divide-border", children: structures.map((structure) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-surface", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 whitespace-nowrap text-sm text-onSurface", children: structure.Order }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 whitespace-nowrap text-sm text-onSurfaceVariant", children: structure.GenderGenderTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 whitespace-nowrap text-sm text-onSurfaceVariant", children: structure.LanguageLanguageName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 whitespace-nowrap text-sm text-onSurfaceVariant", children: structure.MaximumScore || "-" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 whitespace-nowrap text-sm text-onSurfaceVariant", children: [
          structure.MaximumMinutes || 0,
          ":",
          (structure.MaximumSeconds || 0).toString().padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 whitespace-nowrap text-sm text-onSurfaceVariant", children: [
          structure.WarningMinute || 0,
          ":",
          (structure.WarningSecond || 0).toString().padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 whitespace-nowrap text-sm text-onSurfaceVariant", children: structure.Fees || 0 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 whitespace-nowrap text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800", children: structure.CompetitionStatusCompetitionStatusTitle || "Not Set" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 whitespace-nowrap text-right text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-x-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleEdit(structure),
              className: "p-1.5 text-blue-600 hover:bg-blue-50 rounded-md",
              title: "Edit",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleDelete(structure.CompetitionStructureId),
              className: "p-1.5 text-red-600 hover:bg-red-50 rounded-md",
              title: "Delete",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4" })
            }
          )
        ] }) })
      ] }, structure.CompetitionStructureId)) })
    ] }) })
  ] });
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function CompetitionStructureTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    OldNewTabLayout,
    {
      oldUrl: "/CompetitionStructure/Tab",
      newComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(CompetitionStructureTabContent, {}),
      title: "Competition Structure Management"
    }
  );
}
function CompetitionStructureTabContent() {
  const { eventDetails } = useAppContext();
  const [selectedParticipantType, setSelectedParticipantType] = reactExports.useState(null);
  const [selectedGroup, setSelectedGroup] = reactExports.useState(null);
  const [selectedCompetitionItem, setSelectedCompetitionItem] = reactExports.useState(null);
  const { rows: participantTypes = [] } = useBackend("/ParticipantTypeJson/Get", {
    select: "ParticipantTypeId,Title",
    filter: "Status=1"
  });
  const { rows: groups = [] } = useBackend("/AgewiseGroupsJson/Get", {
    select: "GroupId,GroupName,ParticipantType",
    filter: selectedParticipantType ? `ParticipantType=${selectedParticipantType}&EventCategory=${eventDetails?.EventCategoryId || 0}` : "",
    noGet: !selectedParticipantType
  });
  const { rows: competitionItems = [] } = useBackend("/CompetitionItemJson/Get", {
    select: "CompetitionItemId,Title,ParticipantType",
    filter: selectedParticipantType ? `ParticipantType=${selectedParticipantType}&EventCategory=${eventDetails?.EventCategoryId || 0}` : "",
    noGet: !selectedParticipantType
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(LayoutOuter, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Competition Structure Management",
        description: "Manage competition structures with participant types, groups, and competition items"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard rounded-lg border border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(dt.Group, { onChange: (index) => {
      setSelectedParticipantType(participantTypes[index]?.ParticipantTypeId || null);
      setSelectedGroup(null);
      setSelectedCompetitionItem(null);
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(dt.List, { className: "flex space-x-1 border-b border-border px-4", children: participantTypes.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        dt,
        {
          className: ({ selected }) => classNames(
            "px-4 py-3 text-sm font-medium leading-5 border-b-2 transition-colors",
            "focus:outline-none",
            selected ? "border-primary text-primary" : "border-transparent text-onSurfaceVariant hover:text-onSurface hover:border-border"
          ),
          children: type.Title
        },
        type.ParticipantTypeId
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(dt.Panels, { className: "p-6", children: participantTypes.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(dt.Panel, { children: groups.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(dt.Group, { onChange: (index) => {
        setSelectedGroup(groups[index]?.GroupId || null);
        setSelectedCompetitionItem(null);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(dt.List, { className: "flex space-x-1 border-b border-border mb-4", children: groups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          dt,
          {
            className: ({ selected }) => classNames(
              "px-3 py-2 text-sm font-medium leading-5 border-b-2 transition-colors",
              "focus:outline-none",
              selected ? "border-primary text-primary" : "border-transparent text-onSurfaceVariant hover:text-onSurface hover:border-border"
            ),
            children: group.GroupName
          },
          group.GroupId
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(dt.Panels, { children: groups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(dt.Panel, { children: competitionItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(dt.Group, { onChange: (index) => {
          setSelectedCompetitionItem(competitionItems[index]?.CompetitionItemId || null);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(dt.List, { className: "flex space-x-1 border-b border-border mb-4", children: competitionItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            dt,
            {
              className: ({ selected }) => classNames(
                "px-3 py-2 text-xs font-medium leading-5 border-b-2 transition-colors",
                "focus:outline-none",
                selected ? "border-primary text-primary" : "border-transparent text-onSurfaceVariant hover:text-onSurface hover:border-border"
              ),
              children: item.Title
            },
            item.CompetitionItemId
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(dt.Panels, { children: competitionItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(dt.Panel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CompetitionStructureList,
            {
              participantType: type.ParticipantTypeId,
              group: group.GroupId,
              competitionItem: item.CompetitionItemId
            }
          ) }, item.CompetitionItemId)) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-sm text-onSurfaceVariant", children: "No competition items available for this group. Please add competition items first." }) }, group.GroupId)) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-sm text-onSurfaceVariant", children: "No groups available for this participant type. Please add groups first." }) }, type.ParticipantTypeId)) })
    ] }) }) })
  ] });
}
export {
  CompetitionStructureTab as default
};
