function f1() {
  console.log(1 + 1);
  console.log(1 + 2);
}

/*
if문은 변수에 넣을 수 없음
var i = if(true){console.log(1)};
error

while문도 변수에 넣을 수 없음
var w = while(true){console.log(1)};
*/

//익명함수를 만들어서 변수를 선언
//자바스ㅡ립트의 함수는 처리구문이면서, 그 자체가 값이 될 수 있음

var f = function () {
  console.log(1 + 1);
  console.log(1 + 2);
};

//출력
console.log(f);
f();

//함수를 배열에 넣을 수 있음
var a = [f];

//배열에 있는 함수를 호출할수 있음
a[0]();

//객체를 선언하고 객체의 데이터, 즉 속성(properties)에 변수f를 이용

var o = {
  func: f,
};

o.func();
