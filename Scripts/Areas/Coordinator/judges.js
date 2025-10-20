
var isReadOnlyAccess = false; // Will be overridden from server

(function ($) {
  var freezeParticipation = false; // Will be overridden from server
  $(document).ready(function () {
    // Override with server-side freeze settings if they exist
    if (typeof window.freezeParticipation !== 'undefined') {
      freezeParticipation = window.freezeParticipation;
    }
    if (typeof window.isReadOnlyAccess !== 'undefined') {
      isReadOnlyAccess = window.isReadOnlyAccess;
    }

    // Apply read-only mode if freeze is active
    if (freezeParticipation || isReadOnlyAccess) {
      // Disable all input fields
      $(".datarow input,.datarow  select,table  textarea,.datarow  button[type='submit']").not("[type='hidden']").prop("disabled", true).addClass("disabled");

      // Disable add new buttons
      $(".addnewCandidatebulk, .createnewuser, .table-addnewrow button").not("[type='hidden']").prop("disabled", true).addClass("disabled");

      // Disable delete/edit buttons
      $(".deleterow, .resetidentity, .uploadimagebutton").not("[type='hidden']").prop("disabled", true).addClass("disabled");

      $(".table-cell-actions ").remove();

    }
  });

  $("body").on(
    "aftersavetableformrow",
    "#UsersRolesaddnewrow",
    function (e, data) {
      if (freezeParticipation || isReadOnlyAccess) {
        alert("Editing is disabled due to freeze settings.");
        return false;
      }
      ////firsttriggercompetition = true;
      if ($(this).find("[name=IdentityNumber]").val()) {
        $("#NewIdentityNumber").val(
          $(this).find("[name=IdentityNumber]").val()
        );
      }
      if ($(this).find("[name=RegistrationId]").val()) {
        $("#NewRegistrationId").val(
          $(this).find("[name=RegistrationId]").val()
        );
      }
      $("#NewUserId").val(data.Results.UId).trigger("change", true);
      ////$.binder.reload($("#CandidateUsersList"));
      ////$.binder.reload($("#TeamsList"));
    }
  );
  $("body").on("aftersavetableformrow", ".candidatesrow", function (e, data) {
    if (freezeParticipation || isReadOnlyAccess) {
      alert("Editing is disabled due to freeze settings.");
      return false;
    }
    ////firsttriggercompetition = true;
    $("#NewUserId").val(data.Results.UId);
    $("#NewUserRoleId").val($(this).attr("data-id")).trigger("change", true);
    $("#NewIdentityNumber")
      .val($(this).find("[name=IdentityNumber]").val())
      .trigger("change", true);

    ////$.binder.reload($("#CandidateUsersList"));
    ////$.binder.reload($("#TeamsList"));
  });

  $("body").on("change", ".organizationName", function (e) {
    if (freezeParticipation || isReadOnlyAccess) {
      e.preventDefault();
      return false;
    }
    ////firsttriggercompetition = true;
    if ($(this).val()) {
      var cl = $(this).closest(".input-group");
      cl.find("[name=Name]").trigger("change", true);
    }
  });
  $("body").on("aftersavetableformrow", ".orgrow", function (e) {
    if (freezeParticipation || isReadOnlyAccess) {
      alert("Editing is disabled due to freeze settings.");
      return false;
    }
  });
  $("body").on("aftersavetableformrow", ".organizationrow > *", function (e) {
    if (freezeParticipation || isReadOnlyAccess) {
      alert("Editing is disabled due to freeze settings.");
      return false;
    }
    ////firsttriggercompetition = true;

    $.binder.reload($(e.target).find(".organizationlistgroup"));
  });
  var lazyuseri = 0;
  $("body").on("change", ".organizationlistgroup", function (e, force) {
    ////firsttriggercompetition = true;
    lazyuseri++;
    var cl = $(this).closest(".orgrow").next(".orgrow");
    var locallazyi = lazyuseri;
    var th = $(this);
    $(
      '[name="' +
        "User" +
        th.closest(".orgrow").attr("data-level").replace(/ /gi, "") +
        '"]'
    ).val(th.val());
    $(
      '[name="' +
        th.closest(".orgrow").attr("data-level").replace(/ /gi, "") +
        '"]'
    ).val(th.val());
    setTimeout(function () {
      if (locallazyi == lazyuseri) {
        $(
          '[name="' +
            "User" +
            th.closest(".orgrow").attr("data-level").replace(/ /gi, "") +
            '"]'
        ).trigger("change");
        $(
          '[name="' +
            th.closest(".orgrow").attr("data-level").replace(/ /gi, "") +
            '"]'
        ).trigger("change");
      }
    }, 1500);
    if ($(this).val()) {
      cl.find(".hiddenParentOrganization").val($(this).val()).trigger("change");
      $(
        '[name="' +
          "UsersModel[" +
          $(this).closest(".orgrow").attr("data-level").replace(/ /gi, "") +
          "]" +
          '"]'
      ).val($(this).val());
      $(
        '[name="' +
          "TeamModel[" +
          $(this).closest(".orgrow").attr("data-level").replace(/ /gi, "") +
          "]" +
          '"]'
      ).val($(this).val());

      //// $(".addUserDetails").show();
    } else {
      //// $(".addUserDetails").hide();
    }
  });

  //$('body').on("afterappendcomplete",
  //    "select.organizationlistgroup",
  //    function (e) {

  //        $(this).find("option:eq(1)").prop("selected", true);
  //        $(this).trigger("change", true);
  //    });
  $("body").on("keyup", ".organizationName", function (e) {
    ////firsttriggercompetition = true;
    if ($(this).val()) {
      var cl = $(this).closest(".input-group");
      cl.find("[name=Name]").val(
        $(this).val() + " " + cl.find(".input-group-addon").last().text()
      );
    }
  });

  $("body").on("change", ".organizationName", function (e) {
    ////firsttriggercompetition = true;
    if ($(this).val()) {
      var cl = $(this).closest(".input-group");
      cl.find("[name=Name]").trigger("change", true);
    }
  });

  $("body").on("change", ".organizationName", function (e) {
    ////firsttriggercompetition = true;
    if ($(this).val()) {
      var cl = $(this).closest(".input-group");
      cl.find("[name=Name]").trigger("change", true);
    }
  });
  $(".uploadcontacts").hide();
  $("body").on("click", ".pasteexcel", function (e) {
    if ($(".pasteexcel").text()) {
      $(".uploadcontacts").show();
    }
  });
  $("body").on("click", ".uploadcontacts", async function (e) {
    function sendItToServer(items, index) {
      showspinner($("body"));
      let chunk = 50;
      let postobjectchunks = [];

      postobjectchunks = postobject.items.slice(index, index + chunk);
      let postobjectchunkscount = postobjectchunks.length;

      if (postobjectchunkscount > 0) {
        $.post(
          $("#CandidateCreate").val(),
          { items: postobjectchunks },
          function (data) {
            remsession("bindmanagercache");
            sendItToServer(items, index + chunk);
          }
        );
      } else {
        $("#Userslist").binder();
        alert("Imported");
        hidespinner($("body"));
        $(".pasteexcel").text("");
      }
    }

    if ($(".pasteexcel").text()) {
      var postobject = {};
      postobject.items = [];
      let index = 0;
      $(".pasteexcel tbody tr").each(function () {
        index++;
        if (index == 1) {
          return;
        }

        var item = $.fn.binder.methods.makepostdata(
          $("#candidateAddnewBox").find("[name]")
        );
        item.UserName = $(this).find("td:first").text().trim();
        if (item.UserName) {
          var fields = [];
          let items = $('form[data-save="true"] .form-group').not(
            $(".tab-pane .form-group").not($(".tab-pane.active .form-group"))
          );
          items.each(function () {
            let label = $(this).find("label").text().trim();
            fields.push(label);
          });

          let arrayItems = $("#importorder").attr("data-orders").split(",");
          arrayItems = arrayItems.map((x) => {
            return x.replace(/\"/gi, "").trim();
          });

          arrayItems.forEach((x, i) => {
            if ($(this).find("td:eq(" + i + ")").length > 0) {
              item[arrayItems[i]] = $(this)
                .find("td:eq(" + i + ")")
                .text()
                .trim();

              //trim any quotes
              item[arrayItems[i]] = item[arrayItems[i]]
                .replace(/\"/gi, "")
                .replace(/\'/gi, "");

              if (arrayItems[i].indexOf("Level_") > -1) {
                let level = arrayItems[i].replace("Level_", "");
                if (!item.LevelSettings) {
                  item.LevelSettings = {};
                }

                item.LevelSettings[level] = item[arrayItems[i]];
              }
            }
          });

          item.GroupCompetitions = [];
          
          let isValid = false;
          for (let i = arrayItems.length; i < arrayItems.length + 200; i++) {
            if ($(this).find("td:eq(" + i + ")").length > 0) {
              item.GroupCompetitions.push(
                $(this)
                  .find("td:eq(" + i + ")")
                  .html()
                  .replace(/<br>/gi, "\n")
              );
              if (
                $(this)
                  .find("td:eq(" + i + ")")
                  .html()
                  .replace(/<br>/gi, "\n").length > 1
              ) {
                isValid = true;
              }
            }
          }
          if (!isValid) {
            alert("invalid Row");
            //
          }
          postobject.items.push(item);
        }
      });
      if (postobject.items.length > 0) {
        //split the postobject.items into chunks of 100
        sendItToServer(postobject.items, 0);
      } else {
        alert("Paste proper Excel data to upload", false, false, false, "e");
      }
    }

    $(".uploadcontacts").hide();
  });
})(jQuery);