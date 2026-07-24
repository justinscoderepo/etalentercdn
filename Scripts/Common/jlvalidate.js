
var groupelements = ".form-group,.input-group";
var DataValidations = [{
    data: 'data-val-mobile',
    type: "mobile"
},
	{
	    data: 'data-val-phone',
	    type: "mobile"
	},
	{
	    data: 'data-val-email',
	    type: "email"
	},
    {
        data: 'data-val-length-max',
        type: "maxlength"
    },
	{
	    data: 'data-val-number',
	    type: "number"
	}, {
	    data: "data-val-remoteerror",
        type:"remoteerror"
    },
    {
        data: "data-val-equalto-other",
        type:"equalto"
    }
];
var inputtypeValidations = ["number", "email"];
var AttrValidations = ["min", "max", "minlength", "maxlength", "pattern", "totallength", "beunique"];

//Allowed Validations End

//Add New Validation functions Here

function switchvalidate(switchcase, th, formgroup, message, v, silent) {
    var feedback = 'has-feedback';
    var warningmessage = 'has-warning ' + feedback;
    var successmessage = 'has-success ' + feedback;
    var errormessage = 'has-error ' + feedback;
    var anotherfield = "";
    var datatype = parseInt;
    if ((th.attr('data-type')) && th.attr('data-type') == "float") {
        datatype = parseFloat;
    }
    if (th.attr('id') == 'Phone') {

    }

    if ((switchcase)) {
        switch (switchcase) {
            case "required":
                {

                    switch (th.attr("type")) {
                        case "checkbox":
                            {
                                if ($("[name='" + th.attr("name") + "']").length > 1) {
                                    if ($("[name='" + th.attr("name") + "']:checked").length == 0) {
                                        if (message == "") {
                                            message = 'This Field is Required';
                                        }
                                        classfill(formgroup, errormessage, 4, message, silent);
                                        return false;
                                    }
                                }else
                                if (th.prop("checked") == false) {

                                    if (message == "") {
                                        message = 'This Field is Required';
                                    }
                                    classfill(formgroup, errormessage, 4, message, silent);
                                    return false;
                                }
                                break;
                            }
                        case "radio":
                            {
                                if ($("[name='" + th.attr("name") + "']:checked").length == 0) {
                                    if (message == "") {
                                        message = 'This Field is Required';
                                    }
                                    classfill(formgroup, errormessage, 4, message, silent);
                                    return false;
                                }
                            }
                        default:
                            {
                                if (v == '' || v == null || ((th.attr("data-requiredvalue")) && th.attr("data-requiredvalue") == v)) {
                                    if ((th.attr("data-val-required"))) {
                                        message = th.attr("data-val-required");
                                    }
                                    else
                                        if (message == "") {
                                            message = 'This Field is Required';
                                        }
                                    classfill(formgroup, errormessage, 4, message, silent);
                                    return false;
                                }
                                break;
                            }
                    }


                    break;
                }
            case "minlength":
                {
                    if ((th.attr("data-val-length-max")) && v.length < parseInt(th.attr("data-val-length-max"))) {
                        if (message == "") {
                            message = 'This field Character length must be greater than or equal to ' + th.attr("minlength");
                        }
                        classfill(formgroup, errormessage, 4, message, silent, true);
                        return false;

                    }else
                    if ((th.attr("minlength")) && v.length < parseInt(th.attr("minlength"))) {
                        if (message == "") {
                            message = 'This field Character length must be greater than or equal to ' + th.attr("minlength");
                        }
                        classfill(formgroup, errormessage, 4, message, silent, true);
                        return false;

                    }
                    break;
                }
            case "maxlength":
                {
                    if ((th.attr("maxlength")) && v.length > parseInt(th.attr("maxlength"))) {
                        if ((th.attr("data-val-length"))) {
                            message = th.attr("data-val-length");
                        }
                        if (message == "") {
                            message = 'This field Character length must be less than or equal to ' + th.attr("maxlength");
                        }
                        classfill(formgroup, errormessage, 4, message, silent, true);
                        return false;

                    }
                    break;
                }
            case "min":
                {
                    if ((th.attr("min")) && datatype(v) < datatype(th.attr("min"))) {
                        classfill(formgroup, errormessage, 4, "Value must be grater than or equal to " + th.attr("min"), silent, true);
                        return false;
                    }
                    break;
                }
            case "max":
                {
                    if ((th.attr("max")) && datatype(v) > datatype(th.attr("max"))) {
                        classfill(formgroup, errormessage, 4, "Value must be less than or equal to " + th.attr("max"), silent, true);
                        return false;
                    }
                    break;
                }

            case "email":
                {
                    if (v != '') {
                        if (!reg('email', v)) {
                            if (message == "") {
                                message = 'Please Enter a Valid Email Address';
                            }
                            classfill(formgroup, errormessage, 4, message, silent);
                            return false;
                        }
                    }
                    break;
                }
            case "totallength":
                {
                    anotherfield = $(th.attr('match'));
                    if ((th.attr("closest"))) {
                        anotherfield = th.closest(th.attr('closest')).find(th.attr('match'))
                    }
                    var othervalueslength = 0;
                    anotherfield.each(function () {
                        othervalueslength += $(this).val().length;
                    })

                    if (v.length + othervalueslength > parseInt(th.attr("totallength"))) {
                        var message = 'The Total Length of ' + $(th).attr('label') + ' and ' + anotherfield.attr('label') + " Length Cannot Be Exceed greater than " + th.attr("totallength");
                        if ((th.attr("totallengthmessage"))) {
                            message = th.attr("totallengthmessage");
                        }
                        classfill(formgroup, errormessage, 4, message, silent);
                        return false;
                    }
                    break;
                }

            case "beunique":
                {
                    var valuearray = [];
                    var errorunique = false;
                    $(th.attr("beuniqueclosest")).each(function () {
                        var value = ""
                        $(this).find(th.attr('beuniquematch')).each(function (ii, vi) {
                            value += $(this).val().toLowerCase();
                        })
                        if (value != "") {
                            if ($.inArray(value, valuearray) != -1) {
                                var message = "Names Should be unique";
                                if ((th.attr("beuniquemessage"))) {
                                    message = th.attr("beuniquemessage");
                                }
                                formgroup = $(this).find(th.attr('beuniquematch')).first().closest(groupelements);
                                classfill(formgroup, errormessage, 4, message, silent);
                                errorunique = true;
                                return false;
                            }
                            else {
                                valuearray.push(value);
                            }
                        }
                    })
                    if (errorunique == true) {
                        return false;
                    }
                    else {
                        cleardata(th);
                    }
                    break;
                }
            case "equalto": {
                anotherfield = $(th.attr('data-val-equalto-other').replace("*.", "#"));
                if (v != anotherfield.val()) {
                    classfill(formgroup, errormessage, 4, 'This Field Not Matching to ' + anotherfield.attr('label'), silent);
                    return false;
                }
                break;
            }

            case "match":
                {
                    anotherfield = $(th.attr('match'));
                    if (v != anotherfield.val()) {
                        classfill(formgroup, errormessage, 4, 'This Field Not Matching to ' + anotherfield.attr('label'), silent);
                        return false;
                    }
                    break;
                }
            case "notmatch":
                {
                    anotherfield = $(th.attr('notmatch'));
                    if (typeof th.attr('closest') != 'un') {
                        anotherfield = th.closest(th.attr('closest')).find(th.attr('notmatch'));
                    }
                    if (v == anotherfield.val()) {
                        classfill(formgroup, errormessage, 4, 'This Field Not Be Same to ' + anotherfield.attr('label'), silent);
                        return false;
                    }
                    break;
                }
            case "requiredif":
                {
                    anotherfield = $(th.attr('requiredif'));
                    warningmessageithin = $(th.attr('within'));
                    if ((v == '') && (th.closest(warningmessageithin).find(anotherfield).val() != '')) {
                        classfill(formgroup, errormessage, 4, message, silent);
                        return false;
                    }
                    break;
                }
            case "select":
                {
                    if (v == 'select') {
                        classfill(formgroup, errormessage, 4, message, silent);
                        return;
                    }
                    break;
                }
            case "remoteerror":
            {
                if ((th.attr("data-val-remoteerror"))) {
                    classfill(formgroup, errormessage, 4, th.attr("data-val-remoteerror"), silent, true);
                    return false;
                }
                break;
            }
            case "radiofield":
                {
                    anotherfield = $(th.attr('radiofield'));
                    if ((v != '') && (anotherfield.val() != '')) {
                        classfill(formgroup, warningmessage, 3, 'Only one field allowed to fill -> ' + anotherfield.attr('label') + ' or ' + th.attr('label'), silent);
                        return;
                    } else
                        if ((v == '') && (anotherfield.val() == '')) {
                            classfill(formgroup, warningmessage, 3, 'one field required -> ' + anotherfield.attr('label') + ' or ' + th.attr('label'), silent);
                            return;
                        }
                    break;
                }
            case "number":
                {

                    if (v != '') {
                        if (!reg('number', v)) {
                            if (message == "") {
                                message = 'Please Enter a Valid Number';
                            }
                            classfill(formgroup, errormessage, 4, message, silent);
                            return false;
                        }

                    }
                    break;
                }
            case "float":
                {
                    if (v != '') {
                        if (!reg('float', v)) {
                            if (message == "") {
                                message = 'Please Enter a Valid Float Number';
                            }
                            classfill(formgroup, errormessage, 4, message, silent);
                            th.attr('data-type', "float");
                            return false;
                        }

                    }
                    break;
                }
            case "time":
                {
                    if (v != '') {
                        re = /^\d{1,2}:\d{2}([ap]m)?$/;
                        if (!v.match(re)) {
                            classfill(formgroup, errormessage, 4, 'Invalid time format HH:MM', silent);
                            return false;
                        }
                    }
                    break;
                }
            case "mobile":
                {
                    if (v != '') {
                        if (!reg('mobile', v)) {
                            if (message == "") {
                                message = 'Please Give a valid Mobile Number';
                            }
                            classfill(formgroup, errormessage, 4, message, silent);
                            return false;

                        }

                    }
                    break;
                }
            case "check-required":
                {
                    if (v != '') {
                        if (!reg('number', v)) {
                            if (message == "") {
                                message = 'Please Give a valid Mobile Number';
                            }
                            classfill(formgroup, errormessage, 4, message, silent);
                            return false;

                        }

                    }
                    break;
                }
            default:
                {

                }
        }


    }
    return true;
}

