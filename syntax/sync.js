// 동기와 비동기 그리고 콜백

// 동기 처리 방식(synchronous) : 하나의 작업이 끝날 때까지 기다렸다가 다음 작업을 처리하는 방식
// 비동기 처리방식(asynchronous): 병렬로 동시에 여럭가지 일을 처리하는 방식

// 예 fs.readFile(path[, options], callback)
// fs.readFileSync(path[,options])

var fs = require("fs");

/*
//readFileSync
console.log("A");
var result = fs.readFileSync("syntax/sample.txt", "utf8");
console.log(result);
console.log("C");
*/

console.log("A");
fs.readFile("syntax/sample.txt", "utf8", function (err, result) {
  console.log(result);
});
console.log("C");
