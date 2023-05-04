import Swiper, { Pagination, Autoplay } from 'swiper';

(() => {

	const slider = new Swiper(".gallery__slider", {
		modules: [Pagination, Autoplay],
		loop: true,
		autoplay: {
			delay: 5000,
			pauseOnMouseEnter: true
		},
		pagination: {
			el: '.gallery__pagination',
			bulletClass: 'gallery__dot',
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
				slidesPerView: 1,
				spaceBetween: 30,
			},
		}
	});

})();