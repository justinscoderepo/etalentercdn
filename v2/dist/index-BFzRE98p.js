import { r as reactExports, j as jsxRuntimeExports, i as classNames, z as zt, b as getUserData, m as useEventContext, p as post } from "./main-B7w5eCOl.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { F as ForwardRef$2 } from "./XMarkIcon-DzyB_jak.js";
import { F as ForwardRef$3 } from "./EyeIcon-B2acEKRI.js";
import { F as ForwardRef$4 } from "./EyeSlashIcon-O_xFXInW.js";
import { u as utils, w as writeFileSync } from "./xlsx-70TEQMdC.js";
import { F as ForwardRef$5 } from "./ArrowDownTrayIcon-BPLlu3r3.js";
import { F as ForwardRef$6 } from "./PlusIcon-CAPBj82K.js";
import { F as ForwardRef$7 } from "./UserGroupIcon-C7G6h27R.js";
import { F as ForwardRef$8 } from "./UserIcon-BRPEvw4s.js";
import { F as ForwardRef$9 } from "./CheckIcon-8INY0B1Y.js";
import { F as ForwardRef$a } from "./ChevronDownIcon-DrbBxP_V.js";
import { F as ForwardRef$b } from "./ChevronRightIcon-QSnXtBoc.js";
import { F as ForwardRef$c } from "./FunnelIcon-DfTRpAqE.js";
import { F as ForwardRef$d } from "./TableCellsIcon-Di039zGs.js";
import { F as ForwardRef$e } from "./ArrowPathIcon-CrJmYjUD.js";
import { F as ForwardRef$f } from "./PrinterIcon-BjWJ2xEn.js";
import { F as ForwardRef$g } from "./DocumentTextIcon-CpKnur7u.js";
function ArrowDownIcon({
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
    d: "M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(ArrowDownIcon);
function ArrowUpIcon({
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
    d: "M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(ArrowUpIcon);
const ColumnManager = ({ availableColumns, visibleColumns, onChange, onClose }) => {
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const handleToggle = reactExports.useCallback(
    (column) => {
      const isVisible = visibleColumns.includes(column);
      if (isVisible) {
        onChange(visibleColumns.filter((c) => c !== column));
      } else {
        onChange([...visibleColumns, column]);
      }
    },
    [visibleColumns, onChange]
  );
  const handleSelectAll = reactExports.useCallback(() => {
    onChange(availableColumns);
  }, [availableColumns, onChange]);
  const handleDeselectAll = reactExports.useCallback(() => {
    onChange([]);
  }, [onChange]);
  const filteredColumns = availableColumns.filter((col) => col.toLowerCase().includes(searchTerm.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity", onClick: onClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-y-0 right-0 max-w-md w-full flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col bg-surfaceCard shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 bg-surface border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-medium text-onSurface", children: "Column Manager" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "text-onSurfaceVariant hover:text-onSurface", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-6 w-6" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Select columns to display in the report" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search columns...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            className: "block w-full rounded-md border-0 py-2 px-3 ring-1 ring-inset ring-border placeholder:text-onSurfaceVariant focus:ring-2 focus:ring-primary text-sm"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleSelectAll,
              className: "flex-1 inline-flex items-center justify-center gap-x-1 rounded-md bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-200",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-4 w-4" }),
                "Show All"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleDeselectAll,
              className: "flex-1 inline-flex items-center justify-center gap-x-1 rounded-md bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-200",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-4 w-4" }),
                "Hide All"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-xs text-gray-500", children: [
          visibleColumns.length,
          " of ",
          availableColumns.length,
          " columns selected"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-6 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: filteredColumns.map((column) => {
          const isVisible = visibleColumns.includes(column);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: classNames(
                "flex items-center justify-between p-3 rounded-md border transition-all cursor-pointer",
                isVisible ? "border-primary bg-blue-50" : "border-border bg-surfaceCard hover:bg-surface"
              ),
              onClick: () => handleToggle(column),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: isVisible,
                      onChange: () => handleToggle(column),
                      className: "h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded",
                      onClick: (e) => e.stopPropagation()
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("text-sm font-medium", isVisible ? "text-onSurface" : "text-onSurfaceVariant"), children: column })
                ] }),
                isVisible ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-4 w-4 text-gray-300" })
              ]
            },
            column
          );
        }) }),
        filteredColumns.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-sm text-gray-500", children: [
          'No columns found matching "',
          searchTerm,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 border-t border-border bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onClose,
          className: "w-full inline-flex items-center justify-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryHover",
          children: "Apply Changes"
        }
      ) })
    ] }) }) })
  ] }) });
};
const ExportDrawer = ({ reportData, groupBy, visibleColumns, onClose, eventDetails }) => {
  const [exportFormat, setExportFormat] = reactExports.useState("excel");
  const [includeMetadata, setIncludeMetadata] = reactExports.useState(true);
  const [exporting, setExporting] = reactExports.useState(false);
  const flattenData = reactExports.useCallback(
    (items, level = 0, parentKeys = {}) => {
      const flatData = [];
      items.forEach((item) => {
        if (item.Participants && Array.isArray(item.Participants)) {
          const groupKey = item._groupField || groupBy[level];
          const groupValue = item._groupKey || item[groupKey];
          const newParentKeys = {
            ...parentKeys,
            [groupKey]: groupValue
          };
          const childData = flattenData(item.Participants, level + 1, newParentKeys);
          flatData.push(...childData);
        } else {
          flatData.push({
            ...parentKeys,
            ...item
          });
        }
      });
      return flatData;
    },
    [groupBy]
  );
  const exportToExcel = reactExports.useCallback(async () => {
    setExporting(true);
    try {
      const flatData = flattenData(reportData.data);
      const workbook = utils.book_new();
      const rows = flatData.map((row) => {
        const exportRow = {};
        visibleColumns.forEach((col) => {
          exportRow[col] = row[col] || "";
        });
        groupBy.forEach((group) => {
          if (row[group]) {
            exportRow[group] = row[group];
          }
        });
        return exportRow;
      });
      const worksheet = utils.json_to_sheet(rows);
      if (includeMetadata) {
        const metadataSheet = utils.json_to_sheet([
          { Field: "Event Name", Value: eventDetails?.EventName || "" },
          { Field: "Report Generated", Value: (/* @__PURE__ */ new Date()).toLocaleString() },
          { Field: "Total Records", Value: reportData.meta.totalRecords },
          { Field: "Execution Time (ms)", Value: reportData.meta.executionTimeMs },
          { Field: "Grouped By", Value: groupBy.join(" → ") },
          { Field: "Filters Applied", Value: JSON.stringify(reportData.meta.filters || {}) }
        ]);
        utils.book_append_sheet(workbook, metadataSheet, "Metadata");
      }
      utils.book_append_sheet(workbook, worksheet, "Report Data");
      const timestamp = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const filename = `${eventDetails?.EventName || "Report"}_${timestamp}.xlsx`;
      writeFileSync(workbook, filename);
      zt.success("Excel file exported successfully!");
      onClose();
    } catch (error) {
      console.error("Excel export failed:", error);
      zt.error("Failed to export Excel file");
    } finally {
      setExporting(false);
    }
  }, [reportData, groupBy, visibleColumns, flattenData, includeMetadata, eventDetails, onClose]);
  const exportToPDF = reactExports.useCallback(() => {
    zt.success("Opening print dialog...");
    setTimeout(() => {
      window.print();
      onClose();
    }, 500);
  }, [onClose]);
  const handleExport = reactExports.useCallback(() => {
    if (exportFormat === "excel") {
      exportToExcel();
    } else if (exportFormat === "pdf") {
      exportToPDF();
    }
  }, [exportFormat, exportToExcel, exportToPDF]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity", onClick: onClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-y-0 right-0 max-w-md w-full flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col bg-surfaceCard shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 bg-surface border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-medium text-onSurface", children: "Export Report" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "text-onSurfaceVariant hover:text-onSurface", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-6 w-6" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-onSurfaceVariant", children: "Choose export format and options" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-6 py-4 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-3", children: "Export Format" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-gray-50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "radio",
                  name: "exportFormat",
                  value: "excel",
                  checked: exportFormat === "excel",
                  onChange: (e) => setExportFormat(e.target.value),
                  className: "h-4 w-4 text-primary focus:ring-primary border-gray-300"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-gray-900", children: "📊 Excel (XLSX)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-600", children: "Export as spreadsheet with all data" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-gray-50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "radio",
                  name: "exportFormat",
                  value: "pdf",
                  checked: exportFormat === "pdf",
                  onChange: (e) => setExportFormat(e.target.value),
                  className: "h-4 w-4 text-primary focus:ring-primary border-gray-300"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-gray-900", children: "📄 PDF (Print)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-600", children: "Print to PDF using browser's print dialog" })
              ] })
            ] })
          ] })
        ] }),
        exportFormat === "excel" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: includeMetadata,
                onChange: (e) => setIncludeMetadata(e.target.checked),
                className: "h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-700", children: "Include metadata sheet" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1 ml-6", children: "Adds a separate sheet with report information" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface border border-primary/20 rounded-md p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-blue-900 mb-2", children: "Export Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs text-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Records:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: reportData.meta.totalRecords })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Columns:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: visibleColumns.length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Grouping Levels:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: groupBy.length })
            ] })
          ] })
        ] }),
        reportData.meta.totalRecords > 1e3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-yellow-50 border border-yellow-200 rounded-md p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-yellow-800", children: "⚠️ Large dataset detected. Export may take a moment to complete." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 border-t border-gray-200 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handleExport,
          disabled: exporting,
          className: "w-full inline-flex items-center justify-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryHover disabled:opacity-50",
          children: exporting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white" }),
            "Exporting..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-4 w-4" }),
            "Export Report"
          ] })
        }
      ) })
    ] }) }) })
  ] }) });
};
const FilterPanel = ({ filters, onChange, onClose, eventLevels }) => {
  const [localFilters, setLocalFilters] = reactExports.useState(filters || {});
  const handleFilterChange = reactExports.useCallback((key, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  }, []);
  const handleMultiSelectChange = reactExports.useCallback((key, value) => {
    setLocalFilters((prev) => {
      const currentValues = prev[key] || [];
      const valueNum = parseInt(value);
      if (currentValues.includes(valueNum)) {
        return {
          ...prev,
          [key]: currentValues.filter((v) => v !== valueNum)
        };
      } else {
        return {
          ...prev,
          [key]: [...currentValues, valueNum]
        };
      }
    });
  }, []);
  const handleApply = reactExports.useCallback(() => {
    onChange(localFilters);
    onClose();
  }, [localFilters, onChange, onClose]);
  const handleClearAll = reactExports.useCallback(() => {
    setLocalFilters({});
  }, []);
  const competitionStatuses = [
    { value: 1, label: "Draft" },
    { value: 2, label: "Active/Published" },
    { value: 4, label: "Score Entry" },
    { value: 6, label: "Finished" }
  ];
  const participantTypes = [
    { value: 1, label: "Individual" },
    { value: 2, label: "Team" }
  ];
  const genders = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity", onClick: onClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-y-0 left-0 max-w-md w-full flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col bg-surfaceCard shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 bg-surface border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-medium text-onSurface", children: "Filter Panel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "text-onSurfaceVariant hover:text-onSurface", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-6 w-6" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-onSurfaceVariant", children: "Configure filters for the report" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-6 py-4 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-3", children: "Competition Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: competitionStatuses.map((status) => {
            const isSelected = (localFilters.CompetitionStatus || []).includes(status.value);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: isSelected,
                  onChange: () => handleMultiSelectChange("CompetitionStatus", status.value),
                  className: "h-4 w-4 text-primary focus:ring-primary border-border rounded"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-onSurface", children: status.label })
            ] }, status.value);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-3", children: "Participant Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: participantTypes.map((type) => {
            const isSelected = (localFilters.ParticipantType || []).includes(type.value);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: isSelected,
                  onChange: () => handleMultiSelectChange("ParticipantType", type.value),
                  className: "h-4 w-4 text-primary focus:ring-primary border-border rounded"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-onSurface", children: type.label })
            ] }, type.value);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-3", children: "Gender" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: genders.map((gender) => {
            const isSelected = (localFilters.Gender || []).includes(gender.value);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: isSelected,
                  onChange: () => {
                    const currentGenders = localFilters.Gender || [];
                    if (currentGenders.includes(gender.value)) {
                      handleFilterChange(
                        "Gender",
                        currentGenders.filter((g) => g !== gender.value)
                      );
                    } else {
                      handleFilterChange("Gender", [...currentGenders, gender.value]);
                    }
                  },
                  className: "h-4 w-4 text-primary focus:ring-primary border-border rounded"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-onSurface", children: gender.label })
            ] }, gender.value);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Search by Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: localFilters.NameSearch || "",
              onChange: (e) => handleFilterChange("NameSearch", e.target.value),
              placeholder: "Enter name to search...",
              className: "block w-full rounded-md border-0 py-2 px-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Search by ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: localFilters.IdentityNumberSearch || "",
              onChange: (e) => handleFilterChange("IdentityNumberSearch", e.target.value),
              placeholder: "Enter ID to search...",
              className: "block w-full rounded-md border-0 py-2 px-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary text-sm"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-t border-gray-200 bg-gray-50 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleClearAll,
            className: "w-full inline-flex items-center justify-center gap-x-2 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-300",
            children: "Clear All Filters"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleApply,
            className: "w-full inline-flex items-center justify-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryHover",
            children: "Apply Filters"
          }
        )
      ] })
    ] }) }) })
  ] }) });
};
const GroupByControl = ({ availableFields, selectedGroups, onChange }) => {
  const handleAdd = reactExports.useCallback(
    (field) => {
      if (!selectedGroups.includes(field)) {
        onChange([...selectedGroups, field]);
      }
    },
    [selectedGroups, onChange]
  );
  const handleRemove = reactExports.useCallback(
    (field) => {
      onChange(selectedGroups.filter((g) => g !== field));
    },
    [selectedGroups, onChange]
  );
  const handleMoveUp = reactExports.useCallback(
    (index) => {
      if (index === 0) return;
      const newGroups = [...selectedGroups];
      [newGroups[index - 1], newGroups[index]] = [newGroups[index], newGroups[index - 1]];
      onChange(newGroups);
    },
    [selectedGroups, onChange]
  );
  const handleMoveDown = reactExports.useCallback(
    (index) => {
      if (index === selectedGroups.length - 1) return;
      const newGroups = [...selectedGroups];
      [newGroups[index], newGroups[index + 1]] = [newGroups[index + 1], newGroups[index]];
      onChange(newGroups);
    },
    [selectedGroups, onChange]
  );
  const availableToAdd = availableFields.filter((field) => !selectedGroups.includes(field));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    selectedGroups.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Selected Groups (Order Matters)" }),
      selectedGroups.map((group, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2 bg-surface border border-primary/20 rounded-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => handleMoveUp(index),
              disabled: index === 0,
              className: "p-0.5 text-gray-500 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed",
              title: "Move up",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-3 w-3" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => handleMoveDown(index),
              disabled: index === selectedGroups.length - 1,
              className: "p-0.5 text-gray-500 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed",
              title: "Move down",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-3 w-3" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 text-sm font-medium text-gray-900", children: [
          index + 1,
          ". ",
          group
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleRemove(group), className: "p-1 text-red-600 hover:text-red-800 hover:bg-red-100 rounded", title: "Remove", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4" }) })
      ] }, group))
    ] }),
    availableToAdd.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Available Fields" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-64 overflow-y-auto space-y-1 border border-gray-200 rounded-md p-2", children: availableToAdd.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => handleAdd(field),
          className: "w-full flex items-center justify-between p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: field }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "h-4 w-4 text-gray-400" })
          ]
        },
        field
      )) })
    ] }),
    selectedGroups.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-4 text-sm text-gray-500 border-2 border-dashed border-gray-300 rounded-md", children: "No grouping selected. Select fields above to group data." })
  ] });
};
const ReportTable = ({ data, groupBy, visibleColumns, expandedGroups, onToggleGroup }) => {
  const fieldLabels = reactExports.useMemo(
    () => ({
      UserName: "Name",
      TeamName: "Team Name",
      UserImage: "Photo",
      UserDobString: "Date of Birth",
      UserGender: "Gender",
      UserMobile: "Mobile",
      UserPhone: "Phone",
      UserEmail: "Email",
      CandidateIdentityNumber: "ID Number",
      TeamIdentityNumber: "Team ID",
      RegistrationId: "Reg. ID",
      ChestNumber: "Chest No.",
      CompetitionTitle: "Competition",
      CompetitionOrder: "Order",
      GroupName: "Group",
      Fees: "Fees",
      Score: "Score",
      OrganizationLevel: "Organization",
      MembershipType: "Membership",
      JudgeName: "Judge",
      CreatedDate: "Created"
    }),
    []
  );
  const renderCellValue = reactExports.useCallback((field, value, row) => {
    if (!value && value !== 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-onSurfaceVariant", children: "-" });
    if (field === "UserImage") {
      return value ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: value, alt: "Profile", className: "h-10 w-10 rounded-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center", children: row.TeamName ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$7, { className: "h-5 w-5 text-gray-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$8, { className: "h-5 w-5 text-gray-500" }) });
    }
    if (typeof value === "boolean") {
      return value ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$9, { className: "h-5 w-5 text-green-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-5 w-5 text-gray-300" });
    }
    if (field === "Fees" || field === "Score") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900", children: value });
    }
    if (field.includes("Date") && value) {
      try {
        return new Date(value).toLocaleDateString();
      } catch {
        return value;
      }
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900", children: value });
  }, []);
  const renderGroup = reactExports.useCallback(
    (items, level = 0, parentKey = "") => {
      if (!items || items.length === 0) return null;
      const isLeafLevel = !items[0].Participants || items[0].Participants.length === 0;
      if (isLeafLevel) {
        return items.map((participant, index) => {
          const key = `${parentKey}-leaf-${index}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "hover:bg-surface", children: visibleColumns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-sm border-b border-gray-200", children: renderCellValue(column, participant[column], participant) }, column)) }, key);
        });
      }
      return items.map((group, index) => {
        const groupKey = `${parentKey}-${level}-${index}`;
        const isExpanded = expandedGroups[groupKey];
        const groupField = group._groupField || groupBy[level];
        const groupValue = group._groupKey || group[groupField];
        const participantCount = group.Participants?.length || 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-surface border-t-2 border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: visibleColumns.length, className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => onToggleGroup(groupKey), className: "w-full flex items-center gap-2 text-left", style: { paddingLeft: `${level * 1.5}rem` }, children: [
            isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$a, { className: "h-5 w-5 text-gray-600 flex-shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$b, { className: "h-5 w-5 text-gray-600 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-gray-900 text-sm", children: [
              fieldLabels[groupField] || groupField,
              ": ",
              groupValue
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-600 ml-2", children: [
              "(",
              participantCount,
              " ",
              participantCount === 1 ? "item" : "items",
              ")"
            ] })
          ] }) }) }),
          isExpanded && renderGroup(group.Participants, level + 1, groupKey)
        ] }, groupKey);
      });
    },
    [groupBy, visibleColumns, expandedGroups, onToggleGroup, renderCellValue, fieldLabels]
  );
  if (!data || data.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-64 text-gray-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$8, { className: "h-12 w-12 text-gray-300 mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium", children: "No Data Available" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Try adjusting your filters or grouping" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surface sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: visibleColumns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2 border-gray-300", children: fieldLabels[column] || column }, column)) }) }),
    renderGroup(data, 0, "root")
  ] }) });
};
const TemplateSelector = ({ templates, onSelect, selectedTemplate }) => {
  const handleSelect = reactExports.useCallback(
    (template) => {
      onSelect(template);
    },
    [onSelect]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: templates.map((template) => {
    const isSelected = selectedTemplate === template.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => handleSelect(template),
        className: classNames(
          "w-full text-left p-3 rounded-md border transition-all",
          isSelected ? "border-primary bg-blue-50 ring-2 ring-primary ring-opacity-50" : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-900", children: template.name }),
            isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$9, { className: "h-4 w-4 text-primary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 mt-1", children: template.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap gap-1", children: [
            template.groupBy.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800", children: [
              template.groupBy.length,
              " groups"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800", children: [
              template.visibleColumns.length,
              " columns"
            ] })
          ] })
        ] }) })
      },
      template.id
    );
  }) });
};
const DynamicReportBuilder = () => {
  const { user: loggedInUser } = getUserData() || {};
  const { eventDetails, eventLevels } = useEventContext();
  const {
    control,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      template: "",
      groupBy: [],
      visibleColumns: [],
      filters: {}
    }
  });
  const formData = watch();
  const [reportData, setReportData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [availableFields, setAvailableFields] = reactExports.useState(null);
  const [showColumnManager, setShowColumnManager] = reactExports.useState(false);
  const [showFilterPanel, setShowFilterPanel] = reactExports.useState(false);
  const [showExportDrawer, setShowExportDrawer] = reactExports.useState(false);
  const [expandedGroups, setExpandedGroups] = reactExports.useState({});
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [pageSize, setPageSize] = reactExports.useState(1e5);
  const templates = reactExports.useMemo(
    () => [
      {
        id: "competition-wise",
        name: "🏆 Competition Wise View",
        description: "Group by competition with participant details",
        groupBy: ["CompetitionTitle", "GroupName"],
        visibleColumns: ["UserName", "TeamName", "CandidateIdentityNumber", "TeamIdentityNumber", "UserGender", "GroupName", "OrganizationLevel", "Score"],
        filters: { CompetitionStatus: [2, 4, 6] }
      },
      {
        id: "membership-wise",
        name: "👥 Membership Wise View",
        description: "Group by organization levels with fees",
        groupBy: ["OrganizationLevel", "OrganizationLevelName"],
        visibleColumns: ["UserName", "TeamName", "CandidateIdentityNumber", "RegistrationId", "GroupName", "Fees", "CompetitionTitle", "MembershipType"],
        filters: {}
      },
      {
        id: "judge-score",
        name: "👨‍⚖️ Judge Score View",
        description: "Judge-specific score view",
        groupBy: ["JudgeName", "CompetitionTitle"],
        visibleColumns: ["UserName", "TeamName", "CandidateIdentityNumber", "Score", "CompetitionTitle", "GroupName", "OrganizationLevel"],
        filters: { CompetitionStatus: [4, 6] }
      },
      {
        id: "participant-list",
        name: "📋 Complete Participant List",
        description: "Flat list of all participants",
        groupBy: [],
        visibleColumns: [
          "UserImage",
          "UserName",
          "TeamName",
          "CandidateIdentityNumber",
          "TeamIdentityNumber",
          "RegistrationId",
          "UserGender",
          "UserDobString",
          "UserMobile",
          "UserEmail",
          "GroupName",
          "CompetitionTitle",
          "OrganizationLevel"
        ],
        filters: {}
      },
      {
        id: "score-card",
        name: "🎯 Score Card Print",
        description: "Print-ready score cards",
        groupBy: ["CompetitionTitle"],
        visibleColumns: ["CompetitionOrder", "UserName", "TeamName", "CandidateIdentityNumber", "TeamIdentityNumber", "GroupName", "OrganizationLevel", "UserImage"],
        filters: { CompetitionStatus: [2, 4] }
      }
    ],
    []
  );
  reactExports.useEffect(() => {
    const fetchAvailableFields = async () => {
      try {
        const response = await post("/api/reports/fields", {});
        setAvailableFields(response);
      } catch (error) {
        console.error("Failed to fetch available fields:", error);
        zt.error("Failed to load report configuration");
      }
    };
    fetchAvailableFields();
  }, []);
  const fetchReportData = reactExports.useCallback(async () => {
    if (!formData.groupBy || formData.groupBy.length === 0) {
      zt.error("Please select at least one grouping field");
      return;
    }
    if (!formData.visibleColumns || formData.visibleColumns.length === 0) {
      zt.error("Please select at least one column to display");
      return;
    }
    setLoading(true);
    try {
      const requestPayload = {
        groupBy: formData.groupBy,
        fields: formData.visibleColumns,
        filters: {
          ...formData.filters,
          EventId: eventDetails?.EVId,
          EventCategory: loggedInUser?.EventCategory
        },
        pagination: {
          page: currentPage,
          pageSize
        },
        sort: {
          field: formData.groupBy[0],
          order: "ASC"
        }
      };
      const response = await post("/api/reports/dynamic", requestPayload);
      setReportData(response);
      zt.success(`Report generated successfully (${response.meta.totalRecords} records)`);
    } catch (error) {
      console.error("Failed to fetch report data:", error);
      zt.error("Failed to generate report. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [formData, currentPage, pageSize, eventDetails, loggedInUser]);
  const applyTemplate = reactExports.useCallback(
    (template) => {
      setValue("template", template.id);
      setValue("groupBy", template.groupBy);
      setValue("visibleColumns", template.visibleColumns);
      setValue("filters", template.filters);
      zt.success(`Applied template: ${template.name}`);
    },
    [setValue]
  );
  const toggleGroup = reactExports.useCallback((groupKey) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }));
  }, []);
  const expandAll = reactExports.useCallback(() => {
    if (!reportData?.data) return;
    const allKeys = {};
    const collectKeys = (items, prefix = "") => {
      items.forEach((item, index) => {
        const key = `${prefix}${index}`;
        allKeys[key] = true;
        if (item.Participants && Array.isArray(item.Participants)) {
          collectKeys(item.Participants, `${key}-`);
        }
      });
    };
    collectKeys(reportData.data);
    setExpandedGroups(allKeys);
  }, [reportData]);
  const collapseAll = reactExports.useCallback(() => {
    setExpandedGroups({});
  }, []);
  const handleColumnVisibilityChange = reactExports.useCallback(
    (columns) => {
      setValue("visibleColumns", columns);
    },
    [setValue]
  );
  const handleFilterChange = reactExports.useCallback(
    (filters) => {
      setValue("filters", filters);
    },
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-surface", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard shadow-sm border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-medium text-primary", children: "Dynamic Report Builder" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600", children: [
          eventDetails?.EventName || "Event",
          " - Unified Reporting Interface"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowFilterPanel(!showFilterPanel),
            className: classNames(
              "inline-flex items-center gap-x-2 rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors",
              showFilterPanel ? "bg-primary text-white hover:bg-primaryHover" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$c, { className: "h-4 w-4" }),
              "Filters"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowColumnManager(!showColumnManager),
            className: classNames(
              "inline-flex items-center gap-x-2 rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors",
              showColumnManager ? "bg-primary text-white hover:bg-primaryHover" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$d, { className: "h-4 w-4" }),
              "Columns"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: fetchReportData,
            disabled: loading,
            className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50",
            children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$e, { className: "h-4 w-4 animate-spin" }),
              "Generating..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$e, { className: "h-4 w-4" }),
              "Generate Report"
            ] })
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[calc(100vh-120px)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-80 bg-surfaceCard border-r border-border flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "border-b-[#4852573e] text-[#206689] mb-4 items-center font-medium pb-1 px-1 w-full uppercase border-b text-sm", children: "Report Templates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TemplateSelector, { templates, onSelect: applyTemplate, selectedTemplate: formData.template })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "border-b-[#4852573e] text-[#206689] mb-4 items-center font-medium pb-1 px-1 w-full uppercase border-b text-sm", children: "Group By" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GroupByControl, { availableFields: availableFields?.groupableFields || [], selectedGroups: formData.groupBy, onChange: (groups) => setValue("groupBy", groups) })
        ] }),
        reportData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "border-b-[#4852573e] text-[#206689] items-center font-medium pb-1 px-1 uppercase border-b text-sm", children: "View Controls" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: expandAll,
                className: "w-full inline-flex items-center justify-center gap-x-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$a, { className: "h-4 w-4" }),
                  "Expand All"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: collapseAll,
                className: "w-full inline-flex items-center justify-center gap-x-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$b, { className: "h-4 w-4" }),
                  "Collapse All"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setShowExportDrawer(true),
                className: "w-full inline-flex items-center justify-center gap-x-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primaryHover",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-4 w-4" }),
                  "Export"
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden bg-surfaceCard", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Generating report..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-2", children: "This may take a moment for large datasets" })
      ] }) }) : reportData ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-3 bg-surface border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-onSurfaceVariant", children: [
              "Total Records: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-onSurface", children: reportData.meta.totalRecords })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-onSurfaceVariant", children: [
              "Execution Time: ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-onSurface", children: [
                reportData.meta.executionTimeMs,
                "ms"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600", children: [
              "Grouped By: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900", children: reportData.meta.groupBy.join(" → ") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => window.print(),
              className: "inline-flex items-center gap-x-1 rounded-md bg-surface px-3 py-1.5 text-xs font-medium text-onSurface hover:bg-surfaceHover",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$f, { className: "h-3 w-3" }),
                "Print"
              ]
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportTable, { data: reportData.data, groupBy: formData.groupBy, visibleColumns: formData.visibleColumns, expandedGroups, onToggleGroup: toggleGroup }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-gray-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$g, { className: "h-16 w-16 text-gray-300 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium", children: "No Report Generated" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2", children: 'Select a template or configure grouping and columns, then click "Generate Report"' })
      ] }) })
    ] }),
    showColumnManager && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ColumnManager,
      {
        availableColumns: availableFields?.selectableFields || [],
        visibleColumns: formData.visibleColumns,
        onChange: handleColumnVisibilityChange,
        onClose: () => setShowColumnManager(false)
      }
    ),
    showFilterPanel && /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPanel, { filters: formData.filters, onChange: handleFilterChange, onClose: () => setShowFilterPanel(false), eventLevels }),
    showExportDrawer && reportData && /* @__PURE__ */ jsxRuntimeExports.jsx(ExportDrawer, { reportData, groupBy: formData.groupBy, visibleColumns: formData.visibleColumns, onClose: () => setShowExportDrawer(false), eventDetails })
  ] });
};
function Reports() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col grow -m-5 lg:-m-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DynamicReportBuilder, {}) }) });
}
export {
  Reports as default
};
