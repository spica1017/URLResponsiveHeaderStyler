// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Check if the message is to change color
  if (request.message === "change_color") {
    // Change the background color of the element with id 'header'
    document.getElementById('header').style.backgroundColor = 'red';
  }
});
