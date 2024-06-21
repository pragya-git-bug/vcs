import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Apply.css";

const Apply = () => {
  const [candidateId, setCandidateId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [overAllExperience, setOverAllExperience] = useState("");
  const [relevantExperience, setRelevantExperience] = useState("");
  const [rating, setRating] = useState("");
  const [qualification, setQualification] = useState("");
  const [yearOfPassing, setYearOfPassing] = useState("");
  const [techStack, setTechStack] = useState("");
  const [currentCTC, setCurrentCTC] = useState("");
  const [expectationCTC, setExpectationCTC] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [coverLetter, setCoverLetter] = useState(null);
  const [resume, setResume] = useState(null);
  const [relocate, setRelocate] = useState("yes");

  async function handleSubmit() {
    let item = { candidateId, name,email, designation,dateOfBirth,address,overAllExperience, relevantExperience,rating,qualification,yearOfPassing,techStack,currentCTC,expectationCTC,noticePeriod,coverLetter,resume,};
    console.log(item);
    const formData = new FormData();
    formData.append("candidateId", candidateId);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("designation", designation);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("address", address);
    formData.append("overAllExperience", overAllExperience);
    formData.append("relevantExperience", relevantExperience);
    formData.append("rating", rating);
    formData.append("qualification", qualification);
    formData.append("yearOfPassing", yearOfPassing);
    formData.append("techStack", techStack);
    formData.append("currentCTC", currentCTC);
    formData.append("expectationCTC", expectationCTC);
    formData.append("noticePeriod", noticePeriod);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);
    formData.append("relocate", relocate);
try {
    const response = await fetch("http://localhost:7004/candidate-handler/details/add/candidate-details", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Application submitted successfully!");
    } else {
      alert("Failed to submit application");
    }

    const result = await response.text();
      console.warn("result", result);
      localStorage.setItem("user-info", JSON.stringify(result));
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  return (
    <div className="containerr">
      <div className="header">
        <div className="text">Career Opportunities: Test Engineer</div>
      </div>
      <div className="forget-password">
        Already a registered user?
        <span>
          <Link to="/signup"> Sign Up!</Link>
        </span>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            placeholder="Candidate ID"
            value={candidateId}
            onChange={(e) => setCandidateId(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Overall Experience"
            value={overAllExperience}
            onChange={(e) => setOverAllExperience(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Relevant Experience"
            value={relevantExperience}
            onChange={(e) => setRelevantExperience(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Year of Passing"
            value={yearOfPassing}
            onChange={(e) => setYearOfPassing(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Tech Stack"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Current CTC"
            value={currentCTC}
            onChange={(e) => setCurrentCTC(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Expectation CTC"
            value={expectationCTC}
            onChange={(e) => setExpectationCTC(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Notice Period"
            value={noticePeriod}
            onChange={(e) => setNoticePeriod(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Cover Letter</label>
          <input
            type="file"
            onChange={(e) => setCoverLetter(e.target.files[0])}
          />
        </div>
        <div className="input">
          <label>Resume</label>
          <input
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
          />
        </div>
        <div className="input">
          <label>Relocate</label>
          <select
            value={relocate}
            onChange={(e) => setRelocate(e.target.value)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="submit-container">
          <button className="submit" onClick={handleSubmit}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
