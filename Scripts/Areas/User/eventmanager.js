var setDependValues=function() {
    $(".dependEventCategory:not([dependapplied])").val($("#PageCategory").val()).attr("dependapplied", true).attr("data-forcesetvalue", true).attr("data-value", $("#PageCategory").val()).trigger("change");
    $(".dependEvent:not([dependapplied])").val($("#PageEventId").val()).attr("dependapplied", true).attr("data-forcesetvalue", true).attr("data-value", $("#PageEventId").val()).trigger("change");
    $(".dependOrganization:not([dependapplied])").val($("#PageOrganizationId").val()).attr("dependapplied", true).attr("data-forcesetvalue", true).attr("data-value", $("#PageOrganizationId").val()).trigger("change");
}
setDependValues();
$(document).ready(function() {
    setDependValues();
});
$("body").on("beforedeletetableform",
    "[data-deleteaction] [data-jltableformrow]",
    function (e, postdata) {
        if (!postdata.formdata) {
            postdata.formdata = {};
        }
        var cl = $(this);
        if ($("#PageEventCategory").val()) {
            postdata.formdata["EventCategory"] = $("#PageEventCategory").val();
        }
        else if (cl.find("[name=EventCategory]").length > 0) {
            postdata.formdata["EventCategory"] = cl.find("[name=EventCategory]").val();
        }
        if ($("#PageOrganizationId").val()) {
            postdata.formdata["Organization"] = $("#PageOrganizationId").val();
        } else if (cl.find("[name=Organization]").length > 0) {
            postdata.formdata["Organization"] = cl.find("[name=Organization]").val();
        }
        if ($("#PageEventId").val()) {
            postdata.formdata["Event"] = $("#PageEventId").val();
        } else if (cl.find("[name=Event]").length > 0) {
            postdata.formdata["Event"] = cl.find("[name=Event]").val();
        }


    });
$("body").on("change", "#EventCategoryGlobalSelect,#PageEventGlobalId", function (e, forcecheck) {
    if (e.originalEvent || forcecheck) {
        
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            var value = $(this).val();
            var items = window.location.href.replace("/#","").split("/");
            var revisedurl = "";
            if ($(this).attr("id") == "EventCategoryGlobalSelect") {
                $("#PageEventGlobalId").val(ZeroValue);

            }
            if (!items[5]) {
                items[5] = ZeroValue;
            }
            if (!items[6]) {
                items[6] = ZeroValue;
            }

            if ($("#PageOrganizationGlobalId").length > 0) {
                if (!items[7]) {
                    items[7] = ZeroValue;
                }
            }
            $.each(items,
                function(i, v) {
                    switch (i) {
                    case 5:
                    {
                        if ($("#EventCategoryGlobalSelect").length > 0 &&
                            $("#EventCategoryGlobalSelect option").length > 0) {
                            revisedurl += $("#EventCategoryGlobalSelect").val() + "/";
                        } else if ($("#PageEventCategory").length > 0) {
                            revisedurl += $("#PageEventCategory").val() + "/";
                        } else {
                            revisedurl += items[5] + "/";
                        }
                        break;
                    }
                    case 6:
                    {
                        if ($("#PageEventGlobalId").length > 0) {
                            revisedurl += $("#PageEventGlobalId").val() + "/";
                        } else {
                            revisedurl += items[6] + "/";
                        }
                        break;
                    }
                    case 7:
                    {

                        if ($("#PageOrganizationGlobalId").length > 0 &&
                            $("#PageOrganizationGlobalId option").length > 1) {
                            revisedurl += $("#PageOrganizationGlobalId").val() + "/";
                        } else if ($("#PageOrganizationId").length > 0) {
                            revisedurl += $("#PageOrganizationId").val() + "/";
                        } else if (items[7]) {
                            revisedurl += items[7] + "/";
                        }
                        break;
                    }
                    default:
                    {
                        revisedurl += v + (i != items.length - 1 ? "/" : "");
                    }
                    }


                });
            if (!window.location.hash) {
                window.location.href = revisedurl;
            } else {
                window.location.href = revisedurl.replace(window.location.origin,window.location.origin+"/#");
            }
                    }
    
});
$("body").on("afterappendcomplete",
    "#EventCategoryGlobalSelect",
    function (e) {
        if (!window.location.hash) {
            if ($("#EventCategoryGlobalSelect option").length == 0) {
                alert("You must create and Competition Settings to use this page", false, false, false, false, 4000);
                setTimeout(function() {
                        window.location.href = $("#CategoryUrl").val();
                    },
                    2000);
            } else if ($("#EventCategoryGlobalSelect").val() != $("#PageEventCategory").val()) {

                $("#EventCategoryGlobalSelect").trigger("change", true);
            }
        }
    });
