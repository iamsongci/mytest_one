var Animation = function () {
    //function to initiate CSS3 Animation 
    var runAnimation = function () {
        /*
				 ENTRANCES
				 */
        $('.animation-buttons .btn').click(function (e) {
            e.preventDefault();
        });
        $('#slideUpBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("slideUp");
            });
        });
        $('#slideDownBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("slideDown");
            });
        });
        $('#slideLeftBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("slideLeft");
            });
        });
        $('#slideRightBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("slideRight");
            });
        });
        $('#slideExpandUpBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("slideExpandUp");
            });
        });
        $('#expandUpBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("expandUp");
            });
        });
        $('#fadeInBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("fadeIn");
            });
        });
        $('#expandOpenBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("expandOpen");
            });
        });
        $('#bigEntranceBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("bigEntrance");
            });
        });
        $('#hatchBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("hatch");
            });
        });
        /*
				 MISC
				 */
        $('#bounceBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("bounce");
            });
        });
        $('#pulseBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("pulse");
            });
        });
        $('#floatBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("floating");
            });
        });
        $('#tossingBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("tossing");
            });
        });
        $('#pullUpBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("pullUp");
            });
        });
        $('#pullDownBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("pullDown");
            });
        });
        $('#stretchLeftBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("stretchLeft");
            });
        });
        $('#stretchRightBtn').click(function () {
            $(this).each(function () {
                $('#object').removeClass();
                $('#object').addClass("stretchRight");
            });
        });
    };
    return {
        init: function () {
            runAnimation();
        }
    };
}();