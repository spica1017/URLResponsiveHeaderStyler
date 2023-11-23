// DOMが完全に読み込まれた後に実行されるイベントリスナーを追加します
document.addEventListener('DOMContentLoaded', function() {
    // 'checkButton'というIDを持つ要素を取得します
    let checkButton = document.getElementById('checkButton');
    // 'checkButton'にクリックイベントリスナーを追加します
    checkButton.addEventListener('click', function() {
        // 'stringInput'というIDを持つ要素の値を取得します
        let stringInput = document.getElementById('stringInput').value;
        // 現在のウィンドウでアクティブなタブをクエリします
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            // 'check_url'メッセージをバックグラウンドスクリプトに送信します
            chrome.runtime.sendMessage({
                message: "check_url",
                string: stringInput,
                tabId: tabs[0].id
            });
        });
    });
});
