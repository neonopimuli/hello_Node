var http = require("http");
var fs = require("fs"); //fs는 filesystem의 약자
var url = require("url"); // require는 node.js의 기능중 하나로 요구하는 의미. url이라는 모듈이 필요하다는 의미, module은 같은 범주의 기능을 모아놓은 집합

var app = http.createServer(function (request, response) {
  var _url = request.url; //사용자가 웹브라우저를 통해 요청한 URL
  //console.log(_url); //ex1.html

  var queryData = url.parse(_url, true).query; //node.js의 url 모듈에 들어 있는 parse 기능을 사용 ex) {id: 'HTML'} 과 같이 표시됨
  //괄호 안에 있는 _url은 사용자가 웹 브라우저를 통해 요청한 URL을 나타내는 request.url값을 가진 변수
  //이 값을 분석해서 쿼리 스트링 문자열만 추출
  //console.log(queryData);
  //console.log(queryData.id);

  var title = queryData.id;
  console.log(url.parse(_url, true));

  //if (_url == "/") {
  //_url = "/index.html";
  //     title = "Welcome";
  //   }
  //   if (_url == "/favicon.ico") {
  //     return response.writeHead(404);
  //   }
  //   response.writeHead(200);

  fs.readFile(`data/${queryData.id}`, "utf-8", function (err, description) {
    //사용자가 요청한 쿼리스트링으로 읽어올 파일을 구분
    //data내의 세 파일 중 쿼리 스트링의 id와 이름이 같은 파일을 읽어옴->해당 파일의 내용을 description변수에 저장
    var template = `
        <!doctype html>
        <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="index.html">WEB</a></h1>
                <ul>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ul>
                <h2>${title}</h2>
                <p>${description}</p>
            </body>
        `;
    //console.log(__dirname + _url); //웹브라우저가 요청한 파일의 경로를 콘솔에 출력, ex) /Users/parkyoungeun/hello_node/coding.jpg
    //response.end(fs.readFileSync(__dirname + _url));
    //response.end('parkyoungeun :' + url);
    //response.end() 는 웹서버가 요청에 응답하는 명령
    //이 때 괄호 안의 내용을 웹브라우저에 전달
    //node.js의 기능 중 fs.readFileSync를 이용해 웹브라우저가 요청한 파일(__dirname+url)을 읽어서 응답
    //response.end(queryData.id);
    response.writeHead(200);
    response.end(template);
    //console.log(__dirname + _url);
  });
});
app.listen(3000);
//localhost:3000의 의미 - 왼쪽은 접속하려는 컴퓨터의 주소, 오른쪽은 해당 컴퓨터의 어떤 포트로 요청을 전달할지 나타냄
