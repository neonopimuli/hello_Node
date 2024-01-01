/*
var o = {
    v1:'v1',
    v2:'v2'
}

function f1(){
    console.log(o.v1);
}

function f2(){
    console.log(o.v2);
}
*/

//자바스크립트에서는 함수가 값이므로 객체의 멤버로 추가할 수 있음
//함수 f1,f2를 객체o의 멤버로 선언
//객체 안에서 자신을 참조할 경우 this를 사용
var o = {
  v1: "v1",
  v2: "v2",
  f1: function () {
    console.log(this.v1);
  },
  f2: function () {
    console.log(this.v2);
  },
};

o.f1();
o.f2();

//객체는 값을 담는 그릇
//서로 연관된 데이터와 서로 연관된 처리 방법을 객체에 담아서 사용
//객체는 궁극적으로 복잡한 코드를 정리정돈해서 코드의 복잡도를 개선하는 기본 기능에서 출발
