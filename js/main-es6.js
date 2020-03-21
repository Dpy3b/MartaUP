$(function(){

    $(".header-slider").slick({
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        dotsClass: "header-dots",
        autoplay: 2000      
    });

    
$('.header__burger').on('click', function(){
    $('.header__list').slideToggle();
});


});

