function alert(content, fn, elsefn, id, boxtype, timeout) {
  if (!elsefn && !id && !boxtype && !timeout) {
    if (typeof fn === "string") {
      boxtype = fn;
    }
  }

  if (boxtype == "e") {
    boxtype = "w";
  }

  var length = content.length;
  var timebylength = length * 60;
  if (id) {
    $("#" + id).remove();
  } else {
    $(".confirmbox:not([id])").remove();
  }
  var icon = '<i class="check-wrap"></i>';
  var isWarning = false;
  var buttons = "";
  if (boxtype) {
    if (boxtype == "c") {
      buttons +=
        '<a href="#" class="alertboxcancel btn btn-warning pull-left" ><i class="fa fa-thumbs-down" aria-hidden="true"></i> Cancel</a>';
      buttons +=
        '<a href="#" class="alertboxok btn btn-success pull-right" ><i class="fa fa-check" aria-hidden="true"></i> Ok</a>';
      icon = '<i class="fas fa-check-double"></i>';
    } else if (boxtype == "w") {
      isWarning = true;
      icon = '<i class="fas fa-exclamation-triangle"></i>';
    }
  }
  var idstring = "";
  if (id) {
    idstring += ' id="' + id + '"';
  }

  if ($("#alertboxes").length == 0) {
    $("body").append('<div id="alertboxes"></div>');
  }
  $("#alertboxes").append(
    "<div " +
      idstring +
      ' style="display:none" class="alertbox col-xs-50 pad-10"><div class="alertboxcontent col-xs-50 pad-5"><div class="col-xs-50">' +
      icon +
      "<span>" +
      content +
      '</span></div></div><div class="alertboxbuttons col-xs-50">' +
      buttons +
      "</div></div>"
  );
  var alertbox = $("#alertboxes").find(".alertbox:last");
  if (isWarning) {
    alertbox.addClass("alertboxwarning");
  } else if (boxtype != "c") {
    alertbox.find(".alertboxbuttons").remove();
  }
  alertbox.fadeIn();

  var okbutton = alertbox.find(".alertboxok");
  if (okbutton.length > 0) {
    okbutton.click(function (e) {
      e.preventDefault();
      $(this).closest(".alertbox").remove();
      if (fn) {
        fn();
      }
    });
    var alertboxcancelbutton = alertbox.find(".alertboxcancel");
    alertboxcancelbutton.click(function (e) {
      e.preventDefault();
      $(this).closest(".alertbox").remove();
      if (elsefn) {
        elsefn();
      }
    });
  }
  if (!timeout) {
    timeout = 6000;
    if (timebylength > timeout) {
      timeout = timebylength;
    }
  }
  if (okbutton.length == 0) {
    setTimeout(function () {
      alertbox.fadeOut(2000, function () {
        alertbox.remove();
      });
    }, timeout);
  }
}
