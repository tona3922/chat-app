import React from "react";
import ava from "../img/avatar.jpg";
// const imageClick = () => {
//   console.log("Click");
// };
export const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={ava} alt="" />
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={ava} alt="" />
      </div>
    </div>
  );
};
