var excludedServerCache = ["bindmanagercache", "currenturl", "user"];
function setcache(variable, data, originalEvent) {
  if (typeof Storage !== "undefined") {
    try {
      localStorage.removeItem(variable);
      localStorage.setItem(variable, data);
      if (!window.EventUserSettings.LocalCache) {
        window.EventUserSettings.LocalCache = {};
      }

      if (!excludedServerCache.includes(variable) && originalEvent) {
        window.EventUserSettings.LocalCache[variable] = data;
        updateEventSettings(window.EventUserSettings);
      }
    } catch (e) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}

function getcache(variable, defaultvalue) {
  var returnvalue = defaultvalue ? defaultvalue : false;
  if (typeof Storage !== "undefined") {
    try {
      if (window.EventUserSettings.LocalCache) {
        if (window.EventUserSettings.LocalCache[variable]) {
          return window.EventUserSettings.LocalCache[variable];
        }
      }
      if (localStorage.getItem(variable) != null) {
        return localStorage.getItem(variable);
      }
    } catch (e) {
      return returnvalue;
    }
  }
  return returnvalue;
}

function remcache(variable) {
  if (typeof Storage !== "undefined") {
    try {
      delete window.EventUserSettings.LocalCache[variable];
      updateEventSettings(window.EventUserSettings);
      localStorage.removeItem(variable);
    } catch (e) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}

function setsession(variable, data) {
  if (typeof sessionStorage !== "undefined") {
    try {
      sessionStorage.removeItem(variable);
      sessionStorage.setItem(variable, data);
    } catch (e) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}

function getsession(variable) {
  if (typeof sessionStorage !== "undefined") {
    try {
      if (sessionStorage.getItem(variable) != null) {
        return sessionStorage.getItem(variable);
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}

function remsession(variable) {
  if (typeof sessionStorage !== "undefined") {
    try {
      sessionStorage.removeItem(variable);
    } catch (e) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}
