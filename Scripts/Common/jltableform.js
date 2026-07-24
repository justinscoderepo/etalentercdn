/*
MIT License
Copyright (c) 2017 JavscriptLab https://github.com/JavscriptLab
*/

"use strict";
$.ajaxSetup({
  cache: false,
});

$.fn.jltableform = function (opt) {
  $(this).each(function () {
    var t = $(this);

    if (!t.attr("id")) {
      t.attr(
        "id",
        "Id" +
          new Date().getTime().toString() +
          "" +
          Math.random().toString().replace(".", "")
      );
    }
    var tid = t.attr("id");
    var stn = $.extend({}, $.fn.jltableform.defaults);
    var kv = $.fn.jltableform.keys;
    var mt = $.extend($.fn.jltableform.date, $.fn.jltableform.methods);
    if (typeof opt == "object") {
      {
        stn = $.extend(stn, opt);
      }
    }
    if (t.children("[data-wrapfollow]").length > 0) {
      t.children("[data-wrapfollow]")
        .children()
        .attr("data-jltableformrow", "true");
    } else {
      t.children().attr("data-jltableformrow", "true");
    }

    if (!t.attr("data-jltableforminit")) {
      t.attr("data-jltableforminit", true);

      ////var inheritmodelid = $(this).closest(".inheritmodal").attr("id");

      ////$('body').on('click',
      ////    "#" + inheritmodelid + ' .importbuttonblock .submit:not(#' + tid + '[data-jltableform] [data-jltableform] *)',
      ////    function(e) {
      ////        e.stopImmediatePropagation();
      ////        if (e.originalEvent) {

      ////            var method = f.attr('data-method') ? f.attr('data-method') : "post";
      ////            var action = f.attr('data-action').replace("Put", "PutAll");
      ////            var postdata = {};
      ////            var closest = $(this).closest(".inheritmodal");
      ////            postdata.formdata = {};
      ////            postdata.formdata.models = [];
      ////            closest.find(".table-row .gridcheck:checked").each(function() {
      ////                var formrow = $(this).closest("[data-jltableformrow]");
      ////                var formdata = $.fn.binder.methods.makepostdata(formrow.find("[name]"));
      ////                var subpostdata = {};
      ////                subpostdata.formdata = formdata;
      ////                f.trigger("beforesavetableform", subpostdata);
      ////                postdata.formdata.models.push(subpostdata.formdata);
      ////            });
      ////            alert("Are you sure to use these rows?",
      ////                function() {
      ////                    $[method](action,
      ////                        postdata.formdata,
      ////                        function(data) {
      ////                            if (data && data.validationErrors && typeof data.validationErrors == "object") {
      ////                                $.each(data.validationErrors[0],
      ////                                    function(key, value) {
      ////                                        var block = formrow.find('[name="form[' + key + ']"]')
      ////                                            .closest(".form-group").parent('[data-label]');
      ////                                        block.addClass("validationmessageblock");
      ////                                        block.find(".validationmessage").remove();
      ////                                        block.append('<span class="validationmessage">' +
      ////                                            value +
      ////                                            '</span>');
      ////                                    });
      ////                            } else {
      ////                                var callbinderobjects = $("[data-json='" +
      ////                                    f.attr("data-action").replace(/Put/i, "Get") +
      ////                                    "']");
      ////                                if (f.attr('data-updatebinder') && $(f.attr('data-updatebinder')).binder) {
      ////                                    callbinderobjects =
      ////                                        callbinderobjects.add($(f.attr('data-updatebinder')));
      ////                                }
      ////                                callbinderobjects.binder();
      ////                                $("#" + inheritmodelid).hide();
      ////                                f.trigger('aftersavetableform', data);
      ////                            }
      ////                        });
      ////                },
      ////                false,
      ////                "Importit",
      ////                "c");

      ////        }
      ////    });
    }
  });
  return $(this);
};
var bulkrowUpdatesCount = 0;
$.fn.jltableform.methods = {
  saveform: function (f, th, newrow, bulkrow) {
    if (th.hasClass("disablejltableform")) {
      return false;
    }
    var formrow = th.closest("[data-jltableformrow]");
    var value = "";
    var key = th.attr("name")
      ? th.attr("name").replace("[", "").replace("]", "")
      : "";

    if (window.submitform(formrow)) {
      var tobj;
      var rowTextObj;
      if (!newrow) {
        value = th.val();
        if (th.prop("tagName").toLowerCase() == "select") {
          value = th.find("option:selected").text();
        }
        if (th.attr("type") == "checkbox" || th.attr("type") == "radio") {
          value = $.fn.binder.methods.fetchvalue[th.attr("type")](th);
        }

        rowTextObj = formrow.find(
          "[data-jltext-" + key + "],[data-jlattr-" + key + "]"
        );
        tobj = th.closest(".form-group").next(".table-cell-content");
        var originalValue = th.attr("data-jlorgvalue");
        if (tobj.text() == value || originalValue == value) {
          return false;
        }

        var attributes = $.fn.binder.methods.attr(tobj);
        value = $.fn.binder.methods.textautofn(attributes, value, tobj);
        value = $.fn.binder.methods.applydatefunctionalitybyattributes(
          attributes,
          key,
          value
        );
        $.fn.binder.methods.applyfunctionalitybasedonattributes(
          attributes,
          tobj,
          key,
          value
        );
        tobj.add(rowTextObj).text("Not updated, please try again");
        th.attr("data-jlorgvalue", value);
      }

      var method = f.attr("data-method") ? f.attr("data-method") : "post";
      var action = f.attr("data-action");
      var formdata = {};
      formdata = $.fn.binder.methods.makepostdata(
        formrow.find("[name]").not(formrow.find("[data-jltableform] [name]"))
      );

      // if (f.valid() == true) {
      var postdata = {};
      postdata.formdata = formdata;
      postdata.newrowdata = newrow;
      f.trigger("beforesavetableform", postdata);
      formrow.trigger("beforesavetablerow", postdata);
      $(".validationmessageblock").removeClass("validationmessageblock");
      $(".validationmessage").remove();
      if (bulkrow) {
        bulkrowUpdatesCount++;
      }
      $[method](action, postdata.formdata, function (data) {
        remsession("bindmanagercache");
        formrow.trigger("aftersavetablerow", data);
        if (bulkrow) {
          bulkrowUpdatesCount--;
        }
        if (
          data.ModelState &&
          data.ModelState &&
          data.ModelState.SecurityValidations &&
          data.ModelState.SecurityValidations.length > 0
        ) {
          $.each(data.ModelState.SecurityValidations, function (i, v) {
            alert(v, false, false, "SecurityValidations", "w", 5000);
          });
        } else {
          if (
            data &&
            data.validationErrors &&
            typeof data.validationErrors == "object"
          ) {
            $.each(data.validationErrors[0], function (key, value) {
              var block = formrow
                .find('[name="form[' + key + ']"]')
                .closest(".form-group")
                .parent("[data-label]");
              block.addClass("validationmessageblock");
              block.find(".validationmessage").remove();
              block.append(
                '<span class="validationmessage">' + value + "</span>"
              );
            });
          } else {
            if (rowTextObj && rowTextObj.attr("data-jlattr-" + key)) {
              rowTextObj.attr(rowTextObj.attr("data-jlattr-" + key), value);
            }
            if (rowTextObj && rowTextObj.attr("data-jltext-" + key)) {
              rowTextObj.text(value);
            }
            if (tobj && tobj.attr("data-jltext-" + key)) {
              tobj.text(value);
            }

            var path = f.attr("data-action").replace(/Save/i, "Get");
            var callbinderobjects = $("[data-json='" + path + "']");
            if (
              f.attr("data-updatebinder") &&
              $(f.attr("data-updatebinder")).binder
            ) {
              callbinderobjects = callbinderobjects.add(
                $(f.attr("data-updatebinder"))
              );
            }
            if (callbinderobjects.attr("data-uniquekey")) {
              formrow.trigger("jlupdaterow", true);
            }

            if (!newrow && !bulkrow && !f.attr("data-updatebinder-self")) {
              callbinderobjects = callbinderobjects.not(f);
            }

            if (newrow) {
              // formrow.find("input[name][type=text]:not(.disablejltableform)").val("")
              //     .trigger("change");
              callbinderobjects.one("afterappendcomplete", function () {
                callbinderobjects
                  .find(".table-addnewrow")
                  .removeClass("hidden")
                  .removeAttr("style")
                  .find(".formcontrol:visible:first")
                  .focus();
              });
              ////formrow.find("select[name]").each(function() {
              ////    $(this).find("option:first").prop("selected", true);
              ////});
            }

            if (!bulkrow || bulkrowUpdatesCount == 0) {
              callbinderobjects.each(function () {
                $.binder.clear($(this));
              });

              callbinderobjects.binder();
            }

            f.trigger("aftersavetableform", data);
            formrow.trigger("aftersavetableformrow", data);
            alert("Saved", false, false, "Savedalert", "a", 4000);
          }
        }
      });
    }
    // }
  },
};
$.fn.jltableform.keys = {};
$.fn.jltableform.defaults = {};

