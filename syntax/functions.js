//함수

//기본적인 함수 형태
function f123() {
  console.log("a");
  console.log("b");
  console.log("c");
}
f123();
//자바스트립트 기본 함수 예시

console.log(Math.round(1.6)); //2 여기에서 Math는 자바스크립트에 내장된 객체(함수의 집합) Math객체에 포함된 round라는 함수 사용
console.log(Math.round(1.4)); //1

//입력값을 받는 함수
function sum1(first, second) {
  console.log(first + second); //first, second처럼 함수의 입력값으로 전달받는 변수를 매개변수(parameter)라함
}

sum1(2, 4); //2,4처럼 함수를 호출할 때 전달하는 값을 인자(argument)라고 함

//함수가 자신을 호출한 쪽으로 값을 전달하려면 return이라는 키워드를 사용
//컴파일러는 return이라는 키워드를 만나면 함수를 종료하고 return 다음에 명시한 값을 호출한 위치에 반환
function sum2(first, second) {
  return first + second;
}

console.log(sum2(2, 4));

//return문 동작 실험: return문 이후에 명령이 있어도 생략하고 함수를 종료함
//return은 함수를 종료한다는 의미와 어떤 값을 반환한다는 두가지 의미가 있음
function sum3(first, second) {
  console.log("a");
  return first + second;
  console.log("b");
}
console.log(sum3(2, 4));
