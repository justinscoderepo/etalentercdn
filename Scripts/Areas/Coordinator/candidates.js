let maxCandidateCount = 10;
let maxTeamCount = 5;
let maximumGroupParticipants = 15;
let isPhotoMandatory = false;
let freezeParticipation = false;
let isRegIdMandatory = false;
var isAllOrganizationsSelected = false;
var allowedRegIdNumbers = [];
(function ($) {
  $(document).ready(function () {
    let eventID = userObj.user.Event;
    $.post("/EventJson/Get", { EvId: eventID }, function (data) {
      if (data && data.Results && data.Results.length > 0) {
        let event = data.Results[0];
        try {
          let jsonSettings = JSON.parse(
            event.JsonSettings ?? "{}"
          )?.AdditionalSettings;
          if (jsonSettings) {
            try {
              maxCandidateCount = parseInt(
                jsonSettings.MaximumParticipationPerCandidate
              );
            } catch (e) {
              maxCandidateCount = 10;
            }

            try {
              maxTeamCount = parseInt(jsonSettings.MaximumParticipationPerGroup);
            } catch (e) {
              maxTeamCount = 10;
            }

            try {
              maximumGroupParticipants = parseInt(
                jsonSettings.MaximumGroupParticipants
              );
            } catch (e) {
              maximumGroupParticipants = 15;
            }
            isPhotoMandatory = jsonSettings.IsPhotoMandatoryForCandidate == "Yes";
            freezeParticipation = jsonSettings.FreezeParticipation == "Yes";
            isRegIdMandatory = jsonSettings.isRegIdMandatoryForCandidate == "Yes";
            if (jsonSettings.EligibleRegistrationNumbers) {
              allowedRegIdNumbers = jsonSettings.EligibleRegistrationNumbers;
            }
          }
        } catch (e) {
          maxCandidateCount = 10;
          maxTeamCount = 5;
          maximumGroupParticipants = 15;
          isPhotoMandatory = false;
          freezeParticipation = false;
        }
      }
    });

    // if (eventID == 146) {
    //   maxCandidateCount = 2;
    //   maxTeamCount = 2;
    // }
    // if (eventID == 155) {
    //   isPhotoMandatory = true;
    // }
    // if (eventID == 144 || eventID == 147 || eventID == 165) {
    //   maxCandidateCount = 3;
    //   maxTeamCount = 1;
    // }
  });
  var lazyi = 0;

  $("body").on("click", "#filterparticipants", function () {
    $("#filterParticipantsRow").toggle();
  });

  $("body").on("click", ".shownext", function () {
    $(this).closest(".form-group").find(".participanttypedependnext").toggle();
    let next = $(this)
      .closest(".form-group")
      .find(".participanttypedependnext");

    // next.find("select.groupmemberslist").removeAttr("data-lateload");
    // next
    //   .find("select.groupmemberslist")
    //   .attr(
    //     "data-json",
    //     next.find("select.groupmemberslist").attr("data-oldjson")
    //   );

    // let elid = next.find("select.groupmemberslist").attr("id");
    // if (elid) {
    //   next
    //     .find("select.groupmemberslist")
    //     .html(bindmanager.htmltemplates[elid]);
    // }

    // $.binder.clear(next.find("select.groupmemberslist"));
    // $.binder.reload(next.find("select.groupmemberslist"));

    let el = next.find("select.groupmemberslist");
    // window.resetdropdowncandidate(el);
    if (!isAllOrganizationsSelected) {
      $(".createnewuser").addClass("disabled").prop("disabled", true);
    } else {
      $(".createnewuser").removeClass("disabled").prop("disabled", false);
    }
  });
  $("body").on("click", ".optcancelbtn", function () {
    $(this).closest(".participanttypedependnext").hide();
  });
  $("body").on("click", ".optconfirmbtn", function () {
    $(this).closest(".participanttypedependnext").hide();
    if ($(this).closest(".Candidateleftlist").length > 0) {
      let checkedItems = $(this)
        .closest(".Candidateleftlist")
        .find(".groupmemberslist [type=checkbox]:checked");

      if (checkedItems.length > 0) {
        let th = $(this);
        saveparticipantinfo(
          th,
          $(this).closest(".Candidateleftlist"),
          false,
          true,
          false,
          true
        );
      }
    }
  });

  $("body").on("afterappendcomplete", "#bulkusersleftlist", function (e) {
    setTimeout(() => {
      resizeBox($);
    }, 1000);



    if (allowedRegIdNumbers && allowedRegIdNumbers.length > 0) {
     
      $(".eachcandidateregid").each(function () {
         let value=$(this).val();

            if(typeof allowedRegIdNumbers !== "undefined" && allowedRegIdNumbers?.length>0){
                let matchingRow=allowedRegIdNumbers.find(x=>x.RegistrationNumber==value);
                if(!matchingRow){
                    $(this).closest(".form-group").addClass("invalidRegistrationNumber");
                    $(this).closest(".form-group").attr("title","Invalid Registration Number");
                }
            }

    }) 
    }



  });

  $("body").on("afterappendcomplete", "#GetParticipantsList", function (e) {
    if (
      $("select.organizationlistgroup:last").length == 0 ||
      ($("select.organizationlistgroup:last").val() &&
        $("select.organizationlistgroup:last").val() != "all")
    ) {
      $(
        ".newbulkcheckbox,.addnewbox input,.addnewbox button,.addnewbox .btn,.Candidateleftlist .btn"
      )
        .prop("disabled", false)
        .removeClass("disabled");
      $("[name='UsersModel[UserName]']").attr("placeholder", "Name");
    } else {
      $(
        ".newbulkcheckbox,.addnewbox input,.addnewbox button,.addnewbox .btn,.Candidateleftlist .btn"
      )
        .prop("disabled", true)
        .addClass("disabled");
      $("[name='UsersModel[UserName]']").attr(
        "placeholder",
        "Missing Local/District/State/Zone/Club Name"
      );
    }

    $(".checkthiscompetition[competitionstatus=1],.checkthiscompetition[competitionstatus=2],.checkthiscompetition[competitionstatus=4],.checkthiscompetition[competitionstatus=5],.checkthiscompetition[competitionstatus=6]").prop("disabled", true).addClass("disabled");
    if (freezeParticipation) {
      $(
        ".newbulkcheckbox,.addnewbox input,.addnewbox button,.addnewbox .btn,.Candidateleftlist .btn"
      )
        .prop("disabled", true)
        .addClass("disabled");

      $(".checkthiscompetition").prop("disabled", true).addClass("disabled");
    }
  });

  $("body").on("afterappendcomplete", "div.groupmemberslist", function (e) {
    if (e.target == e.currentTarget) {
      let next = $(this).closest(".form-group").find("select.groupmemberslist");
      let existingValue = next.attr("values");
      let existingValueArray = [];
      if (existingValue) {
        existingValueArray = JSON.parse(existingValue);
      }
      $(this)
        .find("[type=checkbox]")
        .each(function () {
          let value = $(this).closest("label").find("span").attr("value");
          if (
            existingValueArray.filter((x) => x.toString() == value).length > 0
          ) {
            $(this).prop("checked", true);
          }
        });
    }
  });

  $("body").on("change", ".groupmemberslist [type=checkbox]", function (e) {
    var th = $(this);
    let span = th.closest("label").find("span");
    let value = span.attr("value");
    let existingValue = th.closest(".absolute").find("select").attr("values");
    if (!existingValue) {
      existingValue = [];
    } else {
      existingValue = JSON.parse(existingValue);
    }
    if (th.prop("checked")) {
      existingValue.push(value);
    } else {
      existingValue = existingValue.filter((x) => x != value);
    }
    th.closest(".absolute")
      .find("select")
      .attr("values", JSON.stringify(existingValue));
    th.closest(".addnewbox,.Candidateleftlist")
      .find(".shownext")
      .find(".userCount")
      .remove();
    th.closest(".addnewbox,.Candidateleftlist")
      .find(".shownext")
      .prepend("<span class='userCount'>" + existingValue.length + "</span>");

    if (!$("#BulkTeamName").val() && existingValue.length > 0) {
      $("#BulkTeamName")
        .val(
          $(".groupmemberslist span[value=" + existingValue[0] + "]").attr(
            "uname"
          ) + " and team"
        )
        .trigger("change");
    }
  });

  // window.resetdropdowncandidate = function (th) {
  //   th.closest(".absolute")
  //     .find("select.groupmemberslist")
  //     .attr(
  //       "data-json",
  //       th
  //         .closest(".absolute")
  //         .find("select.groupmemberslist")
  //         .attr("data-oldjson")
  //     );

  //   $.binder.clear(th.closest(".absolute").find("select.groupmemberslist"));

  //   // renderoptdropdown.call(
  //   //   th.closest(".absolute").find("select.groupmemberslist")
  //   // );

  //   th.closest(".absolute").find(".groupmemberslist").binder();
  // };

  $("body").on("click", ".createnewuser", function () {
    if (freezeParticipation) {
      alert("Participation is closed for this event", "e");
      return;
    }
    let th = $(this);
    let candidateName = $(this)
      .closest(".newinstantcandidate")
      .find(".InstantCandidateName")
      .val();
    let candidateDOB = $(this)
      .closest(".newinstantcandidate")
      .find(".InstantCandidateDOB")
      .val();

    if (!candidateName) {
      alert("Please enter candidate name", "e");
    }

    if (!candidateDOB) {
      alert("Please enter candidate DOB", "e");
    }

    if (candidateName && candidateDOB) {
      var formdata = {};
      formdata = $.fn.binder.methods.makepostdata(
        $(".oranizationListFormvalues").find("[name]")
      );
      formdata["UsersModel"] = {};
      formdata["UsersModel"]["UserName"] = candidateName;
      formdata["UsersModel"]["UserDobString"] = candidateDOB;
      // if (newitem) {
      //     formdata = $.fn.binder.methods.makepostdata(formrow.find("[name]").add(user.find("[name]"))
      //         .add($(".oranizationListFormvalues").find("[name]")));
      // } else {
      //     formdata = $.fn.binder.methods.makepostdata(user.find("[name]")
      //         .add($(".oranizationListFormvalues").find("[name]")));
      //     formdata.CompetitionParticipantsModel = {};
      //     formdata.CompetitionParticipantsModel["CompetitionCompetitionStructureId"] = th.attr("competitionstructureid");
      // }
      // if (th.attr("participantid")) {
      //     formdata.Participantid = th.attr("participantid");

      // }
      formdata.ParticipantType = 1;
      formdata.Group = $("#selectedgroupidforbulkedit").val();
      formdata.CompetitionParticipantsModel = {};
      formdata.CompetitionParticipantsModel.CompetitionList = [];
      formdata.CompetitionParticipantsModel.CompetitionList.push(0);
      showspinner(th.closest(".absolute"));

      $.post(
        $("#saveparticipantinput").val(),
        formdata,
        function (participantid) {
          remsession("bindmanagercache");
          hidespinner(th.closest(".absolute"));
          var pieces = participantid.split(",");
          participantid = parseInt(pieces[0]);
          //data-oldjson

          //window.resetdropdowncandidate(th);
          th.closest(".absolute").find(".InstantCandidateName").val("");
          th.closest(".absolute").find(".InstantCandidateDOB").val("");

          // if (data && data.Results) {
          //     alert("Candidate created successfully.");
          //     $("#CandidateUsersList").binder();
          //     $("#CandidateName").val("");
          //     $("#CandidateDOB").val("");
          // } else {
          //     alert("Can't create candidate due to some internal issues or network issues.", "e");
          // }
          // },
          // error: function () {
          //     alert("Can't create candidate due to some internal issues or network issues. Please try again", "e");
          // }
        }
      );
    }
  });

  $("body").on("click", ".resetidentity", function (e) {
    if (freezeParticipation) {
      alert("Participation is closed for this event", "e");
      return;
    }

    var thisitem = $(this);
    alert(
      "Are you sure want to reset the identity number ? Take care, you can't revert this action.",
      function () {
        var th = $(
          ".candidatescompetitionrow[candidateid=" +
          thisitem.closest(".Candidateleftlist").attr("candidate") +
          "]"
        ).find(".checkthiscompetition:checked:first");
        if (
          !thisitem.closest(".Candidateleftlist").attr("candidate") ||
          thisitem.closest(".Candidateleftlist").attr("candidate") == ZeroValue
        ) {
          th = $(
            ".candidatescompetitionrow[teamid=" +
            thisitem.closest(".Candidateleftlist").attr("teamid") +
            "]"
          ).find(".checkthiscompetition:checked:first");
        }
        if (th.length > 0) {
          saveparticipantinfo(
            th,
            thisitem.closest(".Candidateleftlist"),
            false,
            true,
            true
          );
        } else {
          alert("Please select any competitions", "e");
        }
      },
      false,
      "newidentity",
      "c",
      "e"
    );
  });

  $("body").on("click", ".deleterow", function (e) {
    var thisitem = $(this);
    if (freezeParticipation) {
      alert("Participation is closed for this event", "e");
      return;
    }
    alert(
      "Are you sure want to delete this candidate?",
      function () {
        // /CoordinatorJson/ResetAllMistakenIdentityCards
        let candidateId = thisitem
          .closest(".Candidateleftlist")
          .attr("candidate");
        if (
          $(
            ".candidatescompetitionrow[candidateid=" +
            candidateId +
            "] input:checked"
          ).length > 0
        ) {
          alert(
            "Please uncheck all competitions before deleting this candidate",
            "e"
          );
        } else {
          let token = JSON.parse(localStorage.getItem("user"))
            ? JSON.parse(localStorage.getItem("user")).token
            : "";
          let headers = { Authorization: "Bearer " + token };

          $.ajax({
            data: {
              UserRoleId: candidateId,
            },
            headers: headers,
            url: "/CoordinatorJson/RemoveUser",
            type: "DELETE",
            success: function (data) {
              remsession("bindmanagercache");
              if (data && data.Results) {
                alert("Candidate deleted successfully.");
                thisitem.closest(".Candidateleftlist").remove();
                $(
                  ".candidatescompetitionrow[candidateid=" + candidateId + "]"
                ).remove();
              } else {
                alert(
                  "Can't delete due to some internal issues or network issues.",
                  "e"
                );
              }
            },
            error: function () {
              alert(
                "Can't delete due to some internal issues or network issues. Please try again",
                "e"
              );
            },
          });
        }
      },
      false,
      "removeidentity2",
      "c"
    );
  });

  $("body").on("click", "#resetmistakenidentity", function (e) {
    var thisitem = $(this);
    if (freezeParticipation) {
      alert("Participation is closed for this event", "e");
      return;
    }
    alert(
      "Are you sure want to reset all mistaken identity number ?",
      function () {
        // /CoordinatorJson/ResetAllMistakenIdentityCards
        alert(
          "Are you sure that you reordered all groups based on priority ? Its important to reorder groups before reseting all mistaken identity numbers. Otherwise it will prioritize based on the default order.",
          function () {
            $.post(
              "/CoordinatorJson/ResetAllMistakenIdentityCards",
              {},
              function (data) {
                remsession("bindmanagercache");
                if (data && data.Results) {
                  alert("All mistaken identity numbers resetted.");
                } else {
                  alert(
                    "Can't reset due to some internal issues or network issues.",
                    "e"
                  );
                }
              }
            ).fail(function () {
              alert(
                "Can't reset due to some internal issues or network issues. Please try again",
                "e"
              );
            });
          },
          false,
          "newidentity2",
          "c"
        );
      },
      false,
      "newidentity",
      "c"
    );
  });

  $("body").on("keyup change", "#TeamName", function (e) {
    ////firsttriggercompetition = true;
    if ($(this).val()) {
      var th = $(this);
      if ($("#TeamsList").attr("data-binderinit-focus")) {
        $("#TeamsList").removeAttr("data-binderinit-focus");
        $("#TeamsList").binder();
      }
      var found = false;
      $("#TeamsList [data-teamid-attr]").each(function () {
        if (
          !found &&
          $(this).text() &&
          $(this).text().toLowerCase().split(th.val().toLowerCase()).length > 1
        ) {
          alert(
            "Team name starts with <b>" +
            th.val() +
            "</b> already exists as <b>" +
            $(this).text() +
            "</b>",
            null,
            null,
            "teamexistsid"
          );
          found = true;
        }
      });
      lazyi++;
      var locallazyi = lazyi;
      setTimeout(function () {
        if (locallazyi == lazyi) {
          /////    $("#TeamHiddenName").val($("#TeamName").val()).trigger("change");
        }
      }, 500);
    }
  });
  $("body").on(
    "change",
    "#coordinatorcompetitionoptdropdownforcandidates .optcheck[type=checkbox]",
    function (e) {
      var firstone = $(
        "#coordinatorcompetitionoptdropdownforcandidates .optcheck[type=checkbox]:checked:first"
      );
      if (
        firstone.prop("checked") &&
        firstone.next().attr("participanttype") == "1"
      ) {
        ////commented due to common individuals
        ////if ($("#GroupGlobalParticipant").val() != firstone.next().attr("group")) {
        ////    $("#GroupGlobalParticipant").val(firstone.next().attr("group")).trigger("change");
        ////}
        if (!$("#GroupGlobalParticipant").val()) {
          $("#GroupGlobalParticipant")
            .val(firstone.next().attr("group"))
            .trigger("change");
        }
        $(".teaminfo").hide();
        $(".teaminfo input[type=text]").val("");
        $(".individualinfo").show();
      } else if (firstone.prop("checked")) {
        $(".individualinfo").hide();
        $(".individualinfo input[type=text]").val("");
        $(".teaminfo").show();
      } else {
        $(".teaminfo").hide();
        $(".individualinfo").hide();
        $(".individualinfo input[type=text]").val("");
        $(".teaminfo input[type=text]").val("");
      }
    }
  );
  $(".teaminfo").hide();
  $(".individualinfo").hide();
  $("body").on("keyup change", "#CandidateName", function (e) {
    ////firsttriggercompetition = true;
    if ($(this).val()) {
      var th = $(this);
      if ($("#CandidateUsersList").attr("data-binderinit-focus")) {
        $("#CandidateUsersList").removeAttr("data-binderinit-focus");
        $("#CandidateUsersList").binder();
      }
      var found = false;
      $("#CandidateUsersList [uname]").each(function () {
        if (
          !found &&
          $(this).attr("uname") &&
          $(this).attr("uname").toLowerCase().split(th.val().toLowerCase())
            .length > 1
        ) {
          alert(
            "Candidate name starts with <b>" +
            th.val() +
            "</b> already exists as <b>" +
            $(this).attr("uname") +
            "</b>",
            null,
            null,
            "candidateexistsid"
          );
          found = true;
        }
      });

      lazyi++;
      var locallazyi = lazyi;
      setTimeout(function () {
        if (locallazyi == lazyi) {
          /////  $("#CandidateHiddenName").val($("#CandidateName").val()).trigger("change");
        }
      }, 500);
    }
  });
  $("body").on("keyup", ".organizationName", function (e) {
    ////firsttriggercompetition = true;
    if ($(this).val()) {
      var cl = $(this).closest(".input-group");
      cl.find("[name=Name]").val(
        $(this).val() + " " + cl.find(".input-group-addon").last().text().trim()
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

  $("[type=date]").each(function () {
    var value = $(this).val();
    var valuepieces = value.split("-");
    if (!valuepieces[0]) {
      valuepieces[0] = "";
    }
    if (!valuepieces[1]) {
      valuepieces[1] = "";
    }
    if (!valuepieces[2]) {
      valuepieces[2] = "";
    }
    var name = $(this).attr("data-key");

    var year = new Date().getFullYear();
    $(this).attr("type", "text");
    $(this).hide();
    $(this).after(
      '<div class="customdate"><input value="' +
      valuepieces[0] +
      '" data-formatdate="dd"   data-attr-' +
      name +
      '="value"  min="1" max="31" maxlength="2" size="2" type="number" placeholder="DD" class="date dateinput  form-control"/>' +
      '<input min="1" max="12" maxlength="2" value="' +
      valuepieces[1] +
      '" size="2" type="number" data-formatdate="MM"   data-attr-' +
      name +
      '="value"  placeholder="MM" class="month dateinput  form-control"/>' +
      '<input type="number" data-formatdate="yyyy"   data-attr-' +
      name +
      '="value"  min="1900" max="' +
      (year + 20) +
      '" value="' +
      valuepieces[2] +
      '"  maxlength="4" size="4" placeholder="YYYY" class="year dateinput  form-control"/></div>'
    );
  });
  $("body").on("change", "[type=date]", function () { });
  $("body").on("change", ".customdate input", function () {
    if (parseInt($(this).val()) > parseInt($(this).attr("max"))) {
      $(this).val($(this).attr("max")).trigger("change");
    }
    if (parseInt($(this).val()) < parseInt($(this).attr("min"))) {
      $(this).val($(this).attr("min")).trigger("change");
    }

    var d = $(this).closest(".customdate").find(".date").val();
    if (!d) {
      d = $(this).closest(".customdate").find(".date").attr("min");
    }
    var m = $(this).closest(".customdate").find(".month").val();
    if (!m) {
      m = $(this).closest(".customdate").find(".month").attr("min");
    }
    var y = $(this).closest(".customdate").find(".year").val();
    if (!y) {
      y = $(this).closest(".customdate").find(".year").attr("min");
    }
    $(this)
      .closest(".customdate")
      .prev("input")
      .val(d + "-" + m + "-" + y)
      .trigger("change", true);
  });
  var lastsavedOrganization = "";

  $("body").on("aftersavetableformrow", ".orgrow", function (e) {
    ////firsttriggercompetition = true;
    lastsavedOrganization = $(this).find("[name='Name']").val();

    alert(
      "New " + $(this).attr("data-level") + " name added to list.",
      false,
      false,
      false,
      false,
      5000
    );

    //// $.binder.reload($("#CandidateUsersList"));
    ////  $.binder.reload($("#TeamsList"));
    $("#CandidateName").val("");
    $("#TeamName").val("");
  });
  $("body").on("aftersavetableformrow", ".organizationrow > *", function (e) {
    ////firsttriggercompetition = true;

    $.binder.reload($(e.target).find(".organizationlistgroup"));
  });

  $("body").on("click", ".participanttypes li", function (e) {
    ////firsttriggercompetition = true;

    if ($(this).attr("EPTId")) {
      $(this)
        .closest(".organizationlistgroup")
        .find(".list-group-item")
        .removeClass("active");
      $(this).addClass("active");
      $(".participanttypedepend").hide();
      $(
        ".participanttypedepend.participanttype_" + $(this).attr("EPTId")
      ).show();
      $("#selectedparticipanttypeforbulkedit")
        .val($(this).attr("EPTId"))
        .trigger("change", true);

      if ($(this).attr("EPTId") == 2) {
      }

      ////var cl = $(this).closest(".orgrow");
      ////cl.find(".hiddenParentOrganization").val($(this).attr("orgid")).trigger("change");
      ////$(".orgdropdownlist .hiddenParentOrganization:first").val($(this).attr("orgid")).trigger("change");
      ////$(this).closest(".orgrow").find(".organizationlistgroupview").html($(this)[0].outerHTML);
      ////$('[name="' + 'UsersModel[' + $(this).closest(".orgrow").attr("data-level").replace(/ /ig, '') + ']' + '"]').val($(this).attr("orgid"));
    }
  });

  $("body").on("afterappendcomplete", ".agewisegroups", function (e, data) {
    let length = data?.rows?.Results?.length;
    if (length == 1) {
      $(".agewisegroups").hide();
      $(".agewisegroups li").trigger("click");
    }
  });

  $("body").on("afterappendcomplete", ".participanttypes", function (e, data) {
    let localStorageKey = "selectedparticipanttypeforbulkedit_/Coordinator/ManageBulkParticipants";
    let selectedParticipantType = getcache(localStorageKey);
    if (!selectedParticipantType) {
      selectedParticipantType = data?.rows?.Results[0]?.EPTId;
      $(".participanttypes li[eptid=" + selectedParticipantType + "]").trigger("click");
    }

  });

  $("body").on("click", ".agewisegroups li", function (e) {
    ////firsttriggercompetition = true;

    if ($(this).attr("groupid")) {
      $(this)
        .closest(".organizationlistgroup")
        .find(".list-group-item")
        .removeClass("active");
      $(this).addClass("active");
      $("#selectedagefromforbulkedit")
        .val($(this).attr("agefrom"))
        .trigger("cachechange", true);
      $("#selectedagetoforbulkedit")
        .val($(this).attr("ageto"))
        .trigger("cachechange", true);
      $("#selectedgroupidforbulkedit")
        .val($(this).attr("groupid"))
        .trigger("change", true);
      ////var cl = $(this).closest(".orgrow");
      ////cl.find(".hiddenParentOrganization").val($(this).attr("orgid")).trigger("change");
      ////$(".orgdropdownlist .hiddenParentOrganization:first").val($(this).attr("orgid")).trigger("change");
      ////$(this).closest(".orgrow").find(".organizationlistgroupview").html($(this)[0].outerHTML);
      ////$('[name="' + 'UsersModel[' + $(this).closest(".orgrow").attr("data-level").replace(/ /ig, '') + ']' + '"]').val($(this).attr("orgid"));
    }
  });
  var orglistlength = $("select.organizationlistgroup").length;
  if (orglistlength == 0) {
    $("#allowtoloadparticipantlist").val("true").trigger("change");
  }

  var orgloaded = 0;
  var lazyuseri = 0;
  $("body").on("change", ".organizationlistgroup", function (e, force) {
    $("#reloaditems").trigger("change");
    ////firsttriggercompetition = true;
    lazyuseri++;
    var cl = $(this).closest(".orgrow").next(".orgrow");
    var locallazyi = lazyuseri;
    var th = $(this);
    if (
      $("select.organizationlistgroup:last").length == 0 ||
      ($("select.organizationlistgroup:last").val() &&
        $("select.oaddnewCandidatebulkrganizationlistgroup:last").val() !=
        "all")
    ) {
      $(
        ".newbulkcheckbox,.addnewbox input,.addnewbox button,.addnewbox .btn,.Candidateleftlist .btn"
      )
        .prop("disabled", false)
        .removeClass("disabled");
      $("[name='UsersModel[UserName]']").attr("placeholder", "Name");
      isAllOrganizationsSelected = true;
    } else {
      $(
        ".newbulkcheckbox,.addnewbox input,.addnewbox button,.addnewbox .btn,.Candidateleftlist .btn"
      )
        .prop("disabled", true)
        .addClass("disabled");
      isAllOrganizationsSelected = false;
      $("[name='UsersModel[UserName]']").attr(
        "placeholder",
        "Missing Local/District/State/Zone/Club Name"
      );
    }
    $(
      '[name="' +
      "User" +
      th.closest(".orgrow").attr("data-level").replace(/ /gi, "") +
      '"]'
    ).val(th.val());
    $(
      '[name="' +
      "Candidate" +
      th.closest(".orgrow").attr("data-level").replace(/ /gi, "") +
      '"]'
    ).val(th.val());
    $(
      '[name="' +
      th.closest(".orgrow").attr("data-level").replace(/ /gi, "") +
      '"]'
    ).val(th.val());
    $(
      '[name="Team' +
      th.closest(".orgrow").attr("data-level").replace(/ /gi, "") +
      '"]'
    ).val(th.val());
    setTimeout(function () {
      if (locallazyi == lazyuseri) {
        if (orglistlength <= orgloaded) {
          $(
            '[name="' +
            "Candidate" +
            th.closest(".orgrow").attr("data-level").replace(/ /gi, "") +
            '"]'
          ).trigger("change");
          $(
            '[name="' +
            "User" +
            th.closest(".orgrow").attr("data-level").replace(/ /gi, "") +
            '"]'
          ).trigger("change");
          $(
            '[name="' +
            "Team" +
            th.closest(".orgrow").attr("data-level").replace(/ /gi, "") +
            '"]'
          ).trigger("change");
          $(
            '[name="' +
            th.closest(".orgrow").attr("data-level").replace(/ /gi, "") +
            '"]'
          ).trigger("change");
        }
      }
    }, 800);
    if ($(this).val()) {
      cl.find(".hiddenParentOrganization").val($(this).val()).trigger("change");
      $(
        '[name="' +
        "UsersRolesModel[" +
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
  $("body").on("afterappendcomplete", "ul.organizationlistgroup", function (e) {
    let postfix = "_" + window.location.pathname;
    if (e.target == e.currentTarget) {
      if ($("#selectedgroupidforbulkedit").val()) {
        $(
          ".agewisegroups li.list-group-item[groupid='" +
          $("#selectedgroupidforbulkedit").val() +
          "']"
        ).addClass("active");
      } else if (getcache("selectedgroupidforbulkedit" + postfix)) {
        $("#selectedgroupidforbulkedit").val(
          getcache("selectedgroupidforbulkedit" + postfix)
        );
        $(
          ".agewisegroups li.list-group-item[groupid='" +
          getcache("selectedgroupidforbulkedit" + postfix) +
          "']"
        ).addClass("active");
      }
      if (
        $("#selectedgroupidforbulkedit").val() &&
        $(".agewisegroups .active").length == 0 &&
        $(".agewisegroups .list-group-item[data-jlelements]").length >= 0
      ) {
        $("#selectedgroupidforbulkedit").val("");
      }

      if ($("#selectedparticipanttypeforbulkedit").val()) {
        $(
          ".participanttypes li.list-group-item[eptid='" +
          $("#selectedparticipanttypeforbulkedit").val() +
          "']"
        ).addClass("active");
      } else if (getcache("selectedparticipanttypeforbulkedit" + postfix)) {
        $("#selectedparticipanttypeforbulkedit").val(
          getcache("selectedparticipanttypeforbulkedit" + postfix)
        );
        $(
          ".participanttypes li.list-group-item[eptid='" +
          getcache("selectedparticipanttypeforbulkedit" + postfix) +
          "']"
        ).addClass("active");
      } else {
        //// $(this).find("li:first").trigger("click");
      }
      if (
        $("#selectedparticipanttypeforbulkedit").val() &&
        $(".participanttypes .active").length == 0 &&
        $(".participanttypes .list-group-item[data-jlelements]").length >= 0
      ) {
        $("#selectedparticipanttypeforbulkedit").val("");
      }
    }
  });

  $("body").on(
    "afterappendcomplete",
    "select.organizationlistgroup",
    function (e) {
      if ($("select#levelid_" + (orgloaded + 1)).not($(this)).length == 0) {
        orgloaded++;
      }

      if (orglistlength == orgloaded) {
        $("#allowtoloadparticipantlist").val("true");
      }
      ////$(this).find("option:eq(1)").prop("selected", true);
      ////$(this).trigger("change",true);

      if (lastsavedOrganization) {
        var selectedItem = $(this).find(
          "option[data-text='" + lastsavedOrganization + "']"
        );
        if (selectedItem.length > 0) {
          $(this)
            .find("option[data-text='" + lastsavedOrganization + "']")
            .prop("selected", true);
          $(this).trigger("change", true);
        }
      }
    }
  );
  var participantList = [];
  var competitionitemsList = [];
  $("body").on(
    "beforeappendcomplete",
    "#GetParticipantsList",
    function (e, data) {
      if (
        e.target == e.currentTarget &&
        data &&
        data.rows &&
        data.rows.Results
      ) {
        competitionitemsList = data.rows.Results.Competitions;
        participantList = data.rows.Results.ParticipantsList;

        data.rows.Results.UsersList.forEach(function (item) {
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

  $("body").on("beforeappendcomplete", "#ItemWiseView", function (e, data) {
    if (e.target == e.currentTarget && data && data.rows && data.rows.Results) {
      data.rows.Results.forEach(function (item) {
        if (item.List) {
          item.List.forEach(function (item2) {
            if (item2.List) {
              item2.List.forEach(function (item3) {
                if (item3.First?.UserImage) {
                  item3.First.UserImage = item3.First.UserImage.replace(
                    "https:/files",
                    "https://files"
                  );
                }
              });
            }
            if (item2?.UserImage) {
              item2.UserImage = item2.UserImage.replace(
                "https:/files",
                "https://files"
              );
            }
          });
        }
      });
    }
  });
  $("body").on("afterappendcomplete", "#Userslist", function (e, data) {
    $("#Userslist").find(".candidatescompetitionrow").attr("data-json", "");
  });

  $("body").on("afterappendcomplete", "#CommonGroupId", function (e, data) {
    if (e.target == e.currentTarget) {
      if (
        !$("#CommonGroupId").val() &&
        !$("#IsIncludeCommonCompetitions").val()
      ) {
        //$("#CommonGroupId").val("true");
        if (data && data.rows && data.rows.Results && data.rows.Results) {
          let matchingGroup = data.rows.Results.find(
            (x) => x.GroupName == "Common"
          );
          if (matchingGroup && matchingGroup.EventGroupId) {
            $("#CommonGroupId")
              .val(matchingGroup.EventGroupId)
              .trigger("change");
            $("#IsIncludeCommonCompetitions").val("true").trigger("change");
          }
        }
      }
    }
  });

  $("body").on(
    "afterappendcomplete",
    "#competitionstructureheading",
    function (e, data) {
      console.log($(this).attr("id"));
      if (e.target == e.currentTarget) {
        console.log($(this).attr("id"));

        ///// $("body").css("min-width", "1200px");
        if (
          $("select.organizationlistgroup:last").length == 0 ||
          ($("select.organizationlistgroup:last").val() &&
            $("select.organizationlistgroup:last").val() != "all")
        ) {
          $(
            ".newbulkcheckbox,.addnewbox input,.addnewbox button,.addnewbox .btn,.Candidateleftlist .btn"
          )
            .prop("disabled", false)
            .removeClass("disabled");
          isAllOrganizationsSelected = true;
          $("[name='UsersModel[UserName]']").attr("placeholder", "Name");
        } else {
          $(
            ".newbulkcheckbox,.addnewbox input,.addnewbox button,.addnewbox .btn,.Candidateleftlist .btn"
          )
            .prop("disabled", true)
            .addClass("disabled");
          $("[name='UsersModel[UserName]']").attr(
            "placeholder",
            "Missing Local/District/State/Zone/Club Name"
          );
          isAllOrganizationsSelected = false;
        }
        $("#UsersNewlist")
          .find(".candidatescompetitionrow")
          .binder(competitionitemsList);
        $("#Userslist")
          .find(".candidatescompetitionrow")
          .binder(competitionitemsList, function (t, rows) {
            t.find(".checkthiscompetition").each(function () {
              var th = $(this);
              $.each(participantList, function (pi, pv) {
                if (!th.prop("checked")) {
                  if (
                    th.attr("CompetitionStructureId") == pv.Competition &&
                    th.attr("candidateid") == pv.Candidate
                  ) {
                    th.attr("participantid", pv.ParticipantId);
                    th.parent()
                      .find(".competitionIdentityNumber")
                      .text(pv.IdentityNumber);
                    if (
                      th.attr("candidateid") &&
                      th.attr("candidateid") != ZeroValue
                    ) {
                      th.prop("checked", true);
                    }

                    // th.closest(".bulkcheckbox").find(".editItem").show();
                  }
                  if (
                    th.attr("CompetitionStructureId") == pv.Competition &&
                    th.attr("teamid") == pv.Candidate
                  ) {
                    th.parent()
                      .find(".competitionIdentityNumber")
                      .text(pv.IdentityNumber);
                    th.attr("participantid", pv.ParticipantId);
                    if (th.attr("teamid") && th.attr("teamid") != ZeroValue) {
                      th.prop("checked", true);
                    }
                  }
                }
              });
            });
          });
        $(".participanttypedepend").hide();
        $(
          ".participanttypedepend.participanttype_" +
          $("#selectedparticipanttypeforbulkedit").val()
        ).show();
      }
    }
  );
  var saveparticipantinfo = function (
    th,
    user,
    newitem,
    isdetailschange,
    newidentity,
    onlysavenoerror
  ) {
    if (freezeParticipation) {
      alert("Participation is closed for this event, no changes happened", "e");
      return;
    }

    hidespinner(user);

    var cl = th.closest(".bulkcheckbox");

    showspinner(user);
    if (th.prop("checked") || isdetailschange) {
      // if(!th.attr("participantid")){
      if (!isdetailschange && cl.length > 0) {
        showspinner(cl);
      }
      var formrow = th.closest(".candidatescompetitionrow");

      var formdata = {};
      if (newitem) {
        formdata = $.fn.binder.methods.makepostdata(
          formrow
            .find("[name]")
            .add(user.find("[name]"))
            .add($(".oranizationListFormvalues").find("[name]"))
        );
      } else {
        formdata = $.fn.binder.methods.makepostdata(
          user
            .find("[name]")
            .add($(".oranizationListFormvalues").find("[name]"))
        );
        formdata.CompetitionParticipantsModel = {};
        formdata.CompetitionParticipantsModel[
          "CompetitionCompetitionStructureId"
        ] = th.attr("competitionstructureid");

        if (
          !formdata.CompetitionParticipantsModel[
          "CompetitionCompetitionStructureId"
          ]
        ) {
          formdata.CompetitionParticipantsModel[
            "CompetitionCompetitionStructureId"
          ] = 0;
        }
      }

      if (th.attr("participantid")) {
        formdata.Participantid = th.attr("participantid");
      }
      formdata.ParticipantType = $("#selectedparticipanttypeforbulkedit").val();
      formdata.Group = $("#selectedgroupidforbulkedit").val();

      if (formdata.ParticipantType == 2) {
        //let candidates = newitem?$(".addnewbox").find("select.groupmemberslist").attr("values"):user.find("select.groupmemberslist").attr("values");
        //let candidateArray = JSON.parse(candidates);
        if (!formdata.CompetitionParticipantsModel) {
          formdata.CompetitionParticipantsModel = {};
        }
        /*formdata.CompetitionParticipantsModel.CompetitionMembersList = candidateArray;*/
      }

      if (user.find("[name='UsersModel[UserDobString]']:visible").length > 0) {
        let groupMaxAge = $(".agewisegroups li.list-group-item.active").attr(
          "ageto"
        );
        let groupMinAge = $(".agewisegroups li.list-group-item.active").attr(
          "agefrom"
        );

        let agestartdate = $(".agewisegroups li.list-group-item.active").attr(
          "agestartdate"
        );
        let agestartmonth = $(".agewisegroups li.list-group-item.active").attr(
          "agestartmonth"
        );
        let agestartyear = $(".agewisegroups li.list-group-item.active").attr(
          "agestartyear"
        );
        if (
          agestartdate > 0 &&
          agestartmonth > 0 &&
          agestartyear > 0 &&
          groupMaxAge > 0
        ) {
          let expectedStartDate = new Date(
            agestartyear,
            agestartmonth - 1,
            agestartdate
          );

          expectedStartDate.setFullYear(
            expectedStartDate.getFullYear() - groupMaxAge-1
          );

          expectedStartDate.setDate(expectedStartDate.getDate() + 1);


          let expectedEndDate = new Date(
            agestartyear,
            agestartmonth - 1,
            agestartdate
          );

          expectedEndDate.setFullYear(
            expectedEndDate.getFullYear() - groupMinAge 
          );
          try {
            let userdob = $.datepicker.parseDate(
              "dd-mm-yy",
              formdata["UsersModel[UserDobString]"]
            );

            if (userdob < expectedStartDate || userdob > expectedEndDate) {
              alert(
                `Please select the correct age group for the user or change the date of birth between ${expectedStartDate.toLocaleDateString()} and ${expectedEndDate.toLocaleDateString()}`,
                "e"
              );
              hidespinner(user);
              return;
            }
          } catch (e) {
            alert("Invalid DOB", "e");
            hidespinner(user);
            return;
          }
        }
      }

      formdata.newIdentity = newidentity;

      $.post(
        $("#saveparticipantinput").val(),
        formdata,
        function (participantid) {
          remsession("bindmanagercache");
          var pieces = participantid.split(",");
          participantid = parseInt(pieces[0]);

          $("#BulkCandidateName").val("");
          if (!isdetailschange) {
            hidespinner(cl);
          }
          hidespinner(user);
          if (pieces.length > 1 && pieces[1]) {
            user.find(".userIdentityNumber").text(pieces[1]);
          }
          if (
            participantid > 0 ||
            (isdetailschange && (pieces[1] || onlysavenoerror))
          ) {
            alert("Applied changes");
            if (newitem) {
              $("#GetParticipantsList").binder();
            } else {
              if (participantid > 0) {
                th.attr("participantid", participantid);
                if (pieces.length > 2 && pieces[2]) {
                  var identityNumber = pieces[2];
                  if (identityNumber) {
                    th.parent()
                      .find(".competitionIdentityNumber")
                      .text(identityNumber);
                  }
                }
              }
            }

            $("#UsersNewlist input[type=checkbox]").prop("checked", false);

            return;
            ////$.binder.insert($("#bulkusersleftlist"), success.Results.ParticipantsList);
          } else {
            alert(
              "Can't add due to some internal issues or network issues.",
              "e"
            );
            th.prop("checked", false);
          }
        }
      ).fail(function () {
        hidespinner(user);
        alert(
          "Can't add due to this some internal issues or network issues. Please try again",
          "e"
        );
      });
      // }else{
      //    th.prop("checked", false);
      //}
    } else {
      if (th.attr("participantid")) {
        let token = JSON.parse(localStorage.getItem("user"))
          ? JSON.parse(localStorage.getItem("user")).token
          : "";
        let headers = { Authorization: "Bearer " + token };
        $.ajax({
          data: {
            ParticipantId: th.attr("ParticipantId"),
          },
          headers: headers,
          url: $("#deleteparticipantinput").val(),
          type: "DELETE",
          success: function (data) {
            remsession("bindmanagercache");
            hidespinner(user);
            if (!isdetailschange) {
              // showspinner(cl);
            }
            if (data && data.Results) {
              th.removeAttr("participantid");
              th.parent().find(".competitionIdentityNumber").text("");
              alert("Item Removed");
            } else {
              alert(
                "Can't Delete this item because using this item in somewhere.",
                "e"
              );
              th.prop("checked", true);
            }
          },
          error: function () {
            hidespinner(user);
            alert(
              "Can't deleteit, because it using in somewhere or network issues. Please try again",
              "e"
            );
          },
        });
      } else {
        th.prop("checked", true);
      }
    }
  };
  $("body").on("change", ".bulkcheckbox [type=checkbox]", function (e) {
    if (e.originalEvent) {
      e.stopPropagation();
      e.stopImmediatePropagation();
      var th = $(this);
      var row = $(
        ".Candidateleftlist[Candidate=" + th.attr("candidateid") + "]"
      );
      if (
        !th.attr("candidateid") ||
        th.attr("candidateid") == "0" ||
        th.attr("candidateid") == ZeroValue
      ) {
        row = $(".Candidateleftlist[teamid=" + th.attr("teamid") + "]");
      }
      let rightBox = $(
        ".candidatescompetitionrow[candidateid=" + th.attr("candidateid") + "]"
      );
      if (
        !th.attr("candidateid") ||
        th.attr("candidateid") == "0" ||
        th.attr("candidateid") == ZeroValue
      ) {
        rightBox = $(
          ".candidatescompetitionrow[teamid=" + th.attr("teamid") + "]"
        );
      }
      let allCheckedItems = rightBox.find("[type=checkbox]:checked").length;

      if (
        allCheckedItems > maxTeamCount &&
        maxTeamCount != 0 &&
        $("#selectedparticipanttypeforbulkedit").val() == 2
      ) {
        alert("Only allowed maximum " + maxTeamCount + " participations.", "e");
        th.prop("checked", false);
        return false;
      }
      if (
        allCheckedItems > maxCandidateCount &&
        maxCandidateCount != 0 &&
        $("#selectedparticipanttypeforbulkedit").val() == 1
      ) {
        alert(
          "Only allowed maximum " + maxCandidateCount + " participations.",
          "e"
        );
        th.prop("checked", false);
        return false;
      }
      alert(
        "Are you sure want to change the participation of this candidate?",
        function () {
          saveparticipantinfo(th, row);
        },
        function () {
          th.prop("checked", !th.prop("checked"));
        },
        "newidentity",
        "c"
      );
    }
  });
  $("body").on(
    "keyup",
    ".Candidateleftlist .eachcandidatename,.Candidateleftlist .eachcandidatedob,.Candidateleftlist .eachcandidatemobile,.Candidateleftlist .eachcandidateimage,.Candidateleftlist .eachcandidateemail,.Candidateleftlist .eachcandidategender",
    function (e) {
      if (e.originalEvent) {
        e.stopPropagation();
        e.stopImmediatePropagation();

        if (freezeParticipation) {
          alert(
            "Participation is closed for this event, no changes happened",
            "e"
          );
          return;
        }

        var cl = $(this).closest(".Candidateleftlist");
        if (!cl.find(".eachcandidatename").val()) {
          cl.find(".form-group").addClass("is-error");
        } else {
          cl.find(".form-group").removeClass("is-error");
        }

        if (cl.find(".eachcandidatemobile").length > 0 && !cl.find(".eachcandidatemobile").val()) {
          cl.find(".form-group").addClass("is-error");
        }
        else {
          cl.find(".form-group").removeClass("is-error");
        }

        if (cl.find(".eachcandidatedob").val()) {
          if (
            !cl.find(".eachcandidatedob").val() ||
            cl.find(".eachcandidatedob").val().split("-").length != 3 ||
            cl.find(".eachcandidatedob").val().length != 10
          ) {
            cl.find(".form-group").addClass("is-error");
          } else {
            cl.find(".form-group").removeClass("is-error");
          }
        } else {
          cl.find(".form-group").removeClass("is-error");
        }
      }
    }
  );

  $("body").on(
    "change",
    ".Candidateleftlist .eachcandidatename,.Candidateleftlist .eachcandidatedob,.Candidateleftlist .eachcandidateregid,.Candidateleftlist .eachcandidateimage,.Candidateleftlist .eachcandidatemobile,.Candidateleftlist .eachcandidateemail,.Candidateleftlist .eachcandidategender",
    function (e, force) {
      if (e.originalEvent || force) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (freezeParticipation) {
          alert(
            "Participation is closed for this event, no changes happened",
            "e"
          );
          return;
        }
        var cl = $(this).closest(".Candidateleftlist");
        if (!cl.find(".eachcandidatename").val()) {
          alert("Please enter candidate name", "e");
          return;
        }
        
        if(cl.find(".eachcandidategender").length > 0 && !cl.find(".eachcandidategender").val()){
          alert("Please enter candidate gender", "e");
          return;
        }
          

        if (cl.find(".eachcandidatedob").val()) {
          if (
            !cl.find(".eachcandidatedob").val() ||
            cl.find(".eachcandidatedob").val().split("-").length != 3 ||
            cl.find(".eachcandidatedob").val().length != 10
          ) {
            alert("Please enter valid date of birth", "e");
            return;
          }
        }

        if (cl.find(".eachcandidatemobile").val()) {
          if (
            !cl.find(".eachcandidatemobile").val() ||
            cl.find(".eachcandidatemobile").val().length < 10
          ) {
            alert("Please enter valid mobile number", "e");
            return;
          }
        }


        let userRegId = cl.find(".eachcandidateregid").val();
        if (isRegIdMandatory) {
          if (!userRegId) {
            alert("Please enter registration id", "e");
            return;
          }
        }

        if (allowedRegIdNumbers && allowedRegIdNumbers.length > 0 && userRegId) {
          if (!allowedRegIdNumbers.filter(x => x.RegistrationNumber == userRegId).length) {
            alert("Please enter valid registration id", "e");
            return;
          }
        }

        var th = $(
          ".candidatescompetitionrow[candidateid=" +
          $(this).closest(".Candidateleftlist").attr("candidate") +
          "]"
        ).find(".checkthiscompetition:checked:first");
        if (
          !$(this).closest(".Candidateleftlist").attr("candidate") ||
          $(this).closest(".Candidateleftlist").attr("candidate") == ZeroValue
        ) {
          th = $(
            ".candidatescompetitionrow[teamid=" +
            $(this).closest(".Candidateleftlist").attr("teamid") +
            "]"
          ).find(".checkthiscompetition:checked:first");
        }
        // if (th.length > 0) {
        saveparticipantinfo(
          th,
          $(this).closest(".Candidateleftlist"),
          false,
          true
        );
        // } else {
        //   alert("Please select any competitions", "e");
        // }
      }
    }
  );
  $("body").on("click", ".addnewCandidatebulk", function (e) {
    if (e.originalEvent) {
      e.stopPropagation();
      e.stopImmediatePropagation();
      var th = $(".newbulkcheckbox").find(
        ".checkthiscompetition:checked:first"
      );
      if (freezeParticipation) {
        alert("Participation is closed for this event", "e");
        return;
      }
      // check if dob is empty
      if (
        $("#BulkCandidateName").val() &&
        $("#BulkCandidateName").val().trim()
      ) {
        let agestartdate = $(".agewisegroups li.list-group-item.active").attr(
          "agestartdate"
        );
        let agestartmonth = $(".agewisegroups li.list-group-item.active").attr(
          "agestartmonth"
        );
        let agestartyear = $(".agewisegroups li.list-group-item.active").attr(
          "agestartyear"
        );
        if (agestartdate > 0 && agestartmonth > 0 && agestartyear > 0) {
          var dob = $("#BulkCandidateDOB").val();
          if (!dob) {
            alert("Please enter date of birth", "e");
            return;
          }
        }
        var email = $("#BulkCandidateEmail").val();
        //if (!email) {
        //  alert("Please enter email", "e");
        //  return;
        //}

        var mobile = $("#BulkCandidateMobileNumber").val();
        //if (!mobile) {
        //  alert("Please enter mobile", "e");
        //  return;
        //}
        if (mobile?.length > 0) {
          if (mobile.length < 10) {
            alert("Please enter valid mobile number", "e");
            return;
          }
        }
        if (email?.length > 0) {
          if (email.length < 5) {
            alert("Please enter valid email", "e");
            return;
          }

          if (email.indexOf("@") == -1) {
            alert("Please enter valid email", "e");
            return;
          }

          if (email.indexOf(".") == -1) {
            alert("Please enter valid email", "e");
            return;
          }

          if (email.indexOf("@") > email.lastIndexOf(".")) {
            alert("Please enter valid email", "e");
            return;
          }

          if (email.lastIndexOf(".") + 1 == email.length) {
            alert("Please enter valid email", "e");
            return;
          }
        }

        let userRegId = $(".addnewbox [name='UsersModel[RegistrationId]']").val();
        if (isRegIdMandatory) {
          if (!userRegId) {
            alert("Please enter registration id", "e");
            return;
          }
        }

        let gender = $(".addnewbox [name='UsersModel[UserNameTitle]']").val();
        if($(".addnewbox [name='UsersModel[UserNameTitle]']").length > 0) {
          if(!gender) {
            alert("Please enter gender", "e");
            return;
          }
        }

        if (allowedRegIdNumbers && allowedRegIdNumbers.length > 0 && userRegId) {
          if (!allowedRegIdNumbers.filter(x => x.RegistrationNumber == userRegId).length) {
            alert("Please enter valid registration id", "e");
            return;
          }
        }

        var userImage = $(".addnewbox [name='UsersModel[UserImage]']").val();
        if (isPhotoMandatory) {
          if (!userImage) {
            alert("Please upload image", "e");
            return;
          }
        }
      }

      if (
        ($("#BulkCandidateName").val() &&
          $("#BulkCandidateName").val().trim()) ||
        ($("#BulkTeamName").val() && $("#BulkTeamName").val().trim())
      ) {
        if (
          maxTeamCount != 0 &&
          th.length > maxTeamCount &&
          $("#selectedparticipanttypeforbulkedit").val() == "2"
        ) {
          alert(
            "Only allowed maximum " + maxTeamCount + " participations.",
            "e"
          );
        } else if (
          maxCandidateCount != 0 &&
          th.length > maxCandidateCount &&
          $("#selectedparticipanttypeforbulkedit").val() == "1"
        ) {
          alert(
            "Only allowed maximum " + maxCandidateCount + " participations.",
            "e"
          );
        } else if (th.length > 0) {
          let isError = false;
          if ($("#selectedparticipanttypeforbulkedit").val() == "2") {
            $(".newbulkcheckbox")
              .find(".checkthiscompetition:checked")
              .each(function () {
                let th2 = $(this);
                let maxCandidatesForATeam = th2.attr("MaximumCandidates");
                //let candidates = $(".addnewbox .groupmemberslist").attr("values");
                //let candidateArray = JSON.parse(candidates);
                //if (candidateArray.length > maxCandidatesForATeam) {
                //  alert(
                //    "Only allowed maximum " +
                //      maxCandidatesForATeam +
                //      " members for this competition.",
                //    "e"
                //  );
                //  isError = true;
                //  return false;
                //}
                //if (candidateArray.length < 2) {
                //  alert(
                //    "Please add atleast 2 members for this competition.",
                //    "e"
                //  );
                //  isError = true;
                //  return false;
                //}
              });
          }

          if (!isError) {
            saveparticipantinfo(th, $(".addnewbox"), true);
          }

          $(".addnewbox .groupmemberslist").removeAttr("values");
          $(".addnewbox .groupmemberslist [type=checkbox]").prop(
            "checked",
            false
          );
        } else {
          alert("Please select any competitions", "e");
        }
      } else {
        alert("Please enter candidate name", "e");
      }
    }
  });

  $("body").on("change", "[data-showfield]", function () {
    if ($(this).prop("checked")) {
      if ($(this).attr("data-showfieldblock")) {
        $("body").append(
          "<style>" +
          $(this).attr("data-showfield") +
          "{ display:block !important; }</style>"
        );
      } else {
        $("body").append(
          "<style>" +
          $(this).attr("data-showfield") +
          "{ display:table-cell !important; }</style>"
        );
      }
    } else {
      $("body").append(
        "<style>" +
        $(this).attr("data-showfield") +
        "{ display:none !important; }</style>"
      );
    }
  });

  $("body").on("change", ".userprofileimage", function () {
    let formGroup = $(this).closest(".form-group");
    let th = $(this);
    let formData = new FormData();
    let files = th[0].files;
    if (files.length > 0) {
      formData.append("file", files[0]);
    }
    let token = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user")).token
      : "";
    let headers = { Authorization: "Bearer " + token };
    showspinner(formGroup);
    $.ajax({
      url: "/UploadJson/UploadCandidateImage",
      type: "POST",
      headers: headers,
      data: formData,
      processData: false,
      contentType: false,
      success: function (data) {
        remsession("bindmanagercache");
        hidespinner(formGroup);
        if (data && data.Results) {
          th.closest(".form-group")
            .find(".userImage")
            .css({
              "background-image": 'url("' + data.Results + '")',
              "background-size": "cover",
              width: "38px",
              height: "38px",
              "background-position": "center",
              "background-repeat": "no-repeat",
            })
            .removeClass("hidden");
          th.closest(".form-group")
            .find(".uploadimagebutton")
            //.css("max-width", "100%")
            .removeClass("btn")
            .removeClass("btn-primary");
          if (th.closest(".addnewbox").length > 0) {
            th.closest(".form-group")
              .find(".uploadimagebutton")
              .css("max-width", "100%");
          } else {
            th.closest(".form-group")
              .find(".uploadimagebutton")
              .css("padding", "0px");
          }
          th.closest(".form-group").find(".iconcamera").hide();
        }
        let input = th
          .closest(".form-group")
          .find("[name='UsersModel[UserImage]']");
        input.val(data.Results).trigger("change", true);
        th.val("");
      },
      error: function (xhr, status, error) {
        alert(
          "Can't upload image due to some internal issues or network issues, The response is: " +
          xhr.responseText,
          "w"
        );
      },
    });
  });

  $("body").on("click", ".uploadimagebutton", function () {
    let th = $(this);
    th.closest(".form-group").find(".userprofileimage").click();
  });
})(jQuery);
function resizeBox($) {
  const $resizer = $(".resizer");
  const $leftDiv = $("#bulkusersleftlist");
  const $rightDiv = $("#bulkcompetitionsright");
  const windowWidth = $("#contentbox").width();

  // Load initial sizes from sessionStorage, if available
  if (sessionStorage.getItem("bulkusersleftlistWidth")) {
    let leftWidth = sessionStorage.getItem("bulkusersleftlistWidth");
    if (leftWidth > windowWidth - 400) {
      leftWidth = windowWidth - 400;
    }
    if (leftWidth < 400) {
      leftWidth = 400;
    }

    $leftDiv.css("width", leftWidth + "px");

    $rightDiv.css("width", `calc(100% - ${leftWidth}px`);
  }

  // Function to handle mouse movement during resizing
  function resizeHandler(e) {
    const windowWidth = $("#contentbox").width();
    let newWidth = e.pageX; // New width of the left div in pixels
    if (newWidth > windowWidth - 400) {
      newWidth = windowWidth - 400;
    }
    if (newWidth < 400) {
      newWidth = 400;
    }

    // Set the width for the left div
    $leftDiv.css("width", newWidth + "px");

    // Calculate the width for the right div
    const rightDivWidth = `calc(100% - ${newWidth}px - ${$resizer.width()}px)`;

    // Adjust the right div's width
    $rightDiv.css("width", rightDivWidth);

    // Save widths to sessionStorage
    sessionStorage.setItem("bulkusersleftlistWidth", newWidth);
    sessionStorage.setItem("bulkcompetitionsrightWidth", $rightDiv.width());
  }

  // Function to stop resizing
  function stopResize() {
    $(document).off("mousemove", resizeHandler); // Remove the resize handler
    $(document).off("mouseup", stopResize); // Remove the mouseup handler
  }

  // When mouse button is pressed down on the resizer
  $resizer.on("mousedown", function (e) {
    e.preventDefault(); // Prevent text selection

    $(document).on("mousemove", resizeHandler);
    $(document).on("mouseup", stopResize);
  });

  // When the window is resized
  $(window).on("resize", function () {
    // Reset the widths
    let leftWidth = $leftDiv.width();
    const windowWidth = $("#contentbox").width();
    if (leftWidth > windowWidth - 400) {
      leftWidth = windowWidth - 400;
    }
    if (leftWidth < 400) {
      leftWidth = 400;
    }

    $leftDiv.css("width", leftWidth + "px");

    $rightDiv.css("width", "calc(100% - " + leftWidth + "px)");
  });
}

window.customReactRender = function (path, data) {
  let userData = localStorage.getItem("user");
  let user = userData ? JSON.parse(userData) : null;
  // if (user && user?.user?.Role == "5") {
  let levels = {};
  $("select.organizationlistgroup").each(function () {
    if ($(this).closest(".orgrow").attr("data-level") && $(this).val()) {
      levels[$(this).closest(".orgrow").attr("data-level")] = $(this).val();
    }
  });

  data.levels = levels;
  // }

  window.reactRender(path, data);
};
