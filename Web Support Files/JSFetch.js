/** JS Complex/Bulk Data Fetcher **/
/** Adam Mutimer **/
function JSFetch (nav,req,dest,graphobj) {
	if (!req || !dest) {
		
	} else {
		// Adam: Added Array of Requests - 13/10/20
		if (Array.isArray(req)) {
			var keys = req.keys(); // Get request/reg Array Keys for Ordering and Process Loop
			var PageContent = new Array(); // Create Empty Array

			for (x of keys) {
				var preq = req[x];
				
				$.ajax({url:'data/' + preq + '.html', async: false, success: 
					function (data){
						if (data.length < 0) {
							data = "Error: No Data Found";
						} else {
							// Create Array Object
							var obj = {data: data, location: 'data/' + preq + '.html '};
							// Enter Array Object Using ORDER key of request/req
							PageContent[x] = obj;
						}
					}
				});
			}
			// Wait until array is fully populated
			$.when(PageContent).done(function(results){
				// Loop Though the Array
				PageContent.forEach(function(data) {
					// Add content to the targets on each run
					document.getElementById(dest).innerHTML += data.data;
					document.getElementById(dest + '-location').innerHTML += data.location;
				});
			});
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

						// Patch for JsCharts
						if (graphobj) {
							// Adam - Added Array Iteration 
							// Channon needed multiple graphs
							graphobj.forEach(JSFetchGraph);
						}
					}
				}
			});
			if (nav !== null) {
				// Update Sub Nav Tab
				var navitem = req.substring(req.indexOf("/") + 1); // Drop data in string before "/" 
				// Search for current Nav Menu + Active class and remove active class
				document.getElementsByClassName(nav + " nav-link active")[0].classList.remove("active");
				// use stipped navitem to set current selected menu item as active
				document.getElementById(navitem).classList.add("active");
			}			
		}
	}
	return false;
}


/* Examples 
	JSFetch('tab-ID','industry-data/ID-home','ID-content');
*/