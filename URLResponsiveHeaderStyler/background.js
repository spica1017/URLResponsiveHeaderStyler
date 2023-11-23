// メッセージリスナーを追加
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // メッセージがURLをチェックするものかどうかを確認する
    if (request.message === "check_url") {
      // 送信者のタブのURLを取得
      let url = sender.tab.url;
      // URLがリクエストの文字列を含むかどうかを確認
      if (url.includes(request.string)) {
        // 色を変更するメッセージを送信者のタブに送信
        chrome.tabs.sendMessage(sender.tab.id, {
          message: "change_color"
        });
      }
    }
  }
);
