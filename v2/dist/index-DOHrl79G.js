import { r as reactExports, j as jsxRuntimeExports, x as useAppContext, u as useBackend, p as post, z as zt } from "./main-B7w5eCOl.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { O as OldNewTabLayout } from "./OldNewTabLayout-g9TCcW0h.js";
import { F as ForwardRef$3 } from "./ArrowPathIcon-CrJmYjUD.js";
import "./navigationUtils-BZC1EMRn.js";
function PauseIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$2 = /* @__PURE__ */ reactExports.forwardRef(PauseIcon);
function PlayIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(PlayIcon);
function StopIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(StopIcon);
function TokenSystem() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    OldNewTabLayout,
    {
      oldUrl: "/Coordinator/tokensystem",
      newComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(TokenSystemContent, {}),
      title: "Competition Timer System"
    }
  );
}
function TokenSystemContent() {
  const { eventDetails } = useAppContext();
  const [time, setTime] = reactExports.useState(0);
  const [isRunning, setIsRunning] = reactExports.useState(false);
  const [maxTime, setMaxTime] = reactExports.useState(300);
  const [warningTime, setWarningTime] = reactExports.useState(60);
  const [selectedCompetition, setSelectedCompetition] = reactExports.useState(null);
  const audioRef = reactExports.useRef(null);
  const intervalRef = reactExports.useRef(null);
  const { rows: stages = [] } = useBackend("/EventStagesJson/Get", {
    filter: `EventCategory=${eventDetails?.EventCategoryId || 0}`,
    select: "ESGId,Title"
  });
  const { rows: schedules = [] } = useBackend("/CompetitionScheduleJson/Get", {
    filter: `Event=${eventDetails?.EVId || 0}`,
    select: "CSId,Competition,CompetitionGroupGroupName,CompetitionCompetitionItemTitle,CompetitionGenderGenderTitle,CompetitionCompetitionStatus,CompetitionCompetitionStatusCompetitionStatusTitle,CompetitionMaximumMinutes,CompetitionMaximumSeconds,CompetitionWarningMinute,CompetitionWarningSecond,Stage,StageTitle"
  });
  reactExports.useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          const newTime = prev + 1;
          if (newTime === warningTime && audioRef.current) {
            audioRef.current.play();
          }
          if (newTime >= maxTime) {
            handleStop();
            return maxTime;
          }
          return newTime;
        });
      }, 1e3);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, maxTime, warningTime]);
  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };
  const handleRestart = () => {
    setTime(0);
    setIsRunning(true);
  };
  const handleCompetitionStart = (schedule) => {
    const minutes = schedule.CompetitionMaximumMinutes || 0;
    const seconds = schedule.CompetitionMaximumSeconds || 0;
    const warnMinute = schedule.CompetitionWarningMinute || 0;
    const warnSecond = schedule.CompetitionWarningSecond || 0;
    setMaxTime(minutes * 60 + seconds);
    setWarningTime(warnMinute * 60 + warnSecond);
    setSelectedCompetition(schedule);
    setTime(0);
    setIsRunning(true);
    updateCompetitionStatus(schedule.Competition, 4);
  };
  const updateCompetitionStatus = async (competitionId, status) => {
    try {
      await post("/CompetitionStructureJson/SaveTokenStatus", {
        CompetitionStructureId: competitionId,
        CompetitionStatus: status
      });
    } catch (error) {
      zt.error("Failed to update competition status");
    }
  };
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  const progress = maxTime > 0 ? time / maxTime * 100 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(LayoutOuter, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Competition Timer System",
        description: "Manage competition timing and track progress"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surfaceCard p-6 rounded-lg border border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-64 h-64", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full transform -rotate-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: "128",
                cy: "128",
                r: "120",
                stroke: "#e5e7eb",
                strokeWidth: "8",
                fill: "none"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: "128",
                cy: "128",
                r: "120",
                stroke: time >= warningTime ? "#ef4444" : "#193e65",
                strokeWidth: "8",
                fill: "none",
                strokeDasharray: `${2 * Math.PI * 120}`,
                strokeDashoffset: `${2 * Math.PI * 120 * (1 - progress / 100)}`,
                className: "transition-all duration-1000"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-semibold text-onSurface", children: formatTime(time) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-onSurfaceVariant", children: [
              "/ ",
              formatTime(maxTime)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-onSurfaceVariant mt-1", children: [
              time,
              "s / ",
              maxTime,
              "s"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleStart,
              disabled: isRunning,
              className: "inline-flex items-center gap-x-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 disabled:bg-surface",
              title: "Start",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-4 w-4" }),
                "Start"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handlePause,
              disabled: !isRunning,
              className: "inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:bg-surface",
              title: "Pause",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4" }),
                "Pause"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleStop,
              className: "inline-flex items-center gap-x-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700",
              title: "Stop",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-4 w-4" }),
                "Stop"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleRestart,
              className: "inline-flex items-center gap-x-2 rounded-md bg-onSurfaceVariant px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-onSurface",
              title: "Restart",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "h-4 w-4" }),
                "Restart"
              ]
            }
          )
        ] }),
        selectedCompetition && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm text-onSurface bg-surface px-4 py-2 rounded-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Current:" }),
          " ",
          selectedCompetition.CompetitionGroupGroupName,
          " - ",
          selectedCompetition.CompetitionCompetitionItemTitle
        ] })
      ] }) }),
      stages.map((stage) => {
        const stageSchedules = schedules.filter((s) => s.Stage === stage.ESGId);
        if (stageSchedules.length === 0) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-lg border border-gray-200 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-medium text-gray-900 mb-4", children: stage.Title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: stageSchedules.map((schedule) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium text-gray-900 mb-2", children: [
                  schedule.CompetitionGroupGroupName,
                  " ",
                  schedule.CompetitionCompetitionItemTitle
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-600 mb-3", children: [
                  "Status: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: schedule.CompetitionCompetitionStatusCompetitionStatusTitle || "Not Started" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => handleCompetitionStart(schedule),
                    className: "w-full inline-flex items-center justify-center gap-x-2 rounded-md bg-green-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-green-700",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-3 w-3" }),
                      "Start Timer"
                    ]
                  }
                )
              ]
            },
            schedule.CSId
          )) })
        ] }, stage.ESGId);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { ref: audioRef, src: "https://justinscoderepo.github.io/etalentercdn/Content/audio/bell_school_handheld_pick_up_from_table.mp3" })
    ] })
  ] });
}
export {
  TokenSystem as default
};
