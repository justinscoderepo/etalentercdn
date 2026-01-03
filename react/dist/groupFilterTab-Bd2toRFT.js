import { r as reactExports, m as useEventContext, e as useAdvancedSettings, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
function TagIcon({
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
    d: "M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(TagIcon);
const GroupFilterTab = ({ allowAll, selectedGroupFilter, onGroupFilterChange, className = "", selectedParticipantType = "" }) => {
  const { groups } = useEventContext();
  const handleGroupChange = reactExports.useCallback(
    (groupId) => {
      onGroupFilterChange?.(groupId);
    },
    [onGroupFilterChange]
  );
  const { advancedSettings } = useAdvancedSettings();
  const tabs = [];
  if (allowAll) {
    tabs.push({
      EventGroupId: "all",
      GroupName: "All Groups",
      icon: ForwardRef,
      color: "text-indigo-600",
      isAllGroups: true
    });
  }
  if (groups && Array.isArray(groups) && groups.length > 0) {
    groups.forEach((group) => {
      let jsonSettings = group.JsonSettings ? JSON.parse(group.JsonSettings) : {};
      if (selectedParticipantType == 1 && jsonSettings.ParticipantType === "Team") return;
      if (selectedParticipantType == 2 && jsonSettings.ParticipantType === "Individual") return;
      tabs.push({ ...group, icon: ForwardRef, color: "text-indigo-600" });
    });
  }
  reactExports.useEffect(() => {
    if (tabs.length > 0) {
      const isFilterInTabs = tabs.some((tab) => String(tab.EventGroupId) === String(selectedGroupFilter));
      if (!selectedGroupFilter || selectedGroupFilter === "" || !isFilterInTabs) {
        onGroupFilterChange?.(tabs[0].EventGroupId);
      }
    }
  }, [tabs.length, selectedGroupFilter, selectedParticipantType, onGroupFilterChange]);
  if (advancedSettings?.DisableGroups === true && tabs.length <= 1) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex -mb-px space-x-1 overflow-x-auto flex-wrap", children: tabs.map((tab) => {
    const IconComponent = tab.icon;
    const isActive = String(selectedGroupFilter) === String(tab.EventGroupId);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": isActive,
        onClick: () => handleGroupChange(tab.EventGroupId),
        className: classNames(
          "whitespace-nowrap py-2 px-3 border-b-2 font-medium text-xs transition-all duration-200 flex items-center gap-2",
          isActive ? "border-primary text-primary bg-blue-50" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: classNames("h-4 w-4", isActive ? "text-primary" : tab.color) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.GroupName })
        ]
      },
      tab.EventGroupId
    );
  }) }) });
};
export {
  GroupFilterTab as default
};
