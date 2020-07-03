// プリミティブ型とラッパーオブジェクト
// プリミティブの文字列は"string"型
const str_1 = "文字列";
console.log(typeof str_1); // => "string"
// ラッパーオブジェクトは"object"型
const stringWrapper = new String("文字列");
console.log(typeof stringWrapper); // => "object"

console.log(`---------------`);
const stringWrapper_2 = new String("文字列");
// プリミティブ型の値を取得する
console.log(stringWrapper_2.valueOf()); // => "文字列"

const array = [1, 2, 3, 4, 5];
// ループごとに新しいブロックスコープを作成する
for (const element of array) {
  // forのブロックスコープの中でのみ`element`を参照できる
  console.log(element);
}

console.log(`---------------`);
// スコープチェーン
{
  // OUTERブロックスコープ
  const x = "A";
  {
    // INNERブロックスコープからOUTERブロックスコープの変数を参照できる
    console.log(x); // => "x"
  }
}

{
  // OUTERブロックスコープ
  const x = "outer";
  {
    // INNERブロックスコープ
    const x = "inner";
    // 現在のスコープ(INNERブロックスコープ)にある`x`を参照する
    console.log(x); // => "inner"
  }
  // 現在のスコープ(OUTERブロックスコープ)にある`x`を参照する
  console.log(x); // => "outer"
}

console.log(`---------------`);
// グローバルスコープ
// グローバル変数はどのスコープからも参照できる
const globalVariable = "グローバル";
// ブロックスコープ
{
  // ブロックスコープ内には該当する変数が定義されてない -> 外側のスコープへ
  console.log(globalVariable); // => "グローバル"
}
// 関数スコープ
function fn() {
  // 関数ブロックスコープ内には該当する変数が定義されてない -> 外側のスコープへ
  console.log(globalVariable); // => "グローバル"
}
fn();

console.log(`---------------`);
// letとvarの違い
let let_x;
var var_x;
// 宣言後にそれぞれの変数を参照すると`undefined`となる
console.log(let_x); // => undefined
console.log(var_x); // => undefined
// 宣言後に値を代入できる
let_x = "letのx";
var_x = "varのx";

console.log(`---------------`);
// 匿名関数を宣言 + 実行を同時に行っている
(function () {
  // 関数のスコープ内でfoo変数を宣言している
  var foo = "foo";
  console.log(foo); // => "foo"
})();
// foo変数のスコープ外
console.log(typeof foo);
console.log(typeof foo === "undefined"); // => true

console.log(`---------------`);
// クロージャー
const createCounter = () => {
  let count = 0;
  return function increment() {
    // `increment`関数は`createCounter`関数のスコープに定義された`変数`count`を参照している
    count = count + 1;
    return count;
  };
};
// createCounter()の実行結果は、内側で定義されていた`increment`関数
const myCounter = createCounter();
// myCounter関数の実行結果は`count`の評価結果
console.log(myCounter()); // => 1
console.log(myCounter()); // => 2

console.log(`---------------`);
const CreateCounter = () => {
  // 外のスコープから`privateCount`を直接参照できない
  let privateCount = 0;
  return () => {
    privateCount++;
    return `${privateCount}回目`;
  };
};
const counter = CreateCounter();
console.log(counter()); // => "1回目"
console.log(counter()); // => "2回目"

console.log(`---------------`);
// 関数の定義方法
// `function`キーワードからはじめる関数宣言
function fn1() {}
// `function`を式として扱う関数式
const fn2 = function () {};
// Arrow Functionを使った関数式
const fn3 = () => {};
// 関数を呼び出す際は「関数名()」とする
fn1();
fn2();
fn3();

console.log(`---------------`);
// メソッド呼び出しにおけるthis
const person = {
  fullName: "Brendan Eich",
  sayName: function () {
    // `person.fullName`と書いているのと同じ
    return this.fullName;
  },
};
// `person.fullName`を出力する
console.log(person.sayName()); // => "Brendan Eich"

console.log(`---------------`);
// Arrow Functionで定義した関数
const fnn = () => {
  // この関数の外側には関数は存在しない
  // トップレベルの`this`と同じ値
  return this;
};
console.log(fnn === this); // => true
console.log(fnn === fnn); // => true

console.log(`---------------`);
const Prefixer = {
  prefix: "pre",
  prefixArray(strings) {
    return strings.map((str) => {
      // `Prefixer.prefixArray()` と呼び出されたとき
      // `this`は常に`Prefixer`を参照する
      return this.prefix + "-" + str;
    });
  },
};
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]

console.log(`---------------`);
// クラスのインスタンス化
class MyClass {}
// `MyClass`をインスタンス化する
const myClass = new MyClass();
// 毎回新しいインスタンス(オブジェクト)を作成する
const myClassAnother = new MyClass();
// それぞれのインスタンスは異なるオブジェクト
console.log(myClass === myClassAnother); // => false
// クラスのインスタンスかどうかは`instanceof`演算子で判定できる
console.log(myClass instanceof MyClass); // => true
console.log(myClassAnother instanceof MyClass); // => true

