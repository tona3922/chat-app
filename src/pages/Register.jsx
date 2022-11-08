import React from "react";
import Add from "../img/add-photo.png";
import backgr from "../img/background.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
// import { login } from "../pages/Login";
export const Register = () => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    const dname = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const ava = e.target[3].files[0];

    // chèn từ link firebase nhớ xóa getAuth
    //import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    //const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div
      className="formContainer"
      style={{
        background: `url(${backgr})`,
        backgroundPosition: "center",
        backgroundSize: "1600px",
      }}
    >
      <div className="formWrapper">
        <span className="logo">Goszip</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        {/* Already have an account ? <Link to="/login">Login</Link> */}
      </div>
    </div>
  );
};
