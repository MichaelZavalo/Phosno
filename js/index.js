$('.menu-btn').on('click', function () {
    $(this).toggleClass('menu-btn-active');
    $('.menu-nav').toggleClass('menu-nav-active');
})


$(document).ready(function () {
    $('.about-us__slider').slick({
        infinity: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplayspeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});


$('.first-block__btn-know-more').on('click', function () {
    $(".first-block__know-more").addClass('know-more-active');
});

$('.second-block__btn-know-more').on('click', function () {
    $(".second-block__know-more").addClass('know-more-active');
});

$('.third-block__btn-know-more').on('click', function () {
    $(".third-block__know-more").addClass('know-more-active');
});

$('.fourth-block__btn-know-more').on('click', function () {
    $(".fourth-block__know-more").addClass('know-more-active');
});

$('.fifth-block__btn-know-more').on('click', function () {
    $(".fifth-block__know-more").addClass('know-more-active');
});

$('.sixth-block__btn-know-more').on('click', function () {
    $(".sixth-block__know-more").addClass('know-more-active');
});

$('.first-block__back').on('click', function () {
    $(".first-block__know-more").removeClass('know-more-active');
});

$('.second-block__back').on('click', function () {
    $(".second-block__know-more").removeClass('know-more-active');
});

$('.third-block__back').on('click', function () {
    $(".third-block__know-more").removeClass('know-more-active');
});

$('.fourth-block__back').on('click', function () {
    $(".fourth-block__know-more").removeClass('know-more-active');
});

$('.fifth-block__back').on('click', function () {
    $(".fifth-block__know-more").removeClass('know-more-active');
});

$('.sixth-block__back').on('click', function () {
    $(".sixth-block__know-more").removeClass('know-more-active');
})


$(document).ready(function () {
    $('.what-they-says__slider-first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true,
        asNavFor: '.what-they-says__slider-second'
    });
    $('.what-they-says__slider-second').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.what-they-says__slider-first',
        dots: false,
        centerMode: false,
        focusOnSelect: false,
        arrrows: true,
    });
});


function backToTop() {
    let button = $('.back-to-top');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 1500) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 1000);
    })
}

backToTop();