import React from "react";
import More from "../img/option.png";
import Video from "../img/video.png";
import { Messages } from "./Messages";
import { Input } from "./Input";
import ava from "../img/avatar.jpg";

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>
          <img src={ava} alt="" /> Jane
        </span>
        <div className="chatIcons">
          <img src={Video} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <div>
        <Messages />
        <Input />
      </div>
    </div>
  );
};
