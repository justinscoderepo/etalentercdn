import { r as reactExports, j as jsxRuntimeExports, u as useBackend, z as zt } from "./main-B7w5eCOl.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { O as OldNewTabLayout } from "./OldNewTabLayout-g9TCcW0h.js";
import FormEditor from "./formEditor-C5u1WBjw.js";
import { F as ForwardRef$1 } from "./TrophyIcon-DjeOA5id.js";
import { F as ForwardRef$2 } from "./Bars3Icon-CVFng2-4.js";
import { F as ForwardRef$3 } from "./PencilIcon-Cm_gsuKe.js";
import { F as ForwardRef$4 } from "./TrashIcon-xWLadHx8.js";
import { F as ForwardRef$5 } from "./PlusIcon-CAPBj82K.js";
import "./navigationUtils-BZC1EMRn.js";
import "./index.esm-CiAIyUc7.js";
import "./renderComponents-Db-mePWR.js";
import "./validationMessage-D3Gjn0ek.js";
import "./CheckCircleIcon-773RZCVj.js";
import "./modalForm-DOZs0ugH.js";
import "./dialog-DkCfFwgC.js";
import "./keyboard-Dku-r8UD.js";
import "./dom-XjFFvgb6.js";
import "./use-is-mounted-DkvN6zYE.js";
import "./hidden-tL6qlWMm.js";
import "./open-closed-gVG0H0sE.js";
import "./description-3iOOxFmG.js";
import "./XMarkIcon-CyBmq7NC.js";
import "./XCircleIcon-CFrF3RSu.js";
import "./CheckCircleIcon-B36U4EaE.js";
function RectangleStackIcon({
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
    d: "M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(RectangleStackIcon);
function CompetitionItemForm({ editingItem, categories, scoringMethods, onSubmit, onCancel, open }) {
  const rowData = reactExports.useMemo(() => {
    if (!editingItem) {
      return {
        Status: 2,
        // Active by default
        Order: 0
        // Default order
      };
    }
    return {
      CompetitionId: editingItem.CompetitionId,
      Title: editingItem.Title || "",
      Category: editingItem.Category || "",
      ScoreLabel: editingItem.ScoreLabel || "",
      Order: editingItem.Order || 0,
      Status: editingItem.Status || 2
    };
  }, [editingItem]);
  const formFields = [
    {
      name: "Title",
      label: "Competition Title",
      type: "text",
      placeholder: "e.g., Song, Dance, Speech, Storytelling",
      validate: { required: true, minLength: 2, maxLength: 100 }
    },
    {
      name: "Category",
      label: "Competition Type",
      type: "select",
      placeholder: "Select competition category",
      options: categories.map((cat) => ({
        text: cat.CategoryName,
        value: cat.ProgramCategoryId
      })),
      validate: { required: true }
    },
    {
      name: "ScoreLabel",
      label: "Scoring Method",
      type: "select",
      placeholder: "Select scoring method",
      options: scoringMethods.map((method) => ({
        text: method.Label,
        value: method.LabelId
      })),
      validate: { required: true }
    },
    {
      name: "Order",
      label: "Display Order",
      type: "number",
      placeholder: "Enter display order (0-999)",
      validate: { required: true, min: 0, max: 999 }
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormEditor,
    {
      title: editingItem ? "Edit Competition Item" : "Add New Competition Item",
      description: editingItem ? "Update competition item details including title, type, and scoring method" : "Create a new competition item by specifying title, category, and scoring method",
      row: rowData,
      fields: formFields,
      onSave: onSubmit,
      onCancel
    }
  );
}
const getScoringStyle = (scoreLabel) => {
  const scoringStyles = {
    1: {
      // Marks
      borderColor: "border-l-blue-500",
      bgColor: "bg-blue-50/30",
      badgeBg: "bg-blue-50",
      badgeBorder: "border-blue-200",
      badgeText: "text-blue-700",
      iconColor: "text-blue-600",
      icon: "📝"
    },
    2: {
      // Count
      borderColor: "border-l-green-500",
      bgColor: "bg-green-50/30",
      badgeBg: "bg-green-50",
      badgeBorder: "border-green-200",
      badgeText: "text-green-700",
      iconColor: "text-green-600",
      icon: "🔢"
    },
    3: {
      // Rating out of 10
      borderColor: "border-l-amber-500",
      bgColor: "bg-amber-50/30",
      badgeBg: "bg-amber-50",
      badgeBorder: "border-amber-200",
      badgeText: "text-amber-700",
      iconColor: "text-amber-600",
      icon: "⭐"
    },
    4: {
      // Range out of 10
      borderColor: "border-l-purple-500",
      bgColor: "bg-purple-50/30",
      badgeBg: "bg-purple-50",
      badgeBorder: "border-purple-200",
      badgeText: "text-purple-700",
      iconColor: "text-purple-600",
      icon: "📊"
    }
  };
  return scoringStyles[scoreLabel] || {
    borderColor: "border-l-border",
    bgColor: "bg-surface",
    badgeBg: "bg-surface",
    badgeBorder: "border-border",
    badgeText: "text-onSurfaceVariant",
    iconColor: "text-onSurfaceVariant",
    icon: "❓"
  };
};
const CompetitionItemCard = ({ item, onEdit, onDelete, onDragStart, onDragEnd, onDragOver, onDrop, isDragging }) => {
  const scoringStyle = getScoringStyle(item.ScoreLabel);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      draggable: true,
      onDragStart: (e) => onDragStart(e, item),
      onDragEnd,
      onDragOver,
      onDrop: (e) => onDrop(e, item),
      className: `group relative bg-surfaceCard border border-border ${scoringStyle.borderColor} border-l-4 rounded-lg hover:shadow-md hover:border-primary transition-all duration-200 mb-2 ${isDragging ? "opacity-50" : ""}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 cursor-grab active:cursor-grabbing text-onSurfaceVariant hover:text-onSurface", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${scoringStyle.badgeBg} border-2 ${scoringStyle.badgeBorder} shadow-sm`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-bold ${scoringStyle.badgeText}`, children: item.Order || 0 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-5 w-5 text-cyan-600 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-onSurface group-hover:text-primary transition-colors duration-200 truncate", children: item.Title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 ${scoringStyle.badgeBg} border ${scoringStyle.badgeBorder} rounded-lg px-3 py-1.5 flex-shrink-0`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: scoringStyle.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-semibold ${scoringStyle.badgeText} whitespace-nowrap`, children: item.ScoreLabelLabel || "N/A" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => onEdit(item),
              title: "Edit",
              className: "inline-flex items-center justify-center rounded-full p-2 text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm hover:shadow transition-all duration-200",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => onDelete(item.CompetitionId),
              title: "Delete",
              className: "inline-flex items-center justify-center rounded-full p-2 text-white bg-red-500 hover:bg-red-600 shadow-sm hover:shadow transition-all duration-200",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    }
  );
};
function CategorySection({ categoryName, items, onEdit, onDelete, onReorder, colorIndex }) {
  const colorSchemes = [
    { iconColor: "text-cyan-600", badgeBg: "bg-cyan-500" },
    { iconColor: "text-emerald-600", badgeBg: "bg-emerald-500" },
    { iconColor: "text-indigo-600", badgeBg: "bg-indigo-500" },
    { iconColor: "text-purple-600", badgeBg: "bg-purple-500" },
    { iconColor: "text-pink-600", badgeBg: "bg-pink-500" },
    { iconColor: "text-orange-600", badgeBg: "bg-orange-500" }
  ];
  const colorScheme = colorSchemes[colorIndex % colorSchemes.length];
  const stableItems = reactExports.useMemo(() => items || [], [items]);
  const [draggedItem, setDraggedItem] = reactExports.useState(null);
  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = "move";
  };
  const handleDragEnd = () => {
    setDraggedItem(null);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const handleDrop = (e, targetItem) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.CompetitionId === targetItem.CompetitionId) {
      setDraggedItem(null);
      return;
    }
    onReorder(draggedItem, targetItem);
    setDraggedItem(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: `h-5 w-5 ${colorScheme.iconColor}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-onSurface", children: categoryName || "Uncategorized" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${colorScheme.badgeBg} rounded-full px-2.5 py-0.5`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-white", children: items.length }) })
    ] }),
    stableItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard rounded-lg p-6 text-center border-2 border-dashed border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "No items in this category" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: stableItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      CompetitionItemCard,
      {
        item,
        onEdit,
        onDelete,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        onDragOver: handleDragOver,
        onDrop: handleDrop,
        isDragging: draggedItem?.CompetitionId === item.CompetitionId
      },
      `item-${item.CompetitionId}`
    )) })
  ] });
}
function CompetitionItemsList({ items, onEdit, onDelete, onReorder }) {
  const { groupedItems, categories } = reactExports.useMemo(() => {
    if (!items || items.length === 0) return { groupedItems: {}, categories: [] };
    const sortedItems = [...items].sort((a, b) => (a.Order || 0) - (b.Order || 0));
    const groups = {};
    const categoryOrder = [];
    sortedItems.forEach((item) => {
      const categoryName = item.CategoryCategoryName || "Uncategorized";
      if (!groups[categoryName]) {
        groups[categoryName] = [];
        categoryOrder.push(categoryName);
      }
      groups[categoryName].push(item);
    });
    return { groupedItems: groups, categories: categoryOrder };
  }, [items]);
  if (!items || items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 bg-gradient-to-br from-surface to-surfaceCard rounded-2xl border-2 border-dashed border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-contentBgOuter rounded-full p-4 w-20 h-20 mx-auto mb-4 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-12 w-12 text-onSurfaceVariant" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurface mb-2 font-semibold text-lg", children: "No competition items found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: 'Click "Add New Competition" button to create your first item' })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 flex flex-row flex-wrap gap-6", children: categories.map((categoryName, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CategorySection, { categoryName, items: groupedItems[categoryName], onEdit, onDelete, onReorder, colorIndex: index }, categoryName)) });
}
function ManageCompetitionItems() {
  const [showForm, setShowForm] = reactExports.useState(false);
  const [selectedItem, setSelectedItem] = reactExports.useState(null);
  const {
    rows,
    update,
    delete: deleteItem,
    setFilter,
    filters: currentFilters
  } = useBackend("/CompetitionItemsJson/Get", {
    noGet: false,
    deleteUrl: "/CompetitionItemsJson/Remove",
    updateUrl: "/CompetitionItemsJson/Save"
  });
  const { rows: categories } = useBackend("/CompetitionCategoriesJson/Get", {
    select: "Categories"
  });
  const { rows: scoringMethods } = useBackend("/ScoreLabelJson/Get", {
    select: "ScoreLabels"
  });
  const handleAdd = () => {
    setSelectedItem(null);
    setShowForm(true);
  };
  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };
  const handleSave = async (formData) => {
    try {
      const result = await update(formData);
      if (result) {
        zt.success(selectedItem ? "Competition updated successfully" : "Competition added successfully");
        setShowForm(false);
        setSelectedItem(null);
        setFilter({});
      }
    } catch (error) {
      console.error("Error saving competition:", error);
      zt.error("Failed to save competition");
    }
  };
  const handleCancel = () => {
    setShowForm(false);
    setSelectedItem(null);
  };
  const handleDelete = async (competitionId) => {
    if (!window.confirm("Are you sure you want to delete this competition item?")) {
      return;
    }
    try {
      const result = await deleteItem({ CompetitionId: competitionId });
      if (result) {
        zt.success("Competition deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting competition:", error);
      zt.error("Failed to delete competition");
    }
  };
  const handleReorder = async (draggedItem, targetItem) => {
    if (!rows) return;
    try {
      const sortedItems2 = [...rows].sort((a, b) => (a.Order || 0) - (b.Order || 0));
      const draggedIndex = sortedItems2.findIndex((item) => item.CompetitionId === draggedItem.CompetitionId);
      const targetIndex = sortedItems2.findIndex((item) => item.CompetitionId === targetItem.CompetitionId);
      if (draggedIndex === -1 || targetIndex === -1) return;
      const reorderedItems = [...sortedItems2];
      const [removed] = reorderedItems.splice(draggedIndex, 1);
      reorderedItems.splice(targetIndex, 0, removed);
      for (let index = 0; index < reorderedItems.length; index++) {
        const item = reorderedItems[index];
        const newOrder = index + 1;
        if (item.Order !== newOrder) {
          update({ ...item, Order: newOrder });
        }
      }
      setFilter(currentFilters);
      zt.success("Competition items reordered successfully");
    } catch (error) {
      console.error("Error reordering competitions:", error);
      zt.error("Failed to reorder competitions");
    }
  };
  const sortedItems = reactExports.useMemo(() => {
    if (!rows) return [];
    return [...rows].sort((a, b) => (a.Order || 0) - (b.Order || 0));
  }, [rows]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OldNewTabLayout, { title: "Competition Items", showTableView: false, oldRoute: "/SetUp/CompetitionItems", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Competition Items",
        subHeading: "Manage and organize your competitions",
        rightChildren: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleAdd,
            className: "inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-primary to-darkprimary px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-5 w-5" }),
              "Add New Competition"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface border border-primary/20 rounded-xl p-5 mb-6 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 rounded-lg p-2 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5 text-blue-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-onSurface mb-1", children: "Quick Guide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant leading-relaxed", children: "Configure competition items by specifying titles, categories, scoring methods, and display order. Drag and drop items to reorder them - all order numbers will be automatically updated. Each competition can be edited or deleted as needed." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompetitionItemsList, { items: sortedItems, onEdit: handleEdit, onDelete: handleDelete, onReorder: handleReorder }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsx(CompetitionItemForm, { editingItem: selectedItem, categories: categories || [], scoringMethods: scoringMethods || [], onSubmit: handleSave, onCancel: handleCancel, open: showForm })
  ] }) }) });
}
export {
  ManageCompetitionItems as default
};
