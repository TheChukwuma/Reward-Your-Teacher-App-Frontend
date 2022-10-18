import React, { useEffect, useState } from "react";
import axios from "axios";
import { WalletTeacherStyle } from "./WalletTeacher.style";

export default function WalletTeacher() {
  const [wallet, setWallet] = useState(0);
  const [transactions, setTransactions] = useState([]);

  //get token from local storage
  const token = localStorage.getItem("token");

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  async function FetchWalletBalance() {
    axios
      .get(`http://localhost:8081/api/v1/wallets`, {
        headers: {
          Authorization: `${token}`,
        },
        data: {},
      })
      .then((res) => {
        console.log(res.data);
        setWallet(formatter.format(res.data.data));
        console.log(wallet);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    FetchWalletBalance();
  }, []);

  const date = transactions.map((item) => {
    return item.createDate;
  });
  console.log("mydate", date);

  return (
    <WalletTeacherStyle>
      <div className="container">
        <div className="sub-container">
          <div className="subcontainerMoney">
            <p>My Wallet</p>
            <h1 className="amount">{wallet}</h1>
            <div>
              <p className="totalMoneyRecieved" style={{ color: "#c4c4c4" }}>
                Total Money Recieved
              </p>
            </div>
          </div>

          <div className="ptag">
            <p className="sideParagraph">Account is active</p>
          </div>
        </div>
      </div>
    </WalletTeacherStyle>
  );
}
