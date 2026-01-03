import { j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
function NavVerticalTabs({ tabs, selectedIndex, setSelectedIndex }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full flex flex-col ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "isolate flex divide-x divide-gray-200 rounded-lg shadow print:hidden", children: tabs?.map(
    (tab, index) => tab.name && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "#",
        className: classNames(
          "group relative min-w-0 flex-1 overflow-hidden bg-white py-2 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10",
          index === 0 ? "rounded-l-lg" : "",
          index === tabs.length - 1 ? "rounded-r-lg" : "",
          selectedIndex === index ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
        ),
        onClick: (e) => {
          e.preventDefault();
          setSelectedIndex(index);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: classNames(selectedIndex === index ? "bg-indigo-500" : "bg-transparent", "absolute inset-x-0 bottom-0 h-0.5") })
        ]
      },
      index
    )
  ) }) });
}
export {
  NavVerticalTabs as N
};
