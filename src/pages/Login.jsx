import React, { useEffect, useState } from "react";
import backgr from "../img/background.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

export const Login = () => {
  const [err, seterr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Navigate("/login");
    } catch (err) {
      seterr(true);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Please retry (longer password maybe?)</span>}
        </form>
        <p>
          Don't have an account ?{"  "}
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
