const number = 5;

const callback = (number) => {
    number = number + 1;
    setTimeout(()=>{
        console.log(number)
    }, 500);
    return number;
}

const async = async (number) => {
    try{
        let result = await callback(number);
        result = await callback(result);
        result = await callback(result);
        result = await callback(result);
        result = await callback(result);
    } catch {
        console.log("실패");
    }
};

async(number);