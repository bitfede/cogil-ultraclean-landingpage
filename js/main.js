$( document ).ready(function() {


	//options for carousel
	var carousel_options = {
		indicators: false,
		full_width: true
	}

	//options for modal
	var modal_options = {
    dismissible: false, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
    starting_top: '4%', // Starting top style attribute
    ending_top: '10%', // Ending top style attribute
    complete: function() { 
    	modal_options.starting_top = '4%'
    	modal_options.ending_top = '10%'
    	$('.modal').modal(modal_options);
    }
  }

  //initialization of materialize's 
	$('.carousel.carousel-slider').carousel(carousel_options);
	$('.indicators').remove();
	$('.collapsible').collapsible();
	$('.modal').modal(modal_options);
	$('.materialboxed').materialbox();

	//
	var learnMore = function() {
		$('html, body').animate({
	      scrollTop: $(".titolocomponenti").offset().top
	    }, 2000);
	}

	var modModal = function() {
		modal_options.starting_top = '222%'
		modal_options.ending_top   = '1%'
		$('.modal').modal(modal_options);
	}

	$('.prossimo').click(learnMore);
	$('.techlayout').click(modModal)
	// setInterval(next, 5000);

	//THIS DETECTS IF THERES IPHONE OR ANDROID
	// var isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
	// var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	// if (isiPhone || isAndroid)
	// {
	//   $('.videoCogil').height(150)
	// }
});