var stylishfill = function (refill, selecteditem, reset, closest, original) {
  var designitem = selecteditem ? selecteditem : $("#designitemslist").val();
  if (designitem) {
    var designitemclass = designitem.replace(/ /gi, "");
    var groupprefix = $("#designitemslist")
      .find("option[value='" + designitem + "']")
      .attr("groupid");
    if (closest) {
      groupprefix = $(closest.attr("data-stylishgroup")).val();
    }
    $("." + designitemclass + "_" + groupprefix).remove();

    var existingrecords = {};
    if (getcache(groupprefix + "_" + designitem)) {
      existingrecords = JSON.parse(getcache(groupprefix + "_" + designitem));
    }

    $(".stylish").each(function () {
      var csskey = $(this).attr("data-csskey");
      var identifier = $(this).attr("data-identifier");
      if (!identifier) {
        identifier = csskey;
      }

      if (groupprefix) {
        var postfix = "";

        if (refill && existingrecords[identifier]) {
          $(this).val(existingrecords[identifier]);
          $(this).addClass("stylishchanged");
        } else if (refill || reset) {
          $(this).val("");
        }

        if ($(this).closest(".form-group").find(".postfix").length > 0) {
          postfix = $(this).closest(".form-group").find(".postfix").val();
        }

        var prefix = "";
        if ($(this).closest(".form-group").find(".prefix").length > 0) {
          prefix = $(this).closest(".form-group").find(".prefix").val();
        }

        if (
          $(this).val() &&
          csskey &&
          $(this).hasClass("stylishmanuallychanged")
        ) {
          var value = $(this).val();

          if ($(this).attr("data-customestyles")) {
            $("body").append(
              "<style class='" +
              designitemclass +
              "_" +
              groupprefix +
              "'>[stylishgroupid='" +
              groupprefix +
              "'] [data-stylish='" +
              designitem +
              "'] { " +
              value +
              "}</style>"
            );
          } else {
            $("body").append(
              "<style class='" +
              designitemclass +
              "_" +
              groupprefix +
              "'>[stylishgroupid='" +
              groupprefix +
              "'] [data-stylish='" +
              designitem +
              "'] { " +
              csskey +
              ":" +
              prefix +
              value +
              postfix +
              " !important;}</style>"
            );
          }

          existingrecords[identifier] = value;
          var th = $(this);

          if (
            th.hasClass("stylishmanuallychanged") &&
            groupprefix.split("demogroup").length == 1
          ) {
            setcache(
              groupprefix + "_" + designitem,
              JSON.stringify(existingrecords)
            );
          }
        } else if (!refill && !$(this).val() && existingrecords[identifier]) {
          delete existingrecords[identifier];
          setcache(
            groupprefix + "_" + designitem,
            JSON.stringify(existingrecords)
          );
        }
      }
    });
  }
};
var importstylishfill = function (importfrom, designitem) {
  var designitemclass = designitem.replace(/ /gi, "");
  $("." + designitemclass).remove();
  var groupprefix = $("#DesignArray" + $("#grouplist").val()).val();
  var existingrecords = {};
  if (getcache(importfrom + "_" + designitem)) {
    existingrecords = JSON.parse(getcache(importfrom + "_" + designitem));
  }
  $(".stylish").each(function () {
    var csskey = $(this).attr("data-csskey");
    var identifier = $(this).attr("data-identifier");
    if (!identifier) {
      identifier = csskey;
    }

    if (groupprefix) {
      var postfix = "";

      if (existingrecords[identifier]) {
        $(this).val(existingrecords[identifier]);
        $(this).addClass("stylishchanged");
      } else {
        $(this).val("");
      }

      if ($(this).closest(".form-group").find(".postfix").length > 0) {
        postfix = $(this).closest(".form-group").find(".postfix").val();
      }

      var prefix = "";
      if ($(this).closest(".form-group").find(".prefix").length > 0) {
        prefix = $(this).closest(".form-group").find(".prefix").val();
      }

      if ($(this).val() && csskey && $(this).hasClass("stylishchanged")) {
        if ($(this).attr("data-customestyles")) {
          if (csskey != "googlefontembedcode") {
            $("body").append(
              "<style class='" +
              designitemclass +
              "'>[stylishgroupid='" +
              groupprefix +
              "'] [data-stylish='" +
              designitem +
              "'] { " +
              $(this).val() +
              "}</style>"
            );
          }
        } else {
          $("body").append(
            "<style class='" +
            designitemclass +
            "'>[stylishgroupid='" +
            groupprefix +
            "'] [data-stylish='" +
            designitem +
            "'] { " +
            csskey +
            ":" +
            prefix +
            $(this).val() +
            postfix +
            " !important;}</style>"
          );
        }

        existingrecords[identifier] = $(this).val();
        setcache(
          groupprefix + "_" + designitem,
          JSON.stringify(existingrecords),
          true
        );
      }
    }
  });
};

