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

/* RedButton - Just for fun */
/* Adam Mutimer */
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

/** JS Complex/Bulk Data Fetcher **/
/** Adam Mutimer **/
function JSFetch (nav,req,dest) {
	if (!req || !dest) {
		
	} else {
		// Use ajax to fetch the html file and process that data
		$.ajax({url:'data/' + req + '.html', success: 
			function (data){
				if (data.length < 0) {
					data = "Error: No Data Found";
				} else {
					// Push Data into destination
					document.getElementById(dest).innerHTML = data;
				}
			}
		});
		// Update Sub Nav Tab
		var navitem = req.substring(req.indexOf("/") + 1); // Drop data in string before "/" 
		// Search for current Nav Menu + Active class and remove active class
		document.getElementsByClassName(nav + " nav-link active")[0].classList.remove("active");
		// use stipped navitem to set current selected menu item as active
		document.getElementById(navitem).classList.add("active");
	}
	return false;
}