import { r as reactExports, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { F as ForwardRef, D as DatePicker } from "./index.es-BUznZ1xb.js";
import { C as Controller } from "./index.esm-CiAIyUc7.js";
import { V as ValidationMessage } from "./validationMessage-D3Gjn0ek.js";
import { F as ForwardRef$1 } from "./ChevronLeftIcon-CImaoYY0.js";
import { F as ForwardRef$2 } from "./ChevronRightIcon-CASqfOFz.js";
import "./clsx-DgYk2OaC.js";
import "./floating-ui.dom-DLwHW_QL.js";
import "./navigationUtils-BZC1EMRn.js";
const formatDateToDDMMYYYY = (date) => {
  let d = new Date(date), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [day, month, year].join("-");
};
const formatDateStringToDDMMYYYY = (dateString) => {
  if (dateString.split(" ").length > 1) {
    dateString = dateString.split(" ")[0];
  }
  return dateString;
};
const getDateFromDDMMYYYY = (date) => {
  try {
    if (!date) return "";
    let d = date.split("-");
    if (d.length < 3) {
      return "";
    }
    return new Date(d[2], d[1] - 1, d[0]);
  } catch (error) {
    return "";
  }
};
const range = (start, end, length = end - start + 1) => Array.from({ length }, (_, i) => start + i);
const getYear = (date) => date.getFullYear();
const getMonth = (date) => date.getMonth();
const DateBox = ({ control, fieldName, label, formData, errors, register, minDate, maxDate, optional, maxLength, onChange, type, validate, disabled }) => {
  let errorsForField = errors?.[fieldName];
  const datePickerRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  let [error, setError] = reactExports.useState(errorsForField);
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      if (datePickerRef.current && datePickerRef.current.setOpen) {
        datePickerRef.current.setOpen(false);
      }
    }
  };
  reactExports.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors?.[fieldName]]);
  let maxDateCalc = maxDate ? new Date(maxDate) : null;
  let minDateCalc = minDate ? new Date(minDate) : null;
  if (validate && typeof validate === "object") {
    if (validate.fromField && formData?.[validate.fromField]) {
      const fromDateValue = getDateFromDDMMYYYY(formData[validate.fromField]);
      if (fromDateValue) {
        minDateCalc = fromDateValue;
      }
    }
    if (validate.toField && formData?.[validate.toField]) {
      const toDateValue = getDateFromDDMMYYYY(formData[validate.toField]);
      if (toDateValue) {
        maxDateCalc = toDateValue;
      }
    }
  }
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  var lowestYear = minDateCalc ? getYear(minDateCalc) : currentYear - 100;
  var highestYear = maxDateCalc ? getYear(maxDateCalc) : currentYear + 10;
  if (lowestYear > highestYear) {
    const temp = lowestYear;
    lowestYear = highestYear;
    highestYear = temp;
  }
  const years = range(lowestYear, highestYear);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: fieldName, className: classNames("block text-sm font-medium leading-6 ", error ? "text-danger" : "text-gray-900"), children: [
      label || fieldName,
      !optional && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger pl-1", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative mt-2  print:mt-0 rounded-md shadow-sm items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("pointer-events-none h-9 absolute inset-y-0 left-0 z-20 flex items-center", disabled ? "" : "pl-3"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "h-5 w-5 mb-0.5 " + (error ? "text-red-400" : "text-gray-400") }) }),
      disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("pl-7", "block w-full py-1.5  print:py-1 sm:text-sm sm:leading-6", "text-gray-900   placeholder:text-gray-400 ring-gray-300 ", disabled ? "text-gray-500" : ""), children: formData?.[fieldName] ? formatDateStringToDDMMYYYY(formData?.[fieldName]) : "-" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          control,
          name: fieldName,
          disabled,
          rules: { required: !optional },
          render: ({ field, fieldState: { invalid, isDirty }, formState: { errors: errors2 } }) => {
            const selectedDate = getDateFromDDMMYYYY(field.value);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DatePicker,
                {
                  ref: datePickerRef,
                  maxDate: maxDateCalc,
                  minDate: minDateCalc,
                  disabled,
                  calendarClassName: "!border-gray-100 shadow-lg font-medium",
                  calendarIconClassName: "h-5 w-5",
                  placeholderText: "Select " + label,
                  className: classNames(
                    "appearance-none block w-full px-3 pl-10 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                    disabled ? "bg-gray-100 text-gray-500" : "bg-white text-gray-900",
                    error ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:ring-red-300" : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  ),
                  dateFormat: "dd-MM-yyyy",
                  renderCustomHeader: ({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-2 border-b space-x-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: decreaseMonth, className: " text-gray-800", disabled: prevMonthButtonDisabled, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-8 w-8" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "select",
                      {
                        className: "border rounded-md shadow-sm placeholder-gray-400 \r\n                        border-gray-300\r\n                        py-1\r\n                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        value: getYear(date),
                        onChange: ({ target: { value } }) => {
                          changeYear(value);
                        },
                        children: years.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option, children: option }, option))
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "select",
                      {
                        className: "border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 \r\n                        border-gray-300\r\n                        py-1\r\n                        focus:border-indigo-500 sm:text-sm",
                        value: months[getMonth(date)],
                        onChange: ({ target: { value } }) => {
                          changeMonth(months.indexOf(value));
                        },
                        children: months.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option, children: option }, option))
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: increaseMonth, disabled: nextMonthButtonDisabled, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-8 w-8" }) })
                  ] }),
                  selected: selectedDate || null,
                  onChange: (date) => {
                    if (!date) return;
                    console.log("date onChange", date, fieldName);
                    const formattedDate = formatDateToDDMMYYYY(date);
                    console.log("formatted date", formattedDate);
                    field.onChange(formattedDate);
                    if (onChange) {
                      onChange(formattedDate);
                    }
                  }
                },
                field.value || "empty"
              ),
              error && /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "This field is required" })
            ] });
          }
        }
      )
    ] })
  ] });
};
export {
  DateBox as default
};
