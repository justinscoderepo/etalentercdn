function checkDateInput() {
  var input = document.createElement("input");
  input.setAttribute("type", "date");

  var notADateValue = "not-a-date";
  input.setAttribute("value", notADateValue);

  return input.value !== notADateValue;
}
if (!jQuery || !jQuery.support) {
  document.getElementById("contentbox").innerHTML = "Sorry no Support";
}
function converttotstyle(id, selector, key, value) {
  $("head")
    .find("#" + id)
    .remove();
  $("head").append(
    '<style class="permanentstyles" id="' +
      id +
      '">' +
      selector +
      "{" +
      key +
      ":" +
      value +
      ";}</style>"
  );
}

var applymenustyle = function () {
  $(".leftmenuouterbox").removeClass("menuhidden");
  if ($(".leftmenuouterbox").length > 0) {
    if ($(window).width() > 768) {
      if ($("#contentbox").attr("menumaximized")) {
        converttotstyle(
          "contentboxid",
          "#contentbox",
          "width",
          $(window).width() - 340 + "px"
        );
      } else {
        setTimeout(function () {
          converttotstyle(
            "contentboxid",
            "#contentbox",
            "width",
            $(window).width() - 60 + "px"
          );
        }, 1000);
      }
    } else {
      converttotstyle(
        "contentboxid",
        "#contentbox",
        "width",
        $(window).width() + "px"
      );
    }
  }
};
var htmlTemplatesList = {};
(function ($) {
  $("body").one(
    "beforemakerequestdata",
    ".jltable div[data-json].tablebody",
    function (e, data) {
      if (e.target == e.currentTarget) {
        if (!window.location.hash.startsWith("#/")) {
          var pagination = $($(this).attr("data-pagination"));
          if (pagination.length > 0) {
            var pageNumber = $("#input_" + pagination.attr("id"));
            if (
              window.location.hash.split($(this).attr("id") + "pageNumber=")
                .length > 1
            ) {
              pageNumber.val(
                window.location.hash
                  .split($(this).attr("id") + "pageNumber=")[1]
                  .split("&")[0]
              );
            }
            var pageSize = $($(this).attr("data-perpage"));
            if (
              window.location.hash.split($(this).attr("id") + "pageSize=")
                .length > 1
            ) {
              pageSize.val(
                window.location.hash
                  .split($(this).attr("id") + "pageSize=")[1]
                  .split("&")[0]
              );
            }
          }
        }
      }
    }
  );

  $.fn.visible = function (partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function (i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

$(document).ready(function () {
  $(document).on("change", "#modeSelector", function (e) {
    var th = $(this);
    let value = th.val();
    $(".duplicate").remove();

    if (value == "1") {
      $(".topMenuOriginal").removeAttr("style");
      $(".subMenuOrginal").removeAttr("style");
      $(".topMenuSubOriginal").removeAttr("style");
    } else {
      $(".topMenuOriginal").hide();
      $(".subMenuOrginal").hide();
      $(".topMenuSubOriginal").hide();

      let menuBox = $(".leftmenu");

      let matchingMenus = menuBox.find(
        "[menuSectionsAllowed*='" + value + "']"
      );

      matchingMenus.each(function () {
        let th2 = $(this);
        let allowedSections = th2.attr("menuSectionsAllowed").split(",");
        if (allowedSections.includes(value)) {
          menuBox.append(th2[0].outerHTML);
          menuBox.find(".subMenuOrginal:last").addClass("duplicate").show();
        }
      });
    }
  });

  $("#modeSelector").trigger("change");

  window.onresize = function () {
    if ($(window).width() < 768) {
      $("body").addClass("headerminimize");
    } else {
      $(window).trigger("scroll");
    }
  };
});

win.scroll(function (event) {
  if ($(window).width() < 768) {
    $("body").addClass("headerminimize");
  } else {
    if ($(window).scrollTop() > 60) {
      $("body").addClass("headerminimize");
    } else {
      $("body").removeClass("headerminimize");
    }
    if ($("body").hasClass("view") && $("body").hasClass("page")) {
      $("body").addClass("headerminimize");
    }
    allMods.each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });
  }
});

$(document).ready(function () {
  if ($("body").hasClass("view") && $("body").hasClass("page")) {
    $("body").addClass("headerminimize");
  }
});
$(function () {
  var toggleIndex = 0;
  $("body").on(
    "afterappendrow",
    "div[data-json] [data-jlelements]",
    function (e, data) {
      if (data && data.value && data.value && data.value.Status) {
        if ($(this).find(".toggleWrapper input").length > 0) {
          var p = $(this).find(".toggleWrapper input");
          toggleIndex++;
          p.attr("id", "toggler_" + toggleIndex);
          p.next("label").attr("for", "toggler_" + toggleIndex);
          var defaultValue = p.attr("data-uncheckvalue");
          var value = p.attr("value");
          if (data.value.Status == value) {
            p.prop("checked", true);
          } else {
            p.prop("checked", false);
          }
        }
      }
    }
  );

  var optdropdowni = 0;
  var dropdownhtml = {};

  $("select.dropdownui[multiple],select.optdropdown[multiple]").each(function (
    e,
    data
  ) {
    var th = $(this);
    var html = th[0].outerHTML;
    dropdownhtml[th.attr("name")] = html;
    var required = th.attr("data-val-required")
      ? ' data-val-required="Please select an option from the list" data-val="true" '
      : "";
    html = html
      .replace(/<select/gi, "<div")
      .replace(
        /<\/select>/gi,
        "<li data-noresult='true' class='text-center'>There is not items</li></div>"
      );
    html = html
      .replace(/<optgroup/gi, "<ul")
      .replace(/<\/optgroup>/gi, "</ul>");
    html = html
      .replace(
        /<option/gi,
        "<li class='list-group-item'><label><input type='checkbox' " +
          required +
          " name='" +
          th.attr("name") +
          "[]' class='optcheck'/><span"
      )
      .replace(/<\/option>/gi, "</span></label></li>");
    html = html.replace(/"text"/gi, '"html"');
    var cl = th.parent().addClass("optparent");
    cl.append(html);
    if ($(this).hasClass("dropdownui")) {
      cl.find("[data-follow]").each(function () {
        if ($(this).closest("li").length > 0) {
          $(this).removeAttr("data-follow");
          $(this).closest("li").attr("data-follow", true);
        }
      });
      cl.find("[data-static]").each(function () {
        if ($(this).closest("li").length > 0) {
          $(this).removeAttr("data-static");
          $(this).closest("li").attr("data-static", true);
        }
      });
    }
    if (!$(this).hasClass("dropdownui")) {
      cl.find("div")
        .addClass("optdiv")
        .removeAttr("name")
        .removeClass("form-control")
        .attr(
          "data-filterby",
          cl.find("div").attr("data-filterby") +
            "," +
            "#optinput" +
            optdropdowni
        )
        .attr("data-binderinit-focus", "#optinput" + optdropdowni)
        .attr("data-enablekeyupevent", true)
        .append(
          '<div class="optokbox" data-static="true"><a href="#" class="optok btn btn-success">Ok<a></div>'
        );

      cl.append(
        '<div class="optsearchinput chips"><input name="' +
          th.attr("data-searchkey") +
          '" id="optinput' +
          optdropdowni +
          '"  type="text" placeholder="Select options" class="optinput form-control disablejltableform" data-static="true" /></div>'
      );
    } else {
      cl.closest(".datacolumn").addClass("topaligneditem");
    }
    cl.find("ul").addClass("list-group");
    if ($(this).hasClass("dropdownui")) {
      th.hide();
    } else {
      th.remove();
    }
    th.attr("data-oldjson", th.attr("data-json")).removeAttr("data-json");
    ////cl.find("ul").append("<li " + th.children().attr().join(" ") + "><li>");
    ////th.find("optgroup").each(function () {
    ////    th.find("");
    optdropdowni++;
    ////});
  });

  $("body").on("focus", ".optinput", function (e) {
    var th = $(this);
    var cl = th.closest(".optparent");
    if (cl.find(".optdiv:visible").length == 0) {
      cl.find(".optdiv").show();
      $("body").addClass("optactivebody");
      cl.find(".optdiv").css("top", cl.outerHeight() + 5);
      $(".optoverlay").show();
    }
  });
  var backspaced = false;
  $("body").on("click", ".chips .chipclose", function (e) {
    var th = $(this);
    th.closest(".optparent")
      .find(".optcheck[value=" + th.parent().attr("value") + "]")
      .prop("checked", false)
      .trigger("change");
  });
  $("body").on("keyup", ".optinput", function (e) {
    if (e.keyCode == 8 && !$(this).val() && backspaced) {
      $(this).parent().find("span:last").remove();
    }
    if (!$(this).val()) {
      backspaced = true;
    } else {
      backspaced = false;
    }
  });
  $("body").on("change", ".optdiv .optcheckgroup[type=checkbox]", function (e) {
    var th = $(this);
    th.closest(".optullabel")
      .next("ul")
      .find(".optcheck")
      .prop("checked", th.prop("checked"))
      .trigger("change");
  });

  $("body").on("change", ".optdiv li .optcheck[type=checkbox]", function (e) {
    e.stopPropagation();
    var cl = $(this).closest(".optparent");
    cl.find(".chip").remove();
    cl.find(".optdiv li .optcheck[type=checkbox]").each(function () {
      var th = $(this);

      if (th.prop("checked")) {
        cl.find(".optinput").before(
          '<span class="chip" value="' +
            th.attr("value") +
            '">' +
            th.parent().text() +
            '<i class="fa fa-times chipclose"></i></span>'
        );
        ////cl.find("select").append('<option value="' + th.attr("value") + '" selected="true">' + th.parent().text() + '</option>');
        th.closest(".optdiv").css("top", cl.outerHeight() + 5);
      } else {
        cl.find(
          "select [value='" +
            th.attr("value") +
            "'],.optsearchinput [value='" +
            th.attr("value") +
            "']"
        ).remove();
      }
      //// if (e.originalEvent) {
      if (
        th.closest("ul").find(".optcheck").length ==
        th.closest("ul").find(".optcheck:checked").length
      ) {
        th.closest("ul").prev().find(".optcheckgroup").prop("checked", true);
      } else {
        th.closest("ul").prev().find(".optcheckgroup").prop("checked", false);
      }
      ////}
    });
  });
  $(document).on("click", ".optactivebody .optoverlay", function (e) {
    if ($(e.target).is(".optparent") === false) {
      $(".optparent").find(".optdiv").hide();
      $("body").removeClass("optactivebody");
      $(".optoverlay").hide();
    }
  });
  $(document).on("click", ".optok", function (e) {
    $(".optparent").find(".optdiv").hide();
    $("body").removeClass("optactivebody");
    $(".optoverlay").hide();
  });

  $("body").on("afterappendcomplete", ".optdropdown", function (e, data) {
    if (e.target == e.currentTarget) {
      $(this).trigger("focusremoved", true);
      var th = $(this);
      var value;
      if (
        th.find("ul").length > 0 &&
        data.rows.Results &&
        data.rows.Results.length > 0
      ) {
        th.next(".optsearchinput").find(".chip").remove();
        th.find("ul[data-jlelements]:not('[data-noresult]')").each(function () {
          $(this).prev(".optullabel").remove();
          $(this).before(
            "<div class='optullabel'><label><input type='checkbox' class='optcheckgroup'/><span>" +
              $(this).attr("label") +
              "</span></div>"
          );

          var firstone = th
            .find("ul[label='" + $(this).attr("label") + "']:first")
            .not($(this));
          firstone.append($(this).html());
          if (firstone.length > 0) {
            $(this).prev(".optullabel").remove();
            $(this).remove();
          }
          th.find("li").each(function () {
            if ($(this).find("span").length == 0) {
              $(this).remove();
            } else {
              $(this)
                .find("input[type=checkbox]")
                .attr("value", $(this).find("span").attr("value"));
            }
          });
          if (th.find("li").length == 0) {
            $(this).prev(".optullabel").remove();
            $(this).remove();
          }
        });
        ////th.val(value);
        th.find("ul[data-jlscrollerhitted]").removeAttr(
          "data-jlscrollerhitted"
        );
      } else if (
        th.find("optgroup").length > 0 &&
        data.rows.Results.length > 0
      ) {
        value = th.val();
        th.find("optgroup").each(function () {
          var firstone = th
            .find("optgroup[label='" + $(this).attr("label") + "']:first")
            .not($(this));
          firstone.append($(this).html());
          if (firstone.length > 0) {
            $(this).remove();
          }
        });
        th.val(value);
        th.find("optgroup[data-jlscrollerhitted]").removeAttr(
          "data-jlscrollerhitted"
        );
      }
    }
  });
  var boolValue = function (value) {
    return value == "true";
  };

  window.loadServerCacheValues = function () {
    let existingValues = window.EventUserSettings.LocalCache;
    let keys = Object.keys(existingValues);
    for (let i = 0; i < keys.length; i++) {
      if (localStorage.getItem(keys[i]) != existingValues[keys[i]]) {
        setcache(keys[i], existingValues[keys[i]]);
      }
    }
  };
  function loadglobalvalues(force) {
    let postfix = "_" + window.location.pathname;
    $(".globalcachevalues").each(function () {
      if (!$(this).attr("data-loadedglobalvalue") || force) {
        $(this).attr("data-loadedglobalvalue", true);

        if (
          $(this).attr("name") &&
          $(this).attr("data-withoutprefix") == "true" &&
          getcache($(this).attr("name"))
        ) {
          $(this).val(getcache($(this).attr("name")));
        } else if (
          $(this).attr("name") &&
          getcache($(this).attr("name") + postfix) &&
          !$(this).attr("data-cachebyid")
        ) {
          $(this).attr(
            "data-hasdefaultvalue",
            getcache($(this).attr("name") + postfix)
          );
          $(this).attr("data-value", getcache($(this).attr("name") + postfix));
          if ($(this).attr("type") != "checkbox") {
            $(this).val(getcache($(this).attr("name") + postfix));
          } else {
            $(this).prop(
              "checked",
              boolValue(getcache($(this).attr("name") + postfix))
            );
          }
        } else if (
          $(this).attr("id") &&
          getcache($(this).attr("id") + postfix)
        ) {
          $(this).attr(
            "data-hasdefaultvalue",
            getcache($(this).attr("id") + postfix)
          );
          $(this).attr("data-value", getcache($(this).attr("id") + postfix));
          if ($(this).attr("type") != "checkbox") {
            $(this).val(getcache($(this).attr("id") + postfix));
          } else {
            $(this).prop(
              "checked",
              boolValue(getcache($(this).attr("id") + postfix))
            );
          }
        }
        if ($(this).attr("data-triggeronload")) {
          $(this).trigger("change");
        }
      }
    });
  }
  window.loadglobalvalues = loadglobalvalues;
  loadglobalvalues();
  $("#GlobalCacheValuesLoaded").val("true").trigger("change", true);
  $("body").on("change cachechange", ".globalcachevalues", function (e, force) {
    if (e.originalEvent || force) {
      let postfix = "_" + window.location.pathname;
      if ($(this).attr("type") == "checkbox") {
        if ($(this).attr("name")) {
          setcache(
            $(this).attr("name") + postfix,
            $(this).prop("checked"),
            e.originalEvent
          );
        } else {
          setcache(
            $(this).attr("id") + postfix,
            $(this).prop("checked"),
            e.originalEvent
          );
        }
      } else if ($(this).val()) {
        $(this).attr("data-hasdefaultvalue", $(this).val());
        $(this).attr("data-value", $(this).val());
        if ($(this).attr("data-withoutprefix") == "true") {
          setcache($(this).attr("name"), $(this).val(), e.originalEvent);
        } else if ($(this).attr("name") && !$(this).attr("data-cachebyid")) {
          setcache(
            $(this).attr("name") + postfix,
            $(this).val(),
            e.originalEvent
          );
        } else {
          setcache(
            $(this).attr("id") + postfix,
            $(this).val(),
            e.originalEvent
          );
        }
      } else {
        if ($(this).attr("name") && !$(this).attr("data-cachebyid")) {
          remcache($(this).attr("name") + postfix);
        } else {
          remcache($(this).attr("id") + postfix);
        }
      }
    }
  });

  var cdatepicker = null;

  $("body").on("click", ".ui-datepicker-close", function (e) {
    var th = $(this);
  });

  $("body").on(
    "click",
    ".form-label:not('.disableedit .form-label')",
    function (e) {
      $(".is-active")
        .not($(this).closest(".form-group,.input-group"))
        .removeClass("is-active");
      $(this)
        .closest(".form-group,.input-group")
        .addClass("is-active is-completed");
      focusinput(
        $(this).closest(".form-group,.input-group").find(".form-control")
      );
    }
  );
  var forminputid = 0;
  $("body").on("focus select click focused", ".form-control", function (e) {
    e.stopPropagation();
    if (
      $(this).prop("tagName").toLowerCase() == "input" ||
      $(this).prop("tagName").toLowerCase() == "select" ||
      $(this).prop("tagName").toLowerCase() == "textarea"
    ) {
      $(".tableformhover")
        .not($(this).closest(".tableformhover"))
        .removeClass("tableformhover");
      $(this)
        .closest(".form-group,.input-group")
        .parent("[data-label]")
        .addClass("tableformhover");

      var th = $(this);

      $(".is-active")
        .not(th.closest(".form-group,.input-group"))
        .removeClass("is-active");
      th.closest(".form-group,.input-group").addClass("is-active is-completed");
    } else {
      var forminput = $(this).closest(".form-group").find("input");
      var value = forminput.val();
      var thisname = forminput.attr("name");
      var el = $(this)
        .closest(".jltable")
        .find(".table-addnewrow")
        .find("[name=" + thisname + "List]:not(.optdiv)");
      var copyofinput = "";
      if (el.length == 0) {
        copyofinput = dropdownhtml[thisname + "List"];
      } else {
        copyofinput = el[0].outerHTML;
      }
      if (copyofinput) {
        forminputid++;
        var elid = el.attr("id");
        var copyofinputhtml = $("<div>" + copyofinput + "</div>");
        copyofinputhtml
          .find("[data-oldjson]")
          .attr(
            "[data-json]",
            copyofinputhtml.find("[data-oldjson]").attr("[data-oldjson]")
          );
        var apppendeleement = copyofinputhtml.find("[data-json]");
        apppendeleement
          .removeAttr("id")
          .addClass("singlemultiple")
          .show()
          .removeAttr("data-binderinit-click")
          .removeAttr("data-parent")
          .attr("data-value", value)
          .attr("name", thisname)
          .removeAttr("data-binderorderinit")
          .removeAttr("data-binderperpageinit")
          .removeAttr("data-binderscrollloaderinit")
          .removeAttr("data-binderrequested")
          .removeAttr("data-bindersuccess")
          .removeAttr("data-jlorgvalue");
        if (bindmanager.htmltemplates[elid]) {
          apppendeleement.html(bindmanager.htmltemplates[elid]);
        }
        apppendeleement.attr(
          "data-filterby",
          apppendeleement
            .attr("data-filterby")
            .replace(elid, "new_id_filterby_" + forminputid)
        );

        $(this)
          .closest(".form-group")
          .html(copyofinputhtml.html())
          .find("[data-json]")
          .binder();
      }
    }
  });

  $("body").on("blur focusremoved", ".form-control", function (e) {
    e.stopPropagation();
    if (
      $(this).prop("tagName").toLowerCase() == "input" ||
      $(this).prop("tagName").toLowerCase() == "select" ||
      $(this).prop("tagName").toLowerCase() == "textarea"
    ) {
      var th = $(this);
      $(".is-active")
        .not(th.closest(".form-group,.input-group"))
        .removeClass("is-active");
      th.closest(".form-group,.input-group").addClass("is-active is-completed");
      th.closest(".tableformhover").removeClass("tableformhover");
      if (
        ($(this).prop("tagName").toLowerCase() == "input" &&
          ($(this).val() === "" || $(this).val() === null)) ||
        ($(this).prop("tagName").toLowerCase() == "select" &&
          $(this).find("option:selected").length == 0)
      ) {
        ////$(this).closest(".form-group,.input-group").not(".optparent").removeClass("is-completed");
      }
      $(this).closest(".form-group,.input-group").removeClass("is-active");
      var tobj = th.closest(".form-group").next(".table-cell-content");
      if (tobj.text() == "" && th.find("option:selected").length > 0) {
        tobj.text(th.find("option:selected").text());
      }
    }
  });

  $("body").on("keydown keydowned", "textarea", function (e) {
    var el = this;
    setTimeout(function () {
      el.style.cssText = "height:auto; padding:0";
      // for box-sizing other than "content-box" use:
      // el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = "height:" + (parseInt(el.scrollHeight) + 10) + "px";
    }, 0);
  });

  $("body").on(
    "afterappendcomplete",
    ".jltable div[data-json].tablebody.candidatespublic,.jltable div[data-json].tablebody.judgescorepublic",
    function (e, data) {
      if (data.rows.Results.length == 0) {
        $(this).closest(".competitionsstructure").remove();
      }
    }
  );

  $("body").on(
    "afterappendcomplete",
    ".jltable div[data-json].tablebody .table-addnewrow [data-label='inherit'] select",
    function (e, data) {
      $(this).val([2]);
    }
  );

  var custtodatetimeBoxi = 0;
  var setDateValue = function (cl) {
    custtodatetimeBoxi++;
    var custtodatetimeBoxlocali = custtodatetimeBoxi;

    setTimeout(function () {
      if (custtodatetimeBoxi == custtodatetimeBoxlocali) {
        if (
          $(".datedropper.picker-focus:visible,.td-wrap.td-show:visible")
            .length == 0
        ) {
          var customdatepicker = cl.find(".customdatepicker").val();
          var customtimepicker = cl.find(".customtimepicker").val();

          cl.find("[type=hidden]:first")
            .val(customdatepicker + " " + customtimepicker)
            .trigger("change", true);
        } else if (
          $(".datedropper.picker-focus:visible,.td-wrap.td-show:visible")
            .length > 0
        ) {
          setTimeout(function () {
            setDateValue(cl);
          }, 500);
        }
      }
    }, 300);
  };
  $("body").on(
    "change",
    ".custtodatetimeBox input[data-initialized]",
    function (e, force) {
      if (e.originalEvent || force) {
        var cl = $(this).closest(".custtodatetimeBox");
        setDateValue(cl);
      }
    }
  );
  var dateinitialize = function (th) {
    if (!th.parent().hasClass("custtodatetimeBox")) {
      var inputhtml = th[0].outerHTML;
      var value = th.val();
      var date = $.fn.binder.methods.date.formatdate("", value, "dd-MM-yyyy");
      var time = $.fn.binder.methods.date.formatdate("", value, "HH:mm TT");
      if (!time) {
        time = "00:00 AM";
      }

      th.parent().addClass("custtodatetimeBox");
      th.after(inputhtml + inputhtml);
      th.attr("type", "hidden");
      th.next()
        .attr("type", "text")
        .removeAttr("name")
        .val(date)
        .addClass("customdatepicker")
        .attr("placeholder", "dd-mm-yyyy");
      th.next()
        .next()
        .attr("type", "text")
        .removeAttr("name")
        .val(time)
        .addClass("customtimepicker")
        .timeDropper({
          format: "hh:mm A",
          meridians: true,
          mousewheel: true,
          setCurrentTime: false,
        })
        .attr("data-initialized", true);
    }
  };

  $("body").on(
    "focus",
    '[placeholder="dd-mm-yyyy"],.datetimepicker,.datepicker',
    function () {
      $(this)
        .datepicker({
          dateFormat: "dd-mm-yy",
          changeMonth: true,
          changeYear: true,

          yearRange: "1900:" + (parseInt(new Date().getFullYear()) + 10),
          onSelect: function () {
            $(this).trigger("blur");
            $(this).trigger("change", true);
          },
        })
        .attr("data-initialized", true);
    }
  );

  $("body").on("afterappendcomplete", "div[data-json]", function (e, data) {
    if (
      e.target == e.currentTarget &&
      data.rows &&
      data.rows.Results &&
      data.rows.Results.length > 0
    ) {
      loadglobalvalues();
      $(this)
        .find('[placeholder="dd-mm-yyyy"]')
        .each(function () {
          $(this).attr("type", "text");
        });
      $(this)
        .find(".datetimpicker")
        .each(function () {
          dateinitialize($(this));
        });
    }
  });

  $("body").on(
    "afterappendcomplete",
    ".jltable div[data-json].tablebody",
    function (e, data) {
      if (e.target == e.currentTarget && data.rows && data.rows.Results) {
        if (!window.location.hash.startsWith("#/")) {
          var pagination = $($(this).attr("data-pagination"));
          if (pagination.length > 0) {
            var pageNumber = $("#input_" + pagination.attr("id"));
            var pageSize = $($(this).attr("data-perpage"));
            if (pageNumber.val() && pageSize.val()) {
              window.location.hash =
                $(this).attr("id") +
                "pageNumber=" +
                pageNumber.val() +
                "&" +
                $(this).attr("id") +
                "pageSize=" +
                pageSize.val();
            }
          }
        }
        var th = $(this);

        if ($(this).sortable) {
          if (th.find(".table-row [name='Order']").length > 0) {
            $(this).sortable({
              axis: "y",
              containment: "parent",
              handle: ".orderrow",
              cursor: "move",
              items: "> .table-row",
              opacity: 0.2,
              revert: true,
              scrollSensitivity: 10,
              scroll: true,
              stop: function (event, ui) {
                var currentorderlist = [];
                alert(
                  "Your sort order not saved, click on ok button to save after complete sorting",
                  function () {
                    th.find(".table-row [name='Order']").each(function (i, v) {
                      $(this)
                        .val(i + 1)
                        .trigger("change", true);
                    });
                  },
                  null,
                  "sortalert",
                  "c"
                );
              },
            });
          }

          $(this).disableSelection();
        }
      }
    }
  );

  $("body").on("click", ".updateaddbox", function () {
    $(".updateaddbox")
      .removeClass("col-md-25 col-md-30 col-md-10  col-md-20  col-md-30")
      .addClass("col-md-30");
    $(".updatelistbox")
      .removeClass("col-md-25 col-md-40 col-md-10  col-md-20  col-md-30")
      .addClass("col-md-20");
  });
  $("body").on("click", ".updatelistbox", function () {
    $(".updatelistbox")
      .removeClass("col-md-25 col-md-40 col-md-10  col-md-20  col-md-30")
      .addClass("col-md-40");
    $(".updateaddbox")
      .removeClass("col-md-25 col-md-40 col-md-10  col-md-20  col-md-30")
      .addClass("col-md-10");
  });
  $("body").on("click", "[data-modal]", function () {
    $($(this).attr("data-modal")).show();
    $("body").css("overflow-y", "hidden");
  });
  $("body").on("click", "[data-modal-close]", function () {
    $($(this).attr("data-modal-close")).hide();
    $("body").css("overflow-y", "auto");
  });
  $(document).on("click", ".modal", function (e) {
    if ($(e.target).hasClass("modal")) {
      $(".modal").hide();
      $("body").css("overflow-y", "auto");
    }
  });
  $("body").on("button.btn", "mousedown", function (e) {
    var target = e.target;
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector(".ripple");
    $(ripple).remove();
    ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.height = ripple.style.width =
      Math.max(rect.width, rect.height) + "px";
    target.appendChild(ripple);
    var top =
      e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    var left =
      e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + "px";
    ripple.style.left = left + "px";
    return false;
  });

  $("body").on("click", "[data-toggle='collapse']", function (e) {
    e.preventDefault();
    $(this)
      .closest($(this).attr("data-parent"))
      .find(".collapse")
      .not($($(this).attr("href")))
      .removeClass("in");
    $($(this).attr("href")).toggleClass("in");
    if ($($(this).attr("href")).hasClass("in")) {
      $($(this).attr("href"))
        .find(".divtable.formtable")
        .each(function () {
          $('[name="allowtoload"]').val(true).trigger("change");
          //settableresponsive($(this));
        });
    }
  });

  $("body").on("change", "[data-reflect]", function () {
    var value = $(this).val();
    $($(this).attr("data-reflect")).each(function () {
      $(this).val(value).trigger("change");
    });
  });
  $("body").on("click", "[data-valuereflect]", function () {
    var value = $(this).attr("value");
    $($(this).attr("data-valuereflect")).each(function () {
      $(this).val(value).trigger("change");
    });
  });

  window.showmenu = function () {
    if (
      $(".leftmenuouterbox ").hasClass("minimizemenu") &&
      !$("#contentbox").attr("menumaximized")
    ) {
      if (!$(".leftmenuouterbox ").hasClass("removingclass")) {
        $(".leftmenuouterbox ").addClass("removingclass");
        setTimeout(function () {
          $(".leftmenuouterbox ").removeClass("removingclass");
          $(".leftmenuouterbox ").addClass("maximizemenu");
        }, 500);
      }
      $(".leftmenuouterbox ").removeClass("minimizemenu");
      $("#contentbox").attr("menumaximized", true);
      $(".menubarbox").show();
      applymenustyle();
    }
  };
  window.hidemenu = function () {
    if (!$(".leftmenuouterbox ").hasClass("removingclass")) {
      $(".leftmenuouterbox ").addClass("removingclass");
      setTimeout(function () {
        $(".leftmenuouterbox ").removeClass("removingclass");
        $(".leftmenuouterbox ").addClass("minimizemenu");
      }, 500);
    }
    $(".leftmenuouterbox ").removeClass("maximizemenu");

    $("#contentbox").removeAttr("menumaximized");
    applymenustyle();
  };
  $("body").on("click", "#contentbox[menumaximized]", function () {
    hidemenu();
    applymenustyle();
  });

  window.detectIframeClickAndCloseMenu = function () {
    const iframe = document.querySelector(".reactIframeLayout");
    if (iframe) {
      // Ensure the iframe has loaded
      iframe.onload = function () {
        const iframeDocument = iframe.contentWindow.document;

        // Listen for clicks inside the iframe
        iframeDocument.addEventListener("click", function () {
          window.hidemenu();
        });
      };
    }
  };
  window.detectIframeClickAndCloseMenu();
  $("body").on("click", ".open-nav", function (e) {
    if ($(".leftmenuouterbox ").hasClass("minimizemenu")) {
      showmenu();
    } else {
      hidemenu();
    }

    applymenustyle();
  });
  if ($(".menubarbox").length == 0) {
    $(".open-nav").hide();
    applymenustyle();
  } else {
    $(".menubarbox").show();
  }
  $("body").on("click", ".close-nav", function (e) {
    $(".menubarbox").show();
    applymenustyle();
    ////document.body.style.backgroundColor = "white";
  });
  $("body").on("mouseover focus", "button", function (e) {
    $(document.activeElement).filter("input").focusout().blur();
  });

  $(".leftsubmenu").each(function () {
    $(this).prev("a").attr("href", "#");
    if ($(this).prev("a").find("span").find(".downarrow").length == 0) {
      $(this)
        .prev("a")
        .find("span")
        .append('<i class="fas fa-angle-down downarrow"></i>');
    }
  });
  $("body").on("afterappendcomplete", ".leftsubmenu", function (e) {
    var t = $(this).parent("li");
    t.find(".downarrow")
      .addClass("fa-angle-up fa")
      .removeClass("fa-angle-down fa-spinner fas fa-spin");
    if (t.find("ul li[data-jlelements]").length == 1) {
      // showspinner();
      // window.location.href = t.find("ul li[data-jlelements]").find("a").attr("href");
    }
  });
  var mouseover = false;
  $("body").on("mouseover", ".leftmenuouterbox", function (e) {
    if ($(window).width() > 768) {
      showmenu();
      applymenustyle();
    }
  });
  $("body").on("click", ".backtomenu", function (e) {
    $(".parentmenus").show();
    lastMenuRequest = "";
    $(this).hide();
  });

  ////$('body').on("mouseout",
  ////    ".leftmenuouterbox",
  ////    function (e) {
  ////        ////if ($(window).width() > 768) {
  ////        ////    mouseover = false;

  ////        ////    setTimeout(function() {
  ////        ////            if (!mouseover) {
  ////        hidemenu();
  ////                        applymenustyle();
  ////        ////            }
  ////        ////        },
  ////        ////        1000);
  ////        ////}
  ////    });

  $("body").on("click ", ".leftmenu > li  a", function (e) {
    var t = $(this).parent("li");
    $(".menuhover:not(.currentmenu)")
      .not(t)
      .not(t.closest(".menuhover"))
      .not(t.find(".menuhover"))
      .removeClass("menuhover")
      .find(".downarrow")
      .addClass("fa-angle-down fa")
      .removeClass("fa-angle-up");
    $(".leftmenu > li  a").removeClass("active");

    $(this).addClass("active");
    t.addClass("menuhover");

    if (!$(this).attr("href").startsWith("#/")) {
      if ($(this).attr("href") != "#" && !e.ctrlKey) {
        //// showspinner();
      } else {
        showmenu();
      }

      applymenustyle();
    } else {
      if ($(window).width() <= 768) {
        hidemenu();
      }
    }
    if (t.find("ul li[data-jlelements]").length == 0) {
      ////    t.find(".downarrow").addClass("fas fa-spinner fa-spin").removeClass("fa-angle-down fa fa-angle-up");
      ////} else {
      t.find(".downarrow")
        .addClass("fa-angle-up fa")
        .removeClass("fa-angle-down");
    }

    ////document.body.style.backgroundColor = "white";
  });

  window.adjustmenu = function () {
    ////$("#contentbox").removeAttr("menumaximized");
    ////$(".leftmenuouterbox ").removeAttr("style");
    ////$(".leftmenuouterbox ").addClass("minimizemenu");

    ////if ($(window).width() <= 768) {
    ////    $(".leftmenuouterbox,.modal").attr("style", "max-width:" + $(window).width() + "px !important");
    ////} else {
    ////    $(".leftmenuouterbox,.modal").removeAttr("style");
    ////}
    ////$(".leftmenuouterbox").css("height", $(window).height() - 50);
    var eventmanagerowHeight = $(".eventmanagerow").outerHeight() > 0 ? $(".eventmanagerow").outerHeight() : 0;
    var headerHeight = $("header.header").outerHeight() > 0 ? $("header.header").outerHeight() : 0;
    $("#contentbox").css("min-height", $(window).height() - eventmanagerowHeight - headerHeight);
    $("#contentboxbody").css("min-height", $(window).height() - eventmanagerowHeight - headerHeight);
    ////if ($(window).width() <= 768 || $(".menubarbox:visible").length == 0) {
    ////    $(".leftmenuouterbox ").removeClass("minimizemenu");
    ////    $("#contentbox").removeAttr("menumaximized");
    ////    $(".menubarbox").hide();

    ////} else {
    ////    $(".menubarbox").show();

    ////}
    applymenustyle();

    var link = window.location.href
      .replace(window.location.origin + "/", "")
      .replace(window.location.origin, "");
    if (link) {
      var linkelement = $(".leftmenu a[href$='" + link + "']").not(
        ".leftmenu a[href='#']"
      );
      if (linkelement.length >= 1) {
        linkelement.addClass("active");
        linkelement.parent().parent().parent().addClass("active");
      }
    }
    ////if ($(".leftmenuouterbox").hasClass("minimizemenu")) {
    ////    if ($('.leftmenuouterbox.minimizemenu').innerHeight() >
    ////        $('.leftmenuouterbox.minimizemenu >*:first').outerHeight()) {
    ////        //// converttotstyle("minimizemenu", ".leftmenuouterbox.minimizemenu", "width", "44px !important");
    ////    } else {
    ////        /////  converttotstyle("minimizemenu", ".leftmenuouterbox.minimizemenu", "width", "60px !important");
    ////    }
    ////}
  };
  var resizedcount = 0;
  $(window).on("resize", function () {
    resizedcount++;
    var iresizedcount = resizedcount;

    setTimeout(function () {
      if (resizedcount == iresizedcount) {
        adjustmenu();
      }
    }, 500);
  });
  adjustmenu();

  //Menuitems

  $("body").on("click", 'a[href="#"]', function (e) {
    e.preventDefault();
  });

  $("body").on("click", 'a[href="#up"]', function (e) {
    e.preventDefault();
  });

  $("body").on("click", 'a[href="#down"]', function (e) {
    e.preventDefault();
  });
});

function findtopgroup(groups, top) {
  var group = top;
  if (groups) {
    $.each(groups, function (i, v) {
      if (top <= parseInt(i) + 50 && top >= parseInt(i) - 50) {
        group = i;
      }
    });
  }

  return group;
}

function adjustheight(selector) {
  var itemTops = {};
  var height = 0;
  $("[selector='" + selector + "']").remove();
  $("body").append(
    "<style selector='" +
      selector +
      "'>" +
      selector +
      "{ min-height:0px !important;}</style>"
  );
  var lasttop = 0;
  $(selector).removeClass("afteradjust");
  $(selector).parent().find(".hclearfix").remove();
  $(selector).removeAttr("data-top");

  $(selector).each(function () {
    if ($(this).is(":visible")) {
      var top = $(this).position().top;
      top = findtopgroup(itemTops, top);
      $(this).attr("data-top", top);
      if (lasttop != top) {
        $(this).before(
          '<div class="hclearfix col-xs-50" data-static="true"></div>'
        );
      }
      lasttop = top;
      if (!itemTops[top] || $(this).outerHeight() > itemTops[top]) {
        itemTops[top] = $(this).outerHeight();
        $("body").append(
          "<style selector='" +
            selector +
            "'>" +
            selector +
            "[data-top='" +
            top +
            "']{ min-height: " +
            itemTops[top] +
            "px !important;}</style>"
        );
      }
    }
  });
  if ($(selector).attr("data-adjustwidth")) {
    var firstRowLength = 0;
    $.each(itemTops, function (i, v) {
      if (v > 0) {
        var items = $(selector).filter("[data-top='" + i + "']");
        var length = items.length;
        if (i == 0) {
          firstRowLength = length;
        }
        if (length != firstRowLength) {
          length = firstRowLength;
        }

        $("body").append(
          "<style selector='" +
            selector +
            "'>" +
            selector +
            "[data-top='" +
            i +
            "']{ min-width: " +
            100 / length +
            "% !important;width:min-content !important;}</style>"
        );
      }
    });
  }
  $(selector).addClass("afteradjust");
}
applymenustyle();
$(document).trigger("pageload");

window.reactRender = function (path, data) {
  // document.getElementById("iframeReactBox")?.remove();

  let iframe = document.getElementById("iframeReactBox");
  if (iframe == null) {
    /**  <iframe id="iframeReactBox" src="@(Url.Action("IframeRender","SetUp")+"?Version=" + ConfigValues.Get("Version"))" style="width: 100%;
                                        height: calc(100vh - 73px);
                                        display: none;
                                        z-index: 99999;
                                    border:none;
                                        position: absolute;
                                        top: 0;"></iframe> */
    iframe = document.createElement("iframe");
    iframe.id = "iframeReactBox";
    iframe.src =
      "/SetUp/IframeRender?Version=" + $("#Version").val() + "&path=" + path+"&json="+encodeURIComponent(JSON.stringify(data));
    iframe.className = "reactIframeLayout";
    iframe.style = `position: absolute;
                                    display: none;`;
    $("#iframeDynamicBox").append(iframe);
    window.detectIframeClickAndCloseMenu();
  }else{
    iframe.src =
      "/SetUp/IframeRender?Version=" + $("#Version").val() + "&path=" + path+"&json="+encodeURIComponent(JSON.stringify(data));
  }
  $("#iframeReactBox").show();
  $("#iframeReactBox").css("position", "absolute");

  // setTimeout(() => {
    iframe.contentWindow.postMessage(
      JSON.stringify({ path: path, data: data }),
      "*"
    );
  // }, 1000);
};
window.addEventListener("message", function (event) {
  console.log("Message received from the child: " + event.data); // Message received from child
  let json = event.data;
  if (json.action == "close") {
    $("#iframeReactBox").hide();
  }

  if (json.action == "redirect") {
    window.location.href = json.url;
  }

  if (json.reload) {
    $.binder.reload($(json.reload));
  }
});

window.EventUserSettings = {
  GroupsTemplates: {},
};
window.LatestEventUserSettings = JSON.parse(JSON.stringify(EventUserSettings));

$(document).ready(function () {
  // let userData = JSON.parse(localStorage.getItem("user"));
  // if (userData && userData.user?.Role == 5) {
  //   $.post(
  //     "/EventJson/Get",
  //     {
  //       Select: "EVId,JsonSettings,EventSecret",
  //     },
  //     async function (data) {
  //       var json = data.Results[0].JsonSettings;
  //       var jsonSettings =
  //         json != null && json != ""
  //           ? JSON.parse(json)
  //           : { EventUserSettings: {} };
  //       if (!jsonSettings.EventUserSettings) {
  //         jsonSettings.EventUserSettings = {};
  //       }
  //       window.EventUserSettings = jsonSettings.EventUserSettings;
  //       console.log("Event Settings Loaded", EventUserSettings);
  //       LatestEventUserSettings = JSON.parse(JSON.stringify(EventUserSettings));
  //       loadServerCacheValues();
  //     }
  //   );
  // }
});
let globalIndex = 0;
const LazyRun = function (fn, timeout) {
  timeout = timeout || 500;
  globalIndex++;
  let localIndex = globalIndex;
  setTimeout(() => {
    if (localIndex === globalIndex && fn) {
      fn();
    }
  }, timeout);
};

window.updateEventSettings = function (eventUserSettings) {
  let userData = JSON.parse(localStorage.getItem("user"));
  if (userData && userData.user &&userData.user.Role == 5) {
    let changedObjects = {};

    let keys = Object.keys(eventUserSettings);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (
        JSON.stringify(eventUserSettings[key]) !==
        JSON.stringify(LatestEventUserSettings[key])
      ) {
        changedObjects[key] = eventUserSettings[key];
      }
    }

    if (Object.keys(changedObjects).length === 0) {
      return;
    }

    console.log("Event Settings Updating...", eventUserSettings);
    console.log("Changed Objects", changedObjects);
    window.LatestEventUserSettings = JSON.parse(
      JSON.stringify(window.EventUserSettings)
    );
    LazyRun(function () {
      // $.post(
      //   "/EventJson/Save",
      //   {
      //     JsonSettings: JSON.stringify({
      //       EventUserSettings: changedObjects,
      //     }),
      //   },
      //   function (data) {
      //     console.log("Event Settings Updated", data);
      //   }
      // );
    }, 1000);
  }
};
