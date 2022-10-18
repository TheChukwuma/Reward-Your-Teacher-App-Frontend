import React from "react";
import { TeachersrewardStyles } from "./TeachersrewardStyles";
import TeachersReward from "../../assets/TeachersReward.png";
import quote from "../../assets/quote.svg";
import quote2 from "../../assets/quote2.svg";

const Teachersreward = () => {
  return (
    <TeachersrewardStyles>
      <div className="left-side">
        <div className="quotes">
          <img id="quote1" src={quote} alt="quote" />
          <h1>The teacher's reward should no longer be in heaven.</h1>
          <img id="quote2" src={quote2} alt="quote" />
        </div>
        <h2>
          The teacher <b>motivates</b>
        </h2>
        <h2>
          The teacher <b>inspires</b>
        </h2>
        <h2>
          The teacher <b>equips</b>
        </h2>
        <h2>
          The teacher <b>loves</b>
        </h2>
      </div>
      <div className="right-side">
        <img src={TeachersReward} alt="Teachers" />
      </div>
    </TeachersrewardStyles>
  );
};

export default Teachersreward;
