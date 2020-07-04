// 下記で実行すると指定したmdファイルをhtmlに変換する
// node main.js --gfm  sample.md

// 下記で実行するとテストを実行する
// npm test

// テスト実行時に改行の有り無しで若干ハマったので注意

// commanderモジュールをprogramとしてインポートする
const program = require("commander");
// fsモジュールをfsオブジェクトとしてインポートする
const fs = require("fs");
// markedモジュールをmarkedオブジェクトとしてインポートする
const md2html = require("./md2html");

// gfmオプションの定義
program.option("--gfm", "GFMを無効にする");
// コマンドライン引数からファイルパスを取得する
program.parse(process.argv);
const filePath = program.args[0];

// コマンドライン引数のオプションを取得し、デフォルトのオプションを上書きする
const cliOptions = {
  gfm: false,
  ...program.opts(),
};

// ファイルを非同期で読み込む
fs.readFile(filePath, { encoding: "utf-8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    // 終了ステータス1（一般的なエラー）としてプロセスを終了
    process.exit(1);
    return;
  }
  // md2htmlモジュールを使ってHTMLに変換する
  const html = md2html(file, cliOptions);
  console.log(html);
});
