$(document).ready(function () {
    $("body").on("change", '#eventsaddnewrow [name="form[NextLevelEvent]"],#eventsaddnewrow [name="form[CompetitionLevel]"]', function () {
       
        var NextLevelEvent = $('#eventsaddnewrow [name="form[NextLevelEvent]"]').find("option:selected").text();
        var CompetitionLevel = $('#eventsaddnewrow [name="form[CompetitionLevel]"]').find("option:selected").text();
        $('#eventsaddnewrow [name="form[EventName]"]').val(NextLevelEvent + " - ___" + CompetitionLevel + " Name___ " + CompetitionLevel).trigger("change",true);
       


    })

})