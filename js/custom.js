


$(document).ready(function () {


    //handle navbar

    $(window).on('scroll', function() {
        if($(window).scrollTop() < 20) {
            $('#navbar').css({ 'height': ''}) 
        } else {
            $('#navbar').css({ 'height': '6rem'})
        } 
    })

    // smooth scroll to specified anchor
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    //setup and initialize wow js 
    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

    $('.slider').bxSlider();
})