var adjustModalSize = function () {
  if (window == window.top) {
    $(".rightModal").each(function () {
      $(this).children().removeAttr("style");
      var height =
        $(this).children("div").outerHeight() > $(window).height()
          ? $(this).children("div").outerHeight()
          : $(window).height();

      $(this).children().css("height", height);
      $(this).find("#rightmodeliframe").css("min-height", "auto");
      $(this)
        .find("#rightmodeliframe")
        .css(
          "min-height",
          $(this).innerHeight() -
            $("#rightModalLabel").parent().innerHeight() -
            $("#rightModalClose").parent().innerHeight() -
            40
        );
    });
  }
};

function adjustwidth(selector, innerwidth) {
  var width = 0;

  selector.each(function () {
    if ($(this).outerWidth() > width) {
      width = $(this).outerWidth();
    }
  });

  if (width > 0) {
    var widthinpercentage = (width / innerwidth) * 100;

    selector.css({ width: width });
  }
}
function setrightangle(th, clid, leftscroll) {
  if (th.find(".tablebody .rightangle").length === 0) {
    th.find(".tablebody").append(
      '<div class="rightangle"><svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="angle-right"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg></div>'
    );
  }
  var anglerightoffsetleft =
    leftscroll - th.find(".tablebody .rightangle").width();
  var anglerightoffsetheight = th.find(".tablehead").outerHeight() + 1;
  converttotstyle(
    clid + "stylesangleright",
    "#" + clid + " .rightangle",
    "left",
    anglerightoffsetleft + "px"
  );
  converttotstyle(
    clid + "stylesanglerighttop",
    "#" + clid + " .rightangle",
    "top",
    anglerightoffsetheight + "px"
  );
}
function setleftangle(th, clid, leftscroll) {
  if (th.find(".tablebody .leftangle").length === 0) {
    th.find(".tablebody").prepend(
      '<div class="leftangle"><svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="angle-right"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class=""></path></svg></div>'
    );
  }
  var angleleftoffsetleft = leftscroll;
  var angleleftoffsetheight = th.find(".tablehead").outerHeight() + 1;
  converttotstyle(
    clid + "stylesangleleft",
    "#" + clid + " .leftangle",
    "left",
    angleleftoffsetleft + "px"
  );
  converttotstyle(
    clid + "stylesanglelefttop",
    "#" + clid + " .leftangle",
    "top",
    angleleftoffsetheight + "px"
  );
}
function settableresponsive(th, afterappend, triggered) {
  ////th.find(".tablehead").closest(".divtable").removeClass("completescroll");
  ////if (afterappend) {
  ////    th.find(".datacolumn").removeAttr('style');
  ////    th.find(".innercolumn").removeAttr('style');
  ////    th.find(".tablehead .innercolumn").each(function (index) {
  ////        var inner = $(this);
  ////        $(this).find(".datacolumn").each(function (jindex) {
  ////            var selectors = th.find(".tablebody > div .innercolumn:nth-child(" + (index + 1) + ") .datacolumn:nth-child(" + (jindex + 1) + ")");
  ////            adjustwidth(selectors.add($(this)), inner.width());
  ////        })
  ////    });
  ////}
  var cl = th.closest(".datamanager");
  var clid = cl.attr("id");

  if (afterappend) {
    ////converttotstyle(clid + "stylestitlecolumnleft",
    ////    "#" + clid + " .divtable > div > div > .datacolumn:nth-child(2)",
    ////    "opacity",
    ////     "1");
    ////converttotstyle(clid + "stylescheckcolumnleft",
    ////    "#" + clid + " .divtable > div > div > .datacolumn.checkrow",
    ////    "opacity",
    ////    "1");
  }

  var leftscroll = cl.scrollLeft();
  ////var outerwidthoflastcolumn = th.find(".lastcolumn:first").outerWidth();
  ////var outerwidthoffirstcolumn = th.find(".firstcolumn:first").outerWidth();
  var boxwidth = cl.outerWidth();
  var scrolltotalwidth = th.find(".tablehead").outerWidth();

  if (scrolltotalwidth + 100 > boxwidth) {
    th.addClass("hidemaximumpossible");
    ////   th.addClass("allowlastcolumnsabsolute");
    ////th.addClass("allowfirstcolumnsabsolute");
  } else {
    ////th.removeClass("hidemaximumpossible");
    ////   th.removeClass("allowlastcolumnsabsolute");
    ////th.removeClass("allowfirstcolumnsabsolute");
  }

  $("#" + clid + " .divtable > div > div > .datacolumn:nth-child(2)").addClass(
    "titlecolumn"
  );

  setTimeout(function () {
    var actioncolumnfirsttotalwidth = th
      .find(".tablehead .actioncolumn:first")
      .outerWidth();
    var checkcolumnfirsttotalwidth = th
      .find(".tablehead .checkrow:first")
      .outerWidth();

    ////var titlecolumnfirsttotalwidth;
    ////if (checkcolumnfirsttotalwidth) {
    ////    converttotstyle(clid + "stylestitlecolumnleft",
    ////        "#" + clid + " .divtable > div > div > .datacolumn:nth-child(2)",
    ////        "left",
    ////        leftscroll + checkcolumnfirsttotalwidth + "px");

    ////    titlecolumnfirsttotalwidth = th.find(".tablehead .titlecolumn:first").outerWidth();

    ////    var firsttitleaftercolumnwidth = th.find(".tablehead .datacolumn:nth-child(3)").outerWidth();
    ////    converttotstyle(clid + "stylesaftertitlewidth",
    ////        "#" + clid + " .divtable > div > div > .datacolumn:nth-child(3)",
    ////        "max-width",
    ////        checkcolumnfirsttotalwidth + titlecolumnfirsttotalwidth + firsttitleaftercolumnwidth + "px");
    ////    converttotstyle(clid + "stylesaftertitleborder",
    ////       "#" + clid + " .divtable > div > div > .datacolumn:nth-child(3)",
    ////       "border-left",
    ////       checkcolumnfirsttotalwidth + titlecolumnfirsttotalwidth + "px solid #FFFFFF");
    ////} else {
    ////    converttotstyle(clid + "stylestitlecolumnleft",
    ////        "#" + clid + " .divtable > div > div > .datacolumn:nth-child(1)",
    ////        "left",
    ////        leftscroll + "px");
    ////    if (afterappend && th.find(".tablehead .titlecolumn:first").length == 0) {
    ////        $("#" + clid + " .divtable > div > div > .datacolumn:nth-child(1)").addClass("titlecolumn");
    ////    }
    ////    titlecolumnfirsttotalwidth = th.find(".tablehead .titlecolumn:first").outerWidth();

    ////    var firsttitleaftercolumnwidth = th.find(".tablehead .datacolumn:nth-child(2)").outerWidth();
    ////    converttotstyle(clid + "stylesaftertitlewidth",
    ////        "#" + clid + " .divtable > div > div > .datacolumn:nth-child(2)",
    ////        "max-width",
    ////        titlecolumnfirsttotalwidth + firsttitleaftercolumnwidth + "px");

    ////    converttotstyle(clid + "stylesaftertitleborder",
    ////        "#" + clid + " .divtable > div > div > .datacolumn:nth-child(2)",
    ////        "border-left",
    ////         titlecolumnfirsttotalwidth + "px solid #FFFFFF");
    ////}
    ////converttotstyle(clid + "stylescheckcolumnleft",
    ////    "#" + clid + " .divtable > div > div > .datacolumn.checkrow",
    ////    "left",
    ////    leftscroll + "px");
    if (leftscroll > 5) {
      ////   setleftangle(th, clid, leftscroll);
    } else {
      ////th.removeClass("allowfirstcolumnsabsolute");
    }
    boxwidth = cl.outerWidth();
    scrolltotalwidth = th.find(".tablehead").outerWidth();
    actioncolumnfirsttotalwidth = th
      .find(".tablehead .actioncolumn:first")
      .outerWidth();
    var ordercolumntotalwidth = th
      .find(".tablehead .orderrow:first")
      .outerWidth();
    if (!ordercolumntotalwidth) {
      ordercolumntotalwidth = 0;
    }

    var leftprobable =
      scrolltotalwidth -
      boxwidth -
      actioncolumnfirsttotalwidth -
      ordercolumntotalwidth;
    ////converttotstyle(clid + "stylesactioncolumnleft",
    ////  "#" + clid + " .divtable > div > div > .actioncolumn",
    ////  "left",
    ////  boxwidth + leftscroll - actioncolumnfirsttotalwidth - ordercolumntotalwidth + "px");
    //// converttotstyle(clid + "stylesordercolumnleft",
    ////    "#" + clid + " .divtable > div > div > .orderrow",
    ////    "left",
    ////    boxwidth + leftscroll - ordercolumntotalwidth + "px");
    //// converttotstyle(clid + "stylesactioncolumndisplay", "#" + clid + " .divtable > div > div > .actioncolumn", "display", "block");
    //// converttotstyle(clid + "stylesordercolumndisplay", "#" + clid + " .divtable > div > div > .orderrow", "display", "block");
    //// if (ordercolumntotalwidth) {
    ////     converttotstyle(clid + "stylesbeforeactionborder",
    ////             "#" + clid + " .divtable > div > div > .datacolumn:nth-last-child(3)",
    ////             "border-right",
    ////             actioncolumnfirsttotalwidth + ordercolumntotalwidth + "px solid #FFFFFF");
    //// } else {
    ////     converttotstyle(clid + "stylesbeforeactionborder",
    ////             "#" + clid + " .divtable > div > div > .datacolumn:nth-last-child(2)",
    ////             "border-right",
    ////             actioncolumnfirsttotalwidth + "px solid #FFFFFF");
    //// }
    if (leftscroll + boxwidth + 5 < scrolltotalwidth) {
      ////setrightangle(th, clid, boxwidth+leftscroll);
    } else {
    }
  }, 500);
}

