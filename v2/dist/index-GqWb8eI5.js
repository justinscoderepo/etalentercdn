import { x as useAppContext, r as reactExports, u as useBackend, j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
import { O as OldNewTabLayout } from "./OldNewTabLayout-g9TCcW0h.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { J as JudgesAllotmentEditable } from "./judgesAllotmentContainer-B1xwk4Wj.js";
import { F as ForwardRef } from "./UserGroupIcon-C7G6h27R.js";
import "./navigationUtils-BZC1EMRn.js";
function JudgesAllotment() {
  const { eventDetails } = useAppContext();
  const [selectedItems, setSelectedItems] = reactExports.useState([]);
  const { rows: userRoles = [] } = useBackend(
    `/UserRoles/ListallUsersByRole?RoleId=6&EventId=${eventDetails?.EventId || 0}`,
    {}
  );
  const { rows: competitionStructure = [] } = useBackend(
    `/CompetitionStructure/GetListCompetitionStructureForTheEvent?EventId=${eventDetails?.EventId || 0}`,
    {}
  );
  const { rows: judgesAllotment = [] } = useBackend(
    `/JudgesAllotment/GetAllotments?EventId=${eventDetails?.EventId || 0}`,
    {}
  );
  const { rows: eventStages = [] } = useBackend(
    `/EventStages/GetEventStagesForEvent?EventId=${eventDetails?.EventId || 0}`,
    {}
  );
  const tabs = [
    { title: "New React View", active: true },
    { title: "Old View", path: "/JudgesAllotment/Manage" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OldNewTabLayout, { tabs, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Judges Allotment",
        subHeading: "Assign judges to competitions and manage their allotments",
        rightChildren: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-x-2 text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
            userRoles.length,
            " Judge",
            userRoles.length !== 1 ? "s" : ""
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      JudgesAllotmentEditable,
      {
        JudgesAllotment: judgesAllotment,
        competitionStructure,
        selectedItems,
        eventStages,
        userRoles,
        setSelectedItems,
        eventId: eventDetails?.EventId
      }
    ) })
  ] }) }) });
}
export {
  JudgesAllotment as default
};
