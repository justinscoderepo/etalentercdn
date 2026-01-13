import { r as reactExports, u as useBackend, j as jsxRuntimeExports, z as zt } from "./main-B7w5eCOl.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { F as ForwardRef } from "./UserGroupIcon-C7G6h27R.js";
import { F as ForwardRef$1 } from "./PlusIcon-CAPBj82K.js";
import { F as ForwardRef$2 } from "./PencilIcon-Cm_gsuKe.js";
import { F as ForwardRef$3 } from "./TrashIcon-xWLadHx8.js";
const MaxParticipation = () => {
  const [editingId, setEditingId] = reactExports.useState(null);
  const [eventDetails, setEventDetails] = reactExports.useState(null);
  const [participationRules, setParticipationRules] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const { rows: events } = useBackend("/EventJson/Get", {
    select: "EVId,JsonSettings,EventSecret",
    noGet: false
  });
  reactExports.useEffect(() => {
    if (events && events.length > 0) {
      const event = events[0];
      setEventDetails(event);
      if (event.JsonSettings) {
        try {
          const jsonSettings = JSON.parse(event.JsonSettings);
          const customRules = jsonSettings?.AdditionalSettings?.CustomMaxParticipationPerCandidate || [];
          setParticipationRules(customRules);
        } catch (error) {
          console.error("Error parsing JsonSettings:", error);
          setParticipationRules([]);
        }
      }
      setIsLoading(false);
    }
  }, [events]);
  const { rows: competitionCategories } = useBackend("/CompetitionCategoryJson/Get", {
    select: "CompetitionCategoryId,CompetitionCategoryName",
    noGet: false
  });
  const onSubmit = (data) => {
    if (editingId !== null) {
      const updatedRules = participationRules.map(
        (rule, index) => index === editingId ? {
          CompetitionCategoryId: data.CompetitionCategoryId,
          MaxParticipation: parseInt(data.MaxParticipation)
        } : rule
      );
      setParticipationRules(updatedRules);
      zt.success("Rule updated successfully");
      setEditingId(null);
    } else {
      const newRule = {
        CompetitionCategoryId: data.CompetitionCategoryId,
        MaxParticipation: parseInt(data.MaxParticipation)
      };
      setParticipationRules([...participationRules, newRule]);
      zt.success("Rule added successfully");
    }
    reset();
  };
  const handleEdit = (index) => {
    const rule = participationRules[index];
    setEditingId(index);
    reset({
      CompetitionCategoryId: rule.CompetitionCategoryId,
      MaxParticipation: rule.MaxParticipation
    });
  };
  const handleDelete = (index) => {
    const updatedRules = participationRules.filter((_, i) => i !== index);
    setParticipationRules(updatedRules);
    zt.success("Rule deleted successfully");
  };
  const handleSaveAll = async () => {
    if (!eventDetails) {
      zt.error("Event details not loaded");
      return;
    }
    try {
      let jsonSettings = {};
      if (eventDetails.JsonSettings) {
        jsonSettings = JSON.parse(eventDetails.JsonSettings);
      }
      if (!jsonSettings.AdditionalSettings) {
        jsonSettings.AdditionalSettings = {};
      }
      jsonSettings.AdditionalSettings.CustomMaxParticipationPerCandidate = participationRules;
      const response = await fetch("/EventJson/Save", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          Select: "EVId,JsonSettings",
          EVId: eventDetails.EVId,
          JsonSettings: JSON.stringify(jsonSettings)
        })
      });
      if (response.ok) {
        zt.success("All participation rules saved successfully");
      } else {
        zt.error("Failed to save participation rules");
      }
    } catch (error) {
      console.error("Error saving participation rules:", error);
      zt.error("Error saving participation rules");
    }
  };
  const getCategoryName = (categoryId) => {
    const category = competitionCategories?.find(
      (cat) => cat.CompetitionCategoryId === categoryId
    );
    return category?.CompetitionCategoryName || categoryId;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Maximum Participation Per Candidate",
        subHeading: "Configure custom maximum participation limits by competition category",
        icon: ForwardRef,
        rightChildren: participationRules.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleSaveAll,
            className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            children: "Save All Changes"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-contentBgOuter rounded-lg shadow-sm border border-border p-6 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-onSurface mb-4", children: editingId !== null ? "Edit Participation Rule" : "Add New Participation Rule" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold leading-6 text-onSurface mb-1", children: "Competition Category *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  ...register("CompetitionCategoryId", {
                    required: "Competition category is required"
                  }),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Competition Category" }),
                    competitionCategories?.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "option",
                      {
                        value: category.CompetitionCategoryId,
                        children: category.CompetitionCategoryName
                      },
                      category.CompetitionCategoryId
                    ))
                  ]
                }
              ),
              errors.CompetitionCategoryId && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-600", children: errors.CompetitionCategoryId.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold leading-6 text-onSurface mb-1", children: "Maximum Participation *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: "1",
                  ...register("MaxParticipation", {
                    required: "Maximum participation is required",
                    min: { value: 1, message: "Must be at least 1" }
                  }),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                  placeholder: "Enter maximum participation count"
                }
              ),
              errors.MaxParticipation && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-600", children: errors.MaxParticipation.message })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3", children: [
            editingId !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setEditingId(null);
                  reset();
                },
                className: "inline-flex items-center gap-x-2 rounded-md bg-surfaceVariant px-6 py-2.5 text-sm font-semibold text-onSurfaceVariant shadow-sm hover:bg-surfaceCard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "-mr-0.5 h-5 w-5" }),
                  editingId !== null ? "Update Rule" : "Add Rule"
                ]
              }
            )
          ] })
        ] })
      ] }),
      participationRules.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-contentBgOuter rounded-lg shadow-sm border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surfaceCard", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-onSurface uppercase tracking-wider", children: "Competition Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-onSurface uppercase tracking-wider", children: "Maximum Participation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-right text-xs font-semibold text-onSurface uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-contentBgOuter divide-y divide-border", children: participationRules.map((rule, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-surface", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-onSurface", children: getCategoryName(rule.CompetitionCategoryId) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-onSurface", children: rule.MaxParticipation }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleEdit(index),
                className: "text-primary hover:text-primaryHover mr-3",
                title: "Edit",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDelete(index),
                className: "text-red-600 hover:text-red-800",
                title: "Delete",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }, index)) })
      ] }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-contentBgOuter rounded-lg shadow-sm border border-border p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "mx-auto h-12 w-12 text-onSurfaceVariant mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-onSurface mb-1", children: "No participation rules configured" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "Add your first participation rule using the form above" })
      ] })
    ] })
  ] }) });
};
export {
  MaxParticipation as default
};