$("body").on("afterappendcomplete", "[data-stylishjson]", function () {
  $("#designitemslist").html("<option value=''>Please Select</option>");
  var th = $(this);
  var eventGroupSettings = window.EventUserSettings?.GroupsTemplates ?? {};
  var groupid = getcache("stylishgroupid");
  if (
    eventGroupSettings &&
    eventGroupSettings[$("[name='CandidateGroup']").val()]
  ) {
    groupid = eventGroupSettings[$("[name='CandidateGroup']").val()];
  }
  th.attr("stylishgroupid", groupid);
  $("#Template").val(groupid).trigger("change");
  if (groupid) {
    var value = $("#importsettings").val();
    $("#importsettings").html(
      '<option value="">None</option>' + $(th.attr("data-stylishgroup")).html()
    );
    $("#importsettings").val(value);

    $("#designitemslist option[value]").remove();
    $(this)
      .find("[data-stylish]")
      .each(function () {
        if (
          !$("#designitemslist [value='" + $(this).attr("data-stylish") + "']")
            .length
        ) {
          $("#designitemslist").append(
            "<option groupid='" +
            groupid +
            "' value='" +
            $(this).attr("data-stylish") +
            "'>" +
            $(this).attr("data-stylish") +
            "</option>"
          );
        }
      });
    var itemlocal = getcache(groupid + "_designitem");
    if (itemlocal) {
      if ($("#designitemslist [value='" + itemlocal + "']").length > 0) {
        $("#designitemslist").val(itemlocal).trigger("change", true);
      }
    } else {
      setcache(groupid + "_designitem", $("#designitemslist").val());
    }
    ////if ($("#designitemslist option").length > 0) {
    ////    $("#designitemslist option").each(function() {
    ////        stylishfill(true, $(this).attr("value"));
    ////    });
    ////}
    ////if (!getcache("stylishgroupid")) {
    ////    changeCurrentTemplate($(".templatelist .candidateCard,.templatelist .CertificateCard").first());
    ////} else {
    ////    ////changeCurrentTemplate($(".templatelist[stylishgroupid=" + getcache("stylishgroupid") + "] .candidateCard,.templatelist .CertificateCard").first());
    ////}
  }
});

////$("[data-stylishgroup]").each(function () {
////    var th = $(this);

////    $("body").on("change",
////        th.attr("data-stylishgroup"),
////        function (e, force) {

////            th.attr("stylishgroupid", $(this).val());

////        });

////});
$("body").on("click", "#LayoutDesigner", function (e) {
  $(this).children().toggle();
});
$("body").on("click", "#LayoutDesigner > div", function (e) {
  e.stopPropagation();
});
$("body").on("click", ".downloadandprint", function (e) {
  let selectedDesigns = [];
  $("#DesignArray")
    .find("[name*='DesignArray']")
    .each(function () {
      let th = $(this);
      if (th.val()) {
        selectedDesigns.push(th.val());
      }
    });
  if (selectedDesigns.filter((x) => x).length == 0) {
    alert("Please select at least one design from the template list.", "e");
    return;
  }

  e.stopPropagation();
  e.preventDefault();

  var data = objectifyForm($(this).closest("form").serializeArray());
  let customStyles = {};
  $(".groupTemplates input").each(function () {
    let thgr = $(this);

    $("#designitemslist option").each(function () {
      let designitem = $(this).attr("value");
      var groupprefix = thgr.val();
      $(".stylish").each(function () {
        var csskey = $(this).attr("data-csskey");
        var identifier = $(this).attr("data-identifier");
        if (!identifier) {
          identifier = csskey;
        }

        var postfix = "";
        var existingrecords = {};
        if (getcache(groupprefix + "_" + designitem)) {
          existingrecords = JSON.parse(
            getcache(groupprefix + "_" + designitem)
          );
        }

        var el = $(".templatelist[stylishgroupid='" + groupprefix + "']").find(
          "[data-stylish='" + designitem + "']"
        );
        var cssvalue = "";

        if (!existingrecords[identifier]) {
          if (el.attr("data-" + csskey)) {
            cssvalue = el.attr("data-" + csskey);
            existingrecords[identifier] = cssvalue;
          }
        }

        if (existingrecords[identifier]) {
          if ($(this).closest(".form-group").find(".postfix").length > 0) {
            postfix = $(this).closest(".form-group").find(".postfix").val();
          }

          var prefix = "";
          if ($(this).closest(".form-group").find(".prefix").length > 0) {
            prefix = $(this).closest(".form-group").find(".prefix").val();
          }

          if (!customStyles[groupprefix]) {
            customStyles[groupprefix] = {};
          }

          if (!customStyles[groupprefix][designitem]) {
            customStyles[groupprefix][designitem] = {};
          }
          if ($(this).attr("data-customestyles")) {
            customStyles[groupprefix][designitem]["customcss"] =
              existingrecords[identifier];
          } else {
            customStyles[groupprefix][designitem][csskey] =
              existingrecords[identifier];
          }
        }
      });
    });
  });
  let action = $(this).attr("target");
  let timeout = 0;
$("#DesignArray")
.find("[name*='DesignArray']")
.each(function () {
  timeout += 2000;
  
  let th = $(this);
  setTimeout(function () {
  if (th.val()) {
    let name = th.attr("name");
    let eventGroup = name.replace("DesignArray", "");
    let design = th.val();

    let customStylesForDesign = customStyles[design];
    let newCustomStyles = {};
    newCustomStyles[design] = customStylesForDesign;
    data.Styles = JSON.stringify(newCustomStyles);
    data.Template = design;
    data.CandidateGroup = eventGroup;
    post(action, data);
 
  }
}, timeout);
});

  // var url = $(this).attr("target") ;
  // var link = document.createElement('a');
  // link.href = url;
  // link.target = '_blank';
  // document.body.appendChild(link);
  // link.click();
  // link.remove();
});

