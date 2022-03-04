import { useState, useEffect } from "react";
// FIREBASE CONNECTION
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase-config";
// DEPENDENCIES IMPORTATION
import styled from "styled-components";
// STYLED-COMPONENTS
import { Container } from "../../component/container";
import { StyledInput } from "../../component/input";
import { Image } from "../../component/image";
import { Space } from "../../component/space";
import { StyledButton } from "../../component/button";

const Login = () => {
    const [data, setData] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <div>
            <div>
                <img source="/logo.png" alt="logo" />
                <input
                    type="text"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder="password" />
                <button>Login</button>
            </div>
        </div>
    );
};

export default Login;