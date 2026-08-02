// Dropdown menu handlers - generic dropdown and version dropdown
(function($) {
    'use strict';

    $(window).click(function() {
        $("#dropdown, #versiondropdown").removeClass("open");
        $("#dropdown, #versiondropdown").children("ul").slideUp("fast");
    });

    $("#dropdown, #versiondropdown").on("click", function(e){
        e.stopPropagation();
        var isActionButton = $(e.target).closest(".rolemanager,.versionswitchbutton").length > 0;
        if (!isActionButton){

            e.preventDefault();
            if($(this).hasClass("open")) {
                $(this).removeClass("open");
                $(this).children("ul").slideUp("fast");
            } else {
                $(this).addClass("open");
                $(this).children("ul").slideDown("fast");
            }
        }else{
            // Handle role manager buttons
            if ($(e.target).hasClass("rolemanager") || $(e.target).closest("button").hasClass("rolemanager")) {
                let isSameMenu = false;
                if($(e.target).hasClass("rolemanager") && $(e.target).hasClass("active")){
                    isSameMenu = true;
                }

                if($(e.target).closest("button").hasClass("rolemanager") && $(e.target).closest("button").hasClass("active")){
                    isSameMenu = true;
                }

                if(!isSameMenu){
                    showabsolutespinner($("body"));                      
                }
            }
            
            // Handle version switch buttons
            if ($(e.target).hasClass("versionswitchbutton") || $(e.target).closest("button").hasClass("versionswitchbutton")) {
                e.preventDefault();
                e.stopPropagation();

                // Plain top-level navigation, not AJAX: /Version/SwitchToV2 issues a
                // server-side redirect that may cross to v2.etalenter.com, which the
                // browser follows natively. An AJAX POST here goes through apiconfig.js's
                // $.post override (absolute URL -> worker fetch with a Bearer auth header),
                // turning the redirect into a cross-origin preflighted request that
                // v2.etalenter.com has no Access-Control-Allow-Origin for. Mirrors the
                // same-pattern fix already used for SwitchToClassic in v2Header.jsx.
                window.location.href = window.location.origin + "/Version/SwitchToV2";
            }
        }
    });

    $(".clearcachebutton").on("click", function(e){
        e.preventDefault();

        var nonRemovableKeys = ["user","signalr_tracking_image","app_theme","PrintParticipantCertificate","PrintCertificate","PodiumAutoscroll","PublishResults","PublishResultsWithAwards","PublishPodiumResults","PublishIndividualResults","ResultPresentation","PublishToSocialMedia","PrintJudgesScore","PrintResult","PrintScoreCard","PrintCompetitionCandidates","ScrollSpeed"];

        // Clear localStorage except nonRemovableKeys
        let keys = Object.keys(localStorage);
        keys.forEach(function(key){
            var shouldKeep = nonRemovableKeys.some(k => key.includes(k));
            if (!shouldKeep) {
                localStorage.removeItem(key);
            }
        });
        
        // Clear sessionStorage except nonRemovableKeys
        let keys2 = Object.keys(sessionStorage);
        keys2.forEach(function(key){
            var shouldKeep = nonRemovableKeys.some(k => key.includes(k));
            if (!shouldKeep) {
                sessionStorage.removeItem(key);
            }
        });
        
        $.post("/CoordinatorJson/ClearCacheFolder", {}, function (data) {
            $.post(window.location.origin+"/Coordinator/ClearCacheFolder", {}, function (data) {
                window.location.reload();
            });
        });
    });

})(jQuery);
