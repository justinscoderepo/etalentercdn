import { r as reactExports, u as useBackend, j as jsxRuntimeExports, z as zt } from "./main-B7w5eCOl.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { F as ForwardRef } from "./DocumentTextIcon-CpKnur7u.js";
import { F as ForwardRef$1 } from "./ArrowUpTrayIcon-BnSXJdsv.js";
import { F as ForwardRef$2 } from "./PlusIcon-CAPBj82K.js";
import { F as ForwardRef$3 } from "./PencilIcon-Cm_gsuKe.js";
import { F as ForwardRef$4 } from "./TrashIcon-xWLadHx8.js";
const EligibleRegistrationNumbers = () => {
  const [editingId, setEditingId] = reactExports.useState(null);
  const [eventDetails, setEventDetails] = reactExports.useState(null);
  const [registrationNumbers, setRegistrationNumbers] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [csvPreview, setCsvPreview] = reactExports.useState(null);
  const fileInputRef = reactExports.useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const { rows: events } = useBackend("/EventJson/Get", {
    select: "EVId,JsonSettings,EventSecret",
    noGet: false
  });
  reactExports.useEffect(() => {
    if (events && events.length > 0) {
      const event = events[0];
      setEventDetails(event);
      if (event.JsonSettings) {
        try {
          const jsonSettings = JSON.parse(event.JsonSettings);
          const eligibleNumbers = jsonSettings?.AdditionalSettings?.EligibleRegistrationNumbers || [];
          setRegistrationNumbers(eligibleNumbers);
        } catch (error) {
          console.error("Error parsing JsonSettings:", error);
          setRegistrationNumbers([]);
        }
      }
      setIsLoading(false);
    }
  }, [events]);
  const csvToArray = (str, delimiter = ",") => {
    const rows = str.split("\n");
    let values = rows.map((row) => {
      const columns = row.split(delimiter);
      try {
        return {
          RegistrationNumber: columns[0]?.replace(/(\r\n|\n|\r)/gm, "").trim(),
          IssuedTo: columns[1]?.replace(/(\r\n|\n|\r)/gm, "").trim(),
          ContactNumber: columns[2]?.replace(/(\r\n|\n|\r)/gm, "").trim()
        };
      } catch (e) {
        console.error(e);
        return null;
      }
    });
    values = values.filter((x) => x?.RegistrationNumber);
    if (values.length > 0 && values[0].RegistrationNumber.toLowerCase().includes("registration")) {
      values.shift();
    }
    return values;
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e.target.result;
      const csvData = csvToArray(contents);
      if (csvData.length === 0) {
        zt.error("No valid data found in CSV file");
        return;
      }
      setCsvPreview(csvData);
      zt.success(`${csvData.length} records loaded from CSV`);
    };
    reader.onerror = () => {
      zt.error("Error reading CSV file");
    };
    reader.readAsText(file);
  };
  const handleSaveCsv = () => {
    if (!csvPreview || csvPreview.length === 0) {
      zt.error("No CSV data to save");
      return;
    }
    const unique = {};
    csvPreview.forEach((item) => {
      unique[item.RegistrationNumber] = item;
    });
    const uniqueData = Object.values(unique);
    setRegistrationNumbers(uniqueData);
    setCsvPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    zt.success(`${uniqueData.length} unique registration numbers added`);
  };
  const handleCancelCsv = () => {
    setCsvPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    zt.info("CSV upload cancelled");
  };
  const onSubmit = (data) => {
    if (editingId !== null) {
      const updated = registrationNumbers.map(
        (entry, index) => index === editingId ? {
          RegistrationNumber: data.RegistrationNumber,
          IssuedTo: data.IssuedTo,
          ContactNumber: data.ContactNumber
        } : entry
      );
      setRegistrationNumbers(updated);
      zt.success("Registration number updated successfully");
      setEditingId(null);
    } else {
      const exists = registrationNumbers.find(
        (entry) => entry.RegistrationNumber === data.RegistrationNumber
      );
      if (exists) {
        zt.error("Registration number already exists");
        return;
      }
      const newEntry = {
        RegistrationNumber: data.RegistrationNumber,
        IssuedTo: data.IssuedTo,
        ContactNumber: data.ContactNumber
      };
      setRegistrationNumbers([...registrationNumbers, newEntry]);
      zt.success("Registration number added successfully");
    }
    reset();
  };
  const handleEdit = (index) => {
    const entry = registrationNumbers[index];
    setEditingId(index);
    reset({
      RegistrationNumber: entry.RegistrationNumber,
      IssuedTo: entry.IssuedTo,
      ContactNumber: entry.ContactNumber
    });
  };
  const handleDelete = (index) => {
    const updated = registrationNumbers.filter((_, i) => i !== index);
    setRegistrationNumbers(updated);
    zt.success("Registration number deleted successfully");
  };
  const handleSaveAll = async () => {
    if (!eventDetails) {
      zt.error("Event details not loaded");
      return;
    }
    try {
      let jsonSettings = {};
      if (eventDetails.JsonSettings) {
        jsonSettings = JSON.parse(eventDetails.JsonSettings);
      }
      if (!jsonSettings.AdditionalSettings) {
        jsonSettings.AdditionalSettings = {};
      }
      jsonSettings.AdditionalSettings.EligibleRegistrationNumbers = registrationNumbers;
      const response = await fetch("/EventJson/Save", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          Select: "EVId,JsonSettings",
          EVId: eventDetails.EVId,
          JsonSettings: JSON.stringify(jsonSettings)
        })
      });
      if (response.ok) {
        zt.success("All eligible registration numbers saved successfully");
      } else {
        zt.error("Failed to save registration numbers");
      }
    } catch (error) {
      console.error("Error saving registration numbers:", error);
      zt.error("Error saving registration numbers");
    }
  };
  const handleDownloadTemplate = () => {
    const csvContent = "RegistrationNumber,IssuedTo,ContactNumber\nREG001,John Doe,1234567890\nREG002,Jane Smith,9876543210";
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "registration_numbers_template.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Eligible Registration Numbers",
        subHeading: "Manage whitelisted registration numbers for event access",
        icon: ForwardRef,
        rightChildren: registrationNumbers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleSaveAll,
            className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            children: "Save All Changes"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-onSurface mb-4", children: "CSV Upload" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-start md:items-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              htmlFor: "csvUpload",
              className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "-mr-0.5 h-5 w-5" }),
                "Upload CSV File"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              id: "csvUpload",
              accept: ".csv",
              onChange: handleFileUpload,
              className: "hidden"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleDownloadTemplate,
              className: "inline-flex items-center gap-x-2 rounded-md bg-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              children: "Download Template"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-onSurfaceVariant", children: "Format: RegistrationNumber,IssuedTo,ContactNumber" })
        ] }),
        csvPreview && csvPreview.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-onSurface", children: [
              "Preview (",
              csvPreview.length,
              " records)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleCancelCsv,
                  className: "inline-flex items-center gap-x-2 rounded-md bg-surface px-4 py-2 text-sm font-semibold text-onSurface shadow-sm hover:bg-surfaceHover",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleSaveCsv,
                  className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
                  children: "Add to List"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto max-h-96", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surface sticky top-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-onSurface uppercase tracking-wider", children: "Registration Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-onSurface uppercase tracking-wider", children: "Issued To" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-onSurface uppercase tracking-wider", children: "Contact Number" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-surfaceCard divide-y divide-border", children: csvPreview.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-surface", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-onSurface", children: row.RegistrationNumber }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-onSurface", children: row.IssuedTo }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-onSurface", children: row.ContactNumber })
            ] }, index)) })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-6 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-onSurface mb-4", children: editingId !== null ? "Edit Registration Number" : "Add Registration Number Manually" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold leading-6 text-onSurface mb-1", children: "Registration Number *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  ...register("RegistrationNumber", {
                    required: "Registration number is required"
                  }),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                  placeholder: "Enter registration number"
                }
              ),
              errors.RegistrationNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-600", children: errors.RegistrationNumber.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold leading-6 text-onSurface mb-1", children: "Issued To *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  ...register("IssuedTo", {
                    required: "Issued to name is required"
                  }),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                  placeholder: "Enter name"
                }
              ),
              errors.IssuedTo && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-600", children: errors.IssuedTo.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold leading-6 text-onSurface mb-1", children: "Contact Number *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  ...register("ContactNumber", {
                    required: "Contact number is required"
                  }),
                  className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                  placeholder: "Enter contact number"
                }
              ),
              errors.ContactNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-600", children: errors.ContactNumber.message })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3", children: [
            editingId !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setEditingId(null);
                  reset();
                },
                className: "inline-flex items-center gap-x-2 rounded-md bg-surface px-6 py-2.5 text-sm font-semibold text-onSurface shadow-sm hover:bg-surfaceHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "-mr-0.5 h-5 w-5" }),
                  editingId !== null ? "Update" : "Add"
                ]
              }
            )
          ] })
        ] })
      ] }),
      registrationNumbers.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-onSurface uppercase tracking-wider", children: "Registration Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-onSurface uppercase tracking-wider", children: "Issued To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-onSurface uppercase tracking-wider", children: "Contact Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-right text-xs font-semibold text-onSurface uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-surfaceCard divide-y divide-border", children: registrationNumbers.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-surface", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-onSurface", children: entry.RegistrationNumber }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-onSurface", children: entry.IssuedTo }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-onSurface", children: entry.ContactNumber }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleEdit(index),
                className: "text-primary hover:text-primaryHover mr-3",
                title: "Edit",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDelete(index),
                className: "text-red-600 hover:text-red-800",
                title: "Delete",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }, index)) })
      ] }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-sm border border-border p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldExclamationIcon, { className: "mx-auto h-12 w-12 text-onSurfaceVariant mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-onSurface mb-1", children: "No registration numbers configured" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "Add registration numbers manually or upload a CSV file" })
      ] })
    ] })
  ] }) });
};
export {
  EligibleRegistrationNumbers as default
};
