//배열과 반복문

var number = [1, 400, 12, 34, 5];

var i = 0;

while (i < 5) {
  console.log(number[i]);
  i = i + 1;
}

//배열의 크기가 변하더라도 모두 출력 가능
var number2 = [1, 400, 12, 34, 5, 1000];
var i = 0;

while (i < number2.length) {
  console.log(number2[i]);
  i = i + 1;
}

//합계구하기
var number3 = [1, 400, 12, 34, 5, 1000];
var i = 0;
total = 0;

while (i < number3.length) {
  total = total + number3[i];
  i = i + 1;
}
console.log(`total : ${total}`);
