import { r as reactExports, j as jsxRuntimeExports, m as useEventContext, u as useBackend, z as zt } from "./main-B7w5eCOl.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { O as OldNewTabLayout } from "./OldNewTabLayout-g9TCcW0h.js";
import { e as getLink } from "./navigationUtils-BZC1EMRn.js";
import FormEditor from "./formEditor-C5u1WBjw.js";
import { F as ForwardRef$1 } from "./UserGroupIcon-C7G6h27R.js";
import { F as ForwardRef$2 } from "./UserIcon-BRPEvw4s.js";
import { F as ForwardRef$3 } from "./XCircleIcon-CFrF3RSu.js";
import { F as ForwardRef$4 } from "./CheckCircleIcon-B36U4EaE.js";
import { F as ForwardRef$5 } from "./PencilIcon-Cm_gsuKe.js";
import { F as ForwardRef$6 } from "./TrashIcon-xWLadHx8.js";
import { F as ForwardRef$7 } from "./PlusIcon-CAPBj82K.js";
import { F as ForwardRef$8 } from "./TableCellsIcon-Di039zGs.js";
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
function CalendarIcon({
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
    d: "M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(CalendarIcon);
const calculateDateDifference = (fromDate, toDate) => {
  const from = new Date(fromDate);
  from.setHours(0, 0, 0, 0);
  const to = new Date(toDate);
  to.setHours(0, 0, 0, 0);
  to.setDate(to.getDate() + 1);
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();
  if (days < 0) {
    months--;
    const lastMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += lastMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
};
const calculateTotalDays = (fromDate, toDate) => {
  const from = new Date(fromDate);
  from.setHours(0, 0, 0, 0);
  const to = new Date(toDate);
  to.setHours(0, 0, 0, 0);
  to.setDate(to.getDate() + 1);
  const diffTime = Math.abs(to - from);
  return Math.ceil(diffTime / (1e3 * 60 * 60 * 24)) + 1;
};
const formatAgeRange = (diff) => {
  if (diff.years === 0 && diff.months === 0) {
    return `${diff.days} ${diff.days === 1 ? "day" : "days"}`;
  } else if (diff.years === 0) {
    if (diff.days === 0) {
      return `${diff.months} ${diff.months === 1 ? "month" : "months"}`;
    }
    return `${diff.months} ${diff.months === 1 ? "month" : "months"}, ${diff.days} ${diff.days === 1 ? "day" : "days"}`;
  } else {
    const parts = [];
    parts.push(`${diff.years} ${diff.years === 1 ? "year" : "years"}`);
    if (diff.months > 0) {
      parts.push(`${diff.months} ${diff.months === 1 ? "month" : "months"}`);
    }
    if (diff.days > 0) {
      parts.push(`${diff.days} ${diff.days === 1 ? "day" : "days"}`);
    }
    return parts.join(", ");
  }
};
const parseDate = (dateString) => {
  if (!dateString) return null;
  const parts = dateString.split("-");
  if (parts.length !== 3) return null;
  return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
};
function AgePreview({ formData, getValues }) {
  const birthDateOldest = formData?.BirthDateTo || getValues?.("BirthDateTo");
  const birthDateYoungest = formData?.BirthDateFrom || getValues?.("BirthDateFrom");
  if (!birthDateOldest || !birthDateYoungest) return null;
  const oldestDate = parseDate(birthDateOldest);
  const youngestDate = parseDate(birthDateYoungest);
  if (!oldestDate || !youngestDate) return null;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const calculationDate = new Date(currentYear, youngestDate.getMonth(), youngestDate.getDate());
  const ageYoungest = currentYear - youngestDate.getFullYear();
  const ageOldest = currentYear - oldestDate.getFullYear();
  const dateDiff = calculateDateDifference(oldestDate, youngestDate);
  const totalDays = calculateTotalDays(oldestDate, youngestDate);
  const isLessThanYear = dateDiff.years === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-surface border border-primary/20 rounded-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-semibold text-onSurface mb-3 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5 text-cyan-600" }),
      "Calculated Age Group Preview"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard p-3 rounded border border-cyan-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-onSurfaceVariant block mb-1", children: "Age From (Youngest)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-semibold text-onSurface", children: [
            ageYoungest,
            " years"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard p-3 rounded border border-cyan-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-onSurfaceVariant block mb-1", children: "Age To (Oldest)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-semibold text-onSurface", children: [
            ageOldest,
            " years"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard p-3 rounded border border-cyan-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-onSurfaceVariant block mb-1", children: "Calculation Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-semibold text-onSurface", children: [
            String(calculationDate.getDate()).padStart(2, "0"),
            "-",
            String(calculationDate.getMonth() + 1).padStart(2, "0"),
            "-",
            currentYear
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-emerald-50 p-3 rounded border border-emerald-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-emerald-700 font-medium block mb-1", children: "Birth Date Range Span" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-emerald-900", children: formatAgeRange(dateDiff) })
        ] }),
        isLessThanYear && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-emerald-700 font-medium block mb-1", children: "Total Days" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-emerald-900", children: [
            totalDays,
            " ",
            totalDays === 1 ? "day" : "days"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-onSurfaceVariant bg-surfaceCard p-2 rounded", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "From (Oldest):" }),
          " ",
          birthDateOldest
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "To (Youngest):" }),
          " ",
          birthDateYoungest
        ] })
      ] })
    ] })
  ] });
}
const participantTypeOptions = [
  { text: "Any", value: "Any", icon: ForwardRef$1 },
  { text: "Individual", value: "Individual", icon: ForwardRef$2 },
  { text: "Team", value: "Team", icon: ForwardRef$1 }
];
const yesNoCommonOptions = [
  { text: "No", value: "No", icon: ForwardRef$3 },
  { text: "Yes (Multiple age groups)", value: "Yes", icon: ForwardRef$4 }
];
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
function AgeGroupForm({ editingGroup, existingGroups = [], onSubmit, onCancel, open }) {
  const defaultCalculationDate = reactExports.useMemo(() => {
    if (existingGroups && existingGroups.length > 0) {
      const firstGroup = existingGroups[0];
      return {
        day: firstGroup.AgeStartDate || 1,
        month: firstGroup.AgeStartMonth || 1,
        year: firstGroup.AgeStartYear || (/* @__PURE__ */ new Date()).getFullYear()
      };
    }
    return {
      day: 1,
      month: 1,
      year: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }, [existingGroups]);
  const calculateBirthDatesFromAges = (ageFrom, ageTo, calcDate) => {
    if (!ageFrom || !ageTo || !calcDate) return { birthDateFrom: "", birthDateTo: "" };
    try {
      const ageCalcDate = new Date(calcDate.year, calcDate.month - 1, calcDate.day);
      const oldestBirthDate = new Date(ageCalcDate);
      oldestBirthDate.setFullYear(oldestBirthDate.getFullYear() - ageTo);
      oldestBirthDate.setDate(oldestBirthDate.getDate() + 1);
      const youngestBirthDate = new Date(ageCalcDate);
      youngestBirthDate.setFullYear(youngestBirthDate.getFullYear() - ageFrom + 1);
      return {
        birthDateFrom: formatDate(youngestBirthDate),
        birthDateTo: formatDate(oldestBirthDate)
      };
    } catch (error) {
      console.error("Error calculating birth dates from ages:", error);
      return { birthDateFrom: "", birthDateTo: "" };
    }
  };
  const rowData = reactExports.useMemo(() => {
    if (!editingGroup) {
      return {
        Status: 2,
        ParticipantType: "Any",
        IsCommon: "No",
        NoAgeIdPrefix: "No",
        AgeFrom: "",
        AgeTo: ""
      };
    }
    return {
      EventGroupId: editingGroup.EventGroupId,
      GroupName: editingGroup.GroupName,
      BirthDateFrom: editingGroup.BirthDateFrom || "",
      BirthDateTo: editingGroup.BirthDateTo || "",
      AgeFrom: editingGroup.AgeFrom || "",
      AgeTo: editingGroup.AgeTo || "",
      ParticipantType: editingGroup.parsedSettings.ParticipantType,
      IsCommon: editingGroup.parsedSettings.IsCommon,
      NoAgeIdPrefix: editingGroup.parsedSettings.NoAgeIdPrefix,
      Order: editingGroup.Order,
      Status: editingGroup.Status
    };
  }, [editingGroup]);
  const formFields = [
    {
      name: "GroupName",
      label: "Group Name",
      type: "text",
      placeholder: "e.g., Juniors, Children, Seniors",
      validate: { required: true, minLength: 2, maxLength: 50 }
    },
    {
      name: "ParticipantType",
      label: "Participant Type",
      type: "toggle",
      options: participantTypeOptions,
      validate: { required: true }
    },
    {
      name: "BirthDateTo",
      label: "Birth Date From (Oldest Eligible)",
      type: "normalDate",
      maxDate: /* @__PURE__ */ new Date(),
      placeholder: "Select the birth date of the oldest eligible participant (earliest date)",
      validate: { required: true, toField: "BirthDateFrom" }
    },
    {
      name: "BirthDateFrom",
      label: "Birth Date To (Youngest Eligible)",
      type: "normalDate",
      maxDate: /* @__PURE__ */ new Date(),
      placeholder: "Select the birth date of the youngest eligible participant (most recent)",
      validate: { required: true, fromField: "BirthDateTo" }
    },
    // Age inputs with automatic calculation
    {
      name: "AgeFrom",
      label: "Age From (Youngest Age)",
      type: "number",
      placeholder: "e.g., 5",
      description: `Ages calculated on ${defaultCalculationDate.day}/${defaultCalculationDate.month}/${defaultCalculationDate.year}`,
      min: 0,
      max: 100,
      validate: {
        required: true,
        min: 0,
        max: 100,
        lessThanOrEqualTo: "AgeTo"
      }
    },
    {
      name: "AgeTo",
      label: "Age To (Oldest Age)",
      type: "number",
      placeholder: "e.g., 12",
      min: 0,
      max: 100,
      validate: {
        required: true,
        min: 0,
        max: 100,
        greaterThanOrEqualTo: "AgeFrom"
      }
    },
    {
      name: "AgePreview",
      type: "custom",
      render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AgePreview, { ...props })
    },
    {
      name: "IsCommon",
      label: "Is Common Group",
      type: "toggle",
      options: yesNoCommonOptions
    },
    {
      name: "NoAgeIdPrefix",
      label: "No Age-Based ID Prefix",
      type: "toggle",
      options: [
        { text: "No (Use age prefix)", value: "No", icon: ForwardRef$3 },
        { text: "Yes (No prefix)", value: "Yes", icon: ForwardRef$4 }
      ],
      conditions: [{ key: "IsCommon", value: "No" }]
    }
  ];
  const handleSave = async (data, ...args) => {
    if (data.IsCommon === "Yes") {
      data.NoAgeIdPrefix = "Yes";
    }
    return onSubmit(data, ...args);
  };
  const onChangeAgeFrom = (value, formData, setValue) => {
    const ageFrom = parseInt(value) || 0;
    const ageTo = parseInt(formData.AgeTo) || 0;
    const { birthDateFrom, birthDateTo } = calculateBirthDatesFromAges(ageFrom + 1, ageTo, defaultCalculationDate);
    setValue("BirthDateFrom", birthDateFrom);
    setValue("BirthDateTo", birthDateTo);
  };
  const onChangeAgeTo = (value, formData, setValue) => {
    const ageTo = parseInt(value) || 0;
    const ageFrom = parseInt(formData.AgeFrom) || 0;
    const { birthDateFrom, birthDateTo } = calculateBirthDatesFromAges(ageFrom, ageTo, defaultCalculationDate);
    setValue("BirthDateFrom", birthDateFrom);
    setValue("BirthDateTo", birthDateTo);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormEditor,
    {
      title: editingGroup ? "Edit Age Group" : "Add New Age Group",
      description: editingGroup ? "Update age group details by modifying age ranges and calculation dates" : "Create a new age group by specifying age ranges and calculation dates",
      row: rowData,
      fields: formFields,
      onSave: handleSave,
      onCancel,
      ageFromOnChange: onChangeAgeFrom,
      ageToOnChange: onChangeAgeTo
    }
  );
}
function GapIndicator({ gapInfo }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-6 top-4 -ml-px h-full w-0.5 bg-red-300 border-l-2 border-dashed", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start space-x-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-red-100 border-2 border-red-400 border-dashed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-red-600", children: "GAP" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border-2 border-red-200 border-dashed bg-red-50 shadow-sm p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-red-700 mb-2", children: "⚠️ Missing Age Range" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-red-600 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Gap Ages:" }),
            " ",
            gapInfo.missingAges
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Date Range:" }),
            " ",
            gapInfo.dateFrom,
            " to ",
            gapInfo.dateTo
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic text-red-500 mt-2", children: "Participants born in this range have no age group assigned!" })
        ] })
      ] }) })
    ] })
  ] });
}
function TimelineItem({ group, onEdit, onDelete, isLast }) {
  const badgeBgColor = group.parsedSettings.ParticipantType === "Individual" ? "bg-cyan-500" : group.parsedSettings.ParticipantType === "Team" ? "bg-emerald-500" : "bg-indigo-500";
  const borderColor = group.parsedSettings.ParticipantType === "Individual" ? "border-cyan-200" : group.parsedSettings.ParticipantType === "Team" ? "border-emerald-200" : "border-indigo-200";
  const accentColor = group.parsedSettings.ParticipantType === "Individual" ? "text-cyan-600" : group.parsedSettings.ParticipantType === "Team" ? "text-emerald-600" : "text-indigo-600";
  const calculateDateRange = () => {
    const ageCalcDate = new Date(group.AgeStartYear, group.AgeStartMonth - 1, group.AgeStartDate);
    const minBirthDate = new Date(ageCalcDate);
    minBirthDate.setFullYear(minBirthDate.getFullYear() - group.AgeTo);
    minBirthDate.setDate(minBirthDate.getDate() + 1);
    const maxBirthDate = new Date(ageCalcDate);
    maxBirthDate.setFullYear(maxBirthDate.getFullYear() - group.AgeFrom + 1);
    const formatDate2 = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    };
    return {
      from: formatDate2(minBirthDate),
      to: formatDate2(maxBirthDate),
      minYear: minBirthDate.getFullYear(),
      maxYear: maxBirthDate.getFullYear()
    };
  };
  const dateRange = calculateDateRange();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pb-8", children: [
    !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-6 top-8 -ml-px h-full w-0.5 bg-border", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start space-x-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full ${badgeBgColor} shadow-sm`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-bold text-white", children: [
        group.AgeFrom,
        "-",
        group.AgeTo
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border ${borderColor} bg-surfaceCard shadow-sm p-4`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-base font-semibold ${accentColor}`, children: group.GroupName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onEdit(group), className: "text-onSurfaceVariant hover:text-primary transition-colors", title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onDelete(group.EventGroupId), className: "text-onSurfaceVariant hover:text-red-600 transition-colors", title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-onSurfaceVariant", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-4 w-4 text-onSurfaceVariant" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Age on: ",
                group.AgeStartDate,
                "/",
                group.AgeStartMonth,
                "/",
                group.AgeStartYear
              ] })
            ] }),
            group.parsedSettings.IsCommon === "Yes" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800", children: "Common" }),
            group.Status !== 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800", children: "Inactive" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-xs text-onSurfaceVariant", children: [
            "Order: ",
            group.Order
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-border bg-surfaceCard shadow-sm p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5 text-onSurfaceVariant flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-onSurface mb-1", children: "Birth Date Range (Eligible Participants)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-onSurfaceVariant", children: "From:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 font-medium text-onSurface", children: dateRange.from }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-onSurfaceVariant", children: [
                  "(",
                  dateRange.minYear,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-onSurfaceVariant", children: "To:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 font-medium text-onSurface", children: dateRange.to }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-onSurfaceVariant", children: [
                  "(",
                  dateRange.maxYear,
                  ")"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-onSurfaceVariant italic", children: [
              "Participants born within this date range will be age ",
              group.AgeFrom,
              "-",
              group.AgeTo,
              " on ",
              group.AgeStartDate,
              "/",
              group.AgeStartMonth,
              "/",
              group.AgeStartYear
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function AgeGroupTimeline({ groups, onEdit, onDelete, detectGaps }) {
  const individualGroups = groups.filter((g) => g.parsedSettings.ParticipantType === "Individual").sort((a, b) => (a.Order || 0) - (b.Order || 0));
  const teamGroups = groups.filter((g) => g.parsedSettings.ParticipantType === "Team").sort((a, b) => (a.Order || 0) - (b.Order || 0));
  const anyGroups = groups.filter((g) => g.parsedSettings.ParticipantType === "Any").sort((a, b) => (a.Order || 0) - (b.Order || 0));
  const renderGroupColumn = (groupList, gaps, title, icon, colorScheme) => {
    const items = [];
    groupList.forEach((group, idx) => {
      items.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineItem, { group, onEdit, onDelete, isLast: false }) }, group.EventGroupId)
      );
      const gap = gaps.find((g) => g.afterIndex === idx);
      if (gap) {
        items.push(
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GapIndicator, { gapInfo: gap }) }, `gap-${idx}`)
        );
      }
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 mb-4 pb-2 border-b-2 ${colorScheme.border}`, children: [
        icon,
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-base font-semibold ${colorScheme.text}`, children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `ml-auto rounded-full ${colorScheme.bg} px-2 py-1 text-xs font-medium ${colorScheme.badge}`, children: [
          groupList.length,
          " groups"
        ] })
      ] }),
      groupList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500", children: [
        "No ",
        title.toLowerCase(),
        " defined"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flow-root", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "-mb-8", children: items }) })
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [
    (individualGroups.length > 0 || anyGroups.length === 0) && renderGroupColumn(individualGroups, detectGaps(individualGroups), "Individual Groups", /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-6 w-6 text-cyan-600" }), {
      border: "border-cyan-300",
      text: "text-cyan-700",
      bg: "bg-cyan-100",
      badge: "text-cyan-800"
    }),
    (teamGroups.length > 0 || anyGroups.length === 0) && renderGroupColumn(teamGroups, detectGaps(teamGroups), "Team Groups", /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-6 w-6 text-emerald-600" }), {
      border: "border-emerald-300",
      text: "text-emerald-700",
      bg: "bg-emerald-100",
      badge: "text-emerald-800"
    }),
    anyGroups.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderGroupColumn(anyGroups, detectGaps(anyGroups), "Individual+Team Groups", /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-6 w-6 text-indigo-600" }), {
      border: "border-indigo-300",
      text: "text-indigo-700",
      bg: "bg-indigo-100",
      badge: "text-indigo-800"
    }) })
  ] });
}
function ManageGroups() {
  const { eventDetails } = useEventContext();
  const [editingGroup, setEditingGroup] = reactExports.useState(null);
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const {
    rows,
    update,
    delete: deleteGroup,
    status
  } = useBackend("/AgewiseGroupsJson/Get", {
    filter: { EventCategory: eventDetails?.EventCategory },
    updateUrl: "/AgewiseGroupsJson/Save",
    deleteUrl: "/AgewiseGroupsJson/Remove",
    limit: 100,
    sort: { sortOrder: "ASC", sortColumn: "Order" },
    select: "EventGroupId,GroupName,AgeFrom,AgeTo,AgeStartDate,AgeStartMonth,AgeStartYear,Status,JsonSettings,Order"
  });
  console.log("rows", rows);
  const groupsWithSettings = reactExports.useMemo(() => {
    if (!rows) return [];
    return rows.map((row) => {
      let settings = { ParticipantType: "Any", IsCommon: "No", NoAgeIdPrefix: "No" };
      try {
        if (row.JsonSettings) {
          settings = JSON.parse(row.JsonSettings);
        }
      } catch (e) {
        console.error("Failed to parse JsonSettings:", e);
      }
      return { ...row, parsedSettings: settings };
    });
  }, [rows]);
  const calculateCorrectOrder = (groups) => {
    const getPriority = (group) => {
      const type = group.parsedSettings.ParticipantType;
      const isCommon = group.parsedSettings.IsCommon === "Yes";
      if (type === "Individual" && !isCommon) return 1;
      if (type === "Individual" && isCommon) return 2;
      if (type === "Team" && !isCommon) return 3;
      if (type === "Team" && isCommon) return 4;
      return 5;
    };
    const sortedGroups = [...groups].sort((a, b) => {
      const priorityDiff = getPriority(a) - getPriority(b);
      if (priorityDiff !== 0) return priorityDiff;
      return (a.AgeFrom || 0) - (b.AgeFrom || 0);
    });
    return sortedGroups.map((group, index) => ({ ...group, correctOrder: index + 1 }));
  };
  const autoFixGroupOrders = async (groups, silent = false) => {
    if (!groups || groups.length === 0) return;
    const groupsWithCorrectOrder = calculateCorrectOrder(groups);
    const needsUpdate = groupsWithCorrectOrder.filter((group) => group.Order !== group.correctOrder);
    if (needsUpdate.length === 0) return;
    console.log(
      "Auto-fixing incorrect orders for",
      needsUpdate.length,
      "groups:",
      needsUpdate.map((g) => ({ name: g.GroupName, currentOrder: g.Order, newOrder: g.correctOrder }))
    );
    const updatePromises = needsUpdate.map(
      (group) => update(
        {
          EventGroupId: group.EventGroupId,
          Order: group.correctOrder
        },
        true
      ).catch((err) => {
        console.error(`Failed to auto-update order for group "${group.GroupName}":`, err);
        return null;
      })
    );
    try {
      const results = await Promise.all(updatePromises);
      const successCount = results.filter((r) => r !== null).length;
      if (!silent && successCount > 0) {
        console.log(`Auto-fixed order for ${successCount} group(s)`);
      }
    } catch (error) {
      console.error("Group order auto-fix errors:", error);
    }
  };
  const updateGroupOrders = async () => {
    if (!groupsWithSettings || groupsWithSettings.length === 0) {
      zt.error("No groups available to reorder");
      return;
    }
    const groupsWithCorrectOrder = calculateCorrectOrder(groupsWithSettings);
    const needsUpdate = [];
    groupsWithCorrectOrder.forEach((group) => {
      if (group.Order !== group.correctOrder) {
        needsUpdate.push({
          EventGroupId: group.EventGroupId,
          GroupName: group.GroupName,
          currentOrder: group.Order,
          newOrder: group.correctOrder
        });
      }
    });
    if (needsUpdate.length === 0) {
      zt.success("All groups are already in correct order");
      return;
    }
    console.log("Groups needing order update:", needsUpdate);
    const updatePromises = needsUpdate.map(
      (group) => update({
        EventGroupId: group.EventGroupId,
        Order: group.newOrder
      }).catch((err) => {
        console.error(`Failed to update order for group "${group.GroupName}":`, err);
        throw err;
      })
    );
    try {
      await Promise.all(updatePromises);
      zt.success(`Successfully updated order for ${needsUpdate.length} group(s)`);
    } catch (error) {
      zt.error("Some group orders failed to update. Check console for details.");
      console.error("Group order update errors:", error);
    }
  };
  const detectGaps = (groups) => {
    const gaps = [];
    const formatDate2 = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    };
    const groupsWithDates = groups.map((group) => {
      const ageCalcDate = new Date(group.AgeStartYear, group.AgeStartMonth - 1, group.AgeStartDate);
      const minBirthDate = new Date(ageCalcDate);
      minBirthDate.setFullYear(minBirthDate.getFullYear() - group.AgeTo);
      minBirthDate.setDate(minBirthDate.getDate() + 1);
      const maxBirthDate = new Date(ageCalcDate);
      maxBirthDate.setFullYear(maxBirthDate.getFullYear() - group.AgeFrom + 1);
      return {
        ...group,
        minBirthDate,
        maxBirthDate,
        minBirthDateStr: formatDate2(minBirthDate),
        maxBirthDateStr: formatDate2(maxBirthDate)
      };
    });
    for (let i = 0; i < groupsWithDates.length - 1; i++) {
      const currentGroup = groupsWithDates[i];
      const nextGroup = groupsWithDates[i + 1];
      const dayAfterNext = new Date(nextGroup.maxBirthDate);
      dayAfterNext.setDate(dayAfterNext.getDate() + 1);
      const dayBeforeCurrent = new Date(currentGroup.minBirthDate);
      dayBeforeCurrent.setDate(dayBeforeCurrent.getDate() - 1);
      if (dayAfterNext <= dayBeforeCurrent) {
        const ageCalcDate = new Date(currentGroup.AgeStartYear, currentGroup.AgeStartMonth - 1, currentGroup.AgeStartDate);
        const gapStartAge = Math.floor((ageCalcDate - dayBeforeCurrent) / (365.25 * 24 * 60 * 60 * 1e3));
        const gapEndAge = Math.ceil((ageCalcDate - dayAfterNext) / (365.25 * 24 * 60 * 60 * 1e3));
        gaps.push({
          afterIndex: i,
          missingAges: gapStartAge === gapEndAge ? `Age ${gapStartAge}` : `Age ${gapStartAge}-${gapEndAge}`,
          dateFrom: formatDate2(dayAfterNext),
          dateTo: formatDate2(dayBeforeCurrent)
        });
      }
    }
    return gaps;
  };
  const onSubmit = async (data) => {
    try {
      const [oldestDay, oldestMonth, oldestYear] = (data.BirthDateTo || "1-1-2020").split("-");
      const [youngestDay, youngestMonth, youngestYear] = (data.BirthDateFrom || "31-12-2024").split("-");
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      const ageCalcDate = new Date(currentYear, parseInt(youngestMonth) - 1, parseInt(youngestDay));
      const ageFrom = currentYear - parseInt(youngestYear);
      const ageTo = currentYear - parseInt(oldestYear);
      const newOldestDate = new Date(parseInt(oldestYear), parseInt(oldestMonth) - 1, parseInt(oldestDay));
      const newYoungestDate = new Date(parseInt(youngestYear), parseInt(youngestMonth) - 1, parseInt(youngestDay));
      const conflictingGroup = groupsWithSettings.find((group) => {
        if (data.EventGroupId && group.EventGroupId === data.EventGroupId) return false;
        if (group.parsedSettings.ParticipantType !== data.ParticipantType) return false;
        if (group.parsedSettings.IsCommon !== data.IsCommon) return false;
        const existingOldestDate = new Date(group.AgeStartYear - group.AgeTo, group.AgeStartMonth - 1, group.AgeStartDate);
        const existingYoungestDate = new Date(group.AgeStartYear - group.AgeFrom, group.AgeStartMonth - 1, group.AgeStartDate);
        const overlaps = newOldestDate <= existingYoungestDate && newYoungestDate >= existingOldestDate;
        return overlaps;
      });
      if (conflictingGroup) {
        zt.error(`Date range overlaps with existing group "${conflictingGroup.GroupName}". Please adjust the dates to avoid overlap within the same Participant Type and Common Group status.`);
        return;
      }
      const payload = {
        EventGroupId: data.EventGroupId || 0,
        EventCategory: eventDetails?.EventCategory,
        GroupName: data.GroupName,
        AgeFrom: ageFrom,
        AgeTo: ageTo,
        AgeStartDate: ageCalcDate.getDate(),
        AgeStartMonth: ageCalcDate.getMonth() + 1,
        AgeStartYear: ageCalcDate.getFullYear(),
        Status: 1,
        Order: data.Order || (rows?.length || 0) + 1,
        // Keep existing order or assign next available
        JsonSettings: JSON.stringify({
          ParticipantType: data.ParticipantType,
          IsCommon: data.IsCommon,
          NoAgeIdPrefix: data.NoAgeIdPrefix
        }),
        BirthDateFrom: data.BirthDateFrom,
        BirthDateTo: data.BirthDateTo
      };
      const updateResult = await update(payload, false, true);
      const [formData, responseData, saveResponse, latestResponse] = updateResult;
      const firstItem = Array.isArray(latestResponse) && latestResponse.length > 0 ? latestResponse[0] : null;
      if (firstItem) {
        console.log("Latest data after save:", firstItem);
        const latestGroupsWithSettings = firstItem.map((row) => {
          let settings = { ParticipantType: "Any", IsCommon: "No", NoAgeIdPrefix: "No" };
          try {
            if (row.JsonSettings) {
              settings = JSON.parse(row.JsonSettings);
            }
          } catch (e) {
            console.error("Failed to parse JsonSettings:", e);
          }
          return { ...row, parsedSettings: settings };
        });
        await autoFixGroupOrders(latestGroupsWithSettings, true);
      }
      zt.success(editingGroup ? "Group updated successfully" : "Group added successfully");
      setEditingGroup(null);
      setShowAddForm(false);
    } catch (error) {
      zt.error("Failed to save group");
      console.error(error);
    }
  };
  const handleDelete = async (groupId) => {
    if (!window.confirm("Are you sure you want to delete this age group?")) return;
    try {
      const deleteResult = await deleteGroup({ EventGroupId: groupId });
      const [formData, responseData, deleteResponse] = deleteResult;
      setTimeout(async () => {
        try {
          const remainingGroups = groupsWithSettings.filter((g) => g.EventGroupId !== groupId);
          if (remainingGroups.length > 0) {
            await autoFixGroupOrders(remainingGroups, true);
          }
        } catch (error) {
          console.error("Failed to auto-fix orders after delete:", error);
        }
      }, 1e3);
      zt.success("Group deleted successfully");
    } catch (error) {
      zt.error("Failed to delete group");
    }
  };
  const handleEdit = (group) => {
    let calculatedBirthDateFrom = "";
    let calculatedBirthDateTo = "";
    if (group.AgeFrom && group.AgeTo && group.AgeStartYear && group.AgeStartMonth && group.AgeStartDate) {
      try {
        const ageCalcDate = new Date(group.AgeStartYear, group.AgeStartMonth - 1, group.AgeStartDate);
        const oldestBirthDate = new Date(ageCalcDate);
        oldestBirthDate.setFullYear(oldestBirthDate.getFullYear() - group.AgeTo);
        oldestBirthDate.setDate(oldestBirthDate.getDate() + 1);
        const formatDate2 = (date) => {
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = date.getFullYear();
          return `${day}-${month}-${year}`;
        };
        calculatedBirthDateTo = formatDate2(oldestBirthDate);
        const youngestBirthDate = new Date(ageCalcDate);
        youngestBirthDate.setFullYear(youngestBirthDate.getFullYear() - group.AgeFrom + 1);
        calculatedBirthDateFrom = formatDate2(youngestBirthDate);
      } catch (error) {
        console.error("Error calculating birth dates for editing:", error);
      }
    }
    const groupWithBirthDates = {
      ...group,
      BirthDateFrom: group.BirthDateFrom || calculatedBirthDateFrom,
      BirthDateTo: group.BirthDateTo || calculatedBirthDateTo
    };
    setEditingGroup(groupWithBirthDates);
    setShowAddForm(true);
  };
  const handleCancelEdit = () => {
    setEditingGroup(null);
    setShowAddForm(false);
  };
  const tabs = [
    { title: "New Page", path: getLink("/SetUp/ManageGroups") },
    { title: "Old Page", path: getLink("/SetUp/ManageGroupsOld") },
    { title: "Old Table View", path: getLink(`/AgewiseGroups/Manage`) }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OldNewTabLayout, { tabs, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Age Groups Setup",
        subHeading: "Manage participant age categories and groups",
        rightChildren: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setShowAddForm(!showAddForm),
              className: "inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-primary to-darkprimary px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$7, { className: "h-5 w-5" }),
                showAddForm ? "Cancel" : "Add New Group"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: updateGroupOrders,
              disabled: status === "loading",
              className: "inline-flex items-center gap-x-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:bg-surfaceVariant disabled:scale-100",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$8, { className: "h-5 w-5" }),
                "Fix Order"
              ]
            }
          )
        ] })
      }
    ),
    showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsx(AgeGroupForm, { editingGroup, existingGroups: groupsWithSettings, onSubmit, onCancel: handleCancelEdit, open: showAddForm }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface border border-primary/20 rounded-xl p-5 mb-6 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 rounded-lg p-2 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5 text-blue-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-onSurface mb-1", children: "Quick Guide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant leading-relaxed mb-2", children: "Organize participants into age-based groups. Groups are automatically ordered by priority (Individual → Team → Any) and age range." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-xs text-onSurfaceVariant", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cyan badges represent Individual participants, Emerald for Teams, Indigo for Any type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Red dashed gaps indicate missing age ranges between groups" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Use "Fix Order" button to manually reorder groups when needed' })
        ] })
      ] })
    ] }) }),
    status === "loading" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-onSurfaceVariant", children: "Loading groups..." }),
    status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500", children: "Error loading age groups. Please try refreshing the page." }) }),
    (status === "success" || status === "finished") && (!rows || rows.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: 'No age groups found. Click "Add New Group" to get started.' }) }),
    (status === "success" || status === "finished") && rows && rows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AgeGroupTimeline, { groups: groupsWithSettings, onEdit: handleEdit, onDelete: handleDelete, detectGaps }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-onSurfaceVariant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-primary", children: "What's next?" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/SetUp/ManageCompetitionItems", className: "underline hover:text-primary", children: "Add Competition Items" }),
      " ",
      "|",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/CompetitionStructure/Tab", className: "underline hover:text-primary", children: "Assign Competitions to Groups" }),
      " ",
      "|",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/Coordinator/ManageBulkParticipants", className: "underline hover:text-primary", children: "Add Participants" })
    ] }) })
  ] }) }) });
}
export {
  ManageGroups as default
};
