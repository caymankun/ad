// ドキュメントの head 要素を取得
const oldHead = document.querySelector('head');

// ドキュメントの body 要素を取得
const oldBody = document.querySelector('body');

// html要素を取得
const html = document.documentElement;

// lang属性を設定
html.setAttribute('lang', 'ja');

// head要素を取得
const headcc = document.head;

// meta要素（Content-Type）を作成
const metaContentType = document.createElement('meta');
metaContentType.setAttribute('http-equiv', 'Content-Type');
metaContentType.setAttribute('content', 'text/html; charset=UTF-8');

// meta要素（charset）を作成
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');

// head要素にmeta要素を追加
headcc.appendChild(metaContentType);
headcc.appendChild(metaCharset);

// head要素を取得
const head = document.querySelector('head');

// メタタグを作成
const metaTag = document.createElement('meta');
metaTag.setAttribute('name', 'viewport');
metaTag.setAttribute('content', 'width=device-width,initial-scale=1.0');

// メタタグをhead要素に追加
head.appendChild(metaTag);

// スタイル要素を作成
const style = document.createElement('style');

// CSSルールを作成
const cssRules = `
.popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 250px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
}

.popup-content {
  text-align: center;
}

.popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  padding: 3px;
  border-radius: 100px;
  width: 22px;
  height: 22px;
  text-align: center;
}

.popup-close:hover {
  background-color: #ccc;
}

.popup-image {
  width: 200px;
  height: 150px;
  margin-bottom: 10px;
}

/* オーバーレイ用のスタイル */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  display: none;
}
`;

// スタイル要素にCSSルールを追加
style.appendChild(document.createTextNode(cssRules));

// ヘッド要素にスタイル要素を追加
document.head.appendChild(style);

// head要素を取得
const headza = document.head;

// meta要素を作成
const metaContentLanguage = document.createElement('meta');
metaContentLanguage.setAttribute('http-equiv', 'content-language');
metaContentLanguage.setAttribute('content', 'ja');

// head要素にmeta要素を追加
headza.appendChild(metaContentLanguage);


// オーバーレイ要素を作成
const overlay = document.createElement('div');
overlay.id = 'overlay';
overlay.className = 'overlay';

// ポップアップ要素を作成
const popup = document.createElement('div');
popup.id = 'popup';
popup.className = 'popup';

// ポップアップコンテンツ要素を作成
const popupContent = document.createElement('div');
popupContent.className = 'popup-content';

// バナー要素を作成
const banner = document.createElement('img');
banner.id = 'banner';
banner.className = 'popup-image';
banner.src = '';

// タイトル要素を作成
const title = document.createElement('h2');
title.id = 'title';

// ポップアップを閉じる要素を作成
const popupClose = document.createElement('img');
popupClose.id = 'popup-close';
popupClose.className = 'popup-close';
popupClose.src = 'https://ad-5qt.pages.dev/back.svg'
popupClose.onclick = closePopup;

// ポップアップコンテンツに要素を追加
popupContent.appendChild(banner);
popupContent.appendChild(title);
popupContent.appendChild(popupClose);

// ポップアップにコンテンツ要素を追加
popup.appendChild(popupContent);

// ボディ要素にオーバーレイとポップアップ要素を追加
document.body.appendChild(overlay);
document.body.appendChild(popup);


  //end


// リンク要素を取得
const link = document.querySelector('a');

// クリックイベントリスナーを追加
if (link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    
    // 処理を記述
    dos();
  })
}

//sasaw

    // ポップアップを開く関数
    function openPopup() {
      var popup = document.getElementById('popup');
      var overlay = document.getElementById('overlay');
      popup.style.display = 'block';
      overlay.style.display = 'block';
    }
    
    // ポップアップを閉じる関数
    function closePopup() {
      var popup = document.getElementById('popup');
      var overlay = document.getElementById('overlay');
      popup.style.display = 'none';
      overlay.style.display = 'none';
	  restart();
    }
    var min = 0 ;
    var max = 3 ;
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    let h = document.getElementById('title');
    let b =document.getElementById('banner');
    if (random === 0){
        h.innerText = 'c-home';
        b.src = 'https://ad-5qt.pages.dev/c-site.webp';
    }else if (random === 1) {
        h.innerText = 'youtube-cannel';
        b.src = 'https://ad-5qt.pages.dev/yt.webp';
    }else if (random === 2){
        h.innerText = 'c-start';
        b.src = 'https://ad-5qt.pages.dev/cstart.webp';
    }else if( random === 3){
        h.innerText = 'c-tool';
        b.src = 'https://ad-5qt.pages.dev/ctool.webp';
    }
	b.onclick = gobanner;
	function gobanner(){
		if (random === 0){
			window.location.href = 'https://caymankun.f5.si' ;
		}else if (random === 1) {
			window.location.href ='https://www.youtube.com/@caymankun1359' ;
		}else if (random === 2){
			window.location.href ='https://c-start.f5.si' ;
		}else if( random === 3){
			window.location.href ='https://c-tool.f5.si/' ;
		}
	}
    var minv = 0 ;
    var maxv = 2 ;
    var randomv = Math.floor( Math.random() * (maxv + 1 - minv) ) + minv ;
	function dos(){
		if (randomv === 2){
      openPopup();
    }else{
		restart();
    }
	}
    
	// リンクの遷移を再開
	function restart(){
		
		// もしリンク要素が存在し、target属性が'_blank'と等しい場合に処理を実行
if (link && link.getAttribute('target') === '_blank') {
  // target='_blank'が指定されている場合の処理
  window.open = link.href;
} else {
  // target='_blank'が指定されていない場合の処理
  window.location.href = link.href;
}

	};