function objectifyForm(formArray) {
  var returnArray = {};
  for (var i = 0; i < formArray.length; i++) {
    var name = formArray[i]["name"];
    var value = formArray[i]["value"];

    // If the field already exists, convert to an array or push to the array
    if (returnArray[name]) {
      if (!Array.isArray(returnArray[name])) {
        returnArray[name] = [returnArray[name]];
      }
      returnArray[name].push(value);
    } else {
      returnArray[name] = value;
    }
  }
  return returnArray;
}

function post(path, params, method = "post") {
  // The rest of this code assumes you are not using a library.
  // It can be made less verbose if you use one.
  const form = document.createElement("form");
  form.method = method;
  form.action = path;
  form.target = "_blank";
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const value = params[key];
      // Check if the value is an array
      if (Array.isArray(value)) {
        // Create a hidden field for each array item
        value.forEach((item) => {
          const hiddenField = document.createElement("input");
          hiddenField.type = "hidden";
          hiddenField.name = key;
          hiddenField.value = item;
          form.appendChild(hiddenField);
        });
      } else {
        // Single value - create one hidden field
        const hiddenField = document.createElement("input");
        hiddenField.type = "hidden";
        hiddenField.name = key;
        hiddenField.value = value;
        form.appendChild(hiddenField);
      }
    }
  }

  document.body.appendChild(form);
  form.submit();
  setTimeout(function () {
    form.remove();
  }, 5000);
}

