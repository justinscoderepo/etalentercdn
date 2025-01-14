(function ($) {
  var clientWidth = $("body")[0].clientWidth;
  if (clientWidth < 1200) {
    alert(
      "Please use a device with a larger screen to view this page.",
      "e",
      20000
    );
  }

  $("body").on("change", "#grouplist,#pageside", function (e, force) {
    var th = $(this);
    $("head title").text(
      "Candidates Cards " +
        $("#pageside").find("option:selected").text() +
        " of " +
        $("#grouplist").find("option:selected").text() +
        ""
    );

    if (
      $("#grouplist").find("option:Contains('Group'):selected").length ||
      $("#grouplist").find("option:Contains('Team'):selected").length
    ) {
      $("#CompetitionParticipantTypeList").val("2").trigger("change");
    } else {
      $("#CompetitionParticipantTypeList").val("1").trigger("change");
    }
  });
  function adjustheight(selector) {
    var height = 0;
    $("body").append(
      "<style>" + selector + "{ height:auto !important;}</style>"
    );
    $(selector).each(function () {
      if ($(this).outerHeight() > height) {
        height = $(this).outerHeight();
      }
    });

    if (height > 0) {
      $("body").append(
        "<style>" + selector + "{ height: " + height + "px !important;}</style>"
      );
    }
  }
  /**
     * The A0 size print measures 84.1 x 118.9cm, 33.11 x 46.81 inches. (currently we are not offering mounts for this size)
     * 
The A1 size print measures 59.4 x 84.1cm, 23.39 x 33.11 inches. (currently we are not offering mounts for this size)

The A2 size print measures 42.0 x 59.4cm, 16.53 x 23.39 inches, if mounted 59.4 x 76.6cm, 23.39 x 30.16 inches.
The A3 size print measures 29.7 x 42.0cm, 11.69 x 16.53 inches, if mounted 40.6 x 50.8cm, 15.98 x 20 inches.

The A4 size print measures 21.0 x 29.7cm, 8.27 x 11.69 inches, if mounted 30.3 x 40.6cm, 11.93 x 15.98 inches.
https://www.pixelto.net/cm-to-px-converter
     * /
     */

  $("body").on("change blur", ".googlefontembedcode", function (e, force) {
    if ($(this).val()) {
      $("body").append($(this).val());
    }
  });
  $("body").on("change", "[name='CandidateGroup']", function (e, force) {
    if (e.originalEvent) {
      let group = $(this).val();
      if ($("[name='CandidateGroup']").val()) {
        let element = $(
          ".groupTemplates[value='" +
            $("[name='CandidateGroup']").val() +
            "'] input"
        );
        let existingValue = element.val();
        let templateValue = $("#Template").val();
        if (!window.EventUserSettings.GroupsTemplates) {
          window.EventUserSettings.GroupsTemplates = {};
        }

        if (!existingValue) {
          element.val(templateValue).trigger("change", true);
          window.EventUserSettings.GroupsTemplates[group] = templateValue;
          updateEventSettings(window.EventUserSettings);
        } else {
          if (existingValue !== templateValue) {
            changeCurrentTemplate(
              $(
                ".templatelist[stylishgroupid=" +
                  existingValue +
                  "] .candidateCard,.templatelist .CertificateCard"
              ).first()
            );
          }
        }
      }
    }
  });
  $("body").on("change", "#Template", function (e, force) {
    if (e.originalEvent || force) {
      if ($("[name='CandidateGroup']").val()) {
        $(
          ".groupTemplates[value='" +
            $("[name='CandidateGroup']").val() +
            "'] input"
        )
          .val($("#Template").val())
          .trigger("change", true);

        let group = $("[name='CandidateGroup']").val();
        let templateValue = $("#Template").val();
        if (!window.EventUserSettings.GroupsTemplates) {
          window.EventUserSettings.GroupsTemplates = {};
        }
        window.EventUserSettings.GroupsTemplates[group] = templateValue;
        updateEventSettings(window.EventUserSettings);
      }
    }
  });
  ////$('body').on("afterappendcomplete",
  ////    ".candidateCardsList",
  ////    function (e, force) {
  ////        $(".googlefontembedcode").each(function () {
  ////            if ($(this).val()) {
  ////                $(this).trigger("change");
  ////            }
  ////        });
  ////    });
})(jQuery);

$(document).ready(function () {
  $(".ceritificateHedding").html("Certificates of participation");

  $("body").on("beforeappendcomplete", "#toppersResults", function (e, data) {
    if (data.rows && data.rows.Results && data.rows.Results.Individual) {
      $("#publishedresults").removeAttr("data-json");
      $("#publishedresults").binder(data.rows.Results.Individual);
    }
  });

  $("body").on(
    "beforeappendcomplete",
    "#CandidateCardsList",
    function (e, data) {
      if (
        e.target == e.currentTarget &&
        data &&
        data.rows &&
        data.rows.Results
      ) {
        data.rows.Results.forEach(function (item) {
          if (item.UserImage) {
            item.UserImage = item.UserImage.replace(
              "https:/files",
              "https://files"
            );
          }
        });
      }
    }
  );

  $("body").on("change", "#EventHeading", function (e, data) {
    if ($(this).val()) {
      $('[data-stylish="Heading 2 Box"]').html($(this).val());
    } else {
      $('[data-stylish="Heading 2 Box"]').hide();
    }
  });

  $("body").on("change", "#HidePhotoForTeamCards", function (e, data) {
    if ($(this).val() == "2") {
      let templateId = $("#Template").val();
      let key = templateId + "_Team Members Image Box";
      setcache(key, '{"display":"none"}', true);
    } else {
      let templateId = $("#Template").val();
      let key = templateId + "_Team Members Image Box";
      remcache(key);
    }

    setTimeout(function () {
      window.location.reload();
    }, 2000);
  });
});

jQuery("#hedding").on("input", function () {
  $(".ceritificateHedding").html($("#hedding").val());
});
