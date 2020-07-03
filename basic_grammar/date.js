console.log(`---------------`);
// dateのサンプル

// 現在の時刻を表すインスタンスを作成する
const now = new Date();
// 時刻値だけが欲しい場合にはDate.nowメソッドを使う
console.log(Date.now());

// 時刻値を取得する
console.log(now.getTime());
// 時刻をISO 8601形式の文字列で表示する
console.log(now.toISOString());

console.log(`---------------`);
// dateのインスタンスメソッド
// YYYY/MM/DD形式の文字列に変換する関数
function formatDate(date) {
  const yyyy = String(date.getFullYear());
  // String#padStartメソッド（ES2017）で2桁になるように0埋めする
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}/${mm}/${dd}`;
}

const date = new Date();
console.log(formatDate(date)); 

console.log(`---------------`);
// dateのインスタンスメソッド

