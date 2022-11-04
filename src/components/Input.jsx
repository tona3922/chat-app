import React from "react";
import Attach from "../img/attach-file.png";
// import Add from "../img/add-photo.png";

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type here" />
      <div className="send">
        {/* <img src={Add} alt="" /> */}
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
