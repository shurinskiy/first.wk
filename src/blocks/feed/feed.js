import enquire from 'enquire.js';
import Swiper from 'swiper';

(() => {

	$(".feed__slider").each(function(i) {
		let swiper;
		const $item = $(this);
		const $wrapper = $item.find('.swiper-wrapper');
		const $slides = $item.find('.swiper-slide');
		
		const enableSwiper = (el) => {
			swiper = new Swiper(el, {
				slidesPerView: 1.2,
				spaceBetween: 20,
				threshold: 10,
				loop: true,
			});
		}

		enquire.register("screen and (max-width: 580px)", {
			match : function() {
				enableSwiper($item[0]);
			},
			unmatch : function() {
				if (swiper !== undefined ) {
					swiper.destroy(true, false);
					$slides.add($wrapper).removeAttr('style');
				} 
			}
		});
	});

})();