//Add New Validation functions End

function reg($type, errormessagem) {
    switch ($type) {
        case 'email':
            {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                break;
            }
        case 'number':
            {
                //var regex = /^([0-9])+$/;
                var regex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
                break;
            }
        case 'mobile':
            {
                var regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;        //var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                break;
            }
        case 'float':
            {
                var regex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
                break;
            }
    }
    return regex.test(errormessagem);
}

function getmsg(mtd, msg) {
    var span = '<span class="fas fa-check';
    var a = 'success';
    switch (mtd) {
        case 1:
            {
                span += ' fa-check ';
                a = 'success';
                setTimeout(function () {
                    $('.has-success').find('.fa-check').remove();
                }, 2000);
                break;
            }
        case 2:
            {
                span += ' fa-check ';
                a = 'info';
                break;
            }
        case 3:
            {
                span += ' fa-exclamation-triangle ';
                a = 'warning';
                break;
            }
        case 4:
            {
                span += ' fa-times ';
                a = 'danger';
                break;
            }
        default:
            { }
    }
    span += ' form-control-feedback" aria - hidden = "true" ></span>';
    span = "";
    if (msg != '') {
        span = '<div class="field-validation-error"><span class="uparrow text-' + a + ' fas fa-caret-up"></span>' + span;
        span += '<span class="alert alert-' + a + '"> ' + msg + '</span></div>';
    }
    return span;
}

