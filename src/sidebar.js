import React from "react";
import Profile from "./profile";
import SocialLinks from "./socialLinks";
import Navbarlinks from "./Navbarlinks";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <Profile className="profile" />
      <SocialLinks className="sociallinks" />
      <Navbarlinks />
    </div>
  );
}

export default Sidebar;
