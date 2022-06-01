const fs = require("fs");
let text = null;

try{
    text = fs.readFileSync("./text1.txt", "utf-8");
    console.log(text);
} catch (error) {
    console.log("동기식으로 파일 읽기 실패");
} finally {
    console.log("예외 발생 여부에 상관없이 수행");
}

fs.readFile("./text1.txt", "utf-8", (err,data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.readFile("./text2.txt", "utf-8", (err,data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.readFile("./day01.txt", "utf-8", (err,data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

// 만약 순서대로 데이터를 가져오고 싶다면
//fsPromise를 사용하거나 async/await을 사용해서 순서대로 뽑아오면됩니다