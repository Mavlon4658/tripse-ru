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
        if (window.innerWidth <= 991) {
            if (!init) {
            init = true;
            homeSwp = new Swiper(".home-swp .swiper", {
                slidesPerView: "auto",
                spaceBetween: 3,
                pagination: {
                    el: ".home-swp .swp-pagination",
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

    const tourSwp = new Swiper('.tour-swp .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 2,
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        },
        pagination: {
            el: '.tour-swp .swp-pagination',
            clickable: true,
        }
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
            slidesPerView: 'auto',
            spaceBetween: 2,
            breakpoints: {
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            },
            pagination: {
                el: el.querySelector('.swp-pagination'),
                clickable: true,
            }
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
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            nextEl: '.excursion .swp-btn__next',
            prevEl: '.excursion .swp-btn__prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 3,
                spaceBetween: 14,
            }
        }
    })

    $('.main-select').each((idx, el) => {
        $(el).find('.main-select__btn').on('click', () => {
            $(el).find('.main-select__btn').toggleClass('active');
            $(el).find('.main-select__list').toggleClass('active');
        })
        $(el).find('.main-select__list li').each((listIdx, listEl) => {
            $(listEl).on('click', () => {
                const txt = $(listEl).find('span').text();
                $(el).find('.main-select__btn span').text(txt);
                $(el).find('.main-select__btn input').text(txt);
                $(el).find('.main-select__list li').removeClass('selected');
                $(listEl).addClass('selected');
                $(el).find('.main-select__btn').removeClass('active');
                $(el).find('.main-select__list').removeClass('active');
            })
        })
    })

    window.addEventListener('click', evetn => {
        $('.main-select').each((idx, el) => {
            if(!el.contains(evetn.target)) {
                $(el).find('.main-select__btn').removeClass('active');
                $(el).find('.main-select__list').removeClass('active');
            }
        });
    })
    const accWrap = document.querySelectorAll('.acc-wrap');
    
    if (accWrap.length) {
        accWrap.forEach(el => {
            const btns = el.querySelectorAll('.toggle-btn');
            const accordions = el.querySelectorAll('.accordion .collapse');
            console.log(btns);
            btns[0].onclick = () => {
                accordions.forEach(acc => {
                    let bsCollapse = new bootstrap.Collapse(acc, {
                        toggle: false,
                    });
                    bsCollapse.show();
                })
                $(btns[0]).addClass('d-none');
                $(btns[1]).removeClass('d-none');
            }
            btns[1].onclick = () => {
                accordions.forEach(acc => {
                    let bsCollapse = new bootstrap.Collapse(acc, {
                        toggle: false,
                    });
                    bsCollapse.hide();
                })
                $(btns[0]).removeClass('d-none');
                $(btns[1]).addClass('d-none');
            }
        })
    }

});