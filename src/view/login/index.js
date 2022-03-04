import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
// FIREBASE CONNECTION
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
    const provider = new GoogleAuthProvider();
    const [data, setData] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [user, setUser] = useState({});
    const signInUser = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         // Signed in 
         setUser(userCredential.user)
        // const user = userCredential.user;
        navigate('/home',{ user

        })
         // ...
        }).catch((error) => {
          console.log(error.message)
        });
    };
    // connexion with google  account
      const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          navigate('/home')
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message)
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      }
       onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
        });

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
            <div className="Google">
              <button onClick={signInWithGoogle}>Sign in with your google account</button>
            </div>
        </Container>
          
    );
};

export default Login;