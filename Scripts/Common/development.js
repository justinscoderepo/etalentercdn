var developmentmode = true;
function GoToLogin() {
    if (getcache('UserName') != false && getcache('Password') != false) {
        $('#EmailId').val(getcache('UserName'));
        $('#PasswordId').val(getcache('Password'));
        //                $('#RememberMe').prop('checked', true);
        var postdata = {};
        postdata.formdata = $('[action="Login"]').serializeArray();
        $('[action="Login"]').trigger("beforesave", postdata);
        $.post($('[action="Login"]').attr('action'),
            postdata.formdata,
            function (data) {
                if (data.Results == 'Logined') {
                    var url = window.location.hostname;
                    if (getcache('url') != false && window.location.href != getcache('url')) {
                        window.location = getcache('url');
                    } else {
                        window.location = "/Index";
                    }
                }
            });
        //$('#LoginForm').submit();
        // $('#inputLogon').trigger('submit');
    } else {

    }
}
$(document).ready(function () {
    //$('body')
    //    .append('<style>[accesskey]::after {position: absolute;color: plum;content: "[" attr(accesskey) "]";color: #072743;font-size: 12px;padding: 2px;}<style>');
    ///*accesskeys*/
    var string = 'abcdefghijkmnopqstuvwxyz1234567890';
    var addaccesskeys = function () {
        var addedcount = 0;
        $('[accesskey][accesskeygenerated]').removeAttr('accesskey').removeAttr('accesskeygenerated');
        $.each($('body').find("*").addBack().data("events"), function (i, event) {
            var t = $(this);
            $.each(event, function (j, h) {
                if (j = 'click') {

                    if (!(t.attr('accesskey')) && (string[addedcount])) {
                        t.attr('accesskey', string[addedcount]);
                        t.attr('accesskeygenerated', true);
                    }
                    addedcount++;
                }
            });
        });

        $('a[href]:visible:not([accesskeygenerated])').not(".orderrow a").each(function (i, v) {

            if (!($(this).attr('accesskey')) && (string[addedcount])) {
                $(this).attr('accesskey', string[addedcount]);
                $(this).attr('accesskeygenerated', true);
                addedcount++;
            }
        });
        $('[onclick]:visible:not([accesskeygenerated])').each(function (i, v) {

            if (!($(this).attr('accesskey')) && (string[addedcount])) {
                $(this).attr('accesskey', string[addedcount]);
                $(this).attr('accesskeygenerated', true);
                addedcount++;
            }
        });
        $('button:visible:not([accesskeygenerated]),label[for]:visible:not([accesskeygenerated],[data-json] label)').each(function (i, v) {

            if (!($(this).attr('accesskey')) && (string[addedcount])) {
                $(this).attr('accesskey', string[addedcount]);
                $(this).attr('accesskeygenerated', true);
                addedcount++;
            }
        });
        $('a[href]').not('[accesskeygenerated],.orderrow a').each(function (i, v) {

            if (!($(this).attr('accesskey')) && (string[addedcount])) {
                $(this).attr('accesskey', string[addedcount]);
                $(this).attr('accesskeygenerated', true);
                addedcount++;
            }
        });


    };
    $('.nav-tabs a').on('shown.bs.tab', function (event) {
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab
    });
    $('body').on('click', '[accesskey][accesskeygenerated]', function () {
        addaccesskeys();
    });
    jQuery(document).ajaxStart(function () {

    }).ajaxStop(function () {
        //hide ajax indicator
        setTimeout(function () {
            addaccesskeys();
        }, 1000);
    });
    addaccesskeys();
    /*development mode*/
    var logout = $('a.logout');
    logout.attr('accesskey', 'l');
    $('body').append('<span id="removecache" accesskey="r"></span>');
    $("#removecache").click(function () {
        remcache('UserName');
        remcache('Password');
        window.location.href = logout.trigger('click');
    });


    if ($('[action="Login"]').length == 1 && window.location.href.split("localhost").length > 1) {
        $('[action="Login"] button[type=submit]').click(function () {
            var olddata = getcache('OldData');
            var obj = (olddata) ? JSON.parse(olddata) : {};
            var email = $('#EmailId').val();
            var pwd = $('#PasswordId').val();
            obj[email] = pwd;

            setcache('OldData', JSON.stringify(obj));
            setcache('UserName', $('#EmailId').val());
            setcache('Password', $('#PasswordId').val());
        });
        $("#EmailId").keyup(function () {
            if ($(this).val().length > 1) {
                var count = 0;
                var email = "";
                var pwd = "";
                var olddata = getcache('OldData');
                var obj = (olddata) ? JSON.parse(olddata) : "";
                if (obj != "") {
                    for (key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            if (key.indexOf($(this).val()) === 0) {
                                email = key;
                                pwd = obj[key];
                                count++;
                            }
                        }
                    }
                    if (count == 1) {
                        setcache('UserName', email);
                        setcache('Password', pwd);
                        GoToLogin();
                    }
                }
            }
        });
        setTimeout(function () {

            $('#EmailId').val("").focus();
            $('#PasswordId').val("");
            GoToLogin();
        }, 100);
    }
    else if (window.location.href.toLowerCase().split("/search/").length == 1) {
        /*part of page reload after login*/
        setcache('url', window.location.href); /*Searching part*/
    }
    /*development mode ends*/


});