import { j as jsxRuntimeExports, i as classNames, r as reactExports, q as parseJson, k as React, _ as __vitePreload } from "./main-B7w5eCOl.js";
import { V as ValidationMessage } from "./validationMessage-D3Gjn0ek.js";
import { F as ForwardRef } from "./CheckCircleIcon-773RZCVj.js";
const RenderIcon = ({ option }) => {
  switch (option.value) {
    case "CreditCard":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-8 h-8 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.25 4.5A2.25 2.25 0 014.5 2.25h15a2.25 2.25 0 012.25 2.25v3.75h-19.5V4.5zM21.75 9.75v9a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-9h19.5zM6.75 15a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm0 0h3.375m3.75 0h2.25m3.75 0h.008v.008H21.75V15z" }) });
    case "PayPal":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-8 h-8 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7.5 4.5c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h3.375l-.375 1.5H7.5c-.621 0-1.125.504-1.125 1.125S6.879 21 7.5 21h2.25l1.5-6h2.625c3.75 0 6-1.875 6-5.625 0-2.25-1.125-4.5-4.5-4.5H7.5zm0 1.5h7.125c2.25 0 3 .75 3 2.625 0 2.25-1.125 3-3.75 3H10.5l-.75 3H9l1.125-4.5H7.5c-.621 0-1.125-.504-1.125-1.125V5.625c0-.621.504-1.125 1.125-1.125z" }) });
    case "UPIQRCode":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/UPI_logo.svg", alt: "UPI", className: "h-4 mr-2" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined h-8 w-8 text-primary text-[30px]", children: "qr_code_2" })
      ] });
    case "UPIId":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/UPI_logo.svg", alt: "UPI", className: "h-4 mr-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined h-7 w-7 text-primary text-[26px]", children: "alternate_email" })
      ] });
    case "UPIAppPaymentLink":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/UPI_logo.svg", alt: "UPI", className: "h-4 mr-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined h-8 w-8 text-primary text-[30px]", children: "link" })
      ] });
    case "RoyalXpay":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 rounded flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://royalxpay.com/assets_frontend/images/RoyalXpay-whitewithtransparent.png", alt: "RoyalXpay", className: "h-6 object-contain filter brightness-0 invert" }) });
    case "DirectBankAccount":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-8 h-8 text-primary ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4.5 3.75A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H4.5zM3 9.75h18v1.5H3v-1.5zm0 3h18v1.5H3v-1.5zm0 3h12v1.5H3v-1.5z" }) });
    case "ByHand":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined h-8 w-8 text-primary text-[30px]", children: "handshake" });
    default:
      return null;
  }
};
const PaymentMethods$1 = ({ label, errors, register, formData, isPlayGround, onChangeValue, options, disabled, readOnly, optional }) => {
  let fieldName = "paymentMethod";
  let errorsForField = errors?.[fieldName];
  let [error, setError] = reactExports.useState(errorsForField);
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors?.[fieldName]]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4 mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block text-sm font-semibold leading-6 text-primary mb-2", children: label || fieldName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-label": label || fieldName, className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row gap-x-2  gap-y-2 flex-wrap", children: options?.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        "aria-label": option.text,
        className: classNames(
          "group relative flex rounded-lg border  bg-white p-2 grow has-[:disabled]:border-gray-400 has-[:disabled]:bg-gray-200 has-[:disabled]:opacity-25 has-[:checked]:outline has-[:focus-visible]:outline has-[:checked]:outline-2 has-[:focus-visible]:outline-[3px] has-[:checked]:-outline-offset-2 has-[:focus-visible]:-outline-offset-1 has-[:checked]:outline-indigo-600 cursor-pointer",
          error ? "border-danger" : "border-gray-300",
          // formData?.[fieldName] === option.value
          //   ? "border-primary shadow-sm"
          //   : "hover:border-primaryHover hover:shadow-sm"
          option.value == "UPIAppPaymentLink" && !isPlayGround ? "md:hidden" : ""
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "radio",
              ...register(fieldName, { required: !optional }),
              value: option.value,
              checked: formData?.[fieldName] === option.value,
              onChange: (e) => {
                if (onChangeValue) onChangeValue(fieldName, option.value);
                setError("");
              },
              disabled,
              readOnly,
              class: "absolute inset-0 appearance-none focus:outline-none focus:ring-0 border-transparent outline-0 invisible"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 pl-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-left min-h-10 content-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RenderIcon, { option }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("block text-sm font-semibold", error ? "text-danger" : "text-primary"), children: option.text })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: classNames("invisible size-5 text-primary group-has-[:checked]:visible") })
        ]
      },
      option.value
    )) }) }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "Please select a payment method" })
  ] });
};
const MobileAppPaymentButton = ({ isPlayGround, component, label }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("sm:col-span-4 mb-4 justify-end flex", !isPlayGround ? "md:hidden" : ""), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: label,
      target: "_blank",
      rel: "noreferrer",
      className: classNames(
        "inline-flex items-center gap-x-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-fit",
        !label ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
      ),
      children: "Proceed to Pay"
    }
  ) });
};
const CustomPaymentAmount = ({ label, disabled, classNames: classNames2 }) => {
  if (disabled) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-sm font-bold whitespace-break-spaces tracking-tight text-gray-900 sm:text-base " + classNames2, children: label }) });
};
const paymentMethods = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CustomPaymentAmount,
  MobileAppPaymentButton,
  default: PaymentMethods$1
}, Symbol.toStringTag, { value: "Module" }));
const CountryInput = React.lazy(() => __vitePreload(() => import("./formInputs-BjJDiRrP.js"), true ? [] : void 0).then((mod) => ({ default: mod.CountryInput })));
const RadioInput = React.lazy(() => __vitePreload(() => import("./formInputs-BjJDiRrP.js"), true ? [] : void 0).then((mod) => ({ default: mod.RadioInput })));
const Heading = React.lazy(() => __vitePreload(() => import("./contentComponents-DNX7QPF4.js"), true ? [] : void 0).then((mod) => ({ default: mod.Heading })));
const Paragraph = React.lazy(() => __vitePreload(() => import("./contentComponents-DNX7QPF4.js"), true ? [] : void 0).then((mod) => ({ default: mod.Paragraph })));
const HtmlRenderer = React.lazy(() => __vitePreload(() => import("./contentComponents-DNX7QPF4.js"), true ? [] : void 0).then((mod) => ({ default: mod.HtmlRenderer })));
const IframeHtmlRenderer = React.lazy(() => __vitePreload(() => import("./contentComponents-DNX7QPF4.js"), true ? [] : void 0).then((mod) => ({ default: mod.IframeHtmlRenderer })));
const IframeRenderer = React.lazy(() => __vitePreload(() => import("./contentComponents-DNX7QPF4.js"), true ? [] : void 0).then((mod) => ({ default: mod.IframeRenderer })));
const ImageFromUrl = React.lazy(() => __vitePreload(() => import("./contentComponents-DNX7QPF4.js"), true ? [] : void 0).then((mod) => ({ default: mod.ImageFromUrl })));
const MarkdownViewer = React.lazy(() => __vitePreload(() => import("./contentComponents-DNX7QPF4.js"), true ? [] : void 0).then((mod) => ({ default: mod.MarkdownViewer })));
const EventName = React.lazy(() => __vitePreload(() => import("./eventComponents-Csj_8SdO.js"), true ? [] : void 0).then((mod) => ({ default: mod.EventName })));
const EventBanner = React.lazy(() => __vitePreload(() => import("./eventComponents-Csj_8SdO.js"), true ? [] : void 0).then((mod) => ({ default: mod.EventBanner })));
const EventDate = React.lazy(() => __vitePreload(() => import("./eventComponents-Csj_8SdO.js"), true ? [] : void 0).then((mod) => ({ default: mod.EventDate })));
const EventDescription = React.lazy(() => __vitePreload(() => import("./eventComponents-Csj_8SdO.js"), true ? [] : void 0).then((mod) => ({ default: mod.EventDescription })));
const EventLocation = React.lazy(() => __vitePreload(() => import("./eventComponents-Csj_8SdO.js"), true ? [] : void 0).then((mod) => ({ default: mod.EventLocation })));
const EventLogo = React.lazy(() => __vitePreload(() => import("./eventComponents-Csj_8SdO.js"), true ? [] : void 0).then((mod) => ({ default: mod.EventLogo })));
const EventRegistrationLoginButtons = React.lazy(() => __vitePreload(() => import("./eventComponents-Csj_8SdO.js"), true ? [] : void 0).then((mod) => ({ default: mod.EventRegistrationLoginButtons })));
const OrganizationLogo = React.lazy(() => __vitePreload(() => import("./eventComponents-Csj_8SdO.js"), true ? [] : void 0).then((mod) => ({ default: mod.OrganizationLogo })));
const OrganizationName = React.lazy(() => __vitePreload(() => import("./eventComponents-Csj_8SdO.js"), true ? [] : void 0).then((mod) => ({ default: mod.OrganizationName })));
const CompetitionsList = React.lazy(() => __vitePreload(() => import("./eventComponents-Csj_8SdO.js"), true ? [] : void 0).then((mod) => ({ default: mod.CompetitionsList })));
const RequiredInformationToFinishRegistration = React.lazy(() => __vitePreload(() => import("./eventComponents-Csj_8SdO.js"), true ? [] : void 0).then((mod) => ({ default: mod.RequiredInformationToFinishRegistration })));
const ContactEmail = React.lazy(() => __vitePreload(() => import("./contactComponents-D15VkSNv.js"), true ? [] : void 0).then((mod) => ({ default: mod.ContactEmail })));
const ContactOrganization = React.lazy(() => __vitePreload(() => import("./contactComponents-D15VkSNv.js"), true ? [] : void 0).then((mod) => ({ default: mod.ContactOrganization })));
const ContactFacebook = React.lazy(() => __vitePreload(() => import("./contactComponents-D15VkSNv.js"), true ? [] : void 0).then((mod) => ({ default: mod.ContactFacebook })));
const ContactInstagram = React.lazy(() => __vitePreload(() => import("./contactComponents-D15VkSNv.js"), true ? [] : void 0).then((mod) => ({ default: mod.ContactInstagram })));
const ContactPhone = React.lazy(() => __vitePreload(() => import("./contactComponents-D15VkSNv.js"), true ? [] : void 0).then((mod) => ({ default: mod.ContactPhone })));
const ContactWhatsApp = React.lazy(() => __vitePreload(() => import("./contactComponents-D15VkSNv.js"), true ? [] : void 0).then((mod) => ({ default: mod.ContactWhatsApp })));
const EventCompetitionCount = React.lazy(() => __vitePreload(() => import("./liveEventComponents-Bl-NdJWW.js"), true ? [] : void 0).then((mod) => ({ default: mod.EventCompetitionCount })));
const EventStageCompetitions = React.lazy(() => __vitePreload(() => import("./liveEventComponents-Bl-NdJWW.js"), true ? [] : void 0).then((mod) => ({ default: mod.EventStageCompetitions })));
const EventLiveStatus = React.lazy(() => __vitePreload(() => import("./liveEventComponents-Bl-NdJWW.js"), true ? [] : void 0).then((mod) => ({ default: mod.EventLiveStatus })));
const EventResultsLink = React.lazy(() => __vitePreload(() => import("./liveEventComponents-Bl-NdJWW.js"), true ? [] : void 0).then((mod) => ({ default: mod.EventResultsLink })));
const AgeWiseGroup = React.lazy(() => __vitePreload(() => import("./ageWiseGroup-CY_0ggtI.js"), true ? [] : void 0));
const CheckBox = React.lazy(() => __vitePreload(() => import("./checkBox-DKxELkeQ.js"), true ? [] : void 0));
const CompetitionSelection = React.lazy(() => __vitePreload(() => import("./competitionSelection-lmCBY5DD.js"), true ? [] : void 0));
const DateBox = React.lazy(() => __vitePreload(() => import("./dateBox-DNL_a2Ky.js"), true ? [] : void 0));
const AgeDateBox = React.lazy(() => __vitePreload(() => import("./ageDateBox-C-n6m5SW.js"), true ? [] : void 0));
const ExtraPaymentOptions = React.lazy(() => __vitePreload(() => import("./ExtraPaymentOptions-CsIhvEEi.js"), true ? [] : void 0));
const MultiSelectBox = React.lazy(() => __vitePreload(() => import("./multiSelectBox-sQoYntnK.js"), true ? [] : void 0));
const OrganizationSelection = React.lazy(() => __vitePreload(() => import("./organizationSelection-BAaaRiea.js"), true ? [] : void 0));
const PaymentSummary = React.lazy(() => __vitePreload(() => import("./paymentSummary-DjLtUN5f.js"), true ? [] : void 0));
const PaymentMethods = React.lazy(() => __vitePreload(() => Promise.resolve().then(() => paymentMethods), true ? void 0 : void 0));
const PayNowButton = React.lazy(() => __vitePreload(() => import("./payNowButton-CLsIX1pu.js"), true ? [] : void 0));
const RoyalXpayPayment = React.lazy(() => __vitePreload(() => import("./royalXpayPayment-DpxY-LWb.js"), true ? [] : void 0));
const NonPaymentSummary = React.lazy(() => __vitePreload(() => import("./nonPaymentSummary-DTGo_gmc.js"), true ? [] : void 0));
const RenderTeamMembers = React.lazy(() => __vitePreload(() => import("./renderTeamMembers-BqCtl3qu.js"), true ? [] : void 0));
const SelectBox = React.lazy(() => __vitePreload(() => import("./selectBox-DMK_ju-d.js"), true ? [] : void 0));
const TextareaInput = React.lazy(() => __vitePreload(() => import("./textareaInput-2uD7K44F.js"), true ? [] : void 0));
const HtmlEditor = React.lazy(() => __vitePreload(() => import("./htmlEditor-DMuVDUxv.js"), true ? [] : void 0));
const MarkdownEditor = React.lazy(() => __vitePreload(() => import("./markdownEditor-D9nUofEW.js"), true ? [] : void 0));
const TextBox = React.lazy(() => __vitePreload(() => import("./textBox-CSNjK2Z2.js"), true ? [] : void 0));
const RegistrationIdBox = React.lazy(() => __vitePreload(() => import("./registrationIdBox-BlEGLl3Z.js"), true ? [] : void 0));
const ToggleButtonGroup = React.lazy(() => __vitePreload(() => import("./toggleButtonGroup-CC9WJ4XL.js"), true ? [] : void 0));
const SingleImageUpload = React.lazy(() => __vitePreload(() => import("./singleImageUpload-B3FNkamB.js"), true ? [] : void 0));
const EnterOTPComponent = React.lazy(() => __vitePreload(() => import("./enterOTP-CfKIKQvh.js"), true ? [] : void 0));
const PropertiesPanel = React.lazy(() => __vitePreload(() => import("./propertiesPanel-ClDrUugp.js"), true ? [] : void 0));
const componentRenderers = {
  "event-name": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventName, { ...props }),
  "event-date": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventDate, { ...props }),
  "event-location": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventLocation, { ...props }),
  "event-description": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventDescription, { ...props }),
  "event-logo": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventLogo, { ...props }),
  "organization-name": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(OrganizationName, { ...props }),
  "organization-logo": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(OrganizationLogo, { ...props }),
  "event-banner": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventBanner, { ...props }),
  "event-registration-login-buttons": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventRegistrationLoginButtons, { ...props }),
  "competitions-list": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CompetitionsList, { ...props }),
  "required-information-to-finish-registration": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(RequiredInformationToFinishRegistration, { ...props }),
  "contact-organization": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ContactOrganization, { ...props }),
  "contact-email": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ContactEmail, { ...props }),
  "contact-phone": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPhone, { ...props }),
  "contact-whatsapp": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ContactWhatsApp, { ...props }),
  "contact-facebook": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ContactFacebook, { ...props }),
  "contact-instagram": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ContactInstagram, { ...props }),
  // Live Event Components
  "event-competition-count": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventCompetitionCount, { ...props }),
  "event-stage-competitions": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventStageCompetitions, { ...props }),
  "event-live-status": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventLiveStatus, { ...props }),
  "event-results-link": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventResultsLink, { ...props }),
  "payment-methods": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentMethods, { ...props }),
  "pay-now-button": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    PayNowButton,
    {
      ...props,
      disabled: props.isSubmitted,
      competitions: props.formData?.competitions ?? [],
      selectedCompetitions: props.formData?.selectedCompetitions ?? [],
      eventDetails: props.eventDetails,
      formData: props.formData,
      id: props.component.id
    }
  ),
  "royalxpay-payment": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(RoyalXpayPayment, { ...props }),
  imageFromUrl: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ImageFromUrl, { ...props }),
  iframeRenderer: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(IframeRenderer, { ...props }),
  html: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(HtmlRenderer, { ...props }),
  markdownEditor: ({ viewMode, formData, component, errors, isSubmitted, register, onChangeValue }) => viewMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    MarkdownViewer,
    {
      value: formData[component.name],
      label: component.label || "Markdown Here",
      name: component.name,
      id: component.id,
      placeholder: component.label ? "Enter " + component.label : "Enter Markdown"
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    MarkdownEditor,
    {
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      label: component.label || "Text Input",
      placeholder: component.label ? "Enter " + component.label : "Enter Input",
      errors,
      disabled: isSubmitted || viewMode,
      register,
      formData,
      optional: component?.validate?.required ? false : true,
      maxLength: component?.validate?.maxLength ?? 2e3,
      minLength: component?.validate?.minLength ?? 0,
      pattern: component?.validate?.pattern ? new RegExp(component?.validate?.pattern) : null,
      max: component?.validate?.max ?? null,
      onChange: (x) => onChangeValue(component.name, x.target.value),
      type: component.type,
      autocomplete: "off",
      readOnly: false
    }
  ),
  htmlEditor: ({ viewMode, formData, component, errors, isSubmitted, register, onChangeValue }) => viewMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    IframeHtmlRenderer,
    {
      value: formData[component.name] ? formData[component.name] : "",
      label: component.label ? component.label : "Html Here",
      name: component.name,
      id: component.id,
      placeholder: component.label ? "Enter " + component.label : "Enter Html"
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    HtmlEditor,
    {
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      label: component.label ? component.label : "Text Input",
      placeholder: component.label ? "Enter " + component.label : "Enter Input",
      errors,
      disabled: isSubmitted || viewMode,
      register,
      formData,
      optional: component?.validate?.required ? false : true,
      maxLength: component?.validate?.maxLength ?? 2e3,
      minLength: component?.validate?.minLength ?? 0,
      pattern: component?.validate?.pattern ? new RegExp(component?.validate?.pattern) : null,
      max: component?.validate?.max ?? null,
      onChange: (x) => onChangeValue(component.name, x.target.value),
      type: component.type,
      autocomplete: "off",
      readOnly: false
    }
  ),
  "payment-summary": ({ component, isSubmitted, formData, eventDetails }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    PaymentSummary,
    {
      label: component.label ? component.label : "Payment Summmary Here",
      name: component.name,
      disabled: isSubmitted,
      competitions: formData?.competitions ?? [],
      selectedCompetitions: formData?.selectedCompetitions ?? [],
      eventDetails,
      formData,
      id: component.id,
      placeholder: component.label ? "Enter " + component.label : "Enter Payment Summmary"
    }
  ),
  "non-payment-summary": ({ component, isSubmitted, formData, eventDetails }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    NonPaymentSummary,
    {
      label: component.label ? component.label : "Non Payment Summmary Here",
      name: component.name,
      disabled: isSubmitted,
      competitions: formData?.competitions ?? [],
      selectedCompetitions: formData?.selectedCompetitions ?? [],
      eventDetails,
      formData,
      id: component.id,
      placeholder: component.label ? "Enter " + component.label : "Enter Payment Summmary"
    }
  ),
  "payment-button": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MobileAppPaymentButton, { ...props }),
  "custom-payment-amount": (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CustomPaymentAmount, { ...props }),
  "extra-payment-options": ({ errors, register, component, isSubmitted, formData, onChangeValue }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    ExtraPaymentOptions,
    {
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      label: component.label ? component.label : "Extra Payment Input",
      placeholder: component.label ? "Enter " + component.label : "Enter Payment Input",
      errors,
      disabled: isSubmitted,
      register,
      formData,
      optional: component?.validate?.required ? false : true,
      onChange: (x) => onChangeValue(component.name, x.target.value),
      options: component.options?.map((option) => ({ optionText: typeof option === "string" ? option : option.text, optionKey: typeof option === "string" ? option : option.value })),
      optionKey: "optionKey",
      optionText: "optionText"
    }
  ),
  "team-members": ({ component, isSubmitted, onChangeValue, eventDetails, formData }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    RenderTeamMembers,
    {
      disabled: isSubmitted,
      onChangeValue,
      eventDetails,
      label: component.label ? component.label : "Team Members",
      name: component.name,
      formData,
      id: component.id,
      placeholder: component.label ? "Enter " + component.label : "Enter Team Members"
    }
  ),
  groups: ({ component, errors, register, isSubmitted, onChangeValue, formData }) => formData?.participantType && /* @__PURE__ */ jsxRuntimeExports.jsx(
    AgeWiseGroup,
    {
      disabled: isSubmitted,
      options: component.options,
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      label: component.label ? component.label : "Age Group",
      placeholder: component.label ? "Enter " + component.label : "Please Select",
      errors,
      register,
      formData,
      onChange: (x, isUseEffect) => {
        onChangeValue(component.name, x.target.value);
        if (!isUseEffect) {
          onChangeValue("selectedCompetitions", []);
          onChangeValue("participantsList", []);
        }
      }
    }
  ),
  organizations: ({ component, isSubmitted, formData, register, onChangeValue, getValues, user, errors, isPlayGround }) => !isPlayGround ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    OrganizationSelection,
    {
      user,
      disabled: isSubmitted,
      fieldName: "LevelSettings",
      label: component.label ? component.label : "Organization",
      placeholder: component.label ? "Enter " + component.label : "Please Select",
      errors,
      getValues,
      register,
      formData,
      onChange: onChangeValue
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectBox,
    {
      disabled: isSubmitted,
      fieldName: "LevelSettings",
      label: component.label ? component.label : "Organization",
      placeholder: component.label ? "Enter " + component.label : "Please Select",
      errors,
      getValues,
      register,
      formData,
      onChange: onChangeValue
    }
  ),
  competitions: ({ component, errors, isSubmitted, formData, participantType, eventDetails, control, onChangeValue, components, register }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CompetitionSelection,
    {
      isGroupMandatory: components?.findIndex((x) => x.type === "groups") > -1,
      formData,
      participantType,
      disabled: isSubmitted,
      eventDetails,
      control,
      setValue: onChangeValue,
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      label: component.label ? component.label : "Competitions",
      placeholder: component.label ? "Enter " + component.label : "Please Select",
      errors,
      participantsList: formData?.participantsList ?? [],
      competitions: formData?.competitions ?? [],
      register,
      onChange: (x) => onChangeValue("selectedCompetitions", x)
    }
  ),
  RegistrationIdBox: ({ component, isCoordinatorView, isSubmitted, register, formData, onChangeValue, errors, eventDetails }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    RegistrationIdBox,
    {
      isCoordinatorView,
      fieldName: "registrationId",
      label: component.label ? component.label : "Text Input",
      placeholder: component.label ? "Enter " + component.label : "Enter Input",
      errors,
      eventDetails,
      disabled: isSubmitted,
      register,
      formData,
      component,
      optional: component?.validate?.required ? false : true,
      maxLength: component?.validate?.maxLength ?? 2e3,
      minLength: component?.validate?.minLength ?? 0,
      pattern: component?.validate?.pattern ? new RegExp(component?.validate?.pattern) : null,
      onChange: (x) => onChangeValue("registrationId", x.target.value),
      type: component.type,
      autocomplete: "off",
      readOnly: false
    }
  ),
  email: (props) => {
    const { component, isSubmitted, register, formData, onChangeValue, errors } = props;
    return component?.verificationRequired ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EnterOTPComponent,
      {
        fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
        label: component.label ? component.label : "Text Input",
        placeholder: component.label ? "Enter " + component.label : "Enter Input",
        errors,
        disabled: isSubmitted,
        register,
        formData,
        optional: component?.validate?.required ? false : true,
        maxLength: component?.validate?.maxLength ?? 2e3,
        minLength: component?.validate?.minLength ?? 0,
        pattern: component?.validate?.pattern ? new RegExp(component?.validate?.pattern) : null,
        max: component?.validate?.max ?? null,
        onChange: (key, x) => onChangeValue(key, x),
        type: component.type,
        autocomplete: "off",
        readOnly: false
      }
    ) : componentRenderers.text({ ...props });
  },
  text: ({ component, isSubmitted, register, formData, onChangeValue, errors, key, isCoordinatorView, viewMode }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    TextBox,
    {
      isCoordinatorView,
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_") + key,
      label: component.label ? component.label : "Text Input",
      placeholder: component.label ? "Enter " + component.label : "Enter Input",
      errors,
      disabled: isSubmitted || viewMode,
      component,
      register,
      formData,
      optional: component?.validate?.required ? false : true,
      maxLength: component?.validate?.maxLength ?? 2e3,
      minLength: component?.validate?.minLength ?? 0,
      pattern: component?.validate?.pattern ? new RegExp(component?.validate?.pattern) : null,
      max: component?.validate?.max ?? null,
      onChange: (x) => onChangeValue(component.name, x.target.value),
      type: component.type,
      autocomplete: "off",
      readOnly: false,
      validations: component.validate
    }
  ),
  number: (props) => {
    return componentRenderers.text({ ...props });
  },
  phone: (props) => {
    return componentRenderers.text({ ...props });
  },
  password: (props) => {
    return componentRenderers.text({ ...props });
  },
  textarea: ({ component, isSubmitted, register, formData, onChangeValue, errors, viewMode }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    TextareaInput,
    {
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      label: component.label ? component.label : "Text Input",
      placeholder: component.label ? "Enter " + component.label : "Enter Input",
      errors,
      disabled: isSubmitted || viewMode,
      register,
      formData,
      optional: component?.validate?.required ? false : true,
      maxLength: component?.validate?.maxLength ?? 2e3,
      minLength: component?.validate?.minLength ?? 0,
      pattern: component?.validate?.pattern ? new RegExp(component?.validate?.pattern) : null,
      max: component?.validate?.max ?? null,
      onChange: (x) => onChangeValue(component.name, x.target.value),
      type: component.type,
      autocomplete: "off",
      readOnly: false
    }
  ),
  select: ({ component, isSubmitted, register, formData, onChangeValue, errors, control, viewMode }) => component.multiple ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    MultiSelectBox,
    {
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      label: component.label ? component.label : "Text Input",
      placeholder: component.label ? "Enter " + component.label : "Enter Input",
      errors,
      control,
      disabled: isSubmitted || viewMode,
      register,
      formData,
      multiple: component?.multiple ?? false,
      optional: component?.validate?.required ? false : true,
      onChange: (x) => onChangeValue(component.name, x),
      options: component.options?.map((option) => ({ optionText: typeof option === "string" ? option : option.text, optionKey: typeof option === "string" ? option : option.value })),
      optionKey: "optionKey",
      optionText: "optionText"
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectBox,
    {
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      label: component.label ? component.label : "Text Input",
      placeholder: component.label ? "Enter " + component.label : "Enter Input",
      errors,
      disabled: isSubmitted || viewMode,
      register,
      formData,
      optional: component?.validate?.required ? false : true,
      onChange: (x) => onChangeValue(component.name, x.target.value),
      options: component.options?.map((option) => ({ optionText: typeof option === "string" ? option : option.text, optionKey: typeof option === "string" ? option : option.value })),
      optionKey: "optionKey",
      optionText: "optionText"
    }
  ),
  date: ({ component, isSubmitted, register, formData, onChangeValue, errors, control, viewMode }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    AgeDateBox,
    {
      formData,
      control,
      type: "date",
      disabled: isSubmitted || viewMode,
      errors,
      optional: component?.validate?.required ? false : true,
      register,
      maxLength: component?.validate?.maxLength ?? 2e3,
      minLength: component?.validate?.minLength ?? 0,
      pattern: component?.validate?.pattern ? new RegExp(component?.validate?.pattern) : null,
      max: component?.validate?.max ?? null,
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      label: component.label ? component.label : "Date",
      placeholder: component.label ? "Enter " + component.label : "Enter Date",
      onChange: (x) => onChangeValue(component.name, x)
    }
  ),
  normalDate: ({ component, isSubmitted, register, formData, onChangeValue, errors, control, viewMode }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    DateBox,
    {
      formData,
      control,
      type: "date",
      disabled: isSubmitted || viewMode,
      errors,
      maxDate: component?.maxDate ?? null,
      minDate: component?.minDate ?? null,
      optional: component?.validate?.required ? false : true,
      register,
      maxLength: component?.validate?.maxLength ?? 2e3,
      minLength: component?.validate?.minLength ?? 0,
      pattern: component?.validate?.pattern ? new RegExp(component?.validate?.pattern) : null,
      max: component?.validate?.max ?? null,
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      label: component.label ? component.label : "Date",
      placeholder: component.label ? "Enter " + component.label : "Enter Date",
      onChange: (x) => onChangeValue(component.name, x),
      validate: component?.validate
    }
  ),
  checkbox: ({ component, isSubmitted, register, formData, onChangeValue, errors, control, viewMode }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckBox,
    {
      control,
      type: "date",
      disabled: isSubmitted === true || viewMode === true,
      formData,
      optional: component?.validate?.required == true ? false : true,
      errors,
      register,
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      label: component.label ? component.label : "Date",
      placeholder: component.label ? "Enter " + component.label : "Enter Date",
      onChange: (x) => onChangeValue(component.name, x)
    }
  ),
  radio: ({ component }) => /* @__PURE__ */ jsxRuntimeExports.jsx(RadioInput, { label: component.label ? component.label : "Radio", name: component.name, id: component.id }),
  country: ({ component }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CountryInput, { label: component.label ? component.label : "Country", name: component.name, id: component.id }),
  heading: ({ component, isSubmitted }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { classNames: component.class, label: component.label ? component.label : "Heading", disabled: isSubmitted }),
  paragraph: ({ component, isSubmitted }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Paragraph, { classNames: component.class, label: component.label ? component.label : "Paragraph", disabled: isSubmitted }),
  "image-upload": ({ errors, component, isSubmitted, viewMode, control, onChangeValue }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    SingleImageUpload,
    {
      label: component.label ? component.label : "Image Upload",
      errors,
      disabled: isSubmitted || viewMode,
      control,
      enableCrop: true,
      optional: component?.validate?.required ? false : true,
      validExtensions: ["jpg", "png", "jpeg"],
      validExtensionsMimeTypes: ["image/jpg", "image/png", "image/jpeg"],
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      fileUploadUrl: "/uploadJson/UploadCandidateImage",
      editId: component.id,
      onChangeValidation: (x) => {
        onChangeValue(component.name, x);
      }
    }
  ),
  "file-upload": ({ component, isSubmitted, viewMode, control, errors, onChangeValue }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    SingleImageUpload,
    {
      label: component.label ? component.label : "File Upload",
      errors,
      disabled: isSubmitted || viewMode,
      optional: component?.validate?.required ? false : true,
      control,
      validExtensions: ["jpg", "png", "jpeg"],
      validExtensionsMimeTypes: ["image/jpg", "image/png", "image/jpeg"],
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      fileUploadUrl: "/uploadJson/UploadCandidateImage",
      editId: component.id,
      onChangeValidation: (x) => {
        onChangeValue(component.name, x);
      }
    }
  ),
  custom: ({ component, formData, watch, getValues, setValue, control, errors, register }) => {
    if (component.render && typeof component.render === "function") {
      return component.render({
        formData,
        watch,
        getValues,
        setValue,
        control,
        errors,
        register,
        component
      });
    }
    return null;
  },
  toggle: ({ component, isSubmitted, register, formData, onChangeValue, errors, control, viewMode }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleButtonGroup,
    {
      fieldName: component.name ?? component.label.toLowerCase().replace(/ /g, "_"),
      label: component.label ? component.label : "Select Option",
      errors,
      disabled: isSubmitted || viewMode || component.disabled,
      register,
      control,
      formData,
      optional: component?.validate?.required ? false : true,
      onChange: (x) => onChangeValue(component.name, x),
      options: component.options?.map((option) => ({
        text: typeof option === "string" ? option : option.text,
        value: typeof option === "string" ? option : option.value,
        icon: typeof option === "object" ? option.icon : null
      }))
    }
  ),
  empty: () => null
};
function RenderComponents(props) {
  let {
    drop,
    isOver,
    components,
    selectedComponent,
    removeComponent,
    handlePropertiesPanelChange,
    handleSelect,
    isPlayGround,
    isPrint,
    singleRow,
    eventDetails,
    noCustomStyles,
    viewMode,
    twoColumnLayout = false
  } = props;
  let json = eventDetails?.JsonSettings;
  let jsonSettings = json != null && json !== "" ? parseJson(json) : { components: {} };
  let allStepsComponents = jsonSettings.components;
  if (isPrint && components.length > 2) {
    let avoidedTypes = ["paragraph", "heading"];
    components = components.filter((x) => !avoidedTypes.includes(x.type));
    let otherComponents = components.filter((x) => x.type !== "image-upload");
    let imageUploadComponents = components.filter((x) => x.type === "image-upload");
    let remainder = otherComponents.length % 3;
    if (remainder > 0) {
      let emptyComponent = { type: "empty" };
      let toAdd = 3 - remainder;
      otherComponents = [...otherComponents, ...Array(toAdd).fill(emptyComponent)];
    }
    components = [...otherComponents, ...imageUploadComponents];
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: drop,
      className: `flex-1 ${components?.length > 2 ? "print:grid print:grid-cols-3" : components?.length > 1 ? "print:flex print:flex-wrap" : "print:flex"} ${!singleRow ? "gap-x-10" : "gap-x-2"} ${isPlayGround ? "min-h-[800px]" : ""} ${drop ? !noCustomStyles ? "p-4" : "" : ""} ${!noCustomStyles && isOver ? "bg-gray-50" : !noCustomStyles ? "bg-white" : ""} ${singleRow ? "flex" : ""} ${twoColumnLayout && !isPlayGround && !isPrint && !singleRow ? "grid grid-cols-1 md:grid-cols-2 gap-4" : ""}`,
      children: components?.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: components?.map((component, index) => {
        const Renderer = componentRenderers[component.type];
        if (Renderer) {
          const params = {
            placeholder: component.label ? "Enter " + component.label : "",
            jsonSettings,
            allStepsComponents
            // Add other parameters as needed for each renderer
          };
          if (viewMode) {
            params.disabled = true;
          }
          let componentProps = { ...props, ...component, ...params, component };
          delete componentProps.key;
          console.log({ selectedComponent });
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `mb-4 print:mb-1 print:p-0 relative ${component.type == "payment-summary" ? "print:col-span-3" : ""} ${component.type} ${isPlayGround == true ? selectedComponent?.id === component.id ? "p-2 pl-4 border-primary border-l-4 " : (selectedComponent?.id ? "border-gray-100 " : "") + "border-solid border-l-4 p-2 pl-4" : ""} ${viewMode ? index % 2 === 0 && component.type != "image-upload" ? "bg-gray-50 px-4 py-4" : "bg-white px-4 py-4" : ""} ${twoColumnLayout && !isPlayGround && !isPrint && component.type === "custom" ? "md:col-span-2" : ""}`,
              onClick: () => isPlayGround && handleSelect(component),
              children: [
                Renderer({ ...componentProps }),
                isPlayGround && selectedComponent && selectedComponent.id === component.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-[-30px] right-[-290px] lg:row-span-2 min-w-64 shadow-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-px rounded-lg bg-white max-lg:rounded-b-[1rem] lg:rounded-r-[1rem]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.md)+1px)] max-lg:rounded-b-[calc(1rem+1px)] lg:rounded-r-[calc(1rem+1px)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PropertiesPanel, { components, component: selectedComponent, onChange: handlePropertiesPanelChange, removeComponent }) })
                ] })
              ]
            },
            component.id
          );
        } else {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "No renderer found for type: ",
            component.type
          ] }, component.id);
        }
      }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center hidden", children: "No components found" })
    }
  ) });
}
export {
  RenderComponents,
  RenderComponents as default
};
