/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById('submitButton_en').addEventListener('click', function() {
    event.preventDefault(); // デフォルトの送信動作を防止します

    // 新しい HTTP リクエストを作成します
    var xhr = new XMLHttpRequest();
    // ここにあなたの Discord webhook URL を入力します
	var url = 'https://discord.com/api/webhooks/1127474471360536607/aKa7qnS6UXgBIsH8G8pElWHRZ1fY-QpxZFfPlc01iZMueXcICjjPm_qrqQnR_lvOFqAP';
	var params = JSON.stringify({
		'content': 'お名前：' + document.getElementById('name').value + '\n'
  + 'メールアドレス：' + document.getElementById('email').value + '\n'
  + '会社電話番号：' + document.getElementById('phone').value + '\n'
  + 'お問い合わせ内容：' + document.getElementById('message').value + '\n'
	});
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function() {
        // リクエストの結果を処理します
        if (xhr.status === 204) { // 204 status codeは成功を意味します
            console.log('Message sent successfully');
            alert("お問い合わせ頂きありがとうございます。"+ '\n'
            +"確認でき次第、頂いたご連絡先に連絡いたしますので今しばらくお待ちください。");
            
            clearFields();
        } else {
            console.log('Failed to send message');
            alert("お問い合わせの際に何らかの問題が発生したため送信が行えておりません。確認しますのでしばしお待ちください");
            var params = JSON.stringify({
				'content': '問い合わせに失敗しました。はくさん至急確認'
				});
				xhr.send(params); // リクエストを送信します
        }
    };

    xhr.send(params); // リクエストを送信します
    
});
    function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}
