import { p as post, r as reactExports, u as useBackend, n as isDataLoading, j as jsxRuntimeExports, L as Loader } from "./main-B7w5eCOl.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { L as LazyRun } from "./lazyFunction-C5FUcoD8.js";
const handleSave = async (eventDetails2, exportedForm) => {
  var wrapedJson = {};
  if (eventDetails2.JsonSettings != null && eventDetails2.JsonSettings != "") {
    var jsonSettings = JSON.parse(eventDetails2.JsonSettings);
    wrapedJson = jsonSettings;
  }
  wrapedJson.scheduleSettings = exportedForm;
  var jsonString = JSON.stringify(wrapedJson, null, 2);
  await post("/EventJson/Save", {
    Select: "EVId,JsonSettings",
    EVId: eventDetails2.EVId,
    JsonSettings: jsonString
  });
};
let latestResultStore = {};
if (sessionStorage.getItem("allpreferences")) {
  latestResultStore = JSON.parse(sessionStorage.getItem("allpreferences"));
}
const AutomatedSchedule = () => {
  const [schedule, setSchedule] = reactExports.useState([]);
  const [isScheduleLoading, setIsScheduleLoading] = reactExports.useState(false);
  let [formData, setFormData] = reactExports.useState({});
  let [maxContinuousHours, setMaxContinuousHours] = reactExports.useState(4);
  let [breakBetweenContinuousHours, setBreakBetweenContinuousHours] = reactExports.useState(1);
  let existingPreferences = localStorage.getItem("preferences");
  let existingStartTime = localStorage.getItem("startTime");
  let existingStartDate = localStorage.getItem("startDate");
  let timeGap = localStorage.getItem("timeGap") || 10;
  let [preferences, setPreferences] = reactExports.useState(existingPreferences ? JSON.parse(existingPreferences) : {});
  let initialStartTime = /* @__PURE__ */ new Date();
  if (existingStartDate) {
    initialStartTime = new Date(existingStartDate);
  }
  initialStartTime.setHours(9, 0, 0, 0);
  if (existingStartTime) {
    let pieces = existingStartTime.split(":");
    initialStartTime.setHours(pieces[0], pieces[1].split(" ")[0], 0, 0);
  }
  const { row: eventDetails } = useBackend("/EventJson/Get", {
    select: "EVId,JsonSettings",
    doCache: true
  });
  let jsonSettings = eventDetails?.JsonSettings;
  let eventJsonSettings = jsonSettings ? JSON.parse(jsonSettings) : {};
  let scheduleListPreferences = eventJsonSettings.scheduleSettings?.scheduleListPreferences;
  let scheduleStartTime = eventJsonSettings.scheduleSettings?.scheduleStartTime;
  let scheduleStartDate = eventJsonSettings.scheduleSettings?.scheduleStartDate;
  reactExports.useEffect(() => {
    if (scheduleStartTime) {
      existingStartTime = scheduleStartTime;
    }
    if (scheduleStartDate) {
      existingStartDate = scheduleStartDate;
    }
    if (scheduleListPreferences) {
      setPreferences(scheduleListPreferences);
    }
  }, [eventDetails]);
  const { rows: eventStages, status: ESStatus } = useBackend("/EventStagesJson/Get", {
    select: "ESGId,Title,Venue",
    limit: 1e3,
    offset: 0,
    filter: { status: 1 },
    doCache: true
  });
  const { rows: competitionsStructures, status: CSStatus } = useBackend("/CompetitionStructureJson/GetReadyToStart", {
    filter: { ParticipantType: 1, status: 1 },
    sort: { sortOrder: "ASC", sortColumn: "GroupOrder" },
    select: "CompetitionStructureId,CompetitionItem,CompetitionItemTitle,GroupGroupName,ParticipantType,ParticipantTypeTitle,MaximumMinutes,MaximumSeconds,Gender,Language,GenderGenderTitle,LanguageLanguageName,CompetitionStructureId,CompetitionItem,ParticipantType,MaximumMinutes,MaximumSeconds",
    doCache: true,
    limit: 1e3,
    offset: 0
  });
  const { rows: participants, status: CPStatus } = useBackend("/CompetitionParticipantsJson/Get", {
    select: "ParticipantId,IdentityNumber,Competition,Candidate,Team",
    filter: { ParticipantType: 1, status: 1 },
    doCache: true,
    limit: 1e4,
    offset: 0
  });
  const { rows: userRoles, status: URStatus } = useBackend("/UsersRolesPlusUsersJson/Get", {
    select: "UserId,UserName,UserRoleId,UserRoleId,UserJsonSettings,UserDobString,UserImage,UserMobile,UserPhone,Email,Group,IdentityNumber,CandidateUser,UserJsonSettings",
    filter: { status: 1 },
    doCache: true,
    limit: 1e4,
    offset: 0
  });
  const { rows: teams } = useBackend("/CompetitionParticipantsTeamsJson/Get", {
    select: "TeamId,TeamName,TeamStrength,TeamMembersList,TeamMembers,TeamStrength,IdentityNumber",
    filter: { status: 1 },
    doCache: true,
    limit: 1e4,
    offset: 0
  });
  let { rows: competitions, status: CItatus } = useBackend("/competitionItemsJson/Get", {
    select: "CompetitionId,Title,Category,CategoryCategoryName",
    filter: { status: 1 },
    limit: 1e3,
    doCache: true
  });
  useBackend("/CompetitionParticipantsTeamMembersJson/Get", {
    select: "*",
    limit: 1e3,
    filter: { status: 1 },
    doCache: true
  });
  let { rows: results, status: CSHStatus } = useBackend("/CompetitionScheduleJson/Get", {
    filter: { CompetitionParticipantType: 1, status: 1 },
    select: "ScheduledStartTime,Stage,Competition,CompetitionParticipantType,ExpectedTotalTimeInMinutes,Ischeduled,ScheduledEndTime,CompetitionCompetitionItem,CompetitionCompetitionItemTItle,CompetitionCompetitionStructureId,CompetitionMaximumMinutes,CompetitionMaximumSeconds,CompetitionMinimumMinutes,CompetitionMinimumSeconds,CompetitionWarningMinute,CompetitionWarningSecond,Phase,PhaseTitle,StageTitle,Status,Event,EventEventName,Order,CreatedBy,CreatedDate,ModifiedDate,ScheduleId,JsonSettings,EventGlobal,Participants,CompetitionPreviosGapInMinutes,AvoidChangeStage",
    limit: 1e3,
    doCache: true,
    offset: 0
  });
  let scheduleEntries = [];
  if (results?.length && competitionsStructures?.length) {
    results = results.filter((result) => competitionsStructures.some((structure) => structure.CompetitionStructureId === result.Competition));
  }
  let isLoading = isDataLoading(ESStatus, CSStatus, CPStatus, URStatus, CItatus, CSHStatus);
  let timelineItemDuration = 10;
  let perBlockHeight = 70;
  let timeStartAt = initialStartTime;
  let hoursExpected = 72;
  let timelineItems = hoursExpected * 60 / timelineItemDuration;
  let timelineItemsArray = Array.from(Array(timelineItems), (_, index) => {
    const minutes = index * timelineItemDuration;
    const time = new Date(timeStartAt.getTime() + minutes * 60 * 1e3);
    return time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  });
  reactExports.useEffect(() => {
    if (!isLoading) {
      if (competitionsStructures && participants && eventStages && results) {
        setIsScheduleLoading(false);
        resetTimingAndRearrangeSchedules();
      }
    }
  }, [isLoading]);
  const resetTimingAndRearrangeSchedules = async () => {
    LazyRun(async () => {
      if (!isScheduleLoading) {
        setIsScheduleLoading(true);
        let prefKey = JSON.stringify(preferences);
        if (latestResultStore[initialStartTime + "_" + prefKey]) {
          setSchedule(latestResultStore[initialStartTime + "_" + prefKey]);
        }
        let participantsIds = {};
        participants.forEach((participant) => {
          if (participant.Team == 0) {
            participantsIds[participant.Candidate] = userRoles.find((user) => user.UserRoleId === participant.Candidate)?.IdentityNumber ?? "";
          } else {
            participantsIds[participant.Team] = teams.find((team) => team.TeamId === participant.Team)?.IdentityNumber ?? "";
          }
          if (!participantsIds[participant.Candidate]) {
            delete participantsIds[participant.Candidate];
          }
        });
        const stageSchedule = initializeStageSchedule();
        const missingCompetitionStructures = getMissingCompetitionStructures();
        let competitionsSchedules = mergeSchedulesWithMissingStructures(missingCompetitionStructures);
        for (let result of competitionsSchedules) {
          const event = prepareEvent(result, participantsIds);
          const availableStage = findAvailableSlotAcrossStages(event, stageSchedule);
          if (availableStage) {
            await updateStageSchedule(availableStage, event, stageSchedule);
          }
        }
        latestResultStore[initialStartTime + "_" + prefKey] = stageSchedule;
        sessionStorage.setItem("allpreferences", JSON.stringify(latestResultStore));
        setSchedule(stageSchedule);
        setIsScheduleLoading(false);
      }
    }, 2e3);
  };
  const initializeStageSchedule = () => {
    const schedule2 = {};
    eventStages.forEach((stage) => {
      schedule2[stage.ESGId] = [];
    });
    setSchedule(schedule2);
    return schedule2;
  };
  const getMissingCompetitionStructures = () => {
    return competitionsStructures.filter((structure) => !scheduleEntries.some((result) => result.Competition === structure.CompetitionStructureId));
  };
  const onValueChange = (e, key) => {
    let newValue = e.target.value;
    localStorage.setItem(key, newValue);
    setFormData({ ...formData, [key]: newValue });
    setTimeout(() => {
      setIsScheduleLoading(false);
      resetTimingAndRearrangeSchedules();
    }, 1e3);
  };
  const mergeSchedulesWithMissingStructures = (missingStructures) => {
    let mergedSchedules = [...scheduleEntries];
    if (missingStructures.length > 0) {
      mergedSchedules.push(
        ...missingStructures.map((missingCompetition) => ({
          CompetitionStructureId: missingCompetition.CompetitionStructureId,
          Competition: missingCompetition.CompetitionStructureId,
          CompetitionCompetitionItemTitle: missingCompetition.CompetitionItemTitle,
          GroupGroupName: missingCompetition.GroupGroupName,
          CompetitionParticipantTypeTitle: missingCompetition.ParticipantTypeTitle,
          CompetitionMaximumMinutes: missingCompetition.MaximumMinutes,
          CompetitionMaximumSeconds: missingCompetition.MaximumSeconds,
          CompetitionGenderGenderTitle: missingCompetition.GenderGenderTitle,
          CompetitionLanguageLanguageName: missingCompetition.LanguageLanguageName
        }))
      );
    }
    return mergedSchedules;
  };
  const prepareEvent = (result, participantsIds) => {
    const competition = competitionsStructures.find((structure) => structure.CompetitionStructureId === result.Competition);
    const competitionCategory = competitions.find((c) => c.CompetitionId === competition.CompetitionItem);
    if (!competition?.MaximumMinutes) {
      console.error("Competition Maximum Minutes not found for competition: ", competition);
    }
    const timeLimit = parseFloat(competition?.MaximumMinutes || 20);
    const participantCount = participants.filter((p) => p.Competition === result.Competition).length;
    const offStageIDs = [8, 1, 105, 107];
    let isOffStage = offStageIDs.includes(competitionCategory.Category);
    const totalDuration = calculateTotalDuration(timeLimit, competition, participantCount, isOffStage);
    return {
      CompetitionStructureId: competition.CompetitionStructureId,
      Title: `${competition.ParticipantType == 1 ? "🕺" : "👫"} ${competition.GroupGroupName} ${competition.CompetitionItemTitle}${competition.Gender != 3 ? " " + competition.GenderGenderTitle : ""} ${competition.Language != 4 ? " " + competition.LanguageLanguageName : ""}`,
      Duration: totalDuration,
      ParticipantsCount: participantCount,
      MaximumMinutes: timeLimit,
      perTimeLimit: competition.MaximumMinutes,
      isOffStage,
      Logs: [],
      allParticipants: participants.filter((p) => p.Competition === competition.CompetitionStructureId).map((p) => p.Candidate > 0 ? p.Candidate : p.Team),
      Participants: participants.filter((p) => p.Competition === competition.CompetitionStructureId && participantsIds[p.Candidate > 0 ? p.Candidate : p.Team]).map((p) => participantsIds[p.Candidate > 0 ? p.Candidate : p.Team])
    };
  };
  const calculateTotalDuration = (timeLimit, competition, participantCount, isOffStage) => {
    const buffer = parseFloat(timeGap) || 10;
    let totalDuration = isOffStage ? timeLimit : timeLimit * participantCount + buffer;
    return totalDuration % 10 === 0 ? totalDuration : totalDuration + (10 - totalDuration % 10);
  };
  const updateStageSchedule = async (availableStage, event, schedule2) => {
    const totalBlockSpace = event.Duration / timelineItemDuration * perBlockHeight;
    if (!schedule2[availableStage.ESGId]) {
      schedule2[availableStage.ESGId] = [];
    }
    if (totalBlockSpace > 0) {
      schedule2[availableStage.ESGId].push({
        ...event,
        ...availableStage,
        Height: totalBlockSpace
      });
      setSchedule({ ...schedule2 });
      await new Promise((resolve) => setTimeout(resolve, 1e3));
    }
  };
  let isPreferrenceMatched = (newEvent, stageId) => {
    let stagePreferences = preferences[stageId];
    if (!stagePreferences) return false;
    let competition = competitionsStructures.find((structure) => structure.CompetitionStructureId === newEvent.CompetitionStructureId);
    return stagePreferences.find((preference) => preference == competition.CompetitionItem);
  };
  const findAvailableSlotAcrossStages = (newEvent, stageSchedule) => {
    for (let idx = 0; idx < timelineItemsArray.length; idx++) {
      const startPosition = idx * perBlockHeight;
      const expectedBlocks = newEvent.Duration / timelineItemDuration;
      const endPosition = startPosition + perBlockHeight * expectedBlocks;
      const slotStartTime = calculateSlotStartTime(timelineItemsArray[idx]);
      const slotEndTime = new Date(slotStartTime);
      slotEndTime.setMinutes(slotEndTime.getMinutes() + newEvent.Duration);
      for (let stage of eventStages) {
        const stageEvents = stageSchedule[stage.ESGId] || [];
        if (!isPreferrenceMatched(newEvent, stage.ESGId)) {
          continue;
        }
        let timeObject = {
          StartTime: slotStartTime,
          EndTime: slotEndTime,
          topPosition: startPosition,
          bottomPosition: endPosition,
          stage,
          ESGId: stage.ESGId
        };
        if (isSlotAvailable(timeObject, stageEvents)) {
          if (!isSameTimeOtherParticipations(newEvent, stageSchedule, timeObject)) {
            return {
              ...timeObject
            };
          }
        }
      }
    }
    return null;
  };
  const isSameTimeOtherParticipations = (newEvent, stageSchedule, slot) => {
    for (let stage of eventStages) {
      if (slot?.stage?.Title != stage.Title) {
        if (newEvent.CompetitionStructureId == 5622) ;
        const stageEvents = stageSchedule[stage.ESGId] || [];
        for (var stageEvent of stageEvents) {
          let isSameSlotOrNearOccupied = false;
          if (slot.topPosition < stageEvent.bottomPosition && slot.bottomPosition > stageEvent.topPosition) {
            isSameSlotOrNearOccupied = true;
          }
          if (slot.topPosition > stageEvent.bottomPosition && slot.bottomPosition < stageEvent.topPosition) {
            isSameSlotOrNearOccupied = true;
          }
          if (slot.topPosition > stageEvent.topPosition && slot.topPosition < stageEvent.topPosition) {
            isSameSlotOrNearOccupied = true;
          }
          if (slot.bottomPosition > stageEvent.topPosition && slot.bottomPosition < stageEvent.topPosition) {
            isSameSlotOrNearOccupied = true;
          }
          if (isSameSlotOrNearOccupied) {
            let occupiedParticipants = [];
            for (let participant of stageEvent.Participants) {
              for (let newParticipant of newEvent.Participants) {
                if (participant === newParticipant) {
                  occupiedParticipants.push(participant);
                }
              }
            }
            if (occupiedParticipants.length > 0) {
              newEvent.Logs.push(
                occupiedParticipants.join(", ") + ` - ${stageEvent.StartTime.toLocaleTimeString()} - ${stageEvent.EndTime.toLocaleTimeString()} @ ${stageEvent.stage.Title} - ${stageEvent.Title}`
              );
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  const isSlotAvailable = (slot, stageEvents, newEvent) => {
    let isStageAvailable = true;
    for (let event of stageEvents) {
      if (event.topPosition < slot.bottomPosition && event.bottomPosition > slot.topPosition) {
        isStageAvailable = false;
        return isStageAvailable;
      }
      if (event.topPosition > slot.bottomPosition && event.bottomPosition < slot.topPosition) {
        isStageAvailable = false;
        return isStageAvailable;
      }
      if (event.topPosition > slot.topPosition && event.topPosition < slot.topPosition) {
        isStageAvailable = false;
        return isStageAvailable;
      }
      if (event.bottomPosition > slot.topPosition && event.bottomPosition < slot.topPosition) {
        isStageAvailable = false;
        return isStageAvailable;
      }
      if (!isStageAvailable) {
        return isStageAvailable;
      }
    }
    return isStageAvailable;
  };
  const calculateSlotStartTime = (time) => {
    const timePieces = time.split(":");
    const slotStartTime = new Date(initialStartTime);
    slotStartTime.setHours(timePieces[0], timePieces[1].split(" ")[0], 0, 0);
    return slotStartTime;
  };
  const printSchedule = () => {
    window.print();
  };
  const onChangePreference = (e, stageId) => {
    let selectedCompetitionIds = Array.from(e.target.selectedOptions, (option) => option.value);
    let existingCompetitionIds = preferences[stageId] || [];
    let removedCompetitionIds = existingCompetitionIds.filter((id) => selectedCompetitionIds.includes(id));
    existingCompetitionIds = existingCompetitionIds.filter((id) => !removedCompetitionIds.includes(id));
    let addedCompetitionIds = selectedCompetitionIds.filter((id) => !removedCompetitionIds.includes(id));
    existingCompetitionIds = [.../* @__PURE__ */ new Set([...existingCompetitionIds, ...addedCompetitionIds])];
    preferences[stageId] = existingCompetitionIds;
    setPreferences({ ...preferences });
    localStorage.setItem("preferences", JSON.stringify(preferences));
    setTimeout(() => {
      storePreferences();
      resetTimingAndRearrangeSchedules();
    }, 1e3);
  };
  const storePreferences = () => {
    handleSave(eventDetails, {
      scheduleListPreferences: preferences,
      scheduleStartTime: initialStartTime,
      scheduleStartDate: initialStartTime
    });
  };
  const onChangeStartTime = (e) => {
    let newStartTime = e.target.value;
    let pieces = newStartTime.split(":");
    timeStartAt.setHours(pieces[0], pieces[1].split(" ")[0], 0, 0);
    localStorage.setItem("startTime", newStartTime);
    existingStartTime = newStartTime;
    setTimeout(() => {
      storePreferences();
      resetTimingAndRearrangeSchedules();
    }, 1e3);
  };
  const onChangeStartDate = (e) => {
    const newStartDate = new Date(e.target.value);
    newStartDate.setHours(9, 0, 0, 0);
    if (existingStartTime) {
      let pieces = existingStartTime.split(":");
      newStartDate.setHours(pieces[0], pieces[1].split(" ")[0], 0, 0);
    }
    timeStartAt = newStartDate;
    existingStartTime = newStartDate;
    localStorage.setItem("startDate", newStartDate);
    setTimeout(() => {
      storePreferences();
      resetTimingAndRearrangeSchedules();
    }, 1e3);
  };
  let formatttedddmmyyyyDate = initialStartTime.toISOString().split("T")[0];
  const saveSchedule = () => {
    let order = 1;
    for (let stageId in schedule) {
      for (let event of schedule[stageId]) {
        let startTime = event.StartTime;
        let endTime = event.EndTime;
        let ESGId = event.ESGId;
        let postData = {
          ScheduledStartTimeString: startTime,
          ScheduledEndTimeString: endTime,
          Stage: ESGId,
          Competition: event.CompetitionStructureId,
          order
        };
        order++;
        let existingSchedule = results.find((result) => result.Competition === event.CompetitionStructureId);
        if (existingSchedule) {
          postData.scheduleId = existingSchedule.ScheduleId;
        }
        post("/CompetitionScheduleJson/Save", postData);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Automated Schedule",
        subHeading: "Generate and manage automated competition schedules",
        rightChildren: !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-x-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700", onClick: saveSchedule, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-sm", children: "save" }),
            "Save"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover", onClick: printSchedule, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-sm", children: "print" }),
            "Print"
          ] })
        ] })
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between flex-col w-full print-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between  w-full print:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex timeline flex-col w-32 bg-surface", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "preferredStartDate", className: "block text-sm font-medium text-onSurfaceVariant p-2", children: "Preferred Start Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: formatttedddmmyyyyDate,
              className: "p-2 border-b-2 border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
              id: "preferredStartDate",
              name: "preferredStartDate",
              onChange: (e) => onChangeStartDate(e)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "time",
              value: existingStartTime,
              className: "p-2 border-b-2 border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
              id: "preferredStartDate",
              name: "preferredStartDate",
              onChange: (e) => onChangeStartTime(e)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: timeGap,
              className: "p-2 border-b-2 border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
              id: "timeGap",
              name: "timeGap",
              onChange: (e) => onValueChange(e, "timeGap")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 h-full w-full", children: Object.entries(schedule).map(([stageId, events]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-2 border-b-2 shadow-md relative flex-1 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
            eventStages.find((stage) => stage.ESGId === parseInt(stageId))?.Title,
            " Preferences"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: preferences[stageId],
              onChange: (e) => onChangePreference(e, stageId),
              multiple: true,
              className: "competitionsPrefernces w-full p-2 border-b-2 border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-96",
              children: competitions.map((competition, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: competition.CompetitionId, children: competition.Title }, idx))
            }
          )
        ] }, "stage_" + stageId)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between  w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex timeline flex-col min-w-32 bg-surface", children: timelineItemsArray.map((time, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex items-center border-b-2 text-center bg-white p-2",
            style: {
              height: `${perBlockHeight}px`
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20", children: time })
          },
          idx
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 h-full w-full", children: Object.entries(schedule).map(([stageId, events]) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface border-b-2 shadow-md relative flex-1 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col ", children: events.map((event, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-6 max-w-full flex-1 flex min-w-72", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white absolute border-x-2 border-darkprimary/40 p-2 shadow-sm border-b-2 flex overflow-y-auto justify-between w-full",
            style: {
              height: `${event.Height}px`,
              top: `${event.topPosition}px`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[80%] overflow-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-green-800 font-medium text-xs pb-1 border-b-2 whitespace-nowrap text-ellipsis overflow-hidden", children: event.Title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-blue-900 font-medium text-sm py-1 border-b-2 whitespace-nowrap ", children: [
                  new Date(event.StartTime).toLocaleTimeString(),
                  " - ",
                  new Date(event.EndTime).toLocaleTimeString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white shadow p-2", children: event.isOffStage ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-2xl text-amber-700", children: "airline_seat_recline_normal" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-2xl text-green-600", children: "podium" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow p-2 justify-center text-center text-xs font-bold text-yellow-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-2xl text-yellow-700", children: "settings_accessibility" }),
                    event.ParticipantsCount
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow p-2 justify-center text-center text-xs font-bold text-pink-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-2xl text-pink-700", children: "hourglass_top" }),
                    event.perTimeLimit ?? "?"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow p-2 justify-center text-center text-xs font-bold text-purple-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-2xl text-purple-700", children: "timer" }),
                    event.Duration,
                    "m"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: event.Logs?.map((log, idx2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-600 text-xs", children: log }, idx2)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col overflow-y-auto bg-white max-h-full pr-4 text-xs", children: event.Participants?.map((participant, idx2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center p-2 bg-white text-onSurfaceVariant font-medium border-b-2 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: participant }) }, idx2)) })
            ]
          },
          idx
        ) }, stageId + "_" + idx)) }) }, stageId)) })
      ] })
    ] })
  ] }) });
};
export {
  AutomatedSchedule as default
};
