import { r as reactExports, j as jsxRuntimeExports, B as usePublicAppContext, L as Loader, k as React, _ as __vitePreload } from "./main-B7w5eCOl.js";
import { e as getLink } from "./navigationUtils-BZC1EMRn.js";
import { F as ForwardRef$1 } from "./UserPlusIcon-DwHKUQTZ.js";
import { F as ForwardRef$2 } from "./UserGroupIcon-C7G6h27R.js";
function PaperAirplaneIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(PaperAirplaneIcon);
var RenderComponents = React.lazy(function() {
  return __vitePreload(() => import("./renderComponents-Db-mePWR.js"), true ? [] : void 0);
});
const RegisterNow = ({ startNewRegistration, isIndividualRegistrationClosed, eventDetails }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-indigo-100 mt-3 flex-grow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-6", children: isIndividualRegistrationClosed ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative", role: "alert", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-bold", children: "Registration Closed!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block sm:inline", children: " Individual Registration is closed for this event." })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl text-center font-semibold tracking-tight text-onSurface", children: [
      "Ready to participate? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-600", children: "Join now!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex items-center flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => startNewRegistration("Individual"),
        className: "rounded-md bg-indigo-600 px-3.5 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-96 w-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-6 w-6 inline-block mr-2  -mt-1" }),
          "Register Now"
        ]
      }
    ) })
  ] }) }) });
};
const LoginNow = ({ isTeamsRegistrationClosed }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 mt-3 flex-grow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-6", children: isTeamsRegistrationClosed ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative", role: "alert", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-bold", children: "Registration Closed!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block sm:inline", children: " Team Registration is closed for this event." })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl text-center font-semibold tracking-tight text-onSurface", children: [
      "Already registered? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600", children: "Login to your account" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex items-center flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: getLink("/Account/Login"),
        className: "rounded-md bg-blue-600 px-3.5 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 text-center focus-visible:outline-offset-2 focus-visible:outline-blue-600 max-w-96 w-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-6 w-6 inline-block mr-2" }),
          "Login Now"
        ]
      }
    ) })
  ] }) }) });
};
const TeamRegisterNow = ({ startNewRegistration, eventDetail, isTeamsRegistrationClosed }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-violet-100 mt-3 flex-grow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl text-center font-semibold tracking-tight text-onSurface", children: [
      "Ready to participate in a team event? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-violet-600", children: "Join now!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex items-center flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => startNewRegistration("Team"),
        className: "rounded-md bg-indigo-600 px-3.5 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-96 w-full",
        children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-6 w-6 inline-block mr-2 -mt-1" }),
          "Register Team Now"
        ]
      }
    ) })
  ] }) });
};
function EventDetailedView({
  participationDetails,
  isTeamsRegistration,
  isIndividualRegistration,
  isTeamsAndIndividualRegistration,
  isIndividualRegistrationClosed,
  isTeamsRegistrationClosed,
  eventDetails,
  setParticipantType,
  tempUser,
  startNewRegistration,
  participantType,
  allStepsComponents
}) {
  const { isTempUser } = usePublicAppContext();
  if (!eventDetails) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "event-details flex flex-col ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto sm:max-w-[300px] min-w-60 text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        RenderComponents,
        {
          participantType,
          tempUser,
          isTempUser,
          ishorizonalPreferred: false,
          allStepsComponents,
          participationDetails,
          isIndividualRegistration,
          isTeamsRegistration,
          isTeamsAndIndividualRegistration,
          isIndividualRegistrationClosed,
          isTeamsRegistrationClosed,
          noCustomStyles: true,
          startNewRegistration,
          eventDetails,
          components: allStepsComponents["Public Page Left Sidebar"] || []
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:pl-6  w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        RenderComponents,
        {
          participantType,
          setParticipantType: (type) => {
            setParticipantType(type);
          },
          tempUser,
          isTempUser,
          handleSelect: () => {
          },
          ishorizonalPreferred: false,
          allStepsComponents,
          participationDetails,
          isIndividualRegistration,
          isTeamsRegistration,
          isTeamsAndIndividualRegistration,
          isIndividualRegistrationClosed,
          isTeamsRegistrationClosed,
          noCustomStyles: true,
          startNewRegistration,
          eventDetails,
          components: allStepsComponents["Public Page Main View"] || []
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      RenderComponents,
      {
        participantType,
        tempUser,
        isTempUser,
        ishorizonalPreferred: true,
        allStepsComponents,
        participationDetails,
        isIndividualRegistration,
        isTeamsRegistration,
        isTeamsAndIndividualRegistration,
        isIndividualRegistrationClosed,
        isTeamsRegistrationClosed,
        noCustomStyles: true,
        startNewRegistration,
        eventDetails,
        components: allStepsComponents["Public Page Footer"] || []
      }
    ) })
  ] });
}
export {
  EventDetailedView,
  LoginNow,
  RegisterNow,
  TeamRegisterNow
};
