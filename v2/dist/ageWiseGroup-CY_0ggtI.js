import { u as useBackend, r as reactExports, j as jsxRuntimeExports, k as React, _ as __vitePreload } from "./main-B7w5eCOl.js";
const SelectBox = React.lazy(() => __vitePreload(() => import("./selectBox-DMK_ju-d.js"), true ? [] : void 0));
const AgeWiseGroup = ({ fieldName, label, disabled, placeholder, errors, register, formData, optional, onChange }) => {
  const { rows: ageWiseGroup } = useBackend("/CandidateJson/GetByAge", {
    sort: { sortOrder: "DESC", sortColumn: "id" },
    filter: { ParticipantType: formData?.participantType == "Individual" ? 1 : formData?.participantType == "Team" ? 2 : 0, DobString: formData?.userDobString },
    doCache: true,
    select: "AgeFrom,AgeTo,EventGroupId,GroupName,Status"
  });
  reactExports.useEffect(() => {
    if (formData?.group) {
      onChange({ target: { value: formData?.group } }, true);
    }
  }, [formData?.group]);
  let filteredAgeWiseGroup = ageWiseGroup?.filter((x) => {
    let jsonSettings = x.JsonSettings;
    if (jsonSettings) {
      jsonSettings = JSON.parse(jsonSettings);
      if (jsonSettings?.IsCommon == "Yes") {
        return false;
      }
    }
    return true;
  });
  reactExports.useEffect(() => {
    if (filteredAgeWiseGroup?.length === 1 && !formData?.[fieldName] && onChange) {
      setTimeout(() => {
        onChange({ target: { value: filteredAgeWiseGroup[0].EventGroupId } }, true);
      }, 0);
    }
  }, [filteredAgeWiseGroup, formData?.[fieldName]]);
  if (!formData[fieldName + "Name"] && formData?.[fieldName]) {
    formData[fieldName + "Name"] = ageWiseGroup?.find((x) => x.EventGroupId == formData?.[fieldName])?.GroupName;
  }
  if (filteredAgeWiseGroup?.length > 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SelectBox,
      {
        disabled,
        fieldName,
        label,
        placeholder,
        errors,
        register,
        formData,
        optional,
        onChange,
        options: filteredAgeWiseGroup,
        optionKey: "EventGroupId",
        optionText: "GroupName"
      }
    );
  } else {
    return null;
  }
};
export {
  AgeWiseGroup as default
};
