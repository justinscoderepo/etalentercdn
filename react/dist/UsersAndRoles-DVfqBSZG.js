import { r as reactExports, j as jsxRuntimeExports, q as parseJson, i as classNames, L as Loader, k as React, _ as __vitePreload, b as getUserData, u as useBackend, z as zt } from "./main-B7w5eCOl.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { B as Box } from "./box-Du61b7dg.js";
import { u as useConfirmation } from "./useConfirmation-7dfYOxTH.js";
import { F as ForwardRef$3 } from "./ShareIcon-B-0k4HAN.js";
import { F as ForwardRef$4 } from "./PencilIcon-Cm_gsuKe.js";
import { F as ForwardRef$5 } from "./TrashIcon-xWLadHx8.js";
import { F as ForwardRef$6 } from "./PlusIcon-CAPBj82K.js";
import { F as ForwardRef$7 } from "./ArrowUpTrayIcon-BnSXJdsv.js";
import { F as ForwardRef$8 } from "./ArrowDownTrayIcon-BPLlu3r3.js";
import { F as ForwardRef$9 } from "./TrashIcon-DMovC4zz.js";
import "./dialog-DkCfFwgC.js";
import "./keyboard-Dku-r8UD.js";
import "./dom-XjFFvgb6.js";
import "./use-is-mounted-DkvN6zYE.js";
import "./hidden-tL6qlWMm.js";
import "./open-closed-gVG0H0sE.js";
import "./description-3iOOxFmG.js";
import "./navigationUtils-BZC1EMRn.js";
import "./CheckIcon-8INY0B1Y.js";
function PencilSquareIcon({
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
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
  }));
}
const ForwardRef$2 = /* @__PURE__ */ reactExports.forwardRef(PencilSquareIcon);
function ShareIcon({
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
    d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(ShareIcon);
function ArrowTurnDownRightIcon({
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
    d: "M3.74 3.749a.75.75 0 0 1 .75.75V15h13.938l-2.47-2.47a.75.75 0 0 1 1.061-1.06l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 0 1-1.06-1.06l2.47-2.47H3.738a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 .75-.751Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(ArrowTurnDownRightIcon);
const FormEditor = React.lazy(() => __vitePreload(() => import("./formEditor-C5u1WBjw.js"), true ? [] : void 0));
const Pagination = React.lazy(() => __vitePreload(() => import("./pagination-DfWoZOZ9.js"), true ? [] : void 0));
const DataTable = ({
  status,
  formTitle,
  defaultFormValues,
  formDescription,
  rows = [],
  formFields = [],
  pageDetails = {},
  fields = [],
  topActions = [],
  actions = [],
  deleteProps,
  setOffsetAndLimit = () => {
  },
  searchFields = [],
  update = () => {
    alert("Not Implemented");
  },
  delete: deleteRow = () => {
    alert("Not Implemented");
  },
  onImportEach = (row) => {
    alert("Not Implemented");
  }
}) => {
  const [DeleteConfirmation, showDeleteConfirmation] = useConfirmation();
  const [searchValues, setSearchValues] = reactExports.useState(() => {
    const values = {};
    searchFields?.forEach((field) => {
      values[field.columnName] = "";
    });
    return values;
  });
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editingRow, setEditingRow] = reactExports.useState(null);
  const [showImportTable, setShowImportTable] = reactExports.useState(false);
  const [importRows, setImportRows] = reactExports.useState([]);
  const [importableRows, setImportableRows] = reactExports.useState([]);
  const handleSearchChange = (columnName, value) => {
    setSearchValues((prevValues) => ({
      ...prevValues,
      [columnName]: value
    }));
  };
  const handleSearchSubmit = () => {
  };
  const handleDelete = async (item) => {
    if (deleteProps.fromKey && deleteProps.postKey) {
      item[deleteProps.postKey] = item[deleteProps.fromKey];
    }
    setIsLoading(true);
    await deleteRow(item);
    setIsLoading(false);
  };
  const handleEdit = (row) => {
    setEditingRow(row);
    setShowForm(true);
    setIsLoading(true);
  };
  const handleSave = async (updatedRow) => {
    await update(updatedRow);
    setIsLoading(false);
    setShowForm(false);
    setEditingRow(null);
  };
  const handleCancel = () => {
    setIsLoading(false);
    setShowForm(false);
    setEditingRow(null);
  };
  const showImportSection = () => {
    setShowImportTable(true);
  };
  const handleConfirmImport = async (rows2) => {
    if (rows2.length === 0) {
      alert("No rows to import");
      return;
    }
    for (const row of rows2) {
      await onImportEach(row);
    }
    setShowImportTable(false);
    setImportRows([]);
  };
  const TopActions = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-5 w-full relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative right-0 md:-top-10", children: topActions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end items-end gap-x-2 gap-y-2", children: topActions.map((action, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-full shadow-sm p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: classNames(
          "font-medium text-sm py-2 px-2 rounded-3xl flex items-center justify-center shadow-sm",
          action.label ? "px-3" : "h-8 w-8",
          action.type === "new" ? "bg-indigo-600 text-white" : action.type === "export" ? "bg-green-700 text-white" : action.type === "import" ? "bg-blue-700 text-white" : action.type === "custom" ? "bg-gray-700 text-white" : ""
        ),
        onClick: () => {
          if (action.type === "new") {
            setShowForm(true);
          } else if (action.type === "export") ;
          else if (action.type === "import") {
            showImportSection();
          } else if (action.type === "custom") {
            if (action.callback) {
              action.callback();
            }
          }
        },
        children: [
          action.type === "new" && /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "h-5 w-5 text-white" }),
          action.type === "export" && /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$7, { className: "h-5 w-5 text-white" }),
          action.type === "import" && /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$8, { className: "h-5 w-5 text-white" }),
          action.type === "custom" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            action.icon,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: action.label })
          ] })
        ]
      }
    ) }, index)) }) }) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirmation,
      {
        title: "Delete Item",
        description: "Are you sure you want to delete this item?",
        confirmButtonLabel: "Delete",
        confirmButtonClick: async (item) => handleDelete(item),
        className: "w-96 print:hidden"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
      searchFields?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-0 flex flex-row justify-end gap-x-2 gap-y-2", children: [
        searchFields?.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-gray-900", children: [
            "Search By ",
            field.label
          ] }),
          field.type === "text" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Enter " + (field.placeholder || field.label),
              value: searchValues[field.columnName],
              onChange: (e) => handleSearchChange(field.columnName, e.target.value),
              className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900   placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 border-gray-300 focus:outline-gray-50 sm:text-sm/6"
            }
          ),
          field.type === "select" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: searchValues[field.columnName],
              onChange: (e) => handleSearchChange(field.columnName, e.target.value),
              className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-darkprimary sm:text-sm/6",
              children: field.options.map((option, optIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: option.label }, optIndex))
            }
          )
        ] }, index)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleSearchSubmit,
            className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-darkprimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkprimary",
            children: "Search"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full md:divide-y md:divide-gray-300 flex flex-col md:table ", children: [
        fields?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "flex flex-grow md:table-header-group ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "md:bg-gray-200 flex md:table-row flex-grow justify-end", children: [
          fields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3 hidden md:table-cell", children: field.label }, index)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TopActions, {}) })
        ] }) }),
        rows?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "md:divide-y md:divide-gray-200 flex flex-grow md:table-row-group flex-col gap-y-3", children: rows.map((row, rowIndex) => {
          for (let key in row) {
            if (key.indexOf("JsonSettings") > -1 && key.indexOf(".") == -1) {
              try {
                let json = parseJson(row[key]);
                if (json) {
                  for (let subKey in json) {
                    row[key + "Object." + subKey] = json[subKey];
                  }
                }
              } catch (error) {
                console.error("Error parsing JSON:", error);
              }
            }
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "flex md:table-row flex-col py-4 md:py-0 px-4 md:px-0 shadow-md md:shadow-none", children: [
            fields?.map((field, fieldIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "whitespace-nowrap md:px-3 py-2 md:py-4 text-sm text-gray-500 flex flex-row justify-between md:table-cell", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "md:hidden font-semibold text-gray-900", children: field.label }),
              field.asOptionList ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc mr-2 ml-3", children: Array.isArray(row[field.column]) && row[field.column].length > 0 ? row[field.column].map((option, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-gray-700 font-normal text-xs", children: option.label }, index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 font-semibold", children: "-" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "", children: row[field.column] })
            ] }, fieldIndex)),
            actions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "whitespace-nowrap text-sm font-medium mt-3 md:mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end gap-x-2 gap-y-2", children: actions.map((action, actionIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                title: action.label,
                className: classNames(
                  "h-8 w-8 font-semibold py-2 px-2 rounded-3xl flex items-center justify-center",
                  action.type === "whatsapp" ? "bg-green-700 text-white" : action.type === "edit" ? "bg-primary text-white" : action.type === "delete" ? "bg-red-800 text-white" : ""
                ),
                onClick: () => {
                  if (action.type === "whatsapp") {
                    if (action.callback) {
                      action.callback(row);
                    }
                  } else if (action.type === "edit") {
                    handleEdit(row);
                  } else if (action.type === "delete") {
                    showDeleteConfirmation(row);
                  }
                },
                children: [
                  action.type === "whatsapp" && /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-5 w-5 text-white" }),
                  action.type === "edit" && /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-4 w-4 text-white" }),
                  action.type === "delete" && /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-5 w-5 text-white" })
                ]
              },
              actionIndex
            )) }) })
          ] }, rowIndex);
        }) }),
        rows?.length === 0 && status != "finished" && /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) }) })
      ] }) }),
      pageDetails && /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, { rowsFrom: pageDetails?.rowsFrom || pageDetails.RowsFrom, rowsTo: pageDetails?.rowsTo || pageDetails.RowsTo, totalRowCount: pageDetails?.totalRowCount || pageDetails.TotalRowCount, setOffsetAndLimit }),
      showForm && /* @__PURE__ */ jsxRuntimeExports.jsx(FormEditor, { description: formDescription, title: formTitle, row: editingRow ? editingRow : defaultFormValues, fields: formFields, onSave: handleSave, onCancel: handleCancel }),
      showImportTable && /* @__PURE__ */ jsxRuntimeExports.jsx(ImportModal, { show: showImportTable, onCancel: () => setShowImportTable(false), onSubmit: handleConfirmImport, rows: importableRows, fields, formFields })
    ] })
  ] });
};
const ImportModal = ({ show, onCancel, onSubmit, rows, fields, formFields }) => {
  const [excelRows, setExcelRows] = reactExports.useState([]);
  const pasteRef = reactExports.useRef(null);
  const handleExcelImport = () => {
    setExcelRows([]);
    const div = pasteRef.current;
    if (!div) return;
    const table = div.querySelector("table");
    if (!table) return;
    const trs = table.querySelectorAll("tbody tr");
    const imported = [];
    trs.forEach((tr, rowIdx) => {
      const tds = tr.querySelectorAll("td");
      const rowObj = {};
      let isValidRow = true;
      tds.forEach((td, colIdx) => {
        let item = formFields[colIdx];
        if (item && item.name) {
          const key = formFields[colIdx]?.name;
          if (!key) {
            console.error(`Row ${rowIdx + 1}, Column ${colIdx + 1} has no key defined.`);
            isValidRow = false;
            return;
          }
          if (item.validate && item.validate.required && !td.innerText.trim()) {
            console.error(`Row ${rowIdx + 1}, Column ${colIdx + 1} is required with field ${key}.`);
            isValidRow = false;
            return;
          }
          if (item.validate && item.validate.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(td.innerText.trim())) {
            console.error(`Row ${rowIdx + 1}, Column ${colIdx + 1} is not a valid email with field ${key}.`);
            isValidRow = false;
            return;
          }
          if (item.type === "select" && item.options) {
            const option = item.options.find(
              (opt) => opt.text.trim().toLowerCase() === td.innerText.trim().toLowerCase() || opt.text.replace(" " + item.name, "").trim().toLowerCase() === td.innerText.trim().toLowerCase()
            );
            if (!option) {
              console.error(`Row ${rowIdx + 1}, Column ${colIdx + 1} has an invalid option value: ${td.innerText.trim()} with field ${key}.`);
              isValidRow = false;
              return;
            }
            if (isValidRow) {
              rowObj[key] = option ? option.value : td.innerText.trim();
              rowObj[key + "Name"] = option ? option.text : td.innerText.trim();
              rowObj[key + "Text"] = option ? option.text : td.innerText.trim();
            }
          } else if (item.type === "text") {
            if (isValidRow) {
              rowObj[key] = td.innerText.trim();
            }
          }
        }
      });
      if (isValidRow) {
        imported.push(rowObj);
      }
    });
    setExcelRows(imported);
  };
  if (!show) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold mb-4", children: "Confirm Import" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-semibold mb-2", children: "Paste Excel Table Here:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: pasteRef,
          className: "pasteexcel border rounded p-2 bg-gray-50 mb-2",
          contentEditable: true,
          style: {
            outline: "none",
            maxHeight: "50vh",
            overflowY: "auto",
            minHeight: "80px"
          },
          suppressContentEditableWarning: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-3 py-1 bg-blue-500 text-white rounded", onClick: handleExcelImport, type: "button", children: "Import Excel to List" })
    ] }),
    excelRows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-96 overflow-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      DataTable,
      {
        formTitle: "Import Preview",
        formDescription: "You can review the imported data before submitting.",
        rows: excelRows.length > 0 ? excelRows : [],
        fields,
        formFields,
        actions: []
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-4 py-2 bg-gray-300 rounded", onClick: onCancel, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-4 py-2 bg-blue-600 text-white rounded", onClick: () => onSubmit(excelRows.length > 0 ? excelRows : []), children: "Submit Import" })
    ] })
  ] }) });
};
let roles = {
  SuperAdmin: { RoleId: 1, Role: "SuperAdmin" },
  Candidate: { RoleId: 2, Role: "Candidate" },
  Organizer: { RoleId: 3, Role: "Organizer" },
  Manager: { RoleId: 4, Role: "Manager" },
  Coordinator: { RoleId: 5, Role: "Coordinator", allowSections: true },
  Judge: { RoleId: 6, Role: "Judge" },
  Guest: { RoleId: 7, Role: "Guest" },
  SubCoordinator: { RoleId: 8, Role: "SubCoordinator", allowOrganizationLevels: true, allowAccessMode: true },
  Projector: { RoleId: 9, Role: "Projector" },
  SubAdmin: { RoleId: 10, Role: "SubAdmin" },
  ContentAdmin: { RoleId: 11, Role: "ContentAdmin" },
  User: { RoleId: 12, Role: "User" },
  DrawMaster: { RoleId: 13, Role: "DrawMaster" },
  ScoreMaster: { RoleId: 14, Role: "ScoreMaster" },
  Guardian: { RoleId: 15, Role: "Guardian" }
};
function UsersAndRoles({ operation, eventCategory, eventId, eventLevel }) {
  const { user } = getUserData();
  const [loading, setLoading] = reactExports.useState(false);
  const currentRole = roles[operation];
  const results = useBackend("/UsersRolesPlusUsersJson/Get", {
    filter: { Event: eventId, Role: currentRole?.RoleId, CreatedBy: user?.UId, Status: "1" },
    updateUrl: "/SetupJson/SaveUser",
    deleteUrl: "/SetupJson/RemoveCoordinator",
    limit: 10,
    sort: { sortOrder: "DESC", sortColumn: "UserRoleId" },
    select: "Event,Role,SixDigitPassword,Status,User,UserEmail,UserEmailCode,UserName,UserNameCode,UserRoleId,JsonSettings",
    noGet: !user?.UId || !currentRole
    // Don't fetch until user and role are available
  });
  let { rows: users, row: pageDetails, update: updateUserRole } = results;
  let organizations = [];
  if (operation === "SubCoordinator" && eventLevel) {
    const { rows: orgs } = useBackend("/OrganizationJson/Get", {
      select: "Id,Name,Status",
      filter: { CompetitionLevelLevelName: eventLevel },
      mandatoryParams: ["CompetitionLevelLevelName"]
    });
    organizations = orgs;
  }
  const handleShare = ({ UserName, UserEmail, SixDigitPassword }) => {
    let encodeUrl = window.location.origin;
    let UserNameCode = btoa(UserName);
    let UserEmailCode = btoa(UserEmail);
    let eventIdCode = btoa(eventId);
    let emailUrlEncoded = encodeURIComponent(UserEmail);
    const whatsappUrl = `https://api.whatsapp.com/send?text=Hi%20${UserName},%0AYour%20login%20details%20are:%0A%0AUserName%3A%20${emailUrlEncoded}%0A🔑Password%3A%20${SixDigitPassword}%0APlease%20follow%20the%20following%20link%20to%20login:%0A${encodeUrl}%2FAccount%2FLogin%3FeventId%3D${eventIdCode}%26name%3D${UserNameCode}%26Email%3D${UserEmailCode}`;
    window.open(whatsappUrl, "_blank");
    zt.success("Login details shared via WhatsApp!");
  };
  var topActions = [
    { type: "new", title: "Add New User" },
    { type: "import", title: "Import Users" }
  ];
  let defaultValues = {
    Event: eventId,
    Role: currentRole?.RoleId,
    RoleRole: currentRole?.Role,
    Status: "1",
    CreatedBy: user?.UId
  };
  if (user && !users?.filter((x) => x.UserEmail === user.Email)?.length) {
    topActions.push({
      type: "custom",
      callback: () => updateUserRole({ ...defaultValues, UserName: user.Name, UserEmail: user.Email }),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "-mr-0.5 h-5 w-5" }),
      label: `Add Yourself as ${operation}`,
      onClick: () => handleAddUser({ UserName: user.Name, UserEmail: user.Email })
    });
  }
  let fields = [
    { label: "Full Name", column: "UserName" },
    { label: "Email Address", column: "UserEmail" }
  ];
  if (currentRole?.allowSections) {
    fields.push({ label: "Accessible Sections", column: "JsonSettingsObject.AccessibleSections", asOptionList: true });
  }
  if (currentRole?.allowOrganizationLevels) {
    fields.push({ label: eventLevel + " Name", column: eventLevel + "Name" });
  }
  if (currentRole?.allowAccessMode) {
    fields.push({ label: "Access Mode", column: "JsonSettingsObject.AccessMode" });
  }
  let formFields = [
    {
      name: "UserName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter user's full name",
      validate: { required: true, minLength: 3, maxLength: 50 }
    },
    {
      name: "UserEmail",
      label: "Email Address",
      type: "text",
      placeholder: "Enter user's email address",
      validate: { required: true, email: true }
    }
  ];
  if (currentRole?.allowSections) {
    formFields.push({
      name: "JsonSettingsObject.AccessibleSections",
      label: "Accessible Sections",
      type: "select",
      multiple: true,
      options: [
        { text: "All Sections", value: "All" },
        { text: "Event SetUp", value: "EventSetup" },
        { text: "Candidate Edit & Approve", value: "CandidateEditApprove" },
        { text: "Advanced Event Configurations", value: "AdvancedEventSetup" },
        { text: "Bulk Participants Management", value: "BulkParticipants" },
        { text: "Users Roles Management", value: "UsersRoles" },
        { text: "Print and Download", value: "PrintAndDownload" },
        { text: "Score Management", value: "ScoreManagement" },
        { text: "Draw Management", value: "DrawManagement" },
        { text: "Time Management", value: "TimeManagement" },
        { text: "Result Printing", value: "ResultPrinting" },
        { text: "Result Individual Printing Only", value: "ResultIndividualPrinting" },
        { text: "Publish Results", value: "PublishResults" },
        { text: "Publish to Social Media", value: "PublishToSocialMedia" },
        { text: "Certificate Printing", value: "CertificatePrinting" },
        { text: "Unit Management", value: "UnitManagement" }
      ],
      validate: { required: true }
    });
  }
  if (currentRole?.allowOrganizationLevels) {
    formFields.push({
      name: eventLevel,
      label: `${eventLevel} Name`,
      type: "select",
      multiple: false,
      options: organizations?.length ? organizations.map((org) => ({ text: org.Name, value: org.Id })) : [],
      validate: { required: true }
    });
  }
  if (currentRole?.allowAccessMode) {
    formFields.push({
      name: "JsonSettingsObject.AccessMode",
      label: "Access Mode",
      type: "select",
      multiple: false,
      options: [
        { text: "Editable", value: "Editable" },
        { text: "Readable", value: "Readable" }
      ],
      validate: { required: true }
    });
  }
  const onImportEach = async (row) => {
    let data = { ...defaultValues, ...row, UserName: row.UserName || row.Name, UserEmail: row.UserEmail || row.Email };
    if (data.UserName && data.UserEmail) {
      await updateUserRole(data);
      zt.success("User imported successfully!");
    } else {
      zt.error("User Name and Email are required to create a new user");
    }
  };
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { heading: `Manage User Roles - ${operation}`, childrenClasses: "px-0 py-2", headingClasses: "px-3", outerClasses: "max-w-full mx-auto ml-5 bg-gray-50 print:hidden shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading user data..." }) }) });
  }
  if (!currentRole) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { heading: `Manage User Roles - ${operation}`, childrenClasses: "px-0 py-2", headingClasses: "px-3", outerClasses: "max-w-full mx-auto ml-5 bg-gray-50 print:hidden shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-600 font-semibold mb-2", children: "Invalid Role" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-onSurfaceVariant text-sm", children: [
        'The role "',
        operation,
        '" is not recognized. Please check your configuration.'
      ] })
    ] }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: `Manage User Roles - ${operation}`,
        subHeading: "Assign and manage user roles for this event. You can add, import, or share login details with users."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DataTable,
        {
          ...results,
          pageDetails,
          defaultFormValues: defaultValues,
          onImportEach,
          formTitle: `Manage User Roles - ${operation}`,
          formDescription: `Create or update ${operation} users by entering their name and email address.`,
          topActions,
          fields,
          searchFields: [
            {
              label: "Search by Name",
              type: "text",
              column: "UserName",
              placeholder: "Type a name to search..."
            }
          ],
          deleteProps: {
            fromKey: "UserRoleId",
            postKey: "UserUId"
          },
          formFields,
          actions: [
            {
              type: "edit",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "-mr-0.5 h-5 w-5 text-primary" })
            },
            {
              type: "whatsapp",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "-mr-0.5 h-5 w-5 text-green-600" }),
              callback: (item) => handleShare(item)
            },
            {
              type: "delete",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$9, { className: "-mr-0.5 h-5 w-5 text-red-500" })
            }
          ],
          buttonContainerClass: "flex justify-end gap-2 mt-4"
        }
      )
    ] })
  ] }) });
}
export {
  UsersAndRoles as default
};
