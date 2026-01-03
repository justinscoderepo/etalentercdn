import { r as reactExports, m as useEventContext, e as useAdvancedSettings, z as zt, j as jsxRuntimeExports, p as post, u as useBackend, L as Loader } from "./main-B7w5eCOl.js";
import { u as useConfirmation } from "./useConfirmation-7dfYOxTH.js";
import { r as readSync, u as utils } from "./xlsx-70TEQMdC.js";
import { F as ForwardRef$2 } from "./DocumentArrowDownIcon-qKH9LtFt.js";
import { F as ForwardRef$3 } from "./ArrowPathIcon-CrJmYjUD.js";
import { F as ForwardRef$4 } from "./XMarkIcon-CWPDMTWO.js";
import { F as ForwardRef$5 } from "./CheckIcon-8INY0B1Y.js";
import { h as ht, L as Lt, z as ze, Q as Qe } from "./dialog-DkCfFwgC.js";
import { F as ForwardRef$6 } from "./ExclamationTriangleIcon-D83nSzlE.js";
import "./TrashIcon-DMovC4zz.js";
import "./keyboard-Dku-r8UD.js";
import "./dom-XjFFvgb6.js";
import "./use-is-mounted-DkvN6zYE.js";
import "./hidden-tL6qlWMm.js";
import "./open-closed-gVG0H0sE.js";
import "./description-3iOOxFmG.js";
import "./navigationUtils-BZC1EMRn.js";
function CheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(CheckIcon);
function DocumentTextIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(DocumentTextIcon);
const ExcelImportModal = ({
  competitions: rawCompetitions,
  selectedGroupFilter,
  selectedParticipantType,
  currentUser,
  updateParticipantLocal,
  usersList,
  participantsList,
  setParticipantFilter,
  eventDataToImport = null,
  // New prop for event data import
  onEventDataProcessed = null
  // Callback when event data is processed
}) => {
  const normalizeString = (str) => {
    if (!str) return "";
    return str.trim().replace(/\s+/g, " ");
  };
  const competitions = rawCompetitions.map((comp) => ({
    ...comp,
    Title: normalizeString(comp.Title || comp.CompetitionName),
    // Normalize title
    GroupName: normalizeString(comp.GroupName || comp.GroupName)
    // Normalize group name
  }));
  console.log({ competitions });
  const STORAGE_KEY = `excelImport_${currentUser?.Event}_${selectedGroupFilter}_${selectedParticipantType}`;
  const [isExpanded, setIsExpanded] = reactExports.useState(true);
  const [excelData, setExcelData] = reactExports.useState([]);
  const [rawCsvText, setRawCsvText] = reactExports.useState("");
  const [parsedParticipants, setParsedParticipants] = reactExports.useState([]);
  const [importingRows, setImportingRows] = reactExports.useState(/* @__PURE__ */ new Set());
  const [importResults, setImportResults] = reactExports.useState([]);
  const [minSimilarity, setMinSimilarity] = reactExports.useState(1);
  const [confirmAll, setConfirmAll] = reactExports.useState(false);
  const [isParsingData, setIsParsingData] = reactExports.useState(false);
  const confirmAllRef = reactExports.useRef(false);
  const participantRowsRef = reactExports.useRef({});
  const { groups, eventLevels: contextEventLevels } = useEventContext();
  useAdvancedSettings();
  const COLUMN_NAMES = {
    // Base columns - always required
    USER_NAME: "UserName",
    IDENTITY_NUMBER: "IdentityNumber",
    REGISTRATION_ID: "RegistrationId",
    GROUP_NAME: "GroupName",
    USER_DOB: "UserDob",
    USER_GENDER: "UserGender",
    // Contact columns
    USER_PHONE: "UserPhone",
    USER_MOBILE: "UserMobile",
    USER_EMAIL: "UserEmail",
    USER_PROFILE_PICTURE: "UserProfilePicture"
  };
  const levelColumns = (contextEventLevels || []).slice(1).map((level) => `${level.LevelName}Name`);
  const levelNamesString = levelColumns.length > 0 ? levelColumns.join(", ") : null;
  const saveCsvToStorage = (csvText) => {
    try {
      const dataToSave = {
        rawCsv: csvText,
        timestamp: Date.now()
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (error) {
      console.error("Failed to save to session storage:", error);
    }
  };
  const parseCsvRow = (row, delimiter) => {
    const cells = [];
    let currentCell = "";
    let insideQuotes = false;
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      const nextChar = row[i + 1];
      if (char === '"') {
        if (insideQuotes && nextChar === '"') {
          currentCell += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (char === delimiter && !insideQuotes) {
        cells.push(currentCell.trim());
        currentCell = "";
      } else {
        currentCell += char;
      }
    }
    cells.push(currentCell.trim());
    return cells;
  };
  const processCsvText = (csvText) => {
    if (!csvText) return;
    try {
      const rows = csvText.split("\n").filter((row) => row.trim());
      const firstRow = rows[0] || "";
      const delimiter = firstRow.includes("	") ? "	" : firstRow.includes(";") ? ";" : ",";
      const parsedData = rows.map((row) => {
        return parseCsvRow(row, delimiter);
      });
      if (parsedData.length === 0) {
        zt.error("No data found in CSV");
        return;
      }
      const headerRow = parsedData[0];
      const dataRows = parsedData.slice(1);
      const headers = headerRow.map((h) => normalizeString(h));
      const hasGroupNameInExcel = (!selectedGroupFilter || selectedGroupFilter === "all") && headers.filter((h) => groups.filter((g) => h.toLowerCase().indexOf(g.GroupName.toLowerCase()) > -1 && h.toLowerCase() !== "groupname").length > 0).length > 0;
      const hasAnyCompetitionColumn = (() => {
        const withGroupFormat = competitions.some((comp) => {
          const columnName = comp.GroupName ? normalizeString(`${comp.Title} (${comp.GroupName})`) : null;
          return columnName && headers.some((h) => normalizeString(h) === columnName);
        });
        const withoutGroupFormat = competitions.some((comp) => {
          const columnName = normalizeString(comp.Title);
          return headers.some((h) => normalizeString(h) === columnName);
        });
        return withGroupFormat || withoutGroupFormat;
      })();
      const dynamicCompetitions = (() => {
        if (!hasAnyCompetitionColumn) return [];
        if (hasGroupNameInExcel) {
          const competitionColumns = competitions.map((comp) => comp.GroupName ? normalizeString(`${comp.Title} (${comp.GroupName})`) : normalizeString(comp.Title));
          return [...new Set(competitionColumns)];
        } else {
          const uniqueTitles = [...new Set(competitions.map((comp) => normalizeString(comp.Title)))];
          return uniqueTitles;
        }
      })();
      const dynamicExpectedColumns = [
        COLUMN_NAMES.USER_NAME,
        COLUMN_NAMES.IDENTITY_NUMBER,
        COLUMN_NAMES.REGISTRATION_ID,
        ...!selectedGroupFilter || selectedGroupFilter == "all" ? [COLUMN_NAMES.GROUP_NAME] : [],
        COLUMN_NAMES.USER_DOB,
        COLUMN_NAMES.USER_GENDER,
        ...levelColumns,
        COLUMN_NAMES.USER_PHONE,
        COLUMN_NAMES.USER_MOBILE,
        COLUMN_NAMES.USER_EMAIL,
        COLUMN_NAMES.USER_PROFILE_PICTURE,
        ...dynamicCompetitions
      ];
      const { headers: reorderedHeaders, data: reorderedData, mapping } = reorderColumns(headerRow, dataRows, dynamicExpectedColumns);
      if (reorderedHeaders.length !== dynamicExpectedColumns.length) {
        zt.error(`Header mismatch: Expected ${dynamicExpectedColumns.length} columns, got ${reorderedHeaders.length}`);
        return;
      }
      const finalData = [reorderedHeaders, ...reorderedData];
      setExcelData(finalData);
      setIsParsingData(true);
      setTimeout(() => {
        try {
          parseExcelData(reorderedHeaders, reorderedData, dynamicExpectedColumns, hasGroupNameInExcel, dynamicCompetitions);
        } finally {
          setIsParsingData(false);
        }
      }, 10);
    } catch (error) {
      console.error("Failed to process CSV:", error);
      zt.error("Failed to process CSV data");
      setIsParsingData(false);
    }
  };
  reactExports.useEffect(() => {
    try {
      const savedData = sessionStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const { rawCsv, timestamp } = JSON.parse(savedData);
        const hoursSinceImport = (Date.now() - timestamp) / (1e3 * 60 * 60);
        if (hoursSinceImport < 24 && rawCsv) {
          setRawCsvText(rawCsv);
          processCsvText(rawCsv);
          zt.success(`Restored CSV data from previous session`);
        } else {
          sessionStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch (error) {
      console.error("Failed to load from session storage:", error);
    }
  }, [STORAGE_KEY]);
  reactExports.useEffect(() => {
    if (eventDataToImport && eventDataToImport.headers && eventDataToImport.data) {
      console.log("Processing event data import:", eventDataToImport);
      setIsParsingData(true);
      const csvHeaders = eventDataToImport.headers.join(",");
      const csvRows = eventDataToImport.data.map((row) => row.join(","));
      const csvText = [csvHeaders, ...csvRows].join("\n");
      setIsExpanded(true);
      setRawCsvText(csvText);
      processCsvText(csvText);
      saveCsvToStorage(csvText);
      if (onEventDataProcessed) {
        onEventDataProcessed(eventDataToImport.sourceInfo);
      }
      zt.success(`Loaded ${eventDataToImport.sourceInfo?.participantCount || 0} participants from ${eventDataToImport.sourceInfo?.sourceEventName || "event"}`);
    }
  }, [eventDataToImport, onEventDataProcessed]);
  const [confirmationData, setConfirmationData] = reactExports.useState(null);
  const showConfirmation = ({ title, description, confirmButtonLabel, cancelButtonLabel, showConfirmAllButton }) => {
    return new Promise((resolve) => {
      setConfirmationData({
        title,
        description,
        confirmButtonLabel,
        cancelButtonLabel,
        showConfirmAllButton,
        onConfirm: () => {
          setConfirmationData(null);
          resolve(true);
        },
        onConfirmAll: () => {
          setConfirmationData(null);
          resolve("confirmAll");
        },
        onCancel: () => {
          setConfirmationData(null);
          resolve(false);
        }
      });
    });
  };
  const buildCompetitionMappings = () => {
    const mappings = {};
    const competitions2 = [];
    competitions2.forEach((comp) => {
      const simplifiedName = comp.CompetitionName?.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (simplifiedName) {
        if (!mappings[simplifiedName]) {
          mappings[simplifiedName] = [];
        }
        mappings[simplifiedName].push({
          CompetitionStructureId: comp.CompetitionStructureId,
          CompetitionName: comp.CompetitionName,
          GroupName: comp.GroupName,
          GenderName: comp.GenderName,
          LanguageName: comp.LanguageName,
          EventGroupId: comp.EventGroupId
        });
      }
    });
    return mappings;
  };
  buildCompetitionMappings();
  const isParticipantExistsInServer = (participant) => {
    if (!usersList || usersList.length === 0) return null;
    const matchingUsers = usersList.filter((user) => {
      const userName = selectedParticipantType == 2 ? user.TeamTeamName : user.UserName;
      if (participant.name == "Jisa P Reji" && userName == "Jisa P Reji") ;
      const nameMatches = userName?.toLowerCase().trim() === participant.name?.toLowerCase().trim();
      if (!nameMatches) return false;
      const levelMatches = levelColumns.every((levelCol) => {
        const userLevelValue = user.LevelSettings?.[levelCol] || user[levelCol];
        const participantLevelValue = participant[levelCol];
        return userLevelValue?.toLowerCase().trim() === participantLevelValue?.toLowerCase().trim();
      });
      return levelMatches;
    });
    if (matchingUsers.length > 1) {
      return {
        error: true,
        type: "MULTIPLE_MATCHES",
        count: matchingUsers.length,
        matches: matchingUsers
      };
    }
    return matchingUsers.length === 1 ? matchingUsers[0] : null;
  };
  const isParticipantDuplicateExistsLocally = (participant, currentIndex) => {
    if (!parsedParticipants || parsedParticipants.length === 0) return null;
    const matchingParticipants = parsedParticipants.filter((otherParticipant, index) => {
      if (index === currentIndex) return false;
      const otherName = normalizeString(otherParticipant.name || "");
      const participantName = normalizeString(participant.name || "");
      const nameMatches = otherName.toLowerCase() === participantName.toLowerCase();
      if (!nameMatches) return false;
      const otherDob = normalizeString(otherParticipant.dob || "");
      const participantDob = normalizeString(participant.dob || "");
      const dobMatches = otherDob.toLowerCase() === participantDob.toLowerCase();
      if (!dobMatches) return false;
      const levelMatches = levelColumns.every((levelCol) => {
        const otherLevelValue = otherParticipant[levelCol];
        const participantLevelValue = participant[levelCol];
        return normalizeString(otherLevelValue || "").toLowerCase() === normalizeString(participantLevelValue || "").toLowerCase();
      });
      return levelMatches;
    });
    if (matchingParticipants.length > 0) {
      return {
        error: true,
        type: "LOCAL_DUPLICATES",
        count: matchingParticipants.length,
        matches: matchingParticipants,
        indices: parsedParticipants.map((p, idx) => matchingParticipants.includes(p) ? idx : -1).filter((idx) => idx !== -1)
      };
    }
    return null;
  };
  const isCompetitionAssigned = (participant, competitionStructureId) => {
    if (!participantsList || participantsList.length === 0) return false;
    const matchingUser = isParticipantExistsInServer(participant);
    if (matchingUser?.error && matchingUser.type === "MULTIPLE_MATCHES") {
      return false;
    }
    if (!matchingUser) return false;
    const userRoleId = selectedParticipantType == 2 ? matchingUser.Team || matchingUser.TeamId : matchingUser.Candidate || matchingUser.UserRoleId;
    if (!userRoleId) return false;
    const hasParticipation = participantsList.some((participation) => {
      return participation.Competition === competitionStructureId.toString() && participation.Candidate === userRoleId.toString();
    });
    return hasParticipation;
  };
  const isParticipantFullyImported = (participant) => {
    const existingUser = isParticipantExistsInServer(participant);
    if (!existingUser) return false;
    if (!participant.participations || Object.keys(participant.participations).length === 0) {
      return true;
    }
    const allCompetitionsAssigned = Object.keys(participant.participations).every((compTitle) => {
      const participation = participant.participations[compTitle];
      if (!participation || !participation.CompetitionStructureId) return true;
      return isCompetitionAssigned(participant, participation.CompetitionStructureId);
    });
    return allCompetitionsAssigned;
  };
  const normalizeColumnName = (name) => {
    return name?.toLowerCase().replace(/[^a-z0-9]/g, "") || "";
  };
  const findColumnIndex = (headers, columnName) => {
    const normalizedTarget = normalizeColumnName(columnName);
    return headers.findIndex((h) => normalizeColumnName(h) === normalizedTarget);
  };
  const reorderColumns = (pastedHeaders, pastedData, dynamicExpectedColumns) => {
    const columnMapping = dynamicExpectedColumns.map((expectedCol) => {
      const pastedIndex = findColumnIndex(pastedHeaders, expectedCol);
      return pastedIndex;
    });
    const reorderedHeaders = dynamicExpectedColumns.map((expectedCol, idx) => {
      const pastedIndex = columnMapping[idx];
      return pastedIndex >= 0 ? pastedHeaders[pastedIndex] : expectedCol;
    });
    const reorderedData = pastedData.map((row) => {
      return dynamicExpectedColumns.map((_, idx) => {
        const pastedIndex = columnMapping[idx];
        return pastedIndex >= 0 && row[pastedIndex] !== void 0 ? row[pastedIndex] || "" : "";
      });
    });
    return {
      headers: reorderedHeaders,
      data: reorderedData,
      mapping: columnMapping
    };
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileExtension = file.name.split(".").pop()?.toLowerCase();
    setIsParsingData(true);
    try {
      if (fileExtension === "csv") {
        const text = await file.text();
        setRawCsvText(text);
        processCsvText(text);
        saveCsvToStorage(text);
        zt.success("CSV file loaded successfully");
      } else if (fileExtension === "xlsx" || fileExtension === "xls") {
        try {
          const arrayBuffer = await file.arrayBuffer();
          const workbook = readSync(arrayBuffer, { type: "array" });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const csvText = utils.sheet_to_csv(worksheet);
          setRawCsvText(csvText);
          processCsvText(csvText);
          saveCsvToStorage(csvText);
          zt.success("Excel file loaded and converted successfully");
        } catch (error) {
          console.error("Excel processing error:", error);
          zt.error("Failed to process Excel file. Please try again or use CSV format.");
          setIsParsingData(false);
        }
      } else {
        zt.error("Unsupported file format. Please upload CSV or Excel (.xlsx, .xls) files.");
        setIsParsingData(false);
      }
    } catch (error) {
      console.error("File upload error:", error);
      zt.error("Failed to process file");
      setIsParsingData(false);
    }
    e.target.value = "";
  };
  const validateName = (value) => {
    if (!value || value.trim() === "") return { valid: true, error: null };
    const letterCount = (value.match(/[a-zA-Z]/g) || []).length;
    if (letterCount < 3) {
      return { valid: false, error: "Name must have at least 3 letters" };
    }
    return { valid: true, error: null };
  };
  const validatePhone = (value) => {
    if (!value || value.trim() === "") return { valid: true, error: null };
    const digitCount = (value.match(/\d/g) || []).length;
    if (digitCount < 5) {
      return { valid: false, error: "Phone must have at least 5 digits" };
    }
    return { valid: true, error: null };
  };
  const validateLevelField = (value) => {
    if (!value || value.trim() === "") {
      return { valid: false, error: "This field is required and cannot be empty" };
    }
    if (value.trim().length < 3) {
      return { valid: false, error: "Must have at least 3 characters" };
    }
    return { valid: true, error: null };
  };
  const formatDateToDDMMYYYY = (day, month, year) => {
    const dd = String(day).padStart(2, "0");
    const mm = String(month).padStart(2, "0");
    const yyyy = String(year);
    return `${dd}-${mm}-${yyyy}`;
  };
  const validateDate = (value) => {
    if (!value || value.trim() === "") return { valid: true, error: null, formattedDate: null };
    const trimmedValue = value.trim();
    if (trimmedValue.includes("-")) {
      const parts = trimmedValue.split("-");
      if (parts.length !== 3) {
        return { valid: false, error: "Date with - must have format: YYYY-MM-DD or DD-MM-YYYY" };
      }
      const [part1, part2, part3] = parts.map((p) => parseInt(p, 10));
      if (isNaN(part1) || isNaN(part2) || isNaN(part3)) {
        return { valid: false, error: "Date parts must be valid numbers" };
      }
      let year, month, day;
      if (part1 > 31) {
        year = part1;
        month = part2;
        day = part3;
      } else {
        day = part1;
        month = part2;
        year = part3;
      }
      if (year < 1900 || year > 2100) {
        return { valid: false, error: "Year must be between 1900 and 2100" };
      }
      if (month < 1 || month > 12) {
        return { valid: false, error: "Month must be between 1 and 12" };
      }
      if (day < 1 || day > 31) {
        return { valid: false, error: "Day must be between 1 and 31" };
      }
      const date = new Date(year, month - 1, day);
      if (date.getMonth() !== month - 1 || date.getDate() !== day) {
        return { valid: false, error: "Invalid day for the given month" };
      }
      return { valid: true, error: null, formattedDate: formatDateToDDMMYYYY(day, month, year) };
    } else if (trimmedValue.includes("/")) {
      const parts = trimmedValue.split("/");
      if (parts.length !== 3) {
        return { valid: false, error: "Date with / must have format: DD/MM/YYYY or MM/DD/YYYY" };
      }
      const [part1, part2, part3] = parts.map((p) => parseInt(p, 10));
      if (isNaN(part1) || isNaN(part2) || isNaN(part3)) {
        return { valid: false, error: "Date parts must be valid numbers" };
      }
      let day, month, year;
      if (part1 > 12) {
        day = part1;
        month = part2;
        year = part3;
      } else if (part2 > 12) {
        month = part1;
        day = part2;
        year = part3;
      } else {
        day = part1;
        month = part2;
        year = part3;
      }
      if (year < 1900 || year > 2100) {
        return { valid: false, error: "Year must be between 1900 and 2100" };
      }
      if (month < 1 || month > 12) {
        return { valid: false, error: "Month must be between 1 and 12" };
      }
      if (day < 1 || day > 31) {
        return { valid: false, error: "Day must be between 1 and 31" };
      }
      const date = new Date(year, month - 1, day);
      if (date.getMonth() !== month - 1 || date.getDate() !== day) {
        return { valid: false, error: "Invalid day for the given month" };
      }
      return { valid: true, error: null, formattedDate: formatDateToDDMMYYYY(day, month, year) };
    } else {
      return { valid: false, error: "Date must contain / or - separator" };
    }
  };
  const validateEmail = (value) => {
    if (!value || value.trim() === "") return { valid: true, error: null };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value.trim())) {
      return { valid: false, error: "Invalid email format" };
    }
    return { valid: true, error: null };
  };
  const validateGender = (value) => {
    if (!value || value.trim() === "") return { valid: true, error: null };
    const normalizedValue = value.trim().toLowerCase();
    if (normalizedValue !== "male" && normalizedValue !== "female") {
      return { valid: false, error: "Gender must be 'Male' or 'Female'" };
    }
    return { valid: true, error: null };
  };
  const parseExcelData = (headers, dataRows, dynamicExpectedColumns, hasGroupNameInExcel, dynamicCompetitions) => {
    if (!dataRows || dataRows.length === 0) return;
    const participants = [];
    const validationErrors = [];
    const getColIdx = (colName) => dynamicExpectedColumns.indexOf(colName);
    const userNameIdx = getColIdx(COLUMN_NAMES.USER_NAME);
    const identityNumberIdx = getColIdx(COLUMN_NAMES.IDENTITY_NUMBER);
    const registrationIdIdx = getColIdx(COLUMN_NAMES.REGISTRATION_ID);
    const groupNameIdx = getColIdx(COLUMN_NAMES.GROUP_NAME);
    const userDobIdx = getColIdx(COLUMN_NAMES.USER_DOB);
    const userGenderIdx = getColIdx(COLUMN_NAMES.USER_GENDER);
    const userPhoneIdx = getColIdx(COLUMN_NAMES.USER_PHONE);
    const userMobileIdx = getColIdx(COLUMN_NAMES.USER_MOBILE);
    const userEmailIdx = getColIdx(COLUMN_NAMES.USER_EMAIL);
    const userProfilePictureIdx = getColIdx(COLUMN_NAMES.USER_PROFILE_PICTURE);
    const levelIndices = levelColumns.map((levelCol) => getColIdx(levelCol));
    const competitionStartIdx = competitions.length > 0 ? getColIdx(hasGroupNameInExcel ? competitions[0]?.GroupName ? `${competitions[0]?.GroupName} ${competitions[0]?.Title}` : competitions[0]?.Title : competitions[0]?.Title) : dynamicExpectedColumns.length;
    const totalColumns = dynamicExpectedColumns.length;
    for (let i = 0; i < dataRows.length; i++) {
      const row = dataRows[i];
      if (row.length < 3) continue;
      const isEmptyRow = row.every((cell) => !cell || String(cell).trim() === "");
      if (isEmptyRow) continue;
      const rowErrors = [];
      const rowNum = i + 2;
      const name = normalizeString(userNameIdx >= 0 ? row[userNameIdx] || "" : row[0] || "");
      const identityNumber = normalizeString(identityNumberIdx >= 0 ? row[identityNumberIdx] || "" : "");
      const registrationId = normalizeString(registrationIdIdx >= 0 ? row[registrationIdIdx] || "" : "");
      let groupName = normalizeString(groupNameIdx >= 0 ? row[groupNameIdx] || "" : "");
      const phone = normalizeString(userPhoneIdx >= 0 ? row[userPhoneIdx] || "" : "");
      const mobile = normalizeString(userMobileIdx >= 0 ? row[userMobileIdx] || "" : "");
      const email = normalizeString(userEmailIdx >= 0 ? row[userEmailIdx] || "" : "");
      const dob = normalizeString(userDobIdx >= 0 ? row[userDobIdx] || "" : "");
      const gender = normalizeString(userGenderIdx >= 0 ? row[userGenderIdx] || "" : "");
      const profilePicture = normalizeString(userProfilePictureIdx >= 0 ? row[userProfilePictureIdx] || "" : "");
      const nameValidation = validateName(name);
      if (!nameValidation.valid) {
        rowErrors.push(`Row ${rowNum} (Name): ${nameValidation.error}`);
      }
      if (identityNumber && identityNumber.trim() === "") {
        rowErrors.push(`Row ${rowNum} (IdentityNumber): Cannot be empty whitespace`);
      }
      if (registrationId && registrationId.trim() === "") {
        rowErrors.push(`Row ${rowNum} (RegistrationId): Cannot be empty whitespace`);
      }
      if (hasGroupNameInExcel || selectedGroupFilter && selectedGroupFilter !== "all" || dynamicCompetitions?.length) {
        if (!selectedGroupFilter || selectedGroupFilter === "all") {
          const groupValidation = validateLevelField(groupName);
          if (!groupValidation.valid) {
            rowErrors.push(`Row ${rowNum} (GroupName): ${groupValidation.error}`);
          }
          if (groupName && groups) {
            const groupExists = groups.some((g) => g.GroupName?.toLowerCase() === groupName.toLowerCase());
            if (!groupExists) {
              rowErrors.push(`Row ${rowNum} (GroupName): Group "${groupName}" not found in event groups`);
            }
          }
        }
      }
      const phoneValidation = validatePhone(phone);
      if (!phoneValidation.valid) {
        rowErrors.push(`Row ${rowNum} (Phone): ${phoneValidation.error}`);
      }
      const mobileValidation = validatePhone(mobile);
      if (!mobileValidation.valid) {
        rowErrors.push(`Row ${rowNum} (Mobile): ${mobileValidation.error}`);
      }
      const emailValidation = validateEmail(email);
      if (!emailValidation.valid) {
        rowErrors.push(`Row ${rowNum} (Email): ${emailValidation.error}`);
      }
      const dobValidation = validateDate(dob);
      if (!dobValidation.valid) {
        rowErrors.push(`Row ${rowNum} (DOB): ${dobValidation.error}`);
      }
      const formattedDob = dobValidation.valid && dobValidation.formattedDate ? dobValidation.formattedDate : dob;
      const genderValidation = validateGender(gender);
      if (!genderValidation.valid) {
        rowErrors.push(`Row ${rowNum} (Gender): ${genderValidation.error}`);
      }
      if (profilePicture && profilePicture.trim() === "") {
        rowErrors.push(`Row ${rowNum} (ProfilePicture): Cannot be empty whitespace`);
      }
      levelIndices.forEach((levelIdx, idx) => {
        if (levelIdx >= 0) {
          const levelValue = row[levelIdx] || "";
          const levelValidation = validateLevelField(levelValue);
          if (!levelValidation.valid) {
            rowErrors.push(`Row ${rowNum} (${levelColumns[idx]}): ${levelValidation.error}`);
          }
        }
      });
      const levelData = {};
      levelIndices.forEach((levelIdx, idx) => {
        if (levelIdx >= 0) {
          levelData[levelColumns[idx]] = row[levelIdx] || "";
        }
      });
      const participations = {};
      let participantGroupId = null;
      if (hasGroupNameInExcel) {
        if (groupName && groups) {
          const matchedGroup = groups.find((g) => g.GroupName?.toLowerCase() === groupName.toLowerCase());
          participantGroupId = matchedGroup?.EventGroupId;
        }
      } else {
        if (selectedGroupFilter && selectedGroupFilter !== "all" && groups) {
          const matchedGroup = groups.find((g) => g.EventGroupId === selectedGroupFilter);
          participantGroupId = matchedGroup?.EventGroupId;
          matchedGroup?.GroupName;
        } else {
          if (formattedDob && groups) {
            let dobDate = null;
            if (formattedDob.includes("-")) {
              const dobParts = formattedDob.split("-");
              if (dobParts.length === 3) {
                const day = parseInt(dobParts[0], 10);
                const month = parseInt(dobParts[1], 10);
                const year = parseInt(dobParts[2], 10);
                if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1900 && year <= 2100) {
                  dobDate = new Date(year, month - 1, day);
                  if (dobDate.getMonth() !== month - 1 || dobDate.getDate() !== day) {
                    dobDate = null;
                  }
                }
                if (!dobDate || isNaN(dobDate.getTime())) {
                  const altDay = parseInt(dobParts[1], 10);
                  const altMonth = parseInt(dobParts[0], 10);
                  const altYear = parseInt(dobParts[2], 10);
                  if (altDay >= 1 && altDay <= 31 && altMonth >= 1 && altMonth <= 12 && altYear >= 1900 && altYear <= 2100) {
                    dobDate = new Date(altYear, altMonth - 1, altDay);
                    if (dobDate.getMonth() !== altMonth - 1 || dobDate.getDate() !== altDay) {
                      dobDate = null;
                    }
                  }
                }
              }
            } else if (formattedDob.includes("/")) {
              const dobParts = formattedDob.split("/");
              if (dobParts.length === 3) {
                const day = parseInt(dobParts[0], 10);
                const month = parseInt(dobParts[1], 10);
                const year = parseInt(dobParts[2], 10);
                if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1900 && year <= 2100) {
                  dobDate = new Date(year, month - 1, day);
                  if (dobDate.getMonth() !== month - 1 || dobDate.getDate() !== day) {
                    dobDate = null;
                  }
                }
                if (!dobDate || isNaN(dobDate.getTime())) {
                  const altDay = parseInt(dobParts[1], 10);
                  const altMonth = parseInt(dobParts[0], 10);
                  const altYear = parseInt(dobParts[2], 10);
                  if (altDay >= 1 && altDay <= 31 && altMonth >= 1 && altMonth <= 12 && altYear >= 1900 && altYear <= 2100) {
                    dobDate = new Date(altYear, altMonth - 1, altDay);
                    if (dobDate.getMonth() !== altMonth - 1 || dobDate.getDate() !== altDay) {
                      dobDate = null;
                    }
                  }
                }
              }
            }
            if (dobDate && !isNaN(dobDate.getTime())) {
              const matchedGroups = groups.filter((g) => {
                if (!g.MaxAgeDate || !g.MinAgeDate) return false;
                const maxDate = new Date(g.MaxAgeDate);
                const minDate = new Date(g.MinAgeDate);
                let jsonSettings = {};
                try {
                  jsonSettings = JSON.parse(g.JsonSettings || "{}");
                } catch (error) {
                }
                if (jsonSettings?.IsCommon === "Yes" || g.GroupName?.toLowerCase() === "common") {
                  return false;
                }
                return dobDate >= minDate && dobDate <= maxDate;
              });
              if (matchedGroups.length == 0 && !groupName) {
                rowErrors.push(`Row ${rowNum} (GroupName/DOB): Unable to determine group automatically from DOB "${formattedDob}". Please provide GroupName or correct the DOB format.`);
              }
              if (matchedGroups.length > 0) {
                participantGroupId = matchedGroups[0].EventGroupId;
                matchedGroups[0].GroupName;
                groupName = matchedGroups[0].GroupName;
              } else if (groupName) {
                const groupData = groups.find((g) => g.GroupName?.toLowerCase() === groupName.toLowerCase());
                participantGroupId = groupData?.EventGroupId;
                groupData?.GroupName;
              }
            } else if (groupName) {
              const groupData = groups.find((g) => g.GroupName?.toLowerCase() === groupName.toLowerCase());
              participantGroupId = groupData?.EventGroupId;
              groupData?.GroupName;
            }
          } else if (groupName) {
            const groupData = groups.find((g) => g.GroupName?.toLowerCase() === groupName.toLowerCase());
            participantGroupId = groupData?.EventGroupId;
            groupData?.GroupName;
          }
        }
      }
      let commonGroupIds = [];
      groups.forEach((g) => {
        let jsonSettings = {};
        try {
          jsonSettings = JSON.parse(g.JsonSettings || "{}");
        } catch (error) {
          console.error(`Error parsing JSON for group ${g.GroupName}:`, error);
        }
        if (g.GroupName?.toLowerCase() === "Common".toLowerCase() || jsonSettings?.IsCommon === "Yes") {
          commonGroupIds.push(g.EventGroupId.toString());
        }
      });
      let nonEmptyColumns = [];
      if (competitionStartIdx >= 0) {
        row.forEach((element, index) => {
          if (index >= competitionStartIdx && index <= totalColumns) {
            if (element) {
              nonEmptyColumns.push(element);
            }
          }
        });
      }
      if (competitionStartIdx >= 0) {
        dynamicCompetitions.forEach((title) => {
          const normalizedTitle = normalizeString(title);
          if (normalizedTitle.includes("Solo Male")) ;
          const realCompetition = competitions.find(
            (x) => x.Group.toString() == participantGroupId.toString() && normalizeString(x.Title) === normalizedTitle || commonGroupIds.includes(x.Group) && normalizeString(x.Title) === normalizedTitle
          );
          if (!realCompetition) {
            zt.error(`Competition "${title}" with Group ID "${participantGroupId}" not found in event competitions.`);
            return;
          }
          let columnName;
          if (hasGroupNameInExcel) {
            columnName = realCompetition.GroupName ? normalizeString(`${realCompetition.GroupName} ${realCompetition.Title}`) : normalizeString(realCompetition.Title);
          } else {
            columnName = normalizeString(realCompetition.Title);
          }
          const compIdx = getColIdx(columnName);
          if (compIdx >= 0 && row[compIdx]) {
            participations[realCompetition.Title] = {
              value: row[compIdx],
              CompetitionStructureId: realCompetition.CompetitionStructureId,
              Title: realCompetition.Title
            };
          }
        });
      }
      const participationCount = Object.keys(participations).length;
      const foundedCompetitions = Object.keys(participations).map((key) => participations[key].Title);
      const expectedCompetitionCount = nonEmptyColumns.length;
      if (participationCount !== expectedCompetitionCount) {
        rowErrors.push(
          `Regarding Row ${rowNum - 1}, Expected ${expectedCompetitionCount} competitions (${nonEmptyColumns.join(
            ", "
          )}) , but found ${participationCount} matching columns (${foundedCompetitions.join(", ")}). Please ensure all competition columns have values or check column names.`
        );
      }
      if (rowErrors.length > 0) {
        validationErrors.push(...rowErrors);
      }
      const participant = {
        name,
        identityNumber,
        registrationId,
        groupName,
        groupId: participantGroupId,
        // Store EventGroupId
        dob: formattedDob,
        // Use formatted DOB in dd-mm-yyyy format
        gender,
        phone,
        mobile,
        email,
        profilePicture,
        ...levelData,
        // Spread level fields
        rowIndex: i,
        status: rowErrors.length > 0 ? "error" : "pending",
        error: rowErrors.length > 0 ? rowErrors.join("; ") : null,
        participations
      };
      const localDuplicates = isParticipantDuplicateExistsLocally(participant, participants.length);
      if (localDuplicates?.error && localDuplicates.type === "LOCAL_DUPLICATES") {
        const duplicateRowNumbers = localDuplicates.indices.map((idx) => idx + 2).join(", ");
        const duplicateError = `Row ${rowNum}: Duplicate participant found. Same name, DOB, and level settings already exist in rows: ${duplicateRowNumbers}`;
        rowErrors.push(duplicateError);
        validationErrors.push(duplicateError);
        participant.status = "error";
        participant.error = participant.error ? `${participant.error}; ${duplicateError}` : duplicateError;
      }
      participants.push(participant);
    }
    if (validationErrors.length > 0) {
      validationErrors.forEach((error, index) => {
        setTimeout(() => {
          zt.error(error, { duration: 5e3 });
        }, index * 100);
      });
      setTimeout(() => {
        zt.error(`Total validation issues: ${validationErrors.length}`, { duration: 6e3 });
      }, validationErrors.length * 100);
    }
    setParsedParticipants(participants);
  };
  const buildParticipantDetails = (participant) => {
    const details = [];
    details.push(`Name: ${participant.name || "-"}`);
    if (participant.identityNumber) details.push(`Identity Number: ${participant.identityNumber}`);
    if (participant.registrationId) details.push(`Registration ID: ${participant.registrationId}`);
    if (participant.groupName) {
      const groupDisplay = participant.groupId && participant.groupName ? `${participant.groupId} - ${participant.groupName}` : participant.groupName;
      details.push(`Group: ${groupDisplay}`);
    }
    if (participant.dob) details.push(`Date of Birth: ${participant.dob}`);
    if (participant.gender) details.push(`Gender: ${participant.gender}`);
    levelColumns.forEach((levelCol) => {
      if (participant[levelCol]) {
        details.push(`${levelCol}: ${participant[levelCol]}`);
      }
    });
    if (participant.phone) details.push(`Phone: ${participant.phone}`);
    if (participant.mobile) details.push(`Mobile: ${participant.mobile}`);
    if (participant.email) details.push(`Email: ${participant.email}`);
    console.log(participant);
    if (participant.participations && Object.keys(participant.participations).length > 0) {
      details.push(`
Competitions:`);
      Object.entries(participant.participations).forEach(([compTitle, participation]) => {
        const comp = competitions.find((c) => c.CompetitionStructureId === participation.CompetitionStructureId);
        if (comp) {
          const groupInfo = comp.GroupName ? ` [${comp.GroupName}]` : "";
          details.push(`  • ${comp.Title}${groupInfo} (ID: ${comp.CompetitionStructureId}) - Value: ${participation.value}`);
        }
      });
    }
    return details.join("\n");
  };
  const importParticipant = async (participant, index, skipConfirmation = false) => {
    const participantExists = isParticipantExistsInServer(participant);
    if (participantExists?.error && participantExists.type === "MULTIPLE_MATCHES") {
      zt.error(`Cannot import: ${participantExists.count} users found with matching name and level settings. Please ensure unique combinations.`);
      setParsedParticipants(
        (prev) => prev.map(
          (p, idx) => idx === index ? {
            ...p,
            status: "error",
            error: `Multiple matches found (${participantExists.count} users)`
          } : p
        )
      );
      return;
    }
    const localDuplicates = isParticipantDuplicateExistsLocally(participant, index);
    if (localDuplicates?.error && localDuplicates.type === "LOCAL_DUPLICATES") {
      const duplicateRowNumbers = localDuplicates.indices.map((idx) => idx + 2).join(", ");
      zt.error(`Cannot import: Duplicate participant found. Same name, DOB, and level settings already exist in rows: ${duplicateRowNumbers}`);
      setParsedParticipants(
        (prev) => prev.map(
          (p, idx) => idx === index ? {
            ...p,
            status: "error",
            error: `Local duplicate found in rows: ${duplicateRowNumbers}`
          } : p
        )
      );
      return;
    }
    if (!confirmAllRef.current && !skipConfirmation) {
      const confirmed = await showConfirmation({
        title: `Import Participant ${index + 1} of ${parsedParticipants.length}`,
        description: buildParticipantDetails(participant),
        confirmButtonLabel: "Import",
        cancelButtonLabel: "Skip",
        showConfirmAllButton: true
      });
      if (confirmed === "confirmAll") {
        confirmAllRef.current = true;
        setConfirmAll(true);
      } else if (!confirmed) {
        setParsedParticipants((prev) => prev.map((p, idx) => idx === index ? { ...p, status: "skipped" } : p));
        return;
      }
    }
    setImportingRows((prev) => new Set(prev).add(index));
    setParsedParticipants((prev) => prev.map((p, idx) => idx === index ? { ...p, status: "importing" } : p));
    try {
      const organizationParams = {};
      levelColumns.forEach((levelCol) => {
        if (participant[levelCol]) {
          organizationParams[levelCol] = participant[levelCol];
        } else {
          zt.error(`Missing value for mandatory organization level: ${levelCol}`);
          return;
        }
      });
      const competitionList = [];
      if (participant.participations) {
        Object.keys(participant.participations).forEach((compTitle) => {
          const participation = participant.participations[compTitle];
          if (participation && participation.CompetitionStructureId) {
            competitionList.push(participation.CompetitionStructureId);
          }
        });
      }
      const orgLevelFields = {};
      levelColumns.forEach((levelCol) => {
        if (participant[levelCol]) {
          orgLevelFields[levelCol] = participant[levelCol];
        }
      });
      const existingUser = isParticipantExistsInServer(participant);
      const existingUserRoleId = existingUser ? selectedParticipantType == 2 ? existingUser.Team || existingUser.TeamId : existingUser.Candidate || existingUser.UserRoleId : null;
      let participantGroup = selectedGroupFilter;
      if (!selectedGroupFilter || selectedGroupFilter === "all") {
        const foundGroup = groups?.find((g) => g.GroupName?.toLowerCase() === participant.groupName?.toLowerCase());
        participantGroup = foundGroup?.EventGroupId || participant.groupName;
      }
      const participantData = {
        isImport: true,
        isCrossSite: true,
        EventCategory: currentUser?.EventCategory,
        Event: currentUser?.Event,
        ParticipantType: selectedParticipantType,
        Group: participantGroup,
        // Use resolved group
        CompetitionParticipantsModel: { CompetitionList: competitionList },
        // Array of competition structure IDs
        // User/Team data based on type
        ...selectedParticipantType == 1 ? {
          "UsersModel[UserName]": participant.name,
          "UsersModel[UserDobString]": participant.dob,
          "UsersModel[UserGender]": participant.gender,
          "UsersModel[UserPhone]": participant.phone,
          "UsersModel[UserMobile]": participant.mobile,
          "UsersModel[UserEmail]": participant.email,
          "UsersModel[UserImage]": participant.profilePicture || "",
          "UsersModel[CandidateIdentityNumber]": participant.identityNumber,
          "UsersModel[RegistrationId]": participant.registrationId,
          // Include Candidate (UserRoleId) if participant already exists
          ...existingUserRoleId ? { "UsersModel[Candidate]": existingUserRoleId } : {}
        } : {
          "UsersModel[TeamTeamName]": participant.name,
          "UsersModel[TeamIdentityNumber]": participant.identityNumber,
          "UsersModel[RegistrationId]": participant.registrationId,
          // Include Candidate (UserRoleId) if participant already exists
          ...existingUserRoleId ? { "UsersModel[Candidate]": existingUserRoleId, "UsersModel[TeamId]": existingUserRoleId, "UsersModel[Team]": existingUserRoleId } : {}
        },
        // Organization levels - spread into both UsersRolesModel and TeamModel
        ...selectedParticipantType == 1 ? Object.keys(orgLevelFields).reduce((acc, key) => {
          acc[`UsersRolesModel[LevelSettings][${key}]`] = orgLevelFields[key];
          return acc;
        }, {}) : Object.keys(orgLevelFields).reduce((acc, key) => {
          acc[`TeamModel[LevelSettings][${key}]`] = orgLevelFields[key];
          return acc;
        }, {})
      };
      const { data: response } = await post("/CoordinatorJson/SaveParticipants", participantData);
      if (response) {
        const pieces = response.split(",");
        const userId = parseInt(pieces[0]);
        const canidateId = parseInt(pieces[1]);
        const participantId = pieces.length > 2 ? parseInt(pieces[2]) : null;
        if (participantId) {
          setParsedParticipants(
            (prev) => prev.map((p, idx) => {
              if (idx === index) {
                console.log("Preserving participations:", p.participations);
                return {
                  ...p,
                  status: "success",
                  savedParticipantId: participantId,
                  participations: p.participations
                  // Explicitly preserve
                };
              }
              return p;
            })
          );
          zt.success(`Participant ${index + 1} imported successfully`);
          setTimeout(() => {
            const rowElement = participantRowsRef.current[index];
            if (rowElement) {
              rowElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 100);
        } else if (canidateId > 0) {
          setParsedParticipants(
            (prev) => prev.map((p, idx) => {
              if (idx === index) {
                console.log("Preserving participations:", p.participations);
                return {
                  ...p,
                  status: "success",
                  Candidate: canidateId,
                  participations: {}
                  // Explicitly preserve
                };
              }
              return p;
            })
          );
          setTimeout(() => {
            const rowElement = participantRowsRef.current[index];
            if (rowElement) {
              rowElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 100);
        } else {
          throw new Error("Invalid response from server");
        }
      } else {
        throw new Error("No response from server");
      }
    } catch (error) {
      console.error("Error importing participant:", error);
      setParsedParticipants((prev) => prev.map((p, idx) => idx === index ? { ...p, status: "error", error: error.message || "Import failed" } : p));
      zt.error(`Failed to import participant ${index + 1}: ${error.message}`);
    } finally {
      setImportingRows((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }
  };
  const importAllParticipants = async () => {
    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;
    let alreadyExistsCount = 0;
    setParsedParticipants((currentParticipants) => {
      (async () => {
        for (let i = 0; i < currentParticipants.length; i++) {
          const participant = currentParticipants[i];
          if (isParticipantFullyImported(participant)) {
            alreadyExistsCount++;
            continue;
          }
          if (participant.status === "pending" || participant.status === "error") {
            await importParticipant(participant, i);
            setParsedParticipants((updatedParticipants) => {
              const updatedParticipant = updatedParticipants[i];
              if (updatedParticipant.status === "success") {
                successCount++;
              } else if (updatedParticipant.status === "skipped") {
                skipCount++;
              } else if (updatedParticipant.status === "error") {
                errorCount++;
              }
              return updatedParticipants;
            });
            if (i < currentParticipants.length - 1) {
              await new Promise((resolve) => setTimeout(resolve, 500));
            }
          }
        }
        const messages = [];
        if (successCount > 0) messages.push(`${successCount} imported`);
        if (alreadyExistsCount > 0) messages.push(`${alreadyExistsCount} already exist`);
        if (skipCount > 0) messages.push(`${skipCount} skipped`);
        if (errorCount > 0) messages.push(`${errorCount} failed`);
        if (successCount > 0) {
          zt.success(`Import completed: ${messages.join(", ")}`);
        } else {
          zt.success(`Import completed: ${messages.join(", ")}`);
        }
        confirmAllRef.current = false;
        setConfirmAll(false);
      })();
      return currentParticipants;
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    confirmationData && /* @__PURE__ */ jsxRuntimeExports.jsxs(ht, { open: true, onClose: confirmationData.onCancel, className: "relative z-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lt, { className: "fixed inset-0 bg-gray-500/75 transition-opacity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-full items-end justify-center p-3 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ze, { className: "relative transform overflow-hidden rounded-lg bg-surfaceCard px-3 pb-3 pt-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:flex sm:items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "size-5 text-blue-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-center sm:ml-3 sm:mt-0 sm:text-left flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Qe, { as: "h3", className: "text-base font-semibold leading-6 text-onSurface mb-2", children: confirmationData.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs leading-relaxed text-gray-700 space-y-1", children: confirmationData.description.split("\n").map((line, index) => {
              if (line.trim() === "") return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2" }, index);
              if (line.trim().startsWith("•")) {
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pl-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: line.trim().substring(1).trim() })
                ] }, index);
              }
              if (line.includes(":")) {
                const [label, ...valueParts] = line.split(":");
                const value = valueParts.join(":").trim();
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-onSurface min-w-fit", children: [
                    label.trim(),
                    ":"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-onSurfaceVariant", children: value })
                ] }, index);
              }
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-onSurface", children: line }, index);
            }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 sm:mt-5 sm:flex sm:flex-row-reverse gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: confirmationData.onConfirm,
              className: "cursor-pointer inline-flex w-full justify-center rounded-md bg-primary px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto",
              children: confirmationData.confirmButtonLabel || "Confirm"
            }
          ),
          confirmationData.showConfirmAllButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: confirmationData.onConfirmAll,
              className: "cursor-pointer inline-flex w-full justify-center rounded-md bg-green-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:w-auto",
              children: "Confirm All"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: confirmationData.onCancel,
              className: "cursor-pointer mt-2 inline-flex w-full justify-center rounded-md bg-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-0 sm:w-auto",
              children: confirmationData.cancelButtonLabel || "Cancel"
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 p-3 bg-surfaceCard rounded-lg w-full shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-medium leading-5 text-onSurface mb-2", children: "Excel Import - Paste from Google Sheets" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 p-2 bg-blue-50 rounded-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-blue-900 mb-1 text-sm", children: "Instructions:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-xs text-blue-800 space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "1. Upload CSV or Excel file using the file input below" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "2. Columns will be ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "automatically reordered" }),
            " to match required format"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "3. Review the parsed data in the table below" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '4. Click "Import to List" to save participants and their participations' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 p-2 bg-surfaceCard rounded border border-primary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-blue-900 mb-1", children: "Required Columns (any order in Excel):" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-onSurfaceVariant space-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Base Fields:" }),
              " ",
              [
                COLUMN_NAMES.USER_NAME,
                COLUMN_NAMES.IDENTITY_NUMBER,
                COLUMN_NAMES.REGISTRATION_ID,
                ...!selectedGroupFilter || selectedGroupFilter === "all" ? [COLUMN_NAMES.GROUP_NAME] : [],
                COLUMN_NAMES.USER_DOB,
                COLUMN_NAMES.USER_GENDER
              ].join(", ")
            ] }),
            levelNamesString && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Organization Levels:" }),
              " ",
              levelNamesString
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Contact:" }),
              " ",
              [COLUMN_NAMES.USER_PHONE, COLUMN_NAMES.USER_MOBILE, COLUMN_NAMES.USER_EMAIL, COLUMN_NAMES.USER_PROFILE_PICTURE].join(", ")
            ] }),
            competitions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: !selectedGroupFilter || selectedGroupFilter === "all" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Competitions (with Group in Headings):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2 mt-1", children: (() => {
                  const uniqueComps = /* @__PURE__ */ new Map();
                  competitions.forEach((comp) => {
                    const key = comp.GroupName ? normalizeString(`${comp.Title} (${comp.GroupName})`) : normalizeString(comp.Title);
                    if (!uniqueComps.has(key)) {
                      uniqueComps.set(key, comp);
                    }
                  });
                  return Array.from(uniqueComps.values()).map((comp, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mr-2 mb-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xxs", children: comp.GroupName ? `${comp.Title} (${comp.GroupName})` : comp.Title }, idx));
                })() })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Competitions (without Group in Headings):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2 mt-1", children: [...new Set(competitions.map((comp) => normalizeString(comp.Title)))].map((title, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mr-2 mb-1 px-2 py-0.5 bg-green-50 text-green-700 rounded text-xxs", children: title }, idx)) })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Competitions:" }),
              " ",
              [...new Set(competitions.map((comp) => comp.Title))].join(", ")
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-blue-600 flex items-start gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-3 w-3 flex-shrink-0 mt-0.5 text-green-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-green-700", children: "✓ Columns can be in any order - system will automatically reorder them!" }),
            (!selectedGroupFilter || selectedGroupFilter === "all") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-blue-700", children: [
              "📋 All Groups mode: Include ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "GroupName" }),
              " column to specify group for each participant"
            ] }),
            selectedGroupFilter && selectedGroupFilter !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Group auto-detection: System will detect group from DOB (age range) if not specified." })
          ] })
        ] })
      ] }),
      eventDataToImport && eventDataToImport.sourceInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 bg-green-50 border border-green-200 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-green-800 mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-5 w-5" }),
          "Event Data Imported"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-green-700 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Source Event:" }),
            " ",
            eventDataToImport.sourceInfo.sourceEventName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Participants Loaded:" }),
            " ",
            eventDataToImport.sourceInfo.participantCount
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 mt-2", children: "✓ Data has been automatically loaded from your coordinator event. Review and import participants below." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-gray-700 mb-1", children: "Min Similarity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: minSimilarity, onChange: (e) => setMinSimilarity(parseInt(e.target.value)), className: "form-control text-sm py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1", children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2", children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3", children: "3" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-gray-700 mb-1", children: "Upload CSV/Excel File" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "file",
            accept: ".csv,.xlsx,.xls",
            onChange: handleFileUpload,
            disabled: isParsingData,
            className: "block w-full text-xs text-onSurface border border-border rounded-md cursor-pointer bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent file:mr-2 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-white hover:file:bg-primaryHover disabled:opacity-50 disabled:cursor-not-allowed"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-gray-500", children: "Supported formats: CSV, Excel (.xlsx, .xls)." })
      ] }),
      isParsingData && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex items-center justify-center py-8 border border-border rounded-lg bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-6 w-6 text-primary animate-spin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Processing data, please wait..." })
      ] }) }),
      !isParsingData && parsedParticipants.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-medium text-onSurface", children: [
            "Parsed Participants (",
            parsedParticipants.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  setParsedParticipants([]);
                  setExcelData([]);
                  setImportingRows(/* @__PURE__ */ new Set());
                  setImportResults([]);
                  sessionStorage.removeItem(STORAGE_KEY);
                  zt.success("All data cleared");
                },
                className: "cursor-pointer inline-flex items-center gap-x-1.5 rounded-md bg-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm hover:bg-gray-300",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-3 w-3" }),
                  "Clear All"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: importAllParticipants,
                disabled: importingRows.size > 0,
                className: "cursor-pointer inline-flex items-center gap-x-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-primaryHover disabled:opacity-50 disabled:cursor-not-allowed",
                children: [
                  importingRows.size > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-3 w-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-3 w-3" }),
                  "Import to List"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto overflow-y-auto border border-border rounded-lg shadow-sm ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-border table-auto text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("thead", { className: "bg-gray-50 sticky top-0 z-10", children: [
            (!selectedGroupFilter || selectedGroupFilter === "all") && (() => {
              const groupedComps = /* @__PURE__ */ new Map();
              const uniqueComps = /* @__PURE__ */ new Map();
              competitions.forEach((comp) => {
                const key = comp.GroupName ? normalizeString(`${comp.Title} (${comp.GroupName})`) : normalizeString(comp.Title);
                if (!uniqueComps.has(key)) {
                  uniqueComps.set(key, comp);
                  const groupName = normalizeString(comp.GroupName || "Common");
                  if (!groupedComps.has(groupName)) {
                    groupedComps.set(groupName, []);
                  }
                  groupedComps.get(groupName).push(comp);
                }
              });
              const baseColsCount = 11 + levelColumns.length + (!selectedGroupFilter || selectedGroupFilter === "all" ? 1 : 0);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { colSpan: baseColsCount, className: "px-1 py-1 text-left text-xs font-medium text-gray-500 bg-gray-100" }),
                Array.from(groupedComps.entries()).map(([groupName, comps], idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { colSpan: comps.length, className: "px-1 py-1 text-center text-xs font-semibold text-white bg-primary border-l border-r border-gray-300", children: groupName }, idx))
              ] });
            })(),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: "Actions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: "Identity No" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: "Reg ID" }),
              (!selectedGroupFilter || selectedGroupFilter === "all") && /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: "Group" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: "DoB" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: "Gender" }),
              levelColumns.map((levelCol, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: levelCol }, idx)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: "Mobile" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-gray-500 ", children: "Profile Pic" }),
              (() => {
                const uniqueComps = /* @__PURE__ */ new Map();
                competitions.forEach((comp) => {
                  const key = comp.GroupName ? normalizeString(`${comp.Title} (${comp.GroupName})`) : normalizeString(comp.Title);
                  if (!uniqueComps.has(key)) {
                    uniqueComps.set(key, comp);
                  }
                });
                return Array.from(uniqueComps.values()).map((comp, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-1 py-1 text-left text-xs font-medium text-onSurfaceVariant border-l border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-gray-700", children: [
                    comp.CompetitionOrder,
                    " - ",
                    comp.Title
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xxs text-gray-500", children: [
                    "ID: ",
                    comp.CompetitionStructureId
                  ] })
                ] }) }, idx));
              })()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-surfaceCard divide-y divide-border", children: parsedParticipants.map((participant, index) => {
            const fullyImported = isParticipantFullyImported(participant);
            const participantExists = isParticipantExistsInServer(participant);
            const hasMultipleMatches = participantExists?.error && participantExists.type === "MULTIPLE_MATCHES";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { ref: (el) => participantRowsRef.current[index] = el, className: `hover:bg-gray-50 transition-colors ${hasMultipleMatches ? "bg-red-50" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-1 py-1 ", children: [
                hasMultipleMatches ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600 font-medium", children: "Error: Multiple Matches" }) : (participant.status === "pending" || participant.status === "error") && !fullyImported && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => importParticipant(participant, index),
                    disabled: importingRows.has(index),
                    className: "cursor-pointer inline-flex items-center gap-x-1 rounded-md bg-primary px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-primaryHover disabled:opacity-50 disabled:cursor-not-allowed",
                    title: participantExists ? "Import additional competitions" : "Import this participant",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-3 w-3" }),
                      participantExists ? "Import Comps" : "Import"
                    ]
                  }
                ),
                fullyImported && participant.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 font-medium", children: "Fully Imported" }),
                participant.status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-green-600 font-medium", children: "Imported" }),
                participant.status === "importing" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-blue-600 font-medium", children: "Importing..." }),
                participant.status === "skipped" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-yellow-600 font-medium", children: "Skipped" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 ", children: hasMultipleMatches ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-5 w-5 text-red-500", title: `Error: ${participantExists.count} users found with matching name and levels. Please ensure unique combinations.` }) : participant.status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-5 w-5 text-white bg-green-500 rounded-full p-0.5", title: "Imported successfully" }) : participant.status === "error" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-5 w-5 text-red-500", title: participant.error || "Import failed" }) : participant.status === "importing" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-5 w-5 text-blue-500 animate-spin", title: "Importing..." }) : participant.status === "skipped" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-5 w-5 text-yellow-500", title: "Skipped by user" }) : participant.status === "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: fullyImported ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-5 w-5 text-white bg-green-500 rounded-full p-0.5", title: "Participant and all competitions already imported" }) : participantExists ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-5 w-5 text-white bg-yellow-500 rounded-full p-0.5", title: "Participant exists, but some competitions not assigned" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded-full border-2 border-gray-300", title: "Pending import" }) }) : null }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-xs font-medium text-onSurface  max-w-24 overflow-hidden text-ellipsis", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: participant.name || "-" }),
                hasMultipleMatches ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-4 w-4 text-red-500 flex-shrink-0", title: `${participantExists.count} matching users found` }) : participantExists && !participantExists.error ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-4 w-4 text-white bg-green-500 rounded-full p-0.5 flex-shrink-0", title: "Participant already exists in server" }) : null
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-xs text-gray-500 ", children: participant.identityNumber || "-" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-xs text-gray-500 ", children: participant.registrationId || "-" }),
              (!selectedGroupFilter || selectedGroupFilter === "all") && /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-xs text-gray-500 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-xxs font-medium bg-blue-100 text-blue-800", children: participant.groupId && participant.groupName ? `${participant.groupId} - ${participant.groupName}` : participant.groupName || "-" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-xs text-gray-500 whitespace-nowrap", children: participant.dob || "-" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-xs text-gray-500 ", children: participant.gender || "-" }),
              levelColumns.map((levelCol, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-xs text-gray-500 max-w-24 overflow-hidden text-ellipsis", children: participant[levelCol] || "-" }, idx)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-xs text-gray-500 ", children: participant.phone || "-" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-xs text-gray-500 ", children: participant.mobile || "-" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-xs text-gray-500 ", children: participant.email || "-" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-xs text-gray-500 ", children: participant.profilePicture ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: participant.profilePicture, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:text-blue-800", children: "View" }) : "-" }),
              competitions.map((comp, idx) => {
                const participation = participant.participations?.[comp.Title]?.CompetitionStructureId === comp.CompetitionStructureId;
                const isAlreadyAssigned = isCompetitionAssigned(participant, comp.CompetitionStructureId);
                return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-xs text-gray-500 ", children: participation ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-700 whitespace-nowrap", title: comp.Title, children: [
                    "ID: ",
                    comp.CompetitionStructureId
                  ] }),
                  isAlreadyAssigned && /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-4 w-4 text-white bg-green-500 rounded-full p-0.5 flex-shrink-0", title: "Competition already assigned in server" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "-" }) }, idx);
              })
            ] }, index);
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500", children: "Table is scrollable both horizontally and vertically - showing all imported columns." })
      ] })
    ] })
  ] });
};
const ExcelImportComponent = ({
  onEdit,
  onView,
  onDelete,
  onTeamManage,
  selectedGroupFilter,
  selectedParticipantType,
  selectedOrganization,
  pageSize,
  currentPage,
  filterCriterias,
  currentUser,
  onAssignmentChange,
  onPageChange,
  selectedOrganizations,
  onClearFilters,
  eventDataToImport = null,
  onEventDataProcessed = null
}) => {
  const { groups } = useEventContext();
  const [rightPanelWidth, setRightPanelWidth] = reactExports.useState(384);
  const [isResizing, setIsResizing] = reactExports.useState(false);
  const [highlightedRowId, setHighlightedRowId] = reactExports.useState(null);
  const [highlightedColumnId, setHighlightedColumnId] = reactExports.useState({
    competitionId: null,
    candidateId: null
  });
  const [activeCompetitionId, setActiveCompetitionId] = reactExports.useState(null);
  const [loadingCells, setLoadingCells] = reactExports.useState(/* @__PURE__ */ new Set());
  const [expandedParticipantId, setExpandedParticipantId] = reactExports.useState(null);
  reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const {
    row: participantsData,
    status: participantsStatus,
    setFilter: setParticipantFilter,
    updateLocal: updateParticipantLocal,
    delete: deleteParticipant
  } = useBackend("/CoordinatorJson/GetParticipants", {
    select: "participantList,userList,UserEmail,UserName,UserDobString,UserImage,UserMobile,UserPhone,Email,Group,Candidate,CandidateUser,JsonSettings,Gender,GroupName,GenderName,LanguageName,Fees,TeamTeamName,Team,TeamStrength,TeamMembersList,TeamMembers,TeamStrength,CandidateIdentityNumber,TeamIdentityNumber,CompetitionOrder,CreatedBy,CreatedByUserName,ParticipantId,UserJsonSettings,TeamJsonSettings,Remarks,LevelSettings,RegistrationId,UniqueCandidateId,UniqueTeamId,CreatedDate,ModifiedDate,CreatedByEmail,CreatedByMobile,Order",
    filter: {
      EventCategory: currentUser?.EventCategory,
      Event: currentUser?.Event,
      ParticipantType: selectedParticipantType
    },
    limit: 1e5,
    offset: (currentPage - 1) * pageSize,
    updateUrl: "/CoordinatorJson/SaveParticipants",
    deleteUrl: "/CompetitionParticipantsJson/Remove",
    noGet: true
    // Don't fetch until we have required filters
  });
  let participantsList = participantsData?.ParticipantsList || [];
  const usersList = participantsData?.UsersList || [];
  const competitions = participantsData?.Competitions || [];
  const eventLevels = participantsData?.OrganizationLevels || [];
  const buildCompetitionMappings = () => {
    const mappings = {};
    competitions.forEach((comp) => {
      const simplifiedName = comp.CompetitionName?.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (simplifiedName) {
        if (!mappings[simplifiedName]) {
          mappings[simplifiedName] = [];
        }
        mappings[simplifiedName].push({
          CompetitionStructureId: comp.CompetitionStructureId,
          CompetitionName: comp.CompetitionName,
          GroupName: comp.GroupName,
          GenderName: comp.GenderName,
          LanguageName: comp.LanguageName,
          EventGroupId: comp.EventGroupId
        });
      }
    });
    return mappings;
  };
  buildCompetitionMappings();
  const buildExpectedColumns = () => {
    const columns = [];
    columns.push("UserName");
    columns.push("IdentityNumber");
    columns.push("RegistrationId");
    if (!selectedGroupFilter || selectedGroupFilter === "all") {
      columns.push("GroupName");
    }
    columns.push("UserDob");
    columns.push("UserGender");
    const levels = eventLevels || [];
    levels.forEach((level, index) => {
      if (index !== 0) {
        columns.push(`Level_${level.LevelName}Name`);
      }
    });
    columns.push("UserPhone");
    columns.push("UserMobile");
    columns.push("UserEmail");
    columns.push("UserProfilePicture");
    let competitionColumns = [];
    if (selectedGroupFilter && selectedGroupFilter !== "all") {
      competitionColumns = competitions.filter((comp) => comp.EventGroupId === selectedGroupFilter || comp.Group === selectedGroupFilter).map((comp) => comp.CompetitionName);
    } else {
      competitionColumns = competitions.map((comp) => comp.CompetitionName);
    }
    const uniqueCompetitions = [...new Set(competitionColumns)].filter(Boolean);
    columns.push(...uniqueCompetitions);
    return columns;
  };
  buildExpectedColumns();
  const buildLevelNamesString = () => {
    const levels = eventLevels || [];
    const levelNames = [];
    levels.forEach((level, index) => {
      if (index !== 0) {
        levelNames.push(`${level.LevelName}Name`);
      }
    });
    if (levelNames.length === 0) return "";
    if (levelNames.length === 1) return levelNames[0];
    const lastItem = levelNames.pop();
    return levelNames.join(", ") + " and " + lastItem;
  };
  buildLevelNamesString();
  usersList.map((user) => {
    const userParticipations = participantsList.filter((participation) => {
      if (user.Team > 0) {
        return participation.Team === user.Team.toString() || participation.Candidate === user.Team.toString();
      }
      if (user.Candidate > 0) {
        return participation.Candidate === user.Candidate.toString();
      }
      return false;
    });
    return {
      ...user,
      participations: userParticipations
    };
  });
  let jsonfilterCriteria = JSON.stringify(filterCriterias);
  reactExports.useEffect(() => {
    if (selectedParticipantType && selectedGroupFilter) {
      let organizaionobj = {};
      if (selectedOrganizations && selectedOrganizations.length > 0) {
        selectedOrganizations.forEach((x) => {
          organizaionobj = { ...organizaionobj, ...x };
        });
      }
      const filterObj = {
        EventCategory: currentUser?.EventCategory,
        Event: currentUser?.Event,
        ParticipantType: selectedParticipantType,
        OrganizationId: selectedOrganization || void 0,
        ...filterCriterias || {},
        ...organizaionobj
      };
      if (selectedGroupFilter !== "all") {
        filterObj.Group = selectedGroupFilter;
        filterObj.AgeFrom = groups?.find((g) => g.EventGroupId === selectedGroupFilter)?.AgeFrom;
        filterObj.AgeTo = groups?.find((g) => g.EventGroupId === selectedGroupFilter)?.AgeTo;
      }
      setParticipantFilter(filterObj, true);
    }
  }, [selectedParticipantType, selectedGroupFilter, selectedOrganization, jsonfilterCriteria]);
  reactExports.useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = containerRect.right - e.clientX;
      const minWidth = 280;
      const levelsCount = Array.isArray(eventLevels) ? eventLevels.length : 0;
      const maxWidth = levelsCount > 0 ? Math.max(minWidth, levelsCount * 120) : containerRect.width * 0.6;
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setRightPanelWidth(newWidth);
      }
    };
    const handleMouseUp = () => {
      setIsResizing(false);
    };
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);
  reactExports.useCallback((participant, competitionId) => {
    if (!participant.participations) return false;
    return participant.participations.some((participation) => participation.Competition === competitionId);
  }, []);
  const [ParticicipantConfirmationBox] = useConfirmation();
  const [removalConfirmation, setRemovalConfirmation] = reactExports.useState(null);
  const isLoading = participantsStatus !== "finished";
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading participants...", className: "h-64" });
  }
  if (!selectedParticipantType) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "Please select a group and participant type." }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "flex-1 flex overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ParticicipantConfirmationBox,
      {
        title: "Delete Participant",
        description: "Are you sure you want to delete this participant?",
        confirmButtonLabel: "Delete",
        confirmButtonClick: async (item) => {
          try {
            await deleteParticipant(item);
            zt.success("Participant Deleted Successfully");
            if (typeof onDelete === "function") onDelete(item);
          } catch (ex) {
            zt.error("Failed to delete participant");
          }
        },
        className: "w-96 print:hidden"
      }
    ),
    removalConfirmation && /* @__PURE__ */ jsxRuntimeExports.jsxs(ht, { open: true, onClose: removalConfirmation.onCancel, className: "relative z-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lt, { className: "fixed inset-0 bg-gray-500/75 transition-opacity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ze, { className: "relative transform overflow-hidden rounded-lg bg-surfaceCard px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:flex sm:items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { "aria-hidden": "true", className: "size-6 text-red-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Qe, { as: "h3", className: "text-base font-semibold text-onSurface", children: removalConfirmation.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: removalConfirmation.message }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: removalConfirmation.onConfirm,
              className: "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
              children: removalConfirmation.confirmText
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: removalConfirmation.onCancel,
              className: "mt-3 inline-flex w-full justify-center rounded-md bg-surfaceCard px-3 py-2 text-sm font-semibold text-onSurface shadow-sm ring-1 ring-inset ring-border hover:bg-surface sm:mt-0 sm:w-auto",
              children: removalConfirmation.cancelText
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        table:has(th.competition-header:hover) tbody tr td:nth-child(n+5) {
          background-color: transparent;
        }
        ${competitions?.map(
      (comp, index) => `
          table:has(th.competition-header:nth-child(${index + 5}):hover) tbody tr td:nth-child(${index + 5}) {
            background-color: rgb(219 234 254) !important;
          }
        `
    ).join("")}

        ${activeCompetitionId ? competitions?.map(
      (comp, index) => comp.CompetitionStructureId === activeCompetitionId ? `tbody tr td:nth-child(${index + 5}) {
                    background-color: rgb(191 219 254) !important;
                  }` : ""
    ).join("") : ""}
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden bg-surfaceCard", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-2 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExcelImportModal,
      {
        usersList,
        setParticipantFilter,
        participantsList,
        competitions,
        selectedGroupFilter,
        selectedParticipantType,
        currentUser,
        updateParticipantLocal,
        eventDataToImport,
        onEventDataProcessed
      }
    ) }) }) }) })
  ] });
};
export {
  ExcelImportComponent as default
};
