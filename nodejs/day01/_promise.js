const state = true;

const promise = new Promise( (resolve, reject) => {
    if(state){
        resolve("성공");
    } else {
        reject("실패");
    }
});

/*
promise.then((message) => {
    // resolve (성공)
    console.log(message);
}).catch((error) => {
    // reject (실패)
    console.log(error);
}).finally(()=>{
    // 성공 실패 여부 상관없이
    console.log("무조건")
});
*/

promise
.then((message)=>{
    console.log(message);
    return message;
})
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error)
});

//

let number = 5;
const callback = (number) => {
    number = number + 1;
    setTimeout(()=>{
        console.log(number)
    }, 500);
    return number;
}

const promise2 = new Promise((resolve, reject)=>{
    resolve(callback(number));
    reject("실패");
})

promise2
    .then((result)=>{
        return callback(result);
    })
    .then((result2)=>{
        return callback(result2);
    })
    .then((result3)=>{
        return callback(result3);
    })
    .then((result4)=>{
        return callback(result4);
    })
    .catch((error)=>{
        console.log(error);
    });