import { j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
const ContactOrganization = ({ component }) => {
  let siteConfig = localStorage.getItem("siteConfig") ? JSON.parse(localStorage.getItem("siteConfig")) : {};
  const displayText = component?.text || siteConfig?.emailConfigCompany;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-primary font-bold text-2xl", children: "business" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex ml-2", children: displayText })
  ] });
};
const ContactEmail = ({ component }) => {
  let siteConfig = localStorage.getItem("siteConfig") ? JSON.parse(localStorage.getItem("siteConfig")) : {};
  const email = component?.email || siteConfig?.emailConfigSupportEmail;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:" + email, className: "flex items-center", target: "_blank", rel: "noreferrer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-red-800 font-bold text-2xl", children: "mail" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex ml-2", children: email })
  ] });
};
const ContactPhone = ({ component }) => {
  let siteConfig = localStorage.getItem("siteConfig") ? JSON.parse(localStorage.getItem("siteConfig")) : {};
  const phone = component?.phoneNumber || siteConfig?.emailSupportPhone;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:" + phone, className: "flex items-center", target: "_blank", rel: "noreferrer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-green-800 font-bold text-2xl", children: "call" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex ml-2", children: phone })
  ] });
};
const ContactWhatsApp = ({ component }) => {
  let siteConfig = localStorage.getItem("siteConfig") ? JSON.parse(localStorage.getItem("siteConfig")) : {};
  const whatsappNumber = component?.phoneNumber || siteConfig?.emailSupportWhatsApp;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/" + whatsappNumber, target: "_blank", className: "flex items-center -ml-0.5 text-gray-400 font-light text-xs", rel: "noreferrer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png", alt: "WhatsApp", className: "h-8 w-8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex ml-2", children: whatsappNumber })
  ] });
};
const ContactFacebook = ({ component }) => {
  let siteConfig = localStorage.getItem("siteConfig") ? JSON.parse(localStorage.getItem("siteConfig")) : {};
  const facebookUrl = component?.label || siteConfig?.emailConfigFacebook;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: facebookUrl, target: "_blank", className: "flex items-center ml-0.5 text-gray-400 font-light text-xs", rel: "noreferrer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png", alt: "Facebook", className: "h-6 w-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex ml-2", children: facebookUrl })
  ] });
};
const ContactInstagram = ({ component }) => {
  let siteConfig = localStorage.getItem("siteConfig") ? JSON.parse(localStorage.getItem("siteConfig")) : {};
  const instagramUrl = component?.label || siteConfig?.emailConfigInstagram || "https://instagram.com";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: instagramUrl, target: "_blank", className: "flex items-center ml-0.5 text-gray-400 font-light text-xs", rel: "noreferrer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png", alt: "Instagram", className: "h-6 w-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex ml-2", children: instagramUrl })
  ] });
};
export {
  ContactEmail,
  ContactFacebook,
  ContactInstagram,
  ContactOrganization,
  ContactPhone,
  ContactWhatsApp
};
