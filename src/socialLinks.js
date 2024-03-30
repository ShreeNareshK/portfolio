import React from "react";
import "./sociallinks.css";
import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialLinkedin,
  SlSocialGithub,
} from "react-icons/sl";

function SocialLinks() {
  return (
    <div className="social-links">
      <Sociallink
        Icon={SlSocialLinkedin}
        link="https:www.linkedin.com/in/shree-naresh

"
      />
      <Sociallink
        Icon={SlSocialGithub}
        link="https://github.com/ShreeNareshK"
      />
      <Sociallink Icon={SlSocialInstagram} link="/" />
      <Sociallink Icon={SlSocialFacebook} link="/" />
      <Sociallink Icon={SlSocialTwitter} link="/" />
    </div>
  );
}

function Sociallink({ Icon, link }) {
  return (
    <div className="platform">
      <a href={link} className="platform-link">
        <Icon className="svg" />
      </a>
    </div>
  );
}

export default SocialLinks;
