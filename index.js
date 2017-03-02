function openNetwork(evt, networkName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(networkName).style.display = "block";
    evt.currentTarget.className += " active";
}

function changeGuest(evt) {
	var Box_of_Lies_games
	
	Box_of_Lies_games = document.getElementsByClassName("Box_of_Lies_games");
	
    for (i = 0; i < Box_of_Lies_games.length; i++) {
		if(Box_of_Lies_games[i].style.display !== "none" && i+1 < Box_of_Lies_games.length){
			Box_of_Lies_games[i].style.display = "none";
			Box_of_Lies_games[i+1].style.display = "block";
			break;
		}
		else{
			Box_of_Lies_games[i].style.display = "none";
		}
    }	
}