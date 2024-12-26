document.addEventListener('DOMContentLoaded', function () {
	// Clinic - About info images
	const clinicAboutSliders = [],
		clinicAboutImages = document.querySelectorAll('.clinic_info .about_info .images .swiper')

	clinicAboutImages.forEach((el, i) => {
		el.classList.add('clinic_about_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 2
				}
			}
		}

		clinicAboutSliders.push(new Swiper('.clinic_about_s' + i, options))
	})


	// Clinic - Doctors
	const clinicDoctorsSliders = [],
		clinicDoctors = document.querySelectorAll('.clinic_info .doctors .swiper')

	clinicDoctors.forEach((el, i) => {
		el.classList.add('clinic_doctors_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.photo').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.photo').outerHeight() * 0.5
						)
					})
				}
			}
		}

		clinicDoctorsSliders.push(new Swiper('.clinic_doctors_s' + i, options))
	})


	// Clinic - Reviews
	const clinicReviewsSliders = [],
		clinicReviews = document.querySelectorAll('.clinic_info .reviews .swiper')

	clinicReviews.forEach((el, i) => {
		el.classList.add('clinic_reviews_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => setHeight(swiper.el.querySelectorAll('.review')))
				},
				resize: swiper => {
					$(swiper.el).find('.review').height('auto')

					setTimeout(() => setHeight(swiper.el.querySelectorAll('.review')))
				}
			}
		}

		clinicReviewsSliders.push(new Swiper('.clinic_reviews_s' + i, options))
	})


	$('.clinic_info .reviews .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.review')

		$(this).toggleClass('active')

		parent.find('.text').toggleClass('show')

		$('.clinic_info .reviews .review').height('auto')
		setTimeout(() => setHeight(document.querySelectorAll('.clinic_info .reviews .review')))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Clinic - About info spoler
	$('.clinic_info .about_info .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.data')

		$(this).toggleClass('active')

		parent.find('.desc').toggleClass('show')
	})
})



const setHeight = items => {
	let maxheight = 0

	items.forEach(el => {
		if (el.offsetHeight > maxheight) maxheight = el.offsetHeight
	})

	items.forEach(el => el.style.height = maxheight + 'px')
}



// Map
function mapInit() {
	ymaps.ready(() => {
		let myMap = new ymaps.Map('map', {
			center: [60.010205, 30.263703],
			zoom: 16,
			controls: []
		})

		let myPlacemark = new ymaps.Placemark([60.010205, 30.263703], {}, {
			iconLayout : 'default#image',
			iconImageHref : 'images/ic_map_marker.png',
			iconImageSize : [96, 96],
			iconImageOffset : [-48, -96]
		})

		myMap.geoObjects.add(myPlacemark)

		myMap.behaviors.disable('scrollZoom')
	})
}