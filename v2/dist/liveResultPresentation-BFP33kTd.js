import { r as reactExports, u as useBackend, j as jsxRuntimeExports, i as classNames } from "./main-B7w5eCOl.js";
import { R as ReactConfetti, F as ForwardRef$1, a as ForwardRef$2 } from "./react-confetti-DVtnQvIG.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { L as LazyRun } from "./lazyFunction-C5FUcoD8.js";
import { m as motion } from "./proxy-B72BOR8r.js";
function ArrowsPointingOutIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(ArrowsPointingOutIcon);
const storedShowedItems = sessionStorage.getItem("showedItems") ? JSON.parse(sessionStorage.getItem("showedItems")) : [];
const useWindowSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};
const LiveResultPresentation = () => {
  const { row: results } = useBackend("/CoordinatorJson/GetToppers", {
    filter: { IsAwards: false, IsIndividual: false, IsPodium: true },
    select: "BonusPoints,CandidateRegistrationId,CandidateUser,CandidateUserMobile,CandidateUserPhone,CandidateUserProfilePicture,ChampionName,CompetitionCompetitionItemTitle,CompetitionGender,CompetitionGenderGenderTitle,CompetitionGroupGroupName,CompetitionLanguage,CompetitionLanguageLanguageName,Grade,GradePoints,IdentityNumber,Items,JudgeReport,ParticipantType,Points,RankBonusPoints,ScorecardIdRank,ScorecardIdRankTitle,Status,TopGroupBy,TotalPoints,User,ParticipantCompetition",
    doCache: true,
    limit: 1e5,
    offset: 0
  });
  const { rows: levels } = useBackend("/EventLevelsJson/Get", {
    limit: 1e5,
    offset: 0
  });
  const [isAnnouncement, setIsAnnouncement] = reactExports.useState(false);
  const [isCounting, setIsCounting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isAnnouncement) {
      LazyRun(() => {
        setIsAnnouncement(false);
      }, 3e3);
    }
  }, [isAnnouncement]);
  var resultRankOrderInPodium = ["Second", "First", "Third"];
  var resultShowOrderInPodium = ["Third", "Second", "First"];
  const CompetitionResults = results?.CompetitionResults;
  const flattenResults = CompetitionResults?.map((competition) => {
    return competition.Competitions.map((comp) => {
      return {
        Competition: comp.CompetitionCompetitionItemTitle,
        Group: comp.CompetitionGroupGroupName,
        ...comp,
        Results: comp.Results.sort((a, b) => resultRankOrderInPodium.indexOf(a.ScorecardIdRankTitle) - resultRankOrderInPodium.indexOf(b.ScorecardIdRankTitle))
      };
    });
  }).flat();
  const [currentCompetitionIndex, setCurrentCompetitionIndex] = reactExports.useState(0);
  let [showedItems, setShowedItems] = reactExports.useState(storedShowedItems);
  const currentCompetition = flattenResults?.[currentCompetitionIndex];
  const currentResults = currentCompetition?.Results || [];
  const nextWinner = () => {
    setIsAnnouncement(false);
    const refactorResultOrder = [...currentResults].sort((a, b) => resultShowOrderInPodium.indexOf(a.ScorecardIdRankTitle) - resultShowOrderInPodium.indexOf(b.ScorecardIdRankTitle));
    const nextResultIndex = refactorResultOrder.findIndex((result) => !showedItems.includes(result.ParticipantCompetition + "_" + result.ScorecardIdRank));
    if (nextResultIndex === -1) {
      nextSlide();
    } else {
      const updatedShowedItems = [...showedItems, currentResults[nextResultIndex].ParticipantCompetition + "_" + currentResults[nextResultIndex].ScorecardIdRank];
      sessionStorage.setItem("showedItems", JSON.stringify(updatedShowedItems));
      setShowedItems(updatedShowedItems);
      setIsAnnouncement(true);
    }
  };
  const prevSlide = () => {
    const isFirstCompetition = currentCompetitionIndex === 0;
    setCurrentCompetitionIndex(isFirstCompetition ? flattenResults?.length - 1 : currentCompetitionIndex - 1);
  };
  const nextSlide = () => {
    const isLastCompetition = currentCompetitionIndex === flattenResults?.length - 1;
    setCurrentCompetitionIndex(isLastCompetition ? 0 : currentCompetitionIndex + 1);
    if (!isLastCompetition) {
      setIsCounting(true);
    }
  };
  const selectCompetition = (index) => {
    setCurrentCompetitionIndex(index);
    let element = document.getElementById("scrollresults");
    if (!element || !element.children || !element.children[index]) {
      return;
    }
    let child = element.children[index];
    let containerWidth = element.offsetWidth;
    let childWidth = child.offsetWidth;
    let offset = child.offsetLeft;
    let centerOffset = offset - containerWidth / 2 + childWidth / 2;
    let maxScrollLeft = element.scrollWidth - containerWidth;
    let targetScrollLeft = Math.min(Math.max(centerOffset, 0), maxScrollLeft);
    element.scroll({
      left: targetScrollLeft,
      behavior: "smooth"
    });
  };
  const fullScreen = () => {
    document.documentElement.requestFullscreen();
  };
  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.key === "ArrowRight") {
      nextWinner();
    }
    if (e.key === "ArrowLeft") {
      prevSlide();
    }
  };
  reactExports.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentResults, showedItems]);
  const { width, height } = useWindowSize();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Live Result Presentation",
        subHeading: "Present competition results in an engaging fullscreen format with podium animations",
        rightChildren: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: fullScreen,
            className: "inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "-ml-0.5 h-5 w-5", "aria-hidden": "true" }),
              "Fullscreen"
            ]
          }
        )
      }
    ),
    isAnnouncement && /* @__PURE__ */ jsxRuntimeExports.jsx(ReactConfetti, { numberOfPieces: 500, recycle: true, width, tweenDuration: 1e3, height }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fixed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col bg-gradient-to-t from-surface to-surfaceCard rounded-xl border border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full space-y-4 justify-between h-full min-h-screen flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-semibold text-darkprimary mb-2 text-center border-pink-200 border-b-2 py-4 mt-5", children: [
        currentCompetition?.Competition,
        " - ",
        currentCompetition?.Group
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row justify-center space-x-4 p-10 min-h-[50vh]", children: currentResults.map(
        (result, index) => showedItems.includes(result.ParticipantCompetition + "_" + result.ScorecardIdRank) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { y: -300, opacity: 0, scale: 0.5, zIndex: 9 },
            animate: { y: 0, opacity: 1, scale: 1, zIndex: 9 },
            exit: { y: 300, opacity: 0 },
            transition: { duration: 0.5 },
            style: {
              backgroundImage: result.ScorecardIdRankTitle === "First" ? "linear-gradient(rgb(203 174 20), rgb(207 175 3 / 80%)), url(https://app.etalenter.com/Content/Images/result-card/rank-back-img.png)" : result.ScorecardIdRankTitle === "Second" ? "linear-gradient(to bottom, rgb(14 155 226 / 70%), rgb(14 155 226 / 70%)), url('https://app.etalenter.com/Content/Images/result-card/rank-back-img.png')" : "linear-gradient(to bottom, rgb(15 160 6 / 70%), rgb(15 160 6 / 70%)), url('https://app.etalenter.com/Content/Images/result-card/rank-back-img.png')"
            },
            className: classNames(
              "flex flex-col items-center justify-center rounded-lg shadow-lg p-4 min-w-80 relative",
              "bg-cover bg-center bg-no-repeat",
              result.ScorecardIdRankTitle === "First" ? "pt-8" : result.ScorecardIdRankTitle === "Second" ? "pt-6" : "pt-4",
              result.ScorecardIdRankTitle === "First" ? "z-50" : result.ScorecardIdRankTitle === "Second" ? "z-5" : "z-0"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold gold-letter text-gray-100 drop-shadow-xl justify-center flex flex-col text-center mb-4 ", children: [
                result.ScorecardIdRankTitle,
                result.ScorecardIdRankTitle === "First" && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://app.etalenter.com/Content/Images/result-card/winner_icon_1.png", alt: "Gold", className: "h-48 w-48 mt-3 shadow-sm" }),
                result.ScorecardIdRankTitle === "Second" && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://app.etalenter.com/Content/Images/result-card/winner_icon_2.png", alt: "Silver", className: "h-32 w-32 mt-3 shadow-sm" }),
                result.ScorecardIdRankTitle === "Third" && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://app.etalenter.com/Content/Images/result-card/winner_icon_3.png", alt: "Bronze", className: "h-24 w-24 mt-3 shadow-sm" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-white pb-4 drop-shadow-xl", children: [
                result.CandidateUserName,
                " ",
                result.TeamTeamName
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-md font-semibold text-white text-center flex flex-col gap-2", children: levels?.slice(1)?.map((level, levelIndex) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "drop-shadow-xl", children: result[`Candidate${level.LevelName}Name`] ?? result[`Team${level.LevelName}Name`] }, levelIndex);
              }) })
            ]
          },
          index
        )
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row justify-start p-10 w-full overflow-x-auto", id: "scrollresults", children: flattenResults?.map((competition, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: `border-2 p-4 cursor-pointer rounded-md ${index === currentCompetitionIndex ? "bg-blue-100" : "bg-surfaceCard"}`,
          onClick: () => selectCompetition(index),
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.9 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-gray-700", children: competition.Competition })
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-16 pb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: nextWinner,
            type: "button",
            className: "rounded-full bg-rose-600 p-3 text-white shadow-sm hover:bg-rose-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { "aria-hidden": "true", className: "h-8 w-8" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: nextSlide,
            type: "button",
            className: "rounded-full bg-primary p-3 text-white shadow-sm hover:bg-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { "aria-hidden": "true", className: "h-8 w-8" })
          }
        )
      ] })
    ] }) }) })
  ] }) });
};
export {
  LiveResultPresentation as default
};
