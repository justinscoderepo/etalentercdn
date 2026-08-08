
$(document).ready(function () {
    $("body").on("click", '#dashboardlatestusers .table-row', function () {
    var postdata = {};
    postdata.Filterby = [];
    postdata.Filterby.push({ key: "UserId", value: $(this).attr("data-id") });
    postdata.Filterby.push({ key: "UserIdRole", value: $(this).attr("data-role") });
    $.post("LoginAs", postdata, function () {

        window.location.href = "/";
    });

    });

})