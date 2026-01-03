import { r as reactExports, j as jsxRuntimeExports, L as Loader, D as axios } from "./main-B7w5eCOl.js";
import PublicRegistrationOuter from "./publicRegistrationOuter-0jxplRJf.js";
import { f as useParams, a as useNavigate } from "./navigationUtils-BZC1EMRn.js";
import "./disclosure-DvzV5MDW.js";
import "./use-resolve-button-type-DPiHyuBj.js";
import "./keyboard-Dku-r8UD.js";
import "./open-closed-gVG0H0sE.js";
import "./bugs-BMBAUfeG.js";
import "./dom-XjFFvgb6.js";
import "./renderRegistrationForm-D9a5R6SE.js";
import "./publicRegistrationHelper-D8ymtYJF.js";
import "./PencilIcon-b9s3VfZ1.js";
import "./box-Du61b7dg.js";
import "./alert-BVY3dXZ7.js";
const getApiRoot = () => {
  let apiRoot = window.location.origin;
  const siteConfig = localStorage.getItem("siteConfig");
  if (siteConfig) {
    try {
      const config = JSON.parse(siteConfig);
      if (window.location.href.indexOf("localhost") === -1) {
        apiRoot = config.apiUrl || "https://etalenterapi.azurewebsites.net";
      } else {
        apiRoot = "http://localhost:8888";
      }
    } catch (e) {
      console.warn("Error parsing siteConfig:", e);
    }
  } else if (window.location.href.indexOf("localhost") === -1) {
    apiRoot = "https://etalenterapi.azurewebsites.net";
  } else {
    apiRoot = "http://localhost:8888";
  }
  return apiRoot;
};
function EventRegistrationWrapper() {
  const { eventName } = useParams();
  const navigate = useNavigate();
  const [isInitializing, setIsInitializing] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [eventData, setEventData] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const initializeEventRegistration = async () => {
      if (!eventName) {
        setError("Event name is required");
        setIsInitializing(false);
        return;
      }
      try {
        setIsInitializing(true);
        console.log("🔵 EventRegistrationWrapper - Initializing for slug:", eventName);
        const existingUserData = localStorage.getItem("user");
        let existingToken = null;
        if (existingUserData) {
          try {
            const parsedData = JSON.parse(existingUserData);
            existingToken = parsedData?.token;
            if (existingToken && parsedData?.user) {
              const eventSlug = parsedData.user.EventName?.replace(/ /g, "-");
              if (eventSlug === eventName) {
                console.log("✅ EventRegistrationWrapper - Existing valid token found");
                setEventData(parsedData);
                setIsInitializing(false);
                return;
              }
            }
          } catch (e) {
            console.warn("EventRegistrationWrapper - Error parsing existing user data:", e);
          }
        }
        const apiRoot = getApiRoot();
        const apiUrl = `${apiRoot}/api/PublicJson/ValidateEventRegistration/${eventName}`;
        const headers = {
          "Content-Type": "application/json",
          "Platform": "Web"
        };
        if (existingToken) {
          headers["Authorization"] = `Bearer ${existingToken}`;
        }
        const response = await axios.get(apiUrl, { headers });
        console.log("🔵 EventRegistrationWrapper - API Response:", response.data);
        if (response.data?.success) {
          const userData = {
            token: response.data.token,
            user: response.data.userdata
          };
          localStorage.setItem("user", JSON.stringify(userData));
          console.log("✅ EventRegistrationWrapper - Token stored in localStorage");
          setEventData(response.data);
          setIsInitializing(false);
        } else {
          setError(response.data?.message || "Event registration validation failed");
          setIsInitializing(false);
        }
      } catch (err) {
        console.error("❌ EventRegistrationWrapper - Initialization error:", err);
        const errorMessage = err?.response?.data?.message || err?.message || "Failed to initialize event registration. Please try again.";
        setError(errorMessage);
        setIsInitializing(false);
      }
    };
    initializeEventRegistration();
  }, [eventName]);
  if (isInitializing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { info: "Initializing event registration..." }) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md mx-auto p-6 bg-surfaceCard rounded-lg shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          className: "mx-auto h-12 w-12 text-error",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-medium text-onSurface", children: "Registration Error" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-onSurfaceVariant", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => navigate("/Account/Login"),
          className: "mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
          children: "Go to Login"
        }
      )
    ] }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PublicRegistrationOuter, { eventData });
}
export {
  EventRegistrationWrapper as default
};
