$( document ).ready(function() {

	var carousel_options = {
		indicators: false,
		full_width: true
	}

	$('.collapsible').collapsible();
	$('.carousel.carousel-slider').carousel(carousel_options);
	$('.indicators').remove();


	var learnMore = function() {
		alert("scroll down")
	}

	$('.prossimo').click(learnMore);

	// setInterval(next, 5000);
});