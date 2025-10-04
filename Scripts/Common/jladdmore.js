var moredivhtml = {};

function assignrows(form, listname, index3) {
    var fieldset;
    var morediv = $(form).find('.moreouterdiv[data-list="' + listname + '"]');
    morediv.each(function (i, v) {
        var listindex = ($(this).data('listindex')) ? $(this).data('listindex') : "";
        if (index3 == 0) {
            $(this).html(moredivhtml[listname + listindex]);
        } else {
            $(this).append(moredivhtml[listname + listindex]);
        }
        setmorediv($(this));
        if (morediv.length == 1) {
            fieldset = $(this).find('.moreinnerpart').eq(index3);
            fieldset.find(".autolist").each(function () {
                $(this).binder();
            });

        } else {
            var set = $(this).find('.moreinnerpart').eq(index3);
            set.find(".autolist").each(function () {
                $(this).binder();
            });
            set.addClass('combinedmoreinnerdiv' + index3);

        }
    });
    if (morediv.length > 1) {
        fieldset = morediv.find('.combinedmoreinnerdiv' + index3);
    }
    return fieldset;
}

function setmorediv(outer) {
    var limit = parseInt(outer.data('rowmaxlimit'));
    var lowerlimit = parseInt(outer.data('rowminlimit'));
    var inners = outer.find('.moreinnerpart:visible,.moreinnerpart[data-visible=true]');
    var lastinner = outer.find('.moreinnerpart:visible,.moreinnerpart[data-visible=true]').last();
    var currentlength = inners.length;
    outer.find('.moreplus:visible').hide();
    lastinner.find('.moreplus').show();
    outer.find('.moredelete').show();
    lastinner.find(".moreindex").val(currentlength);
    //outer.find('.moredelete:last').hide();
    if (currentlength == limit) {
        outer.find('.moreplus:visible,[data-visible=true] .moreplus').hide();
    }
    if (currentlength == lowerlimit) {
        for (i = 1; i <= lowerlimit; i++) {
            outer.find('.moredelete:visible,[data-visible=true] .moredelete').eq(i - 1).hide();
        }
    }
    outer.find('.moreinnerpart').each(function (index) {
        var innner = $(this);
        $(this).find('input[name],select[name],textarea[name],img[name]').each(function () {
            if (!$(this).attr('id')) {
                $(this).attr('id', $(this).attr('name').replace("[", "_").replace("]", "_").replace("__", "_").replace(/\./ig, ""));
            }
            var originalid = $(this).attr('id').replace(new RegExp("[0-9]", "g"), '');
            // $(this).attr('name', $(this).attr('name').replace(new RegExp(/\[n\]/g), "[" + index + "]"));
            $(this).attr('name', $(this).attr('name').replace(new RegExp(/\[n\]/g), "[" + index + "]"));
            $(this).attr('name', $(this).attr('name').replace(new RegExp("\\[[0-9]+\]"), "[" + index + "]"));
            //$( this ).attr( 'name', $( this ).attr( 'name' ).replace( new RegExp( /[0-9]/g ), index ) );
            switch ($(this).attr('type')) {
                case 'checkbox': {
                }
                case 'radio': {
                    $(this).attr('id', originalid + index);
                    innner.find('label[for^="' + originalid + '"]').attr('for', originalid + index);
                    break;
                }
                default: {
                    $(this).attr('id', originalid + index);
                    innner.find('[data-filterby^="#' + originalid + '"]').attr('data-filterby', "#" + originalid + index);
                }
            }
        });
    });


}

function resetaddmores(objectid) {
    var elements = objectid.find('.moreouterdiv');
    if (objectid.hasClass('moreouterdiv')) {
        elements = elements.add(objectid);
    }

    elements.each(function (index) {
        if ($(this).attr('id')) {
            $(this).html(moredivhtml[$(this).attr('id')]);
            setmorediv($(this));
            var outer = objectid.find('.moreouterdiv').find('.moreinnerpart:visible:last');
            outer.find("[data-json]").each(function () {
                $(this).binder();
            });
            objectid.find('.moreouterdiv').trigger('afterappendaddmore', outer.find('.moreinnerpart:visible:last'));
        }
    });
}


