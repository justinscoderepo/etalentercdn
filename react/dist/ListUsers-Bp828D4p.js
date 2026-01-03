import { j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { F as ForwardRef } from "./renderUsersList-Cq0h1Shw.js";
import { F as ForwardRef$1, a as ForwardRef$5 } from "./HandThumbUpIcon-B4xhVN58.js";
import { F as ForwardRef$2 } from "./ChevronRightIcon-CASqfOFz.js";
import { F as ForwardRef$3, h as ForwardRef$4 } from "./publicRegistrationHelper-D8ymtYJF.js";
import { F as ForwardRef$6 } from "./PencilIcon-b9s3VfZ1.js";
import { F as ForwardRef$7 } from "./TrashIcon-cHW_KKL3.js";
import "./useConfirmation-7dfYOxTH.js";
import "./dialog-DkCfFwgC.js";
import "./keyboard-Dku-r8UD.js";
import "./dom-XjFFvgb6.js";
import "./use-is-mounted-DkvN6zYE.js";
import "./hidden-tL6qlWMm.js";
import "./open-closed-gVG0H0sE.js";
import "./description-3iOOxFmG.js";
import "./navigationUtils-BZC1EMRn.js";
import "./CheckIcon-8INY0B1Y.js";
import "./TrashIcon-DMovC4zz.js";
import "./box-Du61b7dg.js";
const ListUsers = ({ participationDetails, users, userRoles, activeUser, onChange, allStepsComponents, onClickDelete }) => {
  let userComponents = allStepsComponents?.["User"];
  allStepsComponents?.["Participation"];
  let paymentComponents = allStepsComponents?.["Payment"];
  const handleUserClick = (user) => {
    onChange(user);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("flex justify-center gap-2", activeUser ? "flex-col" : "flex-row flex-wrap"), children: users?.map((user, index) => {
    let userRole = userRoles?.find((x) => x.User === user.UId);
    let jsonSettings = userRole?.JsonSettings ? JSON.parse(userRole.JsonSettings) : {};
    let applicationStatus = "Not Submitted";
    let progress = 30;
    let filteredParticipations = [];
    if (participationDetails) {
      filteredParticipations = participationDetails.ParticipantsList?.filter((x) => x.Candidate == userRole?.UserRoleId);
      if (filteredParticipations?.length > 0) {
        progress = 60;
      }
    }
    if (jsonSettings?.FinishedSteps) {
      progress = 100;
    }
    let allowedUserTimelineKeys = ["DobString", "Mobile"];
    let allowedPaymentKeys = ["paymentMethod", "paymentReferenceId", "paymentScreenShot"];
    let isPaymentSectionVisible = false;
    if (allowedPaymentKeys?.find((x) => jsonSettings[x] != void 0)) {
      isPaymentSectionVisible = true;
    }
    if (jsonSettings?.FinishedSteps == true) {
      applicationStatus = "Submitted";
    }
    if (jsonSettings.ApprovalStatus) {
      applicationStatus = jsonSettings.ApprovalStatus;
    }
    if (jsonSettings?.FinishedSteps == true && jsonSettings.ApprovalStatus == "Reviewed") {
      applicationStatus = "Submitted";
    }
    if (jsonSettings.FinishedSteps == true && jsonSettings.ApprovalStatus == "Submitted") {
      applicationStatus = "Submitted";
    }
    if (!jsonSettings.FinishedSteps && jsonSettings.ApprovalStatus == "InProgress") {
      applicationStatus = "Not Submitted";
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: classNames(
          "groupellipsis flex-1 min-w-72 max-w-80 justify-start col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center border-t-2 shadow-md mb-3 ",
          applicationStatus == "Submitted" ? "border-blue-500" : applicationStatus == "Approved" ? "border-green-500" : applicationStatus == "Rejected" ? "border-red-500" : "border-orange-500"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-4 py-6 ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: user.ProfilePicture ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-200 flex rounded-xl p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "mx-auto size-32 shrink-0 rounded-full", src: user.ProfilePicture, alt: "" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-sm font-medium text-gray-900", children: user.Name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-1  flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-sm text-onSurfaceVariant overflow-hidden text-ellipsis", children: user.Email }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-3", children: applicationStatus == "Approved" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-[10px] font-medium text-green-700 ring-1 ring-inset ring-green-600/20", children: "Approved" }) : applicationStatus == "Submitted" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700 ring-1 ring-inset ring-green-600/20", children: "Waiting for Approval" }) : applicationStatus == "Not Submitted" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-orange-50 px-2 py-1 text-[10px] font-medium text-orange-900 ring-1 ring-inset ring-gray-600/20", children: "Actively working on it/Pending Final Submission" }) : applicationStatus == "Rejected" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-[10px] font-medium text-red-700 ring-1 ring-inset ring-red-600/20", children: "Rejected" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-orange-50 px-2 py-1 text-[10px] font-medium text-orange-900 ring-1 ring-inset ring-gray-600/20", children: applicationStatus }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col mt-5", children: [
              progress != 100 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "progress-bar flex flex-1 bg-gray-200 rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: classNames("progress-bar-fill h-1   rounded-md", progress == 100 ? "bg-green-500" : progress >= 60 ? "bg-blue-500" : "bg-orange-500"),
                  style: { width: `${progress}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { role: "list", className: "mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pb-4 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex space-x-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("flex size-8 items-center justify-center rounded-full ring-8 ring-white"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "size-6 text-gray-600" }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col min-w-0 flex-1 justify-between border-t-2 border-gray-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-gray-50 px-3 text-xs py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-semibold", children: "User Information" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "flex flex-col text-xs py-2", children: allowedUserTimelineKeys.map((key, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-1 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-gray-600", children: userComponents?.find((x) => x.key?.toLowerCase() == key?.toLowerCase())?.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-medium text-gray-900", children: user[key] })
                      ] }, index2)) })
                    ] }) })
                  ] })
                ] }) }),
                filteredParticipations?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pb-4 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex space-x-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("flex size-8 items-center bg-blue-500 justify-center rounded-full ring-8 ring-white"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { "aria-hidden": "true", className: "size-5  text-white" }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col min-w-0 flex-1 justify-between border-t-2 border-blue-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-gray-50 px-3 text-xs py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-semibold", children: "Participation Information" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "flex flex-col text-xs py-2", children: [
                        participationDetails?.OrganizationLevels?.map((level, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between  py-1 flex-1 flex-row flex-wrap", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-gray-600", children: level.LevelName }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-medium text-gray-900 text-right", children: userRole[level.LevelName + "Name"] })
                        ] }, index2)),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 flex w-full" }),
                        filteredParticipations.map((participation, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between py-1 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("dt", { className: "text-gray-600 flex text-left", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "size-4 text-amber-700", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", "data-slot": "icon" }),
                          participationDetails?.Competitions?.find((x) => x.CompetitionStructureId == participation.Competition)?.Title
                        ] }) }, index2))
                      ] })
                    ] }) })
                  ] })
                ] }) }),
                jsonSettings?.FinishedSteps != void 0 && isPaymentSectionVisible && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex space-x-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("flex size-8 items-center bg-green-500 justify-center rounded-full ring-8 ring-white"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { "aria-hidden": "true", className: "size-5  text-white" }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col min-w-0 flex-1 justify-between border-t-2 border-green-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-gray-50 px-3 text-xs mt-5 py-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-semibold", children: "Payment Information" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "flex flex-col text-xs py-2", children: allowedPaymentKeys.map((key, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsonSettings[key] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row flex-wrap items-start justify-between py-1 flex-1 ", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-gray-600", children: paymentComponents?.find((x) => x.key?.toLowerCase() == key?.toLowerCase())?.label }),
                      key == "paymentScreenShot" ? /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-medium text-right  text-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: jsonSettings[key], className: "max-h-32" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-medium text-right  text-gray-900", children: jsonSettings[key] })
                    ] }, index2) })) })
                  ] }) })
                ] }) }) }),
                jsonSettings?.ReviewComments?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pb-4 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex space-x-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("flex size-8 items-center bg-yellow-500 justify-center rounded-full ring-8 ring-white"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { "aria-hidden": "true", className: "size-5  text-white" }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col min-w-0 flex-1 justify-between border-t-2 border-yellow-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-gray-50 px-3 text-xs py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-semibold", children: "Recent Comments from Admin" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "flex flex-col text-xs py-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 flex w-full" }),
                        jsonSettings?.ReviewComments?.map((x, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between py-1 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("dt", { className: "text-gray-600 flex text-left", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ForwardRef$2,
                            {
                              className: classNames("size-6 -mt-1", x.Status === "Reviewed" ? "text-yellow-400" : x.Status === "Approved" ? "text-green-400" : "text-red-400"),
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              "aria-hidden": "true",
                              "data-slot": "icon"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-900", children: x.Status }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "text-xs text-onSurfaceVariant border-l-4 border-border pl-2 mt-2 bg-surface", children: x.Comment })
                          ] })
                        ] }) }, index2))
                      ] })
                    ] }) })
                  ] })
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "-mt-px flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-grow", children: applicationStatus == "Reviewed" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex text-center justify-center flex-1 items-center  bg-amber-400 px-2 py-1 text-xs font-medium text-amber-900", children: "Reviewed" }) : applicationStatus == "Submitted" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex text-center justify-center flex-1 items-center  bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700", children: "Submitted" }) : applicationStatus == "Approved" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex text-center justify-center flex-1 items-center  bg-green-100 px-2 py-1 text-xs font-medium text-green-700", children: "Approved" }) : applicationStatus == "Not Submitted" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex text-center justify-center flex-1 items-center  bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700", children: "Not Submitted" }) : applicationStatus == "Rejected" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex text-center justify-center flex-1 items-center  bg-red-100 px-2 py-1 text-xs font-medium text-red-700", children: "Rejected" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex text-center justify-center flex-1 items-center  bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700", children: applicationStatus }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-grow gap-2", children: jsonSettings?.FinishedSteps == true ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: "relative flex flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-2 text-sm font-semibold text-blue-700",
                onClick: () => handleUserClick(user),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "size-4 text-blue-400", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", "data-slot": "icon" }),
                  "View"
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: "relative flex flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-2 text-sm font-semibold text-blue-700",
                  onClick: () => handleUserClick(user),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$6, { className: "size-4 text-blue-400", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", "data-slot": "icon" }),
                    "Edit"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: "relative inline-flex flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-2 text-sm font-semibold mr-2 text-red-800",
                  onClick: () => onClickDelete({ ...user, ...userRole }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$7, { className: "size-4 text-red-600", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", "data-slot": "icon" }),
                    "Delete"
                  ]
                }
              )
            ] }) })
          ] })
        ]
      },
      index
    );
  }) });
};
export {
  ListUsers
};
