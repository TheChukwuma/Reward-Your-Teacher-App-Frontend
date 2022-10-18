import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MostRecentTransactionsTeacher.css";

const MostRecentTransactionsTeacher = () => {
  const [transactions, setTransactions] = useState([]);
  const token = localStorage.getItem("token");
  const FetchMostRecentTransactions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/v1/transactions/all`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(response.data.data);
      setTransactions(response.data.data.slice(-5));
      console.log(transactions);
    } catch (error) {}
  };

  useEffect(() => {
    FetchMostRecentTransactions();
  }, []);

  return (
    <div className="mostRecentTransactions">
      <div className="headingContainer">
        <h3>Most Recent</h3>
        <p>New</p>
      </div>

      {transactions.map((transaction) => {
        const { id, description, userId, createDate } = transaction;
        return (
          <div className="container">
            <div className="transactionDetails" key={id}>
              <p>{description}</p>
              <p>{createDate}</p>
            </div>
            <Link to="" state={{ senderId: userId }} className="viewStudent">
              View Student
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MostRecentTransactionsTeacher;
