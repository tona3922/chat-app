import React from "react";
import Add from "../img/add-photo.png";
import backgr from "../img/background.jpg";
// import { login } from "../pages/Login";
export const Register = () => {
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
        <form>
          <input type="text" placeholder="Your name" />
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
