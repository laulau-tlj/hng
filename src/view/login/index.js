import { useState, useEffect } from "react";
// FIREBASE CONNECTION
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase-config";
// DEPENDENCIES IMPORTATION
import styled from "styled-components";
import "../../style/login.modules.css";

const LoginContainer = styled.div `
  display: flex;
  flex-direction: column;
`;

const Login = () => {
    const [data, setData] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    useEffect(
        () =>
        onSnapshot(collection(db, "restaurant"), (snapshot) =>
            setData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id })))
        ), []
    );

    return (
        <div class="login">
            <div className="login-container">
                <div className="login-form">
                    <div className="login-img">
                        < img src="/logo.png" alt="logo"/></div>
                    <input className="login-border" type="text" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <div className="login-button">
                        < button> Login< /button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;