
var competitionoptdropdowndata = {};
var currentcompetitiondata = {};
var firsttriggercompetition = true;
$('body').on("afterappendcomplete",
    "#coordinatorcompetitionoptdropdown",
    function (e, data) {

        competitionoptdropdowndata = data.rows;

        if (firsttriggercompetition) {
            $(this).trigger("change");
            firsttriggercompetition = false;
        }
    });
$('body').on("afterappendcomplete",
    ".resultsbody",
    function (e, data) {
        console.log("afterappendcomplete", data);
if(e.target.id == "resultsbody"){
        //form-control RankList
            $(".RankList").show();
            $("#resultautogenerateranks").show();
            $("#resultautogenerateranks3").show();
            if (userObj?.user?.JsonSettings && userObj?.user?.JsonSettings?.DisableRankForMax2ParticipationCompetitions == "Enabled") {
               
                if (data.rows && data.rows.Results && data.rows.Results.length <= 2) {
                    $("#resultautogenerateranks").hide();
                    $("#resultautogenerateranks3").hide();
                    $(".RankList").hide();
                }

            }
    }
        var top = 1;
        $(".judgescoreview").each(function () {
            if ($(this).attr("judgescount") > top) {
                top = $(this).attr("judgescount");
            }
        });
        $(".judgescoreview").each(function () {
            if ($(this).attr("judgescount") < top) {
                $(this).find(".judgesCount span").addClass("scorewarning");
            }
        });



    });


$('body').on("click",
    "#resultautogenerateranks3",
    function (e) {
        setRanks3();
    });

$('body').on("click",
    "#resultautogenerateranks",
    function (e) {
        setRanks();
    });
$('body').on("change",
    "#coordinatorcompetitionoptdropdown",
    function (e) {
        $("head title").text("Result Report of " + $(this).find("option:selected").text() + " - Talenter.in");
        if (competitionoptdropdowndata && competitionoptdropdowndata.Results) {
            var th = $(this);
            var competition = competitionoptdropdowndata.Results.filter(function (c) {
                return c.CompetitionStructureId == th.val();
            });
            if (competition && competition.length > 0) {
                $("#resultcompetitionstatus").val(competition[0].CompetitionStatus).trigger("change");
                $("#resultcompetitionstatus").attr("data-value", competition[0].CompetitionStatus).attr("data-forcesetvalue", true);
                currentcompetitiondata = competition[0];
            }
            $('#resultpanel').binder({
                Data: competition
            });
        }
    });

$('body').on("afterappendcomplete",
    "#publishedresults",
    function (e, data) {

        if (data.rows && data.rows.Results && data.rows.Results.length > 0) {
            var candidatesscore = {};
            var isgroup = false;
            var groups = [];
            var competitions = [];
            $(this).find("[group]").each(function () {

                var key = $(this).attr("group");

                ////if (groups.indexOf(key) != -1) {
                $(this).find("[competition]").each(function () {
                    var ckey = $(this).attr("competition");
                    if (competitions.indexOf(ckey) != -1) {

                        if ($("[competition='" + ckey + "']").length > 1) {
                            $(this).find('[data-subjson="Results"]').each(function () {
                                $("[group='" + key + "']:first [competition='" + ckey + "']:first")
                                    .find('[data-subjson="Results"]')
                                    .append($(this).html());

                                $(this).remove();

                            });
                        }
                        $(this).remove();
                    }
                    competitions.push(ckey);
                });
                if (groups.indexOf(key) != -1) {
                    if ($("[group='" + key + "']").length > 1) {
                        $(this).find('[data-subjson="Competitions"]').each(function () {
                            $("[group='" + key + "']:first")
                                .find('[data-subjson="Competitions"]')
                                .append($(this).html());

                            $(this).remove();

                        });
                    }
                    $(this).remove();
                }
                ////}

                groups.push(key);

            });
            $("[group]:last").removeAttr("data-jlscrollerhitted");
        }
    });
