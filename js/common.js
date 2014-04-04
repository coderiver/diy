/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */


$(document).ready(function() {
	b = $('body');
	$("html, body").animate({ scrollTop: 0 }, 100);

	// clicking nav
	$('.nav a, .gnav a').click(function(event) {
		gotoslide = $(this).data('slide');
		goto(gotoslide,500);
		return false;
	});
	var n = 0;
	function goto(n, time){
			
		
			if(!(b.hasClass('is-running'))){
				console.log('go');
				b.addClass('is-running');
				$('.nav a').removeClass('is-active');
				$('.nav a:nth-child('+n+')').addClass('is-active');
				console.log(n);
				if(!n){n = 0;}
				slide = $('#slide'+n);
				  $('html, body').animate({
			        scrollTop: slide.offset().top
			    }, time, function() {
				    //b.removeClass('is-running');
				  });
				//hilite nav
				setTimeout(function(){b.removeClass('is-running');},1000);
				if(n==2){$('.manifestlink').addClass('is-active')}
				else{$('.manifestlink').removeClass('is-active')}
				if(n==9){$('.programlink').addClass('is-active')}
				else{$('.programlink').removeClass('is-active')}
			}
		else{
			console.log('cant run');
		}
		// }
		// clearTimeout(scrollId);
		// 	scrollId = setTimeout(function(){					
		// 		isScrolling = false;
		// 	}, 100);
	}
	function next(){
		cur = $('.nav .is-active').data('slide');
		if(cur<9){
			console.log(cur);
			goto(cur+1,500)
		}
	}
	function prev(){
		cur = $('.nav .is-active').data('slide');
		if(cur>0){
			console.log(cur);
			goto(cur-1,500)
		}
	}
	prevv = _.debounce(prev, 60, true)
	nextt = _.debounce(next, 60, true)
	// on rezize stick to slide
	$(window).resize(function(event) {
		gotoslide = $('nav .is-active').data('slide');
		goto(gotoslide,100);
	});


	var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
	

	$('body').bind(mousewheelevt, function(e){
		
		
	    

		    var evt = window.event || e //equalize event object     
		    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
		    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

		    if(delta > 0) {
		        prev();
		    }
		    else{
		        next();
		    }   
		    return false;
		

	});

	$(window).scroll(function(event) {
		//console.log($(window).scrollTop()+'==='+$(window).height());
		if($(window).scrollTop()>($(window).height()-100) && 
			$(window).scrollTop()<$('#slide9').offset().top-100){
			$('body').addClass('is-bottom')
		}
		else{
			$('body').removeClass('is-bottom')
		}
	});

	$('.logo').click(function(event) {
		goto(1,500)
	});
});