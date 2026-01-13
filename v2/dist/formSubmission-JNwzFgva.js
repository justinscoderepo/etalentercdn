import { G as userData, r as reactExports, j as jsxRuntimeExports, k as React, _ as __vitePreload, z as zt } from "./main-B7w5eCOl.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { F as ForwardRef } from "./CheckCircleIcon-773RZCVj.js";
const RenderComponents = React.lazy(() => __vitePreload(() => import("./renderComponents-Db-mePWR.js"), true ? [] : void 0));
const FormSubmission = ({
  isGuardianRegistration,
  isCoordinatorView,
  participantType,
  isSubmitted,
  disableSaveLater,
  drop,
  data,
  isOver,
  selectedComponent,
  setSelectedComponent,
  components,
  handlePropertiesPanelChange,
  removeComponent,
  isPlayGround,
  eventDetails,
  handleNext,
  isLastStep,
  isPrint
}) => {
  let { user } = userData();
  let isGuardian = user?.RoleTitle === "Guardian";
  let isGuardianOrCandidate = isGuardian || user?.RoleTitle === "Candidate";
  let isTempUser = user?.Email?.indexOf("justnshalom") != -1;
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
    trigger,
    formState: { errors }
  } = useForm({
    defaultValues: { ...data }
  });
  getValues();
  let [formData, setFormData] = reactExports.useState({ ...data });
  reactExports.useEffect(() => {
    if (data) {
      Object.keys(data).forEach((key) => {
        unregister(key);
        setValue(key, data[key]);
      });
      setFormData({ ...data });
    }
  }, [data]);
  const handleSelect = (component) => {
    setSelectedComponent(component);
  };
  let isUserDetails = components.find((x) => x.name == "name");
  let isTeamName = components.find((x) => x.name == "teamName");
  const onSubmit = async (data2, saveForLater, closeAfterSave) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    if (saveForLater === true) {
      if (isUserDetails) {
        let requiredFields = ["name", "dobString"];
        let isRequiredFieldsFilled = requiredFields.every((field) => {
          return data2[field];
        });
        if (!isRequiredFieldsFilled) {
          zt.error("Name and Date of Birth are required fields to save for later");
          return;
        }
      }
      if (isTeamName) {
        let requiredFields = ["teamName"];
        let isRequiredFieldsFilled = requiredFields.every((field) => {
          return data2[field];
        });
        if (!isRequiredFieldsFilled) {
          zt.error("Team Name is a required field to save for later");
          return;
        }
      }
    }
    if (closeAfterSave) {
      await handleNext(data2, reset, saveForLater === true, closeAfterSave === true);
    } else {
      await handleNext(data2, reset, saveForLater === true);
    }
  };
  const handlePropertiesChange = (key, value) => {
    setValue(key, value);
    if (data) {
      data[key] = value;
    }
    setFormData({ ...data });
  };
  let filteredComponents = [...components];
  if (formData && components?.length > 0 && !isPlayGround) {
    filteredComponents = filteredComponents.filter((x) => {
      let conditions = x.conditions?.filter((x2) => x2.key);
      if (conditions?.length > 0) {
        let isAllConditionsMet = conditions.every((condition) => {
          if (condition.key) {
            let capitalizeKey = condition.key.charAt(0).toLowerCase() + condition.key.slice(1);
            let field = formData[condition.key] || formData[capitalizeKey];
            if (field || field === false) {
              if (field?.toString() == condition.value) {
                if (condition.value == false) ;
                return true;
              }
            }
          }
          return false;
        });
        if (isAllConditionsMet) {
          return true;
        }
        return false;
      }
      return true;
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-auto p-2 " + isPlayGround ? "" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RenderComponents,
      {
        isPrint,
        user,
        isCoordinatorView,
        participantType,
        handlePropertiesChange,
        handlePropertiesPanelChange,
        formData,
        isPlayGround,
        onChangeValue: handlePropertiesChange,
        drop,
        isSubmitted,
        isOver,
        eventDetails,
        components: filteredComponents,
        selectedComponent,
        handleSelect,
        register,
        getValues,
        errors,
        control,
        setValue,
        clearErrors,
        reset,
        watch,
        removeComponent
      }
    ),
    !isPlayGround && !isSubmitted && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 w-full flex justify-end px-0", children: isGuardianRegistration ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "submit",
        className: "inline-flex items-center gap-x-2  rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "-mr-0.5 h-5 w-5" }),
          "Register"
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      isGuardianOrCandidate && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: !isTempUser && !disableSaveLater && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            onSubmit(getValues(), true);
          },
          className: "inline-flex items-center gap-x-2  rounded-md bg-lime-800 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-950 mr-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "-mr-0.5 h-5 w-5" }),
            isGuardianOrCandidate ? "Save for Later" : "Save & Close"
          ]
        }
      ) }),
      !isGuardianOrCandidate && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        !isLastStep && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              handleSubmit((data2) => onSubmit(data2, false, true))();
            },
            className: "inline-flex items-center gap-x-2  rounded-md bg-lime-800 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-950 mr-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "-mr-0.5 h-5 w-5" }),
              "Save & Close This Page"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            className: "inline-flex items-center gap-x-2  rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary  mr-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "-mr-0.5 h-5 w-5" }),
              !isLastStep ? "Save & Go to Next Page" : "Save & Close This Page"
            ]
          }
        )
      ] }),
      isGuardianOrCandidate && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: isLastStep ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "submit",
          className: "inline-flex items-center gap-x-2  rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "-mr-0.5 h-5 w-5" }),
            "Submit"
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "submit",
          className: "inline-flex items-center gap-x-2  rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "-mr-0.5 h-5 w-5" }),
            "Next Step"
          ]
        }
      ) })
    ] }) })
  ] }) });
};
export {
  FormSubmission as default
};
