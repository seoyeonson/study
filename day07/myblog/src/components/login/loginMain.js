import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useInput } from "../../hook/useInput";

const LoginMain = () => {

    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");

    return (
        <LoginFrom>
            <h1>로그인</h1>
            <div>
                <input 
                    type="text" 
                    value={email} 
                    onChange={onChangeEmail} 
                    placeholder="이메일을 입력해주세요" 
                    autoComplete="off" 
                    required
                />
            </div>
            <div>
                <input 
                    type="password" 
                    value={password} 
                    onChange={onChangePassword} 
                    placeholder="비밀번호를 입력해주세요" 
                    autoComplete="off" 
                    required
                />
            </div>
            <button>로그인</button>
            <Link to="/">아직 회원이 아니신가요?</Link>
        </LoginFrom>
    )
};
export default LoginMain;

const LoginFrom = styled.form`
    box-sizing: border-box;
    max-width: 50rem;
    max-height: 18.75rem;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    text-align: center;

    & h1 {
        color: #4f5681;
    }

    & input {
        box-sizing: border-box;
        width: 50%;
        margin: 0.1rem;
        padding: 0.35rem;
        font-size: 0.875rem;
        color: #666;
    }

    & input::placeholder {
        font-size: 0.875rem;
        color: #ccc;
    }

    & input:focus {
        outline: none;
        border: 1px solid #7784cc;
        box-shadow: 0 0 0 0.1rem rgb(59 65 99 / 25%);
    }

    & button {
        box-sizing: border-box;
        width: 50%;
        margin: 0.2rem;
        padding: 0.3rem 0;
        border: none;
        font-size: 0.875rem;
        color: #fff;
        background-color: #4f5681;
        cursor: pointer;
    }

    & button:hover{
        background: #3b4163;
    }

    & a {
        display: block;
        font-size: 0.875rem;
        color: #666;
    }
`;

const CheckMessage = styled.p`
    width: 50%;
    margin: 0 auto;
    font-size: 0.875rem;
    color: red;
    text-align: left;
`