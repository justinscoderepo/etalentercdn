import { r as reactExports, u as useBackend, j as jsxRuntimeExports, L as Loader, z as zt, p as post } from "./main-B7w5eCOl.js";
function CloudArrowUpIcon({
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
    d: "M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(CloudArrowUpIcon);
const EventSelectionPanel = ({ onEventDataImported, currentUser }) => {
  const [selectedEventId, setSelectedEventId] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [allowedRanks, setAllowedRanks] = reactExports.useState([228, 229]);
  const { rows: ranks, status: ranksStatus } = useBackend("/RankPositionsJson/Get", {
    select: "RankId,Title",
    doCache: true
  });
  const { rows: allCoordinatorEvents, status: eventsStatus } = useBackend("/UsersRolesPlusUsersJson/GetCoordinatorEvents", {
    select: "Event,EventEventName",
    sort: {
      sortOrder: "desc",
      sortField: "UserRoleId"
    },
    doCache: true
  });
  console.log("All Coordinator Events:", allCoordinatorEvents);
  const coordinatorEvents = allCoordinatorEvents;
  const loadAndPrepareEventData = async () => {
    if (!selectedEventId) {
      zt.error("Please select an event");
      return;
    }
    setLoading(true);
    try {
      const { data: response } = await post("/CoordinatorJson/GetEventDataForSubmission", {
        sourceEventId: parseInt(selectedEventId),
        allowedRanks: allowedRanks.length > 0 ? allowedRanks : null
      });
      if (response.Results) {
        const eventData = response.Results;
        if (eventData.ParticipantCount === 0) {
          zt.error("No participants found for the selected criteria. Try adjusting rank filters or verify the source event has results.");
          setLoading(false);
          return;
        }
        const excelHeaders = buildExcelHeaders(eventData);
        const excelRows = convertEventDataToExcelFormat(eventData);
        const formattedData = {
          headers: excelHeaders,
          data: excelRows,
          sourceInfo: {
            type: "event",
            sourceEventName: eventData.SourceEventName,
            sourceEventId: eventData.SourceEventId,
            participantCount: eventData.ParticipantCount
          }
        };
        onEventDataImported(formattedData);
        zt.success(`Ready to import ${eventData.ParticipantCount} participants from ${eventData.SourceEventName}`);
        setSelectedEventId("");
      } else {
        zt.error(response.Message || "Failed to load event data");
      }
    } catch (error) {
      console.error("Error loading event data:", error);
      zt.error("Error loading event data");
    } finally {
      setLoading(false);
    }
  };
  const buildExcelHeaders = (eventData) => {
    const headers = ["UserName", "IdentityNumber", "RegistrationId"];
    headers.push("GroupName");
    if (eventData.EventLevels) {
      eventData.EventLevels.forEach((level) => {
        headers.push(`${level.LevelName}Name`);
      });
    }
    headers.push("UserDob", "UserGender", "UserPhone", "UserMobile", "UserEmail", "UserProfilePicture");
    if (eventData.CompetitionColumns) {
      headers.push(...eventData.CompetitionColumns);
    }
    return headers;
  };
  const convertEventDataToExcelFormat = (eventData) => {
    if (!eventData.ExcelData) return [];
    const headers = buildExcelHeaders(eventData);
    return eventData.ExcelData.map((participant) => {
      return headers.map((header) => participant[header] || "");
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold text-onSurface mb-2", children: "Select Source Event" }),
        eventsStatus === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading your coordinator events..." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: selectedEventId,
            onChange: (e) => setSelectedEventId(e.target.value),
            className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset  focus:ring-inset sm:text-sm sm:leading-6 text-onSurface focus:border-darkprimary focus:ring-0 placeholder:text-onSurfaceVariant ring-border",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select an event" }),
              allCoordinatorEvents?.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: event.Event, children: event.EventEventName }, event.Event))
            ]
          }
        ),
        coordinatorEvents?.length === 0 && eventsStatus !== "loading" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-2", children: "No coordinator events found. You must be a coordinator of other events to use this feature." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold text-onSurface mb-2", children: "Import Participants by Rank (Optional)" }),
        ranksStatus === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading ranks..." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: ranks && ranks.length > 0 ? ranks.map((rank) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: allowedRanks.includes(rank.RankId),
              onChange: (e) => {
                if (e.target.checked) {
                  setAllowedRanks([...allowedRanks, rank.RankId]);
                } else {
                  setAllowedRanks(allowedRanks.filter((r) => r !== rank.RankId));
                }
              },
              className: "h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-sm text-gray-700", children: rank.Title })
        ] }, rank.RankId)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "No ranks available" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Leave unchecked to import all participants regardless of rank" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: loadAndPrepareEventData,
        disabled: !selectedEventId || loading,
        className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed",
        children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin -ml-1 mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" }),
          "Loading..."
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "-mr-0.5 h-5 w-5" }),
          "Prepare for Import"
        ] })
      }
    ) })
  ] });
};
export {
  EventSelectionPanel as default
};
