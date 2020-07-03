// 二項演算子とオペランドの関係
// オペランド1->[1]オペランド2->[2]
console.log(1+2);
// 単項演算子（オペランドが１つだけ）
let num=1;
num++;
console.log(num);

console.log(`---------------`);

// 二項演算子
console.log(2+5);
console.log(`2020年`+`5月`);
console.log(2-5);
console.log(2*5);
console.log(2/5);
console.log(2%5);
console.log(2**5);
console.log(Math.pow(2,5));

console.log(`---------------`);

console.log(+"文字列"); // => NaN
// 自分自身とも一致しない
console.log(NaN === NaN); // => false
// Number型である
console.log(typeof NaN); // => "number"
// Number.isNaNでNaNかどうかを判定
console.log(Number.isNaN(NaN)); // => true

console.log(`---------------`);
// インクリメント演算子の評価順
let x = 1;
// 後置インクリメント演算子
console.log(x++); // => 1
console.log(x);   // => 2
// 前置インクリメント演算子
console.log(++x); // => 3
console.log(x);   // => 3

console.log(`---------------`);
// デクリメント演算子の評価順
let y = 1;
// 後置デクリメント演算子
console.log(y--); // => 1
console.log(y);   // => 0
// 前置デクリメント演算子
console.log(--y); // => -1
console.log(y);   // => -1

console.log(`---------------`);
// 厳密等価演算子
console.log(1 === 1); // => true
console.log(1 === "1"); // => false

// {} は新しいオブジェクトを作成している
const objA = {};
const objB = {};
// 生成されたオブジェクトは異なる参照となる
console.log(objA === objB); // => false
// 同じ参照を比較している場合
console.log(objA === objA); // => true

console.log(`---------------`);
// 厳密不等価演算子
console.log(1 !== 1); // => false
console.log(1 !== "1"); // => true

console.log(`---------------`);
// 等価演算子
console.log(1 == 1); // => true
console.log("str" == "str"); // => true
console.log("JavaScript" == "ECMAScript"); // => false
// オブジェクトは参照が一致しているならtrueを返す
// {} は新しいオブジェクトを作成している
const objC = {};
const objD = {};
console.log(objC == objD); // => false
console.log(objD == objD); // => true
// 暗黙的な型変換
// 文字列を数値に変換してから比較
console.log(1 == "1"); // => true
// "01"を数値にすると`1`となる
console.log(1 == "01"); // => true
// 真偽値を数値に変換してから比較
console.log(0 == false); // => true
// nullの比較はfalseを返す
console.log(0 == null); // => false
// nullとundefinedの比較は常にtrueを返す
console.log(null == undefined); // => true

console.log(`---------------`);
// 不等価演算子
console.log(1 != "1"); // => false
console.log(0 != false); // => false
console.log(0 != null); // => true
console.log(null != undefined); // => false

console.log(`---------------`);
// 大なり演算子
console.log(42 > 21); // => true
console.log(42 > 42); // => false

console.log(`---------------`);
// 大なりイコール演算子
console.log(42 >= 21); // => true
console.log(42 >= 42); // => true
console.log(42 >= 43); // => false

console.log(`---------------`);
// 小なり演算子/より小さい（<）
console.log(21 < 42); // => true
console.log(42 < 42); // => false

console.log(`---------------`);
// 小なりイコール演算子[<=]
console.log(21 <= 42); // => true
console.log(42 <= 42); // => true
console.log(43 <= 42); // => false

console.log(`---------------`);
// ビット演算子
console.log(0b0000000000000000000000000001001); // => 9
// Number#toStringメソッドを使うことで2進数表記の文字列を取得できる
console.log((9).toString(2)); // => "1001"

console.log(`---------------`);
//ビット論理積[&]
console.log(15     & 9);      // => 9
console.log(0b1111 & 0b1001); // => 0b1001

console.log(`---------------`);
// ビット論理和[|]
console.log(15     | 9);      // => 15
console.log(0b1111 | 0b1001); // => 0b1111

console.log(`---------------`);
// ビット否定（~）
console.log(~15); // => -16
console.log(~0b1111); // => -0b10000

const wood = "森森本森森";
// 見つかった場合はインデックスを返す
// JavaScriptのインデックスは0から開始するので2を返す
console.log(wood.indexOf("本")); // => 2
// 見つからない場合は-1を返す
console.log(wood.indexOf("火")); // => -1

console.log(~0); // => -1
console.log(~(-1)); // => 0

// indexOfメソッドは見つからなかった場合は -1 を返す
if (wood.indexOf("木") !== -1) {
    console.log("木を見つけました");
}
// 否定演算子（`~`）で同じ動作を実装
// (~(-1)) は 0 となるため、見つからなかった場合はif文の中身は実行されない
if (~wood.indexOf("木")) {
    console.log("木を見つけました");
}



// 