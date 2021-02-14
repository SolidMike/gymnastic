/**
 * 1.svg for everebody
 * 2.Fixed header
 * 3.Show and hide password
 * 4.Fancybox modals & gallery
 * 5.Fallback for webp
 * 6.Custom sandwich with overlay
 * 7.Custom responsive menu
 * 8.Highlight active menu item
 * 9.Hide & show menu elements
 * 10.Parallax
 * 11.Toggle text
 * 12.Btn-up
 * 13.Swiper
 */

// 1.Svg for everebody
$(document).ready(function () {
    svg4everybody({});
});

// 2.Fixed header
$(function () {
    const windowHeight = window.innerHeight;
    const headerHeight = document.querySelector('.header').offsetHeight;
    const contentHeight = document.querySelector('.wrapper').offsetHeight;

    if ((contentHeight - headerHeight) > windowHeight) {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('.header').addClass('header--fixed');
            } else {
                $('.header').removeClass('header--fixed');
            }
        });
    }
})

// 3.Show and hide password
/*function togglePass(event) {
    const target = event.target
    const passInput = target.nextElementSibling
    if (passInput.type === "password") {
        passInput.type = "text";
        target.classList.remove('is-active')
    } else {
        passInput.type = "password";
        target.classList.add('is-active')
    }
}*/

// 4.Fancybox modals & gallery
$(document).ready(function() {
    //$(".modal-btn").fancybox();

    $('[data-fancybox="gallery"]').fancybox({})
})

// 5.Fallback for webp
function fallBackImages() {
    $('img').each(function() {
        $(this).on('error', function () {
            const webpImg = $(this).siblings('.js-webp-img')
            const fallbackImg = $(this).attr('src')
            webpImg.attr('srcset', fallbackImg)
        })
    })
}
fallBackImages();

// 6.Custom sandwich with overlay
const sandwichToggle = function () {
    // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
    let sandwichElements = document.querySelectorAll('.js-sandwich-toggle');
    // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс
    sandwichElements.forEach((item) => {
        item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
        let targetId = this.getAttribute('data-target-id'),
            targetClassToggle = this.getAttribute('data-target-class-toggle');
        this.classList.toggle('is-active');
        if (targetId && targetClassToggle) {
            document.getElementsByClassName(targetId)[0].classList.toggle(targetClassToggle);
        }
        $(document).mouseup(function (e) {
            var container = $(".nav-mobile");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                document.querySelector('.js-sandwich-toggle').classList.remove('is-active');
                document.getElementsByClassName(targetId)[0].classList.remove(targetClassToggle);
            }
        });
    }
};
sandwichToggle();

// 7.Custom responsive menu
$(window).on("load resize", function () {
    if (this.matchMedia("(max-width: 991px)").matches) {
        const menu = $('.menu')
        const dropdownMenuLink = menu.find('.js-menu-dropdown-toggle')

        dropdownMenuLink.on('click', function(event) {
            event.preventDefault()
            if ($(this).parent().hasClass('is-active') && $(this).parent().children('.dropdown__menu').length > 0) {
                if ($(this).length && $(this).attr('href')) {
                    location.href = $(this).attr('href');
                }
            } else if ($(this).parent().children('.dropdown__menu').length === 0) {
                if ($(this).length && $(this).attr('href')) {
                    location.href = $(this).attr('href');
                }
            }
            $(this).closest('li').toggleClass('is-active')
        })
    }
})

// 8.Highlight active menu item
$(function () {
    $('nav ul li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).parents('li').addClass('is-active');
        }
    });
});

// 9.Hide & show menu elements
const navMobileContainer = document.querySelector('.nav-mobile__navigation')
const navHeaderContainer = document.querySelector('.header__navigation')
const navMobileContacts = document.querySelector('.contacts--view--nav-mobile')
const headerNav = document.querySelector('.header__navigation .menu')
const headerPhone = document.querySelector('.header__phone')
const headerContacts = document.querySelector('.header__contacts .contacts')
const contactsInfo = document.querySelector('.contacts__info')
const headerSocials = document.querySelector('.header__contacts .socials')
const sandwich = document.querySelector('.sandwich')
$(window).on("load resize", function () {
    if ($(window).width() <= 970) {
        navMobileContainer.appendChild(headerNav)
    } else {
        navHeaderContainer.appendChild(headerNav)
    }
    if ($(window).width() <= 850) {
        navMobileContacts.appendChild(headerSocials)
    } else {
        headerContacts.insertBefore(headerSocials, headerPhone)
    }
    if ($(window).width() <= 800) {
        contactsInfo.appendChild(headerPhone)
    } else {
        headerContacts.insertBefore(headerPhone, sandwich)
    }
})

//10.Parallax
var parallaxInstance, scene = document.querySelector('.parallax.parallax--view--hero.parallax--front');
null !== scene && (parallaxInstance = new Parallax(scene, {limitY: 0}));

var parallaxInstance2, scene2 = document.querySelector('.parallax.parallax--view--hero.parallax--back');
null !== scene2 && (parallaxInstance2 = new Parallax(scene2));

var parallaxInstance3, scene3 = document.querySelector('.parallax.parallax--view--homepage-news');
null !== scene3 && (parallaxInstance3 = new Parallax(scene3));

var parallaxInstance4, scene4 = document.querySelector('.parallax.parallax--view--stars');
null !== scene4 && (parallaxInstance4 = new Parallax(scene4));

var parallaxInstance5, scene5 = document.querySelector('.parallax.parallax--view--ads');
null !== scene5 && (parallaxInstance5 = new Parallax(scene5));

// 11.Toggle text
const toggleTextBtns = document.querySelectorAll('.js-text-spoiler-toggle')
if (toggleTextBtns) {
    toggleTextBtns.forEach(item => {
        item.addEventListener('click', toggleText);
    })



    function toggleText() {
        const btnLabel = this.getElementsByClassName('btn__label')
        const hiddenText = this.previousElementSibling

            hiddenText.classList.toggle('is-open')
            if (hiddenText.classList.contains('is-open')) {
                btnLabel[0].textContent = 'Скрыть'
            } else {
                btnLabel[0].textContent = 'Читать дальше'
            }
    }
}

// 12.Btn-up
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.js-top-btn').fadeIn(500);
        } else {
            $('.js-top-btn').fadeOut(500);
        }
    });
    if ($(this).scrollTop() != 0) {
        $('.js-top-btn').fadeIn();
    } else {
        $('.js-top-btn').fadeOut();
    }
    $('.js-top-btn').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
});

//13.Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 30,

    breakpoints: {
        480: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 5,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});