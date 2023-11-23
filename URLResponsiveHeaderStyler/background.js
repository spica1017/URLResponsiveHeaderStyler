chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "check_url") {
      let url = sender.tab.url;
      if (url.includes(request.string)) {
        chrome.tabs.sendMessage(sender.tab.id, {
          message: "change_color"
        });
      }
    }
  }
);
