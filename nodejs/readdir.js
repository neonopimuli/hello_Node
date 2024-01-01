var testFolder = "./data";
var fs = require("fs");

fs.readdir(testFolder, function (error, filelist) {
  // 파일을 읽어오는 데는 fs모듈을 사용
  //그중 readdir이라는 기능을 사용하여 디렉토리에 있는 파일 목록이 filelist변수에 저장됨. 이를 출력해 확인
  console.log(filelist); //배열 형태로 출력됨
});
