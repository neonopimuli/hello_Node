var fs = require("fs"); //require : fs 모듈을 사용하겠다는 의미
fs.readFile("sample.txt", "utf8", function (err, data) {
  //readFile 파일을 읽는 기능, utf8 : 읽기 방식, 문자형태로 출력하도록 함
  console.log(data);
});
