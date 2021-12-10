import React from "react";
import me from "../images/me.png";

function Profile() {
  return (
    <div className="profile">
      <img src={me} alt="" />

      <h1>
        Hi, I am Sagar Paul. I am a fullstack developer based in Kolkata, India.
        <br /> <br />
        I made this webapp as a fun project. I do not promote piracy of any
        kind.
        <br /> <br />
        Technologies used : React, Node/Express and npm packages like axios,
        cheerio etc
      </h1>
    </div>
  );
}

export default Profile;
