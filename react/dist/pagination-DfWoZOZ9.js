import { r as reactExports, j as jsxRuntimeExports, L as Loader, k as React } from "./main-B7w5eCOl.js";
import { F as ForwardRef } from "./ChevronLeftIcon-CImaoYY0.js";
import { F as ForwardRef$1 } from "./ChevronRightIcon-CASqfOFz.js";
const Pagination = ({ rowsFrom, rowsTo, totalRowCount, setOffsetAndLimit }) => {
  let [isLoading, setIsLoading] = reactExports.useState(false);
  let [currentPageNumber, setCurrentPageNumber] = reactExports.useState();
  let [isAnimating, setIsAnimating] = reactExports.useState(false);
  let [pageLimit, setPageLimit] = reactExports.useState(10);
  const [sortColumn, setSortColumn] = reactExports.useState("UserRoleId");
  const [sortOrder, setSortOrder] = reactExports.useState("DESC");
  const totalPages = Math.ceil(totalRowCount / pageLimit);
  const currentPage = parseInt(rowsFrom / pageLimit) + 1;
  const pageNumbers = totalPages ? Array.from(Array(totalPages).keys()) : [];
  reactExports.useEffect(() => {
    setCurrentPageNumber(currentPage);
  }, [currentPage]);
  if (!totalRowCount) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  const handlePreviousClick = async () => {
    setIsLoading(true);
    const page = parseInt(rowsFrom / pageLimit) - 1;
    setCurrentPageNumber(page);
    setIsAnimating(true);
    await setOffsetAndLimit(page, pageLimit, sortColumn, sortOrder);
    setIsLoading(false);
    setIsAnimating(false);
  };
  const handleNextClick = async () => {
    setIsLoading(true);
    const page = parseInt(rowsFrom / pageLimit) + 1;
    setCurrentPageNumber(page);
    setIsAnimating(true);
    await setOffsetAndLimit(page, pageLimit, sortColumn, sortOrder);
    setIsLoading(false);
    setIsAnimating(false);
  };
  const handlePageClick = async (page) => {
    setIsLoading(true);
    const newOffset = page - 1;
    setCurrentPageNumber(newOffset);
    setIsAnimating(true);
    await setOffsetAndLimit(newOffset, pageLimit, sortColumn, sortOrder);
    setIsLoading(false);
    setIsAnimating(false);
  };
  const getPageNumbers = () => {
    let visiblePages = [];
    const totalVisibleItems = 10;
    const middlePage = Math.floor(totalVisibleItems / 2);
    if (totalPages <= totalVisibleItems) {
      visiblePages = pageNumbers;
    } else if (currentPage <= middlePage) {
      visiblePages = pageNumbers.slice(0, totalVisibleItems);
    } else if (currentPage >= totalPages - middlePage) {
      visiblePages = pageNumbers.slice(-totalVisibleItems);
    } else {
      visiblePages = pageNumbers.slice(currentPage - middlePage - 1, currentPage + middlePage);
    }
    return visiblePages;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 w-full", children: [
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 justify-between sm:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handlePreviousClick,
          className: `relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${rowsFrom === 0 ? "opacity-50 cursor-not-allowed" : ""} ${isAnimating ? "animate-pulse" : ""}`,
          disabled: rowsFrom === 0,
          children: "Previous"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleNextClick,
          className: `relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${rowsTo >= totalRowCount ? "opacity-50 cursor-not-allowed" : ""} ${isAnimating ? "animate-pulse" : ""}`,
          disabled: rowsTo >= totalRowCount,
          children: "Next"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex sm:flex-1 sm:items-center flex-initial sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 whitespace-nowrap pr-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden lg:hidden", children: "Showing" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: rowsFrom }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "", children: " - " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: rowsTo }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden lg:hidden", children: " of " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium hidden lg:hidden", children: totalRowCount }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden lg:hidden", children: "results" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          className: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 lg:px-4 py-1 h-8 text-sm font-medium text-gray-700 hover:bg-gray-50",
          defaultValue: 10,
          onChange: async (e) => {
            setIsLoading(true);
            await setOffsetAndLimit(0, e.target.value, sortColumn, sortOrder);
            setPageLimit(e.target.value);
            setIsLoading(false);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "5", children: "5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "10", children: "10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "20", children: "20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "50", children: "50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "100", children: "100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1000", children: "1000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "10000", children: "10000" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          id: "sortColumn",
          name: "sortColumn",
          className: "block w-full border-0 border-b border-transparent bg-white text-sm px-3 py-1.5 outline-none text-gray-800 border-purple-400 min-w-[60px] focus:border-darkprimary focus:ring-0  h-8",
          value: sortColumn,
          onChange: async (e) => {
            setIsLoading(true);
            setSortColumn(e.target.value);
            await setOffsetAndLimit(0, 10, e.target.value, sortOrder);
            setIsLoading(false);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "UserName", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "GroupGroupName", children: "Group" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "UserRoleId", children: "UniqueId" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "IdentityNumber", children: "IdentityNumber" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          id: "sortOrder",
          name: "sortOrder",
          className: "block w-full border-0 border-b border-transparent bg-white text-sm px-3 py-1.5 outline-none text-gray-800 border-purple-400 min-w-[120px] focus:border-darkprimary focus:ring-0  h-8",
          value: sortOrder,
          onChange: async (e) => {
            setIsLoading(true);
            setSortOrder(e.target.value);
            await setOffsetAndLimit(0, 10, sortColumn, e.target.value);
            setIsLoading(false);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ASC", children: "Ascending" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DESC", children: "Descending" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "isolate inline-flex -space-x-px rounded-md shadow-sm", "aria-label": "Pagination", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handlePreviousClick,
            className: `relative inline-flex items-center rounded-l-md px-2 py-1 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${rowsFrom === 0 ? "opacity-50 cursor-not-allowed" : ""} ${isAnimating ? "animate-pulse" : ""}`,
            disabled: rowsFrom === 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5", "aria-hidden": "true" })
            ]
          }
        ),
        getPageNumbers().map((pageNumber, index) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
            index === 0 && pageNumber > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "relative inline-flex items-center text-gray-900 ring-1 ring-inset ring-gray-300 px-2 py-2 focus:outline-offset-0", disabled: true, children: "..." }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handlePageClick(pageNumber + 1),
                className: `relative inline-flex items-center focus:bg-[#101e2a] focus:text-white focus:outline-offset-0
                    ${currentPage === pageNumber + 1 ? " bg-[#25557c] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25557c]  px-3 py-1 " : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0 px-3 py-2"} ${isAnimating && currentPageNumber === pageNumber ? "animate-bounce" : ""}`,
                children: pageNumber + 1
              },
              pageNumber
            ),
            index === getPageNumbers().length - 1 && pageNumber < totalPages - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "relative inline-flex items-center text-gray-900 ring-1 ring-inset ring-gray-300 px-2 py-2 focus:outline-offset-0", disabled: true, children: "..." }) : null
          ] }, index);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleNextClick,
            className: `relative inline-flex items-center rounded-r-md px-2 py-1 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${rowsTo >= totalRowCount ? "opacity-50 cursor-not-allowed" : ""} ${isAnimating ? "animate-pulse" : ""}`,
            disabled: rowsTo >= totalRowCount,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-5 w-5", "aria-hidden": "true" })
            ]
          }
        )
      ] }) })
    ] })
  ] });
};
export {
  Pagination as default
};
