(function ($) {

	$(".icon").click(function () {
		$(".mobilenav").fadeToggle(500);
		$(".top-menu").toggleClass("top-animate");
		$(".mid-menu").toggleClass("mid-animate");
		$(".bottom-menu").toggleClass("bottom-animate");
	});
	$(function () {
		/*
		- how to call the plugin:
		$( selector ).cbpQTRotator( [options] );
		- options:
		{
			// default transition speed (ms)
			speed : 700,
			// default transition easing
			easing : 'ease',
			// rotator interval (ms)
			interval : 8000
		}
		- destroy:
		$( selector ).cbpQTRotator( 'destroy' );
		*/
		$('#cbp-qtrotator').cbpQTRotator();

	});
	/* ---------------------------------------------- /*
		 * Home BG
	/* ---------------------------------------------- */

	$(".screen-height").height($(window).height());

	$(window).resize(function () {
		$(".screen-height").height($(window).height());
	});

	/* ---------------------------------------------- /*
	 * Texto Maquina de escribir
	/* ---------------------------------------------- */

	consoleText(["Front End Developer"], 'text', ["#FFF"]);

	function consoleText(words, id, colors) {
		if (colors === undefined) colors = ['#fff'];
		var visible = true;
		var con = document.getElementById('console');
		var letterCount = 1;
		var x = 1;
		var waiting = false;
		var target = document.getElementById(id)
		target.setAttribute('style', 'color:' + colors[0])
		window.setInterval(function () {

			if (letterCount === 0 && waiting === false) {
				waiting = true;
				target.innerHTML = words[0].substring(0, letterCount)
				window.setTimeout(function () {
					var usedColor = colors.shift();
					colors.push(usedColor);
					var usedWord = words.shift();
					words.push(usedWord);
					x = 1;
					target.setAttribute('style', 'color:' + colors[0])
					letterCount += x;
					waiting = false;
				}, 1000)
			} else if (letterCount === words[0].length + 1 && waiting === false) {
				waiting = true;
				window.setTimeout(function () {
					x = -1;
					letterCount += x;
					waiting = false;
				}, 1000)
			} else if (waiting === false) {
				target.innerHTML = words[0].substring(0, letterCount)
				letterCount += x;
			}
		}, 120)
		window.setInterval(function () {
			if (visible === true) {
				con.className = 'console-underscore decolorar'
				visible = false;

			} else {
				con.className = 'console-underscore'

				visible = true;
			}
		}, 400)
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
		
		/* ---------------------------------------------- /*
		 * WOW cuando esta en Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-form').submit(function (e) {

			e.preventDefault();

			var c_name = $('#c_name').val();
			var c_email = $('#c_email').val();
			var c_message = $('#c_message ').val();
			var response = $('#contact-form .ajax-response');

			var formData = {
				'name': c_name,
				'email': c_email,
				'message': c_message
			};

			if ((c_name == '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email))) {
				response.fadeIn(500);
				response.html('<i class="fa fa-warning"></i> Please fix the errors and try again.');
			} else {
				$.ajax({
					type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
					url: 'assets/php/contact.php', // the url where we want to POST
					data: formData, // our data object
					dataType: 'json', // what type of data do we expect back from the server
					encode: true,
					success: function (res) {
						var ret = $.parseJSON(JSON.stringify(res));
						response.html(ret.message).fadeIn(500);
					}
				});
			}
			return false;
		});
	});

})(jQuery);