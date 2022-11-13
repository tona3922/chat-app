import React from "react";
import ava from "../img/avatar.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Goszip</span>
      <div className="user">
        <img src={ava} alt="" />
        <span>Tommy</span>
        <button>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            Log Out
          </Link>
        </button>
      </div>
    </div>
  );
};
