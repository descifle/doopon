"use strict"

$("#contact-form").submit(function() {

    const str = $(this).serialize();

    $.ajax({ type: "POST", url: "formparse.php", data: str, success: function(result){
        $(".whatwhat").html(result)
        grecaptcha.reset()
        document.querySelector('#contact-form').reset()
        setTimeout(() => {
            $(".whatwhat").html("")
        }, 8000)
    }})
    return false;
})

// recaptcha settings || client side validation
function recaptcha_callback() {
    $(".submit-button").attr("disabled", false);
    $(".submit-button").removeClass('disabled');
}

function disableButton() {
    $(".submit-button").attr("disabled", true);
    $(".submit-button").addClass('disabled');
}

$(document).ready(function () {

    const navTop = document.querySelector('.nav-top')

    //handle navbar

    $(window).on('scroll', function() {
        if($(window).scrollTop() < 20) {
            $('#navbar').css({ 'height': ''})
            $('#navbar').css({ 'box-shadow': ''})
        } else {
            $('#navbar').css({ 'height': '6rem'})
            $('#navbar').css({ 'box-shadow': '0px 0px 10px #706d6d'})
        } 
    })

    $('.mobile-nav a').click(() => {
        $('.mobile-nav').collapse('hide')
    })

    $('.close').on('click', () => {
        // $('#main-nav').css({'height' : '0vh'})
        setTimeout(() => {
            $('.mobile-nav').collapse("toggle")
            // $('#main-nav').css({'height' : ''})
            // $(this).fadeOut() TRY
        }, 400)
        // $('#main-nav').css({'height' : ''})
        // $('#main-nav').collapse()
    })

    // smooth scroll to specified anchor
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 180
        }, 500);
    });

    const scrollToTop = () => {
        $('html ,body').animate({scrollTop : 0}, 1200)
    }

    // const openCard = (e) => {
    //     $(e).on('click',() => {
    //         e.toggleClass("extend")
    //     })
    // }

    const scrollTopAppear = () => {
        let y = window.scrollY
        if (y >= 800) {
            navTop.className = "nav-top show"
        } else {
            navTop.className = "nav-top hidden"
        }
    }

    //	carouFredSel banner
    $('.card-container .banners').carouFredSel({
        auto: {
            timeoutDuration: 8000
        },
        responsive: true,
        prev: '.banner_prev',
        next: '.banner_next',
        width: '100%',
        scroll: {
            items: 1,
            duration: 1000,
            easing: "easeOutExpo"
        },
        items: {
            width: '400',
            height: 'variable',	//	optionally resize item-height
            visible: {
                min: 1,
                max: 3
            }
        },
        mousewheel: false,
        swipe: {
            onMouse: true,
            onTouch: true
            }
    });

    //setup and initialize wow js  
    const wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

    $('.nav-top, .home, .navbar-brand').click(scrollToTop)
    $('.slider').bxSlider({
        captions: true,
        mode: 'fade',
        speed: 1000,
        touchEnabled: false,

    });

    window.addEventListener('scroll', scrollTopAppear)
})