import { r as reactExports, q as parseJson, j as jsxRuntimeExports, L as Loader } from "./main-B7w5eCOl.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { RenderComponents } from "./renderComponents-Db-mePWR.js";
import ModalForm from "./modalForm-DOZs0ugH.js";
import { F as ForwardRef } from "./XCircleIcon-CFrF3RSu.js";
import { F as ForwardRef$1 } from "./CheckCircleIcon-B36U4EaE.js";
import "./validationMessage-D3Gjn0ek.js";
import "./CheckCircleIcon-773RZCVj.js";
import "./dialog-DkCfFwgC.js";
import "./keyboard-Dku-r8UD.js";
import "./dom-XjFFvgb6.js";
import "./use-is-mounted-DkvN6zYE.js";
import "./hidden-tL6qlWMm.js";
import "./open-closed-gVG0H0sE.js";
import "./description-3iOOxFmG.js";
import "./navigationUtils-BZC1EMRn.js";
import "./XMarkIcon-CyBmq7NC.js";
const FormEditor = ({ row, fields, viewMode, noModal, onSave, onChange, onCancel, title, description, twoColumnLayout = true, ...rest }) => {
  const [formData, setFormData] = reactExports.useState(row || {});
  for (let key in formData) {
    if (key.indexOf("JsonSettings") > -1 && key.indexOf(".") == -1) {
      try {
        let json = parseJson(formData[key]);
        if (json) {
          for (let subKey in json) {
            formData[key + "Object." + subKey] = json[subKey];
          }
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }
  let [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [statusLog, setStatusLog] = reactExports.useState("");
  let components = fields;
  const {
    handleSubmit,
    register,
    unregister,
    control,
    clearErrors,
    reset,
    watch,
    getValues,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: { ...row }
  });
  reactExports.useEffect(() => {
    if (row) {
      Object.keys(row).forEach((key) => {
        unregister(key);
        setValue(key, row[key]);
      });
      setFormData({ ...row });
    }
  }, [row]);
  const onSubmit = async (data) => {
    setIsSubmitted(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    let statusLogs = (log) => {
      setStatusLog(log);
    };
    try {
      await onSave(data, false, true, statusLogs);
    } catch (error) {
      console.error("Error saving user:", error);
    }
    setIsSubmitted(false);
  };
  const handlePropertiesChange = (key, value) => {
    setValue(key, value);
    if (row) {
      row[key] = value;
    }
    if (key.indexOf("JsonSettingsObject") > -1) {
      let jsonSubKey = key.split("Object.")[1];
      let jsonPrefix = key.split("Object.")[0];
      var existingJson = row[jsonPrefix];
      var json = parseJson(existingJson);
      let jsonValue = {
        [jsonSubKey]: value
      };
      json = { ...json, ...jsonValue };
      row[jsonPrefix] = JSON.stringify(json);
      setValue(jsonPrefix, JSON.stringify(json));
    }
    setFormData({ ...row });
    let firstCharToLower = key.charAt(0).toLowerCase() + key.slice(1);
    if (rest?.[firstCharToLower + "OnChange"]) {
      rest?.[firstCharToLower + "OnChange"](value, formData, (key2, value2) => {
        handlePropertiesChange(key2, value2);
      });
    }
  };
  let filteredComponents = [...components];
  if (formData && components?.length > 0) {
    filteredComponents = filteredComponents.filter((x) => {
      let conditions = x.conditions?.filter((x2) => x2.key);
      if (conditions?.length > 0) {
        let isConditionMet = conditions.find((condition) => {
          if (condition.key) {
            let capitalizeKey = condition.key.charAt(0).toLowerCase() + condition.key.slice(1);
            let field = formData[condition.key] || formData[capitalizeKey];
            if (field) {
              if (field?.toString() == condition.value) {
                return true;
              }
            }
          }
        });
        if (isConditionMet) {
          return true;
        }
        return false;
      }
      return true;
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ModalForm, { isPlainView: noModal, title, description, open: true, center: false, outerClass: "max-w-xl", setOpen: onCancel, childrenClass: "px-6 print:p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-auto relative mt-5", children: [
    isSubmitted && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: statusLog }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RenderComponents,
        {
          handlePropertiesChange,
          handlePropertiesPanelChange: () => {
          },
          viewMode,
          formData,
          isPlayGround: false,
          onChangeValue: handlePropertiesChange,
          drop: null,
          isSubmitted,
          isOver: false,
          eventDetails: {},
          components: filteredComponents,
          selectedComponent: {},
          handleSelect: () => {
          },
          register,
          getValues,
          errors,
          control,
          setValue,
          clearErrors,
          reset,
          watch,
          removeComponent: () => {
          },
          twoColumnLayout
        }
      ),
      !isSubmitted && !viewMode && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 w-full flex justify-end px-0 gap-x-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onCancel,
            className: "inline-flex items-center gap-x-2  rounded-md bg-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "-mr-0.5 h-5 w-5" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            className: "inline-flex items-center gap-x-2  rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { "aria-hidden": "true", className: "-mr-0.5 h-5 w-5" }),
              "Submit"
            ]
          }
        )
      ] }) })
    ] })
  ] }) });
};
export {
  FormEditor as default
};
