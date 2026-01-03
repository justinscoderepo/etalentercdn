import { r as reactExports, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { V as ValidationMessage } from "./validationMessage-D3Gjn0ek.js";
function ChevronDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(ChevronDownIcon);
const SelectBox = ({ fieldName, label, placeholder, errors, register, formData, optional, onChange, options, optionText, optionKey, disabled, readOnly, multiple }) => {
  let errorsForField = errors?.[fieldName];
  let [error, setError] = reactExports.useState(errorsForField);
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors?.[fieldName]]);
  let isSubmemberError = fieldName.includes(".");
  let parentFieldName = fieldName.split(".")[0];
  let parentError = errors?.[parentFieldName];
  let subMember = parentError ? fieldName.split(".")[1] : null;
  reactExports.useEffect(() => {
    if (isSubmemberError) {
      let subMemberError = parentError?.[subMember];
      if (subMemberError) {
        setError(subMemberError);
      } else {
        setError("");
      }
    }
  }, [errors?.[parentFieldName], [errors?.[parentFieldName]?.[subMember]]]);
  let childFieldName = isSubmemberError ? fieldName.replace(parentFieldName + ".", "") : fieldName;
  let startWithSmallLetter = childFieldName.charAt(0).toLowerCase() + childFieldName.slice(1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: fieldName, className: classNames("block text-sm font-medium leading-6 ", error ? "text-danger" : "text-gray-900"), children: [
      label || fieldName,
      !optional && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger pl-1", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("relative rounded-md shadow-sm flex", disabled ? "" : "mt-2"), children: disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: classNames(
          "block w-full py-1.5 print:py-1 sm:text-sm sm:leading-6",
          "text-gray-900   placeholder:text-gray-400 ring-gray-300 ",
          disabled ? "text-gray-500" : ""
        ),
        children: formData?.[startWithSmallLetter + "Name"] ?? formData?.[startWithSmallLetter + "Title"] ?? formData?.[startWithSmallLetter] ?? "-"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          ...register(fieldName, { required: !optional }),
          onChange: (e) => {
            if (onChange) {
              onChange(e);
            }
            setError("");
          },
          disabled,
          multiple,
          readOnly,
          className: classNames(
            "pl-3 pr-10 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
            "appearance-none",
            error ? "border-danger focus:border-danger focus:ring-0 focus:ring-red-700 placeholder:text-red-400 ring-red-300 " : "text-gray-900 focus:border-darkprimary focus:ring-0 placeholder:text-gray-400 ring-gray-300 ",
            disabled ? "bg-gray-200 text-gray-500" : ""
          ),
          placeholder: placeholder || "Enter " + label,
          children: [
            !multiple && /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Please Select" }),
            options?.map((x) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: x[optionKey], children: x[optionText] }, x[optionKey]);
            })
          ]
        }
      ),
      !multiple && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "h-5 w-5 " + (error ? "text-red-400" : "text-gray-400") }) })
    ] }) }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "This field is required" })
  ] });
};
export {
  SelectBox as default
};
