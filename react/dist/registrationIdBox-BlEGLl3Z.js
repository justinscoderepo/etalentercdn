import { r as reactExports, j as jsxRuntimeExports, i as classNames, z as zt } from "./main-B7w5eCOl.js";
import { V as ValidationMessage } from "./validationMessage-D3Gjn0ek.js";
import { F as ForwardRef } from "./CheckIcon-8INY0B1Y.js";
const RegistrationIdBox = ({
  component,
  isCoordinatorView,
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
  noLabel,
  eventDetails
}) => {
  let errorsForField = errors?.[fieldName];
  let [error, setError] = reactExports.useState(errorsForField);
  let [showWarning, setShowWarning] = reactExports.useState(false);
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
  let isValidRegistrationNumber = function(value) {
    let isValid = false;
    if (value) {
      let eligibleNumbers2 = advancedSettings?.EligibleRegistrationNumbers;
      let eligibilityRow2 = eligibleNumbers2?.find((x) => x.RegistrationNumber == value);
      if (eligibilityRow2) {
        isValid = true;
      }
    }
    return isValid;
  };
  const json = eventDetails?.JsonSettings;
  const jsonSettings = json != null && json !== "" ? JSON.parse(json) : {};
  let advancedSettings = jsonSettings?.AdditionalSettings;
  let eligibleNumbers = advancedSettings?.EligibleRegistrationNumbers;
  let eligibilityRow = eligibleNumbers?.find((x) => x.RegistrationNumber == (formData?.[fieldName] ?? "-"));
  let disableDisplayEligibility = component?.dontDisplayOwnerInfo;
  if (disableDisplayEligibility && isCoordinatorView) {
    disableDisplayEligibility = false;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: fieldName, className: classNames(labelFont ? labelFont : "block text-sm font-medium leading-6 ", error ? "text-danger" : "text-gray-900"), children: [
      noLabel ? "" : label || fieldName,
      !optional && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger pl-1", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames("relative rounded-md shadow-sm", disabled ? "" : "mt-2"), children: [
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
        "input",
        {
          type: "text",
          step: step || null,
          ...register(fieldName, {
            required: !optional,
            maxLength: maxLength || 200,
            pattern: pattern || null,
            minLength: minLength || 0,
            max: max || null,
            validate: (value) => {
              if (value && !isValidRegistrationNumber(value)) {
                if (!component?.allowInvalidRegistrationId) {
                  zt.error("Invalid Registration Number");
                  setTimeout(() => {
                    errors[fieldName] = null;
                  }, 100);
                  return "Invalid " + label;
                }
              }
              return true;
            }
          }),
          onChange: (e) => {
            setShowWarning(false);
            if (e.target.value) {
              if (isValidRegistrationNumber(e.target.value)) {
                setError("");
              } else {
                if (!component?.allowInvalidRegistrationId) {
                  setError({ type: "custom" });
                  return;
                } else {
                  setShowWarning(true);
                }
              }
            }
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
      !error && !showWarning && formData?.[fieldName] && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-0 top-0 mr-2 cursor-pointer bg-green-200 m-2 rounded-2xl p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-3 w-3 text-green-600" }) }),
      eligibilityRow && !error && !showWarning && !disableDisplayEligibility && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-100 border-l-4 border-green-500 p-2 mt-2", children: [
        eligibilityRow?.ContactNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-800 mt-1", children: eligibilityRow?.ContactNumber }),
        eligibilityRow?.IssuedTo && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-800 mt-1", children: eligibilityRow?.IssuedTo })
      ] }) })
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
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "Invalid format" });
        }
        default: {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: error?.message });
        }
      }
    })() }),
    showWarning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "justify-end flex-col flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-600 text-right text-sm", children: [
        "Unfortunately, this ",
        label,
        " is not available in the eligible list as per the organizer rules."
      ] }),
      component.warningMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-800 text-right", children: component.warningMessage })
    ] })
  ] });
};
export {
  RegistrationIdBox as default
};
