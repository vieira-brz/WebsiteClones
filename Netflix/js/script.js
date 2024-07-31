window.onload = () => {

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementsByClassName('toolbar')[0].classList.add('scrolled');
        } else {
            document.getElementsByClassName('toolbar')[0].classList.remove('scrolled');
        }
    });

    var swiperSoNetflix = new Swiper(".so-netflix .slide-container", {
        slidesPerView: 6,
        spaceBetween: 20,
        sliderPerGroup: 6,
        loop: true,
        centerSlide: "true",
        fade: "true",
        pagination: {
            el: "#nav-so-netflix",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: "#btn-so-netflix",
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            520: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 5,
            },
        },
    });

    var swiperEmAlta = new Swiper(".em-alta .slide-container", {
        slidesPerView: 6,
        spaceBetween: 20,
        sliderPerGroup: 6,
        loop: true,
        centerSlide: "true",
        fade: "true",
        pagination: {
            el: "#nav-em-alta",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: "#btn-em-alta",
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            520: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 5,
            },
        },
    });

    var swiperSeries = new Swiper(".series .slide-container", {
        slidesPerView: 6,
        spaceBetween: 20,
        sliderPerGroup: 6,
        loop: true,
        centerSlide: "true",
        fade: "true",
        pagination: {
            el: "#nav-series",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: "#btn-series",
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            520: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 5,
            },
        },
    });

}