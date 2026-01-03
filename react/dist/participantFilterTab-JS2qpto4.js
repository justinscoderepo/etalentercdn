import { m as useEventContext, r as reactExports, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { F as ForwardRef } from "./UserIcon-BRPEvw4s.js";
import { F as ForwardRef$1 } from "./UserGroupIcon-C7G6h27R.js";
const ParticipantFilterTab = ({ selectedParticipantType, onParticipantTypeChange, className = "" }) => {
  useEventContext();
  const handleTypeChange = reactExports.useCallback(
    (type) => {
      onParticipantTypeChange?.(type);
    },
    [onParticipantTypeChange]
  );
  const defaultTabs = [
    {
      id: "1",
      label: "Individual",
      icon: ForwardRef,
      color: "text-green-600"
    },
    {
      id: "2",
      label: "Team",
      icon: ForwardRef$1,
      color: "text-blue-600"
    }
  ];
  reactExports.useEffect(() => {
    if (!selectedParticipantType || selectedParticipantType === "") {
      onParticipantTypeChange?.("1");
    }
  }, [selectedParticipantType, onParticipantTypeChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex -mb-px space-x-1 overflow-x-auto flex-wrap min-w-56", children: defaultTabs.map((tab) => {
    const IconComponent = tab.icon;
    const isActive = selectedParticipantType === tab.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": isActive,
        onClick: () => handleTypeChange(tab.id),
        className: classNames(
          "whitespace-nowrap py-2 px-2 border-b-2 font-medium text-xs transition-all duration-200 flex items-center gap-2",
          isActive ? "border-green-600 text-green-700 bg-green-50" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: classNames("h-4 w-4", isActive ? "text-green-700" : tab.color) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label })
        ]
      },
      tab.id
    );
  }) }) });
};
export {
  ParticipantFilterTab as default
};
