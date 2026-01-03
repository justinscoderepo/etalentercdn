import { r as reactExports, j as jsxRuntimeExports, k as React, _ as __vitePreload } from "./main-B7w5eCOl.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { formItems } from "./sidebar-BTpUDWO3.js";
import { F as ForwardRef } from "./XMarkIcon-CyBmq7NC.js";
import { F as ForwardRef$1 } from "./PlusIcon-C06mNXZw.js";
import "./index-B2qbYbUq.js";
import "./useDragDropManager-CNvUORxj.js";
const SingleImageUpload = React.lazy(() => __vitePreload(() => import("./singleImageUpload-B3FNkamB.js"), true ? [] : void 0));
const inputComponents = formItems.filter((item) => item.isInput == true).map((item) => item.type);
const PropertiesPanel = ({ component, components, onChange, removeComponent }) => {
  let { control, setValue } = useForm();
  let filterInputComponent = components.filter((comp) => inputComponents.includes(comp.type));
  var isInput = inputComponents.includes(component.type);
  let [properties, setProperties] = reactExports.useState(component);
  reactExports.useEffect(() => {
    setProperties(component);
    setValue("image", component.label);
  }, [component]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    properties[name] = value;
    setProperties(properties);
    onChange(properties);
  };
  const handleBlur = () => {
    onChange(properties);
  };
  const handleOptionsChange = (index, key, value) => {
    const newOptions = [...properties.options];
    newOptions[index] = { ...newOptions[index], [key]: value };
    properties.options = newOptions;
    setProperties(properties);
    onChange(properties);
  };
  const addOption = () => {
    properties.options.push("");
    setProperties(properties);
    onChange(properties);
  };
  const removeOption = (index) => {
    properties.options.splice(index, 1);
    setProperties(properties);
    onChange(properties);
  };
  const handleConditionsChange = (index, key, value) => {
    const newConditions = [...properties.conditions];
    newConditions[index] = { key, value };
    properties.conditions = newConditions;
    setProperties(properties);
    onChange(properties);
  };
  const addCondition = () => {
    properties.conditions.push({ key: "", value: "" });
    setProperties(properties);
    onChange(properties);
  };
  const removeCondition = (index) => {
    properties.conditions.splice(index, 1);
    setProperties(properties);
    onChange(properties);
  };
  const handleIndexChange = (e) => {
    let { value } = e.target;
    if (value < properties.index) {
      value = parseInt(value) - 0.1;
    } else {
      value = parseInt(value) + 0.1;
    }
    properties.index = value;
    setProperties(properties);
    onChange(properties);
  };
  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    if (!properties.validate) properties.validate = {};
    properties.validate.required = checked;
    setProperties(properties);
    onChange(properties);
  };
  const handleCheckboxChange2 = (e) => {
    const { checked } = e.target;
    let { name } = e.target;
    properties[name] = checked;
    setProperties(properties);
    onChange(properties);
  };
  const handleValidationChange = (e) => {
    const { name, value } = e.target;
    if (!properties.validate) properties.validate = {};
    properties.validate[name] = value;
    setProperties(properties);
    onChange(properties);
  };
  var nameNotEditableFieldNames = ["RegistrationId", "Organizations"];
  const componentFeatures = formItems.find((item) => item.type === component.type)?.features || [];
  const hasFeature = (feature) => componentFeatures.includes(feature);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-64 ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-px rounded-lg bg-white lg:rounded-l-lg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col overflow-hidden px-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-0 pb-4 pt-2 sm:pb-3 sm:pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium tracking-tight text-gray-950 max-lg:text-center", children: "Customize Properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-lg text-xs text-gray-600 max-lg:text-center", children: "click and change properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 max-w-lg text-xs text-gray-600 max-lg:text-center", children: [
          "Type: ",
          component.type
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-0 pb-4 pt-2 sm:pb-3 sm:pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md font-medium tracking-tight text-gray-950 max-lg:text-center border-l-gray-800 border-l-4 pl-2", children: "General" }) }),
      hasFeature("registrationIdBox") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Discount Percentage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              name: "discountPercentage",
              className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              value: properties.discountPercentage,
              onChange: handleChange
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Discount Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              name: "discountTitle",
              className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              value: properties.discountTitle,
              onChange: handleChange
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-4 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", name: "dontDisplayOwnerInfo", className: "mr-2 leading-tight", checked: properties.dontDisplayOwnerInfo, onChange: handleCheckboxChange2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-600", children: "Don't Display Owner Info" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-4 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", name: "allowInvalidRegistrationId", className: "mr-2 leading-tight", checked: properties.allowInvalidRegistrationId, onChange: handleCheckboxChange2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-600", children: "Allow Invalid Registration Id" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Warning Message for Invalid Registration Id" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              name: "warningMessage",
              className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              value: properties.warningMessage,
              onChange: handleChange
            }
          ) })
        ] })
      ] }),
      hasFeature("imageFromUrl") && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SingleImageUpload,
        {
          label: "Image Upload",
          errors: {},
          disabled: false,
          control,
          enableCrop: true,
          optional: true,
          validExtensions: ["jpg", "png", "jpeg"],
          validExtensionsMimeTypes: ["image/jpg", "image/png", "image/jpeg"],
          fieldName: "image",
          fileUploadUrl: "/uploadJson/UploadCandidateImage",
          editId: component.id,
          onChangeValidation: (x) => {
            properties["label"] = x;
            setProperties(properties);
            onChange(properties);
            setValue("image", x);
          }
        }
      ),
      hasFeature("url") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "URL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "url",
            name: "label",
            className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            value: properties.label,
            onChange: handleChange
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-600", children: "Leave empty to use site configuration value" })
      ] }),
      hasFeature("text") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Organization Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            name: "text",
            className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            value: properties.text,
            onChange: handleChange
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-600", children: "Leave empty to use site configuration value" })
      ] }),
      hasFeature("email") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Email Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            name: "email",
            className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            value: properties.email,
            onChange: handleChange
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-600", children: "Leave empty to use site configuration value" })
      ] }),
      hasFeature("phoneNumber") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: component.type === "contact-whatsapp" ? "WhatsApp Number" : "Phone Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "tel",
            name: "phoneNumber",
            className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            value: properties.phoneNumber,
            onChange: handleChange
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-600", children: "Leave empty to use site configuration value" })
      ] }),
      hasFeature("html") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "HTML" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            type: "text",
            name: "label",
            className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            value: properties.label,
            onChange: handleChange
          }
        ) })
      ] }),
      hasFeature("labelOrText") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: isInput ? "Label" : "Text" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            type: "text",
            name: "label",
            className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            value: properties.label,
            onChange: handleChange
          }
        ) })
      ] }),
      hasFeature("paymentAmount") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Payment Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            name: "paymentAmount",
            className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            value: properties.paymentAmount,
            onChange: handleChange
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            name: "name",
            disabled: properties.deletable === false || nameNotEditableFieldNames.includes(properties.name) || !isInput,
            className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " + (properties.deletable === false || nameNotEditableFieldNames.includes(properties.name) || !isInput ? "bg-gray-300 cursor-not-allowed" : ""),
            value: properties.name,
            onChange: handleChange
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-0 pb-4 pt-2 sm:pb-3 sm:pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-md font-medium tracking-tight text-gray-950 max-lg:text-center border-l-gray-800 border-l-4 pl-2", children: [
        hasFeature("includeOptions") && "Options & ",
        "Properties"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Class" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            name: "class",
            className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            value: properties.class,
            onChange: handleChange
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Order Index" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            name: "index",
            className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            value: properties.index,
            onChange: handleIndexChange
          }
        ) })
      ] }),
      hasFeature("uniqueCheck") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-4 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", name: "isUnique", className: "mr-2 leading-tight", checked: properties.isUnique, onChange: handleCheckboxChange2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-600", children: "Must be Unique" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-4 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", name: "isPartOfUniqueKey", className: "mr-2 leading-tight", checked: properties.isPartOfUniqueKey, onChange: handleCheckboxChange2 }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-600", children: "Include in combined Unique Key" })
        ] }) })
      ] }),
      hasFeature("includeOptions") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Options" }),
        properties.options?.map((option, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "block w-full rounded-md border-0 py-1 pl-3 mr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              value: option.text,
              placeholder: properties.type === "extra-payment-options" ? "Label" : "Text",
              onChange: (e) => handleOptionsChange(index, "text", e.target.value),
              onBlur: handleBlur
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "block w-full rounded-md border-0 py-1 pl-3 mr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              placeholder: properties.type === "extra-payment-options" ? "Price" : "Value",
              value: option.value || (typeof option === "string" ? option : ""),
              onChange: (e) => handleOptionsChange(index, "value", e.target.value),
              onBlur: handleBlur
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => removeOption(index),
              className: "rounded-full bg-red-800 p-1.5 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
              children: [
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "h-5 w-5" })
              ]
            }
          )
        ] }, index)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "justify-end flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "rounded-full bg-green-800 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            onClick: addOption,
            children: [
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { "aria-hidden": "true", className: "h-5 w-5" })
            ]
          }
        ) })
      ] }),
      hasFeature("paymentGatewayConfig") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-0 pb-4 pt-2 sm:pb-3 sm:pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md font-medium tracking-tight text-gray-950 max-lg:text-center border-l-gray-800 border-l-4 pl-2", children: "Payment Gateway Configuration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-lg text-xs text-gray-600 max-lg:text-center", children: "Configure payment gateway settings" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Payment Gateway" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              value: properties.paymentGateway || "PayPal",
              onChange: (e) => {
                const updatedProperties = { ...properties, paymentGateway: e.target.value };
                setProperties(updatedProperties);
                onChange(updatedProperties);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PayPal", children: "PayPal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Stripe", children: "Stripe" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Razorpay", children: "Razorpay" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Paytm", children: "Paytm" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RoyalXpay", children: "RoyalXpay" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Merchant ID / Client ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              placeholder: "Enter your merchant ID or client ID",
              value: properties.merchantId || "",
              onChange: (e) => {
                const updatedProperties = { ...properties, merchantId: e.target.value };
                setProperties(updatedProperties);
                onChange(updatedProperties);
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "API Key / Public Key" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              placeholder: "Enter your API key or public key",
              value: properties.apiKey || "",
              onChange: (e) => {
                const updatedProperties = { ...properties, apiKey: e.target.value };
                setProperties(updatedProperties);
                onChange(updatedProperties);
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Secret Key" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "password",
              className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              placeholder: "Enter your secret key",
              value: properties.secretKey || "",
              onChange: (e) => {
                const updatedProperties = { ...properties, secretKey: e.target.value };
                setProperties(updatedProperties);
                onChange(updatedProperties);
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Webhook URL (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "url",
              className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              placeholder: "https://your-site.com/webhook",
              value: properties.webhookUrl || "",
              onChange: (e) => {
                const updatedProperties = { ...properties, webhookUrl: e.target.value };
                setProperties(updatedProperties);
                onChange(updatedProperties);
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-4 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              className: "mr-2 leading-tight",
              checked: properties.testMode || false,
              onChange: (e) => {
                const updatedProperties = { ...properties, testMode: e.target.checked };
                setProperties(updatedProperties);
                onChange(updatedProperties);
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-600", children: "Test Mode (Sandbox)" })
        ] }) })
      ] }),
      hasFeature("inputValidations") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-0 pb-4 pt-2 sm:pb-3 sm:pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md font-medium tracking-tight text-gray-950 max-lg:text-center border-l-gray-800 border-l-4 pl-2", children: "Validations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-lg text-xs text-gray-600 max-lg:text-center", children: "Only Works for Respective Fields" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: [
          "Required",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                disabled: properties.deletable === false,
                readOnly: properties.deletable === false,
                name: "required",
                className: "mr-2 leading-tight" + (properties.deletable === false ? " bg-gray-300 cursor-not-allowed text-gray-200" : ""),
                checked: properties.validate?.required,
                onChange: handleCheckboxChange
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-600", children: "Check the box if the field is required" })
          ] })
        ] }) }),
        hasFeature("emailVerification") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: [
          "Verify",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", name: "verificationRequired", className: "mr-2 leading-tight", checked: properties?.verificationRequired, onChange: handleCheckboxChange2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-600", children: "Check the box if the field to be verified" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Min Length" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              name: "minLength",
              className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              value: properties.validate?.minLength,
              placeholder: "Min Length is 0",
              onChange: handleValidationChange
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Max Length" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              name: "maxLength",
              className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              value: properties.validate?.maxLength,
              placeholder: "Default is 2000",
              onChange: handleValidationChange
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Pattern" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              type: "text",
              name: "pattern",
              className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              value: properties.validate?.pattern,
              onChange: handleValidationChange
            }
          ) })
        ] }),
        properties.type === "number" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Max Value" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              name: "max",
              className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              value: properties.validate?.max,
              onChange: handleValidationChange
            }
          ) })
        ] })
      ] }),
      properties.deletable !== false && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-0 pb-4 pt-2 sm:pb-3 sm:pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md font-medium tracking-tight text-gray-950 max-lg:text-center border-l-gray-800 border-l-4 pl-2", children: "Conditions" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Show Conditions" }),
          properties.conditions?.map((condition, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "block w-full rounded-md border-0 mr-1 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                value: condition.key,
                onChange: (e) => handleConditionsChange(index, e.target.value, condition.value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select" }),
                  filterInputComponent?.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.name, children: c.label }))
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "block w-full rounded-md border-0 mr-1 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                placeholder: "Value",
                value: condition.value,
                onChange: (e) => handleConditionsChange(index, condition.key, e.target.value)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => removeCondition(index),
                className: "rounded-full bg-red-800 p-1.5 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
                children: [
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "h-5 w-5" })
                ]
              }
            )
          ] }, index)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "justify-end flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                addCondition();
              },
              className: "rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { "aria-hidden": "true", className: "h-5 w-5" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              disabled: properties.deletable == false,
              title: properties.deletable == false ? "This component cannot be deleted" : "",
              onClick: () => properties.deletable !== false && removeComponent(properties.id),
              className: "inline-flex items-center gap-x-2 rounded-md  px-6 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" + (properties.deletable == false ? " bg-gray-300 cursor-not-allowed" : " bg-red-600  hover:bg-red-500"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "-ml-0.5 h-5 w-5" }),
                "Delete"
              ]
            }
          ) })
        ] })
      ] }),
      properties.deletable !== false && isInput && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-0 pb-4 pt-2 sm:pb-3 sm:pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md font-medium tracking-tight text-gray-950 max-lg:text-center border-l-gray-800 border-l-4 pl-2", children: "Re Enter" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Re Enter Field Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "block w-full rounded-md border-0 mr-1 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              value: properties.reEnterFieldName,
              name: "reEnterFieldName",
              onChange: handleChange,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select" }),
                filterInputComponent?.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.name, children: c.label }))
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Convert to" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-1 rounded-md shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            className: "block w-full rounded-md border-0 py-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            value: properties.type,
            onChange: (e) => {
              properties.type = e.target.value;
              setProperties(properties);
              onChange(properties);
            },
            children: formItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.type, children: item.label }))
          }
        ) })
      ] })
    ] })
  ] });
};
export {
  PropertiesPanel as default
};
