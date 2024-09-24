$(function() {

    $('.han').click(function() {
        $(this).toggleClass('active');
        $('.no').slideToggle();
    });

    $(window).resize(function () {
        if(window.matchMedia("(min-width:601px)").matches) {
            $('.no').css('display','none');
            $('.han').removeClass('active');
        };
    });
    
    $('.hokubu').click(function() {
        $('.hokubu-naka').slideToggle();
    });

    $('.tyubu').click(function() {
        $('.tyubu-naka').slideToggle();
    });

    $('.nanbu').click(function() {
        $('.nanbu-naka').slideToggle();
    });

    $('.tatamu-h').click(function() {
        $('.hokubu-naka').slideUp();
        $(window).scrollTop($('.hokubu').position().top - 30);
    });

    $('.tatamu-t').click(function() {
        $('.tyubu-naka').slideUp();
        $(window).scrollTop($('.tyubu').position().top);
    });

    $('.tatamu-n').click(function() {
        $('.nanbu-naka').slideUp();
        $(window).scrollTop($('.nanbu').position().top);
    });
});
