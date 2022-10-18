import styled from "styled-components";

export const ModalBodyStyles = styled.div`
  font-family: "Inter";
  font-style: normal;
  /* border: 2px solid blue; */
  padding: 3% 5%;

  .body-top {
    width: 100%;
    display: flex;
    gap: 2.5%;
    margin-bottom: 10px;
  }

  .profile-img img {
    width: 85px;
    /* height: 100px; */
    border-radius: 50%;
  }

  .top-text h4 {
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    color: #03435f;
    margin-bottom: 3px;
  }

  .top-text p {
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: #03435f;
    margin-bottom: 4px;
  }

  .body-middle {
    /* border: 2px solid red; */
  }

  .middle-heading {
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: #c4c4c4;
    margin-bottom: 5px;
  }

  .middle-text {
    font-weight: 200;
    font-size: 15px;
    line-height: 26px;
    color: #03435f;
    margin-bottom: 8%;
  }

  .footer-text p {
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: #03435f;
    margin-bottom: 7px;
  }

  #info {
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: #c4c4c4;
  }

  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10%;
    margin-top: 25px;
  }

  .btn1 button {
    padding: 12px 35px;
    font-weight: 500;
    font-size: 14px;
    background: #55a630;
    border-radius: 4px;
    border: none;
    color: #ffffff;
  }

  .btn2 button {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #03435f;
    background-color: #c4c4c4;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    padding: 12px 26px;
    border: none;
  }
`;
