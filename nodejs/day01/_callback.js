let error = false;

const a = (callback, error) => {
    if(error) {
        console.log(error);
    } else {
        callback();
    }
};

const b = () => {
    console.log("콜백 실행");
};

a(b, error);

// 만약 이런 콜백이 계속해서 중첩되면 콜백 지옥 현상
// 콜백 지옥

let  number = 5;
const errCallback = () => {
    // 실패 관련 로직
};

const callback = (number, callback) => {
    number = number + 1;
    console.log(number);
    if (callback) {
        setTimeout(callback, 500, number);
    }
};

callback(
    number,
    function(number){
        callback(
            number,
            function(number){
                callback(
                    number,
                    function(number){
                        callback(number);
                    },
                    errCallback()
                );
            },
            errCallback()
        );
    },
    errCallback()
);