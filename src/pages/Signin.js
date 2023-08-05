import React from "react";
import "../styles/signin_up.css";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <body>
        <div className="wrapper">
          <form action="/login" method="POST" className="form-box">
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
                />
                <i className="bx bx-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  name="password"
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
