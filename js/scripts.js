
(function($) {
	"use strict";

	/* -------------------
	Revolution Sliders
	---------------------*/
	$('.tp-banner').show().revolution({
		delay: 16000,
		startwidth: 1170,
		startheight: 700,
		hideThumbs: 200,
		dottedOverlay: "none",
		hideTimerBar: "on",
		thumbWidth: 100,
		thumbHeight: 50,
		thumbAmount: 5,
		navigationType: "none",
		navigationArrows: "solo",
		navigationStyle: "preview4",
		touchenabled: "on",
		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,
		keyboardNavigation: "off",
		navigationHAlign: "center",
		navigationVAlign: "bottom",
		navigationVOffset: 20,
		soloArrowLeftHalign: "left",
		soloArrowLeftValign: "center",
		soloArrowLeftHOffset: 20,
		soloArrowRightHalign: "right",
		soloArrowRightValign: "center",
		soloArrowRightHOffset: 20,
		fullWidth: "off",
		fullScreen: "on",
		spinner: "spinner1",
		stopLoop: "off",
		stopAfterLoops: -1,
		stopAtSlide: -1,
		shuffle: "off",
		autoHeight: "off",
		forceFullWidth: "off",
		hideThumbsOnMobile: "off",
		hideNavDelayOnMobile: 1500,
		hideBulletsOnMobile: "off",
		hideArrowsOnMobile: "off"
	});
	/* -------------------
	Owl Slider callings
	---------------------*/
	$("#quote-slider").owlCarousel({
		autoPlay : false,
		singleItem : true,
		pagination: false,
		navigation: false
	});
	$("#owl-testimonials").owlCarousel({
		autoPlay : true,
		singleItem : true,
		pagination: true,
		navigation: false
	});
	// AJAX project slider
	$(document).ajaxComplete(function(){
		$("#project-slider").owlCarousel({
			autoPlay : true,
			singleItem : true,
			pagination: true,
			navigation: false,
		});
	});
	$("#owl-slider").owlCarousel({
		autoPlay : true,
		singleItem : true,
		pagination: true,
		navigation: false,
		navigationText : ['<i class="icon ion-chevron-left"></i>','<i class="icon ion-chevron-right"></i>']
	});
	/* -------------------
	Parallax Sections
	---------------------*/
	if(!Modernizr.touch){
		$('#home-parallax-fullscreen').parallax("50%", 0.5);
		$('#home-parallax-fullwidth').parallax("50%", 0.5);
		$('.parallax-section-1').parallax("50%", 0.5);
		$('.parallax-section-2').parallax("50%", 0.5);
		$('.parallax-section-3').parallax("50%", 0.5);
		$('.parallax-section-4').parallax("50%", 0.5);
		$('.parallax-section-5').parallax("50%", 0.5);
		$('.parallax-section-6').parallax("50%", 0.5);
		$('.parallax-section-7').parallax("50%", 0.5);
		$('.parallax-section-8').parallax("50%", 0.5);
		$('#home-landing').parallax("50%", 0.5);

		/* -------------------
		Animation.css calling
		---------------------*/
		new WOW().init();
	}
	/* -------------------
	/* -------------------
	/* -------------------
	Animated progress bars
	---------------------*/
	$('.progress-bars').waypoint(function() {
	   $('.progress').each(function(){
			$(this).find('.progress-bar').animate({
				width:$(this).attr('data-percent')
			},800);
		});
		}, { offset: '100%',
			 triggerOnce: true
	});
	/* -------------------
	Fun facts counter
	---------------------*/
	$('.counter').counterUp({
		delay: 8,
		time: 1400
	});
	/* -------------------
	Video section lightbox
	---------------------*/
	/* -------------------
	Scroll functions
	---------------------*/
	$(window).scroll(function(){
		parallax();
		/* -------------------
		Header Animation
		---------------------*/
		if ($(this).scrollTop() > 5){
			$('nav').addClass("navbar-small")
		}
		else{
			$('nav').removeClass("navbar-small")
		}
		/* -------------------
		Back to top button popup
		---------------------*/
		if($(window).scrollTop() > 400){
		$("#back-to-top").stop().animate({ bottom:'16px' },300,'easeInOutCubic')
		}
		else{
			$("#back-to-top").stop().animate({ bottom:'-50px' },300,'easeInOutCubic')
		}
	});
	/* -------------------
	Preloader
	---------------------*/
	$(window).ready(function(){
		setTimeout(function() {
			$('.loader').fadeOut('slow');
			$('#preloader').delay(350).fadeOut('slow');
		}, 1000 );
	});
	/* -------------------
	Page Hero Parallax
	---------------------*/
	function parallax(){
		var scrolled = $(window).scrollTop();
		$('.hero').css('top',-(scrolled*0.0515)+'rem');
		$('.home-container').css('bottom',-(scrolled*0.0515)+'rem');
		$('.op-1,.op-2,.op-3').css('opacity',1-(scrolled*.00110));
	};
	/* -------------------
	Smooth scrolling to anchor
	---------------------*/
	$('.to-section a,.btn-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 54
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});
	/* -------------------
	Back to top button function
	---------------------*/
	$('#back-to-top,.to-top').click(function() {
		$('html, body').animate({ scrollTop: 0}, 1000, 'easeInOutExpo');
		return false;
	});
	/* -------------------
	Active menu item on page scroll
	---------------------*/
	var sections = $('section')
	, nav = $('nav')
	, nav_height = nav.outerHeight();
	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	  sections.each(function() {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();
		if (cur_pos >= top && cur_pos <= bottom) {
		  nav.find('a').removeClass('current');
		  sections.removeClass('current');
		  $(this).addClass('current');
		  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('current');
		}
	  });
	});
	/* -------------------
	Auto-close responsive navbar
	---------------------*/
	function close_toggle() {
		if ($(window).width() <= 992) {
		  $('.navbar-collapse a').on('click', function(){
			  $('.navbar-collapse').collapse('hide')
		  });
		}
		else {
		 $('.navbar .navbar-default a').off('click')
		}
	}
	close_toggle();
	$(window).resize(close_toggle);
	$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
	/* -------------------
	Contact form
	---------------------*/
	$('#contactform').submit(function(){
		var action = $(this).attr('action');
		$("#message").slideUp(250,function() {
			$('#message').hide();
			$('#submit')
				.after('<img src="img/assets/contact-form-loader.gif" class="loader" />')
				.attr('disabled','disabled');
			$.post(action, {
				name: $('#name').val(),
				email: $('#email').val(),
				subject: $('#subject').val(),
				comments: $('#comments').val()
			},
				function(data){
					document.getElementById('message').innerHTML = data;
					$('#message').slideDown(250);
					$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled');
					if(data.match('success') != null) $('#contactform').slideUp(850, 'easeInOutExpo');
				}
			);
		});
		return false;
	});
	/* -------------------
	Subscribe form
	---------------------*/
	$( document ).on( 'ready', function() {
		$( '#subscribe-form' ).on( 'submit', function( e ) {
			e.preventDefault();
			var $el = $( this ),
				$alert = $el.find( '.form-validation' ),
				$submit = $el.find( 'button' ),
				action = $el.attr( 'action' );
			$submit.button( 'loading' );
			$alert.removeClass( 'alert-danger alert-success' );
			$alert.html( '' );
			$.ajax({
				type     : 'POST',
				url      : action,
				data     : $el.serialize() + '&ajax=1',
				dataType : 'JSON',
				success  : function( response ) {
					if ( response.status == 'error' ) {
						$alert.html( response.message );
						$alert.addClass( 'alert-danger' ).fadeIn( 500 );
					}
					else {
						$el.trigger( 'reset' );
						$alert.html( response.message );
						$alert.addClass( 'alert-success' ).fadeIn( 500 );
					}
					$submit.button( 'reset' );
				}
			})
		});
	});
	/* -------------------
	Bootstrap Tooltip, Alert, Tabs
	---------------------*/
	$(function () { $("[data-toggle='tooltip']").tooltip();
		$(".alert").alert()
	});
	$(function () {
		var active = true;
		$('#collapse-init').click(function () {
			if (active) {
				active = false;
				$('.panel-collapse').collapse('show');
				$('.panel-title').attr('data-toggle', '');
				$(this).text('Close All');
			} else {
				active = true;
				$('.panel-collapse').collapse('hide');
				$('.panel-title').attr('data-toggle', 'collapse');
				$(this).text('Open All');
			}
		});
		$('#accordion').on('show.bs.collapse', function () {
			if (active) $('#accordion .in').collapse('hide');
		});
	});
	$('#myTab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

})(jQuery);

