const fs = require("fs");
const fsPromise = require("fs").promises;

const data = "Hello NodeJS!";

// fsPromise

fsPromise
    .writeFile("./text1.txt", data, "utf-8")
    .then(()=>{
        console.log("비동기식으로 파일 저장!");
    })
    .catch((error)=>{
        console.log(error);
    });
``;
/*
// 비동기식
fs.writeFile("./text1.txt", data, "utf-8", (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("비동기식으로 파일 저장!");
    }
});
*/

// 동기식
fs.writeFileSync("./text2.txt", data, "utf-8");