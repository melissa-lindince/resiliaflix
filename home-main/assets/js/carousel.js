$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        responsive: {
            0 : {
                items: 3
            },
            600 : {
                items: 4
            },
            1200 : {
                items: 6
            }
        },
        autoplay: true,
    });
});