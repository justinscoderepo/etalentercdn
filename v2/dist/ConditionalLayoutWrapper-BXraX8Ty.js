import { j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
import { V as V2Layout } from "./v2Layout-CIEPa7M9.js";
import { d as useLocation } from "./navigationUtils-BZC1EMRn.js";
import "./v2Sidebar-iWgJGo1Y.js";
import "./Bars3Icon-CVFng2-4.js";
import "./ChevronDownIcon-DrbBxP_V.js";
import "./CheckCircleIcon-B36U4EaE.js";
import "./GlobeAltIcon-kUk_6aZB.js";
import "./ArrowPathIcon-CrJmYjUD.js";
import "./EyeIcon-B2acEKRI.js";
import "./UserCircleIcon-Bn6O48dU.js";
import "./XMarkIcon-DzyB_jak.js";
import "./chunk-27-Cb6oRF49.js";
import "./emotion-hash.esm-D28shAk1.js";
import "./ChevronRightIcon-QSnXtBoc.js";
const ConditionalLayoutWrapper = ({ children }) => {
  const location = useLocation();
  const useV2Layout = location.pathname.includes("/v2/") || location.search.includes("v2=true") || window.location.href.includes("/v2/");
  if (useV2Layout) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(V2Layout, { children });
  } else {
    return children;
  }
};
export {
  ConditionalLayoutWrapper as default
};
