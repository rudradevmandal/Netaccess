// find the fiends in your login form
var loginField = document.getElementById('username');
var passwordField = document.getElementById('password');



document.body.onload = function() {
   chrome.storage.sync.get("u", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
	  var myUsername = items.u;
	  loginField.value = myUsername;
	  
     
    }
  });


 
  chrome.storage.sync.get("p", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
	  var myPassword = items.p;
	  passwordField.value = myPassword;
	  document.getElementById("submit").click();

    }
  });
  
  	if (document.getElementsByClassName("alert alert-warning").length == 1) {
    window.alert("Wrong Username or Password.\nPlease Modify.\nThank You");
	window.close();
	window.open(chrome.extension.getURL("options.html"));
}
else{
	
} 
 
}

