import React from "react";
import StudentWalletBalance from "../Wallet/WalletBalance";
import TotalMoneySent from "../totalMoneySent/TotalMoneySent";
import "./overview.css";

const overview = () => {
  return (
    <div className="overview">
      <h1 className="heading">My Dashboard</h1>
      <div className="studentWalletBalanceComp">
        <StudentWalletBalance />
      </div>
      <div className="totalMoneySentComp">
        <TotalMoneySent/>
      </div>
    </div>
  );
};

export default overview;


