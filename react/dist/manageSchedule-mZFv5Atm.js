import { j as jsxRuntimeExports, x as useAppContext, r as reactExports, u as useBackend, p as post, z as zt } from "./main-B7w5eCOl.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { O as OldNewTabLayout } from "./OldNewTabLayout-g9TCcW0h.js";
import { F as ForwardRef } from "./PlusIcon-CAPBj82K.js";
import { F as ForwardRef$1 } from "./PencilIcon-Cm_gsuKe.js";
import { F as ForwardRef$2 } from "./TrashIcon-xWLadHx8.js";
import "./navigationUtils-BZC1EMRn.js";
function ManageCompetitionSchedule() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    OldNewTabLayout,
    {
      oldUrl: "/CompetitionSchedule/Manage",
      newComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(ManageCompetitionScheduleContent, {}),
      title: "Competition Schedule Management"
    }
  );
}
function ManageCompetitionScheduleContent() {
  const { eventDetails } = useAppContext();
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [editingSchedule, setEditingSchedule] = reactExports.useState(null);
  const { rows: schedules = [], refetch } = useBackend("/CompetitionScheduleJson/Get", {
    filter: `Event=${eventDetails?.EVId || 0}`,
    select: "CSId,Competition,Phase,PhaseTitle,Stage,StageTitle,ScheduledStartTime,ScheduledEndTime,ReportedStartTime,ReportedEndTime,Order",
    sort: "Order asc"
  });
  const { rows: stages = [] } = useBackend("/EventStagesJson/Get", {
    filter: `EventCategory=${eventDetails?.EventCategoryId || 0}`,
    select: "ESGId,Title"
  });
  const { rows: competitions = [] } = useBackend("/CompetitionStructureJson/Get", {
    filter: `EventCategory=${eventDetails?.EventCategoryId || 0}`,
    select: "CompetitionStructureId,CompetitionItemTitle,GroupGroupName,GenderGenderTitle,LanguageLanguageName"
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await post("/CompetitionScheduleJson/Save", {
        ...data,
        Event: eventDetails?.EVId,
        Status: 1
      });
      zt.success(editingSchedule ? "Schedule updated successfully" : "Schedule created successfully");
      refetch();
      reset();
      setShowAddForm(false);
      setEditingSchedule(null);
    } catch (error) {
      zt.error("Failed to save schedule");
    }
  };
  const handleEdit = (schedule) => {
    setEditingSchedule(schedule);
    setShowAddForm(true);
    reset({
      CSId: schedule.CSId,
      Competition: schedule.Competition,
      Stage: schedule.Stage,
      ScheduledStartTimeString: schedule.ScheduledStartTime,
      ScheduledEndTimeString: schedule.ScheduledEndTime,
      ReportedStartTimeString: schedule.ReportedStartTime,
      ReportedEndTimeString: schedule.ReportedEndTime,
      Order: schedule.Order
    });
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this schedule?")) return;
    try {
      await post("/CompetitionScheduleJson/Remove", { CSId: id });
      zt.success("Schedule deleted successfully");
      refetch();
    } catch (error) {
      zt.error("Failed to delete schedule");
    }
  };
  const handleCancel = () => {
    setShowAddForm(false);
    setEditingSchedule(null);
    reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(LayoutOuter, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Competition Schedule Management",
        description: "Manage competition schedules, stages, and time slots"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      showAddForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard p-6 rounded-lg border border-border shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-medium text-onSurface mb-4", children: editingSchedule ? "Edit Competition Schedule" : "Add New Schedule" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Competition *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  ...register("Competition", { required: true, valueAsNumber: true }),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary ring-border",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Competition" }),
                    competitions.map((comp) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: comp.CompetitionStructureId, children: [
                      comp.GroupGroupName,
                      " - ",
                      comp.CompetitionItemTitle
                    ] }, comp.CompetitionStructureId))
                  ]
                }
              ),
              errors.Competition && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "Competition is required" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Event Stage *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  ...register("Stage", { required: true, valueAsNumber: true }),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary ring-border",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Stage" }),
                    stages.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: stage.ESGId, children: stage.Title }, stage.ESGId))
                  ]
                }
              ),
              errors.Stage && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "Stage is required" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Scheduled Start Time *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "datetime-local",
                  ...register("ScheduledStartTimeString", { required: true }),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border"
                }
              ),
              errors.ScheduledStartTimeString && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "Start time is required" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Scheduled End Time *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "datetime-local",
                  ...register("ScheduledEndTimeString", { required: true }),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border"
                }
              ),
              errors.ScheduledEndTimeString && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "End time is required" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Reported Start Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "datetime-local",
                  ...register("ReportedStartTimeString"),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Reported End Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "datetime-local",
                  ...register("ReportedEndTimeString"),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Display Order *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  ...register("Order", { required: true, valueAsNumber: true }),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                  placeholder: "1"
                }
              ),
              errors.Order && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "Order is required" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-x-2 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleCancel,
                className: "inline-flex items-center gap-x-2 rounded-md bg-surface px-4 py-2 text-sm font-semibold text-onSurfaceVariant shadow-sm hover:bg-surfaceCard border border-border",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
                children: editingSchedule ? "Update Schedule" : "Add Schedule"
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
            "Add Schedule"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard rounded-lg border border-border shadow-sm overflow-hidden", children: schedules.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "No schedules created yet. Add your first schedule above." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Order" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Competition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Stage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Scheduled Start" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Scheduled End" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Reported Start" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-onSurfaceVariant uppercase", children: "Reported End" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right text-xs font-medium text-onSurfaceVariant uppercase", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-surfaceCard divide-y divide-border", children: schedules.map((schedule) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-surface", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-onSurface", children: schedule.Order }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-sm text-onSurface", children: schedule.Competition || "-" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-onSurfaceVariant", children: schedule.StageTitle || "-" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-onSurfaceVariant", children: schedule.ScheduledStartTime ? new Date(schedule.ScheduledStartTime).toLocaleString() : "-" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-onSurfaceVariant", children: schedule.ScheduledEndTime ? new Date(schedule.ScheduledEndTime).toLocaleString() : "-" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-onSurfaceVariant", children: schedule.ReportedStartTime ? new Date(schedule.ReportedStartTime).toLocaleString() : "-" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-onSurfaceVariant", children: schedule.ReportedEndTime ? new Date(schedule.ReportedEndTime).toLocaleString() : "-" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-right text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleEdit(schedule),
                className: "p-1.5 text-blue-600 hover:bg-blue-50 rounded-md",
                title: "Edit",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDelete(schedule.CSId),
                className: "p-1.5 text-red-600 hover:bg-red-50 rounded-md",
                title: "Delete",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4" })
              }
            )
          ] }) })
        ] }, schedule.CSId)) })
      ] }) }) })
    ] })
  ] });
}
export {
  ManageCompetitionSchedule as default
};
