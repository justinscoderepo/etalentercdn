import { r as reactExports, j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
function JudgesAllotmentEditable({
  JudgesAllotment,
  competitionStructure,
  selectedItems,
  handleCheckboxChange,
  handleCardDataChange,
  saveChanges,
  eventStages,
  userRoles,
  cancelEdit,
  JudgeAllotmentRemove,
  JudgeAllotmentSave,
  setEditCompetitionData
}) {
  const [selectedJudge, setSelectedJudge] = reactExports.useState(null);
  const [selectedJudgeuserName, setSelectedJudgeusername] = reactExports.useState(null);
  const [competitionStatuses, setCompetitionStatuses] = reactExports.useState({});
  const handleStatusToggle = (competition, allotmentId) => {
    setCompetitionStatuses((prevStatuses) => {
      const currentStatus = prevStatuses[allotmentId] || "Allowed to Fill";
      const nextStatus = currentStatus === "Allowed to Fill" ? { status: "Filled", value: 1 } : currentStatus === "Filled" ? { status: "Published", value: 2 } : { status: "Allowed to Fill", value: 3 };
      JudgeAllotmentSave({
        competition: competition?.competition || "",
        scoreStatus: nextStatus.value,
        stage: competition?.stage || "",
        judge: competition?.UserRoleId || "",
        remarks: competition?.remarks || "",
        order: competition?.order || "",
        AllotementId: allotmentId
      });
      return { ...prevStatuses, [allotmentId]: nextStatus.status };
    });
  };
  const handleJudgeClick = (UserRoleId, judgeUserName) => {
    setSelectedJudge(UserRoleId);
    setSelectedJudgeusername(judgeUserName);
  };
  const selectedJudgeData = userRoles?.find((role) => role?.UserRoleId === selectedJudge);
  const relatedCompetitions = JudgesAllotment?.filter((competition) => competition?.JudgeUserName === selectedJudgeuserName) || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/3 bg-white shadow-sm rounded-md", children: userRoles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full text-left py-2 bg-gray-100 rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No data available." }) }) : userRoles.map((data) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `cursor-pointer py-2 border-b hover:bg-gray-50 ${selectedJudge === data.UserRoleId ? "bg-gray-100" : ""}`,
        onClick: () => handleJudgeClick(data?.UserRoleId, data?.UserName),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-small text-left", children: data?.UserName || "No Name" })
      },
      data?.UserRoleId || "unknown"
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full sm:w-2/3 bg-white shadow-sm rounded-md py-2 space-y-2", children: relatedCompetitions.length > 0 ? relatedCompetitions.map((competition) => {
      const allotmentId = competition?.AllotementId;
      const currentStatus = competitionStatuses[allotmentId] || competition?.ScoreStatusScoreResultStatus || // Fallback to original status
      "Allowed to Fill";
      let statusColor = "bg-yellow-500";
      if (currentStatus === "Filled") {
        statusColor = "bg-blue-500";
      } else if (currentStatus === "Published") {
        statusColor = "bg-green-500";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-2 px-3 bg-grey-50 border rounded-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-1 bg-blue-50 border border-blue-300 rounded-md w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-center font-semibold", children: [
            competition?.CompetitionGroupGroupName || "No Group",
            " - ",
            competition?.CompetitionCompetitionItemTitle || "No Title"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-800  text-center font-semibold", children: currentStatus })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `${statusColor} text-white text-xs rounded-md w-full py-1 hover:bg-blue-600 transition duration-150`, onClick: () => handleStatusToggle(competition, allotmentId), children: currentStatus === "Allowed to Fill" ? "Fill" : currentStatus === "Filled" ? "Publish" : "Allowed to Fill" }) }),
        selectedJudgeData && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-red-500 text-white text-xs rounded-md w-full py-1 hover:bg-red-600 transition duration-150", onClick: () => JudgeAllotmentRemove(competition?.AllotementId), children: "Delete Judge" }) })
      ] }, competition?.CompetitionId || `comp-${Math.random()}`);
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 text-center", children: "No related competitions found." }) })
  ] });
}
export {
  JudgesAllotmentEditable as J
};
