(function ($) {
  setInterval(function () {
    if (!$("body").hasClass("projectoractive")) {
      $(".currentevents").binder();
    }
  }, 60000);

  function update(percent, totaltime) {
    var deg;
    var color = "#00b5e8";

    if (
      parseInt($(".tokentimerloadertimewarningvalue").text()) != 0 &&
      percent >= parseInt($(".tokentimerloadertimewarningvalue").text())
    ) {
      color = "#d9534f";
    }
    if (percent < totaltime / 2) {
      deg = 90 + (360 * percent) / totaltime;
      $(".tokentimerloadercircle").css(
        "background-image",
        "linear-gradient(" +
          deg +
          "deg, transparent 50%, white 50%),linear-gradient(90deg, white 50%, transparent 50%)"
      );
    } else if (percent >= totaltime / 2) {
      deg = -90 + (360 * percent) / totaltime;
      $(".tokentimerloadercircle").css(
        "background-image",
        "linear-gradient(" +
          deg +
          "deg, transparent 50%, " +
          color +
          " 50%),linear-gradient(90deg, white 50%, transparent 50%)"
      );
    }
  }

  var synth = window.speechSynthesis;
  var myCounter;
  var ispause = false;
  $("body").on("click", "#tokentimerstart", function (e) {
    $(".tokentimerloadercircle").removeClass("warningbell");
    $("#tokentimerpause").focus();
    clearInterval(myCounter);
    ispause = false;
    var totaltime = parseInt($(".tokentimerloadertimemaxvalue").text());
    var count = parseInt($(".tokentimerloadertimenowvalue").text());
    if (count > totaltime) {
      count = 0;
    }

    if (
      parseInt($(".tokentimerloadertimewarningvalue").text()) != 0 &&
      count >= parseInt($(".tokentimerloadertimewarningvalue").text())
    ) {
      $(".tokentimerloadercircle").addClass("warningbell");
    }

    myCounter = setInterval(function () {
      if (!ispause) {
        count += 1;
        $(".tokentimerloadertimenowvalue").html(count);

        var inMinutes = Math.floor(count / 60);
        var inSeconds = count - (inMinutes * 60);

        if (inSeconds < 10) {
          inSeconds = "0" + inSeconds;
        }
        $(".tokentimerloadertimenowinMinutes").html(inMinutes + ":" + inSeconds);

        if (
          parseInt($(".tokentimerloadertimewarningvalue").text()) != 0 &&
          count == parseInt($(".tokentimerloadertimewarningvalue").text())
        ) {
          $("#controlbell").trigger("play");
          $(".tokentimerloadercircle").addClass("warningbell");
        }

        update(count, totaltime);
        if (count == totaltime) {
          clearInterval(myCounter);
          $("#controlbell").trigger("play");
          setTimeout(function () {
            $("#controlbell").trigger("pause");
            $("#controlbell")[0].currentTime = 0;
            $("#controlbell").trigger("play");
            setTimeout(function () {
              $("#controlbell").trigger("pause");
              $("#controlbell")[0].currentTime = 0;
              $("#controlbell").trigger("play");
            }, 1200);
          }, 1200);
        }
      }
    }, 1000);
  });
  $("body").keyup(function (e) {
    var code = e.keyCode || e.which;
    if ($("body").hasClass("projectoractive")) {
      e.preventDefault();
      if (code == "32") {
        if (ispause) {
          $("#tokentimerstart").trigger("click");
        } else {
          $("#tokentimerpause").trigger("click");
        }
      }
    }
  });
  $("body").on("click", "#tokentimerstop", function (e) {
    ispause = true;
    update(0, parseInt($(".tokentimerloadertimemaxvalue").text()));
    $(".tokentimerloadertimenowvalue").html(0);
    $("#tokentimerloadertimenowinMinutes").html("0:00");
    clearInterval(myCounter);
  });
  $("body").on("click", "#tokentimerpause", function (e) {
    ispause = !ispause;
    if (!ispause) {
      $("#tokentimerstart").trigger("click");
    }
  });
  $("body").on("click", "#tokentimerrestart", function (e) {
    ispause = false;
    $("#time,.tokentimerloadertimenowvalue").html(0);
    $("#tokentimerloadertimenowinMinutes").html("0:00");

    $("#tokentimerstart").trigger("click");
  });
  $("body").on(
    "click",
    ".startcompetition",
    function (e, isCallingBetweenItem) {
      if (myCounter) {
        clearInterval(myCounter);
      }
      var th = $(this);
      $(".tokentimerloadercircle").removeClass("warningbell");
      //update competition in OnProgress status
      var totalseconds =
        parseInt($(this).attr("CompetitionMaximumMinutes")) * 60 +
        parseInt($(this).attr("CompetitionMaximumSeconds"));
      var warningseconds =
        parseInt($(this).attr("CompetitionWarningMinute")) * 60 +
        parseInt($(this).attr("CompetitionWarningSecond"));

      var voices = window.speechSynthesis.getVoices();
      if (!isCallingBetweenItem) {
        // var utterThis = new SpeechSynthesisUtterance(
        //   "Hello, Next programme is " +
        //     $(this)
        //       .closest(".competitionitem")
        //       .find(".competitionnametext")
        //       .text() +
        //     ". Candidates, please prepare for it."
        // );
        // utterThis.voice = voices[$("#voiceoptions").val()];
        // synth.speak(utterThis);

        // utterThis = new SpeechSynthesisUtterance(
        //   "Maximum time allowed for this programme is " +
        //     $(this).attr("CompetitionMaximumMinutes") +
        //     " Minutes " +
        //     $(this).attr("CompetitionMaximumSeconds") +
        //     " Seconds"
        // );

        // utterThis.voice = voices[$("#voiceoptions").val()];
        // synth.speak(utterThis);

        setTimeout(function () {
          if (!$("body").hasClass("tokensystemstarted")) {
            // utterThis = new SpeechSynthesisUtterance(
            //   "Once more, Current programme is " +
            //     th
            //       .closest(".competitionitem")
            //       .find(".competitionnametext")
            //       .text()
            // );
            // utterThis.voice = voices[$("#voiceoptions").val()];
            // synth.speak(utterThis);
            // utterThis = new SpeechSynthesisUtterance(
            //   "Maximum time allowed for this programme is " +
            //     th.attr("CompetitionMaximumMinutes") +
            //     " Minutes " +
            //     th.attr("CompetitionMaximumSeconds") +
            //     " Seconds"
            // );
            // utterThis.voice = voices[$("#voiceoptions").val()];
            // synth.speak(utterThis);
          }
        }, 5000);
      }
      $(".tokentimerloadertimemaxvalue").text(totalseconds);
      $(".tokentimerloadertimewarningvalue").text(warningseconds);

      // //tokentimerloadertimeinMinutes
      // let minutesInSeconds =
      //   parseInt(totalseconds) * 60;
      // let secondsInMinutes = totalseconds - (60 * minutesInSeconds);
      $(".tokentimerloadertimemaxinMinutes").text($(this).attr("CompetitionMaximumMinutes") + ":" + $(this).attr("CompetitionMaximumSeconds"));

      var formdata = {};
      formdata.CompetitionStructureId = $(this).attr("Competition");
      formdata.CompetitionStatus = $("#progressstatus").val();
      updatecompetitionstatus(formdata);
      $(this)
        .closest(".competitionitem")
        .find(".competitiontokens")
        .removeClass("startedcompetition")
        .addClass("startedcompetition");
      if (!isCallingBetweenItem) {
        if (
          !$(this)
            .closest(".competitionitem")
            .find(".competitiontokens")
            .attr("data-bindersuccess")
        ) {
          $("body").one(
            "afterappendcomplete",
            ".competitiontokens",
            function (e) {
              changetoken(
                $(this)
                  .closest(".competitionitem")
                  .find(".competitiontoken:first"),
                $(this).closest(".competitionitem").find(".startedcompetition"),
                false,
                true
              );
              $("#tokenclosebtn,#tokennextbtn,#tokenprevbtn").show();
            }
          );
        } else {
          changetoken(
            $(this).closest(".competitionitem").find(".competitiontoken:first"),
            $(this).closest(".competitionitem").find(".startedcompetition"),
            false,
            true
          );
          $("#tokenclosebtn,#tokennextbtn,#tokenprevbtn").show();
        }
      }
      $("body").addClass("optactivebody projectoractive");
    }
  );
  $("body").on("click", "#tokenclosebtn", function (e) {
    $("body").removeClass("tokensystemstarted");
    $(".competitionitem")
      .find(".competitiontokens")
      .removeClass("startedcompetition");
    $(".competitionitem")
      .find(".competitiontoken")
      .removeClass("tokenactive prevtokenactive nexttokenactive");
    $("#tokenclosebtn,#tokenprevbtn,#tokennextbtn").hide();
    $("body").removeClass("optactivebody projectoractive");
    $(".stagelists,.currentevents").binder();
  });

  $("body").on("click", "#tokennextbtn", function (e) {
    changetoken(
      $(".startedcompetition")
        .find(".competitiontoken.tokenactive")
        .next(".competitiontoken"),
      $(".startedcompetition"),
      true
    );
  });
  $("body").on("click", "#tokenprevbtn", function (e) {
    changetoken(
      $(".startedcompetition")
        .find(".competitiontoken.tokenactive")
        .prev(".competitiontoken"),
      $(".startedcompetition")
    );
  });
  ////$('body').on('click',
  ////    '.competitiontoken',
  ////    function(e) {
  ////        $(this).find('.tokenlink').trigger("click");
  ////    });
  var statusUpdate = ["First Call", "Second Call", "Third Call", "Cancelled"];

  $("body").on("click", ".competitiontoken", function (e) {
    if (
      $(this).hasClass("prevtokenactive") ||
      $(this).hasClass("nexttokenactive") ||
      $(this).hasClass("tokenactive")
    ) {
      //loaded screen
      changetoken($(this), $(this).closest(".startedcompetition"));
    } else {
      $(this)
        .closest(".competitionitem")
        .find(".startcompetition")
        .trigger("click", true);
      setTimeout(
        function () {
          $("#tokenclosebtn,#tokennextbtn,#tokenprevbtn").show();
          $("body").addClass("optactivebody projectoractive");

          var formdata = {};
          formdata.CompetitionStructureId = $(this)
            .closest(".competitionitem")
            .find(".startcompetition")
            .attr("Competition");
          formdata.CompetitionStatus = $("#progressstatus").val();
          updatecompetitionstatus(formdata);

          changetoken(
            $(this),
            $(this).closest(".competitionitem").find(".startedcompetition"),
            false,
            true
          );
        }.bind(this),
        1000
      );
    }
  });


  $("body").on("change", ".resultcompetitionstatus", function (e) {
    var formdata = {};
    formdata.CompetitionStructureId = $(this).attr("Competition");
    formdata.CompetitionStatus = $(this).val();
    let th = $(this);
    updatecompetitionstatus(formdata, function () {
      th.closest(".competitionlists").binder();
    });
  });




  var lastId = "";
  var callCount = 0;
  function changetoken(th, outer, isnext, ismanualcall) {
    if (!ismanualcall) {
      $("body").addClass("tokensystemstarted");
    }
    if (th.length == 0) {
      //update competition in Finished status
      var formdata = {};
      if (isnext) {
        formdata.CompetitionStructureId = outer
          .closest(".competitionitem")
          .find("button")
          .attr("competition");
        formdata.CompetitionStatus = $("#stoppedstatus").val();
        updatecompetitionstatus(formdata);
      } else {
        formdata.CompetitionStructureId = outer
          .closest(".competitionitem")
          .find("button")
          .attr("competition");
        formdata.CompetitionStatus = $("#notstartedstatus").val();
        updatecompetitionstatus(formdata);
      }

      $("#tokenclosebtn").trigger("click");
      if (myCounter) {
        clearInterval(myCounter);
      }
    } else {
      outer
        .find(".competitiontoken")
        .removeClass("tokenactive prevtokenactive nexttokenactive")
        .removeAttr("accesskey");
      var isbefore = true;
      var height = 10;
      outer.find(".competitiontoken").each(function () {
        if ($(this).not(th).length == 0) {
          $(this).addClass("tokenactive").attr("accesskey", "z");
          isbefore = false;
          height = 10;
        } else if (isbefore) {
          $(this)
            .addClass("prevtokenactive")
            .css("top", height + "px");
          height += $(this).outerHeight() + 10;
        } else {
          $(this)
            .addClass("nexttokenactive")
            .css("top", height + "px");
          height += $(this).outerHeight() + 10;
        }
      });
      ispause = false;
      $(".tokentimerloadertimenowvalue").html(0);
      $("#tokentimerloadertimenowinMinutes").html("0:00");
      $("#tokentimerstop").trigger("click");

      var additionaltext = "";

      if (lastId != $(".tokenactive .CandidateChessCodeToken").text()) {
        callCount = 0;
      }
      lastId = $(".tokenactive .CandidateChessCodeToken").text();
      if (callCount > 0 && statusUpdate[callCount - 1]) {
        additionaltext = " " + statusUpdate[callCount - 1];
      }
      callCount++;
      // var voices = window.speechSynthesis.getVoices();
      // var utterThis = new SpeechSynthesisUtterance(
      //   $(".tokenactive .CandidateChessCodeToken").text() + additionaltext
      // );
      // utterThis.voice = voices[$("#voiceoptions").val()];
      // synth.speak(utterThis);
    }
  }
  function updatecompetitionstatus(formdata,callback) {
    $.post(
      $("#savecompetitionstatusinput").val(),
      formdata,
      function (success) {
        $(".currentevents").binder();
        if (callback) {
          callback();
        }
      }
    ).fail(function () {
      remsession("bindmanagercache");
      alert(
        "Can't add due to this some internal issues or network issues. Please try again",
        "e"
      );
    });
  }
  document.onkeydown = function (e) {
    if (
      $(".startedcompetition").length > 0 &&
      $("body").hasClass("projectoractive")
    ) {
      e.preventDefault();
      switch (e.keyCode) {
        case 37:
          $("#tokenprevbtn").trigger("click");
          break;
        case 38:
          $("#tokennextbtn").trigger("click");
          break;
        case 39:
          $("#tokennextbtn").trigger("click");
          break;
        case 40:
          $("#tokenprevbtn").trigger("click");
          break;
      }
    }
  };
  $(document).ready(function () {
    try {
      $("#voiceoptions").binder({ Rows: window.speechSynthesis.getVoices() });
    } catch (e) {}
    $("body").on("change", "#voiceoptions", function (e) {
      var voices = window.speechSynthesis.getVoices();

      var utterThis = new window.SpeechSynthesisUtterance("J234");
      utterThis.voice = voices[$("#voiceoptions").val()];
      synth.speak(utterThis);
    });
  });
})(jQuery);
