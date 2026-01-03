import { r as reactExports, q as parseJson, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { V as ValidationMessage } from "./validationMessage-D3Gjn0ek.js";
const ExtraPaymentOptions = ({ fieldName, label, placeholder, errors, register, formData, optional, onChange, options, optionText, optionKey, disabled, readOnly }) => {
  let errorsForField = errors?.[fieldName];
  let [error, setError] = reactExports.useState(errorsForField);
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors?.[fieldName]]);
  let formDataValue = parseJson(formData?.[fieldName]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: fieldName, className: classNames("block text-sm font-medium leading-6 ", error ? "text-danger" : "text-gray-900"), children: label || fieldName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: options?.map((x, i) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            id: `${fieldName}-${i}`,
            checked: formDataValue?.[x[optionText]]?.checked,
            onChange: (e) => {
              if (onChange) {
                let newFormData = {
                  ...formDataValue,
                  [x[optionText]]: {
                    fees: x[optionKey],
                    checked: e.target.checked
                  }
                };
                onChange({ target: { name: fieldName, value: JSON.stringify(newFormData) } });
              }
              setError("");
            },
            disabled,
            readOnly,
            className: classNames(
              "rounded-md border-gray-300 text-darkprimary focus:border-darkprimary focus:ring-0 h-4 w-4",
              error ? "border-danger focus:border-danger focus:ring-0 focus:ring-red-700" : "text-gray-600  focus:border-darkprimary focus:ring-0",
              disabled ? "bg-gray-200 text-gray-500" : ""
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: `${fieldName}-${i}`, className: "ml-2 block text-sm text-gray-900", children: x[optionText] })
      ] }, x[optionKey]);
    }) }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "This field is required" })
  ] });
};
export {
  ExtraPaymentOptions as default
};
