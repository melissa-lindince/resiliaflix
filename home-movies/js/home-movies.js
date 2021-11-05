$(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    margin: 3,
    smartSpeed: 900,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1200: {
            items: 6
        }
    },
});
