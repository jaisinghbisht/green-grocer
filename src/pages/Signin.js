import React, { useState } from "react";
import "../styles/signin_up.css";
import { Link, useNavigate } from "react-router-dom";
//import axios from 'axios';

const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      alert("invaild credentilas");
    } else {
      alert("login successful");
      // navigate("/Home");
      //window.location.href = '/home';
    }
  };

  return (
    <div>
      <body>
        <div className="wrapper">
          <form onSubmit={handleSubmit} method="POST" className="form-box">
            <div className="login-container" id="login">
              <div className="top">
                <span>
                  Don't have an account? <Link to="/Signup">Register</Link>
                </span>
                <header>Log In</header>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i className="bx bx-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="bx bx-lock-alt"></i>
              </div>
              <div className="input-box">
                <input type="submit" className="submit" value="Sign In" />
              </div>
              <div className="two-col">
                <div className="one">
                  <input type="checkbox" id="login-check" />
                  <label for="rlogin-check">Remember Me</label>
                </div>
                <div className="two"></div>
              </div>
            </div>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Signin;
