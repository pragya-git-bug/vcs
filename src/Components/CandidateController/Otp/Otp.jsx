import React, { useState } from "react";
import "../SignIn/SignIn.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
const Otp = () => {
  // functionality to form

  //    const [action, setAction] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  async function ootp() {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('otp', otp);

    try {
      const response = await fetch(
        "http://localhost:7004/candidate-handler/Candidate/login-candidate/login-with-otp",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();
      console.warn("result", result);
      localStorage.setItem("user-info", JSON.stringify(result));
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }



  return (
    <div className="container">
      <div className="head">
        <img src={logo} className="logo" />
        <h1>Venture Consultancy Services</h1>
      </div>
      <div className="header">
        <div className="text">Login With Otp</div>
      </div>

      <div className="inputs">
        <div className="input">
          {/* <img src={email_icon} alt="email icon" /> */}
          <input
            value={email}
            type="email"
            placeholder="Email Id"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          {/* <img src={email_icon} alt="email icon" /> */}
          <input
            value={otp}
            type="email"
            placeholder="Enter Otp"
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
      </div>

      
      
      <Link to="/">
        <div className="submit-container" onClick={ootp}>
          <div className="submit">Submit</div>
        </div>
      </Link>
    </div>
  );
};

export default Otp;
