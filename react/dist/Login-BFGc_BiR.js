import { r as reactExports, j as jsxRuntimeExports, i as classNames, b as getUserData, p as post, z as zt, E as triggerRouterReload } from "./main-B7w5eCOl.js";
import { e as getLink, a as useNavigate, b as useSmartNavigate } from "./navigationUtils-BZC1EMRn.js";
import { F as ForwardRef$1, P as PlatformFeaturesSidebar, M as MultiRoleAccess, a as MobileFeaturesPreview } from "./PlatformFeaturesSidebar-BecTSpsG.js";
import { F as ForwardRef$2 } from "./EyeSlashIcon-O_xFXInW.js";
import { F as ForwardRef$3 } from "./EyeIcon-B2acEKRI.js";
import "./TrophyIcon-DjeOA5id.js";
import "./UserGroupIcon-C7G6h27R.js";
import "./ClipboardDocumentListIcon-D2bvKHu6.js";
import "./DocumentTextIcon-CpKnur7u.js";
import "./UserCircleIcon-Bn6O48dU.js";
import "./StarIcon-Cu8oGMVF.js";
import "./ShieldCheckIcon-DFqwosKz.js";
import "./CalendarDaysIcon-DfBVxW_h.js";
function LockClosedIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(LockClosedIcon);
const LoginFooter = ({ smartNavigate, isLoading }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 bg-surface border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-3 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => smartNavigate("/ForgotPasswordPage"),
        className: "text-primary hover:text-primaryHover text-sm font-medium transition-colors",
        disabled: isLoading,
        children: "Forgot your password? Reset here"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: getLink("/Public/Register"),
        className: "text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors",
        children: "New to the platform? Register as Event Manager"
      }
    )
  ] }) });
};
const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  error,
  onSubmit
}) => {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surfaceCard rounded-lg shadow-xl border border-border overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 bg-amber-50 border-b border-amber-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5 text-amber-600 mt-0.5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-amber-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Candidates/Guardians:" }),
        " Please use the email link you received to access your account."
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-semibold leading-6 text-onSurface mb-2", children: "Email Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-5 w-5 text-gray-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              id: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: "pl-10 block w-full rounded-md border-0 py-2.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-onSurface focus:border-darkprimary focus:ring-primary placeholder:text-onSurfaceVariant ring-border",
              placeholder: "Enter your email address",
              required: true,
              disabled: isLoading,
              autoComplete: "username email"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", className: "block text-sm font-semibold leading-6 text-onSurface mb-2", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5 text-gray-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: showPassword ? "text" : "password",
              id: "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              className: "pl-10 pr-10 block w-full rounded-md border-0 py-2.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-onSurface focus:border-darkprimary focus:ring-primary placeholder:text-onSurfaceVariant ring-border",
              placeholder: "Enter your password",
              required: true,
              disabled: isLoading,
              autoComplete: "current-password"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowPassword(!showPassword),
              className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors",
              disabled: isLoading,
              children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-5 w-5" })
            }
          )
        ] })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-red-50 p-4 border border-red-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5 text-red-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-800", children: error }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: isLoading || !email || !password,
          className: classNames(
            "inline-flex items-center gap-x-2 rounded-md px-6 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200",
            isLoading || !email || !password ? "bg-gray-200 text-gray-700 cursor-not-allowed" : "bg-primary text-white hover:bg-primaryHover hover:shadow-md transform hover:scale-105"
          ),
          children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white" }),
            "Signing In..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "w-4 h-4" }),
            "Sign In"
          ] })
        }
      ) })
    ] }) })
  ] });
};
const LoginHeader = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "w-8 h-8 text-white" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b-[#485257] text-[#206689] mb-4 items-center font-medium pb-1 px-1 w-full uppercase border-b-2 text-lg", children: "Welcome Back" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-primary mb-2", children: "Sign In" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: "Sign in to access your dashboard" })
  ] });
};
const LoginPage = () => {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  const smartNavigate = useSmartNavigate(navigate);
  reactExports.useEffect(() => {
    const { user, token } = getUserData() || {};
    if (user && token) {
      smartNavigate("/Home/Index");
    }
  }, [navigate, smartNavigate]);
  const loginPath = "/AccountJson/LoginUser";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const loginData = {
      email,
      password,
      isCrossRequest: true,
      eventId: 0,
      userRoleId: 0,
      myRole: 0,
      randomOrder: [],
      randomNumber: 0,
      returnPath: "",
      name: "",
      googleToken: null
    };
    try {
      const response = await post(loginPath, loginData);
      if (!response || !response.data) {
        throw new Error("Invalid response from server");
      }
      const { user, token, message, success, redirectUrl } = response.data;
      if (!success) {
        throw new Error(message || "Login failed");
      }
      if (!token || !user) {
        throw new Error("Token or user data is missing from response");
      }
      const centralizedUserData = { user, token };
      localStorage.setItem("user", JSON.stringify(centralizedUserData));
      zt.success(message || "Welcome back! Login successful");
      triggerRouterReload("User logged in successfully");
      setTimeout(() => {
        try {
          smartNavigate(redirectUrl);
        } catch (navError) {
          console.warn("Login - Navigation failed, falling back to page reload:", navError);
          window.location.href = redirectUrl;
        }
      }, 200);
      setTimeout(() => {
        if (window.location.pathname.includes("404") || window.location.pathname === "/Account/Login") {
          window.location.reload();
        }
      }, 3e3);
    } catch (error2) {
      console.error("Login - Error:", error2);
      const errorMessage = error2.response?.data?.message || error2.message || "An unexpected error occurred during login.";
      setError(errorMessage);
      zt.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-surface flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformFeaturesSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoginHeader, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoginForm, { email, setEmail, password, setPassword, isLoading, error, onSubmit: handleSubmit }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoginFooter, { smartNavigate, isLoading })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MultiRoleAccess, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-onSurfaceVariant", children: "Secure login powered by eTalenter platform" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MobileFeaturesPreview, {})
      ] })
    ] }) })
  ] });
};
export {
  LoginPage as default
};
