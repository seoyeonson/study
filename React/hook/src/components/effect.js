import React, { useState, useCallback, useEffect } from "react";

const Effect = () => {
    const [color, setcolor] = useState("red");
    const ChangeColor = useCallback(()=>{
        setcolor("blue");
    },[])

    useEffect(()=>{
        console.log("페이지 시작")
    },[])

    useEffect(()=>{
        console.log("색이 변경되었습니다")
    }, [color])

    return (
        <>
        <div>useEffect</div>
        <input type="text" readOnly value={color} style={{color}}/>
        <button onClick={ChangeColor}>변경</button>
        </>
    )
}

export default Effect;