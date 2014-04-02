$(document).ready(function() {
	// clicking nav
	$('.nav a').click(function(event) {
		gotoslide = $(this).data('slide');
		goto(gotoslide,500);
		return false;
	});
	function goto(n, time){
		slide = $('#slide'+n);
		  $('html, body').animate({
	        scrollTop: slide.offset().top
	    }, time);
		$('.nav a').removeClass('is-active');
		$('.nav a:nth-child('+gotoslide+')').addClass('is-active');
	}

	// on rezize stick to slide
	$(window).resize(function(event) {
		gotoslide = $('nav .is-active').data('slide');
		goto(gotoslide,100);
	});

});