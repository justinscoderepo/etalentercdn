

(function ($) {
    $('body').on("change",
        "#ParticipantTypes",
        function (e, force) {

            var th = $(this);

            if ($(this).val() && $(this).val() == "2") {

                $(".individualitems").hide();
                $(".groupitems").show();
            } else {
                $(".individualitems").show();
                $(".groupitems").hide();
            }
        });
    $('body').on("change",
        "#grouplist,#pageside",
        function (e, force) {

            var th = $(this);
            $("head title").text("Candidates Cards " + $("#pageside").find("option:selected").text() + " of " + $(this).find("option:selected").text() + " - Talenter.in");
        });
    function adjustheight(selector) {
        var height = 0;
        $("body").append("<style>" + selector + "{ height:auto !important;}</style>");
        $(selector).each(function () {
            if ($(this).outerHeight() > height) {
                height = $(this).outerHeight();
            }
        });

        if (height > 0) {
            $("body").append("<style>" + selector + "{ height: " + height + "px !important;}</style>");
        }

    }
    /**
     * The A0 size print measures 84.1 x 118.9cm, 33.11 x 46.81 inches. (currently we are not offering mounts for this size)

The A1 size print measures 59.4 x 84.1cm, 23.39 x 33.11 inches. (currently we are not offering mounts for this size)

The A2 size print measures 42.0 x 59.4cm, 16.53 x 23.39 inches, if mounted 59.4 x 76.6cm, 23.39 x 30.16 inches.
The A3 size print measures 29.7 x 42.0cm, 11.69 x 16.53 inches, if mounted 40.6 x 50.8cm, 15.98 x 20 inches.

The A4 size print measures 21.0 x 29.7cm, 8.27 x 11.69 inches, if mounted 30.3 x 40.6cm, 11.93 x 15.98 inches.
https://www.pixelto.net/cm-to-px-converter
     * /
     */
    $('body').on("afterappendcomplete change",
        ".candidateCardsList,#LogoImage,#CardsPerPage,#PageSizePrint,#BackgroundImage,#CardsPerRow,#pageside,#CardsZoom,#IdentityNumberFontSize,#CardsHeight",
        function (e, force) {
            $(".cardheaderlogo").attr("src", $("#LogoImage").val());
            $(".candidateCardsList .candidateCard .box").attr("style", 'background-image:url(' + "'" + $("#BackgroundImage").val() + "') !important");
            $(".rowbreak,.pagebreak").remove();
            $(".IdentityNumber").css("font-size", $("#IdentityNumberFontSize").val() + "px");

            if ($("#pageside").val() == "1") {
                $(".candidateCardsList .candidateCard .frontside").show();
                $(".candidateCardsList .candidateCard .backside").hide();
                $(".candidateCardsList .candidateCard").removeClass("pull-right");
            } else {
                $(".candidateCardsList .candidateCard .frontside").hide();
                $(".candidateCardsList .candidateCard .backside").show();
                $(".candidateCardsList .candidateCard").addClass("pull-right");
            }


            $(".candidateCardsList .candidateCard .box").css("height", $("#CardsHeight").val() + "px");
            ////$(".candidateCardsList").css("width", $("#PageSizePrint").val() == "a3" ? "1123" : "794");
            ////$(".candidateCardsList").css("transform", "scale(" + $("#ScaleCard").val() + ")");
            $(".candidateCardsList .candidateCard:visible").each(function (i) {

                if (i != 0 && i % parseInt($("#CardsPerRow").val()) == 0) {
                    $(this).before('<div class="col-xs-50 rowbreak"></div>');
                }
                $(this).css("width", 100 / $("#CardsPerRow").val() + "%");
              
                $(this).css("zoom", $("#CardsZoom").val() + "%");
            });

            ////adjustheight("#CandidateCardsList .candidateCard .box");


        });


})(jQuery);

$(document).ready(function(){

    $(".ceritificateHedding").html('Certificates of participation')
});

    jQuery('#hedding').on('input', function () {       
        $(".ceritificateHedding").html($('#hedding').val());
    });