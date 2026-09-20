$(document).ready(function () {
  $("[data-htmltemplate]").each(function () {
    if (!htmlTemplatesList[$(this).attr("data-htmltemplate")]) {
      $($(this).attr("data-htmltemplate")).addClass("hidden");
      htmlTemplatesList[$(this).attr("data-htmltemplate")] = $(
        $(this).attr("data-htmltemplate")
      )[0].outerHTML;
      $($(this).attr("data-htmltemplate")).remove();
    }
  });
});

$("body").on("click", "[data-tab]", function (e) {
  e.preventDefault();
  $(this).closest(".nav-tabs").find("[data-tab]").removeClass("active");
  $(this).addClass("active");
  var tc = $(this).closest(".tab-content").find($(this).attr("data-tab"));

  $(this)
    .closest(".tab-content")
    .find(".tab-pane")
    .not($(this).closest(".tab-content").find(".tab-content").find(".tab-pane"))
    .removeClass("active");

  tc.addClass("active");
  if (
    tc.attr("data-htmltemplate") &&
    (!tc.attr("data-templateused") || e.originalEvent)
  ) {
    if (htmlTemplatesList[tc.attr("data-htmltemplate")]) {
      $(
        "[data-htmltemplate='" +
          tc.attr("data-htmltemplate") +
          "'][data-templateused]"
      ).html("");
      tc.html(htmlTemplatesList[tc.attr("data-htmltemplate")]);

      tc.attr("data-templateused", true);
      tc.children().removeClass("hidden");
      var last = $("[data-htmltemplate]").last();

      $("[data-dependactivelelement]").each(function () {
        var value = $($(this).attr("data-dependactivelelement"))
          .filter(".active")
          .attr("data-value");
        if (value != ZeroValue && $(this).prop("tagName") == "SELECT") {
          $(this).parent().parent().hide();
        }

        $(this)
          .val(value)
          .attr("data-value", value)
          .attr("data-forcesetvalue", true);
      });
      $("[data-dependvalue]").each(function () {
        $(this).val($($(this).attr("data-dependvalue")).val());
      });
      tc.find("[data-save]").each(function () {
        $(this).save();
      });
      var el = tc
        .find("[data-json]")
        .not(tc.find("[data-json] [data-htmltemplate] [data-json]"));
      el.each(function () {
        if ($(this).attr("id") == "CompetitionStructurelist") {
          ////
        }
        $.binder.reload($(this));
      });
    }
  }
});

$("body").on("click", "#contentboxbody .hideeditbox", function (e, data) {
  /**
         * $(".nav-tabs").each(function() {
                        var el = cl.find("[data-json='" + $(this).attr("data-json") + "']");
                        var value = el.attr("data-value");
                        var order = $(this).find("li[data-value=" + value + "]").attr("data-order");
         */
  var cl = $(this).closest(".table-row");
  cl.find("input[name=Order]").each(function () {
    var orderString = "";
    if (cl.length > 0) {
      cl.find("select").each(function () {
        var el = $(this).find("option:selected");
        var order = el.attr("data-order");
        if (order) {
          orderString += order.toString();
        }
      });
    }
    if (!$(this).val() || $(this).val() == "0") {
      $(this).val(orderString).trigger("change", true);
    }
  });
});
$("body").on(
  "afterappendcomplete",
  "#contentboxbody .tab-content > .nav-tabs[data-json],.tab-content > .tab-pane-box[data-json]",
  function (e, data) {
    if (e.target == e.currentTarget) {
      var el = $(this)
        .closest(".tab-content")
        .find("li[data-tab]")
        .not($(this).closest(".tab-content").find(".tab-content li[data-tab]"));
      if (!el.first().hasClass("active")) {
        el.first().trigger("click");
      }
    }
  }
);
