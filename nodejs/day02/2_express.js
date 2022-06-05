const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.set("port", 3000);

// morgan
// dev, combined, common, short, tiny 등을 넣을 수 있음
app.use(morgan("dev"));

// static
// express 탑재, 정적인 파일을 제공
app.use("/", express.static(path.join(__dirname, "public")));

// => public/style/style.css <= 이렇게 치면
// => localhost:3000/public/style.style.css
// 여기에 접근 가능 (실제 데이터 있는 곳)

// bodyParser
// express 4.16.0부터 탑재

app.use(express.json()); // 제이슨 데이터도 허용
app.use(express.urlencoded({extended: false}));
// url 에 있는 정보를 express 내에 있는 해석들로 읽을 것이냐
// 아니면 qs <-- 다른 모듈을 사용해서 읽을 것이냐

app.get("/body", (req, res)=>{
    res.sendFile(__dirname + "/_body.html");
});

app.get("/", (req, res)=>{
    res.send("Hello morgan");
});

app.post("/body", (req, res)=>{
    console.log(req.body);
    res.write("Login Success");
    res.write(`<p>userid: ${req.body.user_id}`);
    res.end();
})
app.listen(app.get("port"), ()=>{
    console.log( app.get("port"),"번 포트에서 실행중");
});