
function changeToFinish() {
  var additionalSettings =
    userObj.user.JsonSettings;
  if (additionalSettings?.MarkAbsentOrScoreMarkIsMandatory == "Yes") {
    var allFilled = true;
    var missingItems = [];
    $(".scorecandidatestab").each(function () {
      var th = $(this);
      var isAbsent = th.find(".CandidateAbsentStatus").is(":visible");
      var isScored = th.find(".CandidateScore").text().trim() != "" && th.find(".CandidateScore").text().trim() != "0";
      var participantName = th.find(".CandidateChessCode").text().trim() || th.find(".CandidateName").text().trim() || "Unknown";
      if (!isAbsent && !isScored) {
        allFilled = false;
        missingItems.push(participantName);
      }
    });

    if (!allFilled) {
      alert("Missing Scores/Absent Status for some items: " + missingItems.join(", ") + ". Must fill all scores or mark as absent before finishing.", false, false, false, "w", 5000);
      return;
    }
  }



  showabsolutespinner($("#judgesscorepanel"));
  var newcurrentcompetitiondata = {};
  newcurrentcompetitiondata.Competition = $("#competitionoptdropdown").val();
  newcurrentcompetitiondata.CompetitionCompetitionItemTitle = $(
    "#competitionoptdropdown"
  )
    .find("option:selected")
    .text();
  newcurrentcompetitiondata.ScoreStatus = 1;
  newcurrentcompetitiondata.AllotementId = $(
    "#competitionoptdropdown option:selected"
  ).attr("allotmentId");

  newcurrentcompetitiondata.competitionCompetitionStatus = $(
    "#competitionoptdropdown option:selected"
  ).attr("competitionCompetitionStatus");

  $.post(
    "/JudgesAllotmentJson/SaveJudgeStatus",
    newcurrentcompetitiondata,
    function () {
      //alert("Changed competition status");
      $.binder.reload($("#competitionoptdropdown"));
      hideabsolutespinner($("#judgesscorepanel"));
    }
  );
}

