import React, { useState } from "react";
import { Link } from "react-router-dom";

// import "../SignIn/SignIn.css";
// import email_icon from "../Assets/email.png";
// import logo from "../Assets/logo.png";

const CandidateDocController = () => {
  const [candidateId, setcandidateId] = useState("");

  async function resume() {
    const formData = new FormData();
    formData.append("candidateId", candidateId);

    try {
      const response = await fetch(
        "http://localhost:7004/candidate-handler/doc/get-resume/base-64",
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
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <h1>Venture Consultancy Services</h1>
      </div>
      <div className="header">
        <div className="text">Request to get resume</div>
      </div>
      <div className="inputs">
        <div className="input">
          {/* <img src={email_icon} alt="email icon" /> */}
          <input
            value={candidateId}
            type="text"
            placeholder="Enter Candidate Id"
            onChange={(e) => setcandidateId(e.target.value)}
          />
        </div>
      </div>

      {/* <Link to="/newpassword"> */}
        <div className="submit-container" onClick={resume}>
          <div className="submit">Submit</div>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default CandidateDocController;
