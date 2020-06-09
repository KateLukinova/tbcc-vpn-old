
$( document ).ready(function() {



    $('.white-label').on('click', function() {
        $(this).parent().toggleClass('open');
    });

    $('.carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".carousel-button-prev").click(function () {
        $('.carousel').slick('slickPrev');
    });
    $(".carousel-button-next").click(function () {
        $('.carousel').slick('slickNext');
    });
});
