// import React, { useState } from "react";
// // import {useHistory} from 'react-router-dom'
// import { Link } from "react-router-dom";
// import "../SignIn/SignIn.css";
// // imopt images
// import user_icon from "../Assets/person.png";
// import email_icon from "../Assets/email.png";
// import password_icon from "../Assets/password.png";
// import logo from "../Assets/logo.png";

// // const history=useHistory();
// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function signup() {
//     let item = { name, email, password };
//     console.log(item);

//     let result = await fetch("http://localhost:7004/candidate-handler/Candidate/add-candidate", {
//       method: "POST",
//       body: JSON.stringify(item),
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//       },
//     });
//     result = await result.json();
//     console.warn("result", result);
//     localStorage.setItem("user-info", JSON.stringify(result));
//     // history.push({SignUp})
//   }

//   return (
//     <div className="container">
//       <div className="head">
//         <img src={logo} className="logo" />
//         <h1>Venture Consultancy Services</h1>
//       </div>
//       <div className="header">
//         <div className="text">Sign Up</div>
//       </div>
//       <div className="inputs">
//         <div className="input">
//           <img src={user_icon} alt="" />
//           <input
//             value={name}
//             type="text"
//             placeholder="Name"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="input">
//           <img src={email_icon} alt="" />
//           <input
//             value={email}
//             type="email"
//             placeholder="Email Id"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={password_icon} alt="" />
//           <input
//             value={password}
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//       </div>
//       <Link to="/snlogin">
//         <div className="submit-container" onClick={signup}>
//           <div className="submit">Sign Up</div>
//           {/* <div className="submit">Login</div> */}
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default SignUp;





// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../SignIn/SignIn.css";
// // import images
// import user_icon from "../Assets/person.png";
// import email_icon from "../Assets/email.png";
// import password_icon from "../Assets/password.png";
// import logo from "../Assets/logo.png";

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function signup() {
//     let item = { name, email, password };
//     console.log(item);

//     try {
//       let response = await fetch("http://localhost:7004/candidate-handler/Candidate/add-candidate", {
//         method: "POST",
//         body: JSON.stringify(item),
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//         },
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(errorText);
//       }

//       let result = await response.json();
//       console.warn("result", result);
//       localStorage.setItem("user-info", JSON.stringify(result));
//       // history.push({SignUp})
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   }

//   return (
//     <div className="container">
//       <div className="head">
//         <img src={logo} className="logo" alt="logo" />
//         <h1>Venture Consultancy Services</h1>
//       </div>
//       <div className="header">
//         <div className="text">Sign Up</div>
//       </div>
//       <div className="inputs">
//         <div className="input">
//           <img src={user_icon} alt="user icon" />
//           <input
//             value={name}
//             type="text"
//             placeholder="Name"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="input">
//           <img src={email_icon} alt="email icon" />
//           <input
//             value={email}
//             type="email"
//             placeholder="Email Id"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={password_icon} alt="password icon" />
//           <input
//             value={password}
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//       </div>
//       <Link to="/snlogin">
//         <div className="submit-container" onClick={signup}>
//           <div className="submit">Sign Up</div>
//           {/* <div className="submit">Login</div> */}
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default SignUp;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../SignIn/SignIn.css";
// import images
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import logo from "../Assets/logo.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function signup() {
    let item = { name, email, password };
    console.log(item);

    try {
      let response = await fetch("http://localhost:7004/candidate-handler/Candidate/add-candidate", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      let result = await response.json();
      console.warn("result", result);
      localStorage.setItem("user-info", JSON.stringify(result));
      // Redirect or perform any other action after successful signup
    } catch (error) {
      console.error("Error:", error.message);
      // Check if the error message contains information about a duplicate email
      if (error.message.includes("duplicate key value violates unique constraint")) {
        setErrorMessage("Email already exists. Please use a different email.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  }

  return (
    <div className="container">
      <div className="head">
        <img src={logo} className="logo" alt="logo" />
        <h1>Venture Consultancy Services</h1>
      </div>
      <div className="header">
        <div className="text">Sign Up</div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="user icon" />
          <input
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input
            value={email}
            type="email"
            placeholder="Email Id"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Link to="/snlogin">
        <div className="submit-container" onClick={signup}>
          <div className="submit">Sign Up</div>
        </div>
      </Link>
    </div>
  );
};

export default SignUp;
