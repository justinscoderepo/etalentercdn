$(document).ready(function () {
    $("body").on("aftersave", "#registerform form", function (e,data) {
        if (data.Results == "Registered") {
            notify(data.Results, "s");
            $("#registerform").remove();
            $("[data-modal='#registerform']").remove();
            
        } else {
            notify(data.Results, "e",5000);
        }
    });
    $("body").on("aftersave", "#loginform form", function (e, data) {
        if (data.Results == "Logined") {
            notify(data.Results, "s");
            $("#loginform").remove();
            $("[data-modal='#loginform']").remove();
            window.location.href = $("#RootUrl").val();
        } else {
            notify(data.Results, "e", 5000);
        }
    });
});