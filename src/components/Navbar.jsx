import React from "react";
import ava from "../img/avatar.jpg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Goszip</span>
      <div className="user">
        <img src={ava} alt="" />
        <span>Tommy</span>
        <button>Log Out</button>
      </div>
    </div>
  );
};
