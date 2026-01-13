import { r as reactExports, j as jsxRuntimeExports, D as axios } from "./main-B7w5eCOl.js";
import { J as JudgesAllotmentEditable } from "./judgesAllotmentContainer-B1xwk4Wj.js";
import { F as ForwardRef } from "./XMarkIcon-DzyB_jak.js";
const AuthContext = reactExports.createContext();
function ReusableModal({
  isModalOpen,
  setIsModalOpen,
  handleSubmit,
  formData,
  handleEditCompetition,
  // New function for editing
  handleDeleteCompetition,
  // New function for deleting
  handleInputChange,
  modalTitle,
  buttonText,
  modalType,
  // Prop to determine modal type (new edit, or filter)
  competitionStructure,
  // New prop for competition structure data
  eventStages,
  // New prop for event stages data
  userRoles
  // New prop for user roles data
}) {
  if (!isModalOpen) return null;
  const filterFields = ["Competition order number", "competition", "scoreStatus", "stage", "judge"];
  const fieldsToRender = modalType === "filter" ? filterFields : Object.keys(formData);
  const handleCompetitionChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    handleInputChange({
      target: { name: "competition", value: selectedOptions }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "close-btn", onClick: () => setIsModalOpen(false), children: "×" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "modal-title", children: modalTitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        className: "modal-form",
        onSubmit: (e) => {
          e.preventDefault();
          handleSubmit();
        },
        children: [
          fieldsToRender.map((key) => {
            if (key === "competition") {
              const groupedCompetitions = competitionStructure.reduce((groups, competition) => {
                const group = competition.GroupGroupName || "Others";
                if (!groups[group]) {
                  groups[group] = [];
                }
                groups[group].push(competition);
                return groups;
              }, {});
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: key, className: "form-label", children: "Competition:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "styled-select-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: key,
                    name: key,
                    value: formData[key],
                    onChange: handleCompetitionChange,
                    className: "styled-select",
                    required: true,
                    multiple: true,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Please select" }),
                      Object.keys(groupedCompetitions).sort().map((groupName, groupIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("optgroup", { label: groupName, children: groupedCompetitions[groupName].sort((a, b) => a.CompetitionItemTitle.localeCompare(b.CompetitionItemTitle)).map((competition) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: competition.CompetitionStructureId, children: competition.CompetitionItemTitle }, competition.CompetitionStructureId)) }, groupIndex))
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "selection-count", children: [
                  formData[key].length,
                  " ",
                  formData[key].length === 1 ? "Competition Selected" : "Competitions Selected"
                ] })
              ] }, key);
            }
            if (key === "scoreStatus") {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: key, children: "Score Status:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: key, name: key, value: formData[key], onChange: handleInputChange, className: "form-input", required: true, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Please select" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3", children: "Allowed to Fill" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2", children: "Filled" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1", children: "Published" })
                ] })
              ] }, key);
            }
            if (key === "stage") {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: key, children: "Stage:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: key, name: key, value: formData[key], onChange: handleInputChange, className: "form-input", required: true, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Please select" }),
                  eventStages.map((stage, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: stage.Title, children: stage.Title }, index))
                ] })
              ] }, key);
            }
            if (key === "judge") {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: key, children: "Judge:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: key, name: key, value: formData[key], onChange: handleInputChange, className: "form-input", required: true, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Please select" }),
                  userRoles.map((role, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: role.UserRoleId, children: role.UserName }, index))
                ] })
              ] }, key);
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: key, children: [
                key.charAt(0).toUpperCase() + key.slice(1),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: key === "order" ? "number" : "text", id: key, name: key, value: formData[key], onChange: handleInputChange, className: "form-input", required: key !== "order" })
            ] }, key);
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-footer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "submit-btn", children: buttonText }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsModalOpen(false), className: "cancel-btn", children: "Cancel" })
          ] })
        ]
      }
    )
  ] }) });
}
const MultiSelectDropdown = ({ competitionStructure, handleSubmit, handleFilterInputChange, currentFilters, setIsDropdownOpen, onCategorySelect }) => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [competition, setCompetition] = reactExports.useState("");
  const [stage, setStage] = reactExports.useState("");
  const [orderNumber, setOrderNumber] = reactExports.useState("");
  const [Judge, setJudge] = reactExports.useState("");
  const dropdownRef = reactExports.useRef(null);
  const [selectedOptions, setSelectedOptions] = reactExports.useState([]);
  const [selectedOption, setSelectedOption] = reactExports.useState(null);
  const options = [
    { value: "all", label: "All" },
    // { value: "order", label: "Competition order number" },
    { value: "category", label: "Category" },
    // New option for category
    { value: "competition", label: "Competition" },
    // { value: "scoreStatus", label: "Score Status" },
    { value: "stage", label: "Stage" }
    // { value: "judge", label: "Judge" },
  ];
  const clearFilters = () => {
    setSelectedOptions([]);
  };
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prev) => prev.includes(value) ? prev.filter((option) => option !== value) : [...prev, value]);
  };
  const groupedCompetitions = competitionStructure.reduce((groups, competition2) => {
    const group = competition2.GroupGroupName || "Others";
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(competition2);
    return groups;
  }, {});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleFilterInputChange(name, value);
  };
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    handleFilterInputChange("category", selectedCategory);
    onCategorySelect(selectedCategory);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(!isOpen);
  };
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsDropdownOpen(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block w-48", ref: dropdownRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: toggleDropdown,
        className: "w-full px-2 py-1 bg-white border border-gray-300 text-gray-700 text-sm rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        children: selectedOptions.length > 0 ? `Selected (${selectedOptions.length})` : "Select filters..."
      }
    ),
    selectedOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearFilters, className: "absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-4 w-4" }) }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto", children: options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block px-2 py-1 text-gray-700 hover:bg-gray-100 cursor-pointer text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", value: option.value, checked: selectedOptions.includes(option.value), onChange: handleCheckboxChange, className: "mr-2" }),
      option.label
    ] }, option.value)) }),
    selectedOptions.includes("category") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "category", className: "block text-xs font-medium text-gray-700", children: "Select Category:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          id: "category",
          name: "category",
          value: currentFilters.category || "",
          onChange: handleCategoryChange,
          className: "mt-1 block w-full px-3 py-2 text-xs border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a category" }),
            Object.keys(groupedCompetitions).sort().map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: category, children: category }, category))
          ]
        }
      )
    ] }),
    selectedOptions.includes("competition") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "competition", className: "block text-xs font-medium text-gray-700", children: "Select Competition:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          id: "competition",
          name: "competition",
          value: currentFilters.competition || "",
          onChange: handleInputChange,
          className: "mt-1 block w-full px-3 py-2 text-xs border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a competition" }),
            Object.keys(groupedCompetitions).sort().map((groupName, groupIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("optgroup", { label: groupName, children: groupedCompetitions[groupName].sort((a, b) => a.CompetitionItemTitle.localeCompare(b.CompetitionItemTitle)).map((competition2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: competition2.CompetitionStructureId, children: competition2.CompetitionItemTitle }, competition2.CompetitionStructureId)) }, groupIndex))
          ]
        }
      )
    ] }),
    selectedOptions.includes("stage") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "stage", className: "block text-xs font-medium text-gray-700", children: "Stage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          id: "stage",
          name: "stages",
          value: currentFilters.stages || "",
          onChange: handleInputChange,
          className: "mt-1 block w-full px-3 py-2 text-xs border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      )
    ] }),
    selectedOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSubmit, className: "px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs", children: "Apply Filters" }) })
  ] });
};
function AssignJudgesToCompetition({ user }) {
  const useAuth = () => reactExports.useContext(AuthContext);
  const { accessToken } = useAuth();
  const [JudgesAllotment, setJudgesAllotment] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [selectedItems, setSelectedItems] = reactExports.useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = reactExports.useState(false);
  const [filteredData, setFilteredData] = reactExports.useState(JudgesAllotment);
  const [competitionStructure, setCompetitionStructure] = reactExports.useState([]);
  const [eventStages, setEventStages] = reactExports.useState([]);
  const [userRoles, setUserRoles] = reactExports.useState([]);
  const [loadingNew, setLoadingNew] = reactExports.useState(false);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [editableItems, setEditableItems] = reactExports.useState([]);
  const [editedCard, setEditedCard] = reactExports.useState(null);
  const [selectedCategory, setselectedCategory] = reactExports.useState(null);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [modalType, setModalType] = reactExports.useState("");
  const [newCompetitionData, setNewCompetitionData] = reactExports.useState({
    competition: "",
    scoreStatus: "",
    stage: "",
    judge: "",
    remarks: "",
    order: ""
  });
  const [editCompetitionData, setEditCompetitionData] = reactExports.useState({ competition: "", scoreStatus: "", stage: "", judge: "", remarks: "", order: "" });
  const [currentFilters, setCurrentFilters] = reactExports.useState({
    order: "",
    competition: "",
    scoreStatus: "",
    stages: "",
    judgeUserName: ""
  });
  const handleFilterSubmit = () => {
    const { order, competition, scoreStatus, stages, judgeUserName } = currentFilters;
    fetchJudgesAllotmentUsers(currentPage, order, competition, scoreStatus, stages);
  };
  reactExports.useEffect(() => {
  }, [currentFilters, filteredData]);
  const handleNewCompetitionSubmit = () => {
    if (modalType === "edit") {
      const updatedJudgesAllotment = JudgesAllotment.map((item) => item.AllotementId === editCompetitionData.AllotementId ? editCompetitionData : item);
      JudgeAllotmentSave();
      setJudgesAllotment(updatedJudgesAllotment);
    } else if (modalType === "new") {
      setJudgesAllotment([...JudgesAllotment, newCompetitionData]);
      JudgeAllotmentSave();
      setNewCompetitionData({ competition: "", scoreStatus: "", stage: "", judge: "", remarks: "", order: "" });
    } else if (modalType === "filter") {
      const { order, competition, scoreStatus, judgeUserName } = newCompetitionData;
      setCurrentFilters({ order, competition, scoreStatus, judgeUserName });
      fetchJudgesAllotmentUsers(currentPage, order, competition, scoreStatus, judgeUserName);
    }
    setIsModalOpen(false);
  };
  const [filterType, setFilterType] = reactExports.useState("all");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const setter = modalType === "edit" ? setEditCompetitionData : setNewCompetitionData;
    setter((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleFilterInputChange = (name, value) => {
    setCurrentFilters((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  reactExports.useEffect(() => {
    if (isDropdownOpen) {
      fetchCompetitionStructure();
    }
  }, [isDropdownOpen]);
  const fetchJudgesAllotmentUsers = async (pageNumber = 1, CompetitionOrder = "", Competition = "", ScoreStatus = "", JudgeUserName = "") => {
    setLoading(true);
    try {
      const select = [
        "AllotementId",
        "Competition",
        "CompetitionCompetitionItemTitle",
        "CompetitionGender",
        "CompetitionGenderGenderTitle",
        "CompetitionGroupGroupName",
        "CompetitionLanguage",
        "CompetitionLanguageLanguageName",
        "CompetitionOrder",
        "CompetitionParticipantTypeTitle",
        "Judge",
        "JudgeUserName",
        "Order",
        "Phase",
        "PhaseTitle",
        "Remarks",
        "ScoreStatus",
        "ScoreStatusScoreResultStatus",
        "Stage",
        "StageTitle",
        "Status"
      ];
      const formData = new FormData();
      formData.append("CompetitionOrder", CompetitionOrder ?? "");
      formData.append("PageSize", "10");
      formData.append("Competition", Competition ?? "");
      formData.append("ScoreStatus", ScoreStatus ?? "");
      formData.append("JudgeUserName", JudgeUserName ?? "");
      formData.append("SortOrder", "desc");
      formData.append("SortColumn", "ModifiedDate");
      formData.append("select", select);
      formData.append("PageNumber", pageNumber.toString());
      const response = await axios.post("https://etalenterapi.azurewebsites.net/JudgesAllotmentPlusUsersRolesJson/Get", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`
          // Replace with your token
        }
      });
      if (response.data && response.data.Results) {
        setJudgesAllotment(response.data.Results);
      }
    } catch (error) {
      console.error("Error fetching JudgesAllotment:", error);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchJudgesAllotmentUsers(currentPage);
  }, [currentPage]);
  const fetchNewData = async () => {
    setLoadingNew(true);
    try {
      const eventStagesPayload = new FormData();
      const eventStagesPayloadselect = [
        "*",
        "CreatedDateString",
        "Description",
        "ESGId",
        "Event",
        "EventCategory",
        "EventEventName",
        "Message",
        "ModifiedDateString",
        "Order",
        "RowFrom",
        "RowTo",
        "Status",
        "Title",
        "TitleEquals",
        "TotalRowCount",
        "Venue"
      ];
      eventStagesPayload.append("status", "1");
      eventStagesPayload.append("PageSize", "1000");
      eventStagesPayload.append("SortColumn", "ModifiedDate");
      eventStagesPayload.append("SortOrder", "desc");
      eventStagesPayload.append("PageNumber", "1");
      eventStagesPayload.append("select", eventStagesPayloadselect);
      const userRolesPayload = new FormData();
      const userRolesPayloadselect = [
        "*",
        "CreatedDateString",
        "Event",
        "EventCategory",
        "EventEventName",
        "Group",
        "GroupGroupName",
        "IdentityNumber",
        "JsonSettings",
        "Message",
        "ModifiedDateString",
        "Order",
        "Organization",
        "OrganizationAllowOrganizationId",
        "OrganizationName",
        "OrganizationShortName",
        "ParticipantType",
        "RegistrationId",
        "Role",
        "RowFrom",
        "RowTo",
        "Status",
        "TeamId",
        "TotalRowCount",
        "User",
        "UserComments",
        "UserDobString",
        "UserEmail",
        "UserJsonSettings",
        "UserName",
        "UserNameTitle",
        "UserPhone",
        "UserProfilePicture",
        "UserRoleId"
      ];
      userRolesPayload.append("status", "1");
      userRolesPayload.append("Role", user.Role);
      userRolesPayload.append("CreatedBy", "12007");
      userRolesPayload.append("select", userRolesPayloadselect);
      const [eventStagesRes, userRolesRes] = await axios.all([
        axios.post("https://etalenterapi.azurewebsites.net/EventStagesJson/Get", eventStagesPayload, {
          headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${accessToken}` }
        }),
        axios.post("https://etalenterapi.azurewebsites.net/UsersRolesJson/Get", userRolesPayload, {
          headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${accessToken}` }
        })
      ]);
      if (eventStagesRes.data) setEventStages(eventStagesRes.data.Results || []);
      if (userRolesRes.data) setUserRoles(userRolesRes.data.Results || []);
    } catch (error) {
      console.error("Error fetching new data:", error);
    } finally {
      setLoadingNew(false);
    }
  };
  reactExports.useEffect(() => {
  }, [JudgesAllotment, eventStages, userRoles]);
  const JudgeAllotmentSave = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      if (data != null) {
        formData.append("AllowNumberUpdate", "true");
        formData.append("Competition", data.competition);
        formData.append("ScoreStatus[]", data.scoreStatus);
        formData.append("Phase", "0");
        formData.append("Stage", data.stage);
        formData.append("Judge", data.judge);
        formData.append("Remarks", data.remarks);
        formData.append("Status", "1");
        formData.append("Order", data.order);
        formData.append("AllotementId", data.AllotementId);
      } else {
        formData.append("CompetitionList[]", newCompetitionData.competition);
        formData.append("undefined", "");
        formData.append("PageSize", "1000");
        formData.append("ScoreStatusList[]", newCompetitionData.scoreStatus);
        formData.append("StageList[]", newCompetitionData.stage);
        formData.append("JudgeList[]", newCompetitionData.judge);
        formData.append("Remarks", "desc");
        formData.append("Order", "ModifiedDate");
        formData.append("AllotementId", "");
        formData.append("IsMultiple", "true");
      }
      const response = await axios.post("https://etalenterapi.azurewebsites.net/JudgesAllotmentJson/Save", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`
          // Replace with your token
        }
      });
      if (response.data && response.data.Results) {
        fetchJudgesAllotmentUsers(currentPage);
      }
    } catch (error) {
      console.error("Error Saving JudgesAllotment:", error);
    } finally {
      setLoading(false);
    }
  };
  const JudgeAllotmentRemove = async (AllotmentId) => {
    setLoading(true);
    try {
      const response = await axios.delete("https://etalenterapi.azurewebsites.net/JudgesAllotmentJson/Remove", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`
          // Replace with your token
        },
        params: {
          AllotementId: AllotmentId
        }
      });
      if (response.data && response.data.Results) {
        fetchJudgesAllotmentUsers(currentPage);
      }
    } catch (error) {
      console.error("Error Deleting JudgesAllotment:", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchCompetitionStructure = async () => {
    setLoading(true);
    try {
      const competitionStructurePayload = new FormData();
      competitionStructurePayload.append("status", "1");
      const competitionStructurePayloadSelect = [
        "*",
        "AllowPublicRegistration",
        "AllowPublicRegistrationTitle",
        "CompetitionItem",
        "CompetitionItemTitle",
        "CompetitionStatus",
        "CompetitionStatusCompetitionStatusTitle",
        "CompetitionStructureId",
        "CreatedDateString",
        "Event",
        "EventCategory",
        "EventEventName",
        "Fees",
        "Gender",
        "GenderGenderTitle",
        "GenerateRanks",
        "Group",
        "GroupGroupName",
        "JsonSettings",
        "Language",
        "LanguageLanguageName",
        "MaximumCandidates",
        "MaximumContestantsPerUnit",
        "MaximumMinutes",
        "MaximumScore",
        "MaximumSeconds",
        "Message",
        "MinimumMinutes",
        "MinimumSeconds",
        "ModifiedDateString",
        "Order",
        "ParticipantType",
        "ParticipantTypeTitle",
        "Remarks",
        "RowFrom",
        "RowTo",
        "Status",
        "TotalRowCount",
        "Visibility",
        "WarningMinute",
        "WarningSecond"
      ];
      competitionStructurePayload.append("select", competitionStructurePayloadSelect);
      const response = await axios.post("https://etalenterapi.azurewebsites.net/CompetitionStructureJson/GetForAllotment", competitionStructurePayload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`
          // Replace with your token
        }
      });
      if (response.data && response.data.Results) {
        setCompetitionStructure(response.data.Results || []);
      }
    } catch (error) {
      console.error("Error Fetching Competition Structures:", error);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
  }, [competitionStructure]);
  const openModal = (type) => {
    fetchCompetitionStructure();
    fetchNewData();
    setModalType(type);
    setIsModalOpen(true);
  };
  const handleEditCompetition = () => {
    setIsModalOpen(false);
  };
  const handleDeleteCompetition = () => {
    setIsModalOpen(false);
  };
  const handleCheckboxChange = (id) => {
    fetchCompetitionStructure();
    fetchNewData();
    setSelectedItems(
      (prevSelected) => prevSelected.includes(id) ? prevSelected.filter((item) => item !== id) : [...prevSelected, id]
      // Add if not selected
    );
  };
  const [updatedData, setUpdatedData] = reactExports.useState([]);
  const handleCardDataChange = (allotmentId, field, value) => {
    setJudgesAllotment((prevData) => prevData.map((item) => item.AllotementId === allotmentId ? { ...item, [field]: value } : item));
    setUpdatedData((prevUpdated) => {
      const existingItem = prevUpdated.find((item) => item.AllotementId === allotmentId);
      if (existingItem) {
        return prevUpdated.map((item) => item.AllotementId === allotmentId ? { ...item, [field]: value } : item);
      } else {
        const originalItem = JudgesAllotment.find((item) => item.AllotementId === allotmentId);
        return [
          ...prevUpdated,
          { ...originalItem, [field]: value }
          // Copy with the updated field
        ];
      }
    });
  };
  const saveChanges = (allotmentId) => {
    const payload = updatedData.find((item) => item.AllotementId === allotmentId);
    if (payload) {
      setUpdatedData((prevUpdated) => prevUpdated.filter((item) => item.AllotementId !== allotmentId));
    }
  };
  const cancelEdit = (id) => {
    setSelectedItems((prevSelected) => prevSelected.filter((item) => item !== id));
  };
  const handleDeleteSelected = async () => {
    setLoading(true);
    try {
      for (const id of selectedItems) {
        await JudgeAllotmentRemove(id);
      }
      const updatedJudgesAllotment = JudgesAllotment.filter((item) => !selectedItems.includes(item.AllotementId));
      setJudgesAllotment(updatedJudgesAllotment);
      setSelectedItems([]);
    } catch (error) {
      console.error("Error deleting selected items:", error);
    } finally {
      setLoading(false);
    }
  };
  const [selectedFilters, setSelectedFilters] = reactExports.useState({
    order: "",
    competition: "",
    scoreStatus: "",
    judgeUserName: ""
  });
  const handleCategorySelect = (selectedCategory2) => {
    setCurrentFilters((prevData) => ({
      ...prevData,
      category: selectedCategory2
      // Set selected category in the filter state
    }));
    if (selectedCategory2) {
      const filtered = JudgesAllotment.filter((competition) => competition.CompetitionGroupGroupName === selectedCategory2);
      setFilteredData(filtered);
      setselectedCategory(selectedCategory2);
    } else {
      setFilteredData(JudgesAllotment);
    }
  };
  reactExports.useEffect(() => {
  }, [filteredData, selectedCategory]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "AssignJudgesToCompetition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Judges Allotment" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mb-4 mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MultiSelectDropdown,
        {
          handleSubmit: handleFilterSubmit,
          handleFilterInputChange,
          competitionStructure,
          JudgesAllotment,
          eventStages,
          userRoles,
          currentFilters,
          setIsDropdownOpen,
          onCategorySelect: handleCategorySelect
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            fetchNewData();
            openModal("new");
          },
          className: "bg-green-500 text-white font-medium rounded-md px-12 py-1 text-sm hover:bg-green-600 transition",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-plus mr-2" })
        }
      ),
      selectedItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-red-500 text-white font-medium rounded-md px-3 py-1 text-sm hover:bg-red-600 transition", onClick: handleDeleteSelected, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-trash mr-2" }),
        "Delete Selected"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReusableModal,
      {
        isModalOpen,
        setIsModalOpen,
        handleEditCompetition,
        handleDeleteCompetition,
        handleSubmit: handleNewCompetitionSubmit,
        formData: modalType === "edit" ? editCompetitionData : newCompetitionData,
        handleInputChange,
        modalTitle: modalType === "new" ? "Create Competition" : modalType === "edit" ? "Edit" : "Filter Competition",
        buttonText: modalType === "new" ? "Create" : modalType === "edit" ? "Save changes" : "Apply Filters",
        modalType,
        competitionStructure,
        eventStages,
        userRoles
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      JudgesAllotmentEditable,
      {
        JudgesAllotment: filteredData?.length > 0 ? filteredData : filteredData?.length === 0 && selectedCategory !== null ? filteredData : JudgesAllotment,
        competitionStructure,
        selectedItems,
        handleCheckboxChange,
        handleCardDataChange,
        saveChanges,
        cancelEdit,
        JudgeAllotmentRemove,
        JudgeAllotmentSave,
        eventStages,
        userRoles,
        setEditCompetitionData
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition",
          disabled: currentPage === 1,
          onClick: () => {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            fetchJudgesAllotmentUsers(newPage, currentFilters.order, currentFilters.competition, currentFilters.scoreStatus, currentFilters.judgeUserName);
          },
          children: "←"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700 font-medium", children: [
        "Page ",
        currentPage
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition",
          onClick: () => {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            fetchJudgesAllotmentUsers(newPage, currentFilters.order, currentFilters.competition, currentFilters.scoreStatus, currentFilters.judgeUserName);
          },
          children: "→"
        }
      )
    ] })
  ] });
}
export {
  AssignJudgesToCompetition as default
};
