import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/login.modules.css';
import axios from "axios";
import { server } from "../../tool";

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate()

  const handleRegister = async () => {
    await axios.post(`${server}/register`, { name, email, password }, { withCredentials: true })
      .then(res => {
        if (res.data.status === "success") { navigate("/login") };
      });
  };

  return (
    <div class="login">
      <div className="login-container">
        <div className="login-form">
          <div className="login-img">
            <img src="/logo.png" alt="logo" className="styled-img" />
          </div>
          <input type="text" placeholder="name" onChange={e => setName(e.target.value)} />
          <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
          <div className="login-button">
            <button className="loginButton" onClick={handleRegister}>Create account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;