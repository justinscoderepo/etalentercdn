import { e as useAdvancedSettings, f as getAllThemes, j as jsxRuntimeExports, h as applyTheme } from "./main-B7w5eCOl.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { F as ForwardRef } from "./CheckCircleIcon-B36U4EaE.js";
const ThemeSettings = ({ isCondensedView = false }) => {
  const { advancedSettings, updateSetting } = useAdvancedSettings();
  const currentTheme = advancedSettings?.theme || "default";
  const themes = getAllThemes();
  const handleThemeSelect = (themeKey) => {
    applyTheme(themeKey);
    updateSetting("theme", themeKey);
  };
  const lightThemes = themes.filter((t) => t.variant === "light");
  const darkThemes = themes.filter((t) => t.variant === "dark");
  const classicThemes = themes.filter((t) => t.variant === "classic");
  const ThemeCard = ({ theme, isCondensed = false }) => {
    const isActive = currentTheme === theme.key;
    const isDark = theme.variant === "dark";
    const isClassic = theme.variant === "classic";
    if (isCondensed) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: () => handleThemeSelect(theme.key),
          className: `
            relative p-3 rounded-lg border cursor-pointer transition-all duration-200
            ${isActive ? "border-primary ring-2 ring-primary/20 shadow-md" : isDark || isClassic ? "border-sidebarBorder hover:border-primary hover:shadow-md" : "border-border hover:border-primary hover:shadow-md"}
            ${isDark || isClassic ? "bg-sidebarBg" : "bg-contentBgOuter"}
          `,
          children: [
            isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1.5 right-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-4 w-4 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-semibold truncate ${isDark || isClassic ? "text-sidebarText" : "text-onSurface"}`, children: theme.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[10px] px-1.5 py-0.5 rounded font-medium ${isDark || isClassic ? "bg-sidebarHover text-sidebarTextMuted" : "bg-surfaceCard text-onSurfaceVariant"}`,
                  children: theme.variant.toUpperCase()
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: theme.preview.slice(0, 5).map((color, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-1 h-6 rounded",
                style: { backgroundColor: color },
                title: color
              },
              idx
            )) })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onClick: () => handleThemeSelect(theme.key),
        className: `
          relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
          ${isActive ? isDark || isClassic ? "border-primary shadow-lg" : "border-primary shadow-lg bg-primaryContainer" : isDark || isClassic ? "border-sidebarBorder hover:border-primary hover:shadow-md" : "border-border hover:border-primary hover:shadow-md bg-contentBgOuter"}
          ${isDark || isClassic ? "bg-sidebarBg" : "bg-contentBgOuter"} // Dark card background for dark/classic themes
        `,
        children: [
          isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: `h-6 w-6 ${isDark || isClassic ? "text-sidebarText" : "text-primary"}` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-base font-semibold mb-1 ${isDark || isClassic ? "text-sidebarText" : "text-onSurface"}`, children: theme.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-xs px-2 py-0.5 rounded font-medium ${isDark || isClassic ? "bg-sidebarHover text-sidebarText" : "bg-surfaceCard text-onSurfaceVariant"}`,
                  children: theme.variant.toUpperCase()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs ${isDark || isClassic ? "text-sidebarTextMuted" : "text-onSurfaceVariant"}`, children: theme.style })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: theme.preview.map((color, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex-1 h-12 rounded",
              style: { backgroundColor: color },
              title: color
            },
            idx
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `mt-3 pt-3 ${isDark || isClassic ? "border-t border-sidebarBorder" : "border-t border-border"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-3 gap-y-2 text-xs", children: Object.entries(theme.colors).map(([colorName, colorValue]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: isDark || isClassic ? "text-sidebarTextMuted" : "text-onSurfaceVariant", children: [
                  colorName.replace(/([A-Z])/g, " $1").trim(),
                  ":"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-3.5 h-3.5 rounded flex-shrink-0 ${isDark || isClassic ? "border border-sidebarBorder" : "border border-border"}`,
                      style: { backgroundColor: colorValue },
                      title: colorValue
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `font-mono text-[10px] ${isDark || isClassic ? "text-sidebarText" : "text-onSurface"}`,
                      children: colorValue
                    }
                  )
                ] })
              ] }, colorName)) })
            }
          )
        ]
      }
    );
  };
  if (isCondensedView) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-surfaceCard rounded-lg border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-onSurfaceVariant mb-1", children: "Currently Active" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-onSurface", children: themes.find((t) => t.key === currentTheme)?.name || "White Zinc" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-onSurface mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-1 h-4 bg-primary rounded" }),
          "Light Themes (",
          lightThemes.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: lightThemes.map((theme) => /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeCard, { theme, isCondensed: true }, theme.key)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-onSurface mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-1 h-4 bg-primary rounded" }),
          "Dark Themes (",
          darkThemes.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: darkThemes.map((theme) => /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeCard, { theme, isCondensed: true }, theme.key)) })
      ] }),
      classicThemes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-onSurface mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-1 h-4 bg-primary rounded" }),
          "Classic Themes (",
          classicThemes.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: classicThemes.map((theme) => /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeCard, { theme, isCondensed: true }, theme.key)) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Theme Settings",
        subHeading: "Choose your preferred color theme. Changes apply instantly."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-contentBgOuter rounded-lg p-6 mt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 p-4 bg-surfaceCard rounded-lg border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant mb-1", children: "Currently Active Theme" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-onSurface", children: themes.find((t) => t.key === currentTheme)?.name || "White Zinc" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: themes.find((t) => t.key === currentTheme)?.preview.map((color, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-10 h-10 rounded-lg border-2 border-border",
            style: { backgroundColor: color }
          },
          idx
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-onSurface mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-1 h-5 bg-primary rounded" }),
          "Light Themes (",
          lightThemes.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: lightThemes.map((theme) => /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeCard, { theme, isCondensed: false }, theme.key)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-onSurface mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-1 h-5 bg-primary rounded" }),
          "Dark Themes (",
          darkThemes.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: darkThemes.map((theme) => /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeCard, { theme, isCondensed: false }, theme.key)) })
      ] }),
      classicThemes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-onSurface mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-1 h-5 bg-primary rounded" }),
          "Classic Themes (",
          classicThemes.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant mb-4", children: "Classic themes use colored sidebars and headers while keeping content areas white for maximum readability." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: classicThemes.map((theme) => /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeCard, { theme, isCondensed: false }, theme.key)) })
      ] })
    ] })
  ] }) });
};
export {
  ThemeSettings as default
};
