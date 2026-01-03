import { r as reactExports, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { M as Markdown } from "./index.modern-DAHdGDx3.js";
function ArrowDownTrayIcon({
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
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(ArrowDownTrayIcon);
const Heading = ({ label, disabled, classNames: classNames2 }) => {
  if (disabled) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-sm font-bold whitespace-break-spaces tracking-tight text-gray-900 sm:text-base " + classNames2, children: label }) });
};
const Paragraph = ({ label, disabled, classNames: classNames2 }) => {
  if (disabled) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs whitespace-break-spaces font-normal text-gray-900 " + classNames2, children: label }) });
};
const ImageFromUrl = ({ label, name, id, placeholder }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = label;
    link.target = "_blank";
    link.download = name;
    link.click();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: label, alt: label, className: "w-full h-96 object-contain" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex justify-center absolute bottom-0 right-0 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: handleDownload,
        className: "bg-blue-900 rounded-md hover:bg-darkprimary text-white text-xs font-medium justify-items-center items-center py-2 px-4 flex space-x-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Download Image" })
        ]
      }
    ) })
  ] });
};
const IframeRenderer = ({ label, name, id, placeholder }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
    !label.includes("http") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-onSurfaceVariant", children: "If you are seeing this message, please enter a valid iframe link" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: label + "#toolbar=0&navpanes=0&scrollbar=0", title: label, className: "w-full h-screen object-contain" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: label, target: "_blank", rel: "noreferrer", className: "text-blue-900 underline text-xs font-medium justify-items-center items-center py-2 px-4 flex space-x-1 mt-2", children: "If you are unable to view or access the above content, click here to view in a new tab" }) })
  ] }) });
};
const HtmlRenderer = ({ label, name, id, placeholder }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", dangerouslySetInnerHTML: { __html: label } }) });
};
const IframeHtmlRenderer = ({ value, label, name, id, placeholder, labelFont }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: classNames(labelFont ? labelFont : "block text-sm font-medium leading-6 ", "text-gray-900"), children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("relative rounded-md shadow-sm"), children: value?.indexOf("<iframe") > -1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(HtmlRenderer, { label: value, name, id, placeholder }) : value?.indexOf("<") > -1 && value?.indexOf(">") > -1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { security: "allow-same-origin allow-scripts", srcDoc: value, title: label, className: "min-h-60 w-full" }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-gray-600 whitespace-pre-line", dangerouslySetInnerHTML: { __html: value } }) })
  ] });
};
const MarkdownViewer = ({ value, label, name, id, placeholder, labelFont }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: classNames(labelFont ? labelFont : "block text-sm font-medium leading-6 ", "text-gray-900"), children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("relative rounded-md shadow-sm"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-2 text-xs border-l-emerald-400 border-l-2 px-4 text-left text-gray-600 whitespace-pre-line", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { options: { forceBlock: true }, children: value }) }) })
  ] });
};
export {
  Heading,
  HtmlRenderer,
  IframeHtmlRenderer,
  IframeRenderer,
  ImageFromUrl,
  MarkdownViewer,
  Paragraph
};
