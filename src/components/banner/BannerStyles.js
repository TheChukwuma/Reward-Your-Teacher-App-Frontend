import styled from "styled-components";

export const BannerStyles = styled.div`
  /* // border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  /* border:1px solid red; */
  

  .left-side-banner {
    width: 50%;
    /* margin-left: 0; */
  }

  .confetti {
    /* margin-left: -6.5rem;  */
    margin-top: 1.4rem;
  }

  .confetti img {
    width: 7.5rem;
  }

  .left-side-banner h1 {
    width: 524px;
    height: 219px;
    margin-bottom: 8%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    background: linear-gradient(104.55deg, #80b918 31.79%, #55a630 64.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .left-side-banner p {
    font-style: normal;
    color: #03435f;
    margin-bottom: 9%;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    width: 508px;
    height: 34px;
  }

  .left-side-banner button {
    background: #80b918;
    border-radius: 4px;
    padding: 2.3% 5%;
    border: none;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    width: 123px;
    height: 37px;   
  }

  .leftDetails {
    /* margin-left: auto;
    margin-right: auto; */
    /* text-align: left; */
    width: 50%;
    padding-left: 15%;
    padding-top: 5%;
    // height: 219px;
    // margin-top: 10%;
    /* padding: 20px; */
  }

  .right-side-banner {
    /* background: rgba(0, 0, 0, 0.03);
    object-fit: cover; */
    width: 50%;
    /* margin-bottom: 5%;
    display: flex;
    justify-content: center; */
  }

  .right-side-banner img {
    width: 90%;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
