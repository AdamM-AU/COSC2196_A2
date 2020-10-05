/* Random JS Code */

/** Scroll Spy - Quick and Dirty @Adam 
	Update URL in address bar with #Ancor 
	Triggered by Boostraps built in scrollspy
	events
**/
$(window).on('activate.bs.scrollspy', function(e) {
    history.replaceState({}, "", $('.nav-item .active').attr("href"));
});

/** Smooth Scrolling **/
/** w3schools example **/
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

/* Just for fun */

function redbuttonFunction(link) {
	if (link == 0) {
		// first button push - turn on
		alert("Didn't anyone tell you...\r\nDON'T PRESS THE RED BUTTON!\r\nWait 15 seconds to push button to disable.");
		document.body.style.backgroundImage = "url('images/bling.gif')";
		document.getElementById("red-button").setAttribute("onclick","return redbuttonFunction(3);");
		
		// Lock button for 10 seconds
		setTimeout(function (){
			document.getElementById("red-button").setAttribute("onclick","return redbuttonFunction(1);");
		}, 15000);
	
	} else if (link == 3) {
		alert("You Still Need To Wait!");
		
	} else {
		// Second button push - turn off
		document.getElementById("red-button").setAttribute("onclick","return redbuttonFunction(0);");
		document.body.style.backgroundImage = "";
	}

	return false;
}