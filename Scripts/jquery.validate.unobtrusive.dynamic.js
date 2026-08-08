function UnobtrusiveAttach(element) {
    $(element).data("unobtrusiveValidation", null);
    $(element).data("validator", null);
    $.validator.unobtrusive.parse($(element));
}

function clearElement(el) {
    // get the form inside we are working - change selector to your form as needed
    var $form = el.parent();
    // get validator object
    var $validator = el.closest("form").validate();
    // get errors that were created using jQuery.validate.unobtrusive
    var errors = $form.find(".field-validation-error span");
    errors.each(function() { $validator.settings.success($(this)); });
    var inputs = $form.find("input");
    inputs.each(function() { $(this).removeClass("input-validation-error"); });
};

$(document).ready(function() {
    $('form').each(function() {
        var validator = $.data($(this)[0], 'validator');
        if (validator) {
            var settngs = validator.settings;
            var oldErrorFunction = settngs.errorPlacement;
            var oldSucessFunction = settngs.success;
            settngs.errorPlacement = function(error, inputElement) {
                $(inputElement).closest('.form-geoup').addClass('has-error');
                oldErrorFunction(error, inputElement);
            }
            settngs.success = function(error) {
                $(error).closest('.form-group').removeClass('has-error');
                oldSucessFunction(error);
            }
        }
    });
})