import React from "react";
import backgr from "../img/background.jpg";

export const Login = () => {
  return (
    // <div>Hello</div>
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
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>
          {/* Don't have an account? <Link to="/register">Register</Link> */}
        </p>
      </div>
    </div>
  );
};
