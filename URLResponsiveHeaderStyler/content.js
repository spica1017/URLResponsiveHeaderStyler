// ポップアップからのメッセージを待ち受ける
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // メッセージが色を変更するものかどうかを確認する
  if (request.message === "change_color") {
    // idが'header'の要素の背景色を変更する
    document.getElementById('header').style.backgroundColor = 'red';
    // headerタグの背景色も変更する
    document.querySelector('header').style.backgroundColor = 'red';
  }
});
