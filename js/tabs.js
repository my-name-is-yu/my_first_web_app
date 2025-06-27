// ここからコードを書いてください

export function setupTabs() {
  // 1. 操作したいHTML要素を取得する
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  // 2. 「Home」リンクがクリックされた時の処理
  homeLink.addEventListener("click", () => {
    converterSection.classList.add("hidden"); // 単位変換セクションを隠す
    homeSection.classList.remove("hidden"); // ホームセクションを見せる
  });

  // 3. 「Unit Converter」タブがクリックされた時の処理
  converterTab.addEventListener("click", () => {
    homeSection.classList.add("hidden"); // ホームセクションを隠す
    converterSection.classList.remove("hidden"); // 単位変換セクションを見せる
  });
}