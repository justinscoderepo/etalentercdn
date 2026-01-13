import { r as reactExports, j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
import { c as computeTotalAmount } from "./computeTotalAmount-RO07i90B.js";
const NonPaymentSummary = ({ fieldName, label, errors, register, control, setValue, formData, eventDetails, competitions, participantsList, onChange, disabled, selectedCompetitions }) => {
  let reformattedFormData = {
    ...formData
  };
  let errorsForField = errors?.[fieldName];
  let [error, setError] = reactExports.useState(errorsForField);
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors?.[fieldName]]);
  let defaultSelectedItems = participantsList?.map((x) => x.Competition) ?? [];
  let [selectedItems, setSelectedItems] = reactExports.useState(defaultSelectedItems);
  let reCheckItems = function(items) {
    items.forEach((element2) => {
      let fieldName2 = `competitionCheckBox_${element2.Competition}`;
      let element = document.querySelector(`input[name='${fieldName2}']`);
      if (element) {
        element.checked = true;
        if (onChange) {
          setValue(fieldName2, true);
        }
      }
    });
  };
  reactExports.useEffect(() => {
    if (participantsList?.length > 0) {
      reCheckItems(participantsList);
    }
  }, [participantsList]);
  let competitionItems = competitions ?? [];
  competitionItems = competitionItems.filter((x) => selectedCompetitions.includes(x.CompetitionStructureId));
  let jsonSettings = JSON.parse(eventDetails?.JsonSettings ?? "{}");
  if (reformattedFormData?.participantType == "Individual") {
    jsonSettings?.AdditionalSettings?.MaximumParticipationPerCandidate ?? 10;
  } else {
    jsonSettings?.AdditionalSettings?.MaximumParticipationPerGroup ?? 10;
  }
  let {
    orders
  } = computeTotalAmount(jsonSettings, competitionItems, reformattedFormData);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4 print:py-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto lg:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-sm font-bold whitespace-break-spaces tracking-tight text-gray-900 sm:text-base", children: label ?? fieldName }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 print:mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto ", children: orders.map((order, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-t border-gray-200 bg-white  print:border-none print:shadow-none shadow-sm rounded-lg border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "sr-only", children: "Items" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { role: "list", className: "divide-y divide-gray-200 px-4  print:px-0", children: order.products?.map((product, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "py-4 print:py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center sm:items-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-gray-600 sm:flex sm:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: product.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hidden text-gray-500 print:mt-0 sm:mt-2 sm:block", children: product.description })
        ] }) }) }, index2)) })
      ] }, index)) }) }) })
    ] }) }),
    " "
  ] });
};
export {
  NonPaymentSummary as default
};
