import { r as reactExports, j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
import { O as OldNewTabLayout } from "./OldNewTabLayout-g9TCcW0h.js";
import { d as useLocation, e as getLink } from "./navigationUtils-BZC1EMRn.js";
const IframeRender = ({ url, title = "Loading...", className = "reactIframeLayout", id = "mvc-iframe", onLoad, fallbackUrl, isNewPageAvailable = false }) => {
  const location = useLocation();
  const [iframeUrl, setIframeUrl] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [hasError, setHasError] = reactExports.useState(false);
  if (!url) {
    url = location.pathname;
  }
  console.log("IframeRender props:", { url, title, className, id, fallbackUrl, isNewPageAvailable });
  const checkForOldNewLayout = (targetUrl2) => {
    if (isNewPageAvailable) {
      const newUrl = targetUrl2;
      const oldUrl = targetUrl2 + "Old";
      return {
        isOldNewLayout: true,
        tabs: [
          { title: "New Page", path: getLink(newUrl) },
          { title: "Old Page", active: true, path: getLink(oldUrl) }
        ]
      };
    }
    return { isOldNewLayout: false };
  };
  reactExports.useEffect(() => {
    let targetUrl2 = url;
    if (!targetUrl2) {
      targetUrl2 = location.pathname;
    }
    const convertedUrl = convertV2RouteToMvc(targetUrl2);
    setIframeUrl(convertedUrl);
    setIsLoading(true);
    setHasError(false);
  }, [url, title]);
  const convertV2RouteToMvc = (reactUrl) => {
    let mvcUrl = reactUrl;
    mvcUrl = mvcUrl.replace(/^\/v2/, "");
    mvcUrl = mvcUrl.replace("/index.html", "");
    mvcUrl = mvcUrl.replace(/\/Render([A-Z])/g, "/$1");
    mvcUrl = mvcUrl.replace(/\/index\.html$/, "");
    mvcUrl = mvcUrl.replace(/\/$/, "");
    if (!mvcUrl.startsWith("/")) {
      mvcUrl = "/" + mvcUrl;
    }
    const separator = mvcUrl.includes("?") ? "&" : "?";
    mvcUrl += `${separator}IsInIframe=true`;
    return mvcUrl;
  };
  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
    if (onLoad) {
      onLoad();
    }
  };
  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
    if (fallbackUrl && iframeUrl !== fallbackUrl) {
      setIframeUrl(fallbackUrl);
      setIsLoading(true);
      setHasError(false);
    }
  };
  const reloadIframe = () => {
    setIsLoading(true);
    setHasError(false);
    const iframe = document.getElementById(id);
    if (iframe) {
      iframe.src = iframe.src;
    }
  };
  const targetUrl = url || location.pathname;
  const layoutConfig = checkForOldNewLayout(targetUrl);
  if (layoutConfig.isOldNewLayout) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(OldNewTabLayout, { tabs: layoutConfig.tabs, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full", children: [
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-50 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: title })
      ] }) }),
      hasError && !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-50 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-4xl mb-3", children: "⚠️" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Failed to load page" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-4", children: "The requested page could not be loaded." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: reloadIframe,
            className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-sm", children: "refresh" }),
              "Retry"
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          id,
          className: `${className} w-full h-full border-0`,
          src: iframeUrl,
          title,
          onLoad: handleIframeLoad,
          onError: handleIframeError,
          style: {
            minHeight: "calc(100vh - 2.5rem)",
            // Adjust based on your header height
            display: hasError ? "none" : "block"
          }
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full", children: [
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-50 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: title })
    ] }) }),
    hasError && !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-50 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-4xl mb-3", children: "⚠️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Failed to load page" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-4", children: "The requested page could not be loaded." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: reloadIframe,
          className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-sm", children: "refresh" }),
            "Retry"
          ]
        }
      )
    ] }) }),
    iframeUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        id,
        className: `${className} w-full h-full border-0`,
        src: iframeUrl,
        title,
        onLoad: handleIframeLoad,
        onError: handleIframeError,
        style: {
          minHeight: "calc(100vh - 2.5rem)",
          // Adjust based on your header height
          display: hasError ? "none" : "block"
        }
      }
    )
  ] });
};
export {
  IframeRender as default
};
