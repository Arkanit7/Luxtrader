window.onload = function () {
	const toggler = document.getElementsByClassName("toggler")[0];
	const collapse = document.getElementsByClassName("navbar__collapse")[0];
	const body = document.getElementsByTagName("body")[0];

	toggler.onclick = function () {
		toggler.classList.toggle("toggler_active");
		body.classList.toggle("body_lock");
		collapse.classList.toggle("collapse_active");
	}

	const navbarRight = document.getElementsByClassName("navbar__right")[0];

	function mover() {
		let w = window.innerWidth;
		let lang = document.getElementsByClassName("navbar__lang")[0];

		if (w < 768) { 
			collapse.prepend(lang);
		}
		else {
			navbarRight.prepend(lang);
		}
	}

	mover();
	window.onresize = function () {
		mover();
	}

	var swiper = new Swiper('.main-slider__box', {
		speed: 700,
		autoHeight: true,
		loop: true,
		navigation: {
			nextEl: '.main-slider__right-arrow',
			prevEl: '.main-slider__left-arrow',
		},
		// autoplay: {
		// 	delay: 7000,
		// },
	});

	let lotsSwiper = new Swiper(".lots__slider", {
		speed: 700,
		loop: true,
		slidesPerView: 3,
		navigation: {
			nextEl: '.lots__arrow_right',
			prevEl: '.lots__arrow_left',
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			576: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 3
			}
		}
	});

	var swiper = new Swiper('.quotes__slider', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		speed: 1200,
		autoHeight: true,
		loop: true,
		navigation: {
			nextEl: '.quotes__button',
		},
		// autoplay: {
		// 	delay: 7000,
		// },
	});
	
};