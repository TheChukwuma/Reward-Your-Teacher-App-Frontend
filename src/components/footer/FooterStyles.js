import styled from "styled-components";

export const FooterStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  /* gap: 49px; */
  background: #000000;
  width:100%;

  .footer-logo {
    /* border: 2px solid yellow; */
    display: flex;
    width: 26%;
    justify-content: center;
    margin-bottom: 5%;
    margin-left: 9%;
  }

  .footer-logo img {
    width: 60%;
  }

  .footer-logo h2{
    font-size: 24px;
  }

  #divider {
    width: 95%;
  }

  .footer-links {
    /* border: 4px solid red; */
    display: flex;
    color: #fff;
    width: 50%;
    justify-content: center;
    align-items: center;
  }

  .footer-links ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    gap: 2.6em;
    margin-bottom: 8%;
  }

  .footer-links li {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-size: 1rem;
    cursor: pointer;
    font-feature-settings: "liga" off;
    color: #f2f2f2;
  }

  .footer-bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 2%;
  }

  .footer-left-side {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    font-feature-settings: "liga" off;
    color: #ffffff;
    width: 70%;
  }

  .footer-left-side p{
    font-size: 14px;
  }

  .footer-right-side {
    width: 20%;
    display: flex;
    justify-content: center;
    font-size: 30px;
    cursor: pointer;
  }

  .footer-right-side img {
    width: 40%;
  }
`
