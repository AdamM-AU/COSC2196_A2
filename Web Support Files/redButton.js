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