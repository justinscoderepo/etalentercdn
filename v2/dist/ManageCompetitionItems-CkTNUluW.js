import { r as reactExports, m as useEventContext, C as get, z as zt, p as post, j as jsxRuntimeExports, L as Loader, i as classNames } from "./main-B7w5eCOl.js";
import { B as Box } from "./box-Du61b7dg.js";
import { F as ForwardRef$1 } from "./XMarkIcon-DzyB_jak.js";
import { F as ForwardRef$2 } from "./PlusIcon-CAPBj82K.js";
import { F as ForwardRef$3 } from "./TableCellsIcon-Di039zGs.js";
import { F as ForwardRef$4 } from "./TrophyIcon-DjeOA5id.js";
import { F as ForwardRef$5 } from "./StarIcon-Cu8oGMVF.js";
import { F as ForwardRef$6 } from "./PencilSquareIcon-CPfVZmG_.js";
import { F as ForwardRef$7 } from "./TrashIcon-xWLadHx8.js";
function GiftIcon({
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
    d: "M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(GiftIcon);
function ManageCompetitionItems() {
  const { eventDetails } = useEventContext();
  const [loading, setLoading] = reactExports.useState(false);
  const [competitions, setCompetitions] = reactExports.useState([]);
  const [categories, setCategories] = reactExports.useState([]);
  const [scoringMethods, setScoringMethods] = reactExports.useState([]);
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [editingCompetitionId, setEditingCompetitionId] = reactExports.useState(null);
  const [formData, setFormData] = reactExports.useState({
    Title: "",
    Category: "",
    ScoreLabel: ""
  });
  reactExports.useEffect(() => {
    loadCompetitions();
    loadCategories();
    loadScoringMethods();
  }, [eventDetails]);
  const loadCompetitions = reactExports.useCallback(async () => {
    if (!eventDetails?.EventCategory) return;
    setLoading(true);
    try {
      const response = await get("/CompetitionItemsJson/Get", {
        EventCategory: eventDetails.EventCategory,
        PageSize: 1e3
      });
      if (response && response.Results) {
        setCompetitions(response.Results);
        if (response.Results.length === 0) {
          setShowAddForm(true);
        }
      }
    } catch (error) {
      console.error("Error loading competitions:", error);
      zt.error("Failed to load competitions");
    } finally {
      setLoading(false);
    }
  }, [eventDetails]);
  const loadCategories = reactExports.useCallback(async () => {
    try {
      const response = await get("/CompetitionCategoriesJson/Get", {
        PageSize: 1e3
      });
      if (response && response.Results) {
        setCategories(response.Results);
      }
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  }, []);
  const loadScoringMethods = reactExports.useCallback(async () => {
    try {
      const response = await get("/ScoreLabelJson/Get", {
        PageSize: 1e3
      });
      if (response && response.Results) {
        setScoringMethods(response.Results);
      }
    } catch (error) {
      console.error("Error loading scoring methods:", error);
    }
  }, []);
  const resetForm = reactExports.useCallback(() => {
    setFormData({
      Title: "",
      Category: "",
      ScoreLabel: ""
    });
    setEditingCompetitionId(null);
    setShowAddForm(false);
  }, []);
  const handleInputChange = reactExports.useCallback((field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  }, []);
  const handleSave = reactExports.useCallback(async () => {
    if (!formData.Title.trim()) {
      zt.error("Competition Title is required");
      return;
    }
    if (!formData.Category) {
      zt.error("Competition Type is required");
      return;
    }
    if (!formData.ScoreLabel) {
      zt.error("Scoring Method is required");
      return;
    }
    setLoading(true);
    try {
      const saveData = {
        ...formData,
        CompetitionId: editingCompetitionId,
        EventCategory: eventDetails?.EventCategory
      };
      const response = await post("/CompetitionItemsJson/Save", saveData);
      if (response && response.success !== false) {
        zt.success(editingCompetitionId ? "Competition updated successfully" : "Competition saved successfully");
        resetForm();
        await loadCompetitions();
      } else {
        throw new Error(response?.message || "Failed to save competition");
      }
    } catch (error) {
      console.error("Error saving competition:", error);
      zt.error(error.message || "Failed to save competition");
    } finally {
      setLoading(false);
    }
  }, [formData, editingCompetitionId, eventDetails, resetForm, loadCompetitions]);
  const handleEdit = reactExports.useCallback((competition) => {
    setFormData({
      Title: competition.Title || "",
      Category: competition.Category || "",
      ScoreLabel: competition.ScoreLabel || ""
    });
    setEditingCompetitionId(competition.CompetitionId);
    setShowAddForm(true);
  }, []);
  const handleDelete = reactExports.useCallback(
    async (competitionId) => {
      if (!window.confirm("Are you sure you want to delete this competition?")) {
        return;
      }
      setLoading(true);
      try {
        const response = await post("/CompetitionItemsJson/Remove", { CompetitionId: competitionId });
        if (response && response.success !== false) {
          zt.success("Competition deleted successfully");
          await loadCompetitions();
        } else {
          throw new Error(response?.message || "Failed to delete competition");
        }
      } catch (error) {
        console.error("Error deleting competition:", error);
        zt.error(error.message || "Failed to delete competition");
      } finally {
        setLoading(false);
      }
    },
    [loadCompetitions]
  );
  const handleToggleStatus = reactExports.useCallback(
    async (competition) => {
      const newStatus = competition.Status === 2 ? 1 : 2;
      setLoading(true);
      try {
        const response = await post("/CompetitionItemsJson/Save", {
          ...competition,
          Status: newStatus
        });
        if (response && response.success !== false) {
          zt.success(`Competition ${newStatus === 2 ? "activated" : "deactivated"} successfully`);
          await loadCompetitions();
        } else {
          throw new Error(response?.message || "Failed to update competition status");
        }
      } catch (error) {
        console.error("Error updating competition status:", error);
        zt.error(error.message || "Failed to update competition status");
      } finally {
        setLoading(false);
      }
    },
    [loadCompetitions]
  );
  if (loading && competitions.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { heading: "Competition Categories Setup", description: "Define competition items like Dance, Music, Speech, etc. with appropriate scoring methods", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setShowAddForm(!showAddForm),
          className: classNames(
            "inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
            showAddForm ? "bg-red-600 text-white hover:bg-red-700" : "bg-green-600 text-white hover:bg-green-700"
          ),
          children: showAddForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "w-4 h-4 mr-2" }),
            "Hide Form"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "w-4 h-4 mr-2" }),
            "New Competition"
          ] })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `/CompetitionItems/Manage/${eventDetails?.EventCategory || ""}/null`,
          className: "inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors duration-200",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "w-4 h-4 mr-2" }),
            "Table View"
          ]
        }
      ) })
    ] }),
    showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg p-6 border-2 border-dashed border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold text-onSurface mb-4 flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "w-5 h-5 mr-2 text-blue-600" }),
        editingCompetitionId ? "Edit Competition Item" : "Add New Competition Item"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Competition Title *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: formData.Title,
              onChange: (e) => handleInputChange("Title", e.target.value),
              placeholder: "e.g., Song, Dance, Speech",
              className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Competition Type *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: formData.Category,
              onChange: (e) => handleInputChange("Category", e.target.value),
              className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Please Select" }),
                categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: category.ProgramCategoryId, children: category.CategoryName }, category.ProgramCategoryId))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Scoring Method *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: formData.ScoreLabel,
              onChange: (e) => handleInputChange("ScoreLabel", e.target.value),
              className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Please Select" }),
                scoringMethods.map((method) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: method.LabelId, children: method.Label }, method.LabelId))
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end space-x-3 mt-6 pt-4 border-t", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: resetForm, className: "px-4 py-2 text-sm font-medium text-onSurfaceVariant bg-surfaceVariant hover:bg-surfaceCard rounded-lg transition-colors duration-200", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleSave,
            disabled: loading,
            className: "px-6 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200 disabled:opacity-50",
            children: loading ? "Saving..." : editingCompetitionId ? "Update Competition" : "Save Competition"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: competitions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 bg-surfaceCard rounded-lg border-2 border-dashed border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "w-12 h-12 text-onSurfaceVariant mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant mb-2", children: "No competition items found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "Please add new competition items to get started" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: competitions.map((competition) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-contentBgOuter border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold text-blue-800 flex items-center mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "w-5 h-5 mr-2 text-blue-600" }),
          competition.Title
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: competition.Status === 2, onChange: () => handleToggleStatus(competition), className: "sr-only peer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-6 bg-surfaceVariant peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-contentBgOuter after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "w-4 h-4 mr-2 text-sky-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-onSurfaceVariant", children: "Type:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 font-medium text-onSurface", children: competition.CategoryCategoryName || "Not specified" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "w-4 h-4 mr-2 text-yellow-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-onSurfaceVariant", children: "Scoring:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 font-medium text-onSurface", children: competition.ScoreLabelLabel || "Not specified" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleEdit(competition),
            className: "inline-flex items-center px-3 py-1.5 text-sm font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded transition-colors duration-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "w-4 h-4 mr-1" }),
              "Edit"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleDelete(competition.CompetitionId),
            className: "inline-flex items-center px-3 py-1.5 text-sm font-medium text-red-700 bg-red-100 hover:bg-red-200 rounded transition-colors duration-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$7, { className: "w-4 h-4 mr-1" }),
              "Delete"
            ]
          }
        )
      ] })
    ] }, competition.CompetitionId)) }) }),
    competitions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface border border-primary/20 rounded-lg p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-blue-900 font-medium mb-2", children: "What's next?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "•",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/CompetitionStructure/Tab", className: "underline hover:text-blue-600", children: "Assign Competition Items to Age Groups?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "•",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/SetUp/ScoreSettings", className: "underline hover:text-blue-600", children: "Configure Scoring Criteria & Points?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "•",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/Coordinator/ManageBulkParticipants", className: "underline hover:text-blue-600", children: "Add Participants to Competitions?" })
        ] })
      ] })
    ] }),
    loading && competitions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-contentBgOuter rounded-lg p-6 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) }) })
  ] }) });
}
export {
  ManageCompetitionItems as default
};
