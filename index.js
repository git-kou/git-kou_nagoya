$(function() {

    $('.han').click(function() {
        $(this).toggleClass('active');
        $('.no').slideToggle();
    })
    
    $('.hokubu').click(function() {
        $('.hokubu-naka').slideToggle();
    });

    $('.tyubu').click(function() {
        $('.tyubu-naka').slideToggle();
    });

    $('.minami').click(function() {
        $('.minami-naka').slideToggle();
    });

    $('.tatamu-h').click(function() {
        $('.hokubu-naka').slideUp();
        $(window).scrollTop($('.hokubu').position().top - 30);
    });

    $('.tatamu-t').click(function() {
        $('.tyubu-naka').slideUp();
        $(window).scrollTop($('.tyubu').position().top);
    });

    $('.tatamu-m').click(function() {
        $('.minami-naka').slideUp();
        $(window).scrollTop($('.minami').position().top);
    });
})