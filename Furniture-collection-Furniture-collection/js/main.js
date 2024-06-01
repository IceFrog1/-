$(function () {
	$('.header__btn').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu--close');
		$('.rightside').removeClass('rightside--visible');
	});
	$('.rightside-menu__close').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu--close');
		$('.rightside').addClass('rightside--visible');
	});

	$('.header__btn-menu').on('click', function () {
		$('.menu').toggleClass('menu--visible');
		$(this).toggleClass('active');
	});

	if ($(window).width() <= 655) {
		$('.works__item--measurements').appendTo($('.works__items-block'));
	}
})
const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 200,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 5000,
	},
});
var mixer = mixitup('.gallery__inner', {
	load: {
		filter: '.category-livingroom'
	}
});
