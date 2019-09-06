// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
	window.open("https://netaccess.iitm.ac.in/account/login");
	
});