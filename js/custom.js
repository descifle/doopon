


$(document).ready(function () {

    const navTop = document.querySelector('.nav-top')
    const video = document.querySelector('.head-vid')
    video.addEventListener('ended', (e) => {
        this.play()
    })

    //handle navbar

    $(window).on('scroll', function() {
        if($(window).scrollTop() < 20) {
            $('#navbar').css({ 'height': ''})
            
        } else {
            $('#navbar').css({ 'height': '6rem'})
            $('#navbar').css({ 'opacity': '0.95'})
        } 
    })

    // smooth scroll to specified anchor
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    const scrollTo = () => {
        $('html ,body').animate({scrollTop : 0}, 1200)
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
    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

    $('.nav-top').click(scrollTo)
    $('.home').click(scrollTo)
    $('.slider').bxSlider();

    window.addEventListener('scroll', scrollTopAppear)
})