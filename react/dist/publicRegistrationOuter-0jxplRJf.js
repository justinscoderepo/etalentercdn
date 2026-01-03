import { r as reactExports, j as jsxRuntimeExports, b as getUserData, k as React, T as Toster, p as post, B as usePublicAppContext, L as Loader, _ as __vitePreload } from "./main-B7w5eCOl.js";
import { X as Xe } from "./disclosure-DvzV5MDW.js";
import { RenderRegistrationForm } from "./renderRegistrationForm-D9a5R6SE.js";
import "./use-resolve-button-type-DPiHyuBj.js";
import "./keyboard-Dku-r8UD.js";
import "./open-closed-gVG0H0sE.js";
import "./bugs-BMBAUfeG.js";
import "./dom-XjFFvgb6.js";
import "./publicRegistrationHelper-D8ymtYJF.js";
import "./PencilIcon-b9s3VfZ1.js";
import "./box-Du61b7dg.js";
import "./alert-BVY3dXZ7.js";
function HomeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$2 = /* @__PURE__ */ reactExports.forwardRef(HomeIcon);
function IdentificationIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(IdentificationIcon);
function QuestionMarkCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(QuestionMarkCircleIcon);
function Logout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative ml-3 mr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      target: "_top",
      onClick: (e) => {
        e.preventDefault();
        try {
          localStorage.clear();
          document.dispatchEvent(new Event("userUpdated"));
        } catch (ex) {
          console.error("Error clearing user data:", ex);
        }
        setTimeout(() => {
          try {
            if (window.location.href.indexOf("localhost") === -1) {
              window.location.href = "/account/logoff";
            } else {
              window.location.href = "/account/logoff";
            }
          } catch (ex) {
            console.error("Error during logout redirection:", ex);
          }
        }, 100);
      },
      href: "#",
      className: "flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-darkprimary py-5",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined font-semibold text-primary", children: "power_settings_new" })
    }
  ) }) });
}
function SiteLogo() {
  let siteConfig = localStorage.getItem("siteConfig") ? JSON.parse(localStorage.getItem("siteConfig")) : {};
  let backGroundColor = siteConfig?.backgroundColor;
  let imageUrl = siteConfig?.emailConfigLogo;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-shrink-0 items-center px-4 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageUrl, className: "h-8 w-auto", style: { backgroundColor: backGroundColor } }) });
}
function PublicLayout({ children, navtabs }) {
  let siteConfig = localStorage.getItem("siteConfig") ? JSON.parse(localStorage.getItem("siteConfig")) : {};
  const { user: currentUser, token } = getUserData() || {};
  let [userState, setUserState] = React.useState(currentUser);
  document.addEventListener("userUpdated", (e) => {
    const { user: updatedUser, token: updatedToken } = getUserData() || {};
    setUserState(updatedUser);
  });
  if (userState?.Email?.indexOf("justnshalom") > -1) {
    userState.Name = "Guest";
    userState.Email = "";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toster, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-['Poppins'] ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Xe, { as: "nav", className: "border-b border-gray-200 bg-white header lg:divide-y lg:divide-gray-100 lg:px-8", children: ({ open }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between flex-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLogo, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 h-full bg-gray-100 mx-5 hidden sm:flex" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/" + siteConfig?.emailSupportWhatsApp, target: "_blank", className: "flex items-center justify-center mr-2 text-gray-400 font-light text-xs", rel: "noreferrer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:contents", children: [
                "Support",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-lg text-green-700", children: "question_mark" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png", alt: "WhatsApp", className: "h-8 w-8" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:" + siteConfig?.emailConfigSupportEmail, className: "mr-2 hidden sm:flex items-center", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-red-800 font-bold  text-2xl", children: "mail" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 h-full bg-gray-100 mx-5 hidden sm:flex" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                target: "_top",
                onClick: (e) => {
                  e.preventDefault();
                  post("/CandidateJson/ClearCacheFolder", {}).then((data) => {
                    let timeNow = /* @__PURE__ */ new Date();
                    localStorage.removeItem("siteConfig");
                    sessionStorage.clear();
                    window.location.href = window.location.href.replace(window.location.search, "") + "?v=" + timeNow.getUTCDate() + "-" + timeNow.getUTCMonth() + "-" + timeNow.getUTCFullYear() + "_" + timeNow.getUTCHours() + ":" + timeNow.getUTCMinutes() + ":" + timeNow.getUTCSeconds();
                  });
                },
                href: "#",
                className: "flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-darkprimary py-5",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined font-semibold text-primary", children: "cached" })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-50/65 flex ml-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1 max-w-80 flex flex-col justify-center ml-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold whitespace-nowrap overflow-hidden overflow-ellipsis text-gray-900", children: userState?.Name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal whitespace-nowrap overflow-hidden overflow-ellipsis text-gray-500", children: userState?.Email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Logout, {})
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-4", children: navtabs })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col  justify-center ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex flex-col max-w-screen-xl w-full shadow-xl min-h-screen  mx-auto px-0 md:px-0 lg:px-4 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:px-0 md:px-0 lg:px-0 ", children }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-gray-50 mt-4 shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full flex justify-center items-center justify-items-center px-4 sm:px-6 lg:px-8  z-10 bottom-0 right-0 bg-darkprimary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/+919605656508", target: "_blank", className: "flex items-center justify-center", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-300", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " eTalenter. All rights reserved. Developed By "
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://grandreves.com", target: "_blank", className: "text-white ml-1", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2 flex items-center h-12 max-w-[30vw]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://etalenter.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-16-at-15.49.47_44d67f39.jpg", className: "object-contain w-24" }) }) })
    ] }) })
  ] });
}
const RenderUsersList = React.lazy(() => __vitePreload(() => import("./renderUsersList-Cq0h1Shw.js").then((n) => n.r), true ? [] : void 0));
const RenderEventDetailedView = React.lazy(() => __vitePreload(() => import("./renderEventDetailedView-5ZwyEMzi.js"), true ? [] : void 0).then((module) => ({ default: module.RenderEventDetailedView })));
const ContactInfo = React.lazy(() => __vitePreload(() => import("./contactInfo-D2dLk8iH.js"), true ? [] : void 0));
function PublicRegistrationOuter() {
  const { user, token } = getUserData() || {};
  if (!user || !user?.Email) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Please log in to access this form." });
  }
  const isGuardian = user?.RoleTitle === "Guardian";
  const isTempUser = user?.Email?.indexOf("justnshalom") !== -1;
  const [activeTab, setActiveTab] = reactExports.useState(isGuardian && !isTempUser ? "My Participation" : "Home");
  console.log("🔵 PublicRegistrationOuter Rendered - activeTab:", activeTab, " | isGuardian:", isGuardian, " | isTempUser:", isTempUser);
  const { allStepsComponents, eventDetails, isTeamsRegistration, participantTypeInt, setParticipantType } = usePublicAppContext();
  const [candidateId, setCandidateId] = reactExports.useState(null);
  let isGuardianRegistrationAllowed = true;
  if (allStepsComponents?.["Guardian Registration"]?.length == 0) {
    isGuardianRegistrationAllowed = false;
  }
  const tabs = [{ name: "Home", href: "#", icon: ForwardRef$2, hideOnMobile: true }];
  tabs.push({ name: "My Participation", label: isGuardian ? "Manage Participants" : "My Participation", href: "#", icon: ForwardRef$1 });
  tabs.push({ name: "Support", href: "#", icon: ForwardRef, hideOnMobile: true });
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const handleStartRegistration = (typeInt, editCandidateId = null) => {
    if (isGuardian && isTempUser) {
      setActiveTab("Registration");
      setParticipantType("Individual");
      return;
    }
    const typeString = typeInt === 1 ? "Individual" : "Team";
    setParticipantType(typeString);
    setCandidateId(editCandidateId);
    setActiveTab("Registration");
  };
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "Home":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading event details..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          RenderEventDetailedView,
          {
            setActiveTab,
            onStartRegistration: handleStartRegistration,
            closeModel: () => {
              setActiveTab("Home");
            }
          },
          activeTab
        ) });
      case "Registration":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          RenderRegistrationForm,
          {
            eventDetails,
            view: isTempUser ? isGuardianRegistrationAllowed ? "registration" : "participationDetails" : "participationDetails",
            isDirectOpen: true,
            participantTypeInt,
            candidateId,
            closeModel: () => {
              setActiveTab("My Participation");
              setCandidateId(null);
            }
          },
          `${activeTab}-${participantTypeInt}-${candidateId || "new"}}`
        );
      case "My Participation":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading participants..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          RenderUsersList,
          {
            handleParticipantTypeChange: setParticipantType,
            setActiveTab,
            onStartRegistration: handleStartRegistration,
            closeModel: () => {
            }
          },
          activeTab
        ) });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Loading..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactInfo, {}) });
    }
  };
  let navtabs = /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Tabs", className: "flex space-x-8", children: tabs.map((tab, tabIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: () => setActiveTab(tab.name),
      className: classNames(
        "relative inline-flex items-center px-3 py-2 text-sm font-medium justify-center",
        "transition-colors duration-300 ease-in-out",
        // Smooth animation
        activeTab === tab.name ? "text-onSurface bg-indigo-50/75" : "text-onSurfaceVariant hover:bg-surface hover:text-onSurface",
        isGuardian && !isTempUser && (tab.name == "Home1" || tab.name == "Support1") ? "" : "flex-grow"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: classNames(activeTab === tab.name ? "text-primary" : "text-onSurfaceVariant group-hover:text-onSurfaceVariant", "h-6"), "aria-hidden": "true" }),
        isGuardian && !isTempUser && (tab.name == "Home1" || tab.name == "Support1") ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("ml-2", tab.hideOnMobile ? "hidden sm:block" : ""), children: tab.label ?? tab.name })
      ]
    },
    tab.name
  )) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PublicLayout, { navtabs, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col bg-surfaceCard rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-screen", children: renderActiveTabContent() }) }) }) });
}
export {
  PublicRegistrationOuter as default
};
