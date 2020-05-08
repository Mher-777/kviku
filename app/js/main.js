const telemedicineSlider = () => {
    new Swiper('.telemedicine__inner', {
        slidesPerColumn: 3,
        slidesPerView: 1,
        slidesPerColumnFill: 'row',
        allowTouchMove: true,
        spaceBetween: 20,
        pagination: {
            el: '.telemedicine__pagination',
            type: 'bullets',
            bulletElement: 'button',
            clickable: true,
            bulletClass: 'telemedicine__dots',
            bulletActiveClass: 'telemedicine__dots--active',
        },
        breakpoints: {
            600: {
                slidesPerColumn: 2,
                slidesPerView: 2,
                allowTouchMove: false,
            },
            1000: {
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerView: 3,
                allowTouchMove: false,
            },
            1200: {
                spaceBetween: 90,
                slidesPerColumn: 2,
                slidesPerView: 3,
                allowTouchMove: false,
            },

        }
    })
}

telemedicineSlider()
