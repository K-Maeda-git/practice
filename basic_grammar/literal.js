console.log(.123);

console.log(
`aaa
iii
uuu`
);

// テンプレートリテラル
const T ="test";
console.log(`これは${T}です`);

console.log(`This is \`code\``);

// nullリテラル
const foo=null;
console.log(foo);

// オブジェクトの作成
const obj = {
    "key": "value"
};
// ドット記法
console.log(obj.key); // => "value"
// ブラケット記法
console.log(obj["key"]); // => "value"

// 配列リテラル
const array = ["index:0", "index:1", "index:2"];
// 1番目の要素を参照
console.log(array[1]); // => "index:1"

// 正規表現リテラル
const numberRegExp = /\d+/; // 1文字以上の数字にマッチする正規表現
// 123が正規表現にマッチするかをテストする
console.log(numberRegExp.test(123)); // => true

// ラッパーオブジェクト
// プリミティブ型の文字列データ
const str = "文字列";
// プリミティブ型の文字列は"string"型のデータ
console.log(typeof str); // => "string"
// プリミティブ型の文字列も`length`プロパティを参照できる
console.log(str.length); // => 3
