import React from "react";
import {
  IoHomeOutline,
  GoPerson,
  IoDocumentTextOutline,
  TbListDetails,
  HiMiniInboxStack,
  TfiEmail,
} from "react-icons/io5";

import "./Navbarlinks.css";

function Navbarlinks() {
  return (
    <div className="links">
      <Navbarlink Icon={IoHomeOutline} link="/" name="Home" />
      <Navbarlink Icon={IoHomeOutline} link="/" name="About" />
      <Navbarlink Icon={IoHomeOutline} link="/" name="Resume" />
      <Navbarlink Icon={IoHomeOutline} link="/" name="Portfolio" />
      <Navbarlink Icon={IoHomeOutline} link="/" name="Services" />
      <Navbarlink Icon={IoHomeOutline} link="/" name="Contact" />
    </div>
  );
}

function Navbarlink({ Icon, link, name }) {
  return (
    <div className="cp">
      <a className="navbar-links" href={link}>
        <Icon className="svg" />
        <span className="link-name">{name}</span>
      </a>
    </div>
  );
}

export default Navbarlinks;
