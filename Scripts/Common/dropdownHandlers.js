// Dropdown menu handlers - generic dropdown and version dropdown
(function($) {
    'use strict';

    $(window).click(function() {
        $("#dropdown, #versiondropdown").removeClass("open");
        $("#dropdown, #versiondropdown").children("ul").slideUp("fast");
    });

    $("#dropdown, #versiondropdown").on("click", function(e){
        e.stopPropagation();
        
        if ($(e.target).not($(".rolemanager,.rolemanager *,.versionswitchbutton,.versionswitchbutton *")).length){
            
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

                $.post(window.location.origin + "/Version/SwitchToV2", {}, function (data) {
                    if (data && data.success) {
                        window.location.href = data.redirectUrl;
                    } else {
                        console.error("Failed to switch to V2 mode:", data.message);
                        // Fallback: manually add v2 to URL
                        var currentUrl = window.location.href;
                        var host = window.location.protocol + "//" + window.location.host;
                        window.location.href = host + "/v2/index.html";
                    }
                }).fail(function () {
                    // Fallback if API call fails
                    var host = window.location.protocol + "//" + window.location.host;
                    window.location.href = host + "/v2/index.html";
                });
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
