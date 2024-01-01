//배열(Array)
//배열은 괄호로 [,]사용

var members = ["egoing", "k8805", "hoya"];
//console.log(members[1]);

var i = 0;
while (i < members.length) {
  console.log("array loop", members[i]);
  i = i + 1;
}

//객체(Object)
//객체는 괄호로 {,}사용
//객체에 저장된 데이터 사용할 때는 객체 이름 다음에 점. 입력

var roles = {
  programmer: "egoing",
  designer: "k8805",
  manager: "hoya",
};
//console.log(roles.designer);
//console.log(roles["designer"]);

for (var name1 in roles) {
  console.log("object =>", name1);
}

for (var name1 in roles) {
  console.log("object =>", name1, "value =>", roles[name1]);
}
