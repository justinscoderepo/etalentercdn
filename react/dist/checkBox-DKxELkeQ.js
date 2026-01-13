import { r as reactExports, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { C as Controller } from "./index.esm-CiAIyUc7.js";
import { V as ValidationMessage } from "./validationMessage-D3Gjn0ek.js";
const CheckBox = ({ control, fieldName, label, errors, formData, optional, onChange, disabled, outerClass, labelClass }) => {
  let errorsForField = errors?.[fieldName];
  let [error, setError] = reactExports.useState(errorsForField);
  let value = formData?.[fieldName] == true ? true : false;
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors?.[fieldName]]);
  reactExports.useEffect(() => {
    try {
      if (fieldName.length < 20) {
        let element = document.querySelector(`input[name='${fieldName}']`);
        if (element && element.checked !== value) {
          element.checked = value;
        }
      }
    } catch (e) {
    }
  }, [value, fieldName]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: outerClass || "flex gap-3", children: disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium leading-6", children: [
      label || fieldName,
      " :",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal", children: [
        " ",
        value ? "Yes" : "No",
        " "
      ] })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: fieldName,
        control,
        value,
        rules: { required: !optional },
        render: ({ field }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: labelClass || "flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                ...field,
                disabled,
                onChange: (e) => {
                  if (onChange) {
                    onChange(e.target.checked);
                  }
                  field.onChange(e.target.checked);
                  setError("");
                },
                defaultChecked: value == true,
                value,
                className: classNames(
                  " h-5 w-5 optiontext-darkprimary ",
                  error ? "border-red-300  text-red-600 focus:ring-red-800" : disabled ? "bg-gray-200 text-gray-500" : "focus:ring-darkprimary text-primary border-gray-300"
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-xs font-medium leading-5 select-none " + (error ? "text-danger" : "text-gray-900"), children: [
              label || fieldName,
              !optional && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-base leading-4", children: "*" })
            ] })
          ] }) });
        }
      }
    ) }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "This field is required" })
  ] });
};
export {
  CheckBox as default
};
