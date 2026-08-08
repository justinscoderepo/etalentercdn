// Select Default Value Handlers
// Sets default values for select elements after they are populated

$('body').on("afterappendcomplete",
    "select[name='Status']",
    function (e, data) {
        if (!$(this).val()) {
            $(this).val([1]);
        }
    });

$('body').on("afterappendcomplete",
    "select[name='Visibility']",
    function (e, data) {
        if (!$(this).val()) {
            $(this).val([2]);
        }
    });

$('body').on("afterappendcomplete",
    "select[name='Language']",
    function (e, data) {
        if (!$(this).val()) {
            $(this).val([4]);
        }
    });

$('body').on("afterappendcomplete",
    "select[name='Gender']",
    function (e, data) {
        if (!$(this).val()) {
            $(this).val([3]);
        }
    });

$('body').on("afterappendcomplete",
    "select[name='IdentityNumber']",
    function (e, data) {
        if (!$(this).val()) {
            $(this).val([2]);
        }
    });
