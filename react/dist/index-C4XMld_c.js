import { r as reactExports, x as useAppContext, u as useBackend, j as jsxRuntimeExports, p as post, z as zt, i as classNames } from "./main-B7w5eCOl.js";
import { O as OldNewTabLayout } from "./OldNewTabLayout-g9TCcW0h.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { F as ForwardRef$1 } from "./PlusIcon-CAPBj82K.js";
import { F as ForwardRef$2 } from "./TrashIcon-xWLadHx8.js";
import { d as dt } from "./tabs-C66TNEoR.js";
import "./navigationUtils-BZC1EMRn.js";
import "./use-resolve-button-type-DPiHyuBj.js";
import "./keyboard-Dku-r8UD.js";
import "./use-is-mounted-DkvN6zYE.js";
import "./hidden-tL6qlWMm.js";
function IdentificationIcon({
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
    d: "M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(IdentificationIcon);
function IdPrefixTab({ prefixKey, title }) {
  const { eventDetails } = useAppContext();
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const { rows, refetch } = useBackend("/SetupJson/GetIdPrefixSettings", {
    filter: `EventCategory=${eventDetails?.EventCategoryId || 0}&Key=${prefixKey}`,
    select: "IdPrefixId,GroupGroupName,Value,IntValue,Key,EventCategory"
  });
  const prefixes = rows || [];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await post("/SetupJson/KeepIdPrefix", {
        ...data,
        EventCategory: eventDetails?.EventCategoryId,
        Key: prefixKey,
        IntValue: 3
      });
      zt.success("ID prefix saved successfully");
      refetch();
      reset();
      setShowAddForm(false);
    } catch (error) {
      zt.error("Failed to save ID prefix");
    }
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this ID prefix?")) return;
    try {
      await post("/SetupJson/RemoveIdPrefix", { IdPrefixId: id });
      zt.success("ID prefix deleted successfully");
      refetch();
    } catch (error) {
      zt.error("Failed to delete ID prefix");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-medium text-onSurface", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setShowAddForm(!showAddForm),
          className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-4 w-4" }),
            "Add Prefix"
          ]
        }
      )
    ] }),
    showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-contentBgOuter p-4 rounded-lg border border-border shadow-sm mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-onSurface mb-4", children: "Add New ID Prefix" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Group/Category Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                ...register("GroupGroupName", { required: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "E.g., Junior Category"
              }
            ),
            errors.GroupGroupName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "This field is required" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-onSurface mb-1", children: "Prefix Value *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                ...register("Value", { required: true }),
                className: "pl-3 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 text-onSurface focus:border-darkprimary placeholder:text-onSurfaceVariant ring-border",
                placeholder: "E.g., JR-"
              }
            ),
            errors.Value && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-600", children: "This field is required" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setShowAddForm(false);
                reset();
              },
              className: "inline-flex items-center gap-x-2 rounded-md bg-surfaceVariant px-4 py-2 text-sm font-semibold text-onSurfaceVariant shadow-sm hover:bg-surfaceCard",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover",
              children: "Save Prefix"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: prefixes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full text-center py-8 bg-surfaceCard rounded-lg border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "No ID prefixes configured yet. Add your first prefix above." }) }) : prefixes.map((prefix) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-contentBgOuter p-4 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-onSurface", children: prefix.GroupGroupName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-onSurfaceVariant mt-1 font-mono bg-surfaceVariant px-2 py-1 rounded inline-block", children: prefix.Value })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleDelete(prefix.IdPrefixId),
              className: "p-1.5 text-red-600 hover:bg-red-50 rounded-md",
              title: "Delete",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4" })
            }
          )
        ] })
      },
      prefix.IdPrefixId
    )) })
  ] });
}
function IdPrefix() {
  const [selectedTab, setSelectedTab] = reactExports.useState(1);
  const tabs = [
    { title: "New React View", active: true },
    { title: "Old View", path: "/SetUp/IdPrefix" }
  ];
  const idTabs = [
    { name: "Unique ID Prefix", key: "unique", prefixKey: 5 },
    { name: "Chest Card ID Prefix", key: "chest", prefixKey: 1 },
    { name: "Draw ID Settings", key: "draw", prefixKey: 3 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OldNewTabLayout, { tabs, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Participant ID Card Settings",
        subHeading: "Configure ID card prefix formats for different participant types",
        rightChildren: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-x-2 text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "ID Configuration" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(dt.Group, { selectedIndex: selectedTab, onChange: setSelectedTab, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(dt.List, { className: "flex space-x-1 rounded-xl bg-surfaceVariant p-1 mb-4", children: idTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        dt,
        {
          className: ({ selected }) => classNames(
            "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
            "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
            selected ? "bg-white shadow text-primary" : "text-gray-700 hover:bg-white/[0.12] hover:text-gray-900"
          ),
          children: tab.name
        },
        tab.key
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(dt.Panels, { children: idTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(dt.Panel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(IdPrefixTab, { prefixKey: tab.prefixKey, title: tab.name }) }, tab.key)) })
    ] }) })
  ] }) }) });
}
export {
  IdPrefix as default
};
