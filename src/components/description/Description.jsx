import React from "react";
import Steps from "../steps/Steps";
import { DescriptionStyles } from "./DescriptionStyles";
import HandImage from "../../assets/HandImage.svg";

const Description = () => {
  return (
    <DescriptionStyles>
      <div className="left-side">
        {/* <div className="left-details"> */}
          <h2>How it works</h2>
          <p id="left-text">The easiest way to show you care.</p>
          <Steps
            step="STEP ONE"
            header="Sign in / Sign up"
            text="Do this with your email and password or Google account to get started."
          />
          <Steps
            step="STEP TWO"
            header="Fund your Wallet as an Alumni"
            text="Move money from your bank account into your RewardyourTeacher Wallet and instantly begin to gift your teachers."
          />
          <Steps
            step="STEP THREE"
            header="Send Monetary Reward to a Teacher"
            text="Do it once, do it again and again! Let your teachers know that they are valued."
          />
        {/* </div> */}
      </div>
      <div className="right-side">
        <img src={HandImage} alt="Hand carrying gold chest" />
      </div>
    </DescriptionStyles>
  );
};

export default Description;
