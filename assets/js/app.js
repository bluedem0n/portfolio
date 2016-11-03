(function ($) {

	$(".icon").click(function () {
		$(".mobilenav").fadeToggle(500);
		$(".top-menu").toggleClass("top-animate");
		$(".mid-menu").toggleClass("mid-animate");
		$(".bottom-menu").toggleClass("bottom-animate");
	});

	/* ---------------------------------------------- /*
	 * Texto Maquina de escribir
	/* ---------------------------------------------- */

	$("#typed").typed({
		strings: ["Front End Developer", "Front End Developer", "Back End Developer", "Web Developer"],
		typeSpeed: 30,
		backDelay: 500,
		loop: false,
		// defaults to false for infinite loop
		loopCount: false,
		callback: function () {
			foo();
		}
	});

	function foo() {
		console.log("Callback");
	}

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function () {
		$('#status').delay(3000).fadeOut();
		$('#preloader').delay(3000).fadeOut('slow');
	});
	/* ---------------------------------------------- /*
	 * About me
	/* ---------------------------------------------- */

	var sourceSwap = function () {
		var $this = $(this);
		var newSource = $this.data('alt-src');
		$this.data('alt-src', $this.attr('src'));
		$this.attr('src', newSource);
	}

	$(function () {
		$('img.cambiandoImagen').hover(sourceSwap, sourceSwap);
	});
	/* ---------------------------------------------- /*
	 * Flip Cards
	/* ---------------------------------------------- */
	$(".flip").hover(function () {
		$(this).find(".card").toggleClass("flipped");
		return false;
	});

	$(document).ready(function () {

		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function (e) {

			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */
		$('#myCarousel').on('slide.bs.carousel', function () {
			if ($('.carousel-inner .item:last').hasClass('active')) {
				$('.carousel-inner .item:first').addClass('animated zoomInUp');
			} else {
				$('.item.active').next().addClass('animated zoomInUp');
			}
			$('.item.active').addClass('animated zoomInUp');
		});

		$('#carousel-example-generic').on('slid.bs.carousel', function () {
			$('.item').removeClass('animated zoomInUp zoomInUp')
		});

		$('.left').click(function () {
			if ($('.carousel-inner .item:first').hasClass('active')) {
				$('.carousel-inner .item:last').addClass('animated zoomInUp');
			} else {
				$('.item.active').prev().addClass('animated zoomInUp');
			}
		});
		$('.carousel-indicators > li').click(function () {
			$('.item').addClass('animated zoomInUp');
		});

		$('#myCarousel').carousel({
			interval: 2000
		});

		/* ---------------------------------------------- /*
		 * Skills
        /* ---------------------------------------------- */
		//var color = $('#home').css('backgroundColor');

		$('.skills').waypoint(function () {
			$('.chart').each(function () {
				$(this).easyPieChart({
					size: 140,
					animate: 2000,
					lineCap: 'butt',
					scaleColor: false,
					barColor: '#ED4135',
					trackColor: 'transparent',
					lineWidth: 10
				});
			});
		}, {
			offset: '80%'
		});

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();


		/* ---------------------------------------------- /*
		 * Validación de Email
		/* ---------------------------------------------- */



		/* ---------------------------------------------- /*
		/* ---------------------------------------------- /*
		 * Formulario Contacto
		/* ---------------------------------------------- */
	});

})(jQuery);