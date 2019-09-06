document.body.onload = function() {
   chrome.storage.sync.get("u", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("userstat").innerText = items.u;
	  
    }
  });
  
  
  chrome.storage.sync.get("p", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("passstat").innerText = items.p;
    }
  });
 
}

document.getElementById("save").onclick = function() {
  var usr = document.getElementById("user").value;
  var pas = document.getElementById("pass").value;
  
  chrome.storage.sync.set({ "u" : usr }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  
  chrome.storage.sync.set({ "p" : pas }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  window.close();
  
}
