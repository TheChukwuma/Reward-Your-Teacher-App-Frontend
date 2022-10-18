import styled from "styled-components";

export const SendFundsStyles = styled.div`
  /* border: 2px solid blue; */
  width: 100%;
  /* height: 100%; */
  display: flex;
  padding-top: 3%;
  height: 444px;
  background: rgb(87, 187, 67);
  background: linear-gradient(
    90deg,
    rgba(87, 187, 67, 1) 28%,
    rgba(66, 225, 244, 1) 100%
  );

  .left-side {
    margin: 4% 10%;
    width: 50%;
    /* background: #FBBC05; */
    /* filter: blur(400px); */
  }

  .left-side h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 48px;
    color: #ffffff;
    margin-bottom: 5.5%;
  }

  .left-side p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    color: #ffffff;
    width: 450px;
    height: 96px;
  }

  .left-side-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 35%;
    height: 10%;
    background: #ffffff;
    border-radius: 4px;
    /* border: 2px solid red; */
  }

  .left-side-btn button {
    font-weight: 500;
    font-size: 14px;
    color: #80b918;
    border: none;
    background: #ffffff;
  }

  .right-side {
    width: 40%;
  }

  /* .right-side img {
  
  } */
`;
