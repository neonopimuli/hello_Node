var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
var template = require("./lib/template.js");
var path = require("path");
var sanitizeHtml = require("sanitize-html");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", function (error, filelist) {
        //console.log(filelist);
        var title = "Welcome";
        var descript = "Hello, Node.js";
        var list = template.list(filelist);
        var html = template.HTML(
          title,
          list,
          `<h2>${title}</h2><p>${descript}</p>`,
          `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    } else {
      fs.readdir("./data", function (error, filelist) {
        //console.log(filelist);
        var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, "utf-8", function (err, descript) {
          var title = queryData.id;
          var sanitizedTitle = sanitizeHtml(title);
          var sanitizedDescript = sanitizeHtml(descript, {
            allowedTags: ["h1"],
          });
          var list = template.list(filelist);
          var html = template.HTML(
            sanitizedTitle,
            list,
            `<h2>${sanitizedTitle}</h2><p>${sanitizedDescript}</p>`,
            `<a href="/create">create</a> <a href="/update?id=${sanitizedTitle}">update</a>
            <form action="delete_process" method="post" onsubmit="return confirm('정말로 삭제하시겠습니까?');">
                <input type="hidden" name="id" value="${sanitizedTitle}">
                <input type="submit" value="delete">
            </form>`
          );
          response.writeHead(200);
          response.end(html);
        });
      });
    }
  } else if (pathname === "/create") {
    fs.readdir("./data", function (error, filelist) {
      //console.log(filelist);
      var title = "Web - create";
      var list = template.list(filelist);
      var html = template.HTML(
        title,
        list,
        `<form action="/create_process" method="post">
          <p>
            <input type="text" name="title" placeholder ="title"/>
          </p>
          <p>
            <textarea name="descript" placeholder ="description"></textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>`,
        ""
      );
      response.writeHead(200);
      response.end(html);
    });
  } else if (pathname === "/create_process") {
    var body = "";
    request.on("data", function (data) {
      body = body + data;
    });
    request.on("end", function () {
      var post = qs.parse(body);
      var title = post.title;
      var descript = post.descript;
      //console.log(title);
      //console.log(descript);

      fs.writeFile(`data/${title}`, descript, "utf8", function (err) {
        response.writeHead(302, { Location: `/?id=${title}` });
        response.end();
      });
    });
  } else if (pathname === "/update") {
    fs.readdir("./data", function (error, filelist) {
      //console.log(filelist);
      var filteredId = path.parse(queryData.id).base;
      fs.readFile(`data/${filteredId}`, "utf-8", function (err, descript) {
        var title = queryData.id;
        var list = template.list(filelist);
        var html = template.HTML(
          title,
          list,
          `
          <form action="/update_process" method="post">
            <input type="hidden" name="id" value= "${title}">
            <p><input type="text" name="title" placeholder="title" value="${title}"></p>
            <p><textarea name="descript" placeholder="descrip">${descript}</textarea></p>
            <p><input type="submit"></p>
          </form>
          `,
          `<a href="/create">create</a><a href="/update?id=${title}">update</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    });
  } else if (pathname === "/update_process") {
    var body = "";
    request.on("data", function (data) {
      body = body + data;
    });
    request.on("end", function () {
      var post = qs.parse(body);
      var id = post.id;
      var title = post.title;
      var descript = post.descript;
      fs.rename(`data/${id}`, `data/${title}`, function (error) {
        fs.writeFile(`data/${title}`, descript, "utf8", function (err) {
          response.writeHead(302, { Location: `/?id=${title}` });
          response.end();
        });
      });
      //console.log(post);
      //console.log(descript);
    });
  } else if (pathname === "/delete_process") {
    var body = "";
    request.on("data", function (data) {
      body = body + data;
    });
    request.on("end", function () {
      var post = qs.parse(body);
      var id = post.id;
      var filteredId = path.parse(id).base;
      fs.unlink(`data/${filteredId}`, function (error) {
        response.writeHead(302, { Location: `/` });
        response.end();
      });
    });
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
});

app.listen(3000);
