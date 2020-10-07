/** Scroll Spy - Quick and Dirty @Adam 
	Update URL in address bar with #Ancor 
	Triggered by Boostraps built in scrollspy
	events
**/
$(window).on('activate.bs.scrollspy', function(e) {
    history.replaceState({}, "", $('.nav-item .active').attr("href"));
});