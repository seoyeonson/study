const express = require("express");
const app = express();

// app.set("port", process.env.PORT || 3000);
app.set("port", 3000);

app.get("/", (req, res) =>{
    res.send("Hello Express");
});

app.get("/login", (req, res) => {
    res.send("login Success");
});

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트 실행 중");
});
