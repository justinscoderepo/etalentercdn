import { r as reactExports, j as jsxRuntimeExports, i as classNames, p as post, z as zt } from "./main-B7w5eCOl.js";
import { a as useNavigate, b as useSmartNavigate } from "./navigationUtils-BZC1EMRn.js";
import { F as ForwardRef$4, P as PlatformFeaturesSidebar, M as MultiRoleAccess, a as MobileFeaturesPreview } from "./PlatformFeaturesSidebar-BecTSpsG.js";
import { F as ForwardRef$2 } from "./UserPlusIcon-DwHKUQTZ.js";
import { F as ForwardRef$3 } from "./UserIcon-BRPEvw4s.js";
import { F as ForwardRef$5 } from "./ShieldCheckIcon-DFqwosKz.js";
import { F as ForwardRef$6 } from "./EyeSlashIcon-O_xFXInW.js";
import { F as ForwardRef$7 } from "./EyeIcon-B2acEKRI.js";
import "./TrophyIcon-DjeOA5id.js";
import "./UserGroupIcon-C7G6h27R.js";
import "./ClipboardDocumentListIcon-D2bvKHu6.js";
import "./DocumentTextIcon-CpKnur7u.js";
import "./UserCircleIcon-Bn6O48dU.js";
import "./StarIcon-Cu8oGMVF.js";
import "./CalendarDaysIcon-DfBVxW_h.js";
function DevicePhoneMobileIcon({
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
    d: "M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(DevicePhoneMobileIcon);
function KeyIcon({
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
    d: "M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(KeyIcon);
const RegisterHeader = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "w-8 h-8 text-white" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b-[#485257] text-[#206689] mb-4 items-center font-medium pb-1 px-1 w-full uppercase border-b-2 text-lg", children: "Join eTalenter" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Create your account to get started" })
  ] });
};
const RegisterForm = ({
  formData,
  handleInputChange,
  handleEmailBlur,
  handleGetOTP,
  handleOTPChange,
  showPassword,
  setShowPassword,
  isLoading,
  error,
  emailError,
  otpError,
  showOtpField,
  showPasswordField,
  otpButtonDisabled,
  onSubmit
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-onSurface mb-2", children: "Name *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-5 w-5 text-onSurfaceVariant" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            name: "name",
            value: formData.name,
            onChange: handleInputChange,
            required: true,
            className: "pl-10 block w-full rounded-md border-0 py-1.5 text-onSurface shadow-sm ring-1 ring-inset ring-border placeholder:text-onSurfaceVariant focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
            placeholder: "Enter your full name"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-onSurface mb-2", children: "Mobile Number - WhatsApp *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-5 w-5 text-onSurfaceVariant" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            name: "mobile",
            value: formData.mobile,
            onChange: handleInputChange,
            required: true,
            className: "pl-10 block w-full rounded-md border-0 py-1.5 text-onSurface shadow-sm ring-1 ring-inset ring-border placeholder:text-onSurfaceVariant focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
            placeholder: "eg: +4878xxxxxxx"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-onSurface mb-2", children: "Email Address *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "h-5 w-5 text-onSurfaceVariant" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            name: "email",
            value: formData.email,
            onChange: handleInputChange,
            onBlur: handleEmailBlur,
            required: true,
            className: classNames(
              "pl-10 block w-full rounded-md border-0 py-1.5 text-onSurface shadow-sm ring-1 ring-inset placeholder:text-onSurfaceVariant focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
              emailError ? "ring-red-300" : "ring-border"
            ),
            placeholder: "Enter your email address"
          }
        )
      ] }),
      emailError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-red-600", children: emailError })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: handleGetOTP,
        disabled: !formData.email || emailError || otpButtonDisabled || isLoading,
        className: classNames(
          "inline-flex items-center gap-x-2 rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          !formData.email || emailError || otpButtonDisabled || isLoading ? "bg-surface text-onSurfaceVariant cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700 focus-visible:outline-green-600"
        ),
        children: [
          otpButtonDisabled && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "Wait 20s" }),
          isLoading ? "Sending..." : "Get OTP via Email"
        ]
      }
    ) }),
    showOtpField && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-onSurface mb-2", children: "Enter OTP *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "h-5 w-5 text-onSurfaceVariant" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            name: "otp",
            value: formData.otp,
            onChange: handleOTPChange,
            required: true,
            maxLength: 6,
            className: classNames(
              "pl-10 block w-full rounded-md border-0 py-1.5 text-onSurface shadow-sm ring-1 ring-inset placeholder:text-onSurfaceVariant focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
              otpError ? "ring-red-300" : "ring-border"
            ),
            placeholder: "Enter OTP received via Email"
          }
        )
      ] }),
      otpError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-red-600", children: otpError })
    ] }),
    showPasswordField && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium leading-6 text-onSurface mb-2", children: "Password *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5 text-onSurfaceVariant" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: showPassword ? "text" : "password",
            name: "password",
            value: formData.password,
            onChange: handleInputChange,
            required: true,
            className: "pl-10 pr-10 block w-full rounded-md border-0 py-1.5 text-onSurface shadow-sm ring-1 ring-inset ring-border placeholder:text-onSurfaceVariant focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
            placeholder: "Create a secure password"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute inset-y-0 right-0 pr-3 flex items-center",
            onClick: () => setShowPassword(!showPassword),
            children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "h-5 w-5 text-onSurfaceVariant hover:text-onSurface" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$7, { className: "h-5 w-5 text-onSurfaceVariant hover:text-onSurface" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-lg p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-onSurface mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "Before Registration, Read Carefully to avoid confusion and understand the roles." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-onSurfaceVariant space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "For first-time users, the only available role is ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Event Manager" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "While creating an event, you will automatically designate yourself as a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Coordinator" }),
          ", you can change your role to control/modify all the details of the event."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "To add sub-units and appoint ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sub-coordinators" }),
          ", go to the Coordinator role. Sub-coordinators can then add participants within their respective sub-units."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "If you added competitions, you can create ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "judges" }),
          " to score them online."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "For live programs, you can assign someone to control the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "projector" }),
          ". Another person can be assigned to handle the printing of content."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-orange-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
      " If you are a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "guardian/parent" }),
      " of a candidate for a particular event, You can't register here. You can only register with the secret link shared by your event's coordinator."
    ] }) }) }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-600", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "submit",
        disabled: isLoading || !showPasswordField || emailError || otpError,
        className: classNames(
          "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
          isLoading || !showPasswordField || emailError || otpError ? "bg-surface cursor-not-allowed" : "bg-primary hover:bg-primaryHover focus:ring-primary"
        ),
        children: [
          isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" }),
          isLoading ? "Creating Account..." : "Create Account"
        ]
      }
    ) })
  ] });
};
const RegisterFooter = ({ smartNavigate, isLoading }) => {
  const handleLoginClick = (e) => {
    e.preventDefault();
    if (!isLoading) {
      smartNavigate("/Account/Login");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-onSurfaceVariant", children: [
      'Already have an account?"',
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleLoginClick,
          disabled: isLoading,
          className: "font-medium text-primary hover:text-primaryHover disabled:opacity-50 disabled:cursor-not-allowed",
          children: "Sign in here"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-t border-border" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 bg-surface text-onSurfaceVariant", children: "New to eTalenter?" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-onSurfaceVariant", children: "Join thousands of event organizers who trust eTalenter for their competitions and events" }) })
  ] });
};
const PublicRegister = () => {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    mobile: "",
    email: "",
    otp: "",
    password: "",
    googleToken: ""
  });
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [emailError, setEmailError] = reactExports.useState("");
  const [otpError, setOtpError] = reactExports.useState("");
  const [showOtpField, setShowOtpField] = reactExports.useState(false);
  const [showPasswordField, setShowPasswordField] = reactExports.useState(false);
  const [otpSent, setOtpSent] = reactExports.useState(false);
  const [otpButtonDisabled, setOtpButtonDisabled] = reactExports.useState(false);
  const navigate = useNavigate();
  const smartNavigate = useSmartNavigate(navigate);
  const registerPath = "/PublicJson/UsersRegister";
  const loginPath = "/AccountJson/LoginUser";
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (name === "email") setEmailError("");
    if (name === "otp") setOtpError("");
    setError("");
  };
  const validateEmail = async (email) => {
    if (!email) return;
    try {
      setIsLoading(true);
      const response = await post("/PublicJson/GetUserCheck", { Email: email, Mobile: formData.mobile });
      if (response === true) {
        setEmailError("This email id is already exist");
        return false;
      } else {
        setEmailError("");
        return true;
      }
    } catch (error2) {
      console.error("Email validation error:", error2);
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  const handleEmailBlur = () => {
    if (formData.email) {
      validateEmail(formData.email);
    }
  };
  const handleGetOTP = async () => {
    if (!formData.email) {
      setEmailError("Please enter email first");
      return;
    }
    const isEmailValid = await validateEmail(formData.email);
    if (!isEmailValid) return;
    try {
      setOtpButtonDisabled(true);
      setIsLoading(true);
      const response = await post("/PublicJson/UsersActivation", { Email: formData.email });
      setShowOtpField(true);
      setOtpSent(true);
      zt.success("OTP is sent to your email. Please check and fill the field. Sometimes it may take a few seconds to receive email. Kindly wait and enter it. Please check spam folder if not found within few minutes.", {
        duration: 1e4
      });
      setTimeout(() => {
        setOtpButtonDisabled(false);
      }, 2e4);
    } catch (error2) {
      console.error("OTP request error:", error2);
      zt.error("Failed to send OTP. Please try again.");
      setOtpButtonDisabled(false);
    } finally {
      setIsLoading(false);
    }
  };
  const validateOTP = async (otp) => {
    if (otp.length === 6) {
      try {
        setIsLoading(true);
        const { data } = await post("/PublicJson/GetOTPCheck", {
          OTP: otp,
          Email: formData.email
        });
        if (data === true) {
          setShowPasswordField(true);
          setOtpError("");
          return true;
        } else {
          setOtpError("Invalid OTP");
          return false;
        }
      } catch (error2) {
        console.error("OTP validation error:", error2);
        setOtpError("OTP validation failed");
        return false;
      } finally {
        setIsLoading(false);
      }
    } else if (otp.length > 6) {
      setOtpError("Invalid OTP Length");
      return false;
    }
    return false;
  };
  const handleOTPChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, otp: value }));
    setOtpError("");
    if (value.length === 6) {
      validateOTP(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const registerData = {
        Name: formData.name,
        Mobile: formData.mobile,
        Email: formData.email,
        OTP: formData.otp,
        Password: formData.password,
        GoogleToken: formData.googleToken
      };
      const response = await post(registerPath, registerData);
      if (response && response.success !== false) {
        zt.success("Registration successful! Logging you in...");
        setTimeout(async () => {
          try {
            const loginData = {
              email: formData.email,
              password: formData.password,
              isCrossRequest: true,
              eventId: 0,
              userRoleId: 0,
              myRole: 0,
              randomOrder: [],
              randomNumber: 0,
              returnPath: "",
              name: formData.name,
              googleToken: formData.googleToken
            };
            const loginResponse = await post(loginPath, loginData);
            if (loginResponse && loginResponse.data && loginResponse.data.token) {
              const { user, token } = loginResponse.data;
              const centralizedUserData = { user, token };
              localStorage.setItem("user", JSON.stringify(centralizedUserData));
              zt.success("Welcome to eTalenter! Registration and login successful");
              smartNavigate("/Home/Index");
            } else {
              zt.success("Registration successful! Please login to continue.");
              smartNavigate("/Account/Login");
            }
          } catch (loginError) {
            console.error("Auto-login failed:", loginError);
            zt.success("Registration successful! Please login to continue.");
            smartNavigate("/Account/Login");
          }
        }, 1e3);
      } else {
        throw new Error(response?.message || "Registration failed");
      }
    } catch (error2) {
      console.error("Registration error:", error2);
      const errorMessage = error2.response?.data?.message || error2.message || "Registration failed. Please try again.";
      setError(errorMessage);
      zt.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-primary/5 flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformFeaturesSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RegisterHeader, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          RegisterForm,
          {
            formData,
            handleInputChange,
            handleEmailBlur,
            handleGetOTP,
            handleOTPChange,
            showPassword,
            setShowPassword,
            isLoading,
            error,
            emailError,
            otpError,
            showOtpField,
            showPasswordField,
            otpButtonDisabled,
            onSubmit: handleSubmit
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          RegisterFooter,
          {
            smartNavigate,
            isLoading
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MultiRoleAccess, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Secure registration powered by eTalenter platform" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MobileFeaturesPreview, {})
      ] })
    ] }) })
  ] });
};
export {
  PublicRegister as default
};
