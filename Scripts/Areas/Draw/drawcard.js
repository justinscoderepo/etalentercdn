(function ($) {
  function rearrangelistbasedonbranches() {
    $(".scorecandidatestabview")
      .find("hr,.hclearfix,.confirmandshuffle")
      .remove();
    $(".scorecandidatestabview").find(".customIdentityNumber").hide();
    $("#shuffleall,#confirmshuffle").show();

    let totalparticipants = $(
      ".scorecandidatestabview .scorecandidatestab"
    ).length;
    let drawBatches = parseInt($("#drawbatches").val());

    if (drawBatches > 1) {
      let allowedParticipantsForShuffle = Math.ceil(
        totalparticipants / drawBatches
      );

      // $(".drawbatch").html('<option value="">Please select batch</option>');
      for (let i = 1; i <= drawBatches; i++) {
        let endIndex = i * allowedParticipantsForShuffle;
        let child = $(".scorecandidatestabview .scorecandidatestab").eq(
          endIndex - 1
        );

        child.after("<hr class='col-xs-50' style='border: 1px solid #000;'/>");
        // child.after(`<div class="col-xs-50 col-md-15 confirmandshuffle disableditems">
        //         <div class="btn-group pad-top-10">
        //             <a href="#" accesskey="x" class="shuffleall btn btn-primary ">Draw Now</a>
        //             <div class="col-xs-2"></div>
        //             <a href="#" accesskey="x" class="confirmshuffle btn btn-success ">Confirm</a>
        //         </div>
        //     </div>`);
        // $(".drawbatch").append(`<option value="${i}">Batch ${i}</option>`);
      }
      $("#shuffleall,#confirmshuffle").hide();
      $(".customIdentityNumber").show();
    }
  }

  $("body").on("change", "#drawbatches", function (e) {
    let selectedCompetitionItem = $("#competitionoptdropdown").find(
      "option:selected"
    );
    let json = {};
    if (selectedCompetitionItem.attr("data-json")) {
      json = JSON.parse(selectedCompetitionItem.attr("data-json"));
    }
    let drawBatches = parseInt($(this).val());
    json.DrawBatches = drawBatches;
    let postData = {};
    postData.CompetitionStructureId = selectedCompetitionItem.val();
    postData.JsonSettings = JSON.stringify(json);

    $.post("/CompetitionStructureJson/Save", postData, function (data) {
      alert("Draw Batches Updated");
      $.binder.reload($("#competitionoptdropdown"));
    });

    // rearrangelistbasedonbranches();
  });

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

  var competitionoptdropdowndata = {};
  $("body").on(
    "afterappendcomplete",
    "#competitionoptdropdown",
    function (e, data) {
      competitionoptdropdowndata = data.rows;
      $(this).trigger("change");

      if (competitionoptdropdowndata.Results.length == 0) {
        $(this).hide();
        alert(
          "You are not assigned for any competitions for this event. Please contact Co-ordinator to assign competitions. refresh this page after assign competitions.",
          false,
          false,
          false,
          "w",
          1000000
        );
      }
    }
  );
  function updateBrawBatches() {
    if ($("#competitionoptdropdown").val()) {
      var selectedCompetitionItem = $("#competitionoptdropdown").find(
        "option:selected"
      );
      var json = {};
      if (selectedCompetitionItem.attr("data-json")) {
        json = JSON.parse(selectedCompetitionItem.attr("data-json"));
      }
      $("#drawbatches").val(json.DrawBatches);
      rearrangelistbasedonbranches();
    }
  }

  $("body").on("change", "#competitionoptdropdown", function (e) {
    $("#resultcompetitionstatus").val("");
    $("#drawbatches").val("1");
    if ($(this).find("option:selected").attr("competitionstatus") == "4") {
      $(".disableditems").hide();
    } else {
      $(".disableditems").show();
    }
  });

  var judgesScoreCarddata = [];
  $("body").on(
    "afterappendcomplete",
    ".scorecandidatestabview",
    function (e, data) {
      setTimeout(function () {
        adjustheight(".scorecandidatestabview > .drawcandidatestabview");
        updateBrawBatches();
      }, 200);
      $.each(data.rows.Results, function (i, d) {
        judgesScoreCarddata[d.ParticipantId] = d;
      });
      ////$(this).trigger("click");
    }
  );

  $("body").on("click", "#confirmshuffle", function (e) {
    // Create an array to store participant data
    var participantData = [];
    var $wrapper = $(".scorecandidatestabview");
    showabsolutespinner($wrapper);

    var $children = $wrapper.children(".scorecandidatestab");
    // Loop through the shuffled children elements
    $children.each(function (index) {
      var $this = $(this);
      var participantId = $this.attr("participantid");
      var isActive = $this.attr("orderpriority") != "2";
      if ($this.hasClass("participantinactive")) {
        isActive = false;
      }

      participantData.push({
        ParticipantId: participantId,
        IdentityNumber: (index + 1).toString(),
        Order: isActive ? "1" : "2",
      });
    });

    // Send the data to the server using jQuery.post
    $.post(
      "/CompetitionParticipantsJson/SaveDrawDetails",
      { Items: participantData },
      function (response) {
        alert("Draw Details Updated");
        hideabsolutespinner($wrapper);
        $.binder.reload($wrapper);
        $("#resultcompetitionstatus").val(4).trigger("change", true);
      }
    );
  });

  $("body").on("change", ".customIdentityNumber", function (e) {
    let $this = $(this);
    let participantId = $this
      .closest(".scorecandidatestab")
      .attr("participantid");
    let identityNumber = $this.val();
    var participantData = [];
    let postData = {
      ParticipantId: participantId,
      IdentityNumber: identityNumber,
      Order: "1",
    };
    participantData.push(postData);
    $.post(
      "/CompetitionParticipantsJson/SaveDrawDetails",
      { Items: participantData },
      function (response) {
        alert("Draw Details Updated");
        $.binder.reload($(".scorecandidatestabview"));
      }
    );
  });
  $("body").on(
    "click",
    ".scorecandidatestabview .scorecandidatestab",
    function (e) {
      if (
        $("#competitionoptdropdown")
          .find("option:selected")
          .attr("competitionstatus") != "4"
      ) {
        if ($(this).attr("orderpriority") == "2") {
          $(this).addClass("participantinactive");
        }
        $(this).toggleClass("participantinactive");
        $(this).removeAttr("orderpriority");
      }
    }
  );
  $("body").on("change", "#resultcompetitionstatus", function (e, force) {
    ////firsttriggercompetition = true;
    if ($(this).val()) {
      if ($(this).val() && (e.originalEvent || force)) {
        var newcurrentcompetitiondata = {};
        newcurrentcompetitiondata.CompetitionStructureId = $(
          "#competitionoptdropdown"
        ).val();
        newcurrentcompetitiondata.CompetitionStatus = $(this).val();

        $.post(
          "/CompetitionStructureJson/SaveStatus",
          newcurrentcompetitiondata,
          function () {
            alert("Changed competition status");
            $.binder.reload($("#competitionoptdropdown"));
          }
        );
      }
    }
  });
  $("body").on("click", "#shuffleall", function (e) {
    var $wrapper = $(".scorecandidatestabview");
    var $children = $wrapper.children(".scorecandidatestab");
    $wrapper.find("[orderpriority='2']").addClass("participantinactive");
    // Separate active and inactive items
    var $activeChildren = $children.not(".participantinactive");
    var $inactiveChildren = $children.filter(".participantinactive");

    var drawBatches = parseInt($("#drawbatches").val());

    var totalparticipants = $children.length;
    var allowedParticipantsForShuffle = Math.ceil(
      totalparticipants / drawBatches
    );
    let finishedindex = 0;

    // Shuffle the active children elements using Fisher-Yates algorithm

    var currentIndex = $activeChildren.length;
    var temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = $activeChildren[currentIndex];
      $activeChildren[currentIndex] = $activeChildren[randomIndex];
      $activeChildren[randomIndex] = temporaryValue;
    }

    // Append the shuffled active children elements and inactive children elements back to the wrapper
    $wrapper.append($activeChildren).append($inactiveChildren);

    // Add participantinactive class to the end of the list
    $inactiveChildren.addClass("participantinactive");
    var $children = $wrapper.children(".scorecandidatestab");
    // Update the .CandidateDrawChessCode based on the index
    $children.each(function (index) {
      $(this)
        .find(".CandidateDrawChessCode")
        .text(index + 1);
    });
    adjustheight(".scorecandidatestabview > .drawcandidatestabview");
  });
})(jQuery);
