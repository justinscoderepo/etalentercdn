// //setcache("allowbeta", false)
// remcache("allowbeta")
// var convertLinkToHashLink = function () {
//     $("form,a").each(function () {
//         var link = "";
//
//         if ($(this).attr("action") && !$(this).attr("data-save")) {
//             $(this).addClass("dynamicform");
//             ////link = $(this).attr("action");
//         } else if ($(this).attr("href")) {
//             link = $(this).attr("href");
//         }
//
//         let matchItem = hardloadPages.find(x => link.indexOf(x) !== -1);
//         if (matchItem) {
//             return
//         }
//
//         if (link.indexOf('/#/') === -1 && link && link.charAt(0) != "/#" && link.charAt(0) != "#" && !link.startsWith("http") && !link.startsWith("javascript")) {
//             link = "/#" + link;
//         }
//         if (link) {
//             if ($(this).attr("action")) {
//                 $(this).attr("action", link);
//             } else if ($(this).attr("href")) {
//                 $(this).attr("href", link);
//             }
//         }
//     });
// }
//
// $("body").on("submit",
//     "form.dynamicform",
//     function (e) {
//         if (!$(this).attr("data-save")) {
//             if ($(this).attr("method") == "post") {
//                 e.preventDefault();
//                 var postData = $(this).serializeArray();
//                 disableapiurl = true;
//                 var path = $(this).attr("action");
//                 $.ajax({
//                     url: path,
//                     headers: {
//                         "X-Requested-With": "XMLHttpRequest"
//                     },
//                     data: postData,
//                     method: "POST",
//                     success: function (html) {
//
//                         RenderHtml(html);
//
//                     }
//                 });
//             }
//         }
//
//     });
// var lastMenuRequest = "";
//
// function appendFinalHTML(h) {
//     $("#contentboxbody").html(h.find("#bodyBox").html());
//     setTimeout(function () {
//
//             $("#contentboxbody").css("height", "100%");
//             setTimeout(function () {
//                     $("#contentboxbody > div > .box").css("min-height", "100vh");
//                     $("#contentboxbody .pageloadingcontent").remove();
//                     $("#contentboxbody").css("height", "auto");
//
//                     $("body").height("auto");
//                 },
//                 500);
//         },
//         500);
//     var length = h.find("#ScriptBox script[src]").length;
//     var li = 0;
//
//     $(document).trigger("pageload");
//
//     loadscript(h, length, 0);
//
//     if (length == 0) {
//         initializeScript(h);
//     }
// }
//
// function RenderHtml(html) {
//     htmlTemplatesList = {};
//     bindmanager.htmltemplates = {};
//     bindmanager.settings = {};
//     bindmanager.initevents = {};
//     bindmanager.htmltemplatewrappers = {};
//     bindmanager.cache = {};
//     bindmanager.cachequeue = {};
//
//     var h = $(html);
//     $("body").find(".lastelement").nextAll().not("script").remove();
//
//     $("head").find(".lastelement").nextAll().not(".permanentstyles,[data-source]").remove();
//     ////$("#contentboxbody").remove();
//
//     ////$("#contentbox").append('<div class="col-xs-50" id="contentboxbody"></div>');
//     $("#eventManagerBox").html("");
//     $("script[src]").each(function () {
//         h.find("script[src='" + $(this).attr("src") + "']").remove();
//     });
//     $("link[href]").each(function () {
//         h.find("link[href='" + $(this).attr("href") + "']").remove();
//     });
//
//     $("#eventManagerBox").html(h.find("#eventManagerBox").html());
//     $("head").append(h.find("#styleBox").html());
//     if (h.find("#sitenametitleinput").val()) {
//         $(".sitenametitle").attr("src", h.find("#sitenametitleinput").val());
//     }
//
//
//     $("#LayoutDesignerBox").append(h.find("#LayoutDesignerBox").html());
//
//
//     if (window.location.hash != h.find("#currentPath").text() && !window.location.hash.startsWith(h.find("#currentPath").text())) {
//         window.location.hash = h.find("#currentPath").text();
//     }
//
//
//     $("title").text(h.find("#title").text());
//     if (h.find("#userRoleTitle").length > 0) {
//         $(".open-nav").show();
//         var roleName = h.find("#userRoleTitle").text();
//         $("#userNameTitle").html(roleName);
//         $("body").addClass(roleName);
//         $("#userNameTitle").html(h.find("#userNameTitle").text());
//         $(".logineditems").show();
//         $(".loginitems").hide();
//         var queryparams = "";
//
//         if (h.find("#AjaxEventCategory").length > 0) {
//             queryparams += "/" + h.find("#AjaxEventCategory").text();
//             if (h.find("#AjaxEventId").length > 0) {
//                 queryparams += "/" + h.find("#AjaxEventId").text();
//             } else {
//                 queryparams += "/0";
//             }
//         }
//
//
//         Role = h.find("#userRoleTitle").text();
//
//         if (Role) {
//             queryparams += "?role=" + Role;
//         }
//         var menuPath = "/Setup/GetMenu" + queryparams;
//
//         if (lastMenuRequest != menuPath || $(".menubarbox").html() == "") {
//             lastMenuRequest = menuPath;
//             $.ajax({
//                 url: menuPath,
//                 data: {},
//                 headers: {
//                     "X-Requested-With": "XMLHttpRequest",
//                     'Cache-Control': 'max-age=1000'
//                 },
//                 cache: true,
//                 error: function (xhr) {
//                     $("#contentboxbody").append(
//                         '<div class="col-xs-50" ><div class="col-xs-50 pad-20"><div class="col-xs-50 col-xs-margin-1  box box-shadow pad-20"><div class="alert alert-warning">' +
//                         "Can't Connect to Internet/ Network Error Occured" +
//                         '</div></div></div></div>');
//                     $("#contentboxbody").css("height", "auto");
//                 },
//                 success: function (html) {
//                     $(".open-nav").show();
//                     $(".menubarbox").html(html);
//
//                     $(".leftsubmenu").each(function () {
//                         $(this).prev("a").attr("href", "#");
//                         $(this).prev("a").find("span").append('<i class="fas fa-angle-down downarrow"></i>');
//                     });
//                     $(".menubarbox").find("[data-json]:visible,[data-json]:hidden")
//                         .not("[data-parent],[data-template],[data-template] [data-json]").binder();
//
//                     appendFinalHTML(h);
//                     convertLinkToHashLink();
//                     $(window).trigger("resize");
//                     window.hidemenu();
//                     hideprogressbar();
//                     window.loadglobalvalues();
//                 }
//
//             });
//         } else {
//
//             appendFinalHTML(h);
//             hideprogressbar();
//             if ($(window).width() <= 768) {
//                 window.hidemenu();
//             }
//             window.loadglobalvalues();
//         }
//     } else {
//
//         appendFinalHTML(h);
//         $(".menubarbox").html("");
//         $(".open-nav").hide();
//         $(".logineditems").hide();
//         $(".loginitems").show();
//         hideprogressbar();
//         window.loadglobalvalues();
//     }
//     convertLinkToHashLink();
//
//
//     /////$("script").not(".permanentScripts").remove();
//     ////h.find("#ScriptBox").find("script").addClass("permanentScripts");
//
// }
//
// function loadscript(h, length, i) {
//
//     var t = h.find("#ScriptBox script[src]").eq(i);
//     if (t.attr("src")) {
//         try {
//             var script = document.createElement('script');
//             script.type = 'text/javascript';
//             script.className = 'permanentScripts';
//             script.onload = function () {
//                 i++;
//                 if (i == length) {
//                     initializeScript(h);
//                 } else {
//                     loadscript(h, length, i);
//                 }
//             };
//             script.src = t.attr("src")
//
//             document.body.appendChild(script);
//         } catch (e) {
//             i++;
//             if (i == length) {
//                 initializeScript(h);
//             } else {
//                 loadscript(h, length, i);
//             }
//         }
//
//
//     }
// }
//
// function initializeScript(h) {
//     ////bindmanager.htmltemplates = {};
//     ////bindmanager.htmltemplatewrappers = {};
//
//     bindmanager.settings = {};
//     bindmanager.dynamicrows = {};
//     bindmanager.initevents = {};
//     bindmanager.cache = {};
//     bindmanager.cachequeue = {};
//     h.find("#ScriptBox").find("script[src]").remove();
//     if (h.find("#ScriptBox").html()) {
//         $("head").append(h.find("#ScriptBox").html().replace(/\$\(\"body\"\)\.on/ig, '$("#contentboxbody").on')
//             .replace(/\$\(\'body\'\)\.on/ig, '$("#contentboxbody").on'));
//     }
//     $("body").find("[data-jltableform]:not([data-json]):not([data-jltableforminit])").not($("body").find("[data-json] [data-jltableform]")).jltableform();
//     $("#contentboxbody,#eventManagerBox").find("[data-json]:visible,[data-json]:hidden").not("[data-parent],[data-template],[data-template] [data-json]").binder();
// }
//
// $(window).on('hashchange', function (e) {
//     loadpage(true);
// });
// $('body').on("afterappendcomplete",
//     "div[data-json]",
//     function (e, data) {
//         if (e.target == e.currentTarget && data.rows && data.rows.Results) {
//             convertLinkToHashLink();
//         }
//     });
//
// var Role = "Guest";
// var hardloadPages = [
//     'ManageBulkParticipants', 'Login', 'CompetitionStructure', 'CandidatesDrawCards', 'CandidatesCards', 'tokensystem', 'Schedule', "Home/Index"
// ]
// var loadpage = function (isHashChange) {
//     hidespinner();
//     var body = $("body");
//     body.height($(document).height());
//     showprogressbar();
//     $(".spinnerbox").remove();
//     $("#contentboxbody").remove();
//     var hashurl = window.location.hash;
//     if (isHashChange) {
//         let matchItem = hardloadPages.find(x => hashurl.indexOf(x) !== -1);
//         if (matchItem) {
//             window.location.reload();
//             return
//         }
//     }
//
//     if (hashurl.toLowerCase().split("account").length == 0 && hashurl.toLowerCase().split("public").length == 1) {
//         $("#contentbox").append(
//             '<div class="col-xs-50" style="height:100px;" id="contentboxbody"><div class="col-xs-50 pad-20 pageloadingcontent"><div class="col-xs-50 col-xs-margin-1  box box-shadow pad-20">' +
//             $(spinnerHtml).show()[0].outerHTML +
//             '</div></div></div>');
//     } else {
//         $("#contentbox").append(
//             '<div class="col-xs-50" style="height:100px;" id="contentboxbody"></div>');
//     }
//
//     $("#contentbox").find(".spinnerbox").show();
//     body.stop().animate({scrollTop: 0}, 500, 'swing', function () {
//
//
//         var geturl = hashurl.replace("#", "");
//         var routedetails = hashurl.replace("#/", "").replace("#", "");
//         var pathPieces = routedetails.split("/");
//         var controller = pathPieces[0];
//         if (pathPieces.length == 1) {
//             //guess its not hashurl;
//
//             pathPieces = window.location.pathname.replace("/", "").split("#")[0].split("/");
//             controller = pathPieces[0];
//             geturl = window.location.href;
//         }
//         if (!hashurl || hashurl == "#/"||hashurl.indexOf("LogOff")!==-1) {
//             window.location.href = "/Account/Login";
//         }
//
//         if (pathPieces.length > 1) {
//             var action = pathPieces[1];
//             $("body").attr("class", "onepage");
//             if (controller && action) {
//                 $("body").addClass(controller.toLowerCase() + " " + action.toLowerCase());
//                 $.ajax({
//                     url: geturl,
//                     data: {},
//                     headers: {
//                         "X-Requested-With": "XMLHttpRequest",
//                         'Cache-Control': 'max-age=1000'
//                     },
//                     cache: true,
//                     success: function (html, textStatus, xhr) {
//                        if(!html){
//                            window.location.href = "/";
//                        }
//                         if(html.indexOf("bodyBox")===-1&&html.indexOf("leftmenuouterbox")!==-1){
//                             window.location.reload();
//                         }
//                         RenderHtml(html);
//                     },
//                     error: function (xhr) {
//                         $("#contentboxbody").append(
//                             '<div class="col-xs-50" ><div class="col-xs-50 pad-20"><div class="col-xs-50 col-xs-margin-1  box box-shadow pad-20"><div class="alert alert-warning">' +
//                             "Can't Connect to Internet/ Network Error Occured" +
//                             '</div></div></div></div>');
//                         $("#contentboxbody").css("height", "auto");
//                     }
//                 });
//             }
//         }
//     });
// }
//
//
// $(document).ready(function () {
//     if (getcache("allowbeta")) {
//
//     } else {
//        // window.location.href = window.location.origin + "/Account/Login";
//         return false;
//     }
//
//
//     convertLinkToHashLink();
//
//
//     let matchItem = hardloadPages.find(x => window.location.href.replace(window.location.hash, '').indexOf(x) !== -1);
//     if (!matchItem) {
//         loadpage(false);
//     }
//     var mouseoveri = 0;
//     var dateLast = new Date();
//
//     function triggerFocus(element) {
//         var eventType = "onfocusin" in root ? "focusin" : "focus",
//             bubbles = "onfocusin" in root,
//             event;
//
//         if ("createEvent" in document) {
//             event = document.createEvent("Event");
//             event.initEvent(eventType, bubbles, true);
//         } else if ("Event" in window) {
//             event = new Event(eventType, {bubbles: bubbles, cancelable: true});
//         }
//
//         element.focus();
//         element.dispatchEvent(event);
//     }
//
//     $('body').on("mousemove",
//         "a[href],.btn,li,input,select,textarea",
//         function (e) {
//             e.stopImmediatePropagation();
//             var link = $(this).attr("href");
//             if (link) {
//                 let matchItem = hardloadPages.find(x => link.indexOf(x) !== -1);
//                 if (matchItem) {
//                     return
//                 }
//             }
//             var th = $(this);
//             if (!th.attr("data-prevented")) {
//                 var length = (th.width());
//                 var dateDiff = (new Date() - dateLast);
//                 console.log((dateDiff).toString() + "outof" + length.toString());
//                 if (dateDiff > length) {
//                     mouseoveri = 0;
//                 }
//                 dateLast = new Date();
//                 mouseoveri++;
//                 if (!$(this).attr("data-mouseoveri")) {
//                     mouseoveri = 0;
//                 }
//                 $('[data-mouseoveri]').removeAttr("data-mouseoveri");
//                 $(this).attr("data-mouseoveri", mouseoveri);
//
//
//                 // if (mouseoveri > 40) {
//                 //     mouseoveri = 0;
//                 //     th.attr("data-prevented");
//                 //     setTimeout(function () {
//                 //             th.removeAttr("data-prevented");
//                 //         },
//                 //         6000);
//                 //     if (th.prop("TagName") == "SELECT" ||
//                 //         th.prop("TagName") == "INPUT" ||
//                 //         th.prop("TagName") == "TEXTAREA") {
//                 //
//                 //         triggerFocus(th[0]);
//                 //     } else if (link &&
//                 //         link.charAt(0) != "#" &&
//                 //         !link.startsWith("http") &&
//                 //         !link.startsWith("javascript")) {
//                 //       //  window.location.href = link;
//                 //     } else {
//                 //        // th.trigger("click", true);
//                 //     }
//                 //
//                 // }
//                 //// }
//
//
//             }
//         });
//
// });