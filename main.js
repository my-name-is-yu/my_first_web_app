// ここからコードを書いてください

import { setupTabs } from "./js/tabs.js";
import { setupConverter } from "./js/converter.js"

// HTMLの読み込みが完了したら、中身を実行する
document.addEventListener("DOMContentLoaded", () => {
  setupTabs(); // tabs.jsに書いた関数を呼び出す
  setupConverter();
});

