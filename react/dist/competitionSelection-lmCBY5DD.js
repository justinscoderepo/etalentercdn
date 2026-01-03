import { q as parseJson, r as reactExports, j as jsxRuntimeExports, k as React, _ as __vitePreload, z as zt, p as post, u as useBackend, i as classNames } from "./main-B7w5eCOl.js";
import { M as Markdown } from "./index.modern-DAHdGDx3.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { B as Box } from "./box-Du61b7dg.js";
import { F as ForwardRef } from "./PencilIcon-b9s3VfZ1.js";
import { F as ForwardRef$1 } from "./XMarkIcon-DzyB_jak.js";
import { F as ForwardRef$2 } from "./CheckIcon-8INY0B1Y.js";
import { F as ForwardRef$3 } from "./PlusIcon-CAPBj82K.js";
const RenderComponents = React.lazy(() => __vitePreload(() => import("./renderComponents-Db-mePWR.js"), true ? [] : void 0));
function CustomCompetitionFields({ item, competitionStructureId, eventDetails, participantsList, formData, participantId, candidateId }) {
  const { register, control, errors, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      customCompetitionFields: []
    }
  });
  let participantDetails = participantsList.find((x) => x.CandidateId == candidateId && x.Competition == competitionStructureId);
  const jsonSettings = parseJson(item?.JsonSettings);
  const additionalFields = jsonSettings?.AdditionalTextFieldsForPubRegForm || [];
  const maxRows = jsonSettings?.AdditionalTextFieldsMaxLength || Infinity;
  const minRows = jsonSettings?.AdditionalTextFieldsMinLength || 1;
  let participantJsonSettings = parseJson(participantDetails?.JsonSettings);
  let customCompetitionFields = participantJsonSettings?.customCompetitionFields || [];
  const defaultFields = additionalFields.map((field) => ({
    key: field.FieldName.replace(/\s+/g, "_").toLowerCase(),
    label: field.FieldName,
    name: `customCompetitionFields[0].${field.FieldName.replace(/\s+/g, "_").toLowerCase()}`,
    type: field.FieldType?.toLowerCase() || "text",
    isRequired: field.IsRequired?.toLowerCase() === "yes",
    conditions: [],
    options: [],
    placeholder: "",
    defaultValue: ""
  }));
  const [fieldRows, setFieldRows] = reactExports.useState([{ id: Date.now(), values: {}, fields: [...defaultFields], disabled: false }]);
  reactExports.useEffect(() => {
    if (customCompetitionFields.length > 0) {
      let existingFormRows = [];
      let existingRows = customCompetitionFields.map((row, index) => {
        let customCompetitionsFieldsObj = {};
        let formRows = {};
        defaultFields.forEach((field) => {
          customCompetitionsFieldsObj[`customCompetitionFields[${index}].${field.key}`] = row?.[field.key];
          formRows[field.key] = row?.[field.key];
        });
        existingFormRows.push(formRows);
        return {
          id: Date.now() + index,
          values: customCompetitionsFieldsObj,
          fields: defaultFields.map((field) => ({
            ...field,
            name: `customCompetitionFields[${index}].${field.key}`
          })),
          disabled: true
        };
      });
      setValue("customCompetitionFields", existingFormRows);
      setFieldRows(existingRows);
    }
  }, []);
  const handleAddRow = () => {
    if (fieldRows.length >= maxRows) {
      zt.error(`You can add a maximum of ${maxRows} rows.`);
      return;
    }
    setFieldRows((prevRows) => [
      ...prevRows,
      {
        id: Date.now(),
        values: {},
        fields: defaultFields.map((field) => ({
          ...field,
          name: `customCompetitionFields[${prevRows.length}].${field.key}`
        })),
        disabled: false
      }
    ]);
  };
  const handleSaveRow = async (id) => {
    let values = getValues();
    let { candidate, customCompetitionFields: customCompetitionFields2 } = values;
    let index = fieldRows.findIndex((row) => row.id === id);
    const lastRow = customCompetitionFields2[index];
    const missingRequiredFields = defaultFields.filter((field) => field.isRequired && !lastRow.values[field.name]);
    if (missingRequiredFields.length > 0) {
      zt.error("Please fill all required fields before adding a new row.");
      return;
    }
    try {
      let participantId2 = participantsList.find((x) => x.CandidateId == candidateId && x.Competition == competitionStructureId)?.ParticipantId;
      if (!participantId2) {
        zt.error("Participant ID not found.");
        return;
      }
      let results = await post(`/CandidateJson/UpdateParticipantJson`, {
        participantId: participantId2,
        candidateId: formData?.candidate,
        JsonSettings: JSON.stringify(values)
      });
      zt.success("Data saved successfully!");
      let lastFieldRow = fieldRows[index];
      lastFieldRow.disabled = true;
      defaultFields.forEach((field) => {
        lastFieldRow.values[`customCompetitionFields[${index}].${field.key}`] = lastRow[field.key];
      });
      setFieldRows([...fieldRows]);
    } catch (error) {
      console.error("Error updating participant JSON:", error);
      zt.error("Failed to save data.");
    }
  };
  const handleEditRow = (id) => {
    setFieldRows((prevRows) => prevRows.map((row) => row.id === id ? { ...row, disabled: false } : row));
  };
  const handleDeleteRow = (id) => {
    if (fieldRows.length <= minRows) {
      zt.error(`You must have at least ${minRows} rows.`);
      return;
    }
    setFieldRows((prevRows) => prevRows.filter((row) => row.id !== id));
    let values = getValues();
    let { candidate, customCompetitionFields: customCompetitionFields2 } = values;
    let index = fieldRows.findIndex((row) => row.id === id);
    customCompetitionFields2.splice(index, 1);
    setValue("customCompetitionFields", customCompetitionFields2);
    let participantId2 = participantDetails?.ParticipantId;
    if (!participantId2) {
      zt.error("Participant ID not found.");
      return;
    }
    post(`/CandidateJson/UpdateParticipantJson`, {
      participantId: participantId2,
      candidateId: formData?.candidate,
      JsonSettings: JSON.stringify(values)
    }).then((results) => {
      zt.success("Data deleted successfully!");
    }).catch((error) => {
      console.error("Error updating participant JSON:", error);
      zt.error("Failed to delete data.");
    });
  };
  let combinedLabels = defaultFields.map((field) => field.label).join(", ");
  let lastOneToAnd = combinedLabels.lastIndexOf(",");
  if (lastOneToAnd > -1) {
    combinedLabels = combinedLabels.substring(0, lastOneToAnd) + " and" + combinedLabels.substring(lastOneToAnd);
  }
  return defaultFields.length > 0 && participantDetails && /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      outerClasses: "flex flex-row w-full lg:py-3 print:py-0",
      childrenClasses: "px-1 lg:px-4 py-1 w-full flex",
      description: "Please fill some additional inputs here, fields are " + combinedLabels + " and minimum " + minRows + " and maximum " + maxRows + " rows if items are required.",
      headingClasses: "border-b-[#485257] text-[#206689] items-center font-medium mb-0 pb-1 px-1 w-full uppercase border-b-2 text-base",
      heading: "Additional Inputs",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-grow", children: [
        fieldRows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-x-6 border-b border-gray-100 py-4  print:py-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            RenderComponents,
            {
              singleRow: true,
              eventDetails,
              components: row.fields,
              errors,
              register,
              handleSelect: () => {
              },
              control,
              setValue,
              getValues,
              formData: row.values,
              isSubmitted: row.disabled,
              onChangeValue: (key, value) => {
                setFieldRows((prevRows) => prevRows.map((r) => r.id === row.id ? { ...r, values: { ...r.values, [key]: value } } : r));
              }
            },
            row.id
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-baseline gap-x-2 print:hidden", children: row.disabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleEditRow(row.id), className: "rounded-full bg-yellow-600 p-1.5 text-white shadow-sm hover:bg-yellow-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "h-5 w-5" }) }, "Edit" + row.id),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleDeleteRow(row.id), className: "rounded-full bg-red-800 p-1.5 text-white shadow-sm hover:bg-red-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { "aria-hidden": "true", className: "h-5 w-5" }) }, "Delete" + row.id)
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleSaveRow(row.id), className: `rounded-full p-1.5 text-white shadow-sm bg-green-600 hover:bg-green-500`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { "aria-hidden": "true", className: "h-5 w-5" }) }, "Save" + row.id) })
        ] }, row.id)),
        fieldRows.length < maxRows && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "justify-end items-end flex mt-4 print:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleAddRow,
            disabled: fieldRows.length >= maxRows,
            className: `rounded-full p-1.5 text-white shadow-sm ${fieldRows.length >= maxRows ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-500"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { "aria-hidden": "true", className: "h-5 w-5" })
          }
        ) })
      ] })
    }
  );
}
const CompetitionSelection = ({
  fieldName,
  label,
  errors,
  isGroupMandatory,
  participantType,
  setValue,
  formData,
  eventDetails,
  competitions,
  participantsList,
  onChange,
  disabled,
  register,
  control
}) => {
  const { rows: ageWiseGroup } = useBackend("/CandidateJson/GetByAge", {
    sort: { sortOrder: "DESC", sortColumn: "id" },
    filter: { ParticipantType: formData?.participantType == "Individual" ? 1 : formData?.participantType == "Team" ? 2 : 0, DobString: formData?.userDobString },
    doCache: true,
    select: "AgeFrom,AgeTo,EventGroupId,GroupName,Status"
  });
  let errorsForField = errors?.[fieldName];
  let [error, setError] = reactExports.useState(errorsForField);
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors?.[fieldName]]);
  let defaultSelectedItems = participantsList?.map((x) => x.Competition) ?? [];
  let [selectedItems, setSelectedItems] = reactExports.useState(defaultSelectedItems);
  if (disabled) {
    selectedItems = defaultSelectedItems;
  }
  let selectedItemsString = defaultSelectedItems.join(",");
  reactExports.useEffect(() => {
    if (selectedItemsString) {
      if (defaultSelectedItems.length > 0) {
        setSelectedItems(defaultSelectedItems);
      }
    }
  }, [selectedItemsString]);
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
  var commonGroups = ageWiseGroup?.filter((x) => {
    let jsonSettings2 = x.JsonSettings;
    if (jsonSettings2) {
      jsonSettings2 = JSON.parse(jsonSettings2);
      if (jsonSettings2?.IsCommon == "Yes") {
        return true;
      }
    }
    return false;
  });
  let commonGroupIds = commonGroups?.map((x) => x.EventGroupId);
  let competitionItems = competitions ?? [];
  if (formData?.group || isGroupMandatory) {
    competitionItems = competitionItems.filter((x) => {
      if (disabled && !selectedItems.find((y) => y == x.CompetitionStructureId)) {
        return false;
      }
      if (x.Group == formData?.group || commonGroupIds?.find((y) => y == x.Group)) {
        return true;
      }
      return false;
    });
  } else {
    let removedDuplicate = [];
    competitionItems = competitionItems.filter((x) => {
      if (removedDuplicate.find((y) => y.Title == x.Title)) {
        return false;
      }
      removedDuplicate.push(x);
      if (disabled && !selectedItems.find((y) => y == x.CompetitionStructureId)) {
        return false;
      }
      return true;
    });
    competitionItems = removedDuplicate;
  }
  if (formData?.gender) {
    competitionItems = competitionItems.filter((x) => {
      if (formData?.gender == "Male") {
        if (x.Gender == 1 || x.Gender == 3) {
          return true;
        }
      } else if (formData?.gender == "Female") {
        if (x.Gender == 2 || x.Gender == 3) {
          return true;
        }
      } else {
        return true;
      }
      return false;
    });
  }
  const groupedCompetitions = [];
  const handleCheckBoxChange = (itemId, e) => {
    let checked = e.target.checked;
    if (checked) {
      selectedItems = [...selectedItems, itemId];
    } else {
      selectedItems = selectedItems.filter((item) => item !== itemId);
    }
    setSelectedItems(selectedItems);
    onChange(selectedItems);
  };
  let jsonSettings = JSON.parse(eventDetails?.JsonSettings ?? "{}");
  let maxCompetitions = 10;
  if (participantType == "Individual") {
    let individualMaxCompetition = jsonSettings?.AdditionalSettings?.MaximumParticipationPerCandidate ?? 10;
    maxCompetitions = individualMaxCompetition;
  } else {
    let teamMaxCompetition = jsonSettings?.AdditionalSettings?.MaximumParticipationPerGroup ?? 10;
    maxCompetitions = teamMaxCompetition;
  }
  let feesCurrency = jsonSettings?.AdditionalSettings?.FeesCurrency ?? "USD";
  let allowPublicPrivate = jsonSettings?.AdditionalSettings?.EnablePublicAndPrivateRegistration == "Yes";
  let allowPublicPrivateBasedOnRegId = jsonSettings?.AdditionalSettings?.UsePublicAndPrivateRegistrationByRegId == "Yes";
  let customMaxSettings = jsonSettings?.AdditionalSettings?.CustomMaxParticipationPerCandidate ?? [];
  if (competitionItems.length > 0 && allowPublicPrivate && !disabled) {
    if (allowPublicPrivateBasedOnRegId) {
      let advancedSettings = jsonSettings?.AdditionalSettings;
      let registrationBox = jsonSettings?.components?.User?.find((x) => x.type == "RegistrationIdBox");
      let eligibleNumbers = advancedSettings?.EligibleRegistrationNumbers;
      let eligibilityRow = eligibleNumbers?.find((x) => x.RegistrationNumber == (formData?.["registrationId"] ?? "-"));
      let isConditionalDiscountAccepted = false;
      if (registrationBox?.conditions) {
        let isAllConditionsMatched = true;
        for (let i = 0; i < registrationBox.conditions.length; i++) {
          let condition = registrationBox.conditions[i];
          let capitalizedKey = condition.key?.charAt(0)?.toLowerCase() + condition.key?.slice(1);
          let value = formData[capitalizedKey];
          if (value?.toString() != condition.value?.toString()) {
            isAllConditionsMatched = false;
            break;
          }
        }
        if (isAllConditionsMatched) {
          isConditionalDiscountAccepted = true;
        } else {
          isConditionalDiscountAccepted = false;
        }
      } else {
        isConditionalDiscountAccepted = true;
      }
      if (eligibilityRow && isConditionalDiscountAccepted) ;
      else {
        competitionItems = competitionItems.filter((x) => {
          if (x.AllowPublicRegistration != "2") {
            return true;
          }
        });
      }
    } else {
      competitionItems = competitionItems.filter((x) => {
        if (x.AllowPublicRegistration != "2") {
          return true;
        }
      });
    }
  }
  let selectedItemsFromListingCompetitions = selectedItems.filter((x) => competitionItems.find((y) => y.CompetitionStructureId == x));
  let isMaxCompetitionExceeded = selectedItemsFromListingCompetitions?.length >= maxCompetitions;
  if (customMaxSettings.length > 0 && participantType == "Individual") {
    isMaxCompetitionExceeded = false;
  }
  const uniqueCategories = [...new Set(competitionItems.map((item) => item.CompetitionCategoryName))];
  const uniqueCompetitionNames = competitionItems.reduce((acc, current) => {
    const x = acc.find((item) => item.CompetitionName === current.CompetitionName);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  ageWiseGroup?.forEach((group) => {
    uniqueCategories.forEach((element) => {
      let competitionsInCategory = uniqueCompetitionNames.filter((x) => x.CompetitionCategoryName == element && x.Group == group.EventGroupId);
      let groupedItem = {};
      groupedItem.CategoryName = element;
      groupedItem.CompetitionNames = [];
      competitionsInCategory.forEach((element2) => {
        let items = competitionItems.filter((x) => x.CompetitionCategoryName == element && x.CompetitionName == element2.CompetitionName);
        let groupedItem2 = {};
        groupedItem2.CompetitionName = element2.CompetitionName;
        groupedItem2.competitions = items;
        groupedItem.CompetitionNames.push(groupedItem2);
      });
      if (customMaxSettings.length > 0) {
        let matchingCategories = customMaxSettings.filter((x) => x.CompetitionCategoryId?.startsWith(element));
        let currentCategoryMax = customMaxSettings.find((x) => x.CompetitionCategoryId == element);
        let items = competitionItems.filter((x) => matchingCategories.find((y) => y.CompetitionCategoryId == x.CompetitionCategoryName));
        var filteredItemsInCategory = selectedItems.filter((x) => items.find((y) => y.CompetitionStructureId == x));
        let isExceeded = filteredItemsInCategory.length >= (currentCategoryMax?.MaxParticipation ?? 1);
        if (isExceeded) {
          groupedItem.isExceeded = isExceeded;
          groupedItem.MaxParticipation = currentCategoryMax?.MaxParticipation ?? 1;
        }
        let isChildCategory = element.split("-").length > 1;
        if (isChildCategory) {
          let parentCategory = element.split(" - ")[0];
          let parentCategoryMax = customMaxSettings.find((x) => x.CompetitionCategoryId == parentCategory);
          let parentItems = competitionItems.filter((x) => parentCategoryMax.CompetitionCategoryId == x.CompetitionCategoryName);
          var filteredParentItemsInCategory = selectedItems.filter((x) => parentItems.find((y) => y.CompetitionStructureId == x));
          let isParentExceeded = filteredParentItemsInCategory.length + filteredItemsInCategory.length >= (parentCategoryMax?.MaxParticipation ?? 1);
          if (isParentExceeded) {
            groupedItem.isExceeded = isParentExceeded;
            groupedItem.MaxParticipation = parentCategoryMax?.MaxParticipation ?? 1;
          }
        }
      }
      if (competitionsInCategory.length > 0) {
        let groupName = competitionsInCategory[0]?.GroupName;
        if (!groupedCompetitions.find((x) => x.GroupName == groupName)) {
          let inGroup = {
            GroupName: groupName,
            items: [groupedItem]
          };
          groupedCompetitions.push(inGroup);
        } else {
          let inGroup = groupedCompetitions.find((x) => x.GroupName == groupName);
          inGroup.items.push(groupedItem);
        }
      }
    });
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4  print:mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col print:flex-row print:flex-wrap", children: [
    groupedCompetitions.length == 0 && (!formData?.group ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-orange-600 text-sm", children: "Please select a group to see competitions" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 text-sm", children: "No competitions available for this group / matching criterias" })),
    isMaxCompetitionExceeded && /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "border-l-4 border-orange-300 bg-orange-50 p-3 mt-2 print:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-orange-600 font-normal", children: [
      "You can select maximum ",
      maxCompetitions,
      " competition per ",
      participantType == "Individual" ? "candidate" : "team",
      "."
    ] }) }),
    groupedCompetitions?.map((item4, i4) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 print:mb-0 rounded-md print:border-0 print:px-0   print:py-0 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-gray-300 pb-3  print:pb-0 print:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-2xl px-5 print:text-lg font-semibold leading-6 text-blue-900", children: item4.GroupName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ml-1 truncate text-base text-gray-500" })
      ] }) }),
      item4?.items?.map((item3, i3) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3  print:mb-0 rounded-md border border-gray-200  print:border-0 px-5  print:px-0   print:py-0 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-gray-300 pb-2  print:pb-0 print:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-xl  print:text-lg font-semibold leading-6 text-cyan-600", children: item3.CategoryName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ml-1 truncate text-base text-gray-500", children: "Competitions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:grid md:grid-cols-2 md:gap-2  print:gap-0", children: item3.CompetitionNames?.map((item2, i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-gray-100 pb-0 print:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline text-left justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg  print:text-base font-semibold leading-6 text-green-800", children: item2.CompetitionName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ml-1 truncate text-sm text-gray-500" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap", children: item2.competitions?.map((item, i) => {
            let isChecked = selectedItems.find((x) => x == item.CompetitionStructureId) != null ? true : false;
            let isDisabled = disabled || !isChecked && isMaxCompetitionExceeded ? true : false;
            if (item3.isExceeded && !isChecked) {
              isDisabled = true;
            }
            commonGroups?.find((x) => x.EventGroupId == item.Group);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-min-[300] pr-4 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  onClick: (e) => {
                    if ((isMaxCompetitionExceeded || item3.isExceeded) && isDisabled) {
                      if (item3.isExceeded) {
                        zt.error("You can't select more than " + item3.MaxParticipation + " competitions from " + item3.CategoryName);
                      } else {
                        zt.error("You can select maximum " + maxCompetitions + " competitions only");
                      }
                      return;
                    }
                  },
                  className: classNames(
                    !isDisabled ? "ml-2" : "",
                    "block text-sm text-gray-900"
                  ),
                  children: [
                    !isDisabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: `competitionCheckBox_${item.CompetitionStructureId}`,
                        className: classNames(
                          " h-5 w-5 optiontext-darkprimary ",
                          error ? "border-red-300  text-red-600 focus:ring-red-800" : isDisabled ? "bg-gray-200 text-gray-500" : "focus:ring-darkprimary text-primary border-gray-300"
                        ),
                        disabled: isDisabled,
                        fieldName: `competitionCheckBox_${item.CompetitionStructureId}`,
                        checked: isChecked,
                        onChange: (e) => {
                          handleCheckBoxChange(item.CompetitionStructureId, e);
                        }
                      },
                      i
                    ),
                    isDisabled && !isChecked && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-5 inline-block align-middle optiontext-darkprimary bg-gray-300 text-gray-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden print:flex", children: [
                      eventDetails?.AllowDisplayCompetitionOrder == 1 ? item.CompetitionOrder + " - " : "",
                      " ",
                      item.Title
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames(!disabled ? "ml-2" : "", "text-xs  print:hidden font-medium leading-6 select-none " + (error ? "text-danger" : "text-gray-900")), children: (eventDetails?.AllowDisplayCompetitionOrder == 1 ? item.CompetitionOrder + " - " : "") + (item.Title.replace(item2.CompetitionName, "").replace(/ /gi, "").trim() !== "" ? item.Title.replace(item2.CompetitionName, "").trim() : item2.CompetitionName.trim()) })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500 whitespace-break-spaces print:hidden", children: item?.Remarks && /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { children: item.Remarks }) }),
              item.Fees > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fees text-md mt-2 text-gray-600 print:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                jsonSettings?.AdditionalSettings?.CustomFeesLabel || "Fees",
                ":",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("i", { className: "text-green-700 font-medium", children: [
                  " ",
                  item.Fees,
                  jsonSettings?.AdditionalSettings?.HideCurrencyInPublicPages !== "Yes" && feesCurrency
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CustomCompetitionFields,
                {
                  eventDetails,
                  item,
                  competitionStructureId: item.CompetitionStructureId,
                  candidateId: item.CandidateId,
                  register,
                  errors,
                  control,
                  participantsList,
                  setValue,
                  getValues: null,
                  setFormData1: () => {
                  },
                  formData
                }
              )
            ] }, i3 + "_" + i2 + "_" + item.CompetitionStructureId);
          }) })
        ] }, i3 + "_" + i2)) })
      ] }, i3))
    ] }, i4) }))
  ] }) });
};
export {
  CompetitionSelection as default
};
