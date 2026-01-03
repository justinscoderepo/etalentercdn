import { r as reactExports, m as useEventContext, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { F as ForwardRef$1 } from "./FunnelIcon-DfTRpAqE.js";
import { F as ForwardRef$2 } from "./ChevronUpIcon-D36EJ1s8.js";
import { F as ForwardRef$3 } from "./ChevronDownIcon-DrbBxP_V.js";
function MagnifyingGlassIcon({
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
    d: "M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(MagnifyingGlassIcon);
const ParticipantFilters = ({ filterCriterias, onFilterChange, showAdvancedFilters, onToggleAdvancedFilters, onApply, className = "" }) => {
  const { groups } = useEventContext();
  const handleInputChange = reactExports.useCallback(
    (field, value) => {
      onFilterChange({
        ...filterCriterias,
        [field]: value
      });
    },
    [filterCriterias, onFilterChange]
  );
  const handleSearchChange = reactExports.useCallback(
    (e) => {
      const val = e.target.value;
      handleInputChange("candidateName", val);
      if (val && val.toString().trim() !== "" && !showAdvancedFilters) {
        if (typeof onToggleAdvancedFilters === "function") onToggleAdvancedFilters();
      }
    },
    [handleInputChange]
  );
  const handleApply = reactExports.useCallback(() => {
    if (typeof onApply === "function") onApply(filterCriterias);
    else if (typeof onFilterChange === "function") onFilterChange(filterCriterias);
  }, [filterCriterias, onApply, onFilterChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("bg-white border-b border-gray-200", className), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[160px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: filterCriterias.candidateName || "",
            onChange: handleSearchChange,
            placeholder: "Search by name...",
            className: "pl-8 pr-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full text-xs"
          }
        )
      ] }),
      filterCriterias?.candidateName && filterCriterias.candidateName.toString().trim() !== "" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handleApply,
          className: "inline-flex items-center gap-x-2 rounded-md px-3 py-1 text-xs font-medium shadow-sm transition-colors whitespace-nowrap bg-primary text-white hover:bg-primaryHover",
          children: "Apply"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: onToggleAdvancedFilters,
          className: classNames(
            "inline-flex items-center gap-x-2 rounded-md px-3 py-1 text-xs font-medium shadow-sm transition-colors whitespace-nowrap",
            showAdvancedFilters ? "bg-primary text-white hover:bg-primaryHover" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-3 w-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Filters" }),
            showAdvancedFilters ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-3 w-3 ml-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-3 w-3 ml-1" })
          ]
        }
      )
    ] }),
    showAdvancedFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 rounded-md p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-gray-700 mb-1", children: "Identity Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: filterCriterias.candidateIdentityNumber || "",
            onChange: (e) => handleInputChange("candidateIdentityNumber", e.target.value),
            placeholder: "Search by identity...",
            className: "pl-3 block w-full rounded-md border-0 py-1 ring-1 ring-inset focus:ring-2 focus:ring-inset text-xs text-gray-900 focus:border-darkprimary placeholder:text-gray-400 ring-gray-300"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-gray-700 mb-1", children: "Include Status Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: filterCriterias.isIncludeStatusTitle || "",
            onChange: (e) => handleInputChange("isIncludeStatusTitle", e.target.value),
            className: "pl-3 block w-full rounded-md border-0 py-1 ring-1 ring-inset focus:ring-2 focus:ring-inset text-xs text-gray-900 focus:border-darkprimary ring-gray-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "No" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "true", children: "Yes" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-gray-700 mb-1", children: "Mix Common Items" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: filterCriterias.isIncludeCommon || "",
            onChange: (e) => handleInputChange("isIncludeCommon", e.target.value),
            className: "pl-3 block w-full rounded-md border-0 py-1 ring-1 ring-inset focus:ring-2 focus:ring-inset text-xs text-gray-900 focus:border-darkprimary ring-gray-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Include automatically" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "false", children: "No" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "true", children: "Yes, include common items too" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-gray-700 mb-1", children: "Common Group" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: filterCriterias.commonGroup || "",
            onChange: (e) => handleInputChange("commonGroup", e.target.value),
            className: "pl-3 block w-full rounded-md border-0 py-1 ring-1 ring-inset focus:ring-2 focus:ring-inset text-xs text-gray-900 focus:border-darkprimary ring-gray-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Don't list any common competitions" }),
              groups?.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: group.EventGroupId, children: group.GroupName }, group.EventGroupId))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-gray-700 mb-1", children: "List Without Selected Group" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: filterCriterias.isListWithoutSelectedGroup || "",
            onChange: (e) => handleInputChange("isListWithoutSelectedGroup", e.target.value),
            className: "pl-3 block w-full rounded-md border-0 py-1 ring-1 ring-inset focus:ring-2 focus:ring-inset text-xs text-gray-900 focus:border-darkprimary ring-gray-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "No" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "true", children: "Yes" })
            ]
          }
        )
      ] })
    ] }) })
  ] }) });
};
export {
  ParticipantFilters as default
};
