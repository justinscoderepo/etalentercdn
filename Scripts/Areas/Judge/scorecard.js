function changeToFinish() {
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

    return false;
  }

  function isInt(n) {
    return n % 1 === 0;
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

      if ( data.rows.Results &&data.rows.Results.length == 0) {
        $(this).prop("disabled", true);
        alert(
          "There are no competitions available/ not assigned to this judge. Please contact the administrator.",
          false,
          false,
          false,
          "w",
          5000
        );
      }else {
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

  var judgesScoreCarddata = [];
  $("body").on(
    "afterappendcomplete",
    ".scorecandidatestabview",
    function (e, data) {
      $.each(data.rows.Results, function (i, d) {
        judgesScoreCarddata[d.ParticipantId] = d;
      });
      ////$(this).trigger("click");
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
          if (th.attr("maxscore")) {
            if (th.val() > parseInt(th.attr("maxscore"))) {
              th.val(0);
            }
          } else if (th.val() > 10) {
            th.val(0);
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
            } else {
              alert(
                "Failed to Score, please try again.",
                false,
                false,
                "Savedalert",
                "w",
                500
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
        totalscore += parseFloat(
          $(this).closest(".scorecriteriarow").find(".scorebyinput").val()
        );
        let item = $(this).closest(".scorecriteriarow").find(".scorebyinput");
        let score = parseFloat($(this).attr("data-scorepercentage"));
        if (item.attr("maxscore")) {
          allowedTotalScore = true;
          //     score=(score/cl.find(".individualscore .scorerowoverlay").length).toFixed(1);
        }
        if (currentElement) {
          item = item.not(currentElement);
        }
        item.val(score);
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
          totalScore += parseInt(formdata.Score);
        }
      });

      cl.find('.multicountrowtotal  [name="ScoreCardScore"]').val(totalScore);
      var totalrow = $.fn.binder.methods.makepostdata(
        $(".multicountrowtotal").find("[name]")
      );

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
        } else {
          alert(
            "Failed to Score, please try again.",
            false,
            false,
            "Savedalert",
            "w",
            500
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
      var participantid = activetab.attr("participantid");
      var scorecardid = activetab.attr("scorecardid");
      cl.find("[data-jltableformrow]").trigger("beforesavetableform");
      cl.css("position", "relative");
      if ($("#SelectedJudgeInScoreCard").val()) {
        postdata.JudgeId = $("#SelectedJudgeInScoreCard").val();
      }
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
          } else {
            alert(
              "Failed to Score, please try again.",
              false,
              false,
              "Savedalert",
              "w",
              500
            );
          }
        }
      );
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
})(jQuery);
