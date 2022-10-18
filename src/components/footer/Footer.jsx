import React from "react";
import FooterLogo from "../../assets/FooterLogo.svg";
import SocialLinks from "../../assets/SocialLinks.svg";
import Divider from "../../assets/Divider.svg";
import { FooterStyles } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer-logo">
        <img src={FooterLogo} alt="Footer Logo" />
        <h2>RewardTeacher</h2>
      </div>
      <div className="footer-links">
        <ul>
          <li>Home</li>
          <li>About Reward your Teacher</li>
          <li>Contact</li>
        </ul>
      </div>
      <img id='divider' src={Divider} alt="Divider Line" />
      <div className="footer-bottom">
        <div className="footer-left-side">
          <p>
            &copy; {new Date().getFullYear()} Reward Teacher. All rights
            reserved
          </p>
        </div>
        <div className="footer-right-side">
          <img src={SocialLinks} alt="Icons" />
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer;