function changeCurrentTemplate(th, force) {
  $(".stylishmanuallychanged").removeClass("stylishmanuallychanged");
  let existingTemplate = getcache("stylishgroupid");
  setcache(
    "stylishgroupid",
    th.closest(".templatelist").attr("stylishgroupid")
  );
  var groupprefix = th.closest("[stylishgroupid]").attr("stylishgroupid");
  $("#Template").val(groupprefix).trigger("change", force);
  $(".candidateCardsList.originallist").attr("stylishgroupid", groupprefix);
  var cl = th.closest(".templatelist");

  cl.find("[data-stylish]").each(function () {
    ////$("#designitemslist [value='" + $(this).attr("data-stylish") + "']").prop("selected", true);
    var designitem = $(this).attr("data-stylish");
    var designitemclass = designitem.replace(/ /gi, "");
    var temth = $(this);
    var existingrecords = {};
    if (getcache(groupprefix + "_" + designitem)) {
      existingrecords = JSON.parse(getcache(groupprefix + "_" + designitem));
    }
    var lastTemplateRecords = {};
    if (getcache(existingTemplate + "_" + designitem)) {
      lastTemplateRecords = JSON.parse(
        getcache(existingTemplate + "_" + designitem)
      );
    }
    $(".stylish").val("").removeClass("stylishchanged");
    $(".stylish").each(function () {
      var csskey = $(this).attr("data-csskey");
      var identifier = $(this).attr("data-identifier");
      if (!identifier) {
        identifier = csskey;
      }
      var cssvalue = "";
      var pageR = $("#CardsPerRow").val();
      var pageC = $("#RowsPerPage").val();
      if (temth.attr("data-" + csskey)) {
        cssvalue = temth.attr("data-" + csskey);
      }

      if (temth.attr("data-" + pageR + "_" + pageC + "-" + csskey)) {
        cssvalue = temth.attr("data-" + pageR + "_" + pageC + "-" + csskey);
      }
      if (existingrecords[identifier]) {
        cssvalue = existingrecords[identifier];
      } else if (lastTemplateRecords[identifier]) {
        cssvalue = lastTemplateRecords[identifier];
        $(this).val(lastTemplateRecords[identifier]);
        $(this).addClass("stylishchanged");
        setcache(
          groupprefix + "_" + designitem,
          JSON.stringify(lastTemplateRecords),
          true
        );
      }

      if (groupprefix && cssvalue) {
        var postfix = "";

        $(this).val("");

        if ($(this).closest(".form-group").find(".postfix").length > 0) {
          postfix = $(this).closest(".form-group").find(".postfix").val();
        }

        var prefix = "";
        if ($(this).closest(".form-group").find(".prefix").length > 0) {
          prefix = $(this).closest(".form-group").find(".prefix").val();
        }

        if (csskey) {
          var value = cssvalue;

          if ($(this).attr("data-customestyles")) {
            $("body").append(
              "<style class='" +
              designitemclass +
              "_" +
              groupprefix +
              "'>.originallist[stylishgroupid='" +
              groupprefix +
              "'] [data-stylish='" +
              designitem +
              "'] { " +
              value +
              "}</style>"
            );
          } else {
            $("body").append(
              "<style class='" +
              designitemclass +
              "_" +
              groupprefix +
              "'>.originallist[stylishgroupid='" +
              groupprefix +
              "'] [data-stylish='" +
              designitem +
              "'] { " +
              csskey +
              ":" +
              prefix +
              value +
              postfix +
              " !important;}</style>"
            );
          }

          var th = $(this);
        }
      }
    });
  });
}

if (!getcache("stylishgroupid")) {
  changeCurrentTemplate(
    $(".templatelist .candidateCard,.templatelist .CertificateCard").first()
  );
} else {
  changeCurrentTemplate(
    $(
      ".templatelist[stylishgroupid=" +
      getcache("stylishgroupid") +
      "] .candidateCard,.templatelist .CertificateCard"
    ).first()
  );
}
$("body").on(
  "click",
  ".templatelist .candidateCard,.templatelist .CertificateCard",
  function (e) {
    changeCurrentTemplate($(this), true);
  }
);

$("body").on("afterappendcomplete", "#DesignArray", function () {
  $(this)
    .find("[name*='DesignArray']")
    .each(function () {
      var th = $(this);
      var groupid = th.attr("name").replace("DesignArray", "");
      if (window.EventUserSettings?.GroupsTemplates) {
        if (window.EventUserSettings.GroupsTemplates[groupid]) {
          th.val(window.EventUserSettings.GroupsTemplates[groupid]);
        }
      }
    });
});

