import { r as reactExports, j as jsxRuntimeExports, L as Loader, k as React, _ as __vitePreload } from "./main-B7w5eCOl.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { f as filterAllowedFields } from "./publicRegistrationHelper-D8ymtYJF.js";
import ModalForm from "./modalForm-DOZs0ugH.js";
import "./PencilIcon-b9s3VfZ1.js";
import "./dialog-DkCfFwgC.js";
import "./keyboard-Dku-r8UD.js";
import "./dom-XjFFvgb6.js";
import "./use-is-mounted-DkvN6zYE.js";
import "./hidden-tL6qlWMm.js";
import "./open-closed-gVG0H0sE.js";
import "./description-3iOOxFmG.js";
import "./navigationUtils-BZC1EMRn.js";
import "./XMarkIcon-CyBmq7NC.js";
const RenderComponents = React.lazy(() => __vitePreload(() => import("./renderComponents-Db-mePWR.js"), true ? [] : void 0));
function NewTeamParticipant({ groupId, eventDetails, open1, setOpen1, ageWiseGroup, setAgeFilter, candidateId, selectedParticipantDetails, saveParticipantDetails, levels }) {
  const {
    control,
    register,
    handleSubmit,
    clearErrors,
    reset,
    getValues,
    setValue,
    formState: { errors }
  } = useForm({ pricingModel: null });
  let formData = getValues();
  let [formData1, setFormData1] = reactExports.useState({ ...formData });
  const [isLoading, setIsLoading] = reactExports.useState(false);
  let [group, setGroup] = reactExports.useState(null);
  const json = eventDetails?.JsonSettings;
  selectedParticipantDetails?.user?.JsonSettings;
  const jsonSettings = json != null && json !== "" ? JSON.parse(json) : { components: [] };
  const components = Array.isArray(jsonSettings.components) ? jsonSettings.components : jsonSettings.components?.["Team Member Profile"] ?? [];
  let handleSave = async (postData) => {
    let allowedUserFields = ["name", "email", "phone", "mobile", "dobString", "profilePicture", "uId"];
    let userModel = filterAllowedFields(postData, components, allowedUserFields);
    let settingsModel = filterAllowedFields(postData, components, [], allowedUserFields);
    let postDataModel = {
      ...userModel
    };
    postDataModel.LevelSettings = levels;
    postDataModel.JsonSettings = JSON.stringify({ ...settingsModel });
    saveParticipantDetails(postDataModel);
  };
  let allFormData = getValues();
  if (allFormData?.name && allFormData?.email && allFormData?.mobile && allFormData?.phoneNumber && allFormData?.dob && allFormData?.group && allFormData?.ProfilePicture && candidateId > 0) ;
  jsonSettings?.AdditionalSettings?.IsPhotoMandatoryForCandidate == "Yes";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ModalForm,
    {
      zIndex: 999999,
      setOpen: () => {
        clearErrors();
        reset();
        setOpen1(false);
      },
      open: open1,
      title: candidateId ? "Update Participant - " + (selectedParticipantDetails?.user?.UserName ? selectedParticipantDetails.user.UserName : "") : "Create New Participant",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 px-4 md:px-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          RenderComponents,
          {
            eventDetails,
            components: filteredComponents,
            register,
            errors,
            control,
            setValue,
            getValues,
            formData,
            onChangeValue: (key, value) => {
              setValue(key, value);
              setFormData1({ ...formData, [key]: value });
            },
            isSubmitted: false,
            isOver: false,
            handleSelect: (component) => {
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-1 py-3 text-right sm:px-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setOpen1(false);
                clearErrors();
                reset();
              },
              className: "inline-flex justify-center rounded-md border border-warning text-warning bg-white py-2 hover:bg-warning hover:text-primaryHover focus:ring-orange-600 disabled:bg-lightcharcoal disabled:text-charcoal disabled:border-lightcharcoal px-5 text-sm font-semibold  shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2  disabled:shadow-none mr-2 mb-2",
              children: "Close"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                handleSubmit(handleSave)(e);
              },
              className: "inline-flex justify-center rounded-md border border-primary text-white bg-primary py-2 hover:bg-primary hover:text-white focus:ring-blue-700 disabled:bg-lightcharcoal disabled:text-charcoal disabled:border-lightcharcoal px-5 text-sm font-semibold  shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2  disabled:shadow-none  mr-2 mb-2",
              children: "Save"
            }
          )
        ] })
      ] }) }) }) })
    }
  );
}
export {
  NewTeamParticipant as default
};
