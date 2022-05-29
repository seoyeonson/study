import React from "react";
import {Nav} from "react-bootstrap";

const AppLayout = ( {children} ) => {
    return (
        <>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/">메인</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/login">로그인</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/sign">회원가입</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>{children}</div>
        </>
    )
}
export default AppLayout;