$("body").on("change", "#importsettings", function (e, force) {
  var th = $(this);
  if (th.val()) {
    $("#designitemslist option").each(function () {
      importstylishfill(
        $("#DesignArray" + th.val()).val(),
        $(this).attr("value")
      );
    });
  }
});
$("body").on("change", ".stylish", function (e, force) {
  if (e.originalEvent) {
    $(this).addClass("stylishmanuallychanged");
  }
  var designitem = $("#designitemslist").val();
  if (designitem) {
    var temth = $(
      ".templatelist[stylishgroupid='" + getcache("stylishgroupid") + "']"
    );
    var designitemclass = designitem.replace(/ /gi, "");
    var groupprefix = getcache("stylishgroupid");

    $("." + designitemclass + "_" + groupprefix).remove();

    var existingrecords = {};
    if (getcache(groupprefix + "_" + designitem)) {
      existingrecords = JSON.parse(getcache(groupprefix + "_" + designitem));
    }
    $(".stylish").each(function () {
      var csskey = $(this).attr("data-csskey");
      var identifier = $(this).attr("data-identifier");
      if (!identifier) {
        identifier = csskey;
      }

      if (groupprefix) {
        var postfix = "";
        if ($(this).closest(".form-group").find(".postfix").length > 0) {
          postfix = $(this).closest(".form-group").find(".postfix").val();
        }

        var prefix = "";
        if ($(this).closest(".form-group").find(".prefix").length > 0) {
          prefix = $(this).closest(".form-group").find(".prefix").val();
        }
        var el = temth.find("[data-stylish='" + designitem + "']");
        var cssvalue = "";

        if ($(this).val() && $(this).hasClass("stylishmanuallychanged")) {
          cssvalue = $(this).val();
          existingrecords[identifier] = cssvalue;
        }
        if (existingrecords[identifier]) {
          cssvalue = existingrecords[identifier];
        } else if (el.attr("data-" + csskey)) {
          cssvalue = el.attr("data-" + csskey);
        }

        if (cssvalue && csskey) {
          if ($(this).attr("data-customestyles")) {
            $("body").append(
              "<style class='" +
              designitemclass +
              "_" +
              groupprefix +
              "'>.originallist[stylishgroupid='" +
              groupprefix +
              "'] [data-stylish='" +
              designitem +
              "'] { " +
              cssvalue +
              "}</style>"
            );
          } else {
            $("body").append(
              "<style class='" +
              designitemclass +
              "_" +
              groupprefix +
              "'>.originallist[stylishgroupid='" +
              groupprefix +
              "'] [data-stylish='" +
              designitem +
              "'] { " +
              csskey +
              ":" +
              prefix +
              cssvalue +
              postfix +
              " !important;}</style>"
            );
          }

          setcache(
            groupprefix + "_" + designitem,
            JSON.stringify(existingrecords),
            true
          );
        } else if (!$(this).val() && existingrecords[identifier]) {
          delete existingrecords[identifier];
          setcache(
            groupprefix + "_" + designitem,
            JSON.stringify(existingrecords),
            true
          );
        }
      }
    });
  }
});
$("body").on("click", ".stylishreset", function () {
  remcache(getcache("stylishgroupid") + "_" + $("#designitemslist").val());
  $(".stylish").removeClass("stylishmanuallychanged");

  changeCurrentTemplate(
    $(
      ".templatelist[stylishgroupid=" +
      getcache("stylishgroupid") +
      "] .candidateCard,.templatelist .CertificateCard"
    ).first()
  );
  $("#designitemslist").trigger("change", true);
});
$("body").on("change", "#designitemslist", function (e, force) {
  if (e.originalEvent || force) {
    $(".stylishmanuallychanged").removeClass("stylishmanuallychanged");
    var temth = $(
      ".templatelist[stylishgroupid='" + getcache("stylishgroupid") + "']"
    );
    if ($(this).find("option:selected").length > 0) {
      var groupprefix = getcache("stylishgroupid");
      $(".stylish").removeClass("stylishchanged").val("");
      setcache(groupprefix + "_designitem", $(this).val());
      var designitem = $("#designitemslist").val();
      if (designitem) {
        var designitemclass = designitem.replace(/ /gi, "");
        var existingrecords = {};
        if (getcache(groupprefix + "_" + designitem)) {
          existingrecords = JSON.parse(
            getcache(groupprefix + "_" + designitem)
          );
        }
        $(".stylish").each(function () {
          var csskey = $(this).attr("data-csskey");
          var identifier = $(this).attr("data-identifier");
          if (!identifier) {
            identifier = csskey;
          }

          if (groupprefix) {
            var postfix = "";

            $(this).val("");

            if ($(this).closest(".form-group").find(".postfix").length > 0) {
              postfix = $(this).closest(".form-group").find(".postfix").val();
            }

            var prefix = "";
            if ($(this).closest(".form-group").find(".prefix").length > 0) {
              prefix = $(this).closest(".form-group").find(".prefix").val();
            }
            var el = temth.find("[data-stylish='" + designitem + "']");
            if (el.attr("data-" + csskey)) {
              var cssvalue = el.attr("data-" + csskey);
              if (existingrecords[identifier]) {
                cssvalue = existingrecords[identifier];
              }

              if (cssvalue && csskey) {
                var value = cssvalue;
                $(this).val(value);
              }
            } else if (existingrecords[identifier]) {
              var cssvalue = existingrecords[identifier];

              if (cssvalue && csskey) {
                var value = cssvalue;
                $(this).val(value);
              }
            }
          }
        });
      }
    }
  }
});
$("[type=color]")
  .attr("type", "text")
  .each(function () {
    $(this).minicolors({
      opacity: true,
      format: "rgb",
      change: function (value, opacity) {
        $(this).trigger("change", true);
      },
    });
  });
