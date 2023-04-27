import Swiper, { Navigation, Pagination } from 'swiper';

(() => {

	const slider = new Swiper(".showcase__slider", {
		modules: [Navigation, Pagination],
		loop: true,
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
				spaceBetween: 20,
				slidesPerView: 1.3,
				centeredSlides : true, 
			},
			780: { 
				centeredSlides : false, 
				slidesPerView: 1.3,
				spaceBetween: 65,
			},
		}
	});

})();