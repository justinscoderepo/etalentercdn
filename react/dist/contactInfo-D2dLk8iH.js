import { B as usePublicAppContext, q as parseJson, j as jsxRuntimeExports, k as React, _ as __vitePreload } from "./main-B7w5eCOl.js";
const RenderComponents = React.lazy(() => __vitePreload(() => import("./renderComponents-Db-mePWR.js"), true ? [] : void 0));
function ContactInfo() {
  const { eventDetails } = usePublicAppContext();
  localStorage.getItem("siteConfig") ? parseJson(localStorage.getItem("siteConfig")) : {};
  const json = eventDetails?.JsonSettings;
  const jsonSettings = json != null && json != "" ? parseJson(json) : { components: {} };
  const allStepsComponents = jsonSettings.components;
  const filteredComponents = allStepsComponents["Public Page Contact View"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white py-16 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col pr-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-pretty text-4xl font-semibold tracking-tight text-onSurface", children: "Get in touch " }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-base/7 text-onSurfaceVariant whitespace-pre-line", children: [
        "Do you have a question or want to get in touch with the organizer of this event?",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Please feel free to contact us. We are happy to help you. You can click on the links here to send us an email or chat with us on WhatsApp."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-gray-50 p-7 sm:p-10 sm:px-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      RenderComponents,
      {
        noCustomStyles: true,
        eventDetails,
        components: filteredComponents
      }
    ) }) })
  ] }) }) }) });
}
export {
  ContactInfo as default
};