function scrollAlignment(th, triggered) {
  ////var leftscroll = th.scrollLeft();

  ////var clid = th.closest(".datamanager").attr("id");

  ////setTimeout(function () {
  ////    converttotstyle(clid + "stylesrightdisplay", "#" + clid + " .lastcolumn", "opacity", "1");
  ////    converttotstyle(clid + "stylesanglerightdisplay", "#" + clid + " .rightangle", "opacity", "1");
  ////    converttotstyle(clid + "stylesleftdisplay", "#" + clid + " .firstcolumn", "opacity", "1");
  ////    converttotstyle(clid + "stylesangleleftdisplay", "#" + clid + " .leftangle", "opacity", "1");
  ////}, 1000);
  ////if (leftscroll == 0 && th.find(".tablehead").closest(".divtable").hasClass("hidetitlebox")) {
  settableresponsive(th);
  ////    return false;
  ////}
  ////if (!triggered && th.find(".tablehead").closest(".divtable").hasClass("hidemaximumpossible") && leftscroll > 0) {
  ////    settableresponsive(th, false, true)
  ////    return false;
  ////}
  ////converttotstyle(clid + "stylesleft", "#" + clid + " .firstcolumn", "left", leftscroll + "px");
  ////converttotstyle(clid + "stylesright", "#" + clid + " .lastcolumn", "right", -leftscroll + "px");
  ////var scrollwidth = th.get(0).scrollWidth;

  ////if (th.get(0).offsetWidth + leftscroll + 10 >= scrollwidth) {
  ////    th.find(".tablehead").closest(".divtable").find(".tablebody").find(".rightangle").hide();
  ////} else {
  ////    th.find(".tablehead").closest(".divtable").find(".tablebody").find(".rightangle").show();
  ////    var outerwidthoflastcolumn = th.find(".lastcolumn:first").outerWidth();
  ////    if (th.find(".tablehead").closest(".divtable").find(".tablebody").find(".rightangle").length == 0) {
  ////        th.find(".tablehead").closest(".divtable").find(".tablebody").append('<div class="rightangle"><svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="angle-right"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg></div>');
  ////    }
  ////    th.find(".tablehead").closest(".divtable").find(".tablebody").find(".rightangle").show();
  ////    converttotstyle(clid + "stylesangleright", "#" + clid + " .rightangle", "right", (-leftscroll + outerwidthoflastcolumn) + "px");
  ////}
  ////if (leftscroll > 0) {
  ////    var outerwidthoffirstcolumn = th.find(".firstcolumn:first").outerWidth();
  ////    th.find(".tablehead").closest(".divtable").find(".tablebody").find(".leftangle").show();
  ////    converttotstyle(clid + "stylesangleleft", "#" + clid + " .leftangle", "left", (leftscroll + outerwidthoffirstcolumn) + "px");
  ////    if (th.find(".tablehead").closest(".divtable").find(".tablebody").find(".leftangle").length == 0) {
  ////        th.find(".tablehead").closest(".divtable").find(".tablebody").prepend('<div class="leftangle"><svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="angle-right"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class=""></path></svg></div>');
  ////    }
  ////    th.find(".tablehead").closest(".divtable").find(".tablebody").find(".leftangle").show();

  ////} else {
  ////    th.find(".tablehead").closest(".divtable").find(".tablebody").find(".leftangle").hide();
  ////}
}

