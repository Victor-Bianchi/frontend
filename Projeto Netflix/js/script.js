$(function(){
    $('.vitrine-flex').slick({
        dots: false,
        arrows: false,
        infinite: false,
        centerMode: false,
        speed: 1000,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }]
    })
})