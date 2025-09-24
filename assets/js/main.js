const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

$(document).ready(function() {
    let init = false;
    let homeSwp;
    function homeSwpHandle() {
        if (window.innerWidth <= 768) {
            if (!init) {
            init = true;
            homeSwp = new Swiper(".home-swp .swiper", {
                direction: "horizontal",
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 32,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
            }
        } else if (init) {
            homeSwp.destroy();
            init = false;
        }
    }
    homeSwpHandle();
    window.addEventListener("resize", homeSwpHandle);

    $('.calculation').each((idx, el) => {
        $(el).find('.minus-btn').on('click', () => {
            const number = parseInt($(el).find('p').text());

            if (number > 1) {
                $(el).find('p').text(number - 1)
            }
        })
        $(el).find('.plus-btn').on('click', () => {
            const number = parseInt($(el).find('p').text());
            $(el).find('p').text(number + 1)
        })
    })

    $('.tour .show-btn').on('click', () => {
        $('.tour .tour-text').toggleClass('active');
        $('.tour .show-btn').toggleClass('active')
    })

    $('.itinerary .show-btn').on('click', () => {
        $('.itinerary .text').toggleClass('active');
        $('.itinerary .show-btn').toggleClass('active')
    })

    $('.author .show-btn').on('click', () => {
        $('.author .text').toggleClass('active');
        $('.author .show-btn').toggleClass('active')
    })

    $('.accomodation .swiper').each((idx, el) => {
        const swp = new Swiper(el, {
            slidesPerView: 3,
            spaceBetween: 20,
        })
    })

    const touristsSwp = new Swiper('.photos-tourists__swp .swiper', {
        slidesPerView: 6,
        spaceBetween: 15,
        loop: true,
        navigation: {
            nextEl: '.photos-tourists .swp-btn__next',
            prevEl: '.photos-tourists .swp-btn__prev',
        }
    })

    $('.review-card').each((idx, el) => {
        $(el).find('.show-btn').on('click', () => {
            $(el).find('.show-btn').addClass('hidden');
            $(el).find('.review-card__body').addClass('active');
        })
    })

    const excursionSwp = new Swiper('.excursion .swiper', {
        slidesPerView: 3,
        spaceBetween: 14,
        navigation: {
            nextEl: '.excursion .swp-btn__next',
            prevEl: '.excursion .swp-btn__prev',
        }
    })
});