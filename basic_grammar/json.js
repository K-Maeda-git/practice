console.log(`---------------`);
// JSON
// JSONはダブルクォートのみを許容するため、シングルクォートでJSON文字列を記述
const json_check = '{ "id": 1, "name": "js-primer" }';
const obj = JSON.parse(json_check);
console.log(obj.id); // => 1
console.log(obj.name); // => "js-primer"

console.log(`---------------`);
// parseメソッド
// 文字列がJSONの配列になっている場合
const json_array = "[1, 2, 3]";
console.log(JSON.parse(json_array)); // => [1, 2, 3]
console.log(JSON.parse(json_array[1]));

console.log(`---------------`);
// stringifyメソッド
// 文字列がJSONの配列になっている場合
const obj_stringify = { id: 1, name: "js-primer", bio: null };
console.log(JSON.stringify(obj_stringify)); // => '{"id":1,"name":"js-primer","bio":null}'



