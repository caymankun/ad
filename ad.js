// ドキュメントの head 要素を取得
const head = document.head;

// meta要素（Content-Type）を作成
const metaContentType = document.createElement('meta');
metaContentType.setAttribute('http-equiv', 'Content-Type');
metaContentType.setAttribute('content', 'text/html; charset=UTF-8');

// meta要素（charset）を作成
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');

// meta要素（content-language）を作成
const metaContentLanguage = document.createElement('meta');
metaContentLanguage.setAttribute('http-equiv', 'content-language');
metaContentLanguage.setAttribute('content', 'ja');

// meta要素（viewport）を作成
const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width,initial-scale=1.0');

// head要素にmeta要素を追加
head.appendChild(metaContentType);
head.appendChild(metaCharset);
head.appendChild(metaContentLanguage);
head.appendChild(metaViewport);

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
  height: auto;
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
head.appendChild(style);

// ボディ要素を取得
const body = document.body;

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
popupClose.src = 'https://ad-5qt.pages.dev/back.svg';
popupClose.onclick = closePopup;

// ポップアップコンテンツに要素を追加
popupContent.appendChild(banner);
popupContent.appendChild(title);
popupContent.appendChild(popupClose);

// ポップアップにコンテンツ要素を追加
popup.appendChild(popupContent);

// ボディ要素にオーバーレイとポップアップ要素を追加
body.appendChild(overlay);
body.appendChild(popup);

// ランダムなバナーとそのリンクを定義
const banners = [
  {
    title: 'c-home',
    src: 'https://ad-5qt.pages.dev/c-site.webp',
    link: 'https://caymankun.f5.si'
  },
  {
    title: 'youtube-channel',
    src: 'https://ad-5qt.pages.dev/yt.webp',
    link: 'https://www.youtube.com/@caymankun1359'
  },
  {
    title: 'c-start',
    src: 'https://ad-5qt.pages.dev/cstart.webp',
    link: 'https://c-start.f5.si'
  },
  {
    title: 'c-tool',
    src: 'https://ad-5qt.pages.dev/ctool.webp',
    link: 'https://c-tool.f5.si/'
  }
];

// ポップアップを開く関数
function openPopup() {
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

// ポップアップを閉じる関数
function closePopup() {
  var popup = document.getElementById('popup');
  var overlay = document.getElementById('overlay');
  popup.style.display = 'none';
  overlay.style.display = 'none';
  restart(); // リンクの遷移を再開
}

// ページ読み込み後に実行
window.onload = async function() {
  const banners = await fetchBanners();
  
  if (banners.length === 0) {
    console.error('No banners found.');
    return;
  }
  
  // ランダムなバナーの選択
  const randomIndex = Math.floor(Math.random() * banners.length);
  const randomBanner = banners[randomIndex];
  
  // タイトルと画像の設定
  title.innerText = randomBanner.title;
  banner.src = randomBanner.src;
  
  // バナーがクリックされた時のリンク設定
  banner.onclick = function() {
    window.location.href = randomBanner.link;
  };
  
  const link = document.querySelector('a');
  
  if (link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // リンクのデフォルトの挙動を無効化
      
      const randomValue = Math.floor(Math.random() * 2); // 0または1の乱数
      
      if (randomValue === 1) {
        openPopup();
      } else {
        window.location.href = link.href; // リンクの遷移を実行
      }
    });
  }
};

async function fetchBanners() {
  try {
    const response = await fetch('https://ad-5qt.pages.dev/list.json'); // 外部 JSON ファイルの URL を指定してください
    const data = await response.json();
    return data.banners;
  } catch (error) {
    console.error('Error fetching banners:', error);
    return [];
  }
}
