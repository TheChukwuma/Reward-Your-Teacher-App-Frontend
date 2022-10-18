import React from "react";
import { BannerStyles } from "./BannerStyles";
import BannerImage from "../../assets/BannerImage.svg";
import ConfettiParty from "../../assets/ConfettiParty.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
      <>
      <BannerStyles>
      <div className="left-side-banner">
        <div className="leftDetails">
          <h1>Send instant 
            heartfelt rewards to your teachers</h1>
          <p>
            A digital platform that digitizes the process of sending funds to
            teachers who have done their work with emphatic kindness.
          </p>
          <Link to="/signoption"><button>Get Started</button></Link>
        </div>
        <img src={ConfettiParty} alt="Confetti Party"  className="confetti"/>
      </div>
      <div className="right-side-banner">
        <img src={BannerImage} alt="Student teacher" />
      </div>
    </BannerStyles>
   
      </>
  );
};

export default Banner;
