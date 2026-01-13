import { j as jsxRuntimeExports, r as reactExports, _ as __vitePreload } from "./main-B7w5eCOl.js";
const UsersAndRoles = reactExports.lazy(() => __vitePreload(() => import("./UsersAndRoles-DVfqBSZG.js"), true ? [] : void 0));
reactExports.lazy(() => __vitePreload(() => import("./AssignJudgesToCompetition-BOy4iLlB.js"), true ? [] : void 0));
function MainPageUsersAndRoles({ user }) {
  const location = window.top.location;
  let splitLocation = location.pathname.split("/UserRoles/");
  let queryParams = new URLSearchParams(location.search);
  let operation = "Judge";
  let eventCategory = "";
  let eventId = "";
  let eventLevel = queryParams?.get("level") || null;
  if (splitLocation.length > 1) {
    let pieces = splitLocation[1].split("/");
    operation = pieces[0];
    eventCategory = pieces[1];
    eventId = pieces[2];
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(UsersAndRoles, { user, eventLevel, operation, eventCategory, eventId });
}
export {
  MainPageUsersAndRoles as default
};
