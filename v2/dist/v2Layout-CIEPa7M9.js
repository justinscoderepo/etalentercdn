import { b as getUserData, r as reactExports, j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
import { V as V2Sidebar, a as V2Header } from "./v2Sidebar-iWgJGo1Y.js";
import { d as useLocation, O as Outlet } from "./navigationUtils-BZC1EMRn.js";
const V2Layout = ({ children }) => {
  const location = useLocation();
  const { user, token } = getUserData() || {};
  const [isSidebarCollapsed, setIsSidebarCollapsed] = reactExports.useState(false);
  const [isHoverExpanded, setIsHoverExpanded] = reactExports.useState(false);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const sidebarRef = reactExports.useRef(null);
  const headerMenuButtonRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const checkScreenSize = () => {
      const isMobileScreen = window.innerWidth < 1024;
      setIsMobile(isMobileScreen);
      if (isMobileScreen) {
        setIsSidebarCollapsed(true);
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isMobile) {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target) && headerMenuButtonRef.current && !headerMenuButtonRef.current.contains(event.target)) {
          if (isSidebarCollapsed && isHoverExpanded) {
            setIsHoverExpanded(false);
          }
        }
      } else {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target) && headerMenuButtonRef.current && !headerMenuButtonRef.current.contains(event.target) && !isSidebarCollapsed) {
          setIsSidebarCollapsed(true);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isSidebarCollapsed, isHoverExpanded]);
  const handleSidebarMouseEnter = () => {
    if (!isMobile && isSidebarCollapsed) {
      setIsHoverExpanded(true);
    }
  };
  const handleSidebarMouseLeave = () => {
  };
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  const getPageContext = () => {
    const path = location.pathname;
    const segments = path.split("/").filter(Boolean);
    return {
      controller: segments[0] || "Home",
      action: segments[1] || "Index",
      fullPath: path,
      breadcrumb: segments.join(" > ") || "Home"
    };
  };
  const pageContext = getPageContext();
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-contentBg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "Loading eTalenter..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-contentBg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        V2Sidebar,
        {
          ref: sidebarRef,
          isCollapsed: isSidebarCollapsed,
          isHoverExpanded,
          isMobile,
          onToggle: () => setIsSidebarCollapsed(!isSidebarCollapsed),
          onMouseEnter: handleSidebarMouseEnter,
          onMouseLeave: handleSidebarMouseLeave,
          user,
          pageContext
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(V2Header, { ref: headerMenuButtonRef, user, isSidebarCollapsed, onSidebarToggle: () => setIsSidebarCollapsed(!isSidebarCollapsed), pageContext }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-auto bg-contentBg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-full", children: children || /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) })
      ] })
    ] }),
    isMobile && !isSidebarCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden", onClick: () => setIsSidebarCollapsed(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "global-spinner", className: "fixed inset-0 bg-contentBgOuter bg-opacity-75 z-50 hidden items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Processing..." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "toast-container", className: "fixed top-4 right-4 z-50 space-y-2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "modal-container", className: "fixed inset-0 z-50 hidden" })
  ] });
};
export {
  V2Layout as V
};
