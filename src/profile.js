import React from "react";
import "./Profile.css";
import profile from "../src/Assets/pandu.jpeg";
function Profile() {
  return (
    <div className="profile-container">
      <img src={profile} alt="Profile" />
      <h2 className="name">Shree Naresh</h2>
    </div>
  );
}

export default Profile;
