$(document).ready(function() {
	// clicking nav
	$('.nav a').click(function(event) {
		gotoslide = $(this).data('slide');
		goto(gotoslide);
		return false;
	});
	function goto(n){
		slide = $('#slide'+n);
		  $('html, body').animate({
	        scrollTop: slide.offset().top
	    }, 500);
		$('.nav a').removeClass('is-active');
		$('.nav a:nth-child('+gotoslide+')').addClass('is-active');
	}

});