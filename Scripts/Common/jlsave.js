/*
MIT License
Copyright (c) 2017 JavscriptLab https://github.com/JavscriptLab
*/

"use strict";
$.ajaxSetup({
  cache: false,
});
$.fn.save = function (opt) {
  var t = $(this);
  if (!t.attr("id")) {
    t.attr("id", "Id" + new Date().getTime());
  }
  t.attr("novalidate", "novalidate");
  var tid = t.attr("id");
  var stn = $.extend({}, $.fn.save.defaults);
  var kv = $.fn.save.keys;
  var mt = $.extend($.fn.save.date, $.fn.save.methods);
  if (typeof opt == "object") {
    {
      stn = $.extend(stn, opt);
    }
  }
  t.removeAttr("data-ajax");
  if (!t.attr("data-saveinit")) {
    t.attr("data-save", true);
    t.attr("data-formeventof" + tid, true);
  }
  return $(this);
};
$.fn.save.methods = {
  saveform: function (e, f) {
    var method = f.attr("method");
    var action = f.attr("action");
    var formdata = {};
    if (f.attr("enctype")) {
      formdata = new FormData(f.get(0));
      $.ajaxSetup({
        enctype: "multipart/form-data",
        processData: false,
        contentType: false,
        async: false,
        cache: false,
      });
    } else {
      formdata = f.serializeArray();
    }
    if (window.submitform(f)) {
      f.trigger("beforesave", formdata);
      $[method](action, formdata, function (data) {
        remsession("bindmanagercache");
        if (f.attr("enctype")) {
          $.ajaxSetup({
            processData: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            async: true,
            cache: true,
          });
        }

        if (
          data.ModelState &&
          data.ModelState &&
          data.ModelState.SecurityValidations &&
          data.ModelState.SecurityValidations.length > 0
        ) {
          $.each(data.ModelState.SecurityValidations, function (i, v) {
            alert(v, false, false, "SecurityValidations", "w");
          });
        } else {
          if (
            f.attr("data-ajax-success") &&
            window[f.attr("data-ajax-success").split("(")[0]]
          ) {
            window[f.attr("data-ajax-success").split("(")[0]](data);
          }
          if (
            f.attr("data-updatebinder") &&
            $(f.attr("data-updatebinder")).binder
          ) {
            $(f.attr("data-updatebinder")).each(function () {
              $.binder.clear($(this));
            });
            $(f.attr("data-updatebinder")).each(function () {
              $.binder.reload($(this));
            });
          }
          f.trigger("aftersave", data);
          f.find(".moreouterdiv").trigger("aftersavemultirows", data);
          if (f.attr("data-successmessage")) {
            var message = f.attr("data-successmessage");

            alert(message);
          }
        }
      });
    }
  },
};
$.fn.save.keys = {};
$.fn.save.defaults = {};
$(document).on("pageload", function () {
  $(".addnewbutton").each(function () {
    $($(this).attr("data-target")).hide();
  });
});
function hideNewBox(th) {
  th.find("i").removeClass("fa-times").addClass("fa-plus");
  th.find("span").text("Add New");
  th.removeClass("btn-warning");
  th.addClass("btn-success");
  $(th.attr("data-target")).hide();
}
function showNewBox(th) {
  th.find("i").removeClass("fa-plus").addClass("fa-times");
  th.find("span").text("Hide New Box");
  $(th.attr("data-target")).show();
  th.addClass("btn-warning");
  th.removeClass("btn-success");
}

$("body").on("click", ".addnewbutton", function () {
  if ($(this).find("i").hasClass("fa-plus")) {
    showNewBox($(this));
  } else {
    hideNewBox($(this));
  }
});
$("body").on("afterappendcomplete", "div[data-json]", function (e, data) {
  if (e.target == e.currentTarget && data.rows && data.rows.Results) {
    var id = $("[data-updatebinder='#" + $(this).attr("id") + "']").attr("id");
    var element;
    if (data.rows.Results.length > 0) {
      element = $("[data-target='#" + id + "']");
      hideNewBox(element);
    } else {
      ////data-binderinit-click=".addnewbutton"

      element = $("[data-target='#" + id + "']");
      element.trigger("click", true);
      showNewBox(element);
    }
  }
});
$(document).ready(function () {
  $("body").on("submit", "[data-save]", function (e) {
    e.preventDefault();
    var f = $(this);
    if (
      f.find("[type=submit]").length !=
      f.find("[type=submit]:not(.disabled)").length
    ) {
      return false;
    }
    f.save();
    var mt = $.fn.save.methods;
    mt.saveform(e, f);
  });
  $("[data-save]").each(function () {
    $(this).save();
  });
});
