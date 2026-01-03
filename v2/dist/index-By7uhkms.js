import { x as useAppContext, r as reactExports, u as useBackend, j as jsxRuntimeExports, p as post, z as zt, i as classNames } from "./main-B7w5eCOl.js";
import { O as OldNewTabLayout } from "./OldNewTabLayout-g9TCcW0h.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { F as ForwardRef } from "./PlusIcon-CAPBj82K.js";
import { F as ForwardRef$1 } from "./PencilIcon-Cm_gsuKe.js";
import { F as ForwardRef$2 } from "./TrashIcon-xWLadHx8.js";
import { F as ForwardRef$3 } from "./TrophyIcon-DjeOA5id.js";
import { d as dt } from "./tabs-C66TNEoR.js";
import "./navigationUtils-BZC1EMRn.js";
import "./use-resolve-button-type-DPiHyuBj.js";
import "./keyboard-Dku-r8UD.js";
import "./use-is-mounted-DkvN6zYE.js";
import "./hidden-tL6qlWMm.js";
function RankSettings() {
  const { eventDetails } = useAppContext();
  const [editingId, setEditingId] = reactExports.useState(null);
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const { rows, status, refetch } = useBackend("/SetupJson/KeepScore", {
    filter: `EventCategory=${eventDetails?.EventCategoryId || 0}&ScoreType=Rank`,
    select: "EventGradeId,RankTitle,BonusPoints,ParticipantType,Group,CompetitionItem,EventCategory"
  });
  const ranks = rows || [];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await post("/SetupJson/KeepScore", {
        ...data,
        EventCategory: eventDetails?.EventCategoryId,
        ScoreType: "Rank"
      });
      zt.success("Rank saved successfully");
      refetch();
      reset();
      setShowAddForm(false);
      setEditingId(null);
    } catch (error) {
      zt.error("Failed to save rank");
    }
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this rank?")) return;
    try {
      await post("/SetupJson/Remove", { EventGradeId: id });
      zt.success("Rank deleted successfully");
      refetch();
    } catch (error) {
      zt.error("Failed to delete rank");
    }
  };
  if (status === "loading") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8", children: "Loading ranks..." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-medium text-onSurface", children: "Rank Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setShowAddForm(!showAddForm),
          className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-4 w-4" }),
            "New Rank"
          ]
        }
      )
    ] }),
    showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-contentBgOuter p-4 rounded-lg border border-border shadow-sm mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-onSurface mb-4", children: "Add New Rank" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Rank Title *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                ...register("RankTitle", { required: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "E.g., First Place"
              }
            ),
            errors.RankTitle && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "This field is required" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Bonus Points" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                ...register("BonusPoints"),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "E.g., 10"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setShowAddForm(false);
                reset();
              },
              className: "inline-flex items-center gap-x-2 rounded-md bg-surfaceVariant px-4 py-2 text-sm font-semibold text-onSurfaceVariant shadow-sm hover:bg-surfaceCard",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
              children: "Save Rank"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: ranks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 bg-surfaceCard rounded-lg border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "No ranks configured yet. Add your first rank above." }) }) : ranks.map((rank) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-contentBgOuter p-4 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-onSurface", children: rank.RankTitle }),
            rank.BonusPoints && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-onSurfaceVariant mt-1", children: [
              "Bonus Points: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: rank.BonusPoints })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setEditingId(rank.EventGradeId),
                className: "p-1.5 text-primary hover:bg-primary/10 rounded-md",
                title: "Edit",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDelete(rank.EventGradeId),
                className: "p-1.5 text-red-600 hover:bg-red-50 rounded-md",
                title: "Delete",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      },
      rank.EventGradeId
    )) })
  ] });
}
function GradeSettings() {
  const { eventDetails } = useAppContext();
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const { rows: grades = [], refetch } = useBackend("/SetupJson/KeepScore", {
    filter: `EventCategory=${eventDetails?.EventCategoryId || 0}&ScoreType=Grade`,
    select: "EventGradeId,GradeName,Value,BonusPoints,EventCategory"
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await post("/SetupJson/KeepScore", {
        ...data,
        EventCategory: eventDetails?.EventCategoryId,
        ScoreType: "Grade"
      });
      zt.success("Grade saved successfully");
      refetch();
      reset();
      setShowAddForm(false);
    } catch (error) {
      zt.error("Failed to save grade");
    }
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this grade?")) return;
    try {
      await post("/SetupJson/Remove", { EventGradeId: id });
      zt.success("Grade deleted successfully");
      refetch();
    } catch (error) {
      zt.error("Failed to delete grade");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-medium text-onSurface", children: "Grade Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setShowAddForm(!showAddForm),
          className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-4 w-4" }),
            "New Grade"
          ]
        }
      )
    ] }),
    showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-contentBgOuter p-4 rounded-lg border border-border shadow-sm mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-onSurface mb-4", children: "Add New Grade" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Grade Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                ...register("GradeName", { required: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "E.g., A+"
              }
            ),
            errors.GradeName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "This field is required" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Value/Percentage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                step: "0.01",
                ...register("Value"),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "E.g., 95"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Bonus Points" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                ...register("BonusPoints"),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "E.g., 5"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setShowAddForm(false);
                reset();
              },
              className: "inline-flex items-center gap-x-2 rounded-md bg-surfaceVariant px-4 py-2 text-sm font-semibold text-onSurfaceVariant shadow-sm hover:bg-surfaceCard",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
              children: "Save Grade"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: grades.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full text-center py-8 bg-surfaceCard rounded-lg border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "No grades configured yet. Add your first grade above." }) }) : grades.map((grade) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-contentBgOuter p-4 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-medium text-onSurface", children: grade.GradeName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "p-1.5 text-primary hover:bg-primary/10 rounded-md",
                  title: "Edit",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleDelete(grade.EventGradeId),
                  className: "p-1.5 text-red-600 hover:bg-red-50 rounded-md",
                  title: "Delete",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            grade.Value && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-onSurfaceVariant", children: [
              "Value: ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                grade.Value,
                "%"
              ] })
            ] }),
            grade.BonusPoints && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-onSurfaceVariant", children: [
              "Bonus: ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                grade.BonusPoints,
                " pts"
              ] })
            ] })
          ] })
        ]
      },
      grade.EventGradeId
    )) })
  ] });
}
function JudgesRatingCriteria() {
  const { eventDetails } = useAppContext();
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const { rows, refetch } = useBackend("/SetupJson/GetJudgesPointDetails", {
    filter: `EventCategory=${eventDetails?.EventCategoryId || 0}`,
    select: "JudgesPointId,CriteriaName,MaximumPoints,CompetitionItem,EventCategory"
  });
  const criteria = rows || [];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await post("/SetupJson/KeepJudgesPointDetails", {
        ...data,
        EventCategory: eventDetails?.EventCategoryId
      });
      zt.success("Criteria saved successfully");
      refetch();
      reset();
      setShowAddForm(false);
    } catch (error) {
      zt.error("Failed to save criteria");
    }
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this criteria?")) return;
    try {
      await post("/SetupJson/RemoveJudgesPointDetails", { JudgesPointId: id });
      zt.success("Criteria deleted successfully");
      refetch();
    } catch (error) {
      zt.error("Failed to delete criteria");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-medium text-onSurface", children: "Judges Rating Criteria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setShowAddForm(!showAddForm),
          className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-4 w-4" }),
            "New Criteria"
          ]
        }
      )
    ] }),
    showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-contentBgOuter p-4 rounded-lg border border-border shadow-sm mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-onSurface mb-4", children: "Add New Rating Criteria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Criteria Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                ...register("CriteriaName", { required: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "E.g., Technical Skill"
              }
            ),
            errors.CriteriaName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "This field is required" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Maximum Points *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                ...register("MaximumPoints", { required: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "E.g., 10"
              }
            ),
            errors.MaximumPoints && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "This field is required" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setShowAddForm(false);
                reset();
              },
              className: "inline-flex items-center gap-x-2 rounded-md bg-surfaceVariant px-4 py-2 text-sm font-semibold text-onSurfaceVariant shadow-sm hover:bg-surfaceCard",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
              children: "Save Criteria"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: criteria.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full text-center py-8 bg-surfaceCard rounded-lg border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "No judging criteria configured yet. Add your first criteria above." }) }) : criteria.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-contentBgOuter p-4 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-onSurface", children: item.CriteriaName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-onSurfaceVariant mt-1", children: [
              "Maximum Points: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.MaximumPoints })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "p-1.5 text-primary hover:bg-primary/10 rounded-md",
                title: "Edit",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDelete(item.JudgesPointId),
                className: "p-1.5 text-red-600 hover:bg-red-50 rounded-md",
                title: "Delete",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      },
      item.JudgesPointId
    )) })
  ] });
}
function ScoreSettings() {
  const [selectedTab, setSelectedTab] = reactExports.useState(0);
  const tabs = [
    { title: "New React View", active: true },
    { title: "Old View", path: "/SetUp/ScoreSettings" }
  ];
  const scoreTabs = [
    { name: "Rank", component: RankSettings },
    { name: "Grade", component: GradeSettings },
    { name: "Judges Rating Criteria", component: JudgesRatingCriteria }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OldNewTabLayout, { tabs, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Score Settings",
        subHeading: "Configure ranking, grading, and judging criteria for competitions",
        rightChildren: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-x-2 text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Scoring Configuration" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(dt.Group, { selectedIndex: selectedTab, onChange: setSelectedTab, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(dt.List, { className: "flex space-x-1 rounded-xl bg-surfaceVariant p-1 mb-4", children: scoreTabs.map((tab, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        dt,
        {
          className: ({ selected }) => classNames(
            "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
            "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
            selected ? "bg-white shadow text-primary" : "text-gray-700 hover:bg-white/[0.12] hover:text-gray-900"
          ),
          children: tab.name
        },
        tab.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(dt.Panels, { children: scoreTabs.map((tab, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(dt.Panel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(tab.component, {}) }, idx)) })
    ] }) })
  ] }) }) });
}
export {
  ScoreSettings as default
};
