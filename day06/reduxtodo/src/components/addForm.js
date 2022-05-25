import React, {useState} from "react"
import { useDispatch } from "react-redux";
import { INSERT_TODO } from "../reducer/todo";

const AddForm = ( {state} ) => {

    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");
    const onChangeHandler = (e) => {
        setTodo(e.target.value)
    }

    const onClickhandler = () => {
        dispatch({
            type: INSERT_TODO,
            data: {id: state[state.length-1].id+1, todo: todo}
        })
    }

    return (
        <>
            <input type="text" placeholder="할 일을 적어주세요" value={todo} onChange={onChangeHandler}/>
            <button onClick={onClickhandler}>추가</button>
        </>
    )
}
export default AddForm