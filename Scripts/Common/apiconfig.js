var webApiUrl = $("#WebApiUrl").val();
var rootUrl = $("#RootUrl").val();
var ZeroValue = $("#NullValue").val();

if (getcache("EncValue")) {
  if (getcache("EncValue") != ZeroValue) {
    remcache("bindmanagercache");
  }
}
setcache("EncValue", ZeroValue);

$(window).on("updatejldefaults", function () {
  $.fn.binder.methods.defaults.nullvalue = ZeroValue;
});

function hideunlclosedspinners() {
  $(".spinnerbox").each(function () {
    if ($('[data-spinnerid="' + $(this).attr("id") + '"]').length == 0) {
      $(this).remove();
    }
  });
}

function showspinner(el) {
  hideunlclosedspinners();
  var html = $(spinnerHtml);
  if (!el) {
    el = $("body");
  }
  el.append(html[0].outerHTML);
  el.find(".spinnerbox").show();
  /////setTimeout(function() {

  /////},100);
}

function hidespinner(el) {
  hideunlclosedspinners();
  if (!el) {
    el = $("body");
  }
  $(".spinnerboxglobal .spinnerbox").hide();
  el.find(".spinnerbox")
    .not(
      el.find("[data-json] .spinnerbox").add($(".spinnerboxglobal .spinnerbox"))
    )
    .remove();
}

var loaderid = 0;

function alignspinner(el, sp, isInnerloader) {
  var p = el.offset();
  var loaderkey = "loaderi" + loaderid;
  if (!el.attr("data-spinnerid")) {
    el.attr("data-spinnerid", loaderkey);
  } else {
    loaderkey = el.attr("data-spinnerid");
  }
  sp.attr("id", loaderkey);
  loaderid++;
  if (!isInnerloader) {
    sp.css("position", "absolute");
    sp.css("top", p.top);
    sp.css("left", p.left);
    sp.css("width", el.width());
    sp.css("height", el.height());
    sp.css("min-height", "30px");
  }
  sp.show();
  return sp;
}
function getcl(el, isInnerloader) {
  if (el.length > 0) {
    var cl = el.parent();
    if (el.prop("tagName") == "DIV" && el.attr("data-json")) {
      cl = el;

      if (!$(this).attr("data-jltableform")) {
        if ($(this).hasClass("tablebody")) {
          ///// cl = b;
          isInnerloader = false;
        }
      } else {
      }
    } else {
    }
    return { cl: cl, isInnerloader: isInnerloader };
  }
}
function showprogressbar() {
  $(".header").addClass("progressanimation");
}

function hideprogressbar() {
  setTimeout(function () {
    $(".header").removeClass("progressanimation");
  }, 1000);
}

function showabsolutespinner(el) {
  var sp = $(spinnerHtml);

  var cldetails = getcl(el, true);
  var cl = cldetails.cl;
  var isInnerloader = cldetails.isInnerloader;
  if (isInnerloader) {
    cl.css("position", "relative");
    sp.attr("data-static", true);
  }

  sp = alignspinner(el, sp, isInnerloader);
  cl.append(sp);
  sp.show();
  if (!isInnerloader) {
    var maxLimit = 200;
    var maxLimiti = 0;
    var sInterval = setInterval(function () {
      maxLimiti++;
      if (el.attr("data-spinnerid") && maxLimiti < maxLimit) {
        alignspinner(el, sp);
      } else {
        hideabsolutespinner(sp);
        clearInterval(sInterval);
      }
    }, 500);
  }
  hideunlclosedspinners();
}

function hideabsolutespinner(el) {
  var cldetails = getcl(el, true);
  var cl = cldetails.cl;
  var isInnerloader = cldetails.isInnerloader;
  cl.css("position", "");
  $("#" + el.attr("data-spinnerid")).remove();
  el.removeAttr("data-spinnerid");
  hideunlclosedspinners();
}

