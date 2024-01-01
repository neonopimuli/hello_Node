//입력을 부르는 여러 가지 표현
//1. 매개변수(parameter): 프로그램에 필요한 값을 입력받는 형식
//2. 인수(argument) : 그 형식에 맞게 실제 입력하는 값

//Input, Output : IO
//콘솔에서 값을 입력하는 방법

var args = process.argv; //process 모듈에서 argv라는 기능을 실행해 그 결과를 argv 변수에 저장
console.log(args);

//결과 : 배열(array) 형식으로 출력됨
//['/usr/local/bin/node',           Node.js 런타임이 위치한 경로
//    '/Users/parkyoungeun/hello_node/syntax/conditional.js',          실행한 파일이 위치한 경로
//    'parkyoungeun', 'egoing']       프로그램을 실행할 때 입력한 값

console.log(args[2]); //배열에서 세번째 값을 가져옴

console.log("A");
console.log("B");
// if (true) {
//   console.log("C1");
// }
// if (false) {
//   console.log("C2");
// }
// else {
//   console.log("C2");
// }

if (args[2] === "1") {
  console.log("C1");
} else {
  console.log("C2");
}
console.log("D");
