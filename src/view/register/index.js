import { useState, useEffect } from "react";
//firebase connection
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase-config";
//dependencies importation
import styled from "styled-components";
//styled-components
import { Container } from "../../component/container";
import { StyledInput } from "../../component/input";
import { Image } from "../../component/image";
import { Space } from "../../component/space";
import "../../component/button";
import { StyledButton } from "../../component/button";


const RegisterContainer = styled.div `
    display: flex;
    flex-direction: column;
`;

const Register = () => {
    const [data, setData] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    useEffect(
        () =>
        onSnapshot(collection(db, "restaurant"), (snapshot) =>
            setData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id })))
        ), []
    );

    return ( 
        <Container>
            <RegisterContainer>
                <Image source="/logo.png" alt="logo" />
                <Space>
                    <StyledInput
                        type="text"
                        placeholder="name" />
                </Space>
                <Space>

                    <StyledInput
                        type="text"
                        placeholder="email" />
                </Space>
                <Space>
                    <label>
                        Password:
                    </label>
                    <StyledInput
                        type="password"
                        placeholder="password" />
                </Space>
                <Space>
                    <StyledButton>Register</StyledButton>
                </Space>
            </RegisterContainer>
        </Container>
    );
};

export default Register;