function focusinput(obj) {
  if (
    obj &&
    obj.prop("tagName") &&
    obj.prop("tagName").toLowerCase() == "select"
  ) {
    var element = obj[0],
      worked = false;
    if (document.createEvent) {
      // chrome and safari
      var e = document.createEvent("MouseEvents");
      e.initMouseEvent(
        "mousedown",
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      worked = element.dispatchEvent(e);
    }
  } else {
    var inputField = obj[0];
    if (inputField) {
      if (
        inputField != null &&
        inputField.value &&
        inputField.value.length != 0
      ) {
        if (inputField.createTextRange) {
          var FieldRange = inputField.createTextRange();
          FieldRange.moveStart("character", inputField.value.length);
          FieldRange.collapse();
          FieldRange.select();
        } else if (
          inputField.selectionStart ||
          inputField.selectionStart == "0"
        ) {
          var elemLen = inputField.value.length;
          inputField.selectionStart = elemLen;
          inputField.selectionEnd = elemLen;
          inputField.focus();
        }
      } else {
        inputField.focus();
      }
    }
  }
  obj.trigger("focused");
  obj.trigger("keydowned");
}
function jldeleterow(f, th, action, callback) {
  var postdata = {};
  var deletebykey = th.closest(".table-cell-actions").attr("data-keyname");
  var deletebyvalue = th.closest(".table-cell-actions").attr("data-id");
  postdata.formdata = {};
  postdata.formdata[deletebykey] = deletebyvalue;
  f.trigger("beforedeletetableform", postdata);

  alert(
    "Are you sure to delete it?",
    function () {
      let token = JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user")).token
        : "";
      let headers = { Authorization: "Bearer " + token };
      $.ajax({
        url: action,
        headers: headers,
        type: "DELETE",
        success: function (data) {
          remsession("bindmanagercache");
          if (data && data.Results) {
            alert("Deleted successfully");
            var callbinderobjects = $("#fakeitem");
            if (f.attr("data-deleteaction")) {
              callbinderobjects = $(
                "[data-json='" +
                  f.attr("data-deleteaction").replace(/Remove/i, "Get") +
                  "']"
              );
            }

            callbinderobjects = callbinderobjects.not(f);
            if (
              f.attr("data-updatebinder") &&
              $(f.attr("data-updatebinder")).binder
            ) {
              callbinderobjects = callbinderobjects.add(
                $(f.attr("data-updatebinder"))
              );
            }
            callbinderobjects.each(function () {
              $.binder.clear($(this));
            });
            callbinderobjects.binder();
            th.closest(".table-row").remove();
          } else {
            alert(
              "Unable to delete, <br/>due to, <br/>It's using somewhere or <br/>not selected all depended values or <br/>because of  security reasons",
              false,
              false,
              false,
              "w",
              5000
            );
          }
          if (callback) {
            callback(data);
          }
        },
        error: function (res) {
          if (res&&res.responseJSON&&res.responseJSON.SecurityValidations&&res.responseJSON.SecurityValidations.length > 0) {
            alert(
              res.responseJSON.SecurityValidations[0],
              false,
              false,
              "SecurityValidations",
              "w",
              5000
            );
          } else {
            alert(
              "Can't deleteit, because it using in somewhere",
              false,
              false,
              "Deleteit",
              "w",
              5000
            );
          }
        },
        data: postdata.formdata,
      });
    },
    false,
    "Deleteit",
    "c"
  );
}

$(document).ready(function () {
  var triggeredkeydown = false;
  var lastkeydown = 0;

  var keydownmovements = function (keyCode, th) {
    if (th && th.length > 0) {
      triggeredkeydown = true;

      var currentinput;
      var input;
      var key = th.attr("name");

      input = th
        .parent()
        .parent()
        .parent()
        .next()
        .find("[name*='" + key + "'],a.deleterow,a.addrow")
        .first();
      if (keyCode == 40 && input.length > 0) {
        $(".tableformhover").removeClass("tableformhover");
        currentinput = input;
        input.parent().parent().addClass("tableformhover");
        input.focus().parent().parent().addClass("tableformhover");
      }
      input = th
        .parent()
        .parent()
        .parent()
        .prev()
        .find("[name*='" + key + "'],a.deleterow,a.addrow")
        .first();
      if (keyCode == 38 && input.length > 0) {
        $(".tableformhover").removeClass("tableformhover");
        currentinput = input;
        input.parent().parent().addClass("tableformhover");
        input.focus().parent().parent().addClass("tableformhover");
      }

      input = th
        .parent()
        .parent()
        .next("div:not('.disableedit')")
        .find("[name*='form['],a.deleterow,a.addrow")
        .first();
      if (keyCode == 39 && input.length > 0) {
        currentinput = input;
        $(".tableformhover").removeClass("tableformhover");
        input.focus().parent().parent().addClass("tableformhover");
      }
      input = th
        .parent()
        .parent()
        .prev("div:not('.disableedit')")
        .find("[name*='form['],a.deleterow,a.addrow")
        .first();
      if (keyCode == 37 && input.length > 0) {
        currentinput = input;
        $(".tableformhover").removeClass("tableformhover");

        input.focus().parent().parent().addClass("tableformhover");
      }
      if (currentinput && currentinput.length > 0) {
        focusinput(currentinput);
      }
      lastkeydown++;
      var lastkeydowninternal = lastkeydown;
      setTimeout(function () {
        if (lastkeydowninternal == lastkeydown) {
          triggeredkeydown = false;
        }
      }, 1000);
    }
  };

  var ekeydownpressed = false;
  var ekeydowncount = 0;
  $("body").on(
    "keydown focus",
    ".jltableouter .tablebody[data-jltableform] input[type][name]:not([type=checkbox],[type=radio],.optinput)",
    function (e) {
      $(this).css("width", $(this).val().length * 14 + "px");
    }
  );
  $("body").on("keydown", "[data-jltableform] [name]", function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40 && e.ctrlKey) {
      e.preventDefault();
      ekeydownpressed = true;
      keydownmovements(e.keyCode, $(this));
      ekeydowncount++;
      var lastekeydownpressedinternal = ekeydowncount;
      setTimeout(function () {
        if (lastekeydownpressedinternal == ekeydowncount) {
          ekeydownpressed = false;
        }
      }, 100);
    }
  });
  $(document).on("keydown", function (e) {
    if (
      e.keyCode >= 37 &&
      e.keyCode <= 40 &&
      e.ctrlKey &&
      ekeydownpressed == false
    ) {
      var cinput = $(".tableformhover:first").find("[name]");
      keydownmovements(e.keyCode, cinput);
    }
  });
  $("body").on("click", ".refreshtable", function (e) {
    if (e.originalEvent) {
      var closest = $(this).closest(".datamanager");
      closest.find(".tablebody[data-json]").binder();
    }
  });

  $("body").on("afterappendcomplete", "[data-jltableform]", function (e, data) {
    if (e.target == e.currentTarget) {
      $(this).jltableform();
      if ($(this).closest(".divtable:visible").length > 0) {
        settableresponsive($(this).closest(".divtable"), true);
      }
      $(window).trigger("resize");
      $(this).find(".editdata").addClass("hidden");
      if (
        $(this)
          .closest(".divtable")
          .find(".tablehead .gridcheck")
          .prop("checked")
      ) {
        $(this)
          .closest(".divtable")
          .find(".tablehead .gridcheck")
          .trigger("change", true);
      }
    }
  });
  $("body").on("afterappendcomplete", "div[data-json]", function (e, data) {
    if (e.target == e.currentTarget) {
      $(this)
        .find("[data-jltableform]:not([data-json]):not([data-jltableforminit])")
        .not($(this).find("[data-json] [data-jltableform]"))
        .jltableform();
    }
  });

  $("body").on(
    "afterappendcomplete",
    "#rightModal [data-jltableform]",
    function (e, data) {
      if (e.target == e.currentTarget) {
        $(window).trigger("resize");
      }
    }
  );
  var openedmodules = {};
  $("body").on(
    "afterappendcomplete",
    "[data-jltableform] select[data-json]",
    function (e, data) {
      if (e.target == e.currentTarget) {
        $(this).removeAttr("data-parent");
        if (
          data.rows &&
          data.rows.Results &&
          data.rows.Results.length == 0 &&
          !openedmodules[$(this).attr("data-module")]
        ) {
          openedmodules[$(this).attr("data-module")] = true;
          ////showmodulemanager($(this).attr("data-module"), "", "");
        }
      }
    }
  );
  $("body").on("click", ".table-row,.table-addnewrow", function (e) {
    $(".showalldetails").not($(this)).removeClass("showalldetails");

    $(this).not(".table-addnewrow").addClass("showalldetails");
  });

  $("body").on("click", ".searchbtn", function (e) {
    e.preventDefault();
    var closest = $(this).closest(".datamanager");
    closest.find(".table-addnewrow,.bulkrow,.duplicaterow").addClass("hidden");

    closest.find(".searchrow").toggleClass("hidden");
    if (closest.find(".searchrow").hasClass("hidden")) {
      closest.find(".searchrow").hide();
    } else {
      closest.find(".searchrow").show();
    }
  });
  $("body").on("click", ".addnewrow", function (e) {
    e.preventDefault();
    var closest = $(this).closest(".datamanager");
    closest.find(".searchrow").addClass("hidden");
    if (closest.find(".table-addnewrow:visible").length == 0) {
      closest.find(".table-addnewrow").removeClass("hidden");
    } else {
      closest.find(".table-addnewrow").addClass("hidden");
    }

    closest.find(".table-addnewrow").trigger("click").removeAttr("style");

    var th = $(this).closest(".tablemenulist");
    th.hide();

    setTimeout(function () {
      th.removeAttr("style");
    }, 500);
  });
  $("body").on("click", ".editrow", function (e) {
    e.preventDefault();
    var action = $(this).closest(".table-cell-actions");
    var closest = $(this).closest("[data-jltableform]");
    var editform = $(closest.attr("data-editform"));
    editform
      .find("[name=" + action.attr("data-keyname") + "]")
      .val(action.attr("data-id"))
      .trigger("change", true);
  });

  $("body").on("click", ".showeditbox", function (e) {
    e.preventDefault();
    var closest = $(this).closest("[data-jltableformrow]");
    closest.find(".viewdata").addClass("hidden");
    closest.find(".editdata").removeClass("hidden");

    $(this).find("i").addClass("fas fa-arrow-left").removeClass("fa fa-pen");
    $(this).addClass("hideeditbox").removeClass("showeditbox");
  });

  $("body").on("click", ".hideeditbox", function (e) {
    e.preventDefault();
    var closest = $(this).closest("[data-jltableformrow]");
    closest.find(".editdata").addClass("hidden");
    closest.find(".viewdata").removeClass("hidden");
    $(this).find("i").removeClass("fas fa-arrow-left").addClass("fa fa-pen");
    $(this).addClass("showeditbox").removeClass("hideeditbox");
  });
  /* $('body').on("mouseover", ".table-row:not(.showalldetails)", function (e) {
        $(".showalldetails").removeClass("showalldetails");
    });*/
  $("body").on("change", ".tablehead .gridcheck", function (e, original) {
    if (e.originalEvent || original) {
      var checked = $(this).prop("checked");
      var closest = $(this).closest(".jltable");
      closest
        .find(".table-row .gridcheck")
        .prop("checked", checked)
        .trigger("change");
    }
  });
  $("body").on("change", ".table-row .gridcheck", function (e) {
    var closestrow = $(this).closest(".table-row");
    var checked = $(this).prop("checked");
    var closest = $(this).closest(".datamanager");
    closestrow.trigger("click");
    closest
      .find(".bulkrow,.duplicaterow")
      .removeClass("hidden")
      .removeAttr("style");
    if (closest.find(".table-row .gridcheck:checked").length == 0) {
      closest.find(".bulkrow,.duplicaterow").addClass("hidden");
    }
    if (e.originalEvent) {
      if (
        closest.find(".table-row .gridcheck").length ==
        closest.find(".table-row .gridcheck:checked").length
      ) {
        closest
          .find(".tablehead .gridcheck")
          .prop("checked", true)
          .trigger("change");
      } else {
        closest
          .find(".tablehead .gridcheck")
          .prop("checked", false)
          .trigger("change");
      }
    }
    if (checked) {
      closestrow.addClass("rowselected");
    } else {
      closestrow.removeClass("rowselected");
    }
  });

  var isoriginalevent = true;
  var scrolli = 0;
  $("body").on("aftercreate", ".datamanager div[data-json]", function (e) {
    if (e.target == e.currentTarget) {
      $(this)
        .closest(".datamanager")
        .scroll(function (e) {
          var th = $(this);
          var clid = th.attr("id");

          ////   converttotstyle(clid + "stylesactioncolumndisplay", "#" + clid + " .divtable > div > div > .actioncolumn", "display", "none");
          ////   converttotstyle(clid + "stylesordercolumndisplay", "#" + clid + " .divtable > div > div > .orderrow", "display", "none");
          ////converttotstyle(clid + "stylestitlecolumnleft", "#" + clid + " .divtable > div > div > .datacolumn:nth-child(2)", "display", "none");
          ////converttotstyle(clid + "stylescheckcolumnleft", "#" + clid + " .divtable > div > div > .datacolumn.checkrow", "display", "none");
          converttotstyle(
            clid + "stylesangleleft",
            "#" + clid + " .leftangle",
            "display",
            "none"
          );
          converttotstyle(
            clid + "stylesangleright",
            "#" + clid + " .rightangle",
            "display",
            "none"
          );
          scrolli++;
          var localscrolli = scrolli;

          setTimeout(function () {
            if (localscrolli === scrolli) {
              scrollAlignment(th.find(".divtable"));
              isoriginalevent = true;
            }
          }, 100);
        });
    }
  });
  $("body").on("click", ".leftangle", function (e) {
    isoriginalevent = false;
    var th = $(this);
    ////var clid = th.closest(".datamanager").attr("id");
    var checkcolumnfirsttotalwidth = th
      .find(".tablehead .checkrow:first")
      .outerWidth();

    var outerwidthoflastcolumn = th
      .closest(".datamanager")
      .find(".actioncolumn:first")
      .outerWidth();

    var outerwidthoffirstcolumn =
      th.closest(".datamanager").find(".titlecolumn:first").outerWidth() + 20;
    if (checkcolumnfirsttotalwidth) {
      outerwidthoffirstcolumn += checkcolumnfirsttotalwidth;
    }
    var outertotalwidth = th.closest(".datamanager").outerWidth();
    var scrollto =
      outertotalwidth - outerwidthoflastcolumn - outerwidthoffirstcolumn;
    var leftscroll = th.closest(".datamanager").scrollLeft();

    if (leftscroll - scrollto < 0) {
      scrollto = leftscroll;
    }
    th.closest(".datamanager").animate(
      {
        scrollLeft: leftscroll - scrollto,
      },
      1300,
      function () {}
    );
  });
  $("body").on("click", ".rightangle", function (e) {
    isoriginalevent = false;
    var th = $(this);
    ////var clid = th.closest(".datamanager").attr("id");
    var scrollwidth = th.closest(".datamanager").get(0).scrollWidth;
    var outerwidthoflastcolumn =
      th.closest(".datamanager").find(".actioncolumn:first").outerWidth() + 50;
    var outerwidthoffirstcolumn =
      th.closest(".datamanager").find(".titlecolumn:first").outerWidth() + 50;
    var outertotalwidth = th.closest(".datamanager").outerWidth();
    var scrollto =
      outertotalwidth - outerwidthoflastcolumn - outerwidthoffirstcolumn;
    var leftscroll = th.closest(".datamanager").scrollLeft();

    if (
      leftscroll + scrollto >=
      scrollwidth - outertotalwidth + outerwidthoflastcolumn
    ) {
      scrollto = scrollwidth - outertotalwidth + outerwidthoflastcolumn;
    }

    th.closest(".datamanager").animate(
      {
        scrollLeft: leftscroll + scrollto,
      },
      1300,
      function () {}
    );
  });

  var resizei = 0;
  $(window).on("resize", function (e) {
    resizei++;
    var localresizei = resizei;
    var th = $(this);
    setTimeout(function () {
      if (localresizei == resizei) {
        adjustModalSize();
        $(".divtable:visible").each(function () {
          settableresponsive($(this));
        });
      }
    }, 500);
  });
  $(window).trigger("resize");

  $("body").on("click", "[data-modal]", function () {
    var modalname = $(this).attr("data-modal");
    var modalfilter = $(this).attr("data-modalfilter");

    $(modalname).find("[data-json]").attr("data-filterby-inline", modalfilter);
    //// showmodulemanager(modulename, keyname, value);
    $("#rightModal").show();
    $("body").css("overflow-y", "hidden");
    $(modalname).find("[data-json]").binder();
  });
  $("#rightModal").on("hidden.bs.modal", function () {
    $("body").css("overflow-y", "scroll");
  });
  $("body")
    .find("[data-jltableform]:not([data-json]):not([data-jltableforminit])")
    .not($(this).find("[data-json] [data-jltableform]"))
    .jltableform();

  var mt = $.fn.jltableform.methods;
  $("body").on(
    "keydown",
    "[data-jltableform] .table-row input[name]",
    function (e) {
      var t = $(this).closest("[data-jltableform]");
      if (
        $(this).closest("[data-jltableformrow]").find(".saverow").length > 0
      ) {
        return false;
      }

      if (e.keyCode == 13 && e.originalEvent) {
        e.preventDefault();
        e.stopImmediatePropagation();
        mt.saveform(t, $(this));
      }
    }
  );
  $("body").on(
    "change",
    "[data-jltableform] .table-row [name]",
    function (e, force) {
      var t = $(this).closest("[data-jltableform]");
      if (
        $(this).closest("[data-jltableformrow]").find(".saverow").length > 0
      ) {
        return false;
      }

      e.stopImmediatePropagation();
      if (e.originalEvent || force) {
        mt.saveform(t, $(this));
      }
    }
  );
  ////$('body').on('blur',
  ////     '[data-jltableform] .table-row select[name]',
  ////    function (e) {
  ////        var t = $(this).closest("[data-jltableformrow]");
  ////        if ($(this).closest("[data-jltableformrow]").find(".saverow").length > 0) {
  ////            return false;
  ////        }

  ////        e.stopImmediatePropagation();
  ////        if (e.originalEvent) {
  ////            mt.saveform(t, $(this));
  ////        }
  ////    });

  $("body").on(
    "keydown",
    "[data-jltableform] .table-addnewrow [name]",
    function (e) {
      var t = $(this).closest("[data-jltableform]");
      if (
        $(this).closest("[data-jltableformrow]").find(".saverow").length > 0
      ) {
        return false;
      }

      if (e.keyCode == 13 && e.originalEvent) {
        e.preventDefault();
        e.stopImmediatePropagation();
        mt.saveform(t, $(this), true);
      }
    }
  );
  $("body").on("click", "[data-jltableform] .addrow", function (e, force) {
    var t = $(this).closest("[data-jltableform]");
    e.stopImmediatePropagation();
    if (e.originalEvent || force) {
      mt.saveform(t, $(this), true);
    }
  });
  $("body").on("click", "[data-jltableform] .saverow", function (e, force) {
    var t = $(this).closest("[data-jltableform]");
    e.stopImmediatePropagation();
    if (e.originalEvent || force) {
      mt.saveform(t, $(this), true);
    }
  });
  var f = $(this);

  $("body").on(
    "click",
    "[data-jltableform] .table-row .deleterow",
    function (e) {
      e.stopImmediatePropagation();
      var f = $(this).closest("[data-jltableformrow]");
      var cl = $(this).closest("[data-jltableform]");
      if (e.originalEvent) {
        var method = "delete";
        var action = cl.attr("data-deleteaction");

        var th = $(this);
        jldeleterow(f, th, action);
      }
    }
  );

  $("body").on(
    "change",
    "[data-jltableform] .bulkrow .form-control[name]",
    function (e) {
      var t = $(this).closest("[data-jltableform]");
      e.stopImmediatePropagation();
      if (e.originalEvent) {
        var name = $(this).attr("name");
        var value = $(this).val();
        var closest = $(this).closest(".jltable");

        closest.find(".table-row .gridcheck:checked").each(function () {
          var formrow = $(this).closest("[data-jltableformrow]");
          ////formrow.trigger("click");
          var th = $(this);
          if (formrow.find("[name='" + name + "']").val() != value) {
            formrow
              .find("[name='" + name + "']")
              .val(value)
              .trigger("change", true);
            ///// mt.saveform(t, th, false, true);
          }
        });
      }
    }
  );
  $("body").on(
    "click",
    "[data-jltableform] .duplicaterow .duplicaterowbtn",
    function (e) {
      e.stopImmediatePropagation();
      var t = $(this).closest("[data-jltableform]");

      if (e.originalEvent) {
        var closest = $(this).closest(".jltable");
        var closestrow = $(this).closest(".duplicaterow");
        closestrow.find(".form-control").each(function () {
          if ($(this).val()) {
            var name = $(this).attr("name");
            var value = $(this).val();
            closest.find(".table-row .gridcheck:checked").each(function () {
              var formrow = $(this).closest("[data-jltableformrow]");
              formrow.find("[name='" + name + "']").val(value);
              $(this)
                .closest("[data-jltableformrow]")
                .find(".actioncolumn .form-control")
                .val("");
            });
          }
        });
        closest.find(".table-row .gridcheck:checked").each(function () {
          if (
            !$(this)
              .closest("[data-jltableformrow]")
              .find(".actioncolumn .form-control")
              .val()
          ) {
            var th = $(this);
            mt.saveform(t, th, false, true);
          }
        });
      }
    }
  );

  $("body").on("click", "[data-jltableform] .bulkrow .deleterow", function (e) {
    e.stopImmediatePropagation();
    if (e.originalEvent) {
      var f = $(this).closest("[data-jltableformrow]");
      var t = $(this).closest("[data-jltableform]");
      var method = f.attr("data-method") ? f.attr("data-method") : "post";
      var action = t.attr("data-deleteaction").replace("Delete", "DeleteAll");
      var postdata = {};
      var closest = $(this).closest(".jltable");
      postdata.formdata = {};
      postdata.formdata.models = [];

      alert(
        "Are you sure to delete selected data?",
        function () {
          closest.find(".table-row .gridcheck:checked").each(function () {
            var deletebykey = $(this)
              .closest(".table-row")
              .find(".table-cell-actions")
              .attr("data-keyname");
            var deletebyvalue = $(this)
              .closest(".table-row")
              .find(".table-cell-actions")
              .attr("data-id");
            var th = $(this);
            postdata.formdata = {};
            postdata.formdata[deletebykey] = deletebyvalue;
            f.trigger("beforedeletetableform", postdata);
            let token = JSON.parse(localStorage.getItem("user"))
              ? JSON.parse(localStorage.getItem("user")).token
              : "";
            let headers = { Authorization: "Bearer " + token };
            $.ajax({
              url: action,
              type: "DELETE",
              headers: headers,
              success: function (data) {
                remsession("bindmanagercache");
                if (data && data.Results) {
                  alert("Deleted successfully, please reload results");
                  var callbinderobjects = $("#fakeitem");
                  if (f.attr("data-deleteaction")) {
                    callbinderobjects = $(
                      "[data-json='" +
                        f.attr("data-deleteaction").replace(/Remove/i, "Get") +
                        "']"
                    );
                  }

                  if (
                    f.attr("data-updatebinder") &&
                    $(f.attr("data-updatebinder")).binder
                  ) {
                    callbinderobjects = callbinderobjects.add(
                      $(f.attr("data-updatebinder"))
                    );
                  }
                  callbinderobjects = callbinderobjects.not(f);
                  th.closest(".table-row").remove();
                } else {
                  alert("Can't deleteit, because it using in somewhere");
                }
              },
              data: postdata.formdata,
            });
          }); ////callbinderobjects.binder();
        },
        false,
        "Deleteit",
        "c"
      );
    }
  });
});