$(document).ready(function () {
    var isInitialized = false
    /*
        Automatically firstly keeping all rows fresh html data for appending when click plus button*/
    if ($('.moreouterdiv [data-json]').length > 0) {
        $("body").on("afterappendcomplete", "[data-json]", function (e) {
        //    if (e.target == e.currentTarget) {
                jllazyload("loadaddmore", function () {
                    if (!isInitialized) {
                        $('.moreouterdiv').trigger("afterintializeaddmore");
                        $('.moreouterdiv').each(function () {
                            
                            var t = $(this);
                            if (!t.attr('id')) {
                                t.attr('id', "MoreOuterDiv_" + new Date().getTime());
                            }
                            if (t.find('.moreinnerpart').length == 0) {
                                t.children().addClass("moreinnerpart");
                            }
                            if (!moredivhtml[t.attr('id')]) {
                                moredivhtml[t.attr('id')] = $(this).html().replace(/\[0\]/g, '[n]');
                                setmorediv($(this));
                            }
                        });
                      
                        isInitialized = true;
                    }
                }, 3000)
          //  }
        });


    } else {
        $('.moreouterdiv').each(function () {
            var t = $(this);
            if (!t.attr('id')) {
                t.attr('id', "MoreOuterDiv_" + new Date().getTime());
            }
            if (t.find('.moreinnerpart').length == 0) {
                t.children().addClass("moreinnerpart");
            }
            if (!moredivhtml[t.attr('id')]) {
                moredivhtml[t.attr('id')] = $(this).html().replace(/\[0\]/g, '[n]');
                setmorediv($(this));
            }
        }); /*Function for add more div */
    }


    $('body').on('afterappendcomplete',
        '.moreouterdiv',
        function (e) {
        if(e.target==e.currentTarget) {
            
            var outer = $(this);
            setmorediv(outer);
            var form = $(this).closest("form");
            if (form.length > 0) {
                validateSubmitButton(form);
            }
            form = $(this).find("form");
            if (form.length > 0) {
                validateSubmitButton(form);
            }
        }
        });
    $('body').on('aftersavemultirows',
        '.moreouterdiv',
        function (e, data) {
            var outer = $(this);
            resetaddmores(outer);
            $(".moreouterdiv ").html("");
            $.binder.reload(outer);

            ////setmorediv(outer);
        });

    $('body').on('click',
        '.moreplus',
        function () {
            var t = $(this);
            var outer = t.closest('.moreouterdiv');
            outer.append(moredivhtml[outer.attr('id')]);
            setmorediv(outer);
            outer.find('.moreinnerpart:visible:last').find("[data-json]").each(function () {
                $(this).binder();
            });
            outer.trigger('afterappendaddmore', outer.find('.moreinnerpart:visible:last'));
        })
    $('body').on('click',
        '.moredelete',
        function () {

            var outer = $(this).closest('.moreouterdiv');
            var th = $(this);
            outer.trigger('beforedelete');
            var inner = $(this).closest('.moreinnerpart');

            if (!(outer.attr('data-disableconfirm'))) {
                alert('Are you sure want to delete ?',
                    function () {
                        outer.trigger('beforeremove', th);
                        if (!(outer.attr('data-disablehide'))) {
                            inner.hide();
                            if (!outer.attr('data-operation')) {
                                outer.attr('data-operation', "IsDelete");
                            }

                            if ((outer.attr('data-operation'))) {

                                var val = inner.find('[id*="' + outer.attr('data-operation') + '"]');
                                if (val.length > 0) {
                                    val.val(2);
                                } else {
                                    inner.remove();
                                }
                            }
                        } else {
                            inner.remove();
                        }
                        setmorediv(outer);
                        outer.trigger('afterdelete');
                    }, false, "moredelete", "c");
            } else {
                if (!(outer.attr('data-disablehide'))) {
                    inner.hide();
                    if (!outer.attr('data-operation')) {
                        outer.attr('data-operation', "IsDelete");
                    }
                    if ((outer.attr('data-operation'))) {
                        var val = inner.find('[id^="' + outer.attr('data-operation') + '"]');
                        if (val.val() == 1) {
                            val.val(2);
                        } else {
                            inner.remove();
                        }
                    }
                } else {
                    inner.remove();
                }
                setmorediv(outer);
                outer.trigger('afterdelete');
            }
        });
});