var disableapiurl = false;
var spinnerHtml = "";
$(function () {
  if ($(".spinnerbox").length > 0) {
    spinnerHtml = $(".spinnerbox")[0].outerHTML;
    $(".spinnerbox").remove();
    var browserText = "";
    var chrome = navigator.userAgent.indexOf("Chrome") > -1;
    var explorer = navigator.userAgent.indexOf("MSIE") > -1;
    var firefox = navigator.userAgent.indexOf("Firefox") > -1;
    var safari = navigator.userAgent.indexOf("Safari") > -1;
    var camino = navigator.userAgent.indexOf("Camino") > -1;
    var edge = navigator.userAgent.toLowerCase().indexOf("edg") > -1;
    var opera = navigator.userAgent.toLowerCase().indexOf("opr") > -1;
    var appleWebKit = navigator.userAgent.indexOf("AppleWebKit") > -1;
    if (chrome && safari) safari = false;
    if (chrome && opera) chrome = false;
    if (/CriOS/i.test(navigator.userAgent)) {
      chrome = true;
    }

    if (opera) {
      browserText = "Opera";
      chrome = false;
    }

    if (firefox) {
      browserText = "Firefox";
      chrome = false;
    }

    if (edge) {
      browserText = "Edge";
      chrome = false;
    }

    if (!chrome && !firefox && !edge && !safari) {
      alert(
        "Sorry, We are not supporting this browser, Please use Google Chrome Latest Version to use eTalenter. <a href='https://www.google.com/chrome/' >Download Now/Update</a><b/>. Currently You are using " +
          (browserText ? browserText + " - " : "") +
          navigator.userAgent,
        false,
        false,
        false,
        "w",
        200000
      );
    } else {
      $("#googlelogin")
        .parent()
        .append(
          "<div class='text-center' style='font-size:10px'>We suport this browser: " +
            navigator.userAgent +
            "</div>"
        );
    }

    $("body").on("click", "#spinnerboxclose", function (e, data) {
      $(this).closest(".spinnerbox").remove();
    });
    $("body").on(
      "beforesavetablerow",
      "[data-jltableformrow]",
      function (e, data) {
        if (e.target == e.currentTarget) {
          showabsolutespinner($(this));
        }
      }
    );
    $("body").on(
      "aftersavetablerow",
      "[data-jltableformrow]",
      function (e, data) {
        if (e.target == e.currentTarget) {
          hideabsolutespinner($(this));
        }
      }
    );

    $("body").on(
      "beforemakerequestdata",
      "[data-json]:not(.optdiv)",
      function (e, data) {
        if (e.target == e.currentTarget) {
          showabsolutespinner($(this));
        }
      }
    );

    $("body").on(
      "afterappendcomplete",
      "[data-json]:not(.optdiv)",
      function (e, data) {
        if (e.target == e.currentTarget) {
          hideabsolutespinner($(this));
        }
      }
    );
    $("body").on(
      "afterrequest",
      "[data-json]:not(.optdiv)",
      function (e, data) {
        if (e.target == e.currentTarget) {
          hideabsolutespinner($(this));
        }
      }
    );
    var requestListCount = 0;
    $.ajaxSetup({
      async: true,
      cache: true,
      crossDomain: true,
      beforeSend: function (req, settings) {
        if ($(".spinnerbox:visible").length == 0) {
          //$(".cycle_container").addClass("hidden");
          //$(".cycle_container").removeAttr("style");
          //$(".cycle_container").removeClass("hidden");
          setTimeout(function () {
            if ($(".spinnerbox:visible").length == 0) {
              //$(".cycle_container").removeClass("hidden");
              //$(".cycle_container").css("left", "100%");
            }
          }, 100);
        }
        console.log({ settings: settings });
        if(window.location.href.indexOf("localhost") >-1){
          settings.url = "http://localhost:8888" + settings.url;
        }
        else if(window.location.href.indexOf("http")>-1){
          settings.url = "https://etalenterapi.azurewebsites.net" + settings.url;
        }



        if (settings.type && settings.type.toLowerCase() != "get") {
          requestListCount++;
          if (!disableapiurl) {
            if (settings.url.indexOf("http") != -1) {
              if (webApiUrl) {
                settings.url = settings.url.trim("/");
              }
            } else {
              if (webApiUrl) {
                settings.url = settings.url.trim("/");
                settings.url = webApiUrl + settings.url;
              }
            }
          }
        }
        disableapiurl = false;
      },
      complete: function (xhr) {
        requestListCount--;
        if (requestListCount == 0) {
          ///// $(".spinnerboxglobal .spinnerbox").hide().parent().addClass("hidden");
        }

        if (xhr.statusText == "ReLogin") {
          window.location.href = $("#LoginUrl").val();
        }
        // hide dialog // works
      },
    });
  }
  $(document).ready(function () {
    if (requestListCount == 0) {
      $(".spinnerboxglobal .spinnerbox").hide().parent().addClass("hidden");
    }
  });
  $("body").on(
    "change blur keyup",
    "[data-showonvalue],[data-hideonvalue]",
    function () {
      var value = $(this).val();
      if (value != ZeroValue) {
        $($(this).attr("data-showonvalue")).show();
        $($(this).attr("data-hideonvalue")).hide();
      } else {
        $($(this).attr("data-showonvalue")).hide();
        $($(this).attr("data-hideonvalue")).show();
      }
    }
  );

  ////$("body").on("click", ".logout", function (e) {
  ////    e.preventDefault();
  ////    $.get($(this).attr("href"), (function () {
  ////        window.location.href = rootUrl;
  ////    }));
  ////});
  $("body").on("click", "#usersrolesmenulist .changerolemenu", function () {
    var postdata = {};
    postdata.Filterby = [];
    postdata.Filterby.push({
      key: "UserRoleId",
      value: $(this).attr("data-role"),
    });
    remsession("bindmanagercache");
    $.post("ChangeRole", postdata, function () {
      window.location.href = "/";
    });
  });
  $("body").on("click", "#menuaccordion .navigationlink", function (e) {
    var link = $(this).attr("href");
    if (link && link != "#") {
      var role = $(this).closest(".panel-menu").attr("data-roleid");
      if (role != $("#filterbyuserroleid").val()) {
        e.preventDefault();
        var postdata = {};
        postdata.Filterby = [];

        postdata.Filterby.push({
          key: "UserRoleId",
          value: $(this).closest(".panel-menu").attr("data-roleid"),
        });
        $.post("ChangeRole", postdata, function () {
          window.location.href = link;
        });
      }
    }
  });

  if (window.Worker) {
    var myWorker = new Worker("/Scripts/Worker/jlworker.js");
    var workercallbacksi = 0;
    var workercallbacks = {};
    $.jQuerypost = $.post;
    $.post = function (url, data, callback) {
      if (
        url.indexOf("save") > -1 ||
        url.indexOf("update") > -1 ||
        url.indexOf("delete") > -1 ||
        url.indexOf("create") > -1 ||
        url.indexOf("add") > -1 ||
        url.indexOf("remove") > -1
      ) {
        remsession("bindmanagercache");
      }

      if ($.ajaxSettings.enctype == "multipart/form-data") {
        return $.jQuerypost(url, data, callback);
      } else {
        if ($(".spinnerbox:visible").length == 0) {
          $(".cycle_container").addClass("hidden");
          $(".cycle_container").removeAttr("style");
          $(".cycle_container").removeClass("hidden");
          setTimeout(function () {
            if ($(".spinnerbox:visible").length == 0) {
              $(".cycle_container").removeClass("hidden");
              $(".cycle_container").css("left", "100%");
            }
          }, 100);
        }
        requestListCount++;
        workercallbacksi++;
        let token = JSON.parse(localStorage.getItem("user"))
          ? JSON.parse(localStorage.getItem("user")).token
          : "";
        let headers = { Authorization: "Bearer " + token };

        if (url.indexOf("http") !== -1) {
          workercallbacks["get" + workercallbacksi] = function (results) {
            requestListCount--;
            callback(results);
          };
          var requestUrl = url;

          myWorker.postMessage([
            "get",
            window.JSONstringify({
              url: requestUrl,
              data: data,
              headers: headers,
              workercallbacksi: workercallbacksi,
            }),
          ]);
        } else {
          workercallbacks["post" + workercallbacksi] = function (results) {
            requestListCount--;
            callback(results);
          };
          var requestUrl = webApiUrl + url;
          requestUrl = requestUrl.replace("/api/", "");
          if(window.location.href.indexOf("localhost") > -1){
            if(requestUrl.indexOf("http") == -1){
              requestUrl = "http://localhost:8888" + requestUrl;
            }
          } else if(requestUrl.indexOf("http") == -1){
            requestUrl = "https://etalenterapi.azurewebsites.net" + requestUrl;
          }

          myWorker.postMessage([
            "post",
            window.JSONstringify({
              url: requestUrl,
              data: data,
              headers: headers,
              workercallbacksi: workercallbacksi,
            }),
          ]);
        }
      }
      return this;
    };
    $.fail = function (xhr, status, error) {
      ////$(".spinnerbox").not($(".spinnerboxglobal .spinnerbox")).remove();
      ////if ($(".spinnerboxglobal .spinnerbox:visible").length > 0) {
      ////    alert("Sorry Network Error Occured, Try again", false, false, false, "w");
      ////    $(".spinnerboxglobal .spinnerbox").hide().parent().addClass("hidden");
      ////}
    };
    myWorker.onmessage = function (event) {
      var parameters =
        event.data.split("{").length > 1 ? JSON.parse(event.data) : event.data;
      var task = parameters.task;
      switch (task) {
        case "post": {
          if (workercallbacks["post" + parameters.workercallbacksi]) {
            workercallbacks["post" + parameters.workercallbacksi](
              parameters.results
            );
            if (requestListCount == 0) {
              $(".spinnerboxglobal .spinnerbox")
                .hide()
                .parent()
                .addClass("hidden");
            }
          }
          break;
        }
        case "get": {
          if (workercallbacks["get" + parameters.workercallbacksi]) {
            workercallbacks["get" + parameters.workercallbacksi](
              parameters.results
            );
            if (requestListCount == 0) {
              $(".spinnerboxglobal .spinnerbox")
                .hide()
                .parent()
                .addClass("hidden");
            }
          }
          break;
        }
        case "postfail": {
          if (workercallbacks["post" + parameters.workercallbacksi]) {
            requestListCount--;
            $(".animatedbackground").removeClass("animatedbackground");
            $(".spinnerboxglobal .spinnerbox")
              .hide()
              .parent()
              .addClass("hidden");
            $(".spinnerbox").not($(".spinnerboxglobal .spinnerbox")).remove();

            if (parameters.failObject.xhr.status == 400) {
              if (
                parameters.failObject.xhr.responseText?.indexOf(
                  "alternative details exists"
                ) > -1
              ) {
                alert(
                  "Sorry, The alternative details already exists or its already been added to the system",
                  false,
                  false,
                  false,
                  "w"
                );
              } else {
                alert(
                  "You are not permitted to access this function",
                  false,
                  false,
                  false,
                  "w"
                );
              }
            } else if (parameters.failObject.xhr.status == 400) {
              alert(
                "Sorry Network Error Occured, Try again",
                false,
                false,
                false,
                "w"
              );
            }
          }
          break;
        }
      }
    };
  }
});

/*
 * JL Routing
 */

/*
 * JL Routing Ends
 */
