import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Chat } from "../components/Chat";
import backpic from "../img/backgr.jpg";

export const Home = () => {
  return (
    <div
      className="home"
      style={{
        background: `url(${backpic})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