$(".templatelist").each(function () {
  var tpl = $(this);
  tpl.find("[data-stylish]").each(function () {
    var groupid = tpl.attr("data-stylishgroup").replace(/\#/gi, "");
    ////$("#designitemslist .democopy[value='" + $(this).attr("data-stylish") + "']").remove();
    ////$("#designitemslist").append("<option class='democopy' groupid='" +
    ////    groupid +
    ////    "' value='" +
    ////    $(this).attr("data-stylish") +
    ////    "'>" +
    ////    $(this).attr("data-stylish") +
    ////    "</option>");
    var designItem = $(this).attr("data-stylish");
    var temth = $(this);
    $(".stylish").each(function () {
      var csskey = $(this).attr("data-csskey");
      var identifier = $(this).attr("data-identifier");
      if (!identifier) {
        identifier = csskey;
      }
      if (temth.attr("data-" + csskey)) {
        var cssvalue = temth.attr("data-" + csskey);
        if (cssvalue && csskey) {
          var value = cssvalue;
          var postfix = "";
          if ($(this).closest(".form-group").find(".postfix").length > 0) {
            postfix = $(this).closest(".form-group").find(".postfix").val();
          }

          var prefix = "";
          if ($(this).closest(".form-group").find(".prefix").length > 0) {
            prefix = $(this).closest(".form-group").find(".prefix").val();
          }

          if ($(this).attr("data-customestyles")) {
            $("body").append(
              "<style class=''>.templatelist[stylishgroupid='" +
              groupid +
              "'] [data-stylish='" +
              designItem +
              "'] { " +
              value +
              "}</style>"
            );
          } else {
            $("body").append(
              "<style>.templatelist[stylishgroupid='" +
              groupid +
              "'] [data-stylish='" +
              designItem +
              "'] { " +
              csskey +
              ":" +
              prefix +
              value +
              postfix +
              " !important;}</style>"
            );
          }
        }
      }
    });
    ////window.stylishfill(false, false, false, tpl);
    /////$('.stylishchanged').removeClass("stylishchanged");
    /////$("#designitemslist .democopy[value='" + $(this).attr("data-stylish") + "']").remove();
  });
});

function setPageSize() {
  var pageSize =
    parseInt($("#CardsPerRow").val()) * parseInt($("#RowsPerPage").val());
  /////pageSize = 100 - (100 % pageSize);
  $(".candidatescards #pagesize_CandidatesCards")
    .html("<option>" + pageSize + "</option>")
    .trigger("change", true);

  $(".candidatescards #CandidatesCardsPaginationShowing").addClass("hidden");
  var defaultZoomSize = 100;
  var defaultPerRows = 3;
  var rowZoomMapping = {
    1: 200,
    2: 160,
    3: 100,
    4: 70,
    5: 50,
  };
  var currentPageRows = parseInt($("#RowsPerPage").val());
  var currentPageZoom = parseInt($("#CardsZoom").val());

  var zoomSize = rowZoomMapping[currentPageRows];
  if (currentPageZoom != zoomSize) {
    let minLimit = zoomSize - 10;
    let maxLimit = zoomSize + 10;
    // check within range
    if (currentPageZoom >= minLimit && currentPageZoom <= maxLimit) {
      zoomSize = currentPageZoom;
    }
  }
  if (zoomSize) {
    $("#CardsZoom").val(zoomSize).trigger("change", true);
  }
}

//setPageSize();
$("body").on("afterappendcomplete", ".candidateCardsList", function (e, data) {
  if (data && data.rows && data.rows.Rows && data.rows.Rows.length > 0) {
    $("#IsDuplicateData").val(true);
  }
});

$("body").on(
  "afterappendcomplete change",
  ".candidateCardsList,#Logo1Image,#Logo2Image,#LogoBackImage,#CertificateHeading,#Heading1,#Heading2,#Heading3,#Heading4,#Heading5,#Heading6,#BeforeUserName,#EventHeading,#RowsPerPage,#PageSizePrint,#BackgroundImage,#CardsPerRow,#pageside,#CardsZoom,#IdentityNumberFontSize,#CardsHeight,.certificateconfigkeys .globalcachevalues,#BeforeUserName,#BeforeCompetition,#BeforeRank,#BeforeGrade,#EndOfContent,#Signature1Name,#Signature1Heading,#Signature2Name,#Signature2Heading,#Signature3Name,#Signature3Heading",
  function (e, force) {
    $(".cardheaderlogo").attr("src", $("#Logo1Image").val());
    $(".cardheaderlogo2").attr("src", $("#Logo2Image").val());
    $(".cardbackheaderlogo").attr("src", $("#LogoBackImage").val());
    $(".CertificateHeading").text($("#CertificateHeading").val());
    $(".heading3").text($("#Heading3").val());
    $(".heading4").text($("#Heading4").val());
    $(".heading5").text($("#Heading5").val());
    $(".heading6").text($("#Heading6").val());
    $(".beforeusername").text($("#BeforeUserName").val());
    $(".beforecompetition").text($("#BeforeCompetition").val());
    $(".beforerank").text($("#BeforeRank").val());
    $(".beforegrade").text($("#BeforeGrade").val());
    $(".endofcontent").text($("#EndOfContent").val());
    $(".additionalcontent").text($("#AdditionalContent").val());
    $(".signature1name").text($("#Signature1Name").val());
    $(".signature1heading").text($("#Signature1Heading").val());
    $(".signature2name").text($("#Signature2Name").val());
    $(".signature2heading").text($("#Signature2Heading").val());
    $(".signature3name").text($("#Signature3Name").val());
    $(".signature3heading").text($("#Signature3Heading").val());

    $(".eventName[data-stylish='Event Name']").text($("#EventHeading").val());
    $(".eventName[data-stylish='Back Event Name']").text(
      $("#EventBackHeading").val()
    );

    $(".certificateconfigkeys .globalcachevalues").each(function () {
      if ($("." + $(this).attr("id").toLowerCase()).length > 0) {
        $("." + $(this).attr("id").toLowerCase()).text($(this).val());
      }
    });

    //// $(".candidateCardsList .candidateCard .box").attr("style", 'background-image:url(' + "'" + $("#BackgroundImage").val() + "') !important");
    $(".rowbreak,.pagebreak").remove();
    /////    $(".IdentityNumber").css("font-size", $("#IdentityNumberFontSize").val() + "px");

    if ($("#pageside").val() == "1") {
      $(
        ".candidateCardsList.originallist .candidateCard .frontside,.CertificateCardsList.originallist .CertificateCard .frontside"
      ).show();
      $(
        ".candidateCardsList.originallist .candidateCard .backside,.CertificateCardsList.originallist .CertificateCard .backside"
      ).hide();
      $(
        ".candidateCardsList.originallist .candidateCard,.CertificateCardsList.originallist .CertificateCard"
      ).removeClass("pull-right");
    } else if ($("#pageside").val() == "2") {
      $(
        ".candidateCardsList.originallist .candidateCard .frontside,.CertificateCardsList.originallist .CertificateCard .frontside"
      ).hide();
      $(
        ".candidateCardsList.originallist .candidateCard .backside,.CertificateCardsList.originallist .CertificateCard .backside"
      ).show();
      $(
        ".candidateCardsList.originallist .candidateCard,.CertificateCardsList.originallist .CertificateCard"
      ).addClass("pull-right");
    } else {
      $(
        ".candidateCardsList.originallist .candidateCard .frontside,.CertificateCardsList.originallist .CertificateCard .frontside"
      ).show();
      $(
        ".candidateCardsList.originallist .candidateCard .backside,.CertificateCardsList.originallist .CertificateCard .backside"
      ).hide();
      $(
        ".candidateCardsList.originallist .candidateCard,.CertificateCardsList.originallist .CertificateCard"
      ).removeClass("pull-right");
    }

    +(
      ///// $(".candidateCardsList .candidateCard .box").css("height", $("#CardsHeight").val() + "px");
      ////$(".candidateCardsList,.CertificateCardsList").css("width", $("#PageSizePrint").val() == "a3" ? "1123" : "794");
      ////$(".candidateCardsList").css("transform", "scale(" + $("#ScaleCard").val() + ")");
      $(".templatelist,.templatelist .CertificateCard").each(function (i) {
        ////if (i != 0 && i % parseInt($("#CardsPerRow").val()) == 0) {
        ////    $(this).before('<div class="col-xs-50 rowbreak"></div>');
        ////}

        var wid = 100 / $("#CardsPerRow").val();

        $(this).find(".candidateCard").css("width", "50%");

        $(this).find(".candidateCard").css("zoom", "100%");
      })
    );

    var rowbreakcount = 0;

    let firstItem = $(
      ".candidateCardsList.originallist .candidateCard:visible,.CertificateCardsList.originallist .CertificateCard:visible"
    ).first();
    let height = 0;
    let requiredHeight =
      (1547.84 - $("#RowsPerPage").val() * 22) / $("#RowsPerPage").val(); //1587.84 a3 height, 20 for padding and 2 for border 40 for margin in print
    if (firstItem.length) {
      // firstItem.css('min-height', requiredHeight + "px");
      // let _wh = firstItem[0].getBoundingClientRect();
      // let actualHeight = _wh.bottom - _wh.top;
      // while (actualHeight <= requiredHeight) {
      //     actualHeight = _wh.bottom - _wh.top;
      //     firstItem.height(_wh.height + 1);
      //     _wh = firstItem[0].getBoundingClientRect();
      // }
      height = requiredHeight;
    }

    $(
      ".candidateCardsList.originallist .candidateCard:visible,.CertificateCardsList.originallist .CertificateCard:visible"
    ).each(function (i) {
      if (i != 0 && i % parseInt($("#CardsPerRow").val()) == 0) {
        $(this).before('<div class="col-xs-50 rowbreak"></div>');
        rowbreakcount++;
      }
      +$(this).css("width", 1083.2 / $("#CardsPerRow").val() + "px"); ///a3 size 1123 decreased 50 for margin in chrome print

      if ($("#CardsZoom").val()) {
        let zoom = parseInt($("#CardsZoom").val());
        // height=height+((100-zoom/height)*100)
      }

      $(this)
        .children(".box")
        .css("height", height + "px");
      $(this)
        .find(".frontside,.backside")
        .css("zoom", $("#CardsZoom").val() + "%");
    });

    var rem = rowbreakcount % parseInt($("#CardsPerRow").val());

    $(
      ".candidateCardsList.originallist .rowbreak,.CertificateCardsList.originallist .rowbreak"
    ).each(function (i) {
      if (i + 1 != 0 && (i + 1) % parseInt($("#RowsPerPage").val()) == 0) {
        $(this).after(
          '<div class="col-xs-50 pagebreak hidden-print"><hr/></div>'
        );
      }
    });
    ////if ($(".candidateCard").last().next(".pagebreak").length == 0) {
    ////    $(".candidateCard").last().after('<div class="col-xs-50 pagebreak hidden-print"><hr/></div>');
    ////}
    if ($("#pageside").val() == "3") {
      var outerhtml = "";
      $(".backsideitems").remove();
      $(
        ".candidateCardsList.originallist .candidateCard:visible,.CertificateCardsList.originallist .CertificateCard:visible"
      ).each(function () {
        var html = $(this)[0].outerHTML;
        var obj = $(html);
        obj.find(".frontside").remove();
        obj.find(".backside").show();
        obj.addClass("pull-right backsideitems");
        outerhtml += obj[0].outerHTML;
        if ($(this).next().next(".pagebreak").length > 0) {
          $(this)
            .next()
            .next(".pagebreak")
            .after(
              outerhtml +
              '<div class="col-xs-50 pagebreak hidden-print"><hr/></div>'
            );
          outerhtml = "";
        } else {
          ////$(this).closest(".candidateCardsList.originallist,.CertificateCardsList.originallist").find(".candidateCard:visible,.CertificateCard:visible").last().after( '<div class="col-xs-50 pagebreak hidden-print"><hr/></div>'+outerhtml);
        }
      });
    }

    ////adjustheight("#CandidateCardsList .candidateCard .box");
  }
);
$("body").on("change", "#RowsPerPage,#CardsPerRow", function (e, data) {
  setPageSize();
});
$(document).ready(function () {
  $("#CardsPerRow").trigger("change");
});

$("body").on("click", "#templatebutton", function () {
  $(".menubarbox").hide();
  applymenustyle();

  $("#LayoutDesigner").hide();
});
$("body").on("click", "#LayoutDesignerButton", function () {
  $("#templateListBox").hide();
  $(".menubarbox").hide();
  applymenustyle();
});

$("body").on("click", "#ClearDesignCache", function () {
  alert(
    "Are you sure you want to clear all design cache? This will reset all design settings, you will need to reapply all design settings.",
    function () {
      let keys = Object.keys(window.EventUserSettings.LocalCache);
      keys.forEach((key) => {
        if (key.indexOf("CandidatesCards") > -1) {
          delete window.EventUserSettings.LocalCache[key];
        }
      });
      window.EventUserSettings.GroupsTemplates = {};
      updateEventUserSettings(window.EventUserSettings);

      window.location.reload();
    },
    false,
    "ClearIt",
    "c"
  );
});
$("body").on("click", "#contentbox", function (e) {
  if ($(e.target).not($("#templateListBox *,#templatebutton")).length > 0) {
    // $("#templateListBox").hide();
  }
});
$("body").on("click", ".closetemplates", function (e) {
  $("#templateListBox").hide();
});
