import styled from "styled-components";

export const LoginStyles = styled.div`
  /* border: 2px solid red; */
  padding: 2% 25% 6% 25%;
  width: 100%;
  background: #f5f5f5;
  font-family: "Inter";
  font-style: normal;

  .logo {
    display: flex;
    justify-content: center;
    gap: 1%;
    margin-bottom: 4%;
  }

  .logo img {
    width: 5%;
  }

  .logo h2 {
    font-weight: 500;
    font-size: 24px;
    color: #55a630;
    margin-top: 8px;
  }

  .login {
    /* border: 2px solid blue; */
    padding: 8% 14%;
    background: #ffffff;
  }

  .login h3 {
    font-weight: 600;
    font-size: 18px;
    color: #21334f;
    margin-bottom: 6%;
  }

  form input {
    width: 100%;
    height: 7vh;
    margin: 2% 0%;
    border: 1px solid #ccc;
    text-indent: 1.2rem;
    font-size: 12px;
  }

  form label {
    font-weight: 400;
    font-size: 12px;
    color: #21334f;
  }

  placeholder {
    color: #c4c4c4;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: #c4c4c4;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #c4c4c4;
  }

  ::placeholder {
    color: #c4c4c4;
  }

  #link {
    text-decoration: none;
    font-size: 12px;
    color: #21334F;
  }

  #login-btn {
    background: #55a630;
    color: #fff;
    font-size: 12px;
    height: 7vh;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .or {
    display: flex;
    justify-content: center;
    gap: 4%;
    margin: 4% 0%;
  }

  .or p{
    font-size: 12px;
  }

  #line {
    width: 44.5%;
  }

  #google-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5%;
    font-weight: 400;
    font-size: 12px;
    color: #21334f;
    background-color: #fff;
    word-spacing: 2px;
    border: 1px solid #ccc;
    height: 6vh;
    margin-bottom: 7%;
  }

  #google-btn img{
    width: 5%;
  }

  .account {
    display: flex;
    justify-content: center;
    gap: 1%;
  }

  #first-paragraph {
    font-weight: 400;
    font-size: 12px;
    color: #21334f;
  }

  #second-paragraph{
    color: #80B918;
    font-size: 12px;
  }

  .error{
    display: flex;
    justify-content: center;
    color: red;
    font-size: 14px;
  }
`;
