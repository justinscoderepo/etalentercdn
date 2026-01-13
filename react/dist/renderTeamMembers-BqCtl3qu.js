import { r as reactExports, j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
import RenderManageTeamParticipants from "./manageTeamParticipants-D-VFNqCz.js";
const RenderTeamMembers = ({ fieldName, label, errors, register, control, onChangeValue, formData, eventDetails, competitions, participantsList, onChange, disabled }) => {
  let teamId = formData?.team;
  let levelSettings = {};
  if (formData) {
    let levelKeys = Object.keys(formData);
    for (let i = 0; i < levelKeys.length; i++) {
      let item = levelKeys[i];
      if (item.indexOf("LevelSettings.") > -1) {
        let key = item.replace("LevelSettings.", "");
        levelSettings[key] = formData[item];
      }
    }
    if (Object.keys(levelSettings).length == 0) {
      let allKeys = Object.keys(formData);
      for (let i = 0; i < allKeys.length; i++) {
        let item = allKeys[i];
        let value = formData[item];
        if (typeof value == "string" || typeof value == "number") {
          levelSettings[item] = value;
        }
      }
    }
  }
  reactExports.useEffect(() => {
    if (formData?.strength) {
      onChangeValue("teamStrength", formData?.strength);
    }
  }, [formData?.strength]);
  if (!teamId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: label });
  }
  return (
    // <ManageTeamParticipants teamId={teamId} onClose={()=>{}} />
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RenderManageTeamParticipants,
      {
        hideGoBack: true,
        renderAsComponenet: true,
        groupId: formData?.group,
        disabled,
        onUpdate: (data) => {
          if (formData.teamStrength != data?.length) {
            onChangeValue("teamStrength", data?.length);
          }
        },
        teamId,
        levels: { ...levelSettings },
        onClose: () => {
        }
      }
    )
  );
};
export {
  RenderTeamMembers as default
};
