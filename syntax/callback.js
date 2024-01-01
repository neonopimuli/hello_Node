function a() {
  console.log("A");
}
a;
a();

function slowfunc(callback) {
  callback();
}
slowfunc(a);

//함수는 변수값이 될 수 있다. =1급시민

//함수가 다른 함수의 변수값이 될수도 있음

var b = function () {
  console.log("B");
};
b();

val = function () {
  return "C";
};

function fn(callback) {
  callback();
}

fn(val);

//console.log(result);
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
//no1. callback
// function callback(element) {
//   //console.log(element);
//   if (element.length > 6) {
//     return true;
//   } else {
//     return false;
//   }
// }

//no2. callback
// function callback(element) {
//   return element.length > 6;
// }

//no3. callback function 이름 생략 1회용 function이므로 filter함수안에 넣음
// newWord = words.filter(function(element){
//     return element.length > 6;
// });

//no4. callback function도 생략 =>화살표, 파라미터 하나인 경우는 괄호도 필요없음
// newWord = words.filter(element=>{
//     return element.length > 6;
// });

//no5. callback 중괄호와 return도 필요없음
newWord = words.filter((element) => element.length > 6);

console.log(newWord);

//const result = words.filter(word => word.length > 6);   이것이 가장 간결한 최종 형태
//filter라는 함수는 첫번째 parameter로 콜백함수를 받도록 되어 있음
//arr.filter(callback(element[,index[,array]])) element 필수, [,index[,array]]은 옵셔널
//callback 각 요소를 시험할 함수. true를 반환하면 요소 유지, false를 반환하면 버림

function myfilter(origin, callback) {
  var result = [];
  for (var i = 0; i < origin.length; i++) {
    var current = origin[i];
    if (callback(current)) {
      result.push(current);
    }
  }
  return result;
}

newWord2 = myfilter(words, (element) => element.length > 6);

console.log(newWord2);
