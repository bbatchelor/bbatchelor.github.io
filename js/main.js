$(document).ready(function() {
//	MAKE TOP HEADER BAR ICON TOGGLE ARROWS IN MOBILE
	$('.top-bar .close').click(function() {
		$('.top-bar').toggleClass('open');
	});
//	OPEN USER DROPDOWN ON CLICK
	$('.site-user').click(function(e) {
		$('.site-user-options').toggle();
		 e.stopPropagation();
	});
//	CLOSE USER DROPDOWN WHEN CLICKED OUTSIDE
	$(document).click(function(){
	    $(".site-user-options").hide();
	});
});