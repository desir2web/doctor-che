$(document).ready(function(){
    
    //tabs
    
    $('.tab-caption').on('click',function(e){
        e.preventDefault();
        var who = $(this).attr('href').split('#')[1],
            slider = $(".tab-content").data('owlCarousel');
        slider.goTo(who);
        
        for (var i = 0; i <= 2; i ++) {
            $('.tab-caption').removeClass('active');
        }
        
        $(this).addClass('active');
    });
    
    //swicth menu appearance
    
    function setMenuTop() {
        var switchPos = $(window).height()-$('.nav').height();
        $(window).on('scroll',function(){
            var curPos = $(window).scrollTop();
            if (curPos > switchPos) {
                if ($('.nav').hasClass('fixed')==false) {
                    $('.nav').addClass('fixed');
                }
            } else {
                if ($('.nav').hasClass('fixed')==true) {
                    $('.nav').removeClass('fixed');
                }
            }
        });
    }
    setMenuTop();

    //watch for window size
    
    $(window).on('resize',function(){
        setMenuTop();
    });
    
    //menu on mobile
    
    $(".menu-toggle").on('click', function(e){
        e.preventDefault();
        $('.nav').addClass('open');
    });
    $('.nav a').on('click',function(e){
        e.preventDefault();
        if ($('.nav').hasClass('open')) {
            $('.nav').removeClass('open');
        }
    });
    
    //trigger click on maps
//    
//    function showMapInfo() {
//        var showPos = $('.process').offset().top;
//        $(window).on('scroll',function(){
//            var curPos = $(window).scrollTop();
//            if (curPos > showPos) {
//                $('.ymaps-image').trigger('click');
//            } else {
//                $('.ymaps-image').trigger('click');
//            }
//        });
//    }
//    showMapInfo();
    
    //navigation
    
    function scrolling(position) {
        var speed = 800;
        $('html, body').stop().animate({scrollTop: position}, speed );
    }
    
//    $(window).on('load', function(e){
//        e.preventDefault();
//        if (window.location.hash == '') {
//            var activeScreen = 'body';
//        } else {
//            var activeScreen = window.location.hash;
//        }
//        var navHeight = $('.nav').height(),
//            blockPosition = $( activeScreen ).offset().top,
//            topPos = blockPosition - navHeight;
//        scrolling(topPos);
//    });
    
    $('.go-to').on('click',  function(e){
        e.preventDefault();
        var goScreen = $(this).attr('href'),
            navHeight = $('.nav').height(),
            blockPosition = $( goScreen ).offset().top,
            topPos = blockPosition - navHeight;
        scrolling(topPos);
    });
    
    //set sliders
    
    $(".tab-content").owlCarousel({
        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true,
        pagination : false,
        mouseDrag : false,
        touchDrag : false
    });
    $(".slider").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true,
        navigationText : ["",""],
        pagination : false,
        autoPlay : 4500,
        stopOnHover : true
    });
    $(".cards").owlCarousel({
        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        pagination : false,
        // "singleItem:true" is a shortcut for:
        items : 5, 
        itemsDesktop : [1440,4],
        itemsDesktopSmall : [1024,3],
        itemsTablet: [768,2],
        itemsMobile : [500,1]
    });
    $(".doctors").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigationText : ["",""],
        pagination : false,
        // "singleItem:true" is a shortcut for:
        items : 3, 
        itemsDesktop : [1440,3],
        itemsDesktopSmall : [1024,3],
        itemsTablet: [768,1],
        itemsMobile : [500,1]
    });

});