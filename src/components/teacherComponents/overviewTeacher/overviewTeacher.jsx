import React from "react";
import TeacherWalletBalance from "../walletTeacher/WalletTeacher";
import MostRecentTransactionsTeacher from "../mostRecentTransactionsTeacher/MostRecentTransactionsTeacher";
import "./overviewTeacher.css";

const overviewTeacher = () => {
  return (
    <div className="overviewTeacher">
      <h1 className="heading">My Dashboard</h1>
      <div className="teacherWalletBalanceComp">
        <TeacherWalletBalance />
      </div>
      <div className="mostRecentTransact">
        <MostRecentTransactionsTeacher />
      </div>
    </div>
  );
};

export default overviewTeacher;
