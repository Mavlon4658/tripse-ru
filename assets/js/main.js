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

    const collectionSwp = new Swiper('.collection .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        breakpoints: {
            1150: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 16,
            }
        },
        pagination: {
            el: '.collection .swip-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.collection .swip-btn__next',
            prevEl: '.collection .swip-btn__prev',
        }
    })
    
    const newTour = new Swiper('.new-tour .new-tour__swp', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        },
        pagination: {
            el: '.new-tour__foot .swip-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.new-tour__foot .swip-btn__next',
            prevEl: '.new-tour__foot .swip-btn__prev',
        }
    })
    
    $('.new-tour__card-head .swiper').each((idx, el) => {
        const newTourHeadSwp = new Swiper(el, {
            nested: true,
            // touchStartPreventDefault: false,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: $(el).find('.swip-btn__next')[0],
                prevEl: $(el).find('.swip-btn__prev')[0],
            }
        })
    })

    const reivewsSwp = new Swiper('.reviews .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        },
        navigation: {
            nextEl: '.reviews .btn-next',
            prevEl: '.reviews .btn-prev',
        }
    })

    const popularSwp = new Swiper('.popular-swp .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        navigation: {
            nextEl: '.popular-head .btn-next',
            prevEl: '.popular-head .btn-prev',
        }
    })

    if (document.querySelector('.popular-swp .swiper')) {
        popularSwp.on('slideChange', function (e) {
            if (popularSwp.activeIndex != 0) {
                $('.popular-swp .block-left').removeClass('d-none');
            } else {
                $('.popular-swp .block-left').addClass('d-none');
            }
            if (popularSwp.activeIndex == 5) {
                $('.popular-swp .block-right').addClass('d-none');
            } else {
                $('.popular-swp .block-right').removeClass('d-none');
            }
        });
    }

    const catalogList = new Swiper('.catalog-list__swp .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        breakpoints: {
            1250: {
                slidesPerView: 9,
            },
            1120: {
                slidesPerView: 8,
            },
            991: {
                slidesPerView: 7,
            },
            880: {
                slidesPerView: 6,
            },
            640: {
                slidesPerView: 5,
            },
            520: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: '.catalog-list .btn-next',
            prevEl: '.catalog-list .btn-prev',
        }
    })

});
flatpickr("#myDatePicker");

const rangesEl = document.querySelectorAll(".form_range");

if (rangesEl.length) {
    rangesEl.forEach(range => {
        let rangeS = range.querySelectorAll("input[type=range]"),
            numberS = range.querySelectorAll("input.val"),
            line = range.querySelector('.line'),
            min = parseFloat(rangeS[0].min),
            max = parseFloat(rangeS[0].max);

        const handleRange = () => {
            let slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) [slide1, slide2] = [slide2, slide1];

            numberS[0].value = slide1;
            numberS[1].value = slide2;

            line.style.left = 100 * slide1 / max + '%';
            line.style.width = 100 * (slide2 - slide1) / max + '%';
        };

        const handleNumber = () => {
            let num1 = parseFloat(numberS[0].value),
                num2 = parseFloat(numberS[1].value);

            if (num1 > num2) [num1, num2] = [num2, num1];

            rangeS[0].value = num1;
            rangeS[1].value = num2;

            handleRange();
        };

        handleRange();

        rangeS.forEach(el => {
            el.oninput = handleRange;
        });

        numberS.forEach(el => {
            el.oninput = handleNumber;
        });
    });
}