console.log(`---------------`);
class Point {
  // 2. コンストラクタ関数の仮引数として`x`には`3`、`y`には`4`が渡る
  constructor(x, y) {
    // 3. インスタンス(`this`)の`x`と`y`プロパティにそれぞれ値を設定する
    this.x = x;
    this.y = y;
    // コンストラクタではreturn文は書かない
  }
}

// 1. コンストラクタを`new`演算子で引数とともに呼び出す
const point = new Point(5, 4);
// 4. `Point`のインスタンスである`point`の`x`と`y`プロパティには初期化された値が入る
console.log(point.x); // => 3
console.log(point.y); // => 4

console.log(`---------------`);
// incrementメソッド
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}
const counterA = new Counter();
const counterB = new Counter();
// 各インスタンスオブジェクトのメソッドは共有されている(同じ関数を参照している)
console.log(counterA.increment === counterB.increment); // => true

console.log(`---------------`);
// クラスのインスタンスに対してメソッドを定義する
class Counter2 {
  constructor() {
    this.count = 0;
    this.increment = () => {
      // `this`は`constructor`メソッドにおける`this`（インスタンスオブジェクト）を参照する
      this.count++;
    };
  }
}
const counter2A = new Counter2();
const counter2B = new Counter2();
// `counterA.increment()`のベースオブジェクトは`counterA`インスタンス
counter2A.increment();
// 各インスタンスの持つプロパティ(状態)は異なる
console.log(counter2A.count); // => 1
console.log(counter2B.count); // => 0

console.log(`---------------`);
class NumberWrapper {
  constructor(value) {
    this._value = value;
  }
  // `_value`プロパティの値を返すgetter
  get value() {
    console.log("getter");
    return this._value;
  }
  // `_value`プロパティに値を代入するsetter
  set value(newValue) {
    console.log("setter");
    this._value = newValue;
  }
}

const numberWrapper = new NumberWrapper(1);
// "getter"とコンソールに表示される
console.log(numberWrapper.value); // => 1
// "setter"とコンソールに表示される
numberWrapper.value = 42;
// "getter"とコンソールに表示される
console.log(numberWrapper.value); // => 42

console.log(`---------------`);
// Array#lengthをアクセッサプロパティで再現する
/**
 * 配列のようなlengthを持つクラス
 */
class ArrayLike {
  constructor(items = []) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  get length() {
    return this._items.length;
  }

  set length(newLength) {
    const currentItemLength = this.items.length;
    // 現在要素数より小さな`newLength`が指定された場合、指定した要素数となるように末尾を削除する
    if (newLength < currentItemLength) {
      this._items = this.items.slice(0, newLength);
    } else if (newLength > currentItemLength) {
      // 現在要素数より大きな`newLength`が指定された場合、指定した要素数となるように末尾に空要素を追加する
      this._items = this.items.concat(new Array(newLength - currentItemLength));
    }
  }
}

const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
// 要素数を減らすとインデックス以降の要素が削除される
arrayLike.length = 3;
console.log(arrayLike.items.join(", ")); // => "1, 2"
// 要素数を増やすと末尾に空要素が追加される
arrayLike.length = 5;
console.log(arrayLike.items.join(", ")); // => "1, 2, , , "

console.log(`---------------`);
class ConflictClass {
  constructor() {
    this.method = () => {
      console.log("インスタンスオブジェクトのメソッド");
    };
  }

  method() {
    console.log("プロトタイプメソッド");
  }
}

const conflict = new ConflictClass();
conflict.method(); // "インスタンスオブジェクトのメソッド"
// インスタンスの`method`プロパティを削除
delete conflict.method;
conflict.method(); // "プロトタイプメソッド"

console.log(`---------------`);
class MYClass {
  method() {
    console.log("プロトタイプのメソッド");
  }
}
const instance = new MYClass();
// インスタンスには`method`プロパティがないため、プロトタイプオブジェクトの`method`が参照される
instance.method(); // "プロトタイプのメソッド"
// `instance.method`の参照はプロトタイプオブジェクトの`method`と一致する
const Prototype = Object.getPrototypeOf(instance);
console.log(instance.method === Prototype.method); // => true