function resetit(formgroup) {
    formgroup.find('.uparrow').remove();
    formgroup.find('.alert').remove();
    formgroup.find('.glyphicon').remove();
    formgroup.removeClass('has-warning has-success has-error has-feedback');
}

function classfill(formgroup, warningmessage, no, msg, silent, priority) {
    //resetit( formgroup );
    if (((formgroup.find(".field-validation-error").length == 0 || priority == true) && !silent)) {
        formgroup.addClass(warningmessage);
        formgroup.append(getmsg(no, msg));
    }
    if (!silent) {
        if (formgroup.length == 0 && no == 4) {
            ////alert(formgroup, msg, 10000, "e");
            alert(msg, false, false, "validationmessage", "e", 10000);
        }
        if (formgroup.length == 0 && no == 3) {
            alert(msg, false, false, "validationmessage", "w", 10000);
        }
    }
}

function cleardata($this) {
    $this.closest(groupelements).removeClass('has-error has-feedback').find('.field-validation-error').remove().end().find('.glyphicon').remove();
}

function itsok(formgroup, successmessage, silent) {
    // $st = $( $fm.attr( 'submit' ) ).show();
    classfill(formgroup, successmessage, 1, '', silent);
    //  $st = $( $fm.attr( 'submit' ) ).show();
}

