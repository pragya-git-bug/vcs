import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SignIn.css";
// imopt images
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import logo from "../Assets/logo.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signin() {
    let item = { email, password };
    console.log(item);

    let result = await fetch(
      "http://localhost:7004/candidate-handler/Candidate/login-candidate/login",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    console.warn("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    // history.push({SignUp})
  }

  return (
    <div className="container">
      <div className="head">
        <img src={logo} className="logo" />
        <h1>Venture Consultancy Services</h1>
      </div>
      <div className="header">
        <div className="text">Login</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Id"
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
      </div>

      <div className="forget-password">
        Don't have Account ?
        <span>
          <Link to="/signup"> Sign Up</Link>
        </span>
      </div>
      <div className="forget-password">
        Lost Password ?
        <span>
          <Link to="/lostpassword"> Click here !</Link>
        </span>
      </div>
      <div className="forget-password">
        {/* Lost Password ? */}
        <span>
          <Link to="/otp"> login with otp</Link>
        </span>
      </div>
      <Link to="/login">
        <div className="submit-container" onClick={signin}>
          <div className="submit">Login</div>
        </div>
      </Link>
    </div>
  );
};

export default SignIn;
