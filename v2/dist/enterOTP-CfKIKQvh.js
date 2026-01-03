import { r as reactExports, j as jsxRuntimeExports, L as Loader, z as zt, i as classNames, p as post, D as axios, l as apiRootPath } from "./main-B7w5eCOl.js";
import TextBox from "./textBox-CSNjK2Z2.js";
import "./validationMessage-D3Gjn0ek.js";
import "./EyeSlashIcon-Vd-PPSmw.js";
import "./EyeIcon-DRCFFanS.js";
import "./ChatBubbleBottomCenterTextIcon-CKcdu_oV.js";
const EnterOTPComponent = ({
  fieldName,
  label,
  placeholder,
  errors,
  register,
  formData,
  optional,
  maxLength,
  onChange,
  type,
  pattern,
  minLength,
  autocomplete,
  step,
  disabled,
  max,
  labelFont,
  noLabel
}) => {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [isEmailValid, setIsEmailValid] = reactExports.useState(false);
  const [isOTPSent, setIsOTPSent] = reactExports.useState(false);
  const [otpFieldVisible, setOtpFieldVisible] = reactExports.useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = reactExports.useState(false);
  const [otpValidationStatus, setOtpValidationStatus] = reactExports.useState(false);
  const [debouncedEmail, setDebouncedEmail] = reactExports.useState("");
  const [isEmailRegistered, setIsEmailRegistered] = reactExports.useState(false);
  const [isOtpValid, setisOtpValid] = reactExports.useState(false);
  const [otp, setOtp] = reactExports.useState("");
  const getUserCheckAPI = "/PublicJson/GetUserCheck";
  const activationAPI = "/PublicJson/UsersActivation";
  const otpCheckAPI = apiRootPath + "/PublicJson/GetOTPCheck";
  const validateEmail = (email2) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email2);
  };
  const validateOTP = (otp2) => {
    return otp2.length === 6 && /^\d{6}$/.test(otp2);
  };
  reactExports.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedEmail(email);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [email]);
  let verifyEmail = () => {
    const formData2 = { Email: email };
    setIsLoading(true);
    return post(getUserCheckAPI, formData2).then((response) => {
      setIsLoading(false);
      if (response.data === true) {
        setIsEmailRegistered(true);
        zt.error("This email ID is already registered. Please enter a different email ID.");
        return false;
      } else {
        setIsEmailRegistered(false);
        return true;
      }
    }).catch((error) => {
      setIsLoading(false);
      console.error("Error checking user:", error);
      setIsEmailRegistered(false);
      zt.error("Error checking user, please try again.");
    });
  };
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    if (newEmail !== email) {
      setIsButtonDisabled(false);
      setIsEmailRegistered(false);
      setEmail(newEmail);
      setOtpFieldVisible(false);
      setIsEmailValid(validateEmail(newEmail));
      setIsOTPSent(false);
      setisOtpValid(false);
    }
    onChange("email", e.target.value);
  };
  const handleOTPRequest = async () => {
    let isValid = await verifyEmail();
    if (!isValid) {
      return;
    }
    if (validateEmail(email) && isValid) {
      setIsButtonDisabled(true);
      zt.success("OTP button will activate in 30 seconds.");
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 3e4);
      const formData2 = { Email: email };
      setIsLoading(true);
      post(activationAPI, formData2).then((response) => {
        if (response.data.Results !== "Send mail success") {
          setIsEmailRegistered(true);
          zt.error(response.data.Results);
          setIsButtonDisabled(false);
        } else {
          zt.success("OTP sent successfully. Please check your email inbox. If you don't see the email, please check your spam folder.");
          setIsOTPSent(true);
          setOtpFieldVisible(true);
        }
        setIsLoading(false);
      }).catch((error) => {
        setIsLoading(false);
        console.error("Error sending OTP:", error);
        zt.error("Failed to send OTP, please try again.");
        setIsButtonDisabled(false);
      });
    } else {
      zt.error("Please enter a valid email address.");
    }
  };
  const handleOTPValidate = (otp2) => {
    if (!otp2) {
      return;
    }
    if (validateOTP(otp2)) {
      setIsLoading(true);
      axios.post(
        otpCheckAPI,
        { Email: email, OTP: otp2 },
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      ).then((response) => {
        setIsLoading(false);
        if (response.data === true) {
          setisOtpValid(true);
          onChange("otp", otp2);
          zt.success("OTP is valid.");
        } else {
          onChange("otp", "");
          zt.error("OTP is not valid.");
          setOtp("");
          setisOtpValid(false);
        }
      }).catch((error) => {
        setIsLoading(false);
        console.error("Error validating OTP:", error);
        zt.error("Invalid OTP. Please try again.");
        setisOtpValid(false);
      });
    } else {
      zt.error("Please enter a valid 6-digit OTP.");
    }
  };
  const handleOTPChange = (e) => {
    let isValid = validateOTP(e.target.value);
    if (!isValid) {
      return;
    }
    const newOtp = e.target.value;
    setOtp(newOtp);
    setOtpValidationStatus(validateOTP(newOtp));
    handleOTPValidate(newOtp);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { isLoading }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextBox,
        {
          fieldName,
          label,
          placeholder,
          errors,
          register,
          formData,
          optional,
          maxLength,
          onChange: handleEmailChange,
          type,
          validate: (value) => {
            if (!isOTPSent) {
              zt.error("Please click on Get OTP via Email button to get OTP.");
              return false;
            }
            if (isEmailRegistered) {
              zt.error("This email ID is already registered. Please enter a different email ID or login with this email ID.");
              return false;
            }
            if (!isEmailValid) {
              zt.error("Please enter a valid email address.");
              return false;
            }
            return true;
          },
          pattern,
          minLength,
          autocomplete,
          readOnly: false
        }
      ),
      !isOtpValid && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          disabled: !isEmailValid || isEmailRegistered || isButtonDisabled,
          onClick: handleOTPRequest,
          type: "button",
          className: classNames(
            isEmailValid && !isEmailRegistered && !isButtonDisabled ? "w-full my-2 py-2 px-4 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500" : "w-full my-2 py-2 px-4 bg-gray-400 text-white rounded-md shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          ),
          children: isOTPSent ? "Resend OTP via Email" : "Get OTP via Email"
        }
      ),
      isOTPSent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextBox,
        {
          fieldName: "otp",
          label: "Enter the OTP",
          placeholder: "Enter OTP sent to your email",
          errors,
          register,
          formData,
          optional: false,
          maxLength: 6,
          validate: () => {
            if (!isOtpValid) {
              zt.error("Please enter a valid OTP.");
              return false;
            }
            return true;
          },
          minLength: 6,
          onChange: handleOTPChange,
          type: "text",
          pattern: /^\d{6}$/,
          autocomplete: "off"
        }
      ) })
    ] })
  ] });
};
export {
  EnterOTPComponent as default
};
