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
        } else {
            $('#navbar').css({ 'height': '6rem'})
            // $('#navbar').css({ 'opacity': '0.95'})
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

    const openCard = (e) => {
        $(e).on('click',() => {
            e.toggleClass("extend")
        })
    }

    const scrollTopAppear = () => {
        let y = window.scrollY
        if (y >= 800) {
            navTop.className = "nav-top show"
        } else {
            navTop.className = "nav-top hidden"
        }
    }

    //setup and initialize wow js 
    const wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

    openCard($("#card-body1"))
    openCard($("#card-body2"))
    openCard($("#card-body3"))
    $('.nav-top, .home, .navbar-brand').click(scrollToTop)
    $('.slider').bxSlider();

    window.addEventListener('scroll', scrollTopAppear)
})