$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        responsive: {
            0 : {
                items: 1
            },
            600 : {
                items: 2
            },
            1200 : {
                items: 6
            }
        },
        autoplay: true,
    });
});