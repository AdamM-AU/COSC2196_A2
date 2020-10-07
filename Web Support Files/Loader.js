$("#pacman").fadeIn("slow");
jQuery(window).ready(function() { // Run when page is rendered
	// Added Delay here for testing purposes, Remove when Live
	setTimeout(function (){
		jQuery("#preloader").fadeOut(); //Fancy Fade Out, Just adding some more class ;)
		jQuery("#content").fadeIn("slow"); // Fade in the content div that was previously hidden from view

		// Jump to anchor point after loader patch
		// Added Check if anchor is set, then perform one of two actions
		if ($(location).attr('hash')) {
			var hash = $(location).attr('hash'); // Fetching # anchor from url
			hash = hash.replace("#", ""); // Removing # from anchor name, so we have a matching id field
			document.getElementById(hash).scrollIntoView(); // Moving the user to the anchor point
		} else {
			document.getElementById("nav-default").classList.add("active"); // Set Default Active Nav Item
			history.replaceState({}, "", $('.nav-item .active').attr("href")); // Update URL & Browser Histroy to Reflect
		}
	}, 2000);
});