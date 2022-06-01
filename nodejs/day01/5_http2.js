const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    fs.readFile("./test.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  })
  .listen(3000, () => {
    console.log("3000번 포트로 실행중...");
  });

// 상황에 맞는 html과 data를 res로 보내게 되면 서버로서 활용 가능
// ex) req.method와 req.url을 프론트에서 보내주면 해당 url과 method를
// 백엔드 서버에서 읽어내고 해당 url에 맞는 data를 보내줌

// localhost/login => req.url === /login ?, id,pw ===> 사용자 정보를 res로 보내주면?
// http 모듈 말고 다양한 기능을 지원하는 express 모듈이 있기 때문에

// http는 원리를 이해하는 정도로만 사용해도 좋습니다
