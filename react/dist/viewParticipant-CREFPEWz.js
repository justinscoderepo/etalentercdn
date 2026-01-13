import { b as getUserData, r as reactExports, B as usePublicAppContext, u as useBackend, q as parseJson, n as isDataLoading, j as jsxRuntimeExports, L as Loader, k as React, _ as __vitePreload, g as getDefaultExportFromCjs, p as post, z as zt } from "./main-B7w5eCOl.js";
import { B as Box } from "./box-Du61b7dg.js";
import { r as registrationSteps, e as extractUserAndRoleData, g as getAvailableSteps, b as getActiveComponents, u as updateStepData, U as UserStatusBadge, c as UserReviewButton, S as SubmitReviewButton } from "./publicRegistrationHelper-D8ymtYJF.js";
import { RenderRegistrationForm } from "./renderRegistrationForm-D9a5R6SE.js";
import { F as ForwardRef } from "./PencilIcon-b9s3VfZ1.js";
import { F as ForwardRef$1 } from "./PrinterIcon-BjWJ2xEn.js";
import "./alert-BVY3dXZ7.js";
const FormSubmission = React.lazy(() => __vitePreload(() => import("./formSubmission-JNwzFgva.js"), true ? [] : void 0));
const ModalForm = React.lazy(() => __vitePreload(() => import("./modalForm-DOZs0ugH.js"), true ? [] : void 0));
function PrintRegistrationForm({
  view,
  setActiveTab,
  getEvets,
  isCoordinatorView,
  setParticipantTypeInt,
  getParticipants,
  participantTypeInt,
  candidateId,
  closeModel,
  customComponents,
  allowEdit
}) {
  let { user: loggedinUser } = getUserData() || {};
  loggedinUser?.RoleTitle === "Guardian";
  loggedinUser?.Email?.indexOf("justnshalom") != -1;
  let [selectedUser, setSelectedUserState] = reactExports.useState(null);
  let [agreementData, setAgreementData] = reactExports.useState({});
  let [selectedTeam, setSelectedTeam] = reactExports.useState(null);
  let [isLoading, setIsLoading] = reactExports.useState(false);
  let [selectedComponent, setSelectedComponent] = reactExports.useState(null);
  let [components, setComponents] = reactExports.useState([]);
  let [participantType, setParticipantTypeState] = reactExports.useState(participantTypeInt == 1 ? "Individual" : participantTypeInt == 2 ? "Team" : "");
  let [steps, setSteps] = reactExports.useState([...registrationSteps]);
  const publicContext = usePublicAppContext();
  const { row: eventDetailsFromBackend, status: eventStatusFromBackend } = useBackend(getEvets || "", {
    select: "AllowDisplayCompetitionOrder,Description,EVId,EndDateString,EventCategory,EventCategoryTitle,EventLogo,EventName,IdentityBackgroundImage,OrganizationLogo,OrganizationName,OrganizationShortName,StartDateString,Venue,JsonSettings",
    doCache: true,
    noGet: !getEvets
    // Only fetch if custom link provided
  });
  const eventDetails = getEvets ? eventDetailsFromBackend : publicContext.eventDetails;
  const eventStatus = getEvets ? eventStatusFromBackend : publicContext.eventStatus;
  let roleStatus = "finished";
  let userStatus = "finished";
  let teamStatus = "finished";
  let { row: participationDetails, status: participationsStatus } = useBackend(getParticipants ? getParticipants : "/CandidateJson/GetParticipants", {
    deleteUrl: "/CandidateJson/RemoveUser",
    mandatoryParams: ["participantType"],
    select: "participantList,userList,UserEmail,UserName,UserDobString,UserImage,UserMobile,UserPhone,Email,Group,Candidate,CandidateUser,JsonSettings,Gender,GroupName,Fees,TeamTeamName,Team,TeamStrength,TeamMembersList,TeamMembers,TeamStrength,CandidateIdentityNumber,TeamIdentityNumber,CompetitionOrder,CreatedBy,CreatedByUserName,ParticipationId,UserJsonSettings,TeamJsonSettings,Remarks,LevelSettings,RegistrationId",
    updateUrl: "/CandidateJson/UpdateParticipant",
    doCache: true,
    filter: candidateId ? {
      Candidate: candidateId,
      ...participantTypeInt == 1 ? { participantType: "1" } : participantTypeInt == 2 ? { participantType: "2" } : {}
    } : {}
  });
  let extracted = extractUserAndRoleData(participationDetails, candidateId, selectedUser?.UId, selectedTeam?.Team);
  let { userRole, users, userData, teamData } = extracted;
  selectedUser = selectedUser || userData;
  selectedTeam = selectedTeam || teamData;
  !users?.length ? parseJson(localStorage.user)?.user : null;
  if (participantType == "Team") {
    let userDetails = parseJson(localStorage.user)?.user;
    if (userDetails) {
      userDetails?.Email?.indexOf("justnshalom") == -1 ? null : userDetails;
    }
  }
  const isJsonLoading = isDataLoading(eventStatus, roleStatus, userStatus, teamStatus, participationsStatus);
  isLoading = isJsonLoading || isLoading;
  let userRoleJson = parseJson(userRole?.JsonSettings);
  let userDataJson = parseJson(userData?.JsonSettings);
  let teamJson = parseJson(teamData?.TeamJsonSettings);
  const json = eventDetails?.JsonSettings;
  const jsonSettings = json != null && json != "" ? parseJson(json) : { components: {} };
  const allStepsComponents = jsonSettings.components;
  const availableStepKeys = Object.keys(allStepsComponents ?? {});
  let agreementDataJson = parseJson(agreementData?.JsonSettings);
  let isAgreementStepFilled = availableStepKeys?.includes("Agreement") && allStepsComponents?.["Agreement"]?.filter((x) => x?.validate?.required && !userRoleJson[x.name] && !agreementDataJson[x.name])?.length == 0;
  if (isAgreementStepFilled) {
    localStorage.setItem("isAgreementStepFilled", "true");
  }
  if (localStorage.getItem("isAgreementStepFilled") == "true") {
    isAgreementStepFilled = true;
  }
  let availableSteps = getAvailableSteps(allStepsComponents, steps, isAgreementStepFilled, participantType, users, {}, view);
  let activeStep = {};
  let isSubmitted = true;
  let gotoHome = () => {
    if (closeModel) {
      closeModel();
    }
  };
  if (candidateId && !participationDetails) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
  }
  let splitBy2 = [];
  if (participantType == "Individual") {
    let firstSection = [];
    firstSection.push(availableSteps[0]);
    splitBy2.push(firstSection);
    let secondSection = [];
    if (availableSteps.length > 1) {
      secondSection.push(availableSteps[1]);
    }
    splitBy2.push(secondSection);
    secondSection = [];
    if (availableSteps.length > 2) {
      secondSection.push(availableSteps[2]);
    }
    splitBy2.push(secondSection);
    let thirdSection = [];
    if (availableSteps.length > 3) {
      thirdSection.push(availableSteps[3]);
    }
    splitBy2.push(thirdSection);
  } else {
    let secondSection = [];
    if (availableSteps.length > 2) {
      secondSection.push(availableSteps[2]);
    }
    splitBy2.push(secondSection);
    secondSection = [];
    if (availableSteps.length > 3) {
      secondSection.push(availableSteps[3]);
    }
    splitBy2.push(secondSection);
    let thirdSection = [];
    if (availableSteps.length > 4) {
      thirdSection.push(availableSteps[4]);
    }
    splitBy2.push(thirdSection);
    let fourthSection = [];
    if (availableSteps.length > 5) {
      fourthSection.push(availableSteps[5]);
    }
    splitBy2.push(fourthSection);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ModalForm,
    {
      title: "Registration Form",
      description: "Please fill the form to register for the event",
      open: true,
      customHeading: customComponents ? customComponents : null,
      setOpen: () => {
        gotoHome();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { heading: "", outerClasses: "relative w-full", headingClasses: "px-1 lg:px-4 print:hidden w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mt-5 min-h-[600px] print:mt-0 flex flex-col", id: "registrationBox", children: splitBy2.map((split, index) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full flex-1 gap-x-8", children: split.map((step, stepIdx) => {
          activeStep = step;
          components = getActiveComponents(allStepsComponents, activeStep);
          let data = activeStep ? updateStepData(
            activeStep.name,
            {},
            () => {
            },
            () => {
            },
            activeStep,
            userRole,
            userRoleJson,
            userData,
            userDataJson,
            participantType,
            teamData,
            participationDetails,
            allStepsComponents,
            selectedUser,
            selectedTeam,
            teamJson,
            false
          ) : {};
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormSubmission,
            {
              isPrint: true,
              isCoordinatorView,
              participantType,
              isGuardianRegistration: false,
              handleNext: () => {
              },
              isSubmitted,
              eventDetails,
              isPlayGround: false,
              onChange: () => {
              },
              data,
              isLastStep: false,
              existingComponents: components,
              selectedComponent,
              setSelectedComponent: () => {
              },
              components,
              setComponents: () => {
              }
            },
            stepIdx
          ) });
        }) });
      }) }) })
    }
  ) });
}
var classnames = { exports: {} };
var hasRequiredClassnames;
function requireClassnames() {
  if (hasRequiredClassnames) return classnames.exports;
  hasRequiredClassnames = 1;
  (function(module) {
    (function() {
      var hasOwn = {}.hasOwnProperty;
      function classNames2() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames2.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else {
        window.classNames = classNames2;
      }
    })();
  })(classnames);
  return classnames.exports;
}
var classnamesExports = requireClassnames();
const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
let ApprovalForm = ({ selectedParticipantDetails, participantType, setAllowEdit, setOpen, setFilter, setPrint, eventDetails }) => {
  let siteConfig = localStorage.getItem("siteConfig") ? JSON.parse(localStorage.getItem("siteConfig")) : {};
  const [showCommentBox, setShowCommentBox] = reactExports.useState(false);
  const [comment, setComment] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("Pending");
  const handleShowCommentBox = (person, status2) => {
    let mailComment = "";
    if (status2 === "Approved") {
      mailComment = "Thank you for your registration, " + person?.UserName + "\n";
      mailComment += "Based on your date of birth (" + person?.UserDobString + "), you have been assigned to the " + person?.GroupName + " age group and successfully registered for the following competitions:\n";
      let participatingCompetitions = person?.participatingCompetitions;
      let groupByGroupName = {};
      participatingCompetitions?.forEach((competition) => {
        let groupName = competition?.GroupName;
        if (!groupByGroupName[groupName]) {
          groupByGroupName[groupName] = [];
        }
        groupByGroupName[groupName].push(competition);
      });
      for (const groupName in groupByGroupName) {
        mailComment += "\n" + groupName + " Group\n";
        groupByGroupName[groupName].forEach((competition, index) => {
          mailComment += index + 1 + " - " + competition?.Title + "\n";
        });
      }
      mailComment += "\nPlease login with the credentials sent in your email to see candidate details and participation informations under the Participation tab. \n";
      mailComment += "Login: " + siteConfig?.emailConfigSiteUrl + "\n";
    }
    setComment(mailComment);
    setStatus(status2);
    setShowCommentBox(true);
  };
  const handleSubmitReview = () => {
    setStatus(status);
    if (comment.trim()) {
      setComment("");
      setShowCommentBox(false);
      let jsonSettings = parseJson(selectedParticipantDetails?.user?.JsonSettings);
      if (!jsonSettings) {
        jsonSettings = {};
      }
      jsonSettings.ApprovalStatus = status;
      if (!jsonSettings.ReviewComments) {
        jsonSettings.ReviewComments = [];
      }
      jsonSettings.ReviewComments.push({
        Comment: comment,
        Status: status,
        Date: (/* @__PURE__ */ new Date()).toISOString()
      });
      if (status === "Reviewed") {
        jsonSettings.FinishedSteps = false;
      }
      if (status === "Approved") {
        jsonSettings.FinishedSteps = true;
      }
      let postData = {
        ParticipantType: participantType,
        UserRoleId: selectedParticipantDetails.user.Candidate,
        TeamId: selectedParticipantDetails.user.Team,
        JsonSettings: JSON.stringify(jsonSettings)
      };
      post("/UsersRolesJson/Approve", postData).then((response) => {
        zt.success("Review submitted successfully and emailed to the user.");
        setAllowEdit(false);
        setOpen(false);
        setFilter(true);
      });
    } else {
      alert("Please add a comment before submitting.");
    }
  };
  let existingComments = [];
  if (selectedParticipantDetails?.user?.JsonSettings) {
    let jsonSettings = parseJson(selectedParticipantDetails?.user?.JsonSettings);
    if (jsonSettings?.ReviewComments) {
      existingComments = jsonSettings?.ReviewComments;
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-gray-200 pb-5 bg-white flex flex-1 flex-col pr-10 print:pr-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:flex flex-row sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:flex-1 gap-x-10", children: [
        selectedParticipantDetails?.user?.UserName && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { id: "message-heading", className: "text-base font-semibold text-gray-900", children: [
            selectedParticipantDetails?.user?.CandidateIdentityNumber,
            " - ",
            selectedParticipantDetails?.user?.UserName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 truncate text-sm text-onSurfaceVariant", children: selectedParticipantDetails?.user?.Email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 truncate text-sm text-onSurfaceVariant", children: selectedParticipantDetails?.user?.UserMobile }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 truncate text-sm text-onSurfaceVariant", children: selectedParticipantDetails?.user?.UserDobString })
        ] }),
        selectedParticipantDetails?.user?.TeamTeamName && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { id: "message-heading", className: "text-base font-semibold text-gray-900", children: [
          selectedParticipantDetails?.user?.TeamIdentityNumber,
          " -",
          selectedParticipantDetails?.user?.TeamTeamName
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "inline-flex items-center print:hidden gap-x-1.5 px-10 rounded-md bg-blue-600 mt-5  py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
            onClick: () => setAllowEdit(true),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5 inline-block -mt-0.5 mr-0 " }),
              "Edit"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setPrint(true);
            },
            className: "bg-darkprimary text-white px-10  ml-2 py-1.5 rounded-md print:hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-5 w-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden print:flex  max-h-90  flex-col justify-items-end flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-right", children: eventDetails?.EventName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "justify-end flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: eventDetails?.EventLogo, alt: "logo", className: "max-h-16 w-auto" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col space-y-4 print:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserStatusBadge, { person: selectedParticipantDetails?.user }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserReviewButton, { onClick: handleShowCommentBox, person: selectedParticipantDetails?.user })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: existingComments.map((comment2, index) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-col relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: classNames(
              "border-l-4 p-4",
              comment2?.Status === "Reviewed" ? "border-yellow-400 bg-yellow-50" : comment2?.Status === "Approved" ? "border-green-400 bg-green-50" : "border-red-400 bg-red-50"
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-3 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: classNames("text-lg font-bold", comment2?.Status === "Reviewed" ? "text-yellow-700" : comment2?.Status === "Approved" ? "text-green-700" : "text-red-700"), children: comment2?.Status }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: classNames(
                    "text-sm whitespace-pre-line",
                    comment2?.Status === "Reviewed" ? "text-yellow-700" : comment2?.Status === "Approved" ? "text-green-700" : "text-red-700"
                  ),
                  children: comment2?.Comment ?? comment2
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: classNames("font-medium text-right ", comment2?.Status === "Reviewed" ? "text-yellow-700" : comment2?.Status === "Approved" ? "text-green-700" : "text-red-700"), children: comment2?.Date })
            ] }) })
          }
        ) }, index);
      }) }),
      showCommentBox && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-col relative print:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { heading: "Please enter the reason for change status to " + status, childrenClasses: "flex flex-col mt-4 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "comment", className: "sr-only", children: "Add your comment..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              id: "comment",
              name: "comment",
              rows: 6,
              placeholder: "Add your comment..., The comment will be sent to the user via email.",
              className: "block w-full rounded-lg resize-none bg-transparent px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6",
              value: comment,
              onChange: (e) => setComment(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubmitReviewButton, { onClick: handleSubmitReview, currentReviewStatus: status }) })
        ] })
      ] }) })
    ] })
  ] });
};
function VewParticipant({ participantType, candidateId, eventDetails, setFilter, selectedParticipantDetails, setOpen, idEdit = false, isDirectOpen = false }) {
  let [allowEdit, setAllowEdit] = reactExports.useState(Boolean(idEdit));
  let [isPrint, setPrint] = reactExports.useState(false);
  let [isLoading, setIsLoading] = reactExports.useState(false);
  let RenderComponent = isPrint ? PrintRegistrationForm : RenderRegistrationForm;
  const { isReady } = usePublicAppContext();
  if (!isReady) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RenderComponent,
    {
      isDirectOpen,
      isCoordinatorView: true,
      view: "participationDetails",
      getEventsLink: "/EventJson/Get",
      allowEdit,
      customComponents: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ApprovalForm,
          {
            setPrint: () => {
              window.parent.document.title = "Candiidate Details - " + selectedParticipantDetails.user.UserName + " - " + selectedParticipantDetails.user.UserDobString;
              setPrint(true);
              setIsLoading(true);
              window.onafterprint = () => {
                setPrint(false);
              };
              setTimeout(() => {
                setIsLoading(false);
              }, 2e3);
              setTimeout(() => {
                window.print();
              }, 3e3);
            },
            participantType,
            eventDetails,
            selectedParticipantDetails,
            setFilter,
            setOpen,
            setAllowEdit
          }
        )
      ] }),
      getParticipantsLink: "/CoordinatorJson/GetParticipants",
      closeModel: () => {
        setOpen(false);
      },
      participantTypeInt: participantType,
      candidateId,
      setActiveTab: () => {
      }
    }
  );
}
export {
  VewParticipant as default
};
