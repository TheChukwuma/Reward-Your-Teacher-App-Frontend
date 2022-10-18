import React from "react";
import "./SendRewardPaystack.css";

const SendRewardPaystack = () => {
  return (
    <>
      <div className="popups">
        <div>
          <div style={{ borderBottom: "2px #286D5D solid" }}>
            <h2 style={{ textAlign: "center", color: "#286D5D" }}>
              Pay with PayStack
            </h2>
            <h1
              style={{
                position: "absolute",
                right: "10px",
                top: "-28px",
                color: "#286D5D",
              }}
            >
            </h1>
          </div>
          <div>
            <div style={{ color: "grey", fontSize: "20px" }}>Amount</div>
            <div
              style={{
                color: "#286D5D",
                fontSize: "30px",
                paddingBottom: "20px",
                fontWeight: "600",
              }}
            >
              N20,000
            </div>
            <div style={{ width: "70%", margin: "0 auto" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <bottom
                  style={{
                    flexGrow: "1",
                    backgroundColor: "#27ae60",
                    fontFamily: "helvetica",
                    color: "white",
                    padding: "17px 15px",
                    fontSize: "22px",
                  }}
                >
                  PAY WITH CARD
                </bottom>
                <bottom
                  style={{
                    flexGrow: "1",
                    backgroundColor: "#dfe6e9",
                    color: "grey",
                    padding: "17px 15px",
                    fontSize: "22px",
                  }}
                >
                  PAY WITH BANK
                </bottom>
              </div>
              <div style={{ position: "relative", padding: "30px 0px" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "20px",
                    top: "22px",
                    backgroundColor: "white",
                  }}
                >
                  Card Number
                </span>
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  style={{ padding: "20px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    padding: "0px 0px",
                    width: "36%",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "20px",
                      top: "-8px",
                      backgroundColor: "white",
                    }}
                  >
                    Valid Till
                  </span>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    style={{ padding: "20px", width: "100%" }}
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    padding: "0px 0px",
                    width: "50%",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "20px",
                      top: "-8px",
                      backgroundColor: "white",
                    }}
                  >
                    CVV
                  </span>
                  <input
                    type="text"
                    placeholder="123"
                    style={{ padding: "20px" }}
                  />
                </div>
              </div>
              <div style={{ width: "100%", paddingTop: "40px" }}>
                <button
                  style={{
                    backgroundColor: "#27ae60",
                    width: "inherit",
                    color: "white",
                    border: "none",
                    padding: "20px 40px",
                    fontSize: "20px",
                    paddingTop: "20px",
                  }}
                >
                  Pay NGR 20,000
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendRewardPaystack;