(function ($) {
  $(window).on("scroll", function (e) {
    if ($(".scorecandidatestabview").length > 0) {
      $(".scorecandidateslist").css(
        "max-height",
        $(window).height() - 80 + "px"
      );
      if ($(window).scrollTop() > $(".scorecandidatestabview").offset().top) {
        $(".scorecandidateslist").css(
          "margin-top",
          $(window).scrollTop() -
          $(".scorecandidatestabview").offset().top +
          50 +
          "px"
        );
      } else {
        $(".scorecandidateslist").css("margin-top", 0 + "px");
      }
    }
  });

  function isFloat(value) {
    if (
      typeof value === "number" &&
      !Number.isNaN(value) &&
      !Number.isInteger(value)
    ) {
      return true;
    }

    try {
      var floatValue = parseFloat(value);
      return !Number.isNaN(floatValue) && !Number.isInteger(floatValue);
    } catch (e) {
      console.error("Error in isFloat:", e);
    }

    return false;
  }

  function isInt(n) {
    return n % 1 === 0;
  }

  // Helper function to toggle save buttons and score inputs based on absent status
  function toggleScoreInputsAndButtons() {
    var isDisabled = false;
    var isBothNotChecked = false;
    if (!isFloat($(".scorebyinput").val())) {
      $(".scorebyinput").val(0);
    }
    if (!$(".markasabsent").is(":checked") && parseFloat($(".scorebyinput").val()) == 0) {
      isBothNotChecked = true;
    } else {
      if (parseFloat($(".scorebyinput").val()) > 0) {
        $(".markasabsent").closest(".checkbox-label").hide();
        $(".markasabsent").prop("checked", false);
        isDisabled = false;
      } else {
        $(".markasabsent").closest(".checkbox-label").show();
        isDisabled = true;
      }
    }

    if (!isBothNotChecked) {
      if (isDisabled) {
        // Hide save buttons and disable all score inputs when marking as absent
        $(".saveindividualscoreinput").hide();
        $(".scorerow").hide();
        $(".saveratingscoreinput").hide();
        $(".savemultiscoreinput").hide();
        $(".scorebyinput").prop("disabled", true);
        $(".individualscoreinput").prop("disabled", true);
        $(".ratingscoreinput").prop("disabled", true);
        $(".multiscoreinput").prop("disabled", true);
      } else {
        // Show save buttons and enable all score inputs when not absent
        $(".saveindividualscoreinput").show();
        $(".scorerow").show();
        $(".saveratingscoreinput").show();
        $(".savemultiscoreinput").show();
        $(".scorebyinput").prop("disabled", false);
        $(".individualscoreinput").prop("disabled", false);
        $(".ratingscoreinput").prop("disabled", false);
        $(".multiscoreinput").prop("disabled", false);
      }
    } else {
      // Show save buttons and enable all score inputs when not absent
      $(".saveindividualscoreinput").show();
      $(".scorerow").show();
      $(".saveratingscoreinput").show();
      $(".savemultiscoreinput").show();
      $(".scorebyinput").prop("disabled", false);
      $(".individualscoreinput").prop("disabled", false);
      $(".ratingscoreinput").prop("disabled", false);
      $(".multiscoreinput").prop("disabled", false);
      $(".markasabsent").prop("checked", false);
      $(".markasabsent").closest(".checkbox-label").show();
    }
  }

  function setscorecolor(th, offset, width, disablesetscore, currentElement) {
    th.css("width", offset + "px");
    if (!disablesetscore) {
      th.attr("data-score", offset);
      let score = (offset / width) * 10;
      var percentage = score.toFixed(isInt(score) ? 0 : 1);
      th.attr("data-scorepercentage", percentage);
      //if(th.val()!=percentage) {
      let item1 = th
        .closest(".scorerow")
        .find('[name="Score"]')
        .not($(document.activeElement));
      if (currentElement) {
        item1 = item1.not(th).val(percentage);
      }
      item1.val(percentage);
      // if(!isByScoreByInput) {
      let item2 = th
        .closest(".scorecriteriarow")
        .find(".scorebyinput")
        .not($(document.activeElement));
      if (currentElement) {
        item2 = item2.not(th).val(percentage);
      }
      item2.val(percentage);
      //  }
      //}
    }

    offset = parseInt(offset);
    width = parseInt(width);
    th.removeClass(
      "scorelow scoreavereage scoremedium scoregood scoreexcellent"
    );
    var single = width / 5;
    if (single * 1 > offset) {
      th.addClass("scorelow");
    } else if (single * 2 > offset) {
      th.addClass("scoreavereage");
    } else if (single * 3 > offset) {
      th.addClass("scoremedium");
    } else if (single * 4 > offset) {
      th.addClass("scoregood");
    } else if (single * 5 >= offset) {
      th.addClass("scoreexcellent");
    }
  }

  var competitionoptdropdowndata = {};
  $("body").on(
    "afterappendcomplete",
    "#competitionoptdropdown",
    function (e, data) {

      competitionoptdropdowndata = data.rows;
      $(this).trigger("change");

      if (data.rows.Results && data.rows.Results.length == 0) {
        $(this).prop("disabled", true);
        alert(
          "There are no competitions available/ not assigned to this judge. Please contact the administrator.",
          false,
          false,
          false,
          "w",
          5000
        );
      } else {
        $(this).prop("disabled", false);
      }
    }
  );

  $("body").on("change", "#competitionoptdropdown", function (e) {
    if (competitionoptdropdowndata && competitionoptdropdowndata.Results) {
      var th = $(this);
      var competition = competitionoptdropdowndata.Results.filter(function (c) {
        return (
          c.Competition == th.val() || c.CompetitionStructureId == th.val()
        );
      });
      if (
        competition &&
        competition[0] &&
        competition[0].CompetitionStructureId
      ) {
        $.each(competition[0], function (i, v) {
          competition[0]["Competition" + i] = v;
        });

        competition[0]["Competition"] = competition[0].CompetitionStructureId;
        competition[0]["ScoreStatus"] = $("#ScoreStatus").val();
        competition[0]["AllotementId"] = competition[0].CompetitionStructureId;
      }
      $("#judgesscorepanel").binder({
        Data: competition,
      });
    }
  });

  var judgesScoreCarddata = {};
  $("body").on(
    "afterappendcomplete",
    ".scorecandidatestabview",
    function (e, data) {
      judgesScoreCarddata = {};
      $.each(data.rows.Results, function (i, d) {
        judgesScoreCarddata[d.ParticipantId] = d;
      });
      ////$(this).trigger("click");

      $('.scorecandidateslist>div[data-noresult="true"]').show();
    }
  );
  $("body").on("click", ".allscores .deleterow", function (e) {
    var cl = $(this).closest(".allscores");
    var th = $(this);
    var action = th.attr("data-deleteaction");
    var participantid = $(
      ".scorecandidatestabview .scorecandidatestab.candidateactive"
    ).attr("participantid");
    var scorecardid = $(
      ".scorecandidatestabview .scorecandidatestab.candidateactive"
    ).attr("scorecardid");
    showspinner(cl);
    jldeleterow(th, th, "/JudgesScoreCardJson/Remove", function () {
      $(".scorecandidatestabview").binder();
      $('.scorecandidateslist>div').hide();
      $('.scorecandidateslist>div[data-noresult="true"]').show();
    });
  });

  $("body").on(
    "click",
    ".scorecandidatestabview .scorecandidatestab",
    function (e) {
      if (judgesScoreCarddata) {
        var th = $(this);
        $(".scorecandidatestabview .scorecandidatestab").removeClass(
          "candidateactive"
        );
        th.addClass("candidateactive");
        var judgesScoreCard = judgesScoreCarddata[th.attr("ParticipantId")];

        $(".scorecandidateslist").binder({
          Data: [judgesScoreCard],
        });

        // Check if candidate score is 0 or has no score, then show absent checkbox
        var hasAbsentStatus = th.find(".CandidateAbsentStatus").is(":visible");

        if (hasAbsentStatus) {
          $(".markasabsent").prop("checked", true);
          toggleScoreInputsAndButtons(true);
        } else {
          $(".markasabsent").prop("checked", false);
          toggleScoreInputsAndButtons(false);
        }

      }
    }
  );
  $("body").on(
    "mousemove touchmove",
    ".scorerowoverlaymousetracker",
    function (e, data) {
      var th = $(this);
      if (!th.attr("data-prevented")) {
        var timeout = 500;
        if ($(window).width() < 1000) {
          timeout = 0;
        }
        setscorecolor(
          $(this).next(".scorerowoverlay"),
          e.offsetX,
          th.width(),
          true
        );
        $(this).attr(
          "localoverlayi",
          parseInt(
            $(this).attr("localoverlayi") ? $(this).attr("localoverlayi") : 1
          ) + 1
        );
        var localoverlayi = $(this).attr("localoverlayi");

        $(this)
          .closest(".scorecriteriarow")
          .find(".scorebyinput")
          .val(((e.offsetX / th.width()) * 10).toFixed(1));
        setTimeout(function () {
          if (localoverlayi == th.attr("localoverlayi")) {
            th.closest(".scorecriteriarow")
              .find(".scorebyinput")
              .val(
                (
                  (th.next(".scorerowoverlay").attr("data-score") /
                    th.width()) *
                  10
                ).toFixed(1)
              );
            th.next(".scorerowoverlay").css(
              "width",
              th.next(".scorerowoverlay").attr("data-score") + "px"
            );
            setscorecolor(
              th.next(".scorerowoverlay"),
              th.next(".scorerowoverlay").attr("data-score"),
              th.width(),
              true
            );
          }
        }, timeout);
      }
    }
  );

  $("body").on("change keyup", ".scorebyinput", function (e) {
    var th = $(this);

    if (e.originalEvent) {
      setTimeout(function () {
        let dotsIndex = th.val().indexOf(".");
        if (dotsIndex != th.val().length - 1) {
          var maxScoreDisabled = $("#AllowMoreThanMaxScore").is(":checked");
          if (!maxScoreDisabled) {
            if (th.attr("maxscore")) {
              if (th.val() > parseInt(th.attr("maxscore"))) {
                th.val(0);
              }
            } else if (th.val() > 10) {
              th.val(0);
            }
          }

          // If user enters a score value > 0, hide absent checkbox
          if (parseFloat(th.val()) > 0) {
            $(".markasabsent").closest(".checkbox-label").hide();
            $(".markasabsent").prop("checked", false);
          } else if (parseFloat(th.val()) === 0) {
            // If score becomes 0, show absent checkbox but don't auto-check it
            $(".markasabsent").closest(".checkbox-label").show();
            $(".markasabsent").prop("checked", false);
          }

          var cl = th.closest(".allscores");
          var overlay = th
            .closest(".scorecriteriarow")
            .find(".scorerowoverlay");
          var scorerow = th
            .closest(".scorecriteriarow")
            .find(".scorerowoverlaymousetracker");
          setscorecolor(
            overlay,
            (scorerow.width() * th.val()) / 10,
            scorerow.width(),
            false,
            th
          );

          settotalscore(cl, th, (scorerow.width() * th.val()) / 10, th);
        }
      }, 100);
    }
  });
  $("body").on("keydown", ".individualscoreinput", function (e) {
    if (e.keyCode == 13 && e.originalEvent) {
      e.preventDefault();
      e.stopImmediatePropagation();
      $(this)
        .closest(".individualscorerow")
        .find(".saveindividualscoreinput")
        .trigger("click", true);
    }
  });

  $("body").on("click focus", ".scorebyinput", function (e, force) {
    this.select();
  });

  $("body").on("click", ".saveindividualscoreinput", function (e, force) {
    var th = $(this)
      .closest(".individualscorerow")
      .find(".individualscoreinput");

    if (e.originalEvent || force) {
      if (th.val() < 0) {
        th.val(0);
      } else {
        var cl = th.closest(".jltable");
        var postdata = {};
        postdata.Scores = [];
        cl.find(".individualscorerow").each(function () {
          var formdata = {};
          formdata = $.fn.binder.methods.makepostdata($(this).find("[name]"));

          postdata.Scores.push(formdata);
        });
        var activetab = $(
          ".scorecandidatestabview .scorecandidatestab.candidateactive"
        );
        var totalscore = cl.find(".individualscoreinput").val();
        var participantid = activetab.attr("participantid");
        var scorecardid = activetab.attr("scorecardid");
        cl.find(".individualscorerow").trigger("beforesavetableform");
        hidespinner(cl);

        showspinner(cl);
        if ($("#SelectedJudgeInScoreCard").val()) {
          postdata.JudgeId = $("#SelectedJudgeInScoreCard").val();
        }
        postdata.notes = $("#Notes").val();
        postdata.Absent = 2; // Default to not absent
        $("#Absent").prop("checked", false).trigger("change");
        $(".markasabsent").closest(".checkbox-label").hide();
        activetab.find(".CandidateAbsentStatus").hide();
        activetab.find(".CandidateScore").show();

        $.post(
          cl.find("[data-action]:first").attr("data-action"),
          postdata,
          function (data) {
            remsession("bindmanagercache");
            cl.css("position", "");
            hidespinner(cl);
            ////$(".scorecandidatestabview").binder();
            var currentactiveparticipantId = participantid;
            if (data.Results > 0 && data.Results != ZeroValue) {
              alert("Scored", false, false, "Savedalert", "a", 500);
              activetab.find(".CandidateScore").text(totalscore);
              judgesScoreCarddata[
                currentactiveparticipantId
              ].ParticipantIdScore = totalscore;
              judgesScoreCarddata[
                currentactiveparticipantId
              ].ParticipantIdScorecardId = data.Results;
              judgesScoreCarddata[
                currentactiveparticipantId
              ].Notes = postdata.notes;
            } else {
              alert(
                typeof data.Results == "string"
                  ? data.Results : "Failed to Score, please try again.",
                false,
                false,
                "Savedalert",
                "w",
                1500
              );
            }

            ////$('body').one("beforeappendcomplete",
            ////    ".scorecandidatestabview",
            ////    function (e, data) {
            ////        currentactiveparticipantId = $(".scorecandidatestabview .scorecandidatestab.candidateactive").attr('participantid');
            ////    });
            ////    $('body').one("afterappendcomplete",
            ////        ".scorecandidatestabview",
            ////        function (e, data) {

            ////            if (currentactiveparticipantId == participantid) {
            ////                if (scorecardid == "0") {
            ////                    $(".scorecandidatestabview .scorecandidatestab[participantid=" +
            ////                        participantid +
            ////                        "]").trigger("click");
            ////                }
            ////                $(".scorecandidatestabview .scorecandidatestab[participantid=" +
            ////                    participantid +
            ////                    "]").addClass("candidateactive");
            ////            } else {

            ////            }

            ////            cl.find(".individualscorerow").trigger('aftersavetableform');

            ////        });
            ////    $(".scorecandidatestabview .scorecandidatestab[participantid=" +
            ////        participantid +
            ////        "]").trigger("jlupdaterow", true);
          }
        );
      }
    }
  });

  function settotalscore(cl, th, offset, currentElement) {
    if (th.closest(".individualscore").length > 0) {
      var totalscore = 0;
      let allowedTotalScore = false;
      cl.find(".individualscore .scorerowoverlay").each(function () {
        var indscore = $(this).closest(".scorecriteriarow").find(".scorebyinput").val();
        totalscore += parseFloat(
          indscore
        );

        if (!$(this).is(":visible")) {
          $(this).closest(".scorecriteriarow").find("[name=Score]").val(indscore);
        }
        let item = $(this).closest(".scorecriteriarow").find(".scorebyinput");
        let score = parseFloat($(this).attr("data-scorepercentage"));
        if (item.attr("maxscore")) {
          allowedTotalScore = true;
          //     score=(score/cl.find(".individualscore .scorerowoverlay").length).toFixed(1);
        }
        if (currentElement) {
          item = item.not(currentElement);
        }
        if ($(this).is(":visible")) {
          item.val(score);
        }
      });

      var avearagescore = allowedTotalScore
        ? totalscore
        : totalscore / cl.find(".individualscore .scorerowoverlay").length;
      var total = cl.find(".totalscore .scorerowoverlay");

      var totalpixel =
        (total.prev(".scorerowoverlaymousetracker").width() / 10) *
        avearagescore;

      setscorecolor(
        total,
        totalpixel,
        total.prev(".scorerowoverlaymousetracker").width()
      );
    } else {
      let allowedTotalScore = false;
      cl.find(".individualscore .scorerowoverlay").each(function () {
        let item = $(this).closest(".scorecriteriarow").find(".scorebyinput");
        if (item.attr("maxscore")) {
          allowedTotalScore = true;
        }
      });
      if (!allowedTotalScore) {
        cl.find(".individualscore .scorerowoverlaymousetracker").each(
          function () {
            setscorecolor(
              $(this).next(".scorerowoverlay"),
              offset,
              $(this).width()
            );
          }
        );
      } else {
        let totalScore = th.val();
        cl.find(".individualscore .scorerowoverlay").each(function () {
          let item = $(this).closest(".scorecriteriarow").find(".scorebyinput");
          score = (
            totalScore / cl.find(".individualscore .scorerowoverlay").length
          ).toFixed(1);
          item.val(score);
          let item2 = $(this)
            .closest(".scorecriteriarow")
            .find('[name="Score"]');
          item2.val(score);
        });
      }
    }
  }

  function sendMultiScore(cl) {
    if (cl.find(".multiscorerow").length > 0) {
      var postdata = {};
      postdata.Scores = [];
      var totalScore = 0;
      cl.find(".multiscorerow").each(function () {
        var formdata = {};
        formdata = $.fn.binder.methods.makepostdata($(this).find("[name]"));
        if (formdata.IsDelete == "2") {
          formdata.Score = "0";
        }

        if (formdata.Score != "") {
          postdata.Scores.push(formdata);
          totalScore += parseFloat(formdata.Score);
        }
      });
      
      cl.find('.multicountrowtotal  [name="ScoreCardScore"]').val(totalScore.toFixed(1));
      if(totalScore==0){
       alert("Total score cannot be zero. Please enter valid scores or mark as absent", false, false, "Savedalert", "w", 1500);
      }
      var totalrow = $.fn.binder.methods.makepostdata(
        $(".multicountrowtotal").find("[name]")
      );

      totalrow.IsTotalScore = true;

      postdata.Scores.push(totalrow);
      var activetab = $(
        ".scorecandidatestabview .scorecandidatestab.candidateactive"
      );

      var participantid = activetab.attr("participantid");
      var scorecardid = activetab.attr("scorecardid");
      cl.find("[data-jltableformrow]").trigger("beforesavetableform");
      cl.css("position", "relative");
      if ($("#SelectedJudgeInScoreCard").val()) {
        postdata.JudgeId = $("#SelectedJudgeInScoreCard").val();
      }
      postdata.notes = $("#Notes").val();

      postdata.Absent = 2; // Default to not absent
      $("#Absent").prop("checked", false).trigger("change");
      $(".markasabsent").closest(".checkbox-label").hide();
      activetab.find(".CandidateAbsentStatus").hide();
      activetab.find(".CandidateScore").show();
      hidespinner(cl);
      showspinner(cl);
      $.post("/JudgeJson/SaveScore", postdata, function (data) {
        ////$(".scorecandidatestabview").binder();
        cl.css("position", "");
        hidespinner(cl);
        remsession("bindmanagercache");
        var currentactiveparticipantId = participantid;
        if (data.Results > 0 && data.Results != ZeroValue) {
          alert("Scored", false, false, "Savedalert", "a", 500);
          activetab.find(".CandidateScore").text(totalScore);
          judgesScoreCarddata[currentactiveparticipantId].ParticipantIdScore =
            totalScore;
          judgesScoreCarddata[
            currentactiveparticipantId
          ].ParticipantIdScorecardId = data.Results;
          judgesScoreCarddata[
            currentactiveparticipantId
          ].Notes = postdata.notes;
        } else {
          alert(
            typeof data.Results == "string"
              ? data.Results : "Failed to Score, please try again.",
            false,
            false,
            "Savedalert",
            "w",
            1500
          );
        }
      });
    }
  }

  function sendScore(cl) {
    let allowed = true;
    cl.find(".individualscore .scorebyinput:visible").each(function () {
      if (parseFloat($(this).val()) > -9999) {
        $(this).closest(".form-group").removeClass("has-error has-feedback");
      } else {
        allowed = false;
        $(this)
          .closest(".form-group")
          .addClass("has-error")
          .addClass("has-feedback");
      }
    });
    if (allowed) {
      cl.find('.totalscore [name="ScoreCardScore"]').val(
        cl.find(".totalscore .scorerowoverlay").attr("data-scorepercentage")
      );

      var postdata = {};
      postdata.Scores = [];
      cl.find("[data-jltableformrow]").each(function () {
        var formdata = {};
        formdata = $.fn.binder.methods.makepostdata($(this).find("[name]"));

        postdata.Scores.push(formdata);
      });

      var activetab = $(
        ".scorecandidatestabview .scorecandidatestab.candidateactive"
      );
      var totalscore = cl.find('.totalscore [name="ScoreCardScore"]').val();
      if(parseFloat(totalscore)==0){
       alert("Total score cannot be zero. Please enter valid scores or mark as absent", false, false, "Savedalert", "w", 1500);
       return;
      }
      var participantid = activetab.attr("participantid");
      var scorecardid = activetab.attr("scorecardid");
      cl.find("[data-jltableformrow]").trigger("beforesavetableform");
      cl.css("position", "relative");
      if ($("#SelectedJudgeInScoreCard").val()) {
        postdata.JudgeId = $("#SelectedJudgeInScoreCard").val();
      }

      postdata.notes = $("#Notes").val();

      postdata.Absent = 2;
      $("#Absent").prop("checked", false).trigger("change");
      $(".markasabsent").closest(".checkbox-label").hide();
      activetab.find(".CandidateAbsentStatus").hide();
      activetab.find(".CandidateScore").show();
      hidespinner(cl);

      showspinner(cl);
      $.post(
        cl.find(".totalscore [data-action]:first").attr("data-action"),
        postdata,
        function (data) {
          ////$(".scorecandidatestabview").binder();
          cl.css("position", "");
          hidespinner(cl);
          remsession("bindmanagercache");
          var currentactiveparticipantId = participantid;
          if (data.Results > 0 && data.Results != ZeroValue) {
            alert("Scored", false, false, "Savedalert", "a", 500);
            activetab.find(".CandidateScore").text(totalscore);
            judgesScoreCarddata[currentactiveparticipantId].ParticipantIdScore =
              totalscore;
            judgesScoreCarddata[
              currentactiveparticipantId
            ].ParticipantIdScorecardId = data.Results;
            judgesScoreCarddata[
              currentactiveparticipantId
            ].Notes = postdata.notes;
          } else {
            alert(
              typeof data.Results == "string"
                ? data.Results : "Failed to Score, please try again.",
              false,
              false,
              "Savedalert",
              "w",
              1500
            );
          }
        }
      )
    }
  }

  $("body").on("keydown", ".scorebyinput", function (e) {
    if (e.keyCode == 13 && e.originalEvent) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var cl = $(this).closest(".allscores");

      if (e.originalEvent) {
        sendScore(cl);
      }
    }
  });

  $("body").on("keyup keydown", ".multicount", function (e, force) {
    var cl = $(this).closest(".allscores");

    if (e.originalEvent) {
      var totalScore = 0;
      cl.find(".multiscorerow").each(function () {
        var formdata = {};
        formdata = $.fn.binder.methods.makepostdata($(this).find("[name]"));
        if (formdata.Score) {
          totalScore += parseInt(formdata.Score);
        }
      });

      cl.find('.multicountrowtotal  [name="ScoreCardScore"]').val(totalScore);
    }
  });
  $("body").on("click", ".saveratingscoreinput", function (e, force) {
    var cl = $(this).closest(".allscores");

    if (e.originalEvent) {
      sendScore(cl);
    }
  });
  $("body").on("click", ".savemultiscoreinput", function (e, force) {
    var cl = $(this).closest(".allscores");

    if (e.originalEvent) {
      sendMultiScore(cl);
    }
  });

  $("body").on("click", ".scorerowoverlaymousetracker", function (e) {
    var th = $(this);

    setscorecolor(th.next(".scorerowoverlay"), e.offsetX, th.width());
    th.attr("data-prevented", true);
    setTimeout(function () {
      th.removeAttr("data-prevented");
    }, 3000);

    var cl = th.closest(".allscores");
    settotalscore(cl, th, e.offsetX);

    cl.find('.totalscore .scorebyinput[name="ScoreCardScore"]').val(
      cl.find(".totalscore .scorerowoverlay").attr("data-scorepercentage")
    );

    // Check if participant is marked as absent and update UI accordingly
    
    var isAbsent = $(".markasabsent").is(":checked");
    toggleScoreInputsAndButtons(isAbsent);
  });
  ////$('body').on("aftersavetableformrow",
  ////                ".totalscore div[data-jltableform] > div",
  ////                function (e, data) {

  ////                    ////if (data.Results.ScorecardId) {
  ////                    ////    $(this).find('[name="ScorecardId"]').val(data.Results.ScorecardId);
  ////                    ////    $(this).closest('.allscores').find('[name="ScoreCard"]').val(data.Results.ScorecardId).trigger("change", true);
  ////                    ////    $(".scorecandidatestabview").binder();

  ////                    ////}
  ////                });
  $("body").on(
    "afterappendcomplete",
    ".scorecandidateslist[data-json]",
    function (e, data) {
      if (e.target == e.currentTarget) {
        $(this)
          .find(".totalscore .scorerowoverlay")
          .each(function () {
            var totalObj = $(this);
            var avearagescore = totalObj.attr("data-scorepercentage");

            var totalpixel =
              (totalObj.prev(".scorerowoverlaymousetracker").width() / 10) *
              avearagescore;

            setscorecolor(
              totalObj,
              totalpixel,
              totalObj.prev(".scorerowoverlaymousetracker").width()
            );
          });
        if ($(".multicountrowtotal").length > 0) {
          if ($(".filterScoreCard").val() == 0) {
            $(".filterScoreCard").val(1);
          }
        }
      }
    }
  );
  $("body").on(
    "afterappendcomplete",
    ".updatedscore[data-json]",
    function (e, data) {
      if (e.target == e.currentTarget) {
        $(this)
          .find(".scorerowoverlay")
          .each(function () {
            var obj = $(this);
            var avearagescore = obj.attr("data-scorepercentage");

            var totalpixel =
              (obj.prev(".scorerowoverlaymousetracker").width() / 10) *
              avearagescore;

            setscorecolor(
              obj,
              totalpixel,
              obj.prev(".scorerowoverlaymousetracker").width()
            );
          });
      }
    }
  );

  // Absent functionality
  $("body").on("change", ".markasabsent", function (e) {

    var activetab = $(".scorecandidatestabview .scorecandidatestab.candidateactive");

    if (activetab.length === 0) {
      alert("Please select a candidate first.", "w");
      $(this).prop("checked", false);
      return;
    }

    var participantId = activetab.attr("participantid");
    var isAbsent = $(this).is(":checked") ? "1" : "2";

    var originalStatus = activetab.find(".CandidateAbsentStatus").is(":visible") ? "1" : "2";
    if (isAbsent === originalStatus) {
      // No change in status
      return;
    }
    if (isAbsent === "1") {
      var isTotalEmpty = true;
      $(".totalscore .scorebyinput").each(function () {
        if ($(this).val() && parseFloat($(this).val()) > 0) {
          isTotalEmpty = false;
          return false; // Break loop
        }
      });
      if (!isTotalEmpty) {
        alert("Cannot mark as absent. Scores have already been entered for this participant.", "e");
        $(this).prop("checked", false);
        return;
      }

      toggleScoreInputsAndButtons(true);
    } else {
      toggleScoreInputsAndButtons(false);
    }



    markParticipantAbsent(participantId, isAbsent, activetab);


  });

  function markParticipantAbsent(participantId, absentStatus, activetab) {
    // Check if marking as absent and existing scores need to be deleted
    if (absentStatus === "1" && judgesScoreCarddata[participantId]) {
      var existingScorecardId = judgesScoreCarddata[participantId].ParticipantIdScorecardId;
      
      // If there's an existing scorecard or score, delete it first
      if ((existingScorecardId && existingScorecardId !== "0") ) {
        showspinner(activetab);
        
        // Delete existing score before marking as absent
        var deletePostData = {
          ScorecardId: existingScorecardId,
        };
          let token = JSON.parse(localStorage.getItem("user"))
            ? JSON.parse(localStorage.getItem("user")).token
            : "";
          let headers = { Authorization: "Bearer " + token };

        $.ajax({
          url: "/JudgesScoreCardJson/Remove",
          type: "DELETE",  headers: headers,
          data: deletePostData,
          success: function (deleteResponse) {
            // After successful deletion, proceed with marking as absent
            if (deleteResponse && deleteResponse.Results) {
              // Clear the data in judgesScoreCarddata
              judgesScoreCarddata[participantId].ParticipantIdScorecardId = "0";
              judgesScoreCarddata[participantId].ParticipantIdScore = 0;
              
              // Now mark as absent
              proceedWithMarkAbsent(participantId, absentStatus, activetab);
            } else {
              hidespinner(activetab);
              alert("Failed to delete existing scores. Please try again.", "e");
            }
          },
          error: function () {
            hidespinner(activetab);
            alert("Failed to delete existing scores. Please try again.", "e");
          }
        });
        
        return; // Exit here, proceedWithMarkAbsent will handle the rest
      }
    }
    
    // If no existing scores or not marking as absent, proceed directly
    proceedWithMarkAbsent(participantId, absentStatus, activetab);
  }

  function proceedWithMarkAbsent(participantId, absentStatus, activetab) {
    var postdata = {
      ParticipantId: participantId,
      Absent: parseInt(absentStatus)
    };

    if ($("#SelectedJudgeInScoreCard").val()) {
      postdata.JudgeId = $("#SelectedJudgeInScoreCard").val();
    }

    showspinner(activetab);

    $.post("/CompetitionParticipantsJson/MarkAbsent", postdata, function (data) {
      hidespinner(activetab);

      if (data.Results.success) {
        var statusText = absentStatus === "1" ? "absent" : "present";
        alert("Participant marked as " + statusText, "s");

        // Update the UI
        activetab.attr("absent", absentStatus);

        // Update the absent checkbox
        $(".markasabsent").prop("checked", absentStatus === "1");


        // Update the absent indicator
        if (absentStatus === "1") {
          activetab.find(".CandidateScore").hide();
          activetab.find(".CandidateAbsentStatus").show();
          
          // Clear the score display
          activetab.find(".CandidateScore").text("0");
          
          // Clear all score inputs
          $(".scorebyinput").val("");
          $(".individualscoreinput").val("");
          $(".ratingscoreinput").val("");
          $(".multiscoreinput").val("");
        } else {
          activetab.find(".CandidateAbsentStatus").hide();
          activetab.find(".CandidateScore").show();
        }


         $(".scorecandidatestabview").binder();
          
      $('.scorecandidateslist>div').hide();
      $('.scorecandidateslist>div[data-noresult="true"]').show();




      } else {
        alert(data.Results.Message || "Failed to update absent status. Please try again.", "e");
      }
    }).fail(function () {
      hidespinner(activetab);
      alert("Failed to update absent status. Please try again.", "e");
    });
  }

})(jQuery);
