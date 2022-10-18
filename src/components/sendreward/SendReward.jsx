import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
import { SendRewardStyle } from "./SendReward.style";
import SuccessMessage from "./SuccessMessage";

const SendReward = () => {
  const [name1, setName] = useState("");
  const [phoneNumber1, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const name = useLocation().state.teacherName;
  const id = useLocation().state.id;
  const phoneNumber = useLocation().state.phone;

  console.log("my id is",  id, phoneNumber);

  const token = localStorage.getItem("token");

  console.log("my token:", token);

  const handleSubmit = async (e) => {
    setTimeout(() => setLoading(false), 5000);

    console.log("submitting");
    setLoading(true);
    e.preventDefault();

    try {
      const resp = await axios.post(
        `http://localhost:8081/api/v1/students/reward?teacherId=${id}&amount=${amount}`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (resp.status === 200) {
        //   toast("Money sent");
        setIsModalOpen(true);
        console.log("working");
        console.log("response is: ", resp);

      }
      setNotification(resp.data.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      {isModalOpen && <SuccessMessage />}
      <SendRewardStyle>
        <form onSubmit={handleSubmit}>
          <div className="topDiv"></div>
          <div className="bottomDiv">
            <div className="textDiv">
              <div className="loginTextDiv">
                <p className="LoginText">Send Money</p>
              </div>
              <div className="LoginText2Div">
                <label htmlFor="email" className="LoginText2">
                  Name
                </label>
              </div>
              <input
                type="text"
                className="firstInput"
                onChange={(e) => setName(name)}
                value={name}
                readOnly
                placeholder={name}
              ></input>
              <div className="LoginText2Div">
                <p className="LoginText2">Phone Number</p>
              </div>
              <input
                type="text"
                className="firstInput"
                onChange={(e) => setPhoneNumber(phoneNumber)}
                value={phoneNumber}
                placeholder={phoneNumber}
                readOnly
              ></input>
              <div className="LoginText2Div">
                <p className="LoginText2">Amount</p>
              </div>
              <input
                type="text"
                className="firstInput"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              ></input>
              <div className="submiButtons">
                <button
                  type="submit"
                  className="submitButton1"
                  IsLoading={loading}
                >
                  Send
                </button>

                <button
                  type="submit"
                  className="submitButton2"
                  IsLoading={loading}
                >
                  Back
                </button>
              </div>
              <div className="loader">
                <ColorRing
                  visible={loading === true ? true : false}
                  height="80"
                  width="80"
                  margin-left="40px"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#55a630",
                    "#55a630",
                    "#55a630",
                    "#55a630",
                    "#55a630",
                  ]}
                />
              </div>
              <div></div>
              <ToastContainer />
            </div>
          </div>
        </form>
      </SendRewardStyle>
    </>
  );
};

export default SendReward;
