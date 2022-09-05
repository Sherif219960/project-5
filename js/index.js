$(document).ready(function () {

    // loading page 
    $(window).on('load', function () {
        $('.loading').fadeOut(1000, function () {
            $('body').css({ 'overflow': 'auto' });
        });
    });

    // header height
    $(function () {
        $('.header').height($(window).height());
    });
    $(window).resize(function () {
        $('.header').height($(window).height());

    });

    // venobox
    $('.venobox').venobox();

    // nav color
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $("nav").css({
                "background-color": "#040D20",
                "padding": "7px 0"
            });

        } else {
            $("nav").css({
                "background-color": "transparent",
                "padding": "15px 0",
            });
        }
    });

    // testimonials
    $('.testimonials .buttons .btn').on('click', function (e) {
        $(this).addClass('active').siblings().removeClass('active');
        e.preventDefault();
        $('#' + $(this).data('click')).siblings().fadeOut(200, function () {
            $('#' + $(this).data('click')).siblings().removeClass('active');
        });
        $('#' + $(this).data('click')).delay(200).fadeIn(200, function () {
            $('#' + $(this).data('click')).addClass('.active');
        });
    });
    // gallary
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        center: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // F.A.Q
    $('.faq .content .info i').on('click', function () {
        $(this).parent().parent().find('p').slideToggle(300);
        if ($(this).hasClass('fa-solid fa-circle-plus')) {
            $(this).parent().find('h4').css({
                'color': 'red'
            });
            $(this).attr('class', 'fa-solid fa-circle-minus');
            $(this).css({
                'color': 'red'
            });
        } else {
            $(this).attr('class', 'fa-solid fa-circle-plus');
            $(this).css({
                'color': 'unset'
            });
            $(this).parent().find('h4').css({
                'color': 'unset'
            });
        }
    });

    // smooth scroll 
    $('nav li a').on('click', function () {
        $("html,body").animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 120
        }, 1000);
    });

    // button up

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1000) {
            $('.up').fadeIn(1000);
        } else {
            $('.up').fadeOut(1000);

        }
    });
    $('.up').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    // Aos animate 
    $(function () {
        AOS.init();
        window.addEventListener('load', AOS.refresh);

    });

});