import '../../style/register.modules.css'
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const auth = getAuth();
    const createUser = () => {
      createUserWithEmailAndPassword(auth, email, password).then(result => {
      // localStorage.setItem("isAuth", true);
      navigate("/question");
        }).catch((error) => {
          console.log(error.message)
          // user already exists
        })
    }

    return (
          <div className="register-container">
            <div className="create-account">
              <label htmlFor="Email"> Enter your email address: </label>
              <input type="Email" name="email" onChange={(e) => { setEmail(e.target.value) }}/>
              <label htmlFor="Password">Enter your password: </label>
              <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }}/>
              <button onClick={createUser}>Create Account</button>
            </div>
          </div>
    );
};

export default Register;