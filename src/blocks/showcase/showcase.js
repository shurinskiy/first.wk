import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

(() => {

	const slider = new Swiper(".showcase__slider", {
		modules: [Navigation, Pagination, Autoplay],
		loop: true,
		autoplay: {
			delay: 5000,
			pauseOnMouseEnter: true
		},
		navigation: {
			nextEl: '.showcase__next',
			prevEl: '.showcase__prev',
		},
		pagination: {
			el: '.showcase__pagination',
			bulletClass: 'showcase__dot',
			bulletActiveClass: 'active',
			clickable: true,
		},
		breakpoints: {
			0: { 
				speed: 800,
				spaceBetween: 20,
				slidesPerView: 1.3,
				centeredSlides : true, 
			},
			780: { 
				speed: 1500,
				centeredSlides : false, 
				slidesPerView: 1.3,
				spaceBetween: 65,
			},
		}
	});

})();