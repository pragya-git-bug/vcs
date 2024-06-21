import React, { useState } from "react";
import "../SignIn/SignIn.css";
// imopt images
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import logo from "../Assets/logo.png";
const NewPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  async function New() {
    let item = { email, password, confirmPassword, otp };
    console.log(item);

    let result = await fetch(
      "http://localhost:7004/candidate-handler/Candidate/reset-pass/candidate-res",
      {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      }
    );
    result = await result.text();
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
        <div className="text">Change Password</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input value={email} type="email" placeholder="Email Id"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            value={password}
            type="password"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            value={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

        </div>
        <div className="input">
        <img src={password_icon} alt="" />
          <input
            value={otp}
            type="text"
            placeholder="enter otp"
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
</div>

        <div className="submit-container" onClick={New}>
          <div className="submit">Change</div>
        </div>
      </div>
      );
};

      export default NewPassword;