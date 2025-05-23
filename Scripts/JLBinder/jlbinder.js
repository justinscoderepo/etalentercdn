/**
 * @file - JQuery Based Binder for binding json data/objects
 * @license - MIT License
 * @copyright - Copyright (c) 2017 JavscriptLab https://github.com/JavscriptLab
 * @author - Javascript Lab
 * @version - 0.1
 */
"use strict";

/**
 * @module globalvariables
 */
/**
 * detect whether window elements loaded or not
 * @global
 * @var {bool} jlbinderwindowloaded
 */
var jlbinderwindowloaded = false;
var allowJLBinder = true;
var idInc = 0;
/**
 * @module caching
 */
/**
 * Store all bindmanager caches and htmltemplates locally, it will refresh on next reload
 * @global
 * @var {Object} bindmanager
 */
var bindmanager = {};

/**
 * Store all bindmanager caches locally, it will refresh on next reload
 * @memberof bindmanager
 * @var {Object} bindmanager.cache
 */
bindmanager.cache = {};
bindmanager.cachequeue = {};
/**
 * @memberof bindmanager
 * Store all bindmanager htmltemplates locally, it will refresh on next reload
 * @var {Object} bindmanager.htmltemplates
 */
bindmanager.htmltemplates = {};
bindmanager.htmltemplatewrappers = {};
bindmanager.settings = {};
bindmanager.dynamicrows = {};
bindmanager.initevents = {};
////function onUpdateReady() {

////    window.location.reload(true);
////}
////window.applicationCache.addEventListener('updateready', onUpdateReady);
////if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
////    onUpdateReady();
////}

if (window.location.href.indexOf("account") >= 0) {
  remcache("bindmanagercache");
  remsession("bindmanagercache");
}

var currenturl = window.location.href;
if (getcache("currenturl") == currenturl) {
  remsession("bindmanagercache"); //chance/we guess user refreshing same page because not getting original data
}
setcache("currenturl", currenturl);

var jlbindcache = getcache("bindmanagercache");
if (jlbindcache) {
  try {
    bindmanager.cache = JSON.parse(jlbindcache);
  } catch (e) {
    bindmanager.cache = {};
  }
}

// var jlbindsessioncache = getsession("bindmanagercache");
var jlbindsessioncache = {} // disabled for used only server cache
if (jlbindsessioncache) {
  try {
    bindmanager.cache = {
      ...bindmanager.cache,
      ...JSON.parse(jlbindsessioncache),
    };
  } catch (e) {
    bindmanager.cache = {};
  }
}

//remcache("currenturl");

//   ////if (window.applicationCache.status>0)
//   ////{
//   ////    $.get("/api/PublicJson/UpdateVersion",
//   ////        function() {

//   ////            window.applicationCache.update();
//   ////            ////window.location.reload();
//   ////        });
//   ////allowJLBinder = false;
//   ////}
// } else {
//   setcache("currenturl", window.location.href);
// }
var jllazyloadi = {};
var jllazyload = function (id, fn, timeout) {
  if (!jllazyloadi[id]) {
    jllazyloadi[id] = 0;
  }
  jllazyloadi[id]++;
  var localjllazyloadi = jllazyloadi[id];
  setTimeout(function () {
    if (localjllazyloadi == jllazyloadi[id]) {
      fn();
    }
  }, timeout);
};

bindmanager.cachedata = function (key, data) {
  bindmanager.cache[key] = data;
  var cacheKeys = Object.keys(bindmanager.cache);
  var globalCaches = cacheKeys.filter(function (cache) {
    return bindmanager.cache[cache].CacheType == "Global";
  });
  var globalCacheObj = {};
  globalCaches.forEach(function (cache) {
    globalCacheObj[cache] = bindmanager.cache[cache];
  });

  var sessionCaches = cacheKeys.filter(function (cache) {
    return bindmanager.cache[cache].CacheType != "Global";
  });

  var sessionCacheObj = {};
  sessionCaches.forEach(function (cache) {
    sessionCacheObj[cache] = bindmanager.cache[cache];
  });

  if (data.CacheType == "Global") {
    setcache("bindmanagercache", JSONstringify(globalCacheObj));
  } else {
    setsession("bindmanagercache", JSONstringify(sessionCacheObj));
  }
};

bindmanager.cleardata = function (key, data) {
  delete bindmanager.cache[key];
  setcache("bindmanagercache", JSONstringify(bindmanager.cache));
};
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (str) {
    if (this.indexOf(str) == 0) {
      return true;
    } else {
      return false;
    }
  };
}

if (!String.prototype.encodeurl) {
  String.prototype.encodeurl = function () {
    return encodeURIComponent(this);
  };
}
if (!Date.prototype.isValid) {
  Date.prototype.isValid = function () {
    // An invalid date object returns NaN for getTime() and NaN is the only
    // object not strictly equal to itself.
    return !isNaN(this.getTime());
  };
}
/**
 * Detect jquery is loaded or not.
 * if 'jQuery' object is not allowed first load jquery script page,
 * then rename jquery global object to window.jQueryAlt like example
 * Binder will run through this object
 * This functionality is needed when a website is already using jquery lower version than 2 or angular based light jquery versions
 * @example <caption>How to rename jquery object to alternative object<caption>
 * window.jQueryAlt=window.jQuery;
 * @param {jQuery} $ jQuery Object
 * @requires jQuery
 * @returns {jQuery}  global jquery variable
 */
