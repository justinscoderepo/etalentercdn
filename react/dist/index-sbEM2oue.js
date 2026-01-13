import { j as jsxRuntimeExports, x as useAppContext, r as reactExports, u as useBackend, p as post, z as zt } from "./main-B7w5eCOl.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { O as OldNewTabLayout } from "./OldNewTabLayout-g9TCcW0h.js";
import { F as ForwardRef } from "./PlusIcon-CAPBj82K.js";
import { F as ForwardRef$1 } from "./PencilIcon-Cm_gsuKe.js";
import { F as ForwardRef$2 } from "./TrashIcon-xWLadHx8.js";
import "./navigationUtils-BZC1EMRn.js";
function ManageEventStages() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    OldNewTabLayout,
    {
      oldUrl: "/EventStages/Manage",
      newComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(ManageEventStagesContent, {}),
      title: "Event Stages Management"
    }
  );
}
function ManageEventStagesContent() {
  const { eventDetails } = useAppContext();
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [editingStage, setEditingStage] = reactExports.useState(null);
  const { rows: stages = [], refetch } = useBackend("/EventStagesJson/Get", {
    filter: `EventCategory=${eventDetails?.EventCategoryId || 0}`,
    select: "ESGId,Title,Description,Venue,Order,StatusTitle",
    sort: "Order asc"
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await post("/EventStagesJson/Save", {
        ...data,
        Event: eventDetails?.EVId,
        Status: 1
        // Active status
      });
      zt.success(editingStage ? "Event stage updated successfully" : "Event stage created successfully");
      refetch();
      reset();
      setShowAddForm(false);
      setEditingStage(null);
    } catch (error) {
      zt.error("Failed to save event stage");
    }
  };
  const handleEdit = (stage) => {
    setEditingStage(stage);
    setShowAddForm(true);
    reset({
      ESGId: stage.ESGId,
      Title: stage.Title,
      Description: stage.Description,
      Venue: stage.Venue,
      Order: stage.Order
    });
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this event stage?")) return;
    try {
      await post("/EventStagesJson/Remove", { ESGId: id });
      zt.success("Event stage deleted successfully");
      refetch();
    } catch (error) {
      zt.error("Failed to delete event stage");
    }
  };
  const handleCancel = () => {
    setShowAddForm(false);
    setEditingStage(null);
    reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(LayoutOuter, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Event Stages Management",
        description: "Manage event stages, venues, and scheduling"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      showAddForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-lg border border-gray-200 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-medium text-onSurface mb-4", children: editingStage ? "Edit Event Stage" : "Add New Stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-onSurface mb-1", children: [
                "Title ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  ...register("Title", { required: "Title is required" }),
                  defaultValue: editingStage?.Title || "",
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                  placeholder: "Enter stage title"
                }
              ),
              errors.Title && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "Title is required" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Venue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  ...register("Venue"),
                  defaultValue: editingStage?.Venue || "",
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                  placeholder: "Enter venue location"
                }
              ),
              errors.Venue && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "Venue is required" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-900 mb-1", children: "Order *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  ...register("Order", { required: true, valueAsNumber: true }),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-gray-900 focus:border-darkprimary placeholder:text-gray-400 ring-gray-300",
                  placeholder: "1"
                }
              ),
              errors.Order && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "Order is required" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  ...register("Description"),
                  defaultValue: editingStage?.Description || "",
                  rows: 3,
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                  placeholder: "Enter stage description"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-x-2 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleCancel,
                className: "inline-flex items-center gap-x-2 rounded-md bg-surface px-4 py-2 text-sm font-semibold text-onSurface shadow-sm hover:bg-surfaceHover",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
                children: editingStage ? "Update Stage" : "Add Stage"
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
            "Add Event Stage"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden", children: stages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "No event stages created yet. Add your first stage above." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-onSurfaceVariant uppercase tracking-wider", children: "Order" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-onSurfaceVariant uppercase tracking-wider", children: "Stage Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-onSurfaceVariant uppercase tracking-wider", children: "Venue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-onSurfaceVariant uppercase tracking-wider", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-onSurfaceVariant uppercase tracking-wider", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right text-xs font-medium text-onSurfaceVariant uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: stages.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-onSurface", children: stage.Order }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm font-medium text-onSurface", children: stage.Title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-onSurfaceVariant", children: stage.Venue }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-sm text-onSurfaceVariant", children: stage.Description || "-" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800", children: stage.StatusTitle || "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-right text-sm font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleEdit(stage),
                className: "p-1.5 text-blue-600 hover:bg-blue-50 rounded-md",
                title: "Edit",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDelete(stage.ESGId),
                className: "p-1.5 text-red-600 hover:bg-red-50 rounded-md",
                title: "Delete",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4" })
              }
            )
          ] }) })
        ] }, stage.ESGId)) })
      ] }) }) })
    ] })
  ] });
}
export {
  ManageEventStages as default
};
