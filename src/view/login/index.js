import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
// FIREBASE CONNECTION
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
`;

const Login = () => {
    const navigate = useNavigate()
    const auth = getAuth();
    const [data, setData] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const signInUser = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         // Signed in 

        // const user = userCredential.user;
        navigate('/home')
         // ...
        }).catch((error) => {
          console.log(error.message)
        });
    }

    useEffect(
        () =>
            onSnapshot(collection(db, "restaurant"), (snapshot) =>
                setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );

    return (
        <Container>
            <LoginContainer>
                <Image source="/logo.png" alt="logo" />
                <Space>
                    <input
                        type="text"
                        placeholder="email"
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }} />
                </Space>
                <Space>
                    <input
                        type="password"
                        placeholder="password"
                         onChange={(e) => {
                          setPassword(e.target.value)
                        }} />
                </Space>
                <Space>
                    <button onClick={signInUser}>Login</button>
                </Space>
            </LoginContainer>
            {email} | {password}
        </Container>
    );
};

export default Login;