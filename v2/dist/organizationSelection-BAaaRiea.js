import { G as userData, r as reactExports, u as useBackend, j as jsxRuntimeExports, k as React, _ as __vitePreload } from "./main-B7w5eCOl.js";
const SelectBox = React.lazy(() => __vitePreload(() => import("./selectBox-DMK_ju-d.js"), true ? [] : void 0));
const OrganizationSelection = ({ fieldName, label, placeholder, errors, register, formData, disabled, onChange }) => {
  let errorsForField = errors?.[fieldName];
  let { user } = userData();
  let { EventLevels } = user ?? {};
  let levels = EventLevels?.filter((x) => x.Order != 1) || [];
  let [error, setError] = reactExports.useState(errorsForField);
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors?.[fieldName]]);
  let [levelSettings, setLevelSettings] = reactExports.useState({});
  const { rows: locals } = useBackend("/CandidateJson/GetSubOrganizations", {
    sort: { sortOrder: "DESC", sortColumn: "id" },
    limit: 1e5,
    doCache: true,
    select: "Name,Id,CompetitionLevel,CompetitionLevelLevelName,ParentOrganization"
  });
  let { refactoredGroups } = formData ? ExtractLevelKeys(locals, formData, levelSettings, levels) : { refactoredGroups: {} };
  reactExports.useEffect(() => {
    if (formData && locals) {
      levels.forEach((level) => {
        let fieldName2 = fieldName + "." + level.LevelName;
        if (onChange) {
          let levelNameFirstChar = level.LevelName.charAt(0).toLowerCase() + level.LevelName.slice(1);
          let value = formData[levelNameFirstChar];
          let existingValue = formData[fieldName2];
          if (value && !existingValue) {
            onChange(fieldName2, value);
          }
        }
      });
    }
  }, [levels, formData, locals]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: levels.length > 1 ? "grid grid-cols-2 gap-4" : "grid grid-cols-1", children: levels.map((level) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SelectBox,
      {
        fieldName: fieldName + "." + level.LevelName,
        label: level.Order == 2 ? label : level.LevelName,
        placeholder,
        disabled,
        errors,
        register,
        formData,
        optional: false,
        onChange: (e) => {
          levelSettings[level.LevelName] = e.target.value;
          setLevelSettings({ ...levelSettings });
          let levelNameFirstChar = level.LevelName.charAt(0).toLowerCase() + level.LevelName.slice(1);
          onChange(levelNameFirstChar, e.target.value);
          onChange(fieldName + "." + level.LevelName, e.target.value);
          setError("");
        },
        options: refactoredGroups[level.LevelName],
        optionKey: "Id",
        optionText: "Name"
      }
    ) }, level.LevelName);
  }) });
};
function ExtractLevelKeys(locals, formData, levelSettings, levels) {
  let locals2 = locals?.length ? [...locals] : [];
  let groupRecordsByCompetitionLevelLevelName = locals2 && locals2?.length > 0 ? locals2.reduce((r, a) => {
    r[a.CompetitionLevelLevelName] = r[a.CompetitionLevelLevelName] || [];
    r[a.CompetitionLevelLevelName].push(a);
    return r;
  }, /* @__PURE__ */ Object.create(null)) : {};
  let recentTopLevel = "";
  let firstLevel = true;
  let upperCaseFormData = {};
  if (formData) {
    Object.keys(formData).forEach((key) => {
      let upperCaseKey = key.charAt(0).toUpperCase() + key.slice(1);
      upperCaseFormData[upperCaseKey] = formData[key];
    });
  }
  let refactoredGroups = {};
  levels?.forEach((level) => {
    let values = { ...upperCaseFormData, ...levelSettings };
    if (recentTopLevel) {
      refactoredGroups[level.LevelName] = groupRecordsByCompetitionLevelLevelName[level.LevelName]?.filter((x) => x.ParentOrganization == values?.[recentTopLevel]);
    } else if (!firstLevel) {
      refactoredGroups[level.LevelName] = [];
    } else {
      refactoredGroups[level.LevelName] = groupRecordsByCompetitionLevelLevelName[level.LevelName];
    }
    let currentSelectedValue = values?.[level.LevelName];
    if (currentSelectedValue) {
      recentTopLevel = level.LevelName;
    }
    firstLevel = false;
  });
  return { refactoredGroups };
}
export {
  ExtractLevelKeys,
  OrganizationSelection as default
};
