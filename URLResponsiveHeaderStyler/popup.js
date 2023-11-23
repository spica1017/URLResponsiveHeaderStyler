document.addEventListener('DOMContentLoaded', function() {
    let checkButton = document.getElementById('checkButton');
    checkButton.addEventListener('click', function() {
        let stringInput = document.getElementById('stringInput').value;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.runtime.sendMessage({
                message: "check_url",
                string: stringInput,
                tabId: tabs[0].id
            });
        });
    });
});
