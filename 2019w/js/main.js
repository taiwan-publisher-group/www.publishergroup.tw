/*---------------------------------------------
Template name:  Elaze
Version:        1.0
Author:         techydevs
Author Email:   contact@techydevs.com

[Table of Content]

01: Preloader
02: side-widget-menu
02: Back to Top Button and Navbar Scrolling control
03: Mobile Menu Open Control
04: Mobile Menu Close Control
05: homepage-slide1
06: Countdown js
07: Counter up
08: schedule-block
09: MagnificPopup
10: testimonial-wrap
11: Google Map
----------------------------------------------*/


(function ($) {
    "use strict"; //use of strict

    /* ======= Preloader ======= */
    $(window).on('load', function(){
        $('#loading-area').delay('500').fadeOut(2000);
    });


    // run all code when dom is ready in jquery version 3+
    $(function () {
        /*====  side-widget-menu  =====*/
        $(document).on('click','.side-menu-wrap .side-menu-ul .sidenav__item .menu-plus-icon', function () {
            $(this).closest('.sidenav__item').siblings().removeClass('active').find('.side-sub-menu').slideUp(200);
            $(this).closest('.sidenav__item').toggleClass('active').find('.side-sub-menu').slideToggle(200);
            return false;
        });

        $(window).on('scroll', function () {
            //header fixed animation and control
            if($(window).scrollTop() > 0) {
                $('.header-menu-area').addClass('header-fixed');
            }else{
                $('.header-menu-area').removeClass('header-fixed');
            }

            //back to top button control
            if ($(window).scrollTop() > 300) {
                $('#scroll-top').addClass('back-btn-shown');
            } else {
                $('#back-to-top').removeClass('back-btn-shown');
            }
        });

        /* ======= Back to Top Button and Navbar Scrolling control ======= */
        $(document).on('click','#scroll-top', function () {
            $('html, body').animate({scrollTop:0},1000);
        });

        /*=========== Mobile Menu Open Control ============*/
        $(document).on('click','.logo-right-button .side-menu-open', function () {
            $('.side-nav-container').addClass('active');
        });

        /*=========== Mobile Menu Close Control ============*/
        $(document).on('click','.humburger-menu .side-menu-close', function () {
            $(".side-nav-container").removeClass('active');
        });

        /*==== homepage-slide1 =====*/
        $('.homepage-slide1').owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
            smartSpeed: 1000,
            animateOut: 'slideOutDown',
            animateIn: 'fadeIn',
            active: true,
        });

        $('.homepage-slide1').on('translate.owl.carousel', function(){
            $('.single-slide-item .slider__title, .single-slide-item .slider__list').removeClass('animated pulse').css('opacity', '0');
            $('.single-slide-item .slider__meta').removeClass('animated fadeInUp').css('opacity', '0');
            $('.single-slide-item .theme-btn').removeClass('animated fadeInDown').css('opacity', '0');
        });

        $('.homepage-slide1').on('translated.owl.carousel', function(){
            $('.single-slide-item .slider__title, .single-slide-item .slider__list').addClass('animated pulse').css("opacity", '1');
            $('.single-slide-item .slider__meta').addClass('animated fadeInUp').css('opacity', '1');
            $('.single-slide-item .theme-btn').addClass('animated fadeInDown').css('opacity', '1');
        });

        /*=========== Countdown js ============*/
        const cd = new Date().getFullYear() + 2
        $('#countdown').countdown({
            year: cd
        });
        /*=========== Counter up ============*/
        $('.counter').counterUp({
            delay: 20,
            time: 2000
        });

        /*=========== schedule-block  ============*/
        if ($('.schedule-block').length) {
            $('.schedule-block.active').find('.schedule-lower-content').slideDown();

            $('.schedule-block .toggle-btn').on('click', function() {
                $(this).parents('.schedule-block').toggleClass('active');
                $(this).parents('.schedule-block').find('.schedule-lower-content').slideToggle(400);
                $(this).parents('.schedule-block').siblings().find('.schedule-lower-content').slideUp(400);
                $(this).parents('.schedule-block').siblings().removeClass('active');
            });
        }

        /*=========== MagnificPopup ============*/
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });

        /*==== testimonial-wrap =====*/
        $('.testimonial-wrap').owlCarousel({
            loop: true,
            items: 5,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: false,
            margin: 30,
            responsive:{
                320:{
                    items:1,
                },
                767:{
                    items:2,
                },
                992:{
                    items:3,
                },
                1025:{
                    items:4,
                },
                1440:{
                    items:5,
                }
            }
        });

        /*** =====================================
         * -12 Google Maps
         * =====================================***/
        if($("#map").length) {
            initMap('map', 25.0581654,121.5338161, 'images/map-marker.png');
        }

    });
})(jQuery);