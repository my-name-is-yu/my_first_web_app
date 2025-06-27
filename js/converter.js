// ここからコードを書いてください

export function setupConverter() {
  // これから操作するHTML要素を、それぞれの変数に格納する
  const converterForm = document.querySelector(".converter-form");
  const inputValue = document.querySelector(".converter-input");
  const fromUnit = document.querySelector(".converter-from");
  const toUnit = document.querySelector(".converter-to");
  const result = document.querySelector(".converter-result");
  // 単位のデータ（名前と、1メートルあたりの倍率）
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 }
  ];

  // セレクトボックスの中身を一度空にする
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  // for...of ループで lengthUnit の中身を一つずつ取り出し、<option>タグを生成する
  for (const unit of lengthUnit) {
    fromUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
    toUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
  }

  // 初期状態で選択されている項目を設定する
  fromUnit.selectedIndex = 0; // "meter" を選択
  toUnit.selectedIndex = 1;   // "kilometer" を選択
  // 変換を実行する関数
  function convert() {
    // 1. 入力された値、変換元、変換先の単位を取得する
    const value = parseFloat(inputValue.value);

    // isNaNは、値が数値でない場合にtrueを返す
    if (isNaN(value)) {
      result.textContent = "Please enter a valid number";
      return; // 数値でない場合は、ここで処理を終了する
    }

    const fromBase = fromUnit.value;
    const toBase = toUnit.value;

    // 2. 変換の計算を行う
    // いったんメートルに変換してから、目的の単位に変換する
    const converted = (value * fromBase) / toBase;

    // 3. 結果を画面に表示する
    const fromName = fromUnit.options[fromUnit.selectedIndex].text;
    const toName = toUnit.options[toUnit.selectedIndex].text;
    
    // toFixed(3) は、小数点以下3桁に丸めるためのものじゃ
    result.textContent = `${value} ${fromName} = ${converted.toFixed(3)} ${toName}`;
  }

  // フォームの入力内容が変わるたびに、convert関数を実行する
  converterForm.addEventListener("input", convert);

  // 最初にページを読み込んだときにも、一度計算を実行しておく
  convert();
}