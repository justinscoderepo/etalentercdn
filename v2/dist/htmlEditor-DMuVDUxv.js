import { k as React, r as reactExports, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { V as ValidationMessage } from "./validationMessage-D3Gjn0ek.js";
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t2[p] = s[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
function autoconfigureTextDirection(el) {
  if (el) {
    var text = el.textContent;
    var rtlPattern = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
    el.style.direction = text && rtlPattern.test(text[0]) ? "rtl" : "ltr";
  }
}
function cls() {
  var classNames2 = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    classNames2[_i] = arguments[_i];
  }
  return classNames2.filter(Boolean).join(" ");
}
function getSelectedNode() {
  if (document.selection) {
    return document.selection.createRange().parentElement();
  }
  var selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    return selection.getRangeAt(0).startContainer.parentNode || void 0;
  }
  return void 0;
}
function normalizeHtml(str) {
  return typeof str === "string" ? str.replace(/&nbsp;|\u202F|\u00A0/g, " ").replace(/<br \/>/g, "<br>") : String(str);
}
function replaceCaret(el) {
  var target = document.createTextNode("");
  el.appendChild(target);
  var isTargetFocused = document.activeElement === el;
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    var sel = window.getSelection();
    if (sel !== null) {
      var range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    if (el instanceof HTMLElement)
      el.focus();
  }
}
function setForwardRef(el, ref) {
  if (typeof ref === "function") {
    ref(el);
  } else if (typeof ref === "object" && ref) {
    ref.current = el;
  }
}
var ContentEditable = React.memo(React.forwardRef(function ContentEditable2(_a, ref) {
  var className = _a.className, disabled = _a.disabled, tagName = _a.tagName, _b = _a.value, value = _b === void 0 ? "" : _b, placeholder = _a.placeholder, rest = __rest(_a, ["className", "disabled", "tagName", "value", "placeholder"]);
  var elRef = React.useRef(null);
  var htmlRef = React.useRef(value);
  var restRef = React.useRef(rest);
  React.useEffect(function() {
    restRef.current = rest;
    var el = elRef.current;
    if (el && normalizeHtml(htmlRef.current) !== normalizeHtml(value)) {
      htmlRef.current = value;
      el.innerHTML = value;
      replaceCaret(el);
    }
  });
  return React.useMemo(function() {
    function onSetRef($el) {
      elRef.current = $el;
      autoconfigureTextDirection($el);
      setForwardRef($el, ref);
    }
    function onChange(event) {
      var _a2, _b2;
      var el = elRef.current;
      if (!el) {
        return;
      }
      var elementHtml = el.innerHTML;
      if (elementHtml !== htmlRef.current) {
        (_b2 = (_a2 = restRef.current).onChange) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, __assign(__assign({}, event), { target: {
          value: elementHtml,
          name: rest.name
        } }));
      }
      autoconfigureTextDirection(el);
      htmlRef.current = elementHtml;
    }
    var cssClass = cls("rsw-ce", className);
    return React.createElement(tagName || "div", __assign(__assign({}, rest), { className: cssClass, contentEditable: !disabled, dangerouslySetInnerHTML: { __html: value }, onBlur: function(e2) {
      return (restRef.current.onBlur || onChange)(e2);
    }, onInput: onChange, onKeyDown: function(e2) {
      return (restRef.current.onKeyDown || onChange)(e2);
    }, onKeyUp: function(e2) {
      return (restRef.current.onKeyUp || onChange)(e2);
    }, placeholder, ref: onSetRef }));
  }, [className, disabled, placeholder, tagName]);
}));
var EditorContext = React.createContext(void 0);
function EditorProvider(_a) {
  var children = _a.children;
  var _b = React.useState({
    htmlMode: false,
    update
  }), state = _b[0], setState = _b[1];
  function update(attrs) {
    setState(function(prevState) {
      return __assign(__assign({}, prevState), attrs);
    });
  }
  return React.createElement(EditorContext.Provider, { value: state }, children);
}
function useEditorState() {
  var context = React.useContext(EditorContext);
  if (!context) {
    throw new Error("You should wrap your component by EditorProvider");
  }
  return context;
}
var e = [], t = [];
function n(n2, r) {
  if (n2 && "undefined" != typeof document) {
    var a, s = true === r.prepend ? "prepend" : "append", d = true === r.singleTag, i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n2.charCodeAt(0) && (n2 = n2.substring(1)), a.styleSheet ? a.styleSheet.cssText += n2 : a.appendChild(document.createTextNode(n2));
  }
  function c() {
    var e2 = document.createElement("style");
    if (e2.setAttribute("type", "text/css"), r.attributes) for (var t2 = Object.keys(r.attributes), n3 = 0; n3 < t2.length; n3++) e2.setAttribute(t2[n3], r.attributes[t2[n3]]);
    var a2 = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a2, e2), e2;
  }
}
var css = ".rsw-editor{border:1px solid #ddd;border-radius:.375rem;display:flex;flex-direction:column;min-height:100px;overflow:hidden}.rsw-ce{flex:1 1 auto;overflow:auto;padding:.5rem}.rsw-ce:focus{outline:1px solid #668}.rsw-ce[contentEditable=true]:empty:not(:focus):before{color:grey;content:attr(placeholder);pointer-events:none}.rsw-html{background:transparent;border:none;font-family:monospace,Courier New}.rsw-separator{align-self:stretch;border-right:1px solid #ddd;display:flex;margin:0 3px}.rsw-dd{box-sizing:border-box;outline:none}.rsw-btn{background:transparent;border:0;color:#222;cursor:pointer;font-size:1em;height:2em;outline:none;padding:0;width:2em}.rsw-btn:hover{background:#eaeaea}.rsw-btn[data-active=true]{background:#e0e0e0}.rsw-toolbar{align-items:center;background-color:#f5f5f5;border-bottom:1px solid #ddd;display:flex}";
n(css, {});
var Editor = React.forwardRef(function Editor2(_a, ref) {
  var autoFocus = _a.autoFocus, children = _a.children, containerProps = _a.containerProps, onSelect = _a.onSelect, rest = __rest(_a, ["autoFocus", "children", "containerProps", "onSelect"]);
  var editorState = useEditorState();
  React.useEffect(function() {
    document.addEventListener("click", onClickOutside);
    return function() {
      return document.removeEventListener("click", onClickOutside);
    };
  });
  function onClickOutside(event) {
    var _a2;
    if (event.target === editorState.$el) {
      return;
    }
    if ((_a2 = editorState.$el) === null || _a2 === void 0 ? void 0 : _a2.contains(event.target)) {
      return;
    }
    editorState.update({ $selection: void 0 });
  }
  function onTextSelect(event) {
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(event);
    editorState.update({ $selection: getSelectedNode() });
  }
  function setContentEditableRef($el) {
    editorState.update({ $el });
    setForwardRef($el, ref);
    if (autoFocus && $el && editorState.$el === void 0) {
      $el.focus();
    }
  }
  var cssClass = cls("rsw-editor", containerProps === null || containerProps === void 0 ? void 0 : containerProps.className);
  if (editorState.htmlMode) {
    return React.createElement(
      "div",
      __assign({}, containerProps, { className: cssClass }),
      children,
      React.createElement("textarea", __assign({}, rest, { className: "rsw-ce rsw-html" }))
    );
  }
  return React.createElement(
    "div",
    __assign({}, containerProps, { className: cssClass }),
    children,
    React.createElement(ContentEditable, __assign({}, rest, { ref: setContentEditableRef, onSelect: onTextSelect }))
  );
});
function OrderedListIcon() {
  return React.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", style: { verticalAlign: "text-top" } },
    React.createElement("path", { fill: "currentColor", d: "M6.99938 12.998v-2H20.9994v2H6.99938zm0 6.0001v-2H20.9994v2H6.99938zm0-12.00001v-2H20.9994v2H6.99938zm-4 1v-3h-1v-1h2v4h-1zm-1 9.00001v-1h3v4h-3v-1h2v-.5h-1v-1h1v-.5h-2zM4.25 10c.41421 0 .75.3358.75.75 0 .2024-.08017.3861-.2105.521L3.11983 13H5v1H2v-.9218L4 11H2v-1h2.25z" })
  );
}
function UnorderedListIcon() {
  return React.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", style: { verticalAlign: "text-top" } },
    React.createElement("path", { fill: "currentColor", d: "M7 5h14v2H7V5zm0 8v-2h14v2H7zM4 4.50001c.83 0 1.5.66992 1.5 1.5 0 .83007-.67 1.5-1.5 1.5s-1.5-.66993-1.5-1.5c0-.83008.67-1.5 1.5-1.5zM4 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM7 19v-2h14v2H7zm-3-2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" })
  );
}
var BtnBold = createButton("Bold", "𝐁", "bold");
var BtnBulletList = createButton("Bullet list", React.createElement(UnorderedListIcon, null), "insertUnorderedList");
var BtnClearFormatting = createButton("Clear formatting", "T̲ₓ", "removeFormat");
var BtnItalic = createButton("Italic", "𝑰", "italic");
var BtnStrikeThrough = createButton("Strike through", React.createElement("s", null, "ab"), "strikeThrough");
var BtnLink = createButton("Link", "🔗", function(_a) {
  var $selection = _a.$selection;
  if (($selection === null || $selection === void 0 ? void 0 : $selection.nodeName) === "A") {
    document.execCommand("unlink");
  } else {
    document.execCommand("createLink", false, prompt("URL", "") || void 0);
  }
});
var BtnNumberedList = createButton("Numbered list", React.createElement(OrderedListIcon, null), "insertOrderedList");
var BtnRedo = createButton("Redo", "↷", "redo");
var BtnUnderline = createButton("Underline", React.createElement("span", { style: { textDecoration: "underline" } }, "𝐔"), "underline");
var BtnUndo = createButton("Undo", "↶", "undo");
function createButton(title, content, command) {
  ButtonFactory.displayName = title.replace(/\s/g, "");
  return ButtonFactory;
  function ButtonFactory(props) {
    var editorState = useEditorState();
    var $el = editorState.$el;
    var isElFocused = function() {
      return Boolean($el === null || $el === void 0 ? void 0 : $el.contains(document.activeElement));
    };
    var active = false;
    if (typeof command === "string") {
      active = isElFocused() && document.queryCommandState(command);
    }
    function onAction(e2) {
      e2.preventDefault();
      if (!isElFocused()) {
        $el === null || $el === void 0 ? void 0 : $el.focus();
      }
      if (typeof command === "function") {
        command(editorState);
      } else {
        document.execCommand(command);
      }
    }
    if (editorState.htmlMode) {
      return null;
    }
    return React.createElement("button", __assign({ className: "rsw-btn", "data-active": active, onMouseDown: onAction, tabIndex: -1, title, type: "button" }, props), content);
  }
}
var BtnStyles = createDropdown("Styles", [
  ["Normal", "formatBlock", "DIV"],
  ["𝗛𝗲𝗮𝗱𝗲𝗿 𝟭", "formatBlock", "H1"],
  ["Header 2", "formatBlock", "H2"],
  ["𝙲𝚘𝚍𝚎", "formatBlock", "PRE"]
]);
function createDropdown(title, items) {
  DropdownFactory.displayName = title;
  return DropdownFactory;
  function DropdownFactory(props) {
    var editorState = useEditorState();
    var $el = editorState.$el, $selection = editorState.$selection, htmlMode = editorState.htmlMode;
    if (htmlMode) {
      return null;
    }
    var activeIndex = items.findIndex(function(item) {
      return item[1] === "formatBlock" && ($selection === null || $selection === void 0 ? void 0 : $selection.nodeName) === item[2];
    });
    return React.createElement(Dropdown, __assign({}, props, { items, onChange, selected: activeIndex, tabIndex: -1, title }));
    function onChange(e2) {
      var target = e2.target;
      var selectedValue = target.value;
      var selectedIndex = parseInt(selectedValue, 10);
      var _a = items[selectedIndex] || [], command = _a[1], commandArgument = _a[2];
      e2.preventDefault();
      if (document.activeElement !== $el) {
        $el === null || $el === void 0 ? void 0 : $el.focus();
      }
      if (typeof command === "function") {
        command(editorState);
      } else if (command) {
        document.execCommand(command, false, commandArgument);
      }
      setTimeout(function() {
        return target.value = selectedValue;
      }, 10);
    }
  }
}
function Dropdown(_a) {
  var items = _a.items, selected = _a.selected, inputProps = __rest(_a, ["items", "selected"]);
  return React.createElement(
    "select",
    __assign({ className: "rsw-dd" }, inputProps, { value: selected }),
    React.createElement("option", { hidden: true }, inputProps.title),
    items.map(function(item, index) {
      return React.createElement("option", { key: item[2], value: index }, item[0]);
    })
  );
}
function HtmlButton(_a) {
  var rest = __rest(_a, []);
  var editorState = useEditorState();
  function onClick() {
    editorState.update({
      htmlMode: !editorState.htmlMode
    });
  }
  return React.createElement("button", __assign({ className: "rsw-btn", "data-active": editorState.htmlMode, onClick, tabIndex: -1, title: "HTML mode", type: "button" }, rest), "</>");
}
function Separator(props) {
  var editorState = useEditorState();
  if (editorState.htmlMode) {
    return null;
  }
  return React.createElement("div", __assign({ className: "rsw-separator" }, props));
}
function Toolbar(props) {
  return React.createElement("div", __assign({ className: "rsw-toolbar" }, props));
}
React.forwardRef(function DefaultEditor(props, ref) {
  return React.createElement(
    EditorProvider,
    null,
    React.createElement(Editor, __assign({}, props, { ref }), props.children || React.createElement(
      Toolbar,
      null,
      React.createElement(BtnUndo, null),
      React.createElement(BtnRedo, null),
      React.createElement(Separator, null),
      React.createElement(BtnBold, null),
      React.createElement(BtnItalic, null),
      React.createElement(BtnUnderline, null),
      React.createElement(BtnStrikeThrough, null),
      React.createElement(Separator, null),
      React.createElement(BtnNumberedList, null),
      React.createElement(BtnBulletList, null),
      React.createElement(Separator, null),
      React.createElement(BtnLink, null),
      React.createElement(BtnClearFormatting, null),
      React.createElement(HtmlButton, null),
      React.createElement(Separator, null),
      React.createElement(BtnStyles, null)
    ))
  );
});
const HtmlEditor = ({ fieldName, label, placeholder, errors, register, formData, optional, maxLength, onChange, type, pattern, minLength, autocomplete, step, disabled, max, labelFont, noLabel }) => {
  let errorsForField = errors?.[fieldName];
  let [error, setError] = reactExports.useState(errorsForField);
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors?.[fieldName]]);
  let isSubmemberError = fieldName.includes(".");
  let parentFieldName = fieldName.split(".")[0];
  let parentError = errors?.[parentFieldName];
  let subMember = parentError ? fieldName.split(".")[1] : null;
  reactExports.useEffect(() => {
    if (isSubmemberError) {
      let subMemberError = parentError?.[subMember];
      if (subMemberError) {
        setError(subMemberError);
      } else {
        setError("");
      }
    }
  }, [errors?.[parentFieldName], [errors?.[parentFieldName]?.[subMember]]]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: fieldName, className: classNames(labelFont ? labelFont : "block text-sm font-medium leading-6 ", error ? "text-danger" : "text-gray-900"), children: noLabel ? "" : label || fieldName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("relative rounded-md shadow-sm", disabled ? "" : "mt-2"), children: disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: classNames(
          type === "email" || type === "phone" ? "pl-7" : "pl-0",
          "block w-full py-1.5 sm:text-sm sm:leading-6",
          "text-gray-900   placeholder:text-gray-400 ring-gray-300 ",
          disabled ? "text-gray-500" : ""
        ),
        children: formData?.[fieldName] ?? "-"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditorProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Editor,
      {
        rows: 10,
        step: step || null,
        ...register(fieldName, {
          required: !optional,
          maxLength: maxLength || 200,
          pattern: pattern || null,
          minLength: minLength || 0,
          max: max || null
        }),
        disabled,
        value: formData?.[fieldName],
        onChange: (e2) => {
          if (onChange) {
            onChange(e2);
          }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BtnUndo, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BtnRedo, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BtnBold, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BtnItalic, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BtnUnderline, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BtnStrikeThrough, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BtnNumberedList, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BtnBulletList, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BtnLink, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BtnClearFormatting, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(HtmlButton, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BtnStyles, {})
        ] })
      }
    ) }) }) }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (() => {
      switch (error.type) {
        case "required": {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: label + " is required" });
        }
        case "maxLength": {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "Max length is " + maxLength });
        }
        case "max": {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "Value must be less or equal than " + max });
        }
        case "minLength": {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "Min length is " + minLength });
        }
        case "pattern": {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "Format of this field is not valid" });
        }
      }
    })() })
  ] });
};
export {
  HtmlEditor as default
};
