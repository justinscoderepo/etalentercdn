

$(document).ready(function () {
    var selector = "#FeaturedImage,#Logo[type=text],#Image[type=text]";
    
   
    
    $('#contentboxbody').on("blur change", selector, function () {
        if (!$(this).val()) {
            var fg = $(this).closest('.form-group');
            
            fg.find('.imageselected').remove();
        }
    });
    $(selector).not('[data-uploadinit]').each(function () {
        $(this).hide();
        $(this).attr('data-uploadinit', true);
        $(this).closest(".hidden").removeClass("hidden");
        $(this).before('<div class="imageplus pull-left"><i class="fas fa-plus"></i></div>');

    });

    var uppy;
    $('#contentboxbody').on("click",
        ".imageplus",
        function () {
          
            $(".imageactive").removeClass("imageactive");
            $(this).parent().find(selector).addClass("imageactive");
            

        });

    function inituppy() {
        uppy = Uppy.Core({
                debug: true,
                autoProceed: false,
                restrictions: {
                    maxFileSize: 10000000,
                    maxNumberOfFiles: 1,
                    minNumberOfFiles: 1,
                    allowedFileTypes: ['image/*', 'video/*']
                }
            })
            .use(Uppy.Dashboard,
                {
                    allowMultipleUploads:true,
                    proudlyDisplayPoweredByUppy: false,
                    closeAfterFinish: true,
                    trigger: '.imageplus',
                    inline: false,
                    target: '#FileManager',
                    replaceTargetContent: true,
                    showProgressDetails: true,
                    browserBackButtonClose: true,
                    height: 470,
                    metaFields: [
                        { id: 'name', name: 'Name', placeholder: 'file name' },
                        { id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }
                    ],
                }).use(Uppy.XHRUpload,
                {
                    endpoint: '/Setup/UploadFile',
                    formData: true,
                    fieldName: 'file'
                });
        uppy.on('complete',
            function(result) {
               
                if (result.successful &&
                    result.successful.length > 0 &&
                    result.successful[0].response &&
                    result.successful[0].response.body) {
                    var image = result.successful[0].response.body;
                    $(".imageactive").val(result.successful[0].response.body).trigger("change", true);
                    $(".imageactive").parent().find(".imageplus").find("img").remove();
                    $(".imageactive").parent().find(".imageplus").append('<img src="' + image + '" />');
                    $(".imageactive").parent().find(".imageplus .fa-plus").addClass("far fa-edit")
                        .removeClass("fas fa-plus");
                    uppy.reset();
                }

            });
    }

    inituppy();

    $('#contentboxbody').on("afterappendcomplete", "div[data-json]", function () {
        $(selector).not('[data-uploadinit]').each(function () {
            $(this).hide();
            $(this).attr('data-uploadinit', true);
            $(this).closest(".hidden").removeClass("hidden");
            $(this).before('<div class="imageplus pull-left"><i class="fas fa-plus"></i></div>');
            if ($(this).val()) {
                $(this).parent().find(".imageplus").append('<img src="' + $(this).val() + '" />');
                $(this).parent().find(".imageplus .fa-plus").addClass("far fa-edit").removeClass("fas fa-plus");
            }
        });
        inituppy();

    });
   
    
})