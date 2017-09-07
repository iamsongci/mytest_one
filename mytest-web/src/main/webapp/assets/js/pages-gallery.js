var PagesGallery = function () {
    //function to initiate Colorbox
    var runColorBox = function () {
        $(".group1").colorbox({
            rel: 'group1',
            transition: "none",
            width: "100%",
            height: "100%",
            retinaImage: true
        });
    };

    //function to Image Picker
    var runImagePicker = function () {
        $('.wrap-image .chkbox').bind('click', function () {
            if ($(this).parent().hasClass('selected')) {
                $(this).parent().removeClass('selected').children('a').children('img').removeClass('selected');
            } else {
                $(this).parent().addClass('selected').children('a').children('img').addClass('selected');
            }
        });
    };

    return {
        //main function to initiate template pages
        init: function () {
            runColorBox();
            runImagePicker();
        }
    };
}();