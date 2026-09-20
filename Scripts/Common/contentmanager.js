$(document).ready(function () {
   
   
    $('body').on("change", ".HooksList", function () {
        $(this).closest(".hookboxrow").find(".HookBox").hide();
        $(this).closest(".hookboxrow").find("#Hook_" + $(this).val()).show();
    });
    $('body').on("click", ".Customizer_hookboxrow .viewhook", function () {
        $("#Customizer_HookMainList").hide();
        $("#Customizer_HookId").val($(this).attr("hookid")).trigger("change");
        $("#Customizer_HookView").show();
    });
    $('body').on("click", ".closehook", function () {
        $("#Customizer_HookMainList").show();
        $("#Customizer_HookId").val("");
        $("#Customizer_HookView").hide();
    });
    $('body').on("afterappendcomplete", "#Customizer_HooksItems", function () {
        var sections = window.
        location.href.split("#VIewSection_");
        if (sections.length>1) {
            $(".Customizer_hookboxrow .viewhook[hookid=" + sections[1] + "]").trigger("click");
        }
    });
})