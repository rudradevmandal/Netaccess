// popup.js

document.body.onload = function() {
   chrome.storage.sync.get("data1", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("data1").innerText = items.data1;
    }
  });
  
  
  chrome.storage.sync.get("data", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("data").innerText = items.data;
    }
  });
 
}

document.getElementById("set").onclick = function() {
  var d = document.getElementById("text").value;
  var d1 = document.getElementById("text1").value;
  
  chrome.storage.sync.set({ "data1" : d1 }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  
  chrome.storage.sync.set({ "data" : d }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  window.close();
  
}
