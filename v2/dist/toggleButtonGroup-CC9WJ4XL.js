import { r as reactExports, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { C as Controller } from "./index.esm-CiAIyUc7.js";
import { V as ValidationMessage } from "./validationMessage-D3Gjn0ek.js";
const ToggleButtonGroup = ({ control, fieldName, label, formData, errors, register, options = [], optional, disabled, onChange }) => {
  const [error, setError] = reactExports.useState(errors?.[fieldName]);
  const [indicatorStyle, setIndicatorStyle] = reactExports.useState({ left: 0, width: 0 });
  const buttonRefs = reactExports.useState(() => options.map(() => null))[0];
  const [containerRef] = reactExports.useState({ current: null });
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors, fieldName]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4 relative overflow-x-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: fieldName, className: classNames("block text-sm font-medium leading-6 mb-2", error ? "text-danger" : "text-gray-900"), children: [
      label || fieldName,
      !optional && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger pl-1", children: "*" })
    ] }),
    disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block w-full py-1.5 sm:text-sm sm:leading-6 text-gray-500", children: options.find((opt) => opt.value === formData?.[fieldName])?.text || formData?.[fieldName] || "-" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        control,
        name: fieldName,
        disabled,
        rules: { required: !optional },
        render: ({ field }) => {
          const selectedValue = field.value || formData?.[fieldName];
          const currentIndex = options.findIndex((opt) => opt.value === selectedValue);
          const updateIndicatorPosition = () => {
            if (currentIndex !== -1 && buttonRefs[currentIndex]) {
              const button = buttonRefs[currentIndex];
              if (button) {
                setIndicatorStyle({
                  left: button.offsetLeft,
                  width: button.offsetWidth
                });
              }
            }
          };
          reactExports.useEffect(() => {
            updateIndicatorPosition();
          }, [currentIndex, buttonRefs]);
          reactExports.useEffect(() => {
            const handleResize = () => {
              updateIndicatorPosition();
            };
            window.addEventListener("resize", handleResize);
            let resizeObserver;
            if (containerRef.current && typeof ResizeObserver !== "undefined") {
              resizeObserver = new ResizeObserver(handleResize);
              resizeObserver.observe(containerRef.current);
            }
            return () => {
              window.removeEventListener("resize", handleResize);
              if (resizeObserver && containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
              }
            };
          }, [currentIndex, buttonRefs]);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: (el) => containerRef.current = el, className: "relative flex w-full rounded-md shadow-sm bg-gray-100 p-1 ", role: "group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-1 bottom-1 bg-white rounded transition-all duration-300 ease-in-out shadow-md ring-2 ring-green-600",
                  style: {
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`
                  }
                }
              ),
              options.map((option, index) => {
                const isSelected = selectedValue === option.value;
                index === options.length - 1;
                const IconComponent = option.icon;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    ref: (el) => buttonRefs[index] = el,
                    type: "button",
                    onClick: () => {
                      field.onChange(option.value);
                      if (onChange) {
                        onChange(option.value);
                      }
                    },
                    className: classNames(
                      "relative inline-flex items-center justify-center gap-x-2 px-4 py-2 text-sm font-normal z-1 flex-1",
                      "focus:outline-none transition-colors duration-300 ease-in-out whitespace-nowrap",
                      isSelected ? "text-green-600" : "text-gray-600 hover:text-gray-900",
                      disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                    ),
                    disabled,
                    children: [
                      IconComponent && /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: classNames("h-5 w-5 transition-colors duration-300", isSelected ? "text-green-600" : "text-gray-600"), "aria-hidden": "true" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: option.text })
                    ]
                  },
                  option.value
                );
              })
            ] }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: error?.message || "This field is required" })
          ] });
        }
      }
    )
  ] });
};
export {
  ToggleButtonGroup as default
};
