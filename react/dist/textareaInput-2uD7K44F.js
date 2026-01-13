import { r as reactExports, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { V as ValidationMessage } from "./validationMessage-D3Gjn0ek.js";
import { F as ForwardRef, a as ForwardRef$1, b as ForwardRef$3 } from "./EyeSlashIcon-Vd-PPSmw.js";
import { F as ForwardRef$2 } from "./EyeIcon-DRCFFanS.js";
const TextareaInput = ({
  fieldName,
  label,
  placeholder,
  errors,
  register,
  formData,
  optional,
  maxLength,
  onChange,
  type,
  pattern,
  minLength,
  autocomplete,
  step,
  disabled,
  max,
  labelFont,
  noLabel
}) => {
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
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: fieldName, className: classNames(labelFont ? labelFont : "block text-sm font-medium leading-6 ", error ? "text-danger" : "text-gray-900"), children: noLabel ? "" : label || fieldName }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames("relative rounded-md shadow-sm", disabled ? "" : "mt-2"), children: [
      type == "email" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("pointer-events-none absolute inset-y-0 left-0 flex items-center", disabled ? "" : "pl-3"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "h-5 w-5 " + (error ? "text-red-400" : "text-gray-400") }) }),
      type == "phone" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("pointer-events-none absolute inset-y-0 left-0 flex items-center", disabled ? "" : "pl-3"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { "aria-hidden": "true", className: "h-5 w-5 " + (error ? "text-red-400" : "text-gray-400") }) }),
      disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: classNames(
            type === "email" || type === "phone" ? "pl-7" : "pl-0",
            "block w-full py-1.5 sm:text-sm sm:leading-6",
            "text-gray-900   placeholder:text-gray-400 ring-gray-300 ",
            disabled ? "text-gray-500" : ""
          ),
          children: formData?.[fieldName] ?? "-"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          step: step || null,
          ...register(fieldName, {
            required: !optional,
            maxLength: maxLength || 200,
            pattern: pattern || null,
            minLength: minLength || 0,
            max: max || null
          }),
          onChange: (e) => {
            if (onChange) {
              onChange(e);
            }
            setError("");
          },
          disabled,
          autoComplete: autocomplete || "off",
          className: classNames(
            type === "email" || type === "phone" ? "pl-10" : "pl-3",
            "block w-full rounded-md border-0 py-1.5 ring-1 ring-inset  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
            error ? "border-danger focus:border-danger focus:ring-0 focus:ring-red-700 placeholder:text-red-400 ring-red-300 " : "text-gray-900  focus:border-darkprimary focus:ring-0 placeholder:text-gray-400 ring-gray-300 ",
            disabled ? "bg-gray-200 text-gray-500" : ""
          ),
          placeholder: placeholder || "Enter " + label
        }
      ),
      type === "password" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 cursor-pointer bg-gray-100 m-2", onClick: handleTogglePassword, children: !showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-5 w-5 text-gray-600 bg-gray-100" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-5 w-5 text-gray-600 bg-gray-100" }) })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (() => {
      switch (error.type) {
        case "required": {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: label + " is required" });
        }
        case "maxLength": {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "Max length is " + maxLength });
        }
        case "max": {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "Value must be less or equal than " + max });
        }
        case "minLength": {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "Min length is " + minLength });
        }
        case "pattern": {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "Format of this field is not valid" });
        }
      }
    })() })
  ] });
};
export {
  TextareaInput as default
};
