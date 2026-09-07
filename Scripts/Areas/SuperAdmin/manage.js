var allselectors = "#builtindetailskeyslist select[name='form[DetailsCategory]'][data-json]," +
    "#eventcompetitionadditionaldetailslist select[name='form[Group]'][data-json]," +
      "#eventcompetitionadditionaldetailslist [name='form[Competition]'][data-json]," +
      "#eventcompetitionadditionaldetailslist [name='form[CompetitionInGroup]'][data-json]," +
      "#eventcompetitiondetailslist select[name='form[Group]'][data-json]," +
      "#eventcompetitiondetailslist [name='form[Competition]'][data-json]," +
      "#eventcompetitiondetailslist [name='form[CompetitionInGroup]'][data-json],"+
    "#judgesscorecardcriterialist select[name='form[Group]'][data-json]," +
      "#judgesscorecardcriterialist [name='form[Competition]'][data-json]," +
      "#judgesscorecardcriterialist [name='form[CompetitionInGroup]'][data-json]";
$("body").on("afterappendcomplete",
      allselectors, function (e) {
          var tobj = $(this).closest(".form-group").next(".table-cell-content");
          $(this).find("option[value='']").remove();
          if (tobj.text() == ""||tobj.text() == "None") {
              $(this).prepend("<option value='' selected >All</option>");
          } else {
              $(this).prepend("<option value='' >All</option>");
          }
          
          
          $(this).trigger("focusremoved blurred", true);
      });

$("body").on("beforeinitialize",
      '#menuslist [name="form[ParentMenu]"]', function (e, postdata) {
        

          $(this).find('[data-key="MenuTitle"]').attr("data-Role-attr", "roleid").attr("data-RoleRole-inline", "text").attr("data-MenuTitle-inline", "text").text("{RoleRole}  :  {MenuTitle}").removeAttr("data-key");
         

      });
$(document).ready(function () {
    var selectorinoutside = "#competitionsstructurelist .table-addnewrow [name='form[Group]']," +
        "#competitionsstructurelist .table-addnewrow [name='form[Competition]']," +
        "#competitionsstructurelist .table-addnewrow [name='form[Language]']";
    var selectorinround = "#competitionsstructurelist .table-addnewrow [name='form[Gender]']," +
        "#competitionsstructurelist .table-addnewrow [name='form[ParticipantType]']";


    $("body").on("change blur", selectorinoutside + "," + selectorinround, function () {
        var outvalues = [];
        var invalues = [];
        var value = "";
        var disabledwords = ["Any", "Both"];
        $(selectorinoutside).each(function () {
            if ($(this).val()) {
                if ($(this).prop("tagName").toLowerCase() == "select") {
                    if ($.inArray($(this).find("option:selected").text(), disabledwords) == -1) {
                        outvalues.push($(this).find("option:selected").text());
                    }
                } else {
                    outvalues.push($(this).val());
                }
            }

        });
        $(selectorinround).each(function () {
            if ($(this).val()) {
                if ($(this).prop("tagName").toLowerCase() == "select") {
                    if ($.inArray($(this).find("option:selected").text(), disabledwords) == -1) {
                        invalues.push($(this).find("option:selected").text());
                    }
                } else {
                    invalues.push($(this).val());
                }
            }

        });


        value = outvalues.join(" ") + " ( " + invalues.join(" - ") + " )";
        $("#competitionsstructurelist .table-addnewrow [name='form[Title]']").val(value).trigger("click");

    });

  

    $("body").on("click", '#usersroleslist .table-row [data-label="Created Date"]', function () {
        var postdata = {};
        postdata.Filterby = [];
        postdata.Filterby.push({ key: "UserId", value: $(this).parent().find('[data-label="User"] [name="form[User]"]').val() });
        $.post("LoginAs", postdata, function () {

            window.location.href = "/";
        });

    });

});