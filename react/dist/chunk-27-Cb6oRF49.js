import { R as React, r as reactExports } from "./main-B7w5eCOl.js";
import { m as murmur2 } from "./emotion-hash.esm-D28shAk1.js";
const __GLOBAL__ = typeof window === "undefined" ? global : window;
const __NAMESPACE_PREFIX__ = "@griffel/";
function getGlobalVar(name, defaultValue) {
  if (!__GLOBAL__[/* @__PURE__ */ Symbol.for(__NAMESPACE_PREFIX__ + name)]) {
    __GLOBAL__[/* @__PURE__ */ Symbol.for(__NAMESPACE_PREFIX__ + name)] = defaultValue;
  }
  return __GLOBAL__[/* @__PURE__ */ Symbol.for(__NAMESPACE_PREFIX__ + name)];
}
const DEFINITION_LOOKUP_TABLE = /* @__PURE__ */ getGlobalVar("DEFINITION_LOOKUP_TABLE", {});
const DATA_BUCKET_ATTR = "data-make-styles-bucket";
const DATA_PRIORITY_ATTR = "data-priority";
const SEQUENCE_HASH_LENGTH = 7;
const SEQUENCE_PREFIX = "___";
const SEQUENCE_SIZE = SEQUENCE_PREFIX.length + SEQUENCE_HASH_LENGTH;
const LOOKUP_DEFINITIONS_INDEX = 0;
const LOOKUP_DIR_INDEX = 1;
function padEndHash(value) {
  const hashLength = value.length;
  if (hashLength === SEQUENCE_HASH_LENGTH) {
    return value;
  }
  for (let i = hashLength; i < SEQUENCE_HASH_LENGTH; i++) {
    value += "0";
  }
  return value;
}
function hashSequence(classes, dir, sequenceIds = []) {
  {
    return SEQUENCE_PREFIX + padEndHash(murmur2(classes + dir));
  }
}
function reduceToClassName(classMap, dir) {
  let classString = "";
  let hashString = "";
  for (const propertyHash in classMap) {
    const classNameMapping = classMap[propertyHash];
    if (classNameMapping === 0) {
      hashString += propertyHash + " ";
      continue;
    }
    const hasRTLClassName = Array.isArray(classNameMapping);
    const className = dir === "rtl" ? (hasRTLClassName ? classNameMapping[1] : classNameMapping) + " " : (hasRTLClassName ? classNameMapping[0] : classNameMapping) + " ";
    classString += className;
    hashString += className;
  }
  return [classString.slice(0, -1), hashString.slice(0, -1)];
}
function reduceToClassNameForSlots(classesMapBySlot, dir) {
  const classNamesForSlots = {};
  for (const slotName in classesMapBySlot) {
    const [slotClasses, slotClassesHash] = reduceToClassName(classesMapBySlot[slotName], dir);
    if (slotClassesHash === "") {
      classNamesForSlots[slotName] = "";
      continue;
    }
    const sequenceHash = hashSequence(slotClassesHash, dir);
    const resultSlotClasses = sequenceHash + (slotClasses === "" ? "" : " " + slotClasses);
    DEFINITION_LOOKUP_TABLE[sequenceHash] = [classesMapBySlot[slotName], dir];
    classNamesForSlots[slotName] = resultSlotClasses;
  }
  return classNamesForSlots;
}
const mergeClassesCachedResults = {};
function mergeClasses() {
  let dir = null;
  let resultClassName = "";
  let sequenceMatch = "";
  const sequencesIds = new Array(arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    const className = arguments[i];
    if (typeof className === "string" && className !== "") {
      const sequenceIndex = className.indexOf(SEQUENCE_PREFIX);
      if (sequenceIndex === -1) {
        resultClassName += className + " ";
      } else {
        const sequenceId = className.substr(sequenceIndex, SEQUENCE_SIZE);
        if (sequenceIndex > 0) {
          resultClassName += className.slice(0, sequenceIndex);
        }
        sequenceMatch += sequenceId;
        sequencesIds[i] = sequenceId;
      }
    }
  }
  if (sequenceMatch === "") {
    return resultClassName.slice(0, -1);
  }
  const mergeClassesResult = mergeClassesCachedResults[sequenceMatch];
  if (mergeClassesResult !== void 0) {
    return resultClassName + mergeClassesResult;
  }
  const sequenceMappings = [];
  for (let i = 0; i < arguments.length; i++) {
    const sequenceId = sequencesIds[i];
    if (sequenceId) {
      const sequenceMapping = DEFINITION_LOOKUP_TABLE[sequenceId];
      if (sequenceMapping) {
        sequenceMappings.push(sequenceMapping[LOOKUP_DEFINITIONS_INDEX]);
        dir = sequenceMapping[LOOKUP_DIR_INDEX];
      }
    }
  }
  const resultClassesMap = Object.assign.apply(
    Object,
    // .assign() mutates the first object, we can't mutate mappings as it will produce invalid results later
    [{}].concat(sequenceMappings)
  );
  const [atomicClasses, classesMapHash] = reduceToClassName(resultClassesMap, dir);
  const newSequenceHash = hashSequence(classesMapHash, dir, sequencesIds);
  const newClassName = newSequenceHash + " " + atomicClasses;
  mergeClassesCachedResults[sequenceMatch] = newClassName;
  DEFINITION_LOOKUP_TABLE[newSequenceHash] = [resultClassesMap, dir];
  return resultClassName + newClassName;
}
function normalizeCSSBucketEntry(entry) {
  if (!Array.isArray(entry)) {
    return [entry];
  }
  return entry;
}
function createIsomorphicStyleSheet(styleElement, bucketName, priority, elementAttributes) {
  const __cssRulesForSSR = [];
  elementAttributes[DATA_BUCKET_ATTR] = bucketName;
  elementAttributes[DATA_PRIORITY_ATTR] = String(priority);
  if (styleElement) {
    for (const attrName in elementAttributes) {
      styleElement.setAttribute(attrName, elementAttributes[attrName]);
    }
  }
  function insertRule(rule) {
    if (styleElement === null || styleElement === void 0 ? void 0 : styleElement.sheet) {
      return styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
    }
    return __cssRulesForSSR.push(rule);
  }
  return {
    elementAttributes,
    insertRule,
    element: styleElement,
    bucketName,
    cssRules() {
      if (styleElement === null || styleElement === void 0 ? void 0 : styleElement.sheet) {
        return Array.from(styleElement.sheet.cssRules).map((cssRule) => cssRule.cssText);
      }
      return __cssRulesForSSR;
    }
  };
}
const styleBucketOrdering = [
  // reset styles
  "r",
  // catch-all
  "d",
  // link
  "l",
  // visited
  "v",
  // focus-within
  "w",
  // focus
  "f",
  // focus-visible
  "i",
  // hover
  "h",
  // active
  "a",
  // at rules for reset styles
  "s",
  // keyframes
  "k",
  // at-rules
  "t",
  // @media rules
  "m",
  // @container rules
  "c"
];
const styleBucketOrderingMap = /* @__PURE__ */ styleBucketOrdering.reduce((acc, cur, j) => {
  acc[cur] = j;
  return acc;
}, {});
function getStyleSheetKey(bucketName, media, priority) {
  return (bucketName === "m" ? bucketName + media : bucketName) + priority;
}
function getStyleSheetForBucket(bucketName, targetDocument, insertionPoint, renderer, metadata = {}) {
  var _a, _b;
  const isMediaBucket = bucketName === "m";
  const media = (_a = metadata["m"]) !== null && _a !== void 0 ? _a : "0";
  const priority = (_b = metadata["p"]) !== null && _b !== void 0 ? _b : 0;
  const stylesheetKey = getStyleSheetKey(bucketName, media, priority);
  if (!renderer.stylesheets[stylesheetKey]) {
    const tag = targetDocument && targetDocument.createElement("style");
    const stylesheet = createIsomorphicStyleSheet(tag, bucketName, priority, Object.assign({}, renderer.styleElementAttributes, isMediaBucket && {
      media
    }));
    renderer.stylesheets[stylesheetKey] = stylesheet;
    if ((targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.head) && tag) {
      targetDocument.head.insertBefore(tag, findInsertionPoint(targetDocument, insertionPoint, bucketName, renderer, metadata));
    }
  }
  return renderer.stylesheets[stylesheetKey];
}
function isSameInsertionKey(element, bucketName, metadata) {
  var _a, _b;
  const targetKey = bucketName + ((_a = metadata["m"]) !== null && _a !== void 0 ? _a : "");
  const elementKey = element.getAttribute(DATA_BUCKET_ATTR) + ((_b = element.media) !== null && _b !== void 0 ? _b : "");
  return targetKey === elementKey;
}
function findInsertionPoint(targetDocument, insertionPoint, targetBucket, renderer, metadata = {}) {
  var _a, _b;
  const targetOrder = styleBucketOrderingMap[targetBucket];
  const media = (_a = metadata["m"]) !== null && _a !== void 0 ? _a : "";
  const priority = (_b = metadata["p"]) !== null && _b !== void 0 ? _b : 0;
  let comparer = (el) => targetOrder - styleBucketOrderingMap[el.getAttribute(DATA_BUCKET_ATTR)];
  let styleElements = targetDocument.head.querySelectorAll(`[${DATA_BUCKET_ATTR}]`);
  if (targetBucket === "m") {
    const mediaElements = targetDocument.head.querySelectorAll(`[${DATA_BUCKET_ATTR}="${targetBucket}"]`);
    if (mediaElements.length) {
      styleElements = mediaElements;
      comparer = (el) => renderer.compareMediaQueries(media, el.media);
    }
  }
  const comparerWithPriority = (el) => {
    if (isSameInsertionKey(el, targetBucket, metadata)) {
      return priority - Number(el.getAttribute("data-priority"));
    }
    return comparer(el);
  };
  const length = styleElements.length;
  let index = length - 1;
  while (index >= 0) {
    const styleElement = styleElements.item(index);
    if (comparerWithPriority(styleElement) > 0) {
      return styleElement.nextSibling;
    }
    index--;
  }
  if (length > 0) {
    return styleElements.item(0);
  }
  return insertionPoint ? insertionPoint.nextSibling : null;
}
function safeInsertRule(sheet, ruleCSS) {
  try {
    sheet.insertRule(ruleCSS);
  } catch (e) {
  }
}
let lastIndex = 0;
const defaultCompareMediaQueries = (a, b) => a < b ? -1 : a > b ? 1 : 0;
function createDOMRenderer(targetDocument = typeof document === "undefined" ? void 0 : document, options = {}) {
  const {
    classNameHashSalt,
    unstable_filterCSSRule,
    insertionPoint,
    styleElementAttributes,
    compareMediaQueries = defaultCompareMediaQueries
  } = options;
  const renderer = {
    classNameHashSalt,
    insertionCache: {},
    stylesheets: {},
    styleElementAttributes: Object.freeze(styleElementAttributes),
    compareMediaQueries,
    id: `d${lastIndex++}`,
    insertCSSRules(cssRules) {
      for (const styleBucketName in cssRules) {
        const cssRulesForBucket = cssRules[styleBucketName];
        for (let i = 0, l = cssRulesForBucket.length; i < l; i++) {
          const [ruleCSS, metadata] = normalizeCSSBucketEntry(cssRulesForBucket[i]);
          const sheet = getStyleSheetForBucket(styleBucketName, targetDocument, insertionPoint || null, renderer, metadata);
          if (renderer.insertionCache[ruleCSS]) {
            continue;
          }
          renderer.insertionCache[ruleCSS] = styleBucketName;
          if (unstable_filterCSSRule) {
            if (unstable_filterCSSRule(ruleCSS)) {
              safeInsertRule(sheet, ruleCSS);
            }
          } else {
            safeInsertRule(sheet, ruleCSS);
          }
        }
      }
    }
  };
  return renderer;
}
const insertionFactory$1 = () => {
  const insertionCache = {};
  return function insertStyles(renderer, cssRules) {
    if (insertionCache[renderer.id] === void 0) {
      renderer.insertCSSRules(cssRules);
      insertionCache[renderer.id] = true;
    }
  };
};
function __styles$1(classesMapBySlot, cssRules, factory = insertionFactory$1) {
  const insertStyles = factory();
  let ltrClassNamesForSlots = null;
  let rtlClassNamesForSlots = null;
  function computeClasses(options) {
    const {
      dir,
      renderer
    } = options;
    const isLTR = dir === "ltr";
    if (isLTR) {
      if (ltrClassNamesForSlots === null) {
        ltrClassNamesForSlots = reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    } else {
      if (rtlClassNamesForSlots === null) {
        rtlClassNamesForSlots = reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    }
    insertStyles(renderer, cssRules);
    const classNamesForSlots = isLTR ? ltrClassNamesForSlots : rtlClassNamesForSlots;
    return classNamesForSlots;
  }
  return computeClasses;
}
function canUseDOM() {
  return typeof window !== "undefined" && !!(window.document && window.document.createElement);
}
const useInsertionEffect = (
  // @ts-expect-error Hack to make sure that `useInsertionEffect` will not cause bundling issues in older React versions
  // eslint-disable-next-line no-useless-concat
  React["useInsertionEffect"] ? React["useInsertionEffect"] : void 0
);
const insertionFactory = () => {
  const insertionCache = {};
  return function insert(renderer, cssRules) {
    if (useInsertionEffect && canUseDOM()) {
      useInsertionEffect(() => {
        renderer.insertCSSRules(cssRules);
      }, [renderer, cssRules]);
      return;
    }
    if (insertionCache[renderer.id] === void 0) {
      renderer.insertCSSRules(cssRules);
      insertionCache[renderer.id] = true;
    }
  };
};
const RendererContext = /* @__PURE__ */ reactExports.createContext(/* @__PURE__ */ createDOMRenderer());
function useRenderer() {
  return reactExports.useContext(RendererContext);
}
const TextDirectionContext = /* @__PURE__ */ reactExports.createContext("ltr");
function useTextDirection() {
  return reactExports.useContext(TextDirectionContext);
}
function __styles(classesMapBySlot, cssRules) {
  const getStyles = __styles$1(classesMapBySlot, cssRules, insertionFactory);
  return function useClasses() {
    const dir = useTextDirection();
    const renderer = useRenderer();
    return getStyles({
      dir,
      renderer
    });
  };
}
const IconDirectionContext = reactExports.createContext(void 0);
const IconDirectionContextDefaultValue = {};
IconDirectionContext.Provider;
const useIconContext = () => {
  const context = reactExports.useContext(IconDirectionContext);
  return context !== null && context !== void 0 ? context : IconDirectionContextDefaultValue;
};
const useStyles = __styles({
  "root": {
    "mc9l5x": "f1w7gpdv",
    "Bg96gwp": "fez10in"
  },
  "rtl": {
    "Bz10aip": "f13rod7r"
  }
}, {
  "d": [".f1w7gpdv{display:inline;}", ".fez10in{line-height:0;}", ".f13rod7r{transform:scaleX(-1);}"]
});
const useIconState = (props, options) => {
  const { title, primaryFill = "currentColor", ...rest } = props;
  const state = {
    ...rest,
    title: void 0,
    fill: primaryFill
  };
  const styles = useStyles();
  const iconContext = useIconContext();
  state.className = mergeClasses(styles.root, (options === null || options === void 0 ? void 0 : options.flipInRtl) && (iconContext === null || iconContext === void 0 ? void 0 : iconContext.textDirection) === "rtl" && styles.rtl, state.className);
  if (title) {
    state["aria-label"] = title;
  }
  if (!state["aria-label"] && !state["aria-labelledby"]) {
    state["aria-hidden"] = true;
  } else {
    state["role"] = "img";
  }
  return state;
};
const useRootStyles = __styles({
  "root": {
    "B8gzw0y": "f1dd5bof"
  }
}, {
  "m": [["@media (forced-colors: active){.f1dd5bof{forced-color-adjust:auto;}}", {
    "m": "(forced-colors: active)"
  }]]
});
const createFluentIcon = (displayName, width, pathsOrSvg, options) => {
  const viewBoxWidth = width === "1em" ? "20" : width;
  const Icon = reactExports.forwardRef((props, ref) => {
    const styles = useRootStyles();
    const iconState = useIconState(props, { flipInRtl: options === null || options === void 0 ? void 0 : options.flipInRtl });
    const state = {
      ...iconState,
      className: mergeClasses(iconState.className, styles.root),
      ref,
      width,
      height: width,
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
      xmlns: "http://www.w3.org/2000/svg"
    };
    if (typeof pathsOrSvg === "string") {
      return reactExports.createElement("svg", { ...state, dangerouslySetInnerHTML: { __html: pathsOrSvg } });
    } else {
      return reactExports.createElement("svg", state, ...pathsOrSvg.map((d) => reactExports.createElement("path", { d, fill: state.fill })));
    }
  });
  Icon.displayName = displayName;
  return Icon;
};
const CalendarLtr24Filled = /* @__PURE__ */ createFluentIcon("CalendarLtr24Filled", "24", ["M21 8.5v9.25c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V8.5h18ZM7.25 15a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 15a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-4.75-4.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4.75 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4.75 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm1-7.5C19.55 3 21 4.46 21 6.25V7H3v-.75C3 4.45 4.46 3 6.25 3h11.5Z"]);
const CalendarLtr24Regular = /* @__PURE__ */ createFluentIcon("CalendarLtr24Regular", "24", ["M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5Zm1.75 5.5h-15v9.25c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75V8.5Zm-11.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-4.25-4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm1.5-6H6.25c-.97 0-1.75.78-1.75 1.75V7h15v-.75c0-.97-.78-1.75-1.75-1.75Z"]);
const Mail24Filled = /* @__PURE__ */ createFluentIcon("Mail24Filled", "24", ["M22 8.6v8.15a3.25 3.25 0 0 1-3.07 3.24l-.18.01H5.25a3.25 3.25 0 0 1-3.24-3.07L2 16.75V8.61l9.65 5.05c.22.12.48.12.7 0L22 8.61ZM5.25 4h13.5a3.25 3.25 0 0 1 3.23 2.92L12 12.15 2.02 6.92a3.25 3.25 0 0 1 3.04-2.91L5.25 4h13.5-13.5Z"]);
const Mail24Regular = /* @__PURE__ */ createFluentIcon("Mail24Regular", "24", ["M5.25 4h13.5a3.25 3.25 0 0 1 3.24 3.07l.01.18v9.5a3.25 3.25 0 0 1-3.07 3.24l-.18.01H5.25a3.25 3.25 0 0 1-3.24-3.07L2 16.75v-9.5a3.25 3.25 0 0 1 3.07-3.24L5.25 4h13.5-13.5ZM20.5 9.37l-8.15 4.3c-.19.1-.4.1-.6.04l-.1-.05L3.5 9.37v7.38c0 .92.7 1.67 1.6 1.74l.15.01h13.5c.92 0 1.67-.7 1.74-1.6l.01-.15V9.37ZM18.75 5.5H5.25c-.92 0-1.67.7-1.74 1.6l-.01.15v.43l8.5 4.47 8.5-4.47v-.43c0-.92-.7-1.67-1.6-1.74l-.15-.01Z"]);
const ProjectionScreen24Filled = /* @__PURE__ */ createFluentIcon("ProjectionScreen24Filled", "24", ["M3.5 3A1.5 1.5 0 0 0 3 5.91v7.34A3.75 3.75 0 0 0 6.75 17h4.5v2.5h-3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.5V17h4.5A3.75 3.75 0 0 0 21 13.25V5.91A1.5 1.5 0 0 0 20.5 3h-17Z"]);
const Search24Regular = /* @__PURE__ */ createFluentIcon("Search24Regular", "24", ["M16.1 17.16a8 8 0 1 1 1.06-1.06l4.62 4.62a.75.75 0 1 1-1.06 1.06l-4.62-4.62ZM17.5 11a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"]);
const DocumentAdd24Regular = /* @__PURE__ */ createFluentIcon("DocumentAdd24Regular", "24", ["M18.5 20a.5.5 0 0 1-.5.5h-5.73a6.52 6.52 0 0 1-1.08 1.5H18a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L13.6 2.6a.5.5 0 0 0-.05-.04 2.07 2.07 0 0 0-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 0 0-.08-.01H6a2 2 0 0 0-2 2v7.5c.47-.2.98-.34 1.5-.42V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v10Zm-5-15.38 3.88 3.88H14a.5.5 0 0 1-.5-.5V4.62ZM12 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM7 18v2.5a.5.5 0 1 1-1 0V18H3.5a.5.5 0 0 1 0-1H6v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H7Z"]);
const DocumentBulletList24Filled = /* @__PURE__ */ createFluentIcon("DocumentBulletList24Filled", "24", ["M12 8V2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2Zm-5 4.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm0 3a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm0 3a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm3-6c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 3c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 3c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM13.5 8V2.5l6 6H14a.5.5 0 0 1-.5-.5Z"]);
const DocumentTable24Filled = /* @__PURE__ */ createFluentIcon("DocumentTable24Filled", "24", ["M8.5 13.25c0-.14.11-.25.25-.25H10v1.5H8.5v-1.25Zm0 2.75H10v1.5H8.75a.25.25 0 0 1-.25-.25V16Zm7 1.25V16h-4v1.5h3.75c.14 0 .25-.11.25-.25Zm-4-4.25v1.5h4v-1.25a.25.25 0 0 0-.25-.25H11.5Zm.5-5V2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2Zm-3.25 3.5h6.5c.97 0 1.75.78 1.75 1.75v4c0 .97-.78 1.75-1.75 1.75h-6.5C7.78 19 7 18.22 7 17.25v-4c0-.97.78-1.75 1.75-1.75ZM13.5 8V2.5l6 6H14a.5.5 0 0 1-.5-.5Z"]);
const Ribbon24Filled = /* @__PURE__ */ createFluentIcon("Ribbon24Filled", "24", ["M17 15.24v6c0 .61-.68.97-1.18.62L12 19.17l-3.82 2.69A.75.75 0 0 1 7 21.25v-6a7.97 7.97 0 0 0 10 0ZM12 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z"]);
const Settings24Filled = /* @__PURE__ */ createFluentIcon("Settings24Filled", "24", ["M12.01 2.25c.74 0 1.47.1 2.18.25.32.07.55.33.59.65l.17 1.53a1.38 1.38 0 0 0 1.92 1.11l1.4-.61c.3-.13.64-.06.85.17a9.8 9.8 0 0 1 2.2 3.8c.1.3 0 .63-.26.82l-1.25.92a1.38 1.38 0 0 0 0 2.22l1.25.92c.26.19.36.52.27.82a9.8 9.8 0 0 1-2.2 3.8.75.75 0 0 1-.85.17l-1.4-.62a1.38 1.38 0 0 0-1.93 1.12l-.17 1.52a.75.75 0 0 1-.58.65 9.52 9.52 0 0 1-4.4 0 .75.75 0 0 1-.57-.65l-.17-1.52a1.38 1.38 0 0 0-1.93-1.11l-1.4.62a.75.75 0 0 1-.85-.18 9.8 9.8 0 0 1-2.2-3.8c-.1-.3 0-.63.26-.82l1.25-.92a1.38 1.38 0 0 0 0-2.22l-1.24-.92a.75.75 0 0 1-.28-.82 9.8 9.8 0 0 1 2.2-3.8c.23-.23.57-.3.86-.17l1.4.62c.4.17.86.15 1.25-.08.38-.22.63-.6.68-1.04l.17-1.53a.75.75 0 0 1 .58-.65c.72-.16 1.45-.24 2.2-.25ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"]);
const Settings24Regular = /* @__PURE__ */ createFluentIcon("Settings24Regular", "24", ["M12.01 2.25c.74 0 1.47.1 2.18.25.32.07.55.33.59.65l.17 1.53a1.38 1.38 0 0 0 1.92 1.11l1.4-.61c.3-.13.64-.06.85.17a9.8 9.8 0 0 1 2.2 3.8c.1.3 0 .63-.26.82l-1.25.92a1.38 1.38 0 0 0 0 2.22l1.25.92c.26.19.36.52.27.82a9.8 9.8 0 0 1-2.2 3.8.75.75 0 0 1-.85.17l-1.4-.62a1.38 1.38 0 0 0-1.93 1.12l-.17 1.52a.75.75 0 0 1-.58.65 9.52 9.52 0 0 1-4.4 0 .75.75 0 0 1-.57-.65l-.17-1.52a1.38 1.38 0 0 0-1.93-1.11l-1.4.62a.75.75 0 0 1-.85-.18 9.8 9.8 0 0 1-2.2-3.8c-.1-.3 0-.63.26-.82l1.25-.92a1.38 1.38 0 0 0 0-2.22l-1.24-.92a.75.75 0 0 1-.28-.82 9.8 9.8 0 0 1 2.2-3.8c.23-.23.57-.3.86-.17l1.4.62c.4.17.86.15 1.25-.08.38-.22.63-.6.68-1.04l.17-1.53a.75.75 0 0 1 .58-.65c.72-.16 1.45-.24 2.2-.25Zm0 1.5c-.45 0-.9.04-1.35.12l-.11.97a2.89 2.89 0 0 1-4.03 2.33l-.9-.4A8.3 8.3 0 0 0 4.29 9.1l.8.59a2.88 2.88 0 0 1 0 4.64l-.8.59a8.3 8.3 0 0 0 1.35 2.32l.9-.4a2.88 2.88 0 0 1 4.02 2.32l.1.99c.9.15 1.8.15 2.7 0l.1-.99a2.88 2.88 0 0 1 4.02-2.32l.9.4a8.3 8.3 0 0 0 1.35-2.32l-.8-.59a2.88 2.88 0 0 1 0-4.64l.8-.59a8.3 8.3 0 0 0-1.35-2.32l-.9.4a2.88 2.88 0 0 1-4.02-2.32l-.1-.98c-.45-.08-.9-.11-1.34-.12ZM12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"]);
const PaintBrush24Filled = /* @__PURE__ */ createFluentIcon("PaintBrush24Filled", "24", ["M12.5 2v3.25a.75.75 0 0 0 1.5 0V2h1v4.25a.75.75 0 0 0 1.5 0V2h1.75c.41 0 .75.34.75.75V11H5V2.75c0-.41.34-.75.75-.75h6.75ZM5 12.5v1.75c0 1.24 1 2.25 2.25 2.25H10V20a2 2 0 1 0 4 0v-3.5h2.75c1.24 0 2.25-1 2.25-2.25V12.5H5Z"]);
const Person24Regular = /* @__PURE__ */ createFluentIcon("Person24Regular", "24", ["M17.75 14C19 14 20 15 20 16.25v.57c0 .9-.32 1.76-.9 2.44C17.53 21.1 15.15 22 12 22c-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 0 1-.9-2.43v-.58C4 15 5.01 14 6.25 14h11.5Zm0 1.5H6.25a.75.75 0 0 0-.75.75v.58c0 .53.2 1.05.54 1.46C7.3 19.76 9.26 20.5 12 20.5c2.74 0 4.7-.74 5.96-2.21.35-.41.54-.93.54-1.47v-.57a.75.75 0 0 0-.75-.75ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"]);
const PersonAccounts24Filled = /* @__PURE__ */ createFluentIcon("PersonAccounts24Filled", "24", ["M13 14.05V14H4.25C3.01 14 2 15 2 16.25v.92c0 .57.18 1.13.51 1.6C4.06 20.92 6.58 22 10 22c.36 0 .7-.01 1.04-.03-.03-.15-.04-.31-.04-.47v-5c0-1.2.86-2.22 2-2.45ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm4 13h-.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H21v-1.25c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75V15Zm1.5-1.25c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25V15h-4v-1.25Z"]);
const PersonCircle24Filled = /* @__PURE__ */ createFluentIcon("PersonCircle24Filled", "24", ["M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm5-8.5c0-.83-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5Zm-2.25-5.25a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Z"]);
const LockClosed24Regular = /* @__PURE__ */ createFluentIcon("LockClosed24Regular", "24", ["M12 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 6a4 4 0 1 1 8 0v1h.75C18.55 7 20 8.46 20 10.25v7.5c0 1.8-1.46 3.25-3.25 3.25h-9.5A3.25 3.25 0 0 1 4 17.75v-7.5C4 8.45 5.46 7 7.25 7H8V6Zm4-2.5A2.5 2.5 0 0 0 9.5 6v1h5V6A2.5 2.5 0 0 0 12 3.5Zm-4.75 5c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75h9.5c.97 0 1.75-.78 1.75-1.75v-7.5c0-.97-.78-1.75-1.75-1.75h-9.5Z"]);
const Navigation24Filled = /* @__PURE__ */ createFluentIcon("Navigation24Filled", "24", ["M3 17h18a1 1 0 0 1 .12 2H3a1 1 0 0 1-.12-2H21 3Zm0-6h18a1 1 0 0 1 .12 2H3a1 1 0 0 1-.12-2H21 3Zm0-6h18a1 1 0 0 1 .12 2H3a1 1 0 0 1-.12-2H21 3Z"]);
const ArrowDownload24Filled = /* @__PURE__ */ createFluentIcon("ArrowDownload24Filled", "24", ["M13 3a1 1 0 1 0-2 0v12.09l-3.3-3.3a1 1 0 0 0-1.4 1.42l5 5a1 1 0 0 0 1.4 0l5-5a1 1 0 0 0-1.4-1.42L13 15.1V3ZM5 20a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"]);
const ArrowUpload24Filled = /* @__PURE__ */ createFluentIcon("ArrowUpload24Filled", "24", ["M5.5 2a1 1 0 0 0 0 2h13a1 1 0 1 0 0-2h-13Zm7.2 3.8a1 1 0 0 0-1.4 0l-5 5a1 1 0 1 0 1.4 1.4L11 8.92V21a1 1 0 1 0 2 0V8.91l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z"]);
const ShieldCheckmark24Regular = /* @__PURE__ */ createFluentIcon("ShieldCheckmark24Regular", "24", ["M3 5.75c0-.41.34-.75.75-.75 2.66 0 5.26-.94 7.8-2.85.27-.2.63-.2.9 0C14.99 4.05 17.59 5 20.25 5c.41 0 .75.34.75.75V11c0 .34-.01.67-.04 1a6.47 6.47 0 0 0-1.46-.69V6.48a14.36 14.36 0 0 1-7.5-2.8 14.36 14.36 0 0 1-7.5 2.8V11c0 4.15 2.33 7.22 7.13 9.28.26.56.6 1.07 1 1.52l-.36.15a.75.75 0 0 1-.54 0C5.96 19.68 3 16 3 11V5.75ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7Z"]);
const ShieldTask24Filled = /* @__PURE__ */ createFluentIcon("ShieldTask24Filled", "24", ["M20.25 5c-2.66 0-5.26-.94-7.8-2.85a.75.75 0 0 0-.9 0C9.01 4.05 6.41 5 3.75 5a.75.75 0 0 0-.75.75V11c0 5 2.96 8.68 8.73 10.95.17.07.37.07.54 0C18.04 19.68 21 16 21 11V5.75a.75.75 0 0 0-.75-.75Zm-3.5 4.3-6 5.5a.75.75 0 0 1-1.03-.02l-2.5-2.5a.75.75 0 1 1 1.06-1.06l2 2 5.46-5.02a.75.75 0 0 1 1.02 1.1Z"]);
const ClipboardPulse24Filled = /* @__PURE__ */ createFluentIcon("ClipboardPulse24Filled", "24", ["M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25V13h-2.26l-.99-1.65a1.75 1.75 0 0 0-3.07.12l-.5 1.02-1.25-4.23a1.75 1.75 0 0 0-3.25-.3L6.17 13H4V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm3 13H20v3.25c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V16.5h3.25c.66 0 1.27-.37 1.57-.97l1-2.02 1.25 4.23a1.75 1.75 0 0 0 3.25.3l1.08-2.18c.33.4.82.64 1.35.64Zm-5.78-7.96a.75.75 0 0 0-1.4-.13L6.8 14H2.75a.75.75 0 0 0 0 1.5h4.5c.28 0 .54-.16.67-.41l2.15-4.3 1.96 6.67a.75.75 0 0 0 1.4.13l1.88-3.78.8 1.33c.13.22.38.36.64.36h4.5a.75.75 0 0 0 0-1.5h-4.08l-1.28-2.14a.75.75 0 0 0-1.31.05l-1.65 3.3-1.96-6.67Z"]);
const ClipboardTaskListLtr24Filled = /* @__PURE__ */ createFluentIcon("ClipboardTaskListLtr24Filled", "24", ["M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 0 0-2.24-2Zm-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Zm2.25 6.75c0-.41.34-.75.75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm.75 4.75h3.5a.75.75 0 1 1 0 1.5h-3.5a.75.75 0 1 1 0-1.5Zm-2.47-5.22-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47a.75.75 0 1 1 1.06 1.06Zm0 4.44c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0Z"]);
const People24Filled = /* @__PURE__ */ createFluentIcon("People24Filled", "24", ["M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 14C3.01 14 2 15 2 16.25v.25S2 21 8 21s6-4.5 6-4.5v-.25c0-1.24-1-2.25-2.25-2.25h-7.5ZM17 19.5a7.33 7.33 0 0 1-2.75-.46 5.5 5.5 0 0 0 .75-2.49v-.3c0-.87-.34-1.66-.9-2.25H19.8c1.22 0 2.2.98 2.2 2.2 0 0 0 3.3-5 3.3Z"]);
const People24Regular = /* @__PURE__ */ createFluentIcon("People24Regular", "24", ["M5.5 8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-2.75 13.04c.7.28 1.6.46 2.75.46 2.28 0 3.59-.7 4.3-1.56a3.14 3.14 0 0 0 .7-1.73v-.03c0-1.2-.97-2.18-2.18-2.18H14.1c.4.41.68.93.81 1.5h4.91a.68.68 0 0 1 .68.7l-.04.18c-.04.16-.13.38-.32.6C19.8 17.42 18.97 18 17 18c-.98 0-1.67-.15-2.17-.34-.1.4-.28.88-.58 1.38ZM4.25 14C3.01 14 2 15 2 16.25v.28a2.07 2.07 0 0 0 .01.2c.02.14.04.32.1.53.09.42.29.98.68 1.55C3.61 19.97 5.17 21 8 21s4.39-1.03 5.2-2.2a4.48 4.48 0 0 0 .8-2.27v-.28c0-1.24-1-2.25-2.25-2.25h-7.5Zm-.75 2.5v-.25c0-.41.34-.75.75-.75h7.5c.41 0 .75.34.75.75v.34l-.06.33c-.07.28-.2.65-.46 1.02-.5.71-1.56 1.56-3.98 1.56s-3.49-.85-3.98-1.56a2.99 2.99 0 0 1-.52-1.43Z"]);
const PeopleTeam24Filled = /* @__PURE__ */ createFluentIcon("PeopleTeam24Filled", "24", ["M14.75 10c.97 0 1.75.78 1.75 1.75v4.75a4.5 4.5 0 0 1-9 0v-4.75c0-.97.79-1.75 1.75-1.75h5.5Zm-7.62 0c-.35.42-.57.95-.62 1.53v4.97c0 .85.18 1.65.52 2.36A4 4 0 0 1 2 15v-3.24c0-.92.7-1.67 1.6-1.74l.15-.01h3.38Zm9.74 0h3.38c.97 0 1.75.78 1.75 1.75V15a4 4 0 0 1-5.03 3.87c.3-.63.48-1.32.53-2.06v-5.06c0-.67-.23-1.28-.63-1.75ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm6.5 1a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"]);
const PeopleTeam24Regular = /* @__PURE__ */ createFluentIcon("PeopleTeam24Regular", "24", ["M14.75 10c.97 0 1.75.78 1.75 1.75v4.75a4.5 4.5 0 0 1-9 0v-4.75c0-.97.79-1.75 1.75-1.75h5.5Zm0 1.5h-5.5a.25.25 0 0 0-.25.25v4.75a3 3 0 0 0 6 0v-4.75a.25.25 0 0 0-.25-.25Zm-11-1.5h3.38c-.34.41-.57.93-.62 1.5H3.75a.25.25 0 0 0-.25.25V15a2.5 2.5 0 0 0 3.08 2.43c.09.5.24.99.45 1.43A4 4 0 0 1 2 15v-3.24c0-.97.78-1.75 1.75-1.75Zm13.12 0h3.38c.97 0 1.75.78 1.75 1.75V15a4 4 0 0 1-5.03 3.87c.21-.45.37-.93.46-1.44A2.5 2.5 0 0 0 20.5 15v-3.25a.25.25 0 0 0-.25-.25h-2.76a2.74 2.74 0 0 0-.62-1.5ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm6.5 1a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm6.5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-13 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"]);
const Phone24Regular = /* @__PURE__ */ createFluentIcon("Phone24Regular", "24", ["M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5Zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V4.25a.75.75 0 0 0-.75-.75Zm-2.5 14a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5h2.5Z"]);
export {
  ArrowDownload24Filled as A,
  CalendarLtr24Regular as C,
  DocumentAdd24Regular as D,
  LockClosed24Regular as L,
  Mail24Regular as M,
  Navigation24Filled as N,
  Phone24Regular as P,
  Ribbon24Filled as R,
  ShieldCheckmark24Regular as S,
  Person24Regular as a,
  PeopleTeam24Regular as b,
  createFluentIcon as c,
  People24Regular as d,
  Settings24Regular as e,
  Search24Regular as f,
  PersonAccounts24Filled as g,
  ClipboardTaskListLtr24Filled as h,
  ProjectionScreen24Filled as i,
  DocumentTable24Filled as j,
  ClipboardPulse24Filled as k,
  PeopleTeam24Filled as l,
  DocumentBulletList24Filled as m,
  PersonCircle24Filled as n,
  People24Filled as o,
  PaintBrush24Filled as p,
  CalendarLtr24Filled as q,
  ArrowUpload24Filled as r,
  Mail24Filled as s,
  Settings24Filled as t,
  ShieldTask24Filled as u
};