function replacewiththis(th, text) {
    if (th.attr('name').match(/\[[0-9]\]/)) {
        return text.replace('The ' + th.attr('name').split('].')[1], "This ")
    }
    return text;
    return text.replace('The ' + th.attr('name'), "This ");
}


function DataValidation(th, data, switchcase, formgroup, v, silent) {
    if ((th.attr(data)) && th.attr(data).toString() != "false") {
        var message = replacewiththis(th, th.attr(data));

        if (th.attr(data).toString() != "true") {
            message = th.attr(data);
        }
        if (message == "true") {
            message = "";
        }

        return switchvalidate(switchcase, th, formgroup, message, v, silent);
    }
    return true;
}

function inputtypeValidation(th, switchcase, formgroup, v, silent) {
    if ((th.attr('type')) && th.attr('type') == switchcase) {
        return switchvalidate(switchcase, th, formgroup, "", v, silent);
    }
    return true;
}

function AttrValidation(th, switchcase, formgroup, v, silent) {
    if ((th.attr(switchcase))) {
        return switchvalidate(switchcase, th, formgroup, "", v, silent);
    }
    return true;
}

function validate(th, fg, silent) {
    var formgroup = th.closest(fg);
    var v = th.val();
    if (th.attr("type") == "checkbox" && th.prop("checked") == false) {
        v = "";
    }
    if (th.attr("type") == "radio" && $("[name='" + th.attr("name") + "']:checked").length == 0) {
        th = $("[name='" + th.attr("name") + "']:first");
        v = "";
    }
    if (typeof th.attr("multiple") != "un" && th.attr("multiple") == "multiple" && th.find('option:selected').length == 0) {
        v = "";
    }
    if (v != '' && v != null && (!(th.attr("data-requiredvalue")) && th.attr("data-requiredvalue") != v)) {

        if ($.each(DataValidations, function (n, value) {

            if (DataValidation(th, value.data, value.type, formgroup, v, silent) == false) {
	            return false;
        }

        }) == false) {
            return false;
        }
        if ($.each(inputtypeValidations, function (n, value) {
	        if (inputtypeValidation(th, value, formgroup, v, silent) == false) {
	            return false;
        }

        }) == false) {
            return false;
        }
        if ($.each(AttrValidations, function (n, value) {
          if (AttrValidation(th, value, formgroup, v, silent) == false) {
              return false;
        }

        }) == false) {
            return false;
        }

    } else {
        if (AttrValidation(th, "required", formgroup, v, silent) == false) {
            return false;
        }
        if (DataValidation(th, 'data-required', "required", formgroup, v, silent) == false) {
            return false;
        }
        if ((th.attr('data-val')) && th.attr('data-val').toString() == "true") {
            if (DataValidation(th, 'data-val-required', "required", formgroup, v, silent) == false) {
                return false;
            }
        }
    }
    

    var feedback = 'has-feedback';
    var successmessage = 'has-success ' + feedback;
    if (formgroup.find(".field-validation-error").length > 0) {
        return false;
    }
    itsok(formgroup, successmessage, silent);
    return true;

}
function silentValidation(form) {
    if (form != null && (form)) {
        var returnvalue = true;
        form.find('.hiddenvalidate:visible input,select:visible,input:visible,textarea:visible,.checkCol:visible input,.radioCol:visible input,.selectric-wrapper:visible select').not("[disabled],.checkCol:visible input[type=hidden],.selectric-input,.disablevalidation").each(function () {

            if (validate($(this), groupelements, true) == false) {
                returnvalue = false;
            }

        });
        return returnvalue;
    } else {
        $('select,input,textarea').each(function () {
            $(this).trigger('blur');

            //validateit($(this), '.form-group2,.form-group,.input-group');
        });
    }
}
function submitform(form, mode) {
    if (form != null && (form)) {
        var returnvalue = true;
        form.find('select:visible,input:visible,.form-group:visible textarea,.mustvalidate:visible input').not(".disablejltableform,[disabled],select[name*=Parent],select[name=Order],.disablevalidation").each(function () {
            $(this).trigger('blur');
            if (validate($(this), groupelements, false) == false) {
                console.log($(this)[0].outerHTML);
                returnvalue = false;
            }

        });
        return returnvalue;
    } else {
        $('select,input,textarea').each(function () {
            $(this).trigger('blur');

            //validateit($(this), '.form-group2,.form-group,.input-group');
        });
    }
}
var checkValidity = function () {
    alert('as');
};
function resetformvalidation(form) {
    form.find('select,input,textarea').each(function () {
        $(this).trigger('blur');
    });
}
function validateSubmitButton(form) {

    if ((form.attr('disablesubmit'))) {
        if (!silentValidation(form)) {
            form.find('[type=submit]').prop("disabled", true);
        } else {
            form.find('[type=submit]').prop("disabled", false);
        }
    }
}
$(document).ready(function () {
    //$( 'form' ).checkValidity();
    $('form').attr('novalidate', 'novalidate');
    $('form[disablesubmit=true]').each(function() {
        var form = $(this);
        if ((form.attr('disablesubmit'))) {
            if (!silentValidation(form)) {
                form.find('[type=submit]').prop("disabled", true);
            } else {
                form.find('[type=submit]').prop("disabled", false);
            }
        }
    });

    $('body').on('blur keyup change', 'select,input,textarea', function (index, value) {
        if ($(this).attr('validation') != 'off') {
            cleardata($(this));
        }
    });
    
    $('body').on('keyup',
        '.formblur select,.formblur input,.formblur textarea',
        function (e, forceCheck) {
            var form = $(this).closest("form");
            validateSubmitButton(form);

        });

    $('body').on('blur change', '.formblur select,.formblur input,.formblur textarea', function (e, forceCheck) {
        if (e.originalEvent || forceCheck) {
            var t = $(this);
            var returnValue = true;
            if (!validate($(this), groupelements, false)) {
                returnValue = false;
            }
            var form = $(this).closest("form");
            if ((form.attr('disablesubmit'))) {
                if (!silentValidation(form)) {
                    form.find('[type=submit]').prop("disabled", true);
                } else {
                    form.find('[type=submit]').prop("disabled", false);
                }
            }

            setTimeout(function() {
                cleardata(t);

            },5000);
        }

    });

})