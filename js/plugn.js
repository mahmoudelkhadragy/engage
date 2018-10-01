/*global console, window, document */
var $, console, document;

$(function () {
    "use strict";
    // toggle button slid nav bar when click toogle button 
    
    // Add Active class on navbar link and remove from siblings
    $(".links li a").click(function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    
    $(".toggle").click(function () {
        $(".links").slideToggle(500);
    })
    // Calculate Body Padding-Top depending on navbar height
    
    $(window).scroll(function () {
        
        //Add class active to links and remove from other links
        
        var wScrol = $(this).scrollTop(),
            headH = $('.header').innerHeight(),
            bScrollTop = $(".scroll-to-top");
        
        if (wScrol >= headH) {
            //$("body").not(".header").css("paddingTop", $(".header .navbar").outerHeight());
            $('.header .navbar').addClass("fix-nav");
        } else {
            $('.header .navbar').removeClass("fix-nav");
        }
        
        //Sync Navbar Links with Sections
        
        $('.block').each(function () {
            if (wScrol > $(this).offset().top) {
                
                var blockId = $(this).attr('id');
                
                $('.navbar a').removeClass('active');
                
                $('.navbar li a[data-scroll="' + blockId + '"]').addClass('active');
            }
        });
        
        //Scroll to top Button
        
        if (wScrol >= 1500) {
            if (bScrollTop.is(':hidden')) {
                bScrollTop.fadeIn(500);
            }
        } else {
            bScrollTop.fadeOut(500);
        }
        
        if (wScrol > 2400) {
            $('.time').countTo();
            $(window).off('scroll');
        }
        
    });
    
    console.log($('.rates').offset().top);
    
    // Scroll Smoothly To The Element
    $(".links a").click(function (e) {
        
        e.preventDefault();
        
        $("html, body").animate({
            scrollTop: $("#" + $(this).data('scroll')).offset().top + 1
        }, 1000);
        
    });
    
    
    //click button to scroll to top 
    $('.scroll-to-top').click(function (event) {
        
        event.preventDefault();
        
        $('html, body').animate({
            
            scrollTop: 0
            
        }, 1000);
        
    });
    
    // popup fadein and fadeout
    
    $('.secret .btn-green').click(function () {
        $($(this).data('popup')).fadeIn();
    });
    
    $('.popup, .popup span').click(function () {
        $(this).parentsUntil('.popup').parent().fadeOut();
    });
    
    $(".popup .inner").click(function (e) {
        e.stopPropagation();
    });
    
    // popup fadeOut with Esc button on keyboard
    
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('.popup').fadeOut();
        }
    });
    
    
    
    
    
    
    
    
});