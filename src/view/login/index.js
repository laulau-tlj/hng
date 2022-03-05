import { useState } from "react";
import "../../style/login.modules.css";
import axios from "axios";
import { server } from "../../tool";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleConnect = async () => {
    await axios.post(`${server}/login`, { email, password }, { withCredentials: true })
      .then(res => {
        if (res.data.status === "success") { navigate("/question") };
      });
  };

  return (
    <div class="login">
      <div className="login-container">
        <div className="login-form">
          <div className="login-img">
            <img src="/logo.png" alt="logo" className="styled-img" /></div>
          <input className="login-border" type="text" placeholder="email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
          <div className="login-button">
            <button className="loginButton" onClick={handleConnect}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;