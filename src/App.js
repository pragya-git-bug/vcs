import logo from "./logo.svg";
// import {BrowserRouter as Route, Router, Routes,Link } from "react-router-dom";
import "./App.css";
import SingleData from './Components/CandidateDetailController/SingleCandidate/SingleData';
import InitialData from './Components/CandidateDetailController/InitialData/InitialData';
import GetResume64 from './Components/CandidateDocController/GetResume64/GetResume64';
import SignIn from "./Components/CandidateController/SignIn/SignIn";
import SignUp from "./Components/CandidateController/SignUp/SignUp";
import ChangePassword from "./Components/CandidateController/ChangePassword/ChangePassword";
import Otp from "./Components/CandidateController/Otp/Otp";
import NewPassword from "./Components/CandidateController/NewPassword/NewPassword";
import Apply from "./Components/CandidateDetailController/Apply/Apply";
// import ListOfJobs from "./Components/ListOfJobs/ListOfJobs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import NewPassword from './Components/NewPassword/NewPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/" element={<SingleData />} /> */}
        {/* <Route path="/" element={<InitialData />} /> */}
        {/* <Route path="/" element={<Apply />} /> */}
        {/* <Route path="/" element={<GetResume64 />} /> */}
        <Route path="/" element={<SignIn />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
       {/* <Route path="/lostpassword" element={<ChangePassword />} /> */}
        {/* <Route path='/otp' element={<Otp/>} /> */}
        {/* <Route path="/snlogin" element={<SignIn />} /> */}
        {/* <Route path="/newpassword" element={<NewPassword />} /> */}
        {/* <Route path="/login" element={<Apply />} />  */}
        {/* <Route path="/list" element={<ListOfJobs />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;


