import styled from "styled-components";

//styling for Wallet teacher.
export const WalletTeacherStyle = styled.div`
  /*position: absolute;*/
  width: 52.5rem;
  margin-left: 0px;
  background: #ffffff;
  margin-top: 2.5rem;
  height: 12.3125rem;
  box-shadow: 0px 4px 24px 4px rgba(0, 0, 0, 0.04);

  .container {
    display: flex;
    width: 100%;

    /* align-content: center; */
  }
  .sub-container {
    padding: 20px 0 20px 0;
    width: 44.5rem;
    display: flex;
    flex-direction: row;
    margin-left: 4rem;
    margin-right: 4rem;
    line-height: 1.2rem;
    justify-content: space-between;
  }

  .container .subcontainerMoney {
    height: 8.5rem;
    width: 13.37rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    color: white;
    margin-left: 15px;
  }

  .sub-container p {
    color: #55a630;
  }

  .amount {
    color: #03435f;
    font: Inter;
    font-size: 2rem;
    weight: 700;
    line-height: 2.25rem;
  }

  .ptag {
    width: 60%;
    background: rgba(128, 185, 24, 0.05);
    display: flex;
    justify-content: flex-end;
    border-top-left-radius: 8rem;
    border-bottom-left-radius: 3rem;
    /* transform: rotate(64.1deg); */
  }
  .sideParagraph {
    margin-right: 2.5rem;
    color: #55a630;
    padding: 5px;
    background-color: white;
    height: 20px;
    border-radius: 15px;
  }

  .side {
    width: 150px;
    height: 15%;
    justify-content: center;
    display: flex;
    background: white;
    text-align: center;
    align-items: center;
    padding-top: 12px;
    border-radius: 25px;
  }

  @media only screen and (max-width: 600px) {
    overflow-y: hidden;
    width: 100%;
    margin-left: 0px;
    .container {
      width: 100%;
    }
    .sub-container,
    .ptag {
      width: 50%;
    }
    .btn {
      width: 150px;
      height: 20px;
      border-radius: 4px;
      padding: 5px;
    }
    h3 {
      color: white;
      margin-left: 8px;
    }
    .container h1 {
      font-size: 20px;
    }

    .sideParagraph {
      background: none;
    }
  }
`;