(function ($) {
  /**Required jQuery for binder
   *@param {jQuery} $ - jQuery $ object
   */
  window.jf = $.fn;
  /** @module public binder functions */

  if ($.binder) {
    console.error(
      "We can't initialized JLBinder. The reasons may be\n 1.its namespace $.binder already used in another js plugins.\n2.JLBinder already initialized"
    );
    return false;
  }
  $.binder = {
    /** Clear the cache of dom objects
     * This function is using only for those elements have data-caching attributes.
     * It will clear the caches from its variable and it helps to load new data on next call to binder.
     * eg:$.binder.clear($("#mytablebody"));
     * $("#mytablebody").binder(); for getting fresh data
     * @alias $.binder.clear
     * @param {jQueryObject} t - Dom Element used data-json attribute, element must be a jquery object like $("selector")
     */
    clear: function (t) {
      var json = t.attr($.fn.binder.methods.data.data_json);
      $.fn.binder.methods.resetpagination(t);
      if (bindmanager.cache) {
        $.each(bindmanager.cache, function (i, v) {
          if (i.startsWith(json)) {
            bindmanager.cleardata(i);
          }
        });
      }
    },
    insert: function (t, data, opt, removeindex) {
      if (!t.attr("data-binderinit")) {
        t.binder({});
      }

      var tid = t.attr("id");
      if (bindmanager.settings) {
        var settings = bindmanager.settings[tid];
        settings.dynamicinsert = true;
        if (opt) {
          settings = $.extend(settings, opt);
        }
        var pagestarts = settings.pagestartswith
          ? parseInt(settings.pagestartswith)
          : 0;
        var scrollerpage = 0;
        var isscroller = false;
        if ($("#input_scroller_" + tid).length > 0) {
          isscroller = true;
          scrollerpage = $("#input_scroller_" + tid).val();
          $("#input_scroller_" + tid).val(pagestarts - 1);
        }
        if (settings) {
          if (!bindmanager.dynamicrows[tid]) {
            bindmanager.dynamicrows[tid] = [];
          }
          if (data) {
            bindmanager.dynamicrows[tid].push(data);
          }
          if (typeof removeindex !== "undefined" && removeindex !== true) {
            delete bindmanager.dynamicrows[tid][removeindex];
          }
          if (removeindex == true || bindmanager.dynamicrows[tid].length == 0) {
            bindmanager.dynamicrows[tid] = [];
            var paginationt = $(
              t.attr($.fn.binder.methods.data.data_pagination)
            );
            if (paginationt.length > 0) {
              paginationt.find("[data-dynamicrows]").hide();

              $.fn.binder.methods.resetpagination(t);
              $.fn.binder.methods.success(
                t,
                settings,
                { rows: $.extend({}, bindmanager.dynamicrows[tid]) },
                tid
              );
            } else {
              $.fn.binder.methods.success(
                t,
                settings,
                { rows: $.extend({}, bindmanager.dynamicrows[tid]) },
                tid
              );
            }
            return false;
          }

          $.fn.binder.methods.success(
            t,
            settings,
            { rows: $.extend({}, bindmanager.dynamicrows[tid]) },
            tid
          );
        }

        if (isscroller) {
          $("#input_scroller_" + tid).val(scrollerpage);
        }
      }
    },
    cleardynamicrows: function (t) {
      this.insert(t, null, false, true);
    },
    remove: function (t, index, opt) {
      this.insert(t, null, opt, index);
    },
    attr: function (t) {
      var obj = {};
      if (t) {
        $.each(t[0].attributes, function () {
          if (this.specified) {
            obj[this.name] = this.value;
          }
        });
      }
      return obj;
    },
    updatepage: function (t, pagenumber) {
      return obj;
    },
    reload: function (t) {
      remsession("bindmanagercache");
      $.fn.binder.methods.resetpaginationandbind(t);
    },
    addfilter: function (t, key, value) {
      if (t.attr("data-filterby-inline")) {
        var pieces = t.attr("data-filterby-inline").split(",");
        var newattributes = [];
        for (var i = 0; i < pieces.length; i++) {
          if (pieces[i] && pieces[i].split(key + ":").length == 1) {
            newattributes.push(pieces[i]);
          }
        }

        if (value) {
          newattributes.push(key + ":" + value);
        }

        t.attr("data-filterby-inline", newattributes.join(","));
      } else {
        t.attr("data-filterby-inline", key + ":" + value);
      }
    },
  };
  jf.setevent = function (key, value, permanent) {
    var t = $(this);
    if (permanent) {
      if (t.attr("data-binderperminit-" + key, value)) {
        t.attr(
          "data-binderperminit-" + key,
          value + "," + t.attr("data-binderperminit-" + key, value)
        );
      } else {
        t.attr("data-binderperminit-" + key, value);
      }
    } else {
      if (t.attr("data-binderinit-" + key)) {
        t.attr(
          "data-binderinit-" + key,
          value + "," + t.attr("data-binderinit-" + key)
        );
      } else {
        t.attr("data-binderinit-" + key, value);
      }
    }
    var datas = $.fn.binder.methods.attr(t);
    $.fn.binder.methods.initfn($(t), datas);
  };
  var jlconsolemessageslist = {};
  var jlconsolemessagesnserti = 0;
  window.consoleit = function (msg, type, category) {
    if (localStorage && getcache("developermode")) {
      category = !category ? "others" : category;
      if (!jlconsolemessageslist[type]) {
        jlconsolemessageslist[type] = {};
      }
      if (!jlconsolemessageslist[type][category]) {
        jlconsolemessageslist[type][category] = [];
      }
      jlconsolemessageslist[type][category].push({
        time: new Date(),
        message: msg,
        type: type,
      });
      jlconsolemessagesnserti++;
      var consolemessagesi = jlconsolemessagesnserti;
      setTimeout(function () {
        if (consolemessagesi == jlconsolemessagesnserti) {
          for (var typej in jlconsolemessageslist) {
            if (jlconsolemessageslist.hasOwnProperty(typej)) {
              var typeinfo = jlconsolemessageslist[typej];
              var messagetype =
                typej == "s" ? "Success" : typej == "e" ? "Error" : "Warning";
              console.log(
                "%c -----------------------JLBinder " +
                messagetype +
                "  Messages-----------------------",
                typej == "s"
                  ? "color:Green"
                  : typej == "e"
                    ? "color:red"
                    : "color:#b77702"
              );
              console.log(
                "%c **********************!!!!!!!!!!!!!!!!!!!!!!!!!!**********************",
                "color:DodgerBlue"
              );
              console.groupCollapsed("Expand to view all messages");
              for (var rowj in typeinfo) {
                if (typeinfo.hasOwnProperty(rowj)) {
                  var consolemessages = typeinfo[rowj];
                  console.groupCollapsed("Messages Related to " + rowj);

                  for (var rowi in consolemessages) {
                    if (consolemessages.hasOwnProperty(rowi)) {
                      var v = consolemessages[rowi];
                      var type = v.type;
                      var msg = v.message;
                      if (typeof msg == "string") {
                        if (type == "e") {
                          console.error(
                            "%c" + msg,
                            type == "s"
                              ? "color:Green"
                              : type == "e"
                                ? "color:red"
                                : "color:#b77702"
                          );
                        } else {
                          console.log(
                            "%c" + msg,
                            type == "s"
                              ? "color:Green"
                              : type == "e"
                                ? "color:red"
                                : "color:#b77702"
                          );
                        }
                      } else {
                        console.log(msg);
                      }
                    }
                  }

                  console.groupCollapsed("Table View");
                  console.table(consolemessages);
                  console.groupEnd();

                  console.groupEnd();
                }
              }

              console.groupEnd();
              console.log(
                "%c **********************!!!!!!!!!!!!!!!!!!!!!!!!!!**********************",
                "color:DodgerBlue"
              );
            }
          }
          jlconsolemessageslist = {};
        }
      }, 3000);
    }
  };

  window.JSONstringify = function (str) {
    var obj = "";
    try {
      obj = JSON.stringify(str);
    } catch (e) {
      return "";
    }
    return obj;
  };

  window.JSONparse = function (str) {
    var obj = "";
    try {
      obj = $.parseJSON(str);
    } catch (e) {
      return "";
    }
    return obj;
  };

  window.IsJsonString = function (str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  $.fn.binder = function (opt, callback) {

    for (var bi = 0; bi < this.length; bi++) {
      var t = $(this[bi]);

      
      var mt = $.fn.binder.methods;
      mt.create(t, opt, callback);
    }
    return $(this);
  };
  $.fn.binder.methods = {
    /**
     * Dom Related Common Functions
     */
    attr: function (t) {
      var obj = {};
      if (t && t.length > 0) {
        $.each(t[0].attributes, function () {
          if (this.specified) {
            obj[this.name] = this.value;
          }
        });
      }
      return obj;
    },
    fetchvalue: {
      radio: function (t) {
        return $("[name='" + t.attr("name") + "']:checked")
          .val()
          .trim();
      },
      checkbox: function (t) {
        if (t.attr("data-usevalue")) {
          if (t.prop("checked")) {
            return t.attr("value");
          } else {
            if (t.attr("data-uncheckvalue")) {
              return t.attr("data-uncheckvalue");
            } else {
              return "";
            }
          }
        } else if (t.attr("name").split("[").length > 1) {
          return t.attr("value");
        } else {
          return t.prop("checked");
        }
      },
    },
    setid: function (el) {
      if (!el.attr("id")) {
        idInc++;
        el.attr(
          "id",
          "Id_" +
          idInc +
          "_" +
          new Date().getTime().toString() +
          "" +
          Math.random().toString().replace(".", "")
        );
      } else if (el.attr("id")) {
        if ($("[id='" + el.attr("id") + "']").length > 1) {
          el.removeAttr("id");
          this.setid(el);
        }
      }
      return el.attr("id");
    },
    attributevaluetoobject: function (t, attributename) {
      return $(t.attr(attributename));
    },
    attrselector: function (attribute) {
      return "[" + attribute + "]";
    },
    getcommentobj: function (th) {
      if ($(th).contents) {
        return $(th)
          .contents()
          .map(function () {
            return this.nodeType == 8 ? $(this) : false;
          })
          .get();
      }
      return false;
    },
    bodyevent: function (events, elements, callback) {
      $("body").on(events, elements, function (e) {
        if ($(this).closest("body").length > 0) {
          callback(e, $(this));
        } else {
          console.log("Deactivated");
        }
      });
    },
    windoworelementevent: function (events, callback, elements) {
      if (elements) {
        $(elements).on(events, function (e) {
          if ($(this).closest("body").length > 0) {
            callback(e);
          } else {
            console.log("Deactivated");
          }
        });
      } else {
        $(window).on(events, callback);
      }
    },
    windowevent: function (events, callback) {
      $(window).on(events, callback);
    },
    getelementinfo: function (obj) {
      return obj.attr("id")
        ? obj.attr("id")
        : (obj.prop("tagName") ? obj.prop("tagName").toLowerCase() : "") +
        " " +
        JSONstringify(this.attr(obj)).toLowerCase();
    },
    triggerevent: function (
      obj,
      eventname,
      data,
      callback,
      disablejlbinderwindowloaded,
      isrecursive
    ) {
      if (obj.attr("id") && !isrecursive) {
        var category = this.getelementinfo(obj);
        consoleit(eventname + " event triggered", "s", category);
      }
      if (jlbinderwindowloaded || disablejlbinderwindowloaded) {
        obj.trigger(eventname, data);
      } else {
        if (callback) {
          callback();
        }
        var th = this;

        setTimeout(function () {
          th.triggerevent(obj, eventname, data, null, false, true);
        }, 500);
      }
    },
    grandchildren: function (t, selector) {
      return t.find(selector).find(selector);
    },
    wrapwithparent: function (parenttag, html) {
      return $("<" + parenttag + ">" + html + "</" + parenttag + ">");
    },
    getdataattributesforsettings: function (t, attributes) {
      var obj = {};
      for (var attribute in attributes) {
        if (attributes.hasOwnProperty(attribute)) {
          if (attribute.startsWith("data-")) {
            obj[attribute.replace("data-", "").replace(/-/gi, "_")] =
              attributes[attribute];
          }
        }
      }
      return obj;
    },
    /**
     * Dom Related Common Functions End
     */
    /**
     * Object Related Common Functions
     */
    defined: function (t) {
      if (typeof t != "undefined") {
        return true;
      }
      return false;
    },
    isstring: function (value) {
      if (typeof value == "string") {
        return true;
      }
      return false;
    },
    trimvalue: function (t) {
      var value = t.val();
      if (
        t.attr("data-value") &&
        !t.attr("data-binderinit") &&
        t.attr("data-forcesetvalue")
      ) {
        value = t.attr("data-value");
      }
      if (this.defined(t) && this.isstring(value)) {
        return value.trim();
      }
      return value;
    },
    objecttolowercase: function (properties) {
      $.each(properties, function (pi, pv) {
        if (typeof pv != "object") {
          properties[pi.toString().toLowerCase()] = pv;
        }
      });
      return properties;
    },
    getprototypefunction: function (prototypes, functionname) {
      var propertynames = Object.getOwnPropertyNames(prototypes);
      for (var prototype in propertynames) {
        if (propertynames.hasOwnProperty(prototype)) {
          var prototypename = propertynames[prototype];
          if (prototypename == functionname) {
            return functionname;
          } else if (prototypename.toLowerCase() == functionname) {
            return prototypename;
          }
        }
      }
      return functionname;
    },
    getconditionalexpression: function (keyname, key, value) {
      var returndata = {};
      returndata.negation = false;
      var exp = false;
      if (keyname.toLowerCase().split(key.toLowerCase()).length == 1) {
        if (keyname == "!") {
          returndata.negation = true;

          if (typeof value == "string" && value != "") {
            value = "'" + value.toString() + "'";
          }
          if (!value) {
            value = false;
          }
          exp = value;
        } else {
          if (
            typeof value != "object" &&
            typeof value != "boolean" &&
            typeof value != "number"
          ) {
            value = "'" + value.toString() + "'";
          }

          if (keyname.toString().match(/[<>!=]/gi)) {
            exp = value + keyname.toString();
          } else {
            exp = value + "==" + keyname.toString();
          }
        }
      } else {
        var reg = new RegExp("{" + key + "}.length", "ig");
        var reg2 = new RegExp("{" + key + "}", "ig");
        var reg3 = new RegExp("{" + key + "}.toString\\(\\)", "ig");
        exp = keyname.replace(reg, value.length);
        exp = exp.replace(reg3, "'" + value.toString() + "'");
        exp = exp.replace(reg2, value);
      }
      returndata.exp = exp;
      return returndata;
    },
    removedataprefix: function (value) {
      return value.replace("data-", "");
    },
    getidobj: function (id) {
      return $("#" + id);
    },
    getinputofthis: function (t) {
      return this.getidobj("input_" + t.attr("id"));
    },

    /**
     * Object Related Common Functions End
     */
    /**
     * Jl Binder Common Methods
     */
    autofn: function (obj, t, properties) {
      var datas = this.attr(t);
      properties = this.objecttolowercase(properties);
      $.each(datas, function (di, dv) {
        if (di.startsWith("data-method")) {
          var pieces = di.split("-");
          var dvobj = obj.find(dv);
          var keyname = pieces[2];
          var methodname = pieces[3];
          var singlemethod = pieces[2];
          if (pieces.length == 4) {
            if (keyname && methodname) {
              dvobj[methodname](properties[keyname]);
            }
          } else if (pieces.length == 3) {
            dvobj[singlemethod]();
          }
        }
      });
      return obj;
    },
    textautofn: function (attributes, value, t) {
      if (t.length > 0) {
        for (var di in attributes) {
          if (attributes.hasOwnProperty(di)) {
            var dv = attributes[di];
            if (
              (typeof value == "string" || typeof value == "number") &&
              (di.startsWith("data-string-") ||
                di == "data-string" ||
                di == "data-number" ||
                di.startsWith("data-number-"))
            ) {
              var pieces = di.split("-");
              pieces[pieces.length] = dv;
              var prototype = pieces[1];
              var methodname = pieces[2];
              var param1 = pieces[3];
              var param2 = pieces[4];
              if (!value[methodname]) {
                if (prototype == "string") {
                  if (typeof value == "number") {
                    value = value.toString();
                  }
                  methodname = this.getprototypefunction(
                    String.prototype,
                    methodname
                  );
                }
                if (prototype == "number") {
                  methodname = this.getprototypefunction(
                    Number.prototype,
                    methodname
                  );
                }
              }
              var argumentvalues = pieces.splice(3, pieces.length);
              value = value[methodname].apply(value, argumentvalues);
            }
          }
        }
      }
      return value;
    },
    getfollowwrappers: function (wrappers, tid) {
      bindmanager.htmltemplatewrappers[tid] = [];
      if (wrappers.length > 0) {
        for (var wrapperi = 0; wrapperi < wrappers.length; wrapperi++) {
          var wrapper = $(wrappers[wrapperi]);
          wrapper.attr("data-wrapperlevel", wrapperi);
          var wrapperhtml = wrapper[0].outerHTML;
          var wrapperobj = $(wrapperhtml);
          wrapperobj
            .find("[" + this.data.data_follow + "],[data-wrapfollow]")
            .remove();
          var obj = {
            count: parseInt(wrapperobj.attr("data-wrapfollow")),
            html: wrapperobj[0].outerHTML,
          };
          bindmanager.htmltemplatewrappers[tid].push(obj);
        }
      }
    },
    gettemplatedetails: function (t, tid, dynamicinsert) {
      var obj = {};

      obj.nochange =
        "[" +
        this.data.data_follow +
        "],[" +
        this.data.data_static +
        "],[" +
        this.data.data_noresult +
        "]";
      if (!dynamicinsert) {
        obj.nochange += ",[" + this.data.data_dynamicrows + "]";
      }

      obj.nochangedchildrens = t.children().not(obj.nochange);

      var excludedelements = t
        .find("[data-json],[data-subjson],[data-pagination]")
        .find("[" + this.data.data_follow + "]");
      var ch = t
        .find("[" + this.data.data_follow + "]")
        .not(excludedelements)
        .first();

      if (ch.length == 0) {
        ch = ch.add(obj.nochangedchildrens).first();
      }

      let customTemplateId = t.attr("data-customTemplateId");

      if (!bindmanager.htmltemplates[tid]) {
        if (ch.length > 0) {
          ch.attr(this.data.data_follow, true);
          if (tid) {
            obj.html = bindmanager.htmltemplates[tid] = ch[0].outerHTML;

            var followelements = t
              .find(
                "[" +
                this.data.data_follow +
                "]:not([" +
                this.data.data_static +
                "])"
              )
              .not(excludedelements);
            var excludedwrappers = t
              .find("[data-json],[data-subjson],[data-pagination]")
              .find("[data-wrapfollow]");
            var wrappes = t.find("[data-wrapfollow]").not(excludedwrappers);

            if (wrappes.length > 0) {
              this.getfollowwrappers(wrappes, tid);
            }

            if (followelements.length == 1) {
              followelements.remove();
            }
          } else {
            obj.html = ch[0].outerHTML;
          }
        }
      } else {
        obj.html = bindmanager.htmltemplates[tid];
        if (bindmanager.htmltemplates[customTemplateId]) {
          obj.html = bindmanager.htmltemplates[customTemplateId];
        }
        return obj;
      }
      return obj;
    },
    finddatarows: function (objrows, resultdata) {
      var rows = null;
      var foundedrows = false;
      if (resultdata != null) {
        $.each(objrows, function (obji, objv) {
          if (typeof resultdata[objv] != "undefined") {
            foundedrows = true;
            rows = resultdata[objv];
          }
        });
      }
      if (
        rows == null &&
        !foundedrows &&
        typeof resultdata == "object" &&
        resultdata != null &&
        ((resultdata instanceof Array && resultdata.length > 0) ||
          !(resultdata instanceof Array))
      ) {
        rows = resultdata;
      }
      return rows;
    },
    setnoresults: function (t) {
      t.find(this.attrselector(this.data.data_noresult)).hide();
      if (t.prop("tagName").toLowerCase() == "select") {
        t.find(this.attrselector(this.data.data_noresult)).remove();
      }
    },
    bringvalues: function (t) {
      t.find("[data-jlvalue]").each(function () {
        $(this).val($(this).attr("data-jlvalue"));
        $(this).removeAttr("data-jlvalue");
      });
    },
    getcustomattributevalue: function (tobj, mainkey, subkey, key) {
      return tobj.attr(mainkey + "-" + key.toLowerCase() + "-" + subkey)
        ? tobj.attr(mainkey + "-" + key.toLowerCase() + "-" + subkey)
        : tobj.attr(mainkey + "-" + subkey + "-" + key.toLowerCase());
    },
    gotoprocess: function (fntodo, th) {
      try {
        var fntodopieces = fntodo.split("_");
        var currentobj = th;
        var isnested = false;
        var nestedfn = "";
        var isfncall = false;
        var fnname = "";
        var totaltodo = fntodopieces.length;

        var fnarguments = [];
        $.each(fntodopieces, function (piecei, piecev) {
          var fncallend = false;
          var newfncall = false;
          if (piecev.startsWith("this")) {
            fncallend = true;
            currentobj = th;
          } else if (!isnested) {
            if (
              piecev == "find" ||
              piecev == "closest" ||
              piecev == "parent" ||
              piecev == "child"
            ) {
              fncallend = true;
              nestedfn = piecev;
              isnested = true;
            } else if (
              piecev.startsWith("#") ||
              piecev.startsWith(".") ||
              piecev.startsWith("[")
            ) {
              fncallend = true;
              currentobj = $(piecev);
            } else {
              if (currentobj[piecev]) {
                fncallend = true;
                fnname = piecev;
                isfncall = true;
                newfncall = true;
                fnarguments = [];
              } else if (isfncall) {
                fnarguments.push(piecev);
              }

              if (!isfncall) {
                ////if (currentobj.split("(").length > 1) {
                ////    var fnpieces = currentobj.split("(");
                ////    var params = fnpieces[1].replace(")", "").split(",");
                ////    var fnname = fnpieces[0];
                ////    var paramlist = [];
                ////    ////TODO
                ////}
              }
            }
          } else {
            fncallend = true;
            currentobj = currentobj[nestedfn](piecev);
            isnested = false;
          }
          if (isfncall && fnname) {
            if (piecei == totaltodo - 1 || (fncallend == true && !newfncall)) {
              if (fnarguments[1]) {
                currentobj = currentobj[fnname](fnarguments[0], fnarguments[1]);
              } else if (fnarguments[0]) {
                currentobj = currentobj[fnname](fnarguments[0]);
              } else {
                currentobj = currentobj[fnname]();
              }
              fnname = "";
              isfncall = false;
            }
          }
        });
      } catch (e) { }
    },

    applyobjectascondition: function (
      exp,
      tobj,
      statement,
      elsestatement,
      negation
    ) {
      if (typeof exp != "undefined") {
        var evaluatevalue = eval(exp);
        if (negation) {
          evaluatevalue = !evaluatevalue;
        }
        if (evaluatevalue) {
          if (statement) {
            this.gotoprocess(statement, tobj);
          } else {
            tobj.show().attr("data-isactive", true);
          }
        } else {
          if (elsestatement) {
            this.gotoprocess(elsestatement, tobj);
          } else {
            tobj.hide().attr("data-isactive", false);
          }
          if (tobj.attr("data-removeinactive")) {
            tobj.remove();
          }
        }
      }
    },
    applyattributesascondition: function (exp, tobj, statement, negation) {
      if (typeof exp != "undefined") {
        var evaluatevalue = eval(exp);
        if (negation) {
          evaluatevalue = !evaluatevalue;
        }
        if (evaluatevalue) {
          tobj.each(function () {
            eval(statement);
          });
        }
      }
    },
    applycontentifcondition: function (
      ob,
      tobj,
      mainkey,
      subkey,
      key,
      value,
      keyvalue,
      statement,
      elsestatement
    ) {
      //var keyvalue = this.getcustomattributevalue(tobj, mainkey, subkey, key);
      //// if (typeof value == 'boolean') {
      ////if (value != null) {
      try {
        var exp = this.getconditionalexpression(keyvalue, key, value);
        this.applyobjectascondition(
          exp.exp,
          tobj,
          statement,
          elsestatement,
          exp.negation
        );
      } catch (e) {
        consoleit(e.message, "e", this.getelementinfo(tobj));
      }
      ////}
    },
    applyattributeifcondition: function (
      ob,
      tobj,
      mainkey,
      subkey,
      key,
      value,
      keyvalue
    ) {
      //var keyvalue = this.getcustomattributevalue(tobj, mainkey, subkey, key);
      //// if (typeof value == 'boolean') {
      /////if (value != null) {
      try {
        var conditionandstatement = keyvalue.split("->");
        var condition = conditionandstatement[0];
        var statement = conditionandstatement[1];
        var exp = this.getconditionalexpression(condition, key, value);
        if (statement) {
          this.applyattributesascondition(
            exp.exp,
            tobj,
            statement,
            exp.negation
          );
        }
      } catch (e) {
        consoleit(e.message, "e", this.getelementinfo(tobj));
      }
      /////}
    },
    formatvalueusedatefunctionalities: function (ob, obv, key, value) {
      try {
        if (this.date[ob]) {
          return this.date[ob](key, value, obv);
        }
      } catch (e) {
        consoleit(e.message, "e", "datefunction");
        return value;
      }
      return value;
    },

    applydropdownbasedfunctionalities: function (t) {
      if (t.attr(this.data.data_value)) {
        var val = t.attr(this.data.data_value);
        if (
          !t.val() ||
          (t.val() && t.val().length == 0) ||
          t.attr("data-forcesetvalue")
        ) {
          t.removeAttr("data-forcesetvalue");
          if (t.attr("multiple")) {
            val = val.split(",");
          }
          t.val(val);
          if (val != "" && !t.attr("multiple")) {
            if (t.find('option[value="' + val + '"]').length == 0) {
              t.find("option:not([data-follow])")
                .first()
                .prop("selected", true);
            }
          }
        } else if (t.attr("data-hasdefaultvalue")) {
          if (t.find('option[value="' + val + '"]').length > 0) {
            t.val(val);
          }
        }
      } else {
        if (t.find("option:selected:not([data-follow])").length == 0) {
          t.find("option:not([data-follow])").first().prop("selected", true);
        }
      }
    },
    applydatefunctionalitybyattributes: function (attributes, key, value) {
      if (value) {
        for (var ob in attributes) {
          if (attributes.hasOwnProperty(ob)) {
            var obv = attributes[ob];
            if (ob.startsWith("data-")) {
              ob = this.removedataprefix(ob);
              value = this.formatvalueusedatefunctionalities(
                ob,
                obv,
                key,
                value
              );
            }
          }
        }
      }
      return value;
    },
    applyconverttobaseattributes: function (obj, key, value) {
      if (key == "data-src" || key == "data-style") {
        obj.attr(key.replace("data-", ""), value);
      }
    },
    applyfunctionalitybasedonattributes: function (
      attributes,
      tobj,
      key,
      value
    ) {
      for (var ob in attributes) {
        if (attributes.hasOwnProperty(ob)) {
          var obv = attributes[ob];
          if (ob.startsWith("data-")) {
            ob = ob.replace("data-", "");
            var keytolower = key.toLowerCase();
            var keyname;
            if (ob == keytolower + "-inline" || ob == "inline-" + keytolower) {
              ////keyname = mt.getcustomattributevalue(tobj, "data", "inline", key);
              keyname = obv;
              var inlinereplace = "{" + key + "}";
              var inlinere = new RegExp(inlinereplace, "g");
              if (!value && tobj.attr("data-nulllabel")) {
                value = tobj.attr("data-nulllabel");
              }

              if (keyname == "html") {
                tobj.html(tobj.html().replace(inlinere, value));
              } else if (keyname == "text") {
                tobj.text(tobj.text().replace(inlinere, value));
              } else {
                var keynamepieces = keyname.split(",");
                for (var keyi = 0; keyi < keynamepieces.length; keyi++) {
                  var keyv = keynamepieces[keyi];
                  var attribute = tobj.attr(keyv);
                  if (keyv && attribute) {
                    var attributebasedvalue = attribute.replace(
                      inlinere,
                      value
                    );
                    tobj.attr(keyv, attributebasedvalue);
                    this.applyconverttobaseattributes(
                      tobj,
                      keyv,
                      attributebasedvalue
                    );
                  } else {
                    consoleit(
                      "'" +
                      keyv +
                      "' not matching any attributes for apply value for inline key 'data-" +
                      keytolower +
                      "-inline'",
                      "w",
                      "inline attributes of " + this.getelementinfo(tobj)
                    );
                  }
                }
              }
            }
            if (
              ob == key.toLowerCase() + "-attr" ||
              ob == "attr-" + keytolower
            ) {
              //keyname = mt.getcustomattributevalue(tobj, "data", "attr", key);
              keyname = obv;
              tobj.attr(keyname, value);
              this.applyconverttobaseattributes(tobj, keyname, value);
            }
            if (ob == keytolower + "-if" || ob == "if-" + keytolower) {
              var statement;
              var elsestatement;
              if (attributes.hasOwnProperty("data-" + ob + "-statement")) {
                statement = attributes["data-" + ob + "-statement"];
              }
              if (attributes.hasOwnProperty("data-" + ob + "-elsestatement")) {
                elsestatement = attributes["data-" + ob + "-elsestatement"];
              }

              if (
                tobj.attr("data-ifoperator") &&
                tobj.attr("data-ifoperator") == "AND" &&
                tobj.attr("data-isactive") &&
                tobj.attr("data-isactive") == "false"
              ) {
                tobj.hide().attr("data-isactive", false);
              } else {
                this.applycontentifcondition(
                  ob,
                  tobj,
                  "data",
                  "if",
                  key,
                  value,
                  obv,
                  statement,
                  elsestatement
                );
              }
            }
            if (
              ob == "attr-" + (keytolower + "-if") ||
              ob == "attr-" + "if-" + keytolower
            ) {
              this.applyattributeifcondition(
                ob,
                tobj,
                "data-attr",
                "if",
                key,
                value,
                obv
              );
            }
          }
        }
      }
    },
    /***
     * Jl Binder Common methods end
     */
    /***
     * Filteration Part
     */
    /**
     * Get filter inputs before request to server by data-filter and data-filter-required attribute
     * @param {DomObject} t html element
     * @param {string} tid id of html element
     * @returns {DomObject} all input elements
     */
    submitandbind: function (t, form) {
      if (form.valid) {
        if (form.valid() == true) {
          this.resetpaginationandbind(t);
        }
      } else {
        this.resetpaginationandbind(t);
      }
    },
    getfilterbyinputs: function (t, tid) {
      var inputs = null;
      try {
        var postsinputs = this.attributevaluetoobject(
          t,
          this.data.data_filterby
        );
        var requiredinputs = this.attributevaluetoobject(
          t,
          this.data.data_filterby_required
        );
        var inputsrequired = requiredinputs.add(
          requiredinputs.find(this.data.inputs)
        );

        $("[data-requiredonfilter" + tid + "]").removeAttr(
          "data-requiredonfilter" + tid
        );
        inputsrequired.attr("data-requiredonfilter" + tid, true);
        inputs = postsinputs
          .add(postsinputs.find(this.data.inputs))
          .add(inputsrequired);
      } catch (e) {
        consoleit("Your filtered inputs are not valid", "e", tid);
        return false;
      }
      return inputs;
    },
    setfilters: function (t, stn, inputs) {
      var mt = this;
      if (!t.attr("data-disablechangeevent")) {
        this.setfilterevent(t, "change", "change", stn.tid);
      }
      if (t.attr("data-enableblurevent")) {
        this.setfilterevent(t, "blur", "change", stn.tid);
      }
      if (t.attr("data-enablekeyupevent")) {
        this.setfilterevent(t, "keyup", "change", stn.tid);
      }
      this.setfilterevent(t, "click", "reset", stn.tid);
      this.setresponsiveonresize(t, "resize");
      var button = inputs.filter(function () {
        return (
          $(this).attr("type") && $(this).attr("type").toLowerCase() == "submit"
        );
      });
      var form = inputs.filter(function () {
        return $(this).prop("tagName").toLowerCase() == "form";
      });
      var reset = inputs.filter(function () {
        return (
          $(this).attr("type") && $(this).attr("type").toLowerCase() == "reset"
        );
      });
      if (form.length > 0) {
        form.each(function () {
          if (!$(this).attr("id")) {
            $(this).attr("id", "Id" + new Date().getTime());
          }
          if (!$(this).attr("data-submiteventinitfor" + stn.tid)) {
            $(this).attr("data-submiteventinitfor" + stn.tid, true);
            $("body").on("submit", "#" + $(this).attr("id"), function (e) {
              e.preventDefault();
              mt.submitandbind(t, $(this));
            });
            $("body").on("reset", "#" + $(this).attr("id"), function (e) {
              var th = $(this);
              setTimeout(function () {
                mt.submitandbind(t, th);
              }, 100);
            });
          }
        });
      } else {
        if (reset.length > 0) {
          $("[data-onresetfilter" + stn.tid + "]").removeAttr(
            "data-onresetfilter" + stn.tid
          );
          reset.attr("data-onresetfilter" + stn.tid, "true");
        }
      }
      var outsidefilters = inputs.filter(function () {
        return $(this).attr("data-forcefilter");
      });
      $("[data-onchangefilter" + stn.tid + "]").removeAttr(
        "data-onchangefilter" + stn.tid
      );
      if (button.length == 0 && inputs.length > 0) {
        if (stn.perpage) {
          inputs.not(stn.perpage).attr("data-onchangefilter" + stn.tid, "true");
        } else {
          inputs.attr("data-onchangefilter" + stn.tid, "true");
        }
      }
      //If the input field outside the form and on trigger
      if (outsidefilters.length > 0) {
        outsidefilters.attr("data-onchangefilter" + stn.tid, "true");
      }
      return inputs;
    },
    setfilterevent: function (t, events, attributename, tid) {
      var mt = this;
      var eventtriggeri = 0;
      this.bodyevent(
        events,
        "[data-on" + attributename + "filter" + tid + "=true]",
        function (e, th) {
          eventtriggeri++;
          var localeventtriggeri = eventtriggeri;
          setTimeout(function () {
            if (localeventtriggeri == eventtriggeri && th.length > 0) {
              if (events == "change" && th.attr("data-disablechangeevent")) {
                return false;
              }
              if (events == "blur" && th.attr("data-disableblurevent")) {
                return false;
              }
              consoleit(
                tid +
                " is loaded on " +
                events +
                " event, name is " +
                th.attr("name") +
                (th.attr("id") ? " id is " + th.attr("id") : "") +
                " value is  " +
                th.val(),
                "s",
                tid
              );
              mt.resetpaginationandbind(t);
            }
          }, 500);
        }
      );
    },
    validaterequiredfilters: function (tid, stn,t) {
      var valid = true;
      var th = this;

      // if (stn.json.indexOf("JudgesDetailedScoreCardJson") > -1) {
      //   if (!$(t.attr("data-filterby-required")).val()) {
      //     alert("Please select a judge before proceeding.");
      // debugger
      //   }

      // }
      if (t.attr("data-required-ifnot-exists") && t.attr("data-required-ifnot-exists") == "true") {
        
        var requireditems = $(stn.filterby_required);
        var minExpectedCount = stn.filterby_required.split(",").length;
        if(requireditems.length < minExpectedCount) {
          valid = false;
          return valid;
        }
        var misseditems = requireditems.filter(function () {
          return !$(this).val();
        });
        if (misseditems.length > 0) {
          valid = false;
          return valid;
        }
      }




      $("[data-requiredonfilter" + tid + "]").each(function (ri, rv) {
        var elementinfo = th.getelementinfo($(this));
        var value = $(this).val();

        if ($(this).attr("data-jlloading")) {
          valid = false;
        }

        if (
          $(this).attr("data-value") &&
          !$(this).attr("data-binderinit") &&
          $(this).attr("data-forcesetvalue")
        ) {
          value = $(this).attr("data-value");
        }
        switch ($(this).attr("type")) {
          case "radio":
          case "checkbox": {
            if ($(this).prop("checked") == false) {
              valid = false;
            }
            break;
          }
          default: {
            if (stn.nullvalue && value == stn.nullvalue) {
              valid = false;
            }
            if (!value) {
              valid = false;
            }
            break;
          }
        }

        if (!valid) {
          consoleit(
            tid +
            "'s required field '" +
            elementinfo +
            "' have no values and the value is '" +
            value +
            "'",
            "w",
            tid
          );
        }
      });
      return valid;
    },
    /***
     * Filteration Part ends
     */

    /***
     * pagination and its related Part starts ( scrollloader,perpage etc )
     */
    initializepagination: function (t, stn, inputs, pageinputid) {
      t.attr("data-binderpaginationinit", true);
      var paginationt = $(stn.pagination);
      if (!paginationt.attr("id")) {
        paginationt.attr("id", "Id" + new Date().getTime());
      }
      pageinputid = "input_" + paginationt.attr("id");

      paginationt.children().attr("data-jlpages", true);
      paginationt.attr("data-jlid", stn.tid);
      if (!stn.pageservername) {
        consoleit(
          "Please add a 'data-pageservername' attribute for binder initialized element, It is required for sending your page number field name",
          "w",
          t.attr("id")
        );
      }
      if ($("#" + pageinputid).length == 0) {
        $("body").append(
          '<input type="hidden" id="' +
          pageinputid +
          '" name="' +
          stn.pageservername +
          '"  value="' +
          stn.pagestartswith +
          '" />'
        );
      }
      t.attr(
        this.data.data_filterby,
        t.attr(this.data.data_filterby) + ",#" + pageinputid
      );
      var pageinput = $("#" + pageinputid);
      inputs = inputs.add(pageinput);
      $("body").on(
        "click",
        "[data-jlid='" + stn.tid + "'] [data-jlpages]",
        function (e) {
          if (!$(this).hasClass("disabled")) {
            e.preventDefault();
            var isdynamicrows = false;
            if ($(this).attr("data-dynamicrows")) {
              $(this).parent().children().removeClass("active");
            } else {
              $(this).parent().children().removeClass("active disabled");
            }
            if ($(this).attr("data-previos")) {
              pageinput.val(parseInt(pageinput.val()) - 1);
            } else if ($(this).attr("data-next")) {
              pageinput.val(parseInt(pageinput.val()) + 1);
            } else if ($(this).attr("data-first")) {
              //ToDo
              pageinput.val(stn.pagestartswith);
            } else if ($(this).attr("data-last")) {
              //ToDo
              pageinput.val(0);
            } else if ($(this).attr("data-nextrow")) {
              var nextli = paginationt
                .find(".jlvisiblepage[data-autocreated]:last")
                .next();
              pageinput.val(
                nextli.find("[data-pagenumber]").attr("data-pagenumber")
              );
            } else if ($(this).attr("data-previosrow")) {
              var prevli = paginationt
                .find(".jlvisiblepage[data-autocreated]:first")
                .prev();
              pageinput.val(
                prevli.find("[data-pagenumber]").attr("data-pagenumber")
              );
            } else if ($(this).attr("data-dynamicrows")) {
              var dynamicli = paginationt.find("[data-dynamicrows]:first");
              dynamicli.addClass("active");
              isdynamicrows = true;
              $.binder.insert(t, null, null);
            } else {
              var pageno = 0;
              if ($(this).find("[data-pagenumber]").length > 0) {
                pageno = $(this)
                  .find("[data-pagenumber]")
                  .attr("data-pagenumber");
              } else {
                pageno = $(this).attr("data-pagenumber");
              }
              pageinput.val(pageno);
            }
            if (!isdynamicrows) {
              var currentli = paginationt
                .find('[data-pagenumber="' + pageinput.val() + '"]')
                .closest("li");
              currentli.addClass("active");
              //if (currentli.find('[data-pagenumber]').attr('data-pagenumber') == paginationt
              //    .find('[data-autocreated]:last').find('[data-pagenumber]').attr('data-pagenumber')) {
              //    paginationt.find('[data-next]').addClass('disabled');
              //}
              //if (currentli.find('[data-pagenumber]').attr('data-pagenumber') == paginationt
              //    .find('[data-autocreated]:first').find('[data-pagenumber]').attr('data-pagenumber')) {
              //    paginationt.find('[data-previos]').addClass('disabled');
              //}
              //if (paginationt.find('[data-autocreated]:visible:last').find('[data-pagenumber]').attr('data-pagenumber') == paginationt
              //    .find('[data-autocreated]:last').find('[data-pagenumber]').attr('data-pagenumber')) {
              //    paginationt.find('[data-nextrow]').addClass('disabled');
              //}
              //if (paginationt.find('[data-autocreated]:visible:first').find('[data-pagenumber]').attr('data-pagenumber') == paginationt
              //    .find('[data-autocreated]:first').find('[data-pagenumber]').attr('data-pagenumber')) {
              //    paginationt.find('[data-previosrow]').addClass('disabled');
              //}
              t.binder();
            }
          }
        }
      );
      return inputs;
    },
    resetpaginationandbind: function (t, parentreset) {
      for (var j = 0; j < t.length; j++) {
        if (t.hasOwnProperty(j)) {
          var obj = $(t[j]);
          this.resetpagination(obj);
          if (parentreset) {
            obj.binder({ parentreset: true });
          } else {
            obj.binder();
          }
        }
      }
    },
    setresponsiveonresize: function (t, events) {
      var mt = this;
      this.windowevent(events, function () {
        mt.responsivepagination(t);
      });
    },
    appendpages: function (t, paginationt, properties, kv, stn, pagesize) {
      if (!stn.dynamicinsert) {
        paginationt.children().removeClass("disabled");
      }
      var pagestartswith = parseInt(t.attr("data-pagestartswith"));
      var pagefollow = paginationt.find("[" + kv.data_follow + "]"); //TODO
      pagefollow.hide();
      if (pagefollow[0]) {
        var pagehtml = pagefollow[0].outerHTML;
        var pagetag = paginationt.prop("tagName").toLowerCase();
        var totalrows = parseInt(properties[t.attr("data-pagetotalrows")]);
        var pagenumber = pagestartswith;
        if (!stn.dynamicinsert) {
          paginationt.find("[data-autocreated]").remove();
        }
        /////paginationmaxcolumns * pagesize
        var pagerow;
        /**
         * It is using for checking the rows are inseted dynamically via $.binder.insert function
         * if inserted via this method this will show a page labeled as value of stn.dynamicrowstext( [data-dynamicrowstext] in main json element )
         * @param stn.dynamicinsert
         */
        if (stn.dynamicinsert) {
          /**
           * Checking condition that if not existing already added dynamic rows box
           */
          if (
            paginationt.find("[data-dynamicrows]").length == 0 &&
            t.find("[data-dynamicrows]").length !== 0
          ) {
            pagerow = this.wrapwithparent(pagetag, pagehtml);
            pagerow.children().hide();
            if (pagerow.find("[data-pagenumber]")) {
              pagerow
                .find("[data-pagenumber]")
                .attr("data-pagenumber", stn.dynamicrowsvalue)
                .html(stn.dynamicrowstext);
            }
            pagerow
              .find("[" + kv.data_follow + "]")
              .show()
              .removeAttr(kv.data_follow)
              .attr("data-dynamicrows", true);
            pagefollow.after(pagerow.html());
            pagefollow = pagefollow.next();
          } else if (t.find("[data-dynamicrows]").length == 0) {
            paginationt.find("[data-dynamicrows]").remove();
          }
          /**
           * If already have a design for dynamic rows show it
           * it must be hide on default page loading or document ready
           * it will also hide on clear dynamic rows
           */
          paginationt.find("[data-dynamicrows]").show().addClass("active");
        }
        if (paginationt.find("[data-dynamicrows]").length > 0) {
          pagefollow = paginationt.find("[data-dynamicrows]");
        }
        if (!stn.dynamicinsert) {
          for (var i = 0; i < totalrows; i = i + pagesize) {
            pagerow = this.wrapwithparent(pagetag, pagehtml);
            pagerow.children().hide();
            if (pagerow.find("[data-pagenumber]")) {
              pagerow
                .find("[data-pagenumber]")
                .attr("data-pagenumber", pagenumber)
                .html(pagenumber);
            }
            pagerow
              .find("[" + kv.data_follow + "]")
              .show()
              .removeAttr(kv.data_follow)
              .attr("data-autocreated", true);
            pagefollow.after(pagerow.html());
            pagefollow = pagefollow.next();
            pagenumber++;
          }
        }
      }
    },
    managepagination: function (kv, t, stn, properties) {
      if (t.attr(kv.data_pagination)) {
        var pagesize = parseInt($(t.attr("data-perpage")).val());
        var paginationt = $(t.attr(kv.data_pagination));
        if (paginationt.length > 0) {
          this.appendpages(t, paginationt, properties, kv, stn, pagesize);
          var pageinput = this.getidobj("input_" + paginationt.attr("id"));
          var currentli = paginationt
            .find('[data-pagenumber="' + pageinput.val() + '"]')
            .closest("li");
          currentli.addClass("active");
          if (!stn.dynamicinsert) {
            if (
              currentli.find("[data-pagenumber]").attr("data-pagenumber") ==
              paginationt
                .find("[data-autocreated]:last")
                .find("[data-pagenumber]")
                .attr("data-pagenumber")
            ) {
              paginationt.find("[data-next]").addClass("disabled");
            }
            if (
              currentli.find("[data-pagenumber]").attr("data-pagenumber") ==
              paginationt
                .find("[data-autocreated]:first")
                .find("[data-pagenumber]")
                .attr("data-pagenumber")
            ) {
              paginationt.find("[data-previos]").addClass("disabled");
            }
            var pagevalue = parseInt(pageinput.val());
            if (t.attr(kv.data_showingpagefrom)) {
              $(t.attr(kv.data_showingpagefrom)).text(
                pagevalue * pagesize - pagesize + 1
              );
            }
            if (t.attr(kv.data_showingpageto)) {
              $(t.attr(kv.data_showingpageto)).text(
                pagevalue * pagesize - pagesize + rows.length
              );
            }
          } else if (paginationt.find("[data-autocreated]").length == 0) {
            paginationt.find("[data-next]").addClass("disabled");
            paginationt.find("[data-previos]").addClass("disabled");
          }
          this.responsivepagination(t);
        } else {
          consoleit(
            "Kindly include your pagination element " +
            t.attr(kv.data_pagination),
            "w",
            stn.tid
          );
        }
      }
      return this;
    },
    resetpagination: function (t) {
      var pagestartswith = t.attr("data-pagestartswith");
      if (t.attr(this.data.data_pagination)) {
        var paginationt = $(t.attr(this.data.data_pagination));
        var pageinputid = this.getinputofthis(paginationt);
        pageinputid.val(pagestartswith);
      }
      if (t.attr(this.data.data_scrollloader)) {
        $("#input_scroller_" + this.setid(t)).val(pagestartswith);
      }
    },
    responsivepagination: function (t) {
      if (t.attr(this.data.data_pagination)) {
        var paginationt = this.attributevaluetoobject(
          t,
          this.data.data_pagination
        );
        var maxrows = false;
        if (t.attr("data-maxpaginationcolumns")) {
          maxrows = parseInt(t.attr("data-maxpaginationcolumns"));
        } else if (paginationt.attr("data-maxpaginationcolumns")) {
          maxrows = parseInt(paginationt.attr("data-maxpaginationcolumns"));
        }
        var columnscount = 0;
        var alllists = paginationt.find("li[data-autocreated='true']");
        if (
          alllists.length > 0 ||
          paginationt.find("[data-dynamicrows='true']").length > 0
        ) {
          alllists.hide().removeClass("jlvisiblepage");
          var pageinput = this.getinputofthis(paginationt);
          setTimeout(function () {
            var appliedwidth = 0;
            var totalwidth = paginationt.outerWidth();
            var pagepositiontop = paginationt.position().top;
            var totalheight = paginationt.outerHeight();
            var pagenumbervalue = parseInt(pageinput.val());
            var loopli;
            var toppositioninner;
            var breaked = false;
            paginationt
              .find("[data-dynamicrows='true']")
              .show()
              .addClass("jlvisiblepage");
            for (var i = 0; i < alllists.length; i++) {
              if (breaked == true) {
                break;
              }
              var currentpagenumbers = [
                pagenumbervalue - i,
                pagenumbervalue + i,
              ];
              for (var j = 0; j < currentpagenumbers.length; j++) {
                var cpagenumber = currentpagenumbers[j];
                loopli = paginationt
                  .find("[data-pagenumber=" + cpagenumber + "]")
                  .closest("li");
                if (loopli.length > 0) {
                  loopli.show().addClass("jlvisiblepage");
                  appliedwidth += loopli.outerWidth();
                  if (totalheight == 0) {
                    totalheight = paginationt.outerHeight();
                  }
                  if (totalwidth == 0) {
                    totalwidth = paginationt.outerWidth();
                  }
                  var totalheightinner = paginationt.outerHeight();
                  toppositioninner = paginationt.position().top;
                  if (maxrows && columnscount > maxrows) {
                    loopli.hide().removeClass("jlvisiblepage");
                    breaked = true;
                    break;
                  } else if (totalheightinner > totalheight) {
                    loopli.hide().removeClass("jlvisiblepage");
                    breaked = true;
                    break;
                  }
                  if (toppositioninner != pagepositiontop) {
                    loopli.hide().removeClass("jlvisiblepage");
                    breaked = true;
                    break;
                  }
                  columnscount++;
                }
              }
            }

            if (
              paginationt
                .find(
                  ".jlvisiblepage[data-autocreated],.jlvisiblepage[data-dynamicrows]"
                )
                .last()
                .find("[data-pagenumber]")
                .attr("data-pagenumber") ==
              paginationt
                .find("[data-autocreated],[data-dynamicrows]")
                .last()
                .find("[data-pagenumber]")
                .attr("data-pagenumber")
            ) {
              paginationt.find("[data-nextrow]").addClass("disabled");
            } else {
              paginationt.find("[data-nextrow]").removeClass("disabled");
            }
            if (
              paginationt
                .find(
                  ".jlvisiblepage[data-autocreated],.jlvisiblepage[data-dynamicrows]"
                )
                .first()
                .find("[data-pagenumber]")
                .attr("data-pagenumber") ==
              paginationt
                .find("[data-autocreated],[data-dynamicrows]")
                .first()
                .find("[data-pagenumber]")
                .attr("data-pagenumber")
            ) {
              paginationt.find("[data-previosrow]").addClass("disabled");
            } else {
              paginationt.find("[data-previosrow]").removeClass("disabled");
            }
            toppositioninner = paginationt.position().top;
            if (toppositioninner != pagepositiontop) {
              loopli.hide().removeClass("jlvisiblepage");
            }
          }, 10);
        }
      }
    },
    initializeperpage: function (t, stn, inputs) {
      var mt = this;
      t.attr("data-binderperpageinit", true);
      var perpaget = $(stn.perpage);
      if (perpaget.length > 0 || parseInt(stn.perpage) > 0) {
        if (parseInt(stn.perpage) > 0) {
          var perpageid = "jlperpagevalueof" + stn.tid;
          $("body").append(
            '<input type="hidden" id="' +
              perpageid +
              '" name="' +
              stn.perpagename
              ? stn.perpagename
              : "PageSize" + '" value="' + stn.perpage + '" />'
          );
          t.attr(
            this.data.data_filterby,
            t.attr(this.data.data_filterby) + ",#" + perpageid
          );
          perpaget = $("#" + perpageid);
          $(stn.perpage).attr(stn.perpage, "#" + perpageid);
        } else {
          if (!perpaget.attr("id")) {
            perpaget.attr("id", "Id" + new Date().getTime());
          }
        }
        var perpageinputid = perpaget.attr("id");
        t.attr(
          this.data.data_filterby,
          t.attr(this.data.data_filterby) + ",#" + perpageinputid
        );
        var perpageinput = $("#" + perpageinputid);
        inputs = inputs.add(perpageinput);
        $("body").on("change", t.attr("data-perpage"), function (e) {
          e.preventDefault();
          mt.resetpaginationandbind(t);
        });
      } else {
        consoleit(
          "Kindly include Per Page input " + t.attr("data-perpage"),
          "w",
          stn.tid
        );
      }
      return inputs;
    },
    initializeorderby: function (t, stn, inputs) {
      var mt = this;
      t.attr("data-binderorderinit", true);
      var orderbyt = $(stn.order);
      orderbyt.attr("data-jlorderby", stn.tid);
      if (!orderbyt.attr("id")) {
        orderbyt.attr("id", "Id" + new Date().getTime());
      }
      var orderfieldinputid =
        "input_orderfield_" + orderbyt.attr("id") + "_" + stn.tid;
      var orderbyinputid =
        "input_orderby_" + orderbyt.attr("id") + "_" + stn.tid;
      if (!stn.orderfieldname) {
        consoleit(
          "Please add a 'data-orderfieldname' attribute for binder initialized element, It is required for sending your sort order field name ",
          "w",
          stn.tid
        );
      }
      if (!stn.orderbyname) {
        consoleit(
          "Please add a 'data-orderbyname' attribute for binder initialized element, It is required for sending your sort order name ",
          "w",
          stn.tid
        );
      }
      orderbyt.find("[data-orderbyfield]").css("cursor", "pointer");
      var orderbylist = orderbyt.find(
        "[data-orderbyfield][data-orderbydefault]"
      );
      if (orderbylist.length == 0) {
        orderbylist = orderbyt.find("[data-orderbyfield]:first");
      }

      var firstone = orderbylist.first();
      stn.orderby = stn.orderby
        ? stn.orderby.toLowerCase()
        : stn.defaultorderby;

      if (firstone.length > 0 && firstone.attr("data-orderby")) {
        stn.orderby = firstone.attr("data-orderby");
      }
      if (
        stn.orderbyascendingicon &&
        orderbyt.find("[data-orderbyfield]").find("[data-orderbyascicon]")
          .length == 0
      ) {
        orderbyt
          .find("[data-orderbyfield]")
        [stn.orderbyiconinsertmethod](stn.orderbyascendingicon);
      }
      if (
        stn.orderbydescendingicon &&
        orderbyt.find("[data-orderbyfield]").find("[data-orderbydescicon]")
          .length == 0
      ) {
        orderbyt
          .find("[data-orderbyfield]")
        [stn.orderbyiconinsertmethod](stn.orderbydescendingicon);
      }
      mt.setorderbyicon(orderbyt, firstone, stn.orderby);
      $("body").append(
        '<input type="hidden" id="' +
        orderfieldinputid +
        '" name="' +
        stn.orderfieldname +
        '" value="' +
        firstone.attr("data-orderbyfield") +
        '" />'
      );
      $("body").append(
        '<input type="hidden" id="' +
        orderbyinputid +
        '" name="' +
        stn.orderbyname +
        '" value="' +
        stn.orderby +
        '" />'
      );
      if (!t.attr(this.data.data_filterby)) {
        t.attr(this.data.data_filterby, "");
      }
      t.attr(
        this.data.data_filterby,
        t.attr(this.data.data_filterby) +
        (t.attr(this.data.data_filterby) ? "," : "") +
        "#" +
        orderfieldinputid +
        ",#" +
        orderbyinputid
      );
      var orderfieldinput = $("#" + orderfieldinputid);
      var orderbyinput = $("#" + orderbyinputid);
      inputs = inputs.add(orderfieldinput).add(orderbyinput);
      this.bodyevent(
        "click",
        "[data-jlorderby='" + stn.tid + "'] [data-orderbyfield]",
        function (e, th) {
          e.preventDefault();
          orderfieldinput.val(th.attr("data-orderbyfield"));
          if (!th.attr("data-orderby")) {
            th.attr("data-orderby", "ASC");
          }
          if (th.attr("data-orderby") == "ASC") {
            th.attr("data-orderby", "DESC");
          } else {
            th.attr("data-orderby", "ASC");
          }
          var orderbyvalue = th.attr("data-orderby");
          orderbyinput.val(orderbyvalue);
          mt.setorderbyicon(orderbyt, th, orderbyvalue);
          mt.resetpaginationandbind(t);
        }
      );
      return inputs;
    },
    setorderbyicon: function (allorderobjects, ordert, ordervalue) {
      allorderobjects
        .find("[data-orderbydescicon],[data-orderbyascicon]")
        .hide();
      if (ordert && ordervalue) {
        ordert.find("[data-orderby" + ordervalue + "icon]").show();
      }
    },
    initializescrollloader: function (t, stn, inputs, pageinputid) {
      t.attr("data-binderscrollloaderinit", true);
      pageinputid = "input_scroller_" + stn.tid;
      var scrollerpageinput = $("#" + pageinputid);
      if (scrollerpageinput.length == 0) {
        $("body").append(
          '<input type="hidden" id="' +
          pageinputid +
          '" name="' +
          stn.pageservername +
          '"  value="' +
          stn.pagestartswith +
          '" />'
        );
        scrollerpageinput = $("#" + pageinputid);
      }
      t.attr(
        this.data.data_filterby,
        t.attr(this.data.data_filterby) + ",#" + pageinputid
      );

      inputs = inputs.add(scrollerpageinput);
      var scrollbyelement = $(window);
      var isscrollbyelement = false;
      var scrollbyelementselector = stn.scrollbyelement;
      if (stn.scrollbyelement) {
        if (stn.scrollbyelement == "this") {
          scrollbyelement = t;
          scrollbyelementselector = "#" + stn.tid;
        } else {
          scrollbyelement = $(stn.scrollbyelement);
        }
        isscrollbyelement = true;
      }

      t.attr("data-jlpagecount", parseInt(scrollerpageinput.val()) + 1);
      if (stn.loadmore) {
        $(stn.loadmore).attr("data-currentpageid", pageinputid);
        this.bodyevent("click", stn.loadmore, function (e) {
          scrollerpageinput.val(parseInt(scrollerpageinput.val()) + 1);
          var currentpage = scrollerpageinput.val();
          t.children(":visible").last().attr("data-jlscrollerhitted", true);
          t.binder({ currentpage: currentpage });
        });
      }

      this.windoworelementevent(
        "scroll",
        function (e, force) {
          if (
            t.closest("body").length == 0 ||
            t.attr("data-jlloading") ||
            !t.attr("data-dataloaded")
          ) {
            console.log("Deactivated");
            return true;
          }

          if (stn.scrollloader && !t.attr("data-disablescrollevents")) {
            scrollbyelement.attr(
              "data-lastscrolledupto",
              t[0].scrollHeight - t.scrollTop()
            );
            var currentpage;
            if (stn.scrolldirection && stn.scrolldirection == "right") {
              var top =
                (scrollbyelement.scrollLeft() || $("body").scrollLeft()) +
                (scrollbyelement.height() || $("body").height());
              if (
                t.children(":visible").last().not("[data-jlscrollerhitted]")
                  .length > 0
              ) {
                // -t.children(":visible").last().height()

                var childtop =
                  t.children(":visible").last().offset().left -
                  scrollbyelement.width();
                if (isscrollbyelement) {
                  childtop =
                    t.children(":visible").last().position().left -
                    scrollbyelement.width();
                }
                currentpage = parseInt(scrollerpageinput.val());
                if (
                  top > childtop &&
                  currentpage < parseInt(t.attr("data-jlpagecount"))
                ) {
                  if ($.active == 0) {
                    scrollerpageinput.val(
                      parseInt(scrollerpageinput.val()) + 1
                    );
                    currentpage = scrollerpageinput.val();
                    t.children(":visible")
                      .last()
                      .attr("data-jlscrollerhitted", true);
                    t.binder({ currentpage: currentpage });
                  }
                }
              }
            } else if (stn.scrolldirection && stn.scrolldirection == "up") {
              if (
                t.children(":visible").first().not("[data-jlscrollerhitted]")
                  .length > 0
              ) {
                var childbottom = t.children(":visible").first().offset().top;
                currentpage = parseInt(scrollerpageinput.val());
                if (
                  childbottom > -50 &&
                  currentpage < parseInt(t.attr("data-jlpagecount"))
                ) {
                  scrollerpageinput.val(parseInt(scrollerpageinput.val()) + 1);
                  if ($.active == 0) {
                    t.children(":visible")
                      .first()
                      .attr("data-jlscrollerhitted", true);
                    t.binder({ currentpage: currentpage });
                  }
                }
              }
            } else {
              if (!isscrollbyelement) {
                if (
                  $(window).scrollTop() ==
                  $(document).height() - $(window).height()
                ) {
                  // ajax call get data from server and append to the div
                }

                var top =
                  (scrollbyelement.scrollTop() || $("body").scrollTop()) +
                  (scrollbyelement.height() || $("body").height());
                if (
                  t.children(":visible").last().not("[data-jlscrollerhitted]")
                    .length > 0
                ) {
                  // -t.children(":visible").last().height()

                  var childbottom =
                    t.children(":visible").last().offset().top +
                    t.children(":visible").last().height();
                  if (isscrollbyelement) {
                    childbottom =
                      t.children(":visible").last().offset().top +
                      t.children(":visible").last().height();
                  }

                  currentpage = parseInt(scrollerpageinput.val());
                  if (
                    $(window).scrollTop() >=
                    $(document).height() - $(window).height() - 100 &&
                    currentpage < parseInt(t.attr("data-jlpagecount"))
                  ) {
                    if ($.active == 0) {
                      scrollerpageinput.val(
                        parseInt(scrollerpageinput.val()) + 1
                      );
                      currentpage = scrollerpageinput.val();
                      t.children(":visible")
                        .last()
                        .attr("data-jlscrollerhitted", true);
                      t.binder({ currentpage: currentpage });
                    } else if (force) {
                      setTimeout(function () {
                        scrollbyelement.trigger("scroll", force);
                      }, 1000);
                    }
                  }
                }
              } else {
                var top =
                  (scrollbyelement.scrollTop() || $("body").scrollTop()) +
                  (scrollbyelement.height() || $("body").height());
                if (
                  t.children(":visible").last().not("[data-jlscrollerhitted]")
                    .length > 0
                ) {
                  // -t.children(":visible").last().height()

                  var childbottom =
                    t.children(":visible").last().offset().top +
                    t.children(":visible").last().height();
                  if (isscrollbyelement) {
                    childbottom =
                      t.children(":visible").last().offset().top +
                      t.children(":visible").last().height();
                  }

                  currentpage = parseInt(scrollerpageinput.val());
                  if (
                    (childbottom < scrollbyelement.height() ||
                      top > childbottom) &&
                    currentpage < parseInt(t.attr("data-jlpagecount"))
                  ) {
                    if ($.active == 0) {
                      scrollerpageinput.val(
                        parseInt(scrollerpageinput.val()) + 1
                      );
                      currentpage = scrollerpageinput.val();
                      t.children(":visible")
                        .last()
                        .attr("data-jlscrollerhitted", true);
                      t.binder({ currentpage: currentpage });
                    } else if (force) {
                      setTimeout(function () {
                        scrollbyelement.trigger("scroll", force);
                      }, 1000);
                    }
                  }
                }
              }
            }
          }
        },
        scrollbyelementselector
      );
      return inputs;
    },
    initscrollevent: function (t, eventname, dv, datas) {
      var fn = this;

      $(window).one(eventname, function (e) {
        var top =
          ($(window).scrollTop() || $("body").scrollTop()) +
          ($(window).height() || $("body").height());
        var elementtop = t.offset().top;
        if (elementtop > top || elementtop == 0) {
          fn.initscrollevent(t, eventname, dv, datas);
        } else {
          fn.binderinitialization(t, "data-binderinit-" + eventname, datas);
        }
      });
    },
    managescrollloading: function (t, stn, properties) {
      if (t.attr(this.data.data_scrollloader)) {
        ////var pagestartswith = parseInt(t.attr("data-pagestartswith"));
        var perpagevalue = t.attr("data-perpage");
        var pagesize = 0;
        if ($.isNumeric(perpagevalue)) {
          pagesize = parseInt(perpagevalue);
        } else {
          pagesize = parseInt($(perpagevalue).val());
        }

        var totalrows = parseInt(properties[t.attr("data-pagetotalrows")]);
        t.attr("data-jlpagecount", Math.ceil(totalrows / pagesize));
        if (stn.loadmore && $(stn.loadmore).length > 0) {
          if (
            t.attr("data-jlpagecount") <=
            $("#" + $(stn.loadmore).attr("data-currentpageid")).val()
          ) {
            $(stn.loadmore).hide();
          } else {
            $(stn.loadmore).show();
          }
        }
        if (totalrows > 0) {
          $(window).trigger("scroll", true);
        }
      }
    },
    /***
     * pagination ends
     */
    /**
     * Bind Manager Work Flow
     */
    binderinitialization: function (t, attributename, datas) {
      if (t.attr(attributename)) {
        $.each(datas, function (canceli, cancelv) {
          if (canceli.startsWith("data-binderinit")) {
            t.removeAttr(canceli);
          }
        });
        /////t.binder();
        this.resetpaginationandbind(t);
      }
    },
    initfn: function (t, datas, stn) {
      try {
        if (stn.parent && !stn.parentreset) {
          return true;
        }
        var fn = this;
        var containsunwantedcharacters = false;
        var initby = false;
        $.each(datas, function (di, dv) {
          if (stn && stn.lazyload && stn.lazyload == "true" && stn.json) {
            if (
              $(window).scrollTop() + $(window).height() < t.offset().top &&
              typeof stn.json == "string" &&
              stn.json != ""
            ) {
              consoleit(
                "You need to scroll to this element to initilize it.",
                "w",
                fn.getelementinfo(t)
              );
              initby = true;
              t.attr("data-lazyload", true);
            } else {
              //// t.attr("data-lazyload", false);
            }
          }

          if (di.split("if").length == 1 && dv.split("{").length > 1) {
            containsunwantedcharacters = true;
            initby = true;
          } else if (
            di.startsWith("data-binderinit") ||
            di.startsWith("data-binderperminit")
          ) {
            //If there is an upcoming event or ajax request but you no need to block that request and bind after a custom event you can use it. It using for remove unwanted lists loading and improve page loading performance.
            var pieces = di.split("-");
            var eventname = pieces[2];
            var initializewithoutelement = true;
            if (t.attr("data-binderinitrequired") == true) {
              initializewithoutelement = false;
            }
            var allowinit = false;
            if ($(dv).length > 0 || dv == "window") {
              allowinit = true;
            } else {
              if (initializewithoutelement == true) {
                allowinit = true;
              }
            }
            if (pieces.length == 3 && allowinit) {
              $(dv).attr("data-initby-" + t.attr("id"));
              if (
                di.startsWith("data-binderperminit") &&
                !t.attr("data-binderperminitinitiated")
              ) {
                initby = true;
                t.attr("data-binderperminitinitiated", true);
                consoleit(
                  "You need to " + eventname + " " + dv + " to initilize.",
                  "w",
                  fn.getelementinfo(t)
                );

                $("body").on(eventname, dv, function (e) {
                  if (t.closest("body").length > 0) {
                    if (t.attr("data-binderperminit-" + eventname)) {
                      t.binder();
                    }
                  }
                });
              } else if (di.startsWith("data-binderinit")) {
                initby = true;
                if (eventname == "scroll") {
                  consoleit(
                    "You need to " + eventname + " " + dv + " to initilize.",
                    "w",
                    fn.getelementinfo(t)
                  );
                  fn.initscrollevent(t, eventname, dv, datas);
                  $(window).trigger(eventname);
                } else {
                  consoleit(
                    "You need to " + eventname + " " + dv + " to initilize.",
                    "w",
                    fn.getelementinfo(t)
                  );

                  $("body").one(eventname, dv, function (e) {
                    if (t.closest("body").length > 0) {
                      fn.binderinitialization(
                        t,
                        "data-binderinit-" + eventname,
                        datas
                      );
                    }
                  });
                }
              }
            }
          }
        });
        if (containsunwantedcharacters) {
          initby = true;
        }
        return initby;
      } catch (e) {
        return false;
      }
    },
    create: function (t, opt, callback) {
      this.triggerevent(t, "beforeinitialize");
      var stn = $.extend({}, this.defaults);
      stn.tid = this.setid(t);

      this.setnoresults(t);
      var dataattributes = this.attr(t);
      var datastn = this.getdataattributesforsettings(t, dataattributes);
      if (typeof datastn == "object") {
        stn = $.extend(stn, datastn);
      }

      if (typeof opt == "object") {
        stn = $.extend(stn, opt);
      } else if (typeof opt == "string" && opt == "refresh") {
        stn.refresh = true;
      }

      bindmanager.settings[stn.tid] = stn;
      stn.caching = stn.caching && stn.caching == "true";

      if (this.initfn(t, dataattributes, stn) == false) {
        this.gettemplatedetails(t, stn.tid);
        var inputs = this.getfilterbyinputs(t, stn.tid);
        if (!t.attr("data-binderorderinit") && stn.order) {
          inputs = this.initializeorderby(t, stn, inputs);
        }
        var pageinputid = "";
        var pageinput;
        if (!t.attr("data-binderperpageinit") && stn.perpage) {
          inputs = this.initializeperpage(t, stn, inputs);
        }
        if (!t.attr("data-binderscrollloaderinit") && stn.scrollloader) {
          inputs = this.initializescrollloader(t, stn, inputs, pageinputid);
        }

        if (!t.attr("data-binderpaginationinit") && stn.pagination) {
          inputs = this.initializepagination(t, stn, inputs, pageinputid);
        }

        if (stn.pagestartswith || stn.currentpage) {
          stn.currentpage = parseInt(
            stn.currentpage ? stn.currentpage : stn.pagestartswith
          );
        }

        var paginationt;
        if (stn.scrollloader && stn.pagination) {
          consoleit("Pagination active", "s", stn.tid);
          paginationt = $(stn.pagination);
          pageinputid = "input_" + paginationt.attr("id");
          pageinput = $("#" + pageinputid).prop("disabled", true);
        } else {
          if (stn.scrollloader) {
            consoleit("Scroll Loading active", "s", stn.tid);
            pageinputid = "input_scroller_" + stn.tid;
            pageinput = $("#" + pageinputid).prop("disabled", false);
          }
          if (stn.pagination) {
            paginationt = $(stn.pagination);
            pageinputid = "input_" + paginationt.attr("id");
            pageinput = $("#" + pageinputid).prop("disabled", false);
          }
        }

        if (!t.attr("data-binderinit")) {
          if (stn.uniquekey && pageinput) {
            this.bodyevent(
              "jlupdatepage jlupdaterow",
              "#" + stn.tid + " [data-jlcurrentpage]",
              function (e, th) {
                if (t.closest("body").length > 0) {
                  if (stn.caching) {
                    t.removeAttr("data-caching");
                  }
                  var isSingle = false;
                  if (isSingle) {
                    $.binder.addfilter(
                      t,
                      t.attr("data-uniquekey"),
                      th.attr("data-jluniquekeyvalue")
                    );
                    $.binder.addfilter(
                      t,
                      t.attr("data-pageservername"),
                      t.attr("data-pagestartswith")
                    );
                    $.binder.addfilter(
                      t,
                      $(t.attr("data-perpage")).attr("name"),
                      1
                    );

                    t.binder({
                      isuniqueupdate: true,
                      currentpage: t.attr("data-pagestartswith"),
                    });
                    $.binder.addfilter(t, t.attr("data-uniquekey"), "");
                    $.binder.addfilter(t, t.attr("data-uniquekey"), "");
                    $.binder.addfilter(
                      t,
                      $(t.attr("data-perpage")).attr("name"),
                      ""
                    );
                  } else {
                    var currentpageinputvalue = pageinput.val();
                    pageinput.val(th.attr("data-jlcurrentpage"));
                    t.binder({
                      currentpage: th.attr("data-jlcurrentpage"),
                      isuniqueupdate: true,
                    });
                    pageinput.val(currentpageinputvalue);
                  }

                  if (stn.caching) {
                    t.attr("data-caching", stn.caching);
                  }
                }
              }
            );
          }
          this.setfilters(t, stn, inputs);
          consoleit("jlbinder initialized", "s", stn.tid);
        }
        var duplicateRequest = false;
        if (t.attr("data-jlloading") && stn.json) {
          consoleit("jlbinder already initialized", "w", stn.tid);
          ////// return false;
        }
        t.attr("data-jlloading", true);
        if (stn.reflect) {
          $(stn.reflect).attr("data-jlloading", true);
        }
        var mt = this;
        var timeout = 500;
        if (typeof stn.json == "object") {
          timeout = 0;
        }
        //// setTimeout(function () {
        var valid = mt.validaterequiredfilters(stn.tid, stn,t);
        if (valid) {
          consoleit("all required fields founded", "s", stn.tid);
          mt.processrequest(t, stn, inputs, opt, callback);
        } else {
          consoleit("some required fields not found", "w", stn.tid);
          mt.success(t, stn, [], false, callback);
        }
        //// }, timeout);
        t.attr("data-binderinit", true);
      } else {
        consoleit(
          "can't initilized because of some dependent events used like data-binderinit-{eventname}",
          "w",
          stn.tid
        );
      }
    },
    makepostdata: function (inputs, t) {
      var post = {};
      var filteredinputs = inputs.not(this.data.disabled);
      for (var inputi = 0; inputi < filteredinputs.length; inputi++) {
        var th = $(filteredinputs[inputi]);
        var tagtype = th.attr("type");
        var name = th.attr("name");
        if (th.attr(this.data.data_servername)) {
          name = th.attr(this.data.data_servername);
        }

        if (th.attr(this.data.data_servernames)) {
          var servernameieces = th.attr(this.data.data_servernames).split(",");
          for (var servername in servernameieces) {
            if (servernameieces.hasOwnProperty(servername)) {
              var servernameobj = servernameieces[servername];
              if (this.fetchvalue[tagtype]) {
                post[servernameobj] = this.fetchvalue[tagtype](th);
              } else {
                post[servernameobj] = this.trimvalue(th);
              }
            }
          }
        }
        if (name) {
          if (this.fetchvalue[tagtype]) {
            if (th.prop("checked")) {
              if (name.split("[").length > 1) {
                if (!post[name]) {
                  post[name] = [this.fetchvalue[tagtype](th)];
                } else {
                  post[name].push(this.fetchvalue[tagtype](th));
                }
              } else {
                post[name] = this.fetchvalue[tagtype](th);
              }
            }
          } else {
            let value = this.trimvalue(th);
            if (value || !post[name]) {
              post[name] = value;
              if (th.attr("data-secondname")) {
                post[th.attr("data-secondname")] = value;
              }
            }
          }
        }
      }
      if (t && t.length > 0 && t.attr("data-filterby-inline")) {
        var rows = t.attr("data-filterby-inline").split(",");
        for (var i = 0; i < rows.length; i++) {
          var rowsparams = rows[i].split(":");
          if (rowsparams.length > 0 && rowsparams[1] && rowsparams[0]) {
            post[rowsparams[0]] = rowsparams[1];
          }
        }
      }
      let items = {};
      for (var itemi in post) {
        if (
          post.hasOwnProperty(itemi) &&
          itemi !== "limit" &&
          itemi !== "pageNumber" &&
          itemi !== "offset" &&
          itemi !== "sortOrder" &&
          itemi !== "sortField"
        ) {
          var item = post[itemi];
          if (item && item != "0") {
            items[itemi] = { $eq: item };
          }
        }
      }

      // let filters = JSON.stringify(items);
      // post["filters"] = filters;
      return post;
    },
    findtemplateitems: function (parenttag, html, selectItems) {
      var template = this.wrapwithparent(parenttag, html);
      for (var itemi in selectItems) {
        if (selectItems.hasOwnProperty(itemi)) {
          var item = selectItems[itemi];
          if (item != "*") {
            if (
              template.find('[data-subjson="' + item + '"]').length > 0 ||
              item == "Status"
            ) {
              stn.selectedQueryParameters.push(item);
            } else if (html && html.split(item + "}").length > 1) {
              stn.selectedQueryParameters.push(item);
            } else {
              var obj = this.findjsonfieldelements(template, item).obj;
              if (obj.length > 0) {
                stn.selectedQueryParameters.push(item);
              }
            }
          }
        }
      }
    },
    createselectqueryparams: function (t, stn, post) {
      var alljsons = $("[data-json='" + stn.json + "']");
      var selectedItems = {};
      stn.selectedQueryParameters = [];
      var selectItems;
      var element = $("[data-select][data-json='" + stn.json + "']").first();
      if (element.length > 0) {
        selectedItems[stn.json] = element.attr("data-select").split(",");
        for (var i = 0; i < $("[data-json='" + stn.json + "']").length; i++) {
          element = $(alljsons[i]);

          if (selectedItems[stn.json]) {
            selectItems = selectedItems[stn.json];
          }
          // enabled stn caching for select query params because not using localcache at the moment
          if (!stn.caching || stn.caching || stn.forceselectfilter) {
            if (selectItems) {
              var templatedetailsobj = this.gettemplatedetails(
                element,
                element.attr("id")
              );
              var html = templatedetailsobj.html;

              var parenttag = t.prop("tagName").toLowerCase();
              var template = this.wrapwithparent(parenttag, html);
              for (var itemi in selectItems) {
                if (selectItems.hasOwnProperty(itemi)) {
                  var item = selectItems[itemi];
                  if (item != "*") {
                    if (
                      template.find('[data-subjson="' + item + '"]').length >
                      0 ||
                      item == "Status"
                    ) {
                      stn.selectedQueryParameters.push(item);
                    } else if (html && html.split(item + "}").length > 1) {
                      stn.selectedQueryParameters.push(item);
                    } else {
                      var obj = this.findjsonfieldelements(
                        template,
                        item,
                        true
                      ).obj;
                      if (obj.length > 0) {
                        stn.selectedQueryParameters.push(item);
                      }
                    }
                  }
                }
              }
            }
          } else {
            stn.selectedQueryParameters = selectItems;
          }
        }
        if (stn.selectedQueryParameters.length > 0) {
          stn.selectedQueryParameters = stn.selectedQueryParameters
            .filter(this.makeUniQueArray)
            .sort();
          post.select = stn.selectedQueryParameters.join(",");
        }
      }
      return post;
    },
    makeUniQueArray: function (value, index, self) {
      return self.indexOf(value) === index;
    },
    makeUniquePostKey: function (url, post) {
      var postobj = JSON.parse(post);
      let keys = Object.keys(postobj);
      let excludedKeys = ["select", "filter"];
      keys = keys.filter((key) => !excludedKeys.includes(key));
      keys = keys.sort();
      var selectedKeyValues = keys.map((key) => {
        if (
          typeof postobj[key] == "number" ||
          postobj[key] ||
          postobj[key] === false
        ) {
          return key + "_" + postobj[key];
        }
      });
      selectedKeyValues = selectedKeyValues.filter((x) => x);

      return (
        url +
        (selectedKeyValues.length > 0
          ? "__" + selectedKeyValues.join("__")
          : "")
      );
    },
    processrequest: function (t, stn, inputs, opt, callback) {
      var mt = this;
      if (typeof stn.json == "string" && stn.json != "") {
        mt.triggerevent(t, "beforemakerequestdata", {}, null, true);
        var post = this.makepostdata(inputs, t);

        post = this.createselectqueryparams(t, stn, post);

        if (!stn.requestmethod) {
          stn.requestmethod = stn.defaultrequestmethod;
        }
        consoleit(
          "requested by " + stn.requestmethod + " method",
          "s",
          stn.tid
        );
        var uniquepost = this.makeUniquePostKey(stn.json, JSONstringify(post));
        mt.triggerevent(t, "aftermakerequestdata", { post: post, stn: stn });
        if (stn.caching) {
          post.isCaching = true;
        }
        this.requesthandler(
          t,
          stn.requestmethod,
          stn.json,
          post,
          function () {
            if (stn.caching) {
              var isnewcache = false;
              if (!bindmanager.cachequeue[uniquepost]) {
                isnewcache = true;
                bindmanager.cachequeue[uniquepost] = [];
              }

              consoleit("caching is active", "s", stn.tid);

              if (
                !stn.refresh &&
                bindmanager.cache[uniquepost] &&
                bindmanager.cache[uniquepost] !== ""
              ) {
                var data = $.extend({}, bindmanager.cache[uniquepost]);
                mt.triggerevent(t, "afterrequest", data);
                var cacheOk = true;

                mt.success(
                  t,
                  stn,
                  data,
                  function (rows) {
                    if (isnewcache) {
                      if (rows.length == 0) {
                        cacheOk = false;
                      }
                    }
                  },
                  callback
                );

                return cacheOk;
              } else {
                if (!isnewcache) {
                  bindmanager.cachequeue[uniquepost].push({ stn: stn, t: t });
                  return true;
                }
              }
              ////bindmanager.cachequeue[uniquepost] = true;
              return false;
            }
            ////bindmanager.cachequeue[uniquepost] = true;
            return false;
          },
          function (data) {

            // if(t.closest("body").length == 0) {
            //   return true;
            // }


            if (stn.caching) {
              bindmanager.cachedata(uniquepost, $.extend({}, data));
            }
            stn.serverrequested = true;
            mt.triggerevent(t, "afterrequest", data);
            mt.success(t, stn, data, false, callback);
            var appliedelements = {};
            appliedelements[stn.tid] = true;
            if (bindmanager.cachequeue && bindmanager.cachequeue[uniquepost]) {
              for (var obji in bindmanager.cachequeue[uniquepost]) {
                if (bindmanager.cachequeue[uniquepost].hasOwnProperty(obji)) {
                  var obj = bindmanager.cachequeue[uniquepost][obji];
                  if (!appliedelements[obj.stn.tid]) {
                    appliedelements[obj.stn.tid] = true;
                    obj.stn.serverrequested = true;
                    mt.triggerevent(obj.t, "afterrequest", data);
                    mt.success(obj.t, obj.stn, data, false, callback);
                  }
                }
              }
            }

            delete bindmanager.cachequeue[uniquepost];
          }
        );
      } else {
        if (typeof stn.json == "object") {
          mt.success(t, stn, stn.json, false, callback);
        } else if (typeof opt == "object") {
          mt.success(t, stn, opt, false, callback);
        }
      }
    },
    requesthandler: function (t, method, url, post, cachefn, fn, reqi) {
      if (!reqi && reqi != 0) {
        reqi = -1;
      }
      if (reqi < 1000) {
        var mt = this;
        let cached = cachefn();

        if (reqi >= 0 || !cached) {
          this.triggerevent(t, "beforerequest", post);

          if ($.active <= 1) {
            t.attr("data-binderrequested", true);
            if (cached) {
              return;
            }
            $[method](url, post, fn).fail(function () {
              consoleit("requested failed", "e", mt.getelementinfo(t));
            });
          } else {
            setTimeout(function () {
              reqi++;
              mt.requesthandler(t, method, url, post, cachefn, fn, reqi);
            }, 100);
          }
        } else {
          consoleit("requested cached", "s", this.getelementinfo(t));
          setTimeout(function () {
            reqi++;
            mt.requesthandler(t, method, url, post, cachefn, fn, reqi);
          }, 100);
        }
      }
    },
    success: function (t, stn, result, cachecheckfn, callback) {
      var data = result;
      if (data && data.error) {
        alert("Error: " + data.message);
      }
      //Notify element that got result from server
      t.attr("data-bindersuccess", true);
      if (data.data) {
        data.Results = data.data;
      }
      var triggerdataall = {
        rows: data,
      };
      if (!stn.nobind && stn.nobind !== true) {
        t.removeAttr("data-jlloading");
        if (stn.reflect) {
          $(stn.reflect).removeAttr("data-jlloading");
        }

        if (stn.foreach) {
          stn.dataobject = stn.foreach;
        }
        var objrows = stn.dataobject.split(",");
        var foreachi = false;
        if (stn.dataobject.split(" in ").length == 2) {
          var objrowspieces = stn.dataobject.split(" in ");
          objrows = [objrowspieces[1]];
          foreachi = objrowspieces[0];
        }
        var rowsobject = this.finddatarows(objrows, data);
        var rows = rowsobject;
        if (stn.objecttoarray) {
          rows = [rowsobject];
        }
        if (cachecheckfn) {
          cachecheckfn(rows);
        }
        var allowedinputs = this.data.inputs.split(",");
        var templatedetailsobj = this.gettemplatedetails(
          t,
          stn.tid,
          stn.dynamicinsert
        );
        var html = templatedetailsobj.html;
        if (!html) {
          consoleit(
            "No html template inside your element",
            "e",
            this.getelementinfo(t)
          );
        }
        //ch.attr(kv.data_follow, true);
        var parenttag = t.prop("tagName").toLowerCase();
        /**
         * Following elements excluded from current binding
         * inner [data-json] elements,[data-subjson] elements,[data-static-free] elements
         * [data-static-free] elements only using for [data-static] elements and if not used it binder will show static elemetns before bind results.
         */
        var excludedelements = t
          .find("[data-json],[data-subjson],[data-pagination]")
          .find(templatedetailsobj.nochange);
        var nochangeobj = t
          .find(templatedetailsobj.nochange)
          .not(excludedelements);
        var dynamicobj = templatedetailsobj.nochangedchildrens;
        nochangeobj.hide();
        /**
         * Show all static elements before binding results
         * To avoid show static elements use data-static-free="true" attribute in static element
         */
        t.find("[" + this.data.data_static + "]:not([data-static-free])")
          .not(excludedelements)
          .show();
        var followedelements = t
          .find("[" + this.data.data_follow + "]")
          .not(excludedelements);
        if (followedelements.length > 1) {
          followedelements.show();
        }
        var paginationt;
        var pageinputid;
        var pagestartswith;
        if (t.attr("data-pagestartswith")) {
          pagestartswith = parseInt(t.attr("data-pagestartswith"));
        }
        var isbindingfreshdata = false;

        if (!stn.scrollloader) {
          if (!stn.pagination && stn.dynamicinsert) {
            t.find("[data-dynamicrows]").not(excludedelements).remove();
          } else {
            dynamicobj.remove();
            isbindingfreshdata = true;
          }
        } else {
          ////if (!stn.isuniqueupdate&&(!stn.uniquekey || $("#input_scroller_" + this.setid(t)).val() == pagestartswith)) {
          if (!stn.isuniqueupdate) {
            t.attr("data-jlpagecount", 0);
            if (stn.currentpage == pagestartswith) {
              dynamicobj.remove();
              isbindingfreshdata = true;
            }
          } else {
            dynamicobj.attr("data-uniquerowsupdated", false);
          }
        }
        if (isbindingfreshdata && bindmanager.dynamicrows[stn.tid]) {
          bindmanager.dynamicrows[stn.tid] = [];
        }
        var totalrowsperpage = rows ? rows.length : 0;

        if (rows && totalrowsperpage != 0) {
          var pagevalue;
          var pageinput;
          var pagesize;
          if (t.attr(this.data.data_pagination)) {
            paginationt = $(t.attr(this.data.data_pagination));
            pageinputid = "input_" + paginationt.attr("id");
            pageinput = $("#" + pageinputid);
            pagevalue = parseInt(pageinput.val());
            pagesize = parseInt($(stn.perpage).val());
          }
          this.triggerevent(t, "beforeappendcomplete", triggerdataall);

          var kv = this.data;
          var mt = this;

          if (totalrowsperpage > 0 || typeof rows == "object") {
            var properties = "";
            var rowindex;
            var rowobject;
            var loopindex = 0;

            var isArray = false;
            if (totalrowsperpage > 0) {
              isArray = true;
            }
            consoleit("appending rows", "s", stn.tid);
            consoleit(rows, "s", stn.tid);
            t.attr("data-dataloaded", true);
            this.triggerevent(t, "beforeappendrows", rows);
            for (rowindex in rows) {
              if (
                rows.hasOwnProperty(rowindex) &&
                (!isArray || isNaN(rowindex) == false)
              ) {
                rowobject = rows[rowindex];
                if (rowobject != null) {
                  loopindex++;
                  this.loopandsetvalues(
                    t,
                    stn,
                    loopindex,
                    totalrowsperpage,
                    rowindex,
                    rowobject,
                    foreachi,
                    allowedinputs,
                    excludedelements,
                    templatedetailsobj,
                    html,
                    parenttag,
                    pagesize,
                    pagevalue,
                    isbindingfreshdata
                  );
                }
              }
            }

            if (parenttag == "select" && !t.attr("data-disablevalue")) {
              this.applydropdownbasedfunctionalities(t);
            }

            properties = $.extend(data, rows[0]);
            this.managepagination(kv, t, stn, properties).managescrollloading(
              t,
              stn,
              properties
            );
            mt.autofn($("body"), t, properties);
            this.triggerevent(t, "aftergetresults");
          } else {
            if (stn.serverrequested) {
              this.triggerevent(t, "afternoresults");
            }
            this.showhideboxes(t);
          }
          if (callback) {
            callback(t, rows);
          }
        } else {
          if (stn.serverrequested) {
            this.triggerevent(t, "afternoresults");
          }
          this.showhideboxes(t);
        }

        var datatrigger = t.attr("data-trigger");
        if (datatrigger) {
          this.triggerevent(t, datatrigger);
        }
      }
      this.triggerevent(t, "afterappendcomplete", triggerdataall);
      //Find all grand childrens
      var grandchildrenrows = this.grandchildren(t, "[data-json]");
      //Checking not inactive json elements and also not child elements of allowed elements
      var allowedjsontoinit = t
        .find(
          "[data-json]:not([data-parent],[data-parent] [data-json],[data-binderrequested],[data-bindersuccess],[data-isactive=false])"
        )
        .not(grandchildrenrows);
      if (allowedjsontoinit.length > 0) {
        consoleit("Initializing child data-json elements", "s", stn.tid);
        this.resetpaginationandbind(allowedjsontoinit);
      }
      //Only supported id
      if ($("[data-parent='#" + stn.tid + "'][data-json]").length > 0) {
        consoleit(
          "Initializing child data-parent with data-json elements",
          "s",
          stn.tid
        );
        $("[data-parent='#" + stn.tid + "'][data-json]").attr(
          "data-parentreset",
          true
        );
        this.resetpaginationandbind(
          $("[data-parent='#" + stn.tid + "'][data-json]"),
          true
        );
      }
      ////if ($.active <= 1) {
      ////    $('[id]').each(function() {
      ////        if ($("[id='" + $(this).attr("id") + "']").length > 1) {
      ////            ////consoleit("Dulpicate id found this will make issues if it is used in binder - '" +
      ////            ////    $(this).attr("id") +
      ////            ////    "'",
      ////            ////    "e");
      ////        }
      ////    });
      ////}
    },
    findjsonfieldelements: function (template, key, deepfind) {
      if (key.indexOf(")") > -1) {
        debugger;
      }
      var htmlelements = template.find(
        "." +
        key +
        ",#" +
        key +
        ",[name='" +
        key +
        "'],[data-key='" +
        key +
        "'],[data-jsonkey='" +
        key +
        "']"
      );
      var attrelements = template.find(
        "[data-" +
        key.toLowerCase() +
        "-inline],[data-inline-" +
        key.toLowerCase() +
        "],[data-" +
        key.toLowerCase() +
        "-attr],[data-attr-" +
        key.toLowerCase() +
        "],[data-" +
        key.toLowerCase() +
        "-if],[data-if-" +
        key.toLowerCase() +
        "],[data-attr-" +
        key.toLowerCase() +
        "-if],[data-attr-if-" +
        key.toLowerCase() +
        "]"
      );
      var obj = htmlelements.add(attrelements);
      if (key == "JudgeUserName") {
      }
      var disabledelements;
      if (deepfind) {
        disabledelements = template
          .find(
            "[data-" +
            key.toLowerCase() +
            "-disable],[data-disable-" +
            key.toLowerCase() +
            "],[data-disablejlbind],[data-json] *"
          )
          .not(template.find("[data-closest-json]"));
        obj = obj.not(disabledelements);
      } else {
        disabledelements = template
          .find(
            "[data-" +
            key.toLowerCase() +
            "-disable],[data-disable-" +
            key.toLowerCase() +
            "],[data-disablejlbind],[data-json] *,[data-subjson] *"
          )
          .not(template.find("[data-closest-json]"));
        obj = obj.not(disabledelements);
      }

      return { obj: obj, htmlelements: htmlelements };
    },
    loopandsetvalues: function (
      t,
      stn,
      loopindex,
      totalrowsperpage,
      rowindex,
      currentrowobject,
      foreachi,
      allowedinputs,
      excludedelements,
      templatedetailsobj,
      html,
      parenttag,
      pagesize,
      pagevalue,
      isbindingfreshdata
    ) {
      var rowobject = {};
      var tempvalue, triggerdatarow, triggerdata;
      if (typeof currentrowobject != "object") {
        tempvalue = currentrowobject;
        currentrowobject = {};
        currentrowobject.jlvalue = tempvalue;
      }
      if (t.attr(this.data.data_pagination)) {
        rowobject.pagesize = pagesize;
        rowobject.pagenumber = pagevalue;
      }
      rowobject.jlindex = rowindex;
      rowobject.jlindexplus = parseInt(rowindex) + 1;
      rowobject.jlrownumber = loopindex + 1;

      rowobject = $.extend(rowobject, currentrowobject);

      if (stn.allowsubjsonfieldasobject) {
        var subObjects = {};

        for (var key in rowobject) {
          if (rowobject.hasOwnProperty(key)) {
            var item = rowobject[key];
            if (
              item &&
              typeof item == "object" &&
              item != null &&
              item instanceof Array &&
              item.length > 0
            ) {
              for (let bi = 0; bi < item.length; bi++) {
                let valueObject = item[bi];
                for (var subkey in valueObject) {
                  if (valueObject.hasOwnProperty(subkey)) {
                    rowobject[key + bi.toString() + subkey] =
                      valueObject[subkey];
                  }
                }
              }
            }
          }
        }
        rowobject = $.extend(rowobject, subObjects);
      }
      triggerdatarow = {
        key: rowindex,
        value: rowobject,
      };
      var subjsonrows = [];
      /**
       * template variable is contains the html object of followable html template row
       */
      var template = this.wrapwithparent(parenttag, html);
      excludedelements = t
        .find("[data-json],[data-subjson],[data-pagination]")
        .find(templatedetailsobj.nochange);
      /**
       * If a form have an edit view and add view the jlbinder fill data on it without remove the rows
       * also it will show the row if there have no data.
       * So user can enter new data on it.
       * if found a single row from json jlbinder will fill its values
       * Its happened when add data-static and data-follow to a row element
       */
      var staticfollowtemplate = t
        .find("[" + this.data.data_follow + "][" + this.data.data_static + "]")
        .not(excludedelements)
        .eq(rowindex);
      var followhtml = t
        .find("[" + this.data.data_follow + "]")
        .not(excludedelements);
      if (staticfollowtemplate.length == 1) {
        template = staticfollowtemplate;
      } else if (followhtml.eq(rowindex).length > 0) {
        template = this.wrapwithparent(
          parenttag,
          followhtml.eq(rowindex)[0].outerHTML
        );
        // followhtml.eq(rowindex).remove();
      }
      var excludedblocks = template.find(
        "[data-json],[data-subjson],[data-pagination]"
      );
      excludedelements = excludedblocks.find(templatedetailsobj.nochange);
      var followedelements = template
        .find("[" + this.data.data_follow + "]")
        .not(excludedelements);
      followedelements.removeAttr(this.data.data_follow);
      ////this.triggerevent(t, "beforeappendrow", triggerdatarow);

      for (var key in rowobject) {
        if (rowobject.hasOwnProperty(key)) {
          var value = rowobject[key];
          if (foreachi) {
            var templatehtml = template.html();
            var replace = "{" + foreachi + "." + key + "}";
            var re = new RegExp(replace, "gmi");
            templatehtml = templatehtml.replace(re, value);
            template = this.wrapwithparent(parenttag, templatehtml);
          }
          if (stn.dynamicinsert) {
            template.children().attr(this.data.data_dynamicrows, true);
          }
          if (
            template
              .find("[data-subjson='" + key + "']")
              .not(
                template
                  .find("[data-subjson] [data-subjson]")
                  .not("[data-subjsonglobal]")
              ).length > 0
          ) {
            subjsonrows.push({ key: key, value: value });
          }
          ////var externalsubjsonelements = $("[data-subjson='" + key + "'][data-parent='#" + stn.tid + "']");
          ////if (externalsubjsonelements.length > 0) {
          ////    for (var extsubi = 0; extsubi < externalsubjsonelements.length; extsubi++) {
          ////        var extth = $(externalsubjsonelements[extsubi]);
          ////        var extvalue = this.textautofn(this.attr(extth), value, extth);
          ////        extth.binder({ json: { Rows: extvalue } });
          ////    }
          ////}
          if (key == "JudgeUserName") {
          }
          var jsonfieldelements = this.findjsonfieldelements(template, key);
          var obj = jsonfieldelements.obj;
          var htmlelements = jsonfieldelements.htmlelements;
          triggerdata = {
            key: key,
            value: value,
          };
          this.triggerevent(obj, "beforeappend", triggerdata);
          // var commentobj = this.getcommentobj(template.children());
          // if (commentobj.length > 0) {
          //   $.each(commentobj, function (cmi, cmv) {
          //     if (cmv !== false) {
          //       var parentname = cmv.next().parent().prop("tagName");
          //       var bindobj = $(
          //         "<" +
          //           parentname +
          //           " " +
          //           cmv[0].nodeValue +
          //           ">" +
          //           cmv.next()[0].outerHTML +
          //           "</" +
          //           parentname +
          //           ">"
          //       );
          //       if (bindobj.attr("data-subjson") == key) {
          //         // subjsonrows.push({ key: key, value: value, commentobj: cmv });
          //         bindobj.binder({ json: { Rows: value } });
          //         cmv.next().after(bindobj.html());
          //         cmv.next().remove();
          //       }
          //     }
          //   });
          // }

          tempvalue = value;
          for (var obji = 0; obji < obj.length; obji++) {
            var tobj = $(obj[obji]);
            value = tempvalue;
            var attributes = this.attr(tobj);
            value = this.textautofn(attributes, value, tobj);
            value = this.applydatefunctionalitybyattributes(
              attributes,
              key,
              value
            );
            this.applyfunctionalitybasedonattributes(
              attributes,
              tobj,
              key,
              value
            );

            if (
              htmlelements.length > 0 &&
              htmlelements.not(tobj).length != htmlelements.length
            ) {
              var tagname = tobj.prop("tagName").toLowerCase();
              if ($.inArray(tagname, allowedinputs) !== -1) {
                if (typeof value == "boolean") {
                  value = value.toString();
                }
                tobj.val(value).attr("data-jlvalue", value);
                if (tagname == "select") {
                  tobj.attr(this.data.data_value, value);
                  if (value !== "") {
                    if (
                      tobj.find('option[value="' + value + '"]').length == 0
                    ) {
                      if (tobj.attr("data-appendvalueoptiononset")) {
                        var optiontextvalue = tobj.attr("data-optiontextvalue");
                        if (optiontextvalue) {
                          var text = value;
                          if (optiontextvalue) {
                            if (rowobject.hasOwnProperty(optiontextvalue)) {
                              text = rowobject[optiontextvalue];
                            }
                          }
                          if (text != "") {
                            tobj.append(
                              "<option selected value=" +
                              value +
                              ">" +
                              text +
                              "</option>"
                            );
                          } else {
                            tobj
                              .find("option:not([data-follow])")
                              .first()
                              .prop("selected", true)
                              .attr("selected", true);
                          }
                        }
                      } else {
                        if (tobj.val() != value && !tobj.attr("multiple")) {
                          tobj
                            .find("option:not([data-follow])")
                            .first()
                            .prop("selected", true)
                            .attr("selected", true);
                        } else if (
                          JSON.stringify(tobj.val()) != JSON.stringify(value)
                        ) {
                          tobj
                            .find("option:not([data-follow])")
                            .first()
                            .prop("selected", true)
                            .attr("selected", true);
                        }
                      }
                    }
                  }
                }
                var trigger = tobj.attr("data-trigger");
                if (trigger) {
                  this.triggerevent(tobj, trigger);
                }
              } else {
                if (!tobj.attr("data-subjson")) {
                  if (typeof value == "boolean") {
                    tobj.html(value.toString());
                  } else {
                    if (!value && tobj.attr("data-nulllabel")) {
                      tobj.html(tobj.attr("data-nulllabel"));
                    } else {
                      tobj.html(value);
                    }
                  }
                }
              }
            }
            triggerdata = {
              index: key,
              value: value,
            };
            this.triggerevent(tobj, "afterappend", triggerdata); //TODO Its not working
          }
        }
      }
      var wrapper = t;
      var uniquerow;
      if (stn.uniquekey) {
        template
          .children()
          .attr("data-jluniquekeyvalue", rowobject[stn.uniquekey]);
      }
      if (staticfollowtemplate.length == 1) {
      } else if (followhtml.eq(rowindex).length > 0) {
        followhtml.eq(rowindex).after(template.html());
        followhtml.eq(rowindex).remove();
        this.bringvalues(t);
      } else if (
        staticfollowtemplate.length == 0 &&
        staticfollowtemplate.eq(loopindex).length == 0
      ) {
        if (stn.uniquekey && rowobject[stn.uniquekey] && stn.isuniqueupdate) {
          /**
           * This function not work properly with sorting data
           * This static template already binded by jlbinder and reusing it by find use uniquekey
           *
           */
          var exthtml = t.find(
            "[data-jluniquekeyvalue='" + rowobject[stn.uniquekey] + "']"
          );

          if (exthtml.length > 0) {
            if (exthtml[0].outerHTML == template.html()) {
              exthtml.show();
            } else {
              template
                .children()
                .attr("data-jluniquekeyvalue", rowobject[stn.uniquekey]);
              exthtml.after(template.html());
              exthtml
                .next()
                .attr("data-jluniquekeyvalue", rowobject[stn.uniquekey]);
              exthtml.remove();
              uniquerow = t.find(
                "[data-jluniquekeyvalue='" + rowobject[stn.uniquekey] + "']"
              );
              uniquerow.attr("data-uniquerowsupdated", true);
            }
          } else {
            followedelements = template.children().not(excludedelements);
            followedelements.attr(
              "data-jluniquekeyvalue",
              rowobject[stn.uniquekey]
            );
          }
          exthtml.attr("data-uniquerowsupdated", true);
        }

        if (
          bindmanager.htmltemplatewrappers[stn.tid] &&
          bindmanager.htmltemplatewrappers[stn.tid].length > 0
        ) {
          for (
            var ti = 0;
            ti < bindmanager.htmltemplatewrappers[stn.tid].length;
            ti++
          ) {
            var wrapperobj = bindmanager.htmltemplatewrappers[stn.tid][ti];
            var allowappend = false;
            var lastappenedwrapper = t.find(
              "[data-wrapperlevel=" + ti + "]:last"
            );
            if (lastappenedwrapper.length > 0) {
              var excludedjlelements = t
                .find("[data-json],[data-subjson],[data-pagination]")
                .find("[data-jlelements]");
              var jlelements = lastappenedwrapper
                .find("[data-jlelements]")
                .not(excludedjlelements);
              if (jlelements.length == wrapperobj.count) {
                allowappend = true;
              } else {
                wrapper = lastappenedwrapper;
              }
            } else {
              allowappend = true;
            }
            if (allowappend) {
              wrapper.append(wrapperobj.html);
              wrapper = t.find("[data-wrapfollow]").last();
            }
          }
        }
        if (!uniquerow) {
          var templateoutput = template.html();
          if (t.attr("data-removeonappend")) {
            templateoutput = $(templateoutput).html();
          }
          if (stn.bindmethod) {
            wrapper[stn.bindmethod](templateoutput);
          } else {
            wrapper.append(templateoutput);
          }
        }
        if (stn.scrolldirection == "up") {
          t.attr("data-disablescrollevents", true);

          var scrollto = t.attr("data-lastscrolledupto");
          if (!scrollto) {
            scrollto = 0;
          }

          setTimeout(function () {
            var lastbottomposition = t[0].scrollHeight - scrollto;

            t.scrollTop(lastbottomposition);
            if (totalrowsperpage == loopindex) {
              t.removeAttr("data-disablescrollevents");
            }
          }, 500);
        }
        this.bringvalues(t);
      }
      var lastrow;
      if (uniquerow && uniquerow.length > 0) {
        lastrow = uniquerow;
      } else if (stn.bindmethod) {
        lastrow = wrapper.children().first();
      } else {
        lastrow = wrapper.children().last();
      }

      if (stn.currentpage && !lastrow.attr("data-jlcurrentpage")) {
        lastrow.attr("data-jlcurrentpage", stn.currentpage);
      }

      if (
        !stn.showelementsafterappend ||
        stn.showelementsafterappend == "true"
      ) {
        lastrow
          .not("[data-isactive=false]")
          .show()
          .attr("data-jlelements", true);
      } else {
        lastrow.not("[data-isactive=false]").attr("data-jlelements", true);
      }
      triggerdatarow = {
        key: rowindex,
        value: rowobject,
        row: lastrow,
      };
      this.triggerevent(lastrow, "afterappendrow", triggerdatarow);
      for (var ji = 0; ji < subjsonrows.length; ji++) {
        var jv = subjsonrows[ji];
        var subjsonelements = lastrow
          .find("[data-subjson='" + jv.key + "']")
          .not(
            lastrow
              .find("[data-subjson] [data-subjson]")
              .not("[data-subjsonglobal]")
          );
        if (lastrow.attr("data-subjson") == jv.key) {
          subjsonelements.push(lastrow);
        }
        if (subjsonelements.length > 0) {
          for (var subi = 0; subi < subjsonelements.length; subi++) {
            var th = $(subjsonelements[subi]);
            jv.value = this.textautofn(this.attr(th), jv.value, th);
            th.binder({ json: { Rows: jv.value } });
          }
        }
      }
    },
    showhideboxes: function (t) {
      var grandchildrens = t.find(
        "[" + this.data.data_json + "] [" + this.data.data_noresult + "]"
      );
      t.find("[" + this.data.data_noresult + "]")
        .not(grandchildrens)
        .show();
      if (t.attr("data-method-show")) {
        $(t.attr("data-method-show")).hide();
      }
      if (t.attr("data-method-hide")) {
        $(t.attr("data-method-hide")).show();
      }
    },
    /**
     * Bind Manager Work Flow Ends
     */
  };
  $.fn.binder.methods.data = {
    inputs: "input,select,textarea,button",
    disabled: "[disabled]",
    data_json: "data-json",
    data_filterby: "data-filterby",
    data_filterby_required: "data-filterby-required",
    data_noresult: "data-noresult",
    data_static: "data-static",
    data_follow: "data-follow",
    data_form: "data-form",
    data_pagination: "data-pagination",
    data_scrollloader: "data-scrollloader",
    data_scrollbyelement: "data-scrollbyelement",
    data_perpage: "data-perpage",
    data_servername: "data-servername",
    data_servernames: "data-servernames",
    data_value: "data-value",
    data_showingpagefrom: "data-showingpagefrom",
    data_showingpageto: "data-showingpageto",
    data_dynamicrows: "data-dynamicrows",
  };
  //Reference go to https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings
  window.jlfn = $.fn.binder.methods;
  $.fn.binder.methods.date = {
    now: function () {
      return new Date().getTime();
    },
    timeagotemplates: {
      prefix: "",
      suffix: " ago",
      seconds: "less than a minute",
      minute: "about a minute",
      minutes: "%d minutes",
      hour: "about an hour",
      hours: "about %d hours",
      day: "a day",
      days: "%d days",
      month: "about a month",
      months: "%d months",
      year: "about a year",
      years: "%d years",
    },
    format: {
      daysabbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      monthsabbr: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      d: function (dv, dd, date) {
        return date.getDate();
      },
      dd: function (dv, dd, date) {
        return date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
      },
      ddd: function (dv, dd, date) {
        return this.daysabbr[date.getDay()];
      },
      dddd: function (dv, dd, date) {
        return this.days[date.getDay()];
      },
      D: function (dv, dd, date) {
        return date.getDate();
      },
      DD: function (dv, dd, date) {
        return this.days[date.getDay()];
      },

      M: function (dv, dd, date) {
        return date.getMonth() + 1;
      },
      MM: function (dv, dd, date) {
        return ("0" + (date.getMonth() + 1)).slice(-2);
      },
      MMM: function (dv, dd, date) {
        return this.monthsabbr[date.getMonth()];
      },
      MMMM: function (dv, dd, date) {
        return this.months[date.getMonth()];
      },
      twelvehours: function (date) {
        return date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
      },
      h: function (dv, dd, date) {
        return this.twelvehours(date);
      },
      hh: function (dv, dd, date) {
        return ("0" + this.twelvehours(date)).slice(-2);
      },
      H: function (dv, dd, date) {
        return date.getHours();
      },
      HH: function (dv, dd, date) {
        return ("0" + date.getHours()).slice(-2);
      },
      m: function (dv, dd, date) {
        return date.getMinutes();
      },
      mm: function (dv, dd, date) {
        return ("0" + date.getMinutes()).slice(-2);
      },
      i: function (dv, dd, date) {
        return ("0" + date.getMinutes()).slice(-2);
      },
      s: function (dv, dd, date) {
        return date.getSeconds();
      },
      ss: function (dv, dd, date) {
        return ("0" + date.getSeconds()).slice(-2);
      },
      y: function (dv, dd, date) {
        return date.getFullYear().slice(-1);
      },
      yy: function (dv, dd, date) {
        return date.getFullYear().slice(-2);
      },
      yyy: function (dv, dd, date) {
        return date.getFullYear().slice(-3);
      },
      yyyy: function (dv, dd, date) {
        return date.getFullYear();
      },
      tt: function (dv, dd, date) {
        return date.getHours() >= 12 ? "pm" : "am";
      },
      TT: function (dv, dd, date) {
        return date.getHours() >= 12 ? "PM" : "AM";
      },
    },
    dateto: function (pattern, date) {
      var regex = /(\/)|( )|(:)|(,)|(\|)|(\+)|(-)/g;
      var splitpattern = pattern.split(regex);
      var dd = date.toString().split(" ");
      var t = this;
      var string = "";
      $.each(splitpattern, function (d, dv) {
        if (dv && t.format[dv]) {
          var datevalue = t.format[dv](dv, dd, date);
          pattern = pattern.replace(dv, datevalue);
          var pieces = pattern.split(datevalue);
          string += pieces[0] + datevalue;
          pieces = pieces.splice(1, pieces.length);
          pattern = pieces.join(datevalue);
        }
      });
      return string;
    },
    formatdate: function (key, value, attributevalue) {
      var date = this.jsontodate(key, value);
      if (date.isValid()) {
        date = this.dateto(attributevalue, date);
      } else {
        date = value;
      }
      return date;
    },
    timeagotemplate: function (t, n) {
      return (
        this.timeagotemplates[t] &&
        this.timeagotemplates[t].replace(/%d/i, Math.abs(Math.round(n)))
      );
    },
    timeago: function (key, value, attributevalue) {
      var date = this.jsontodate(key, value);
      var timeago = "";
      var now = new Date();
      var seconds = ((now.getTime() - date) * 0.001) >> 0;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;
      if (date) {
        timeago =
          this.timeagotemplates.prefix +
          ((seconds < 60 && this.timeagotemplate("seconds", seconds)) ||
            (seconds < 90 && this.timeagotemplate("minute", 1)) ||
            (minutes < 60 && this.timeagotemplate("minutes", minutes)) ||
            (minutes < 90 && this.timeagotemplate("hour", 1)) ||
            (hours < 24 && this.timeagotemplate("hours", hours)) ||
            (hours < 42 && this.timeagotemplate("day", 1)) ||
            (days < 30 && this.timeagotemplate("days", days)) ||
            (days < 45 && this.timeagotemplate("month", 1)) ||
            (days < 365 && this.timeagotemplate("months", days / 30)) ||
            (years < 1.5 && this.timeagotemplate("year", 1)) ||
            this.timeagotemplate("years", years)) +
          this.timeagotemplates.suffix;
      }
      return timeago;
    },

    utctolocal: function (key, value, attributevalue) {
      if (value) {
        var date = this.formatdate(key, value, "MM/dd/yyyy hh:mm:ss TT");
        if (date.isValid()) {
          var datestring = date + " UTC";
          date = new Date(datestring);
          date = this.dateto(attributevalue, date);
        }

        return date;
      }
      return value;
    },
    jsontodate: function (key, value, attributevalue) {
      try {
        if (value && value.toLowerCase().split("date").length > 1) {
          return new Date(parseInt(value.substr(6)));
        } else {
          return new Date(value);
        }
      } catch (e) {
        return "";
      }
    },
  };
  $.fn.binder.methods.defaults = {
    lazyload: "true",
    dynamicrowstext: "new",
    dynamicrowsvalue: -1,
    json: "",
    defaultorderby: "desc",
    defaultrequestmethod: "post",
    dataobject: "Rows,Data,rows,Results,data",
    paginationmaxcolumns: 20,
    orderbyascendingicon:
      '<i class="fas fa-sort-up table-sort" data-orderbyascicon="true"></i>',
    orderbydescendingicon:
      '<i class="fas fa-sort-down table-sort" data-orderbydescicon="true"></i>',
    orderbyiconinsertmethod: "append",
  };

  $(window).trigger("updatejldefaults");
  //hide all elements which not yet initialized
  $("body").append(
    "<style>.binderhideonload[data-json]:not([data-binderinit]){ display:none; }</style>"
  );
  $(window).on("load", function () {
    jlbinderwindowloaded = true;
  });
  $(document).ready(function () {
    if (!allowJLBinder) {
      return;
    }
    var jlbindcache = getcache("bindmanagercache");
    if (jlbindcache) {
      try {
        bindmanager.cache = JSON.parse(jlbindcache);
      } catch (e) {
        bindmanager.cache = {};
      }
    }
    setTimeout(function () {
      jlbinderwindowloaded = true;
    }, 2000);

    $("[data-json]:visible,[data-json]:hidden")
      .not("[data-parent],[data-template],[data-template] [data-json]")
      .binder();
    $("body").on("click", "[data-show]", function () {
      $($(this).attr("data-show")).show();
    });

    $("body").on("click", "[data-hide]", function () {
      $($(this).attr("data-hide")).hide();
    });
    $("body").on("click", "[data-toggle]", function () {
      $($(this).attr("data-toggle")).toggle();
    });

    var lazyloadjlelements = function () {
      $('[data-lazyload="true"]').each(function () {
        if (
          $(window).scrollTop() + $(window).height() >=
          $(this).offset().top
        ) {
          if ($(this).attr("data-json")) {
            $(this).attr("data-lazyload", "false");
            $(this).binder();
            if (!$(this).attr("data-binderinit")) {
              $(this).attr("data-lazyload", "true");
            }
          }
        }
      });
    };
    $(window).on("resize", function (e) {
      lazyloadjlelements();
    });
    $(window).on("scroll", function (e) {
      lazyloadjlelements();
    });

    var fneventsallowed = ["click", "change", "keyup", "keydown", "blur"];

    $.each(fneventsallowed, function (fni, fnv) {
      $("body").on(fnv, "data-fn-" + fnv, function (e) {
        var fntodo = $(this).attr("data-fn-" + fnv);
        jlfn.gotoprocess(fntodo, $(this));
      });
    });
  });
})(window.jQueryAlt ? window.jQueryAlt : window.jQuery ? window.jQuery : null);
