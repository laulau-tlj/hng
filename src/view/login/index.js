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

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const Login = () => {
    const [data, setData] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    useEffect(
        () =>
            onSnapshot(collection(db, "restaurant"), (snapshot) =>
                setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );

    console.log("e", email)

    return (
        <Container>
            <LoginContainer>
                <Image source="/logo.png" alt="logo" />
                <Space>
                    <StyledInput
                        type="text"
                        placeholder="email"
                        onChange={e => setEmail(e.target.value)} />
                </Space>
                <Space>
                    <StyledInput
                        type="password"
                        placeholder="password" />
                </Space>
                <Space>
                    <StyledButton>Login</StyledButton>
                </Space>
            </LoginContainer>
        </Container>
    );
};

export default Login;