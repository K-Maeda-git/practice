console.log("index.js:loaded");

// CSSセレクタを使ってDOMツリー中のh2要素を取得する
const heading = document.querySelector("h2");
// h2要素に含まれるテキストコンテンツを取得する
const headingText = heading.textContent;

// button要素を作成する
const button = document.createElement("button");
button.textContent = "Push Me";

// body要素の子要素としてbuttonを挿入する
document.body.appendChild(button);

const userId = "K-Maeda-git";
// Fetch API
fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
  .then((response) => {
    console.log(response.status);
    // エラーレスポンスが返されたことを検知する
    if (!response.ok) {
      console.error("エラーレスポンス", response);
    } else {
      return response.json().then((userInfo) => {
        console.log(userInfo);
      });
    }
  })
  .catch((error) => {
    console.error(error);
  });

// // XMLHttpRequest
// function fetchUserInfo(userId) {
//   // リクエストを作成する
//   const request = new XMLHttpRequest();
//   request.open(
//     "GET",
//     `https://api.github.com/users/${encodeURIComponent(userId)}`
//   );
//   request.addEventListener("load", () => {
//     // リクエストが成功したかを判定する
//     // Fetch APIのresponse.okと同等の意味
//     if (request.status >= 200 && request.status < 300) {
//       // レスポンス文字列をJSONオブジェクトにパースする
//       const userInfo = JSON.parse(request.responseText);
//       console.log(userInfo);
//     } else {
//       console.error("エラーレスポンス", request.statusText);
//     }
//   });
//   request.addEventListener("error", () => {
//     console.error("ネットワークエラー");
//   });
//   // リクエストを送信する
//   request.send();
// }