console.log(`---------------`);
//super
// 親クラス
class Parent {
  constructor(...args) {
    console.log("Parentコンストラクタの処理", ...args);
  }
}
// Parentを継承したChildクラスの定義
class Child extends Parent {
  constructor(...args) {
    // Parentのコンストラクタ処理を呼び出す
    super(...args);
    console.log("Childコンストラクタの処理", ...args);
  }
}
const child = new Child("引数1", "引数2", "引数3");
// "Parentコンストラクタの処理", "引数1", "引数2"
// "Childコンストラクタの処理", "引数1", "引数2"
console.log(`---------------`);
//コンストラクタの処理順
class Parent2 {
  constructor() {
    this.name = "Parent";
  }
}
class Child2 extends Parent2 {
  constructor() {
    // 子クラスでは`super()`を`this`に触る前に呼び出さなければならない
    super();
    // 子クラスのコンストラクタ処理
    // 親クラスで書き込まれた`name`は上書きされる
    this.name = "Child";
  }
}
const parent2 = new Parent2();
console.log(parent2.name); // => "Parent"
const child2 = new Child2();
console.log(child2.name); // => "Child"

console.log(`---------------`);
//try...catch構文
try {
  console.log("try節:この行は実行されます");
  // 未定義の関数を呼び出してReferenceError例外が発生する
  undefinedFunction();
  // 例外が発生したため、この行は実行されません
  console.log("hoge");
} catch (error) {
  // 例外が発生したあとはこのブロックが実行される
  console.log("catch節:この行は実行されます");
  console.log(error instanceof ReferenceError); // => true
  console.log(error.message); // => "undefinedFunction is not defined"
} finally {
  // このブロックは例外の発生に関係なく必ず実行される
  console.log("finally節:この行は実行されます");
}

console.log(`---------------`);
// 渡された数値が0以上ではない場合に例外を投げる関数
function assertPositiveNumber(num) {
  if (num < 0) {
    throw new Error(`${num} is not positive.`);
  }
}

try {
  // 0未満の値を渡しているので、関数が例外を投げる
  assertPositiveNumber(-1);
} catch (error) {
  console.log(error instanceof Error); // => true
  console.log(error.message); // => "-1 is not positive."
} finally {
  console.log("hoge");
}

console.log(`---------------`);
// Mapの作成
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
// 2つのエントリーで初期化されている
console.log(map);
console.log(`マップのサイズは：` + map.size); // => 2

console.log(`---------------`);
// Mapに要素の追加と取り出し
const map_add = new Map();
// 新しい要素の追加
map_add.set("key", "value1");
console.log(map_add.size); // => 1
console.log(map_add.get("key")); // => "value1"
// 要素の上書き
map_add.set("key", "value2");
console.log(map_add.get("key")); // => "value2"
// キーの存在確認
console.log(map_add.has("key")); // => true
console.log(map_add.has("foo")); // => false

console.log(`---------------`);
// Mapのデリートとクリア
const map_clean = new Map();
map_clean.set("key1", "value1");
map_clean.set("key2", "value2");
console.log(map_clean.size); // => 2
map_clean.delete("key1");
console.log(map_clean.size); // => 1
map_clean.clear();
console.log(map_clean.size); // => 0

console.log(`---------------`);
// MapのforEach
const map_forEach = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
const results = [];
map_forEach.forEach((value, key) => {
  results.push(`${key}:${value}`);
});
console.log(results); // => ["key1:value1","key2:value2"]

console.log(`---------------`);
// Mapのkeysとvaluesメソッド
const map_Iterator = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
]);
const keys = [];
// keysメソッドの戻り値(Iterator)を反復処理する
for (const key of map_Iterator.keys()) {
    keys.push(key);
}
console.log(keys); // => ["key1","key2"]
// keysメソッドの戻り値(Iterator)から配列を作成する
const keysArray = Array.from(map_Iterator.keys());
console.log(keysArray); // => ["key1","key2"]

console.log(`---------------`);
// Mapのentriesメソッド
const map_entries = new Map([["key1", "value1"], ["key2", "value2"]]);
const entries = [];
for (const [key, value] of map_entries.entries()) {
    entries.push(`${key}:${value}`);
}
console.log(entries); // => ["key1:value1","key2:value2"]

console.log(`---------------`);
// Mapのサンプル
// ショッピングカートを表現するクラス
class ShoppingCart {
    constructor() {
        // 商品とその数を持つマップ
        this.items = new Map();
    }
    // カートに商品を追加する
    addItem(item) {
        const count = this.items.get(item) || 0;
        this.items.set(item, count + 1);
    }
    // カート内の合計金額を返す
    getTotalPrice() {
        return Array.from(this.items).reduce((total, [item, count]) => {
            return total + item.price * count;
        }, 0);
    }
    // カートの中身を文字列にして返す
    toString() {
        return Array.from(this.items).map(([item, count]) => {
            return `${item.name}:${count}`;
        }).join(",");
    }
}
const shoppingCart = new ShoppingCart();
// 商品一覧
const shopItems = [
    { name: "みかん", price: 100 },
    { name: "リンゴ", price: 200 },
];

// カートに商品を追加する
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[1]);

// 合計金額を表示する
console.log("合計金額："+shoppingCart.getTotalPrice()+"円"); // => 400
// カートの中身を表示する
console.log("内訳："+shoppingCart.toString()); // => "みかん:2,リンゴ:1"











