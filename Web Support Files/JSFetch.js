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
					var filepath = "<div class=\"row\">\n<div class=\"col\">\n<p class=\"pt-5\"><strong>File Location:</strong><span class=\"font-weight-light font-italic\"> data/" + req + ".html</span></p></div></div>";
					document.getElementById(dest).innerHTML = data + filepath;
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

/* Examples 
	JSFetch('tab-ID','industry-data/ID-home','ID-content');
*/