/*!
 * InstaLife Hero YT v2.0
 */
function onYouTubeIframeAPIReady() {
    player = new YT.Player("InstaLife-youtube", {
        width: $(window).width() + 0,
        height: $(window).height() + 0,
        videoId: vosVideoId,
        playerVars: {controls: 0, showinfo: 0},
        events: {onReady: onPlayerReady, onStateChange: onPlayerStateChange},
    })
}

function playToggle() {
    player.playVideo(), document.getElementById("play-toggle").innerHTML = '<i class="ion-pause"></i>'
}

function pauseToggle() {
    player.pauseVideo(), document.getElementById("play-toggle").innerHTML = '<i class="ion-play"></i>'
}

function vosResize() {
    var a = $(window).width() + 0, b = $(window).height() + 0;
    a / b > 16 / 9 ? (player.setSize(a, a / 16 * 9), $("#InstaLife-youtube").css({left: "50%"})) : (player.setSize(b / 9 * 16, b), $("#InstaLife-youtube").css({left: -($("#InstaLife-youtube").outerWidth() - a) / 2}))
}

function onPlayerReady() {
    var a = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent);
    a ? $("#play-toggle").on("click", function () {
        playToggle()
    }) : playToggle(), player.mute(), vosResize(), $(window).on("resize", function () {
        vosResize()
    })
}

function onPlayerStateChange(a) {
    $("#mute-toggle").on("click", function () {
        $(this);
        player.isMuted() ? (player.unMute(), document.getElementById("mute-toggle").innerHTML = '<i class="ion-android-volume-up"></i>') : (player.mute(), document.getElementById("mute-toggle").innerHTML = '<i class="ion-android-volume-mute"></i>')
    }), a.data == YT.PlayerState.ENDED && player.playVideo(), $("#play-toggle").on("click", function () {
        a.data == YT.PlayerState.PLAYING ? pauseToggle() : a.data == YT.PlayerState.PAUSED && playToggle()
    })
}

if ($("#InstaLife-youtube").length) {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var vosVideoId = $("#InstaLife-youtube").attr("data-youtube-video-id"), player
}

//Google Map
var map;
function initMap() {
    var myPosition = {lat: 45.052293701272134, lng:39.017213601619005};
    map = new google.maps.Map(document.getElementById('map'), {
        center: myPosition,
        zoom: 18
    });
    var image = 'img/favicon.ico';
    var beachMarker = new google.maps.Marker({
        position: myPosition,
        map: map,
        icon: image
    });
}
