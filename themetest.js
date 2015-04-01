$(function() {
	var $red = $('#red');
	var $green = $('#green');
	var $blue = $('#blue')
	
	$red.on('click', function() {
			$('.wrapper').removeClass("backgroundred backgroundgreen backgroundblue").addClass("backgroundred");
	})
	
	$green.on('click', function() {
			$('.wrapper').removeClass("backgroundred backgroundgreen backgroundblue").addClass("backgroundgreen");
	})
	
	$blue.on('click', function() {
			$('.wrapper').removeClass("backgroundred backgroundgreen backgroundblue").addClass("backgroundblue");
	})

	
});