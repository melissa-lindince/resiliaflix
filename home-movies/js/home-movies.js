$(document).ready(function() {
    $('.item').on('mouseover',function(e) {
        const trailerUrl = $(this).find('img').attr('data-trailer')
        
        console.log(e)

        $('.trailer').find('iframe').attr('src', trailerUrl)
    })

    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        margin: 3,
        smartSpeed : 900,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 6
            }
        },
    });
});
