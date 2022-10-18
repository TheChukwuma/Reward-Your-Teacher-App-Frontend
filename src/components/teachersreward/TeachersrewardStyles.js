import styled from "styled-components";

export const TeachersrewardStyles = styled.div`
  font-family: "Inter";
  font-style: normal;
  /* border: 2px solid red; */
  margin-top: 4%;
  display: flex;
  gap: 5%;
  background: rgba(0, 0, 0, 0.03);
  width: 100%;
  padding: 4.5% 10%;

  .left-side {
    width: 45%;
  }

  .quotes {
    display: flex;
    align-items: center;
    position: relative;
  }

  #quote1 {
    position: absolute;
    width: 53px;
    height: 182px;
    left: -1rem;
    top: -6rem;
    font-weight: 400;
    color: rgba(3, 67, 95, 0.1);
  }

  #quote2{
    position: absolute;
    width: 53px;
    height: 182px;
    left: 22rem;
    top: -1rem;
    font-weight: 400;
    color: rgba(3, 67, 95, 0.1);
  }

  .left-side h1 {
    font-weight: 700;
    font-size: 32px;
    color: #03435f;
    margin-bottom: 12%;
    line-height: 39px;
    width: 569px;
    height: 78px;
  }

  .left-side h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-size: 28px;
    line-height: 55px;
    color: #03435f;
    margin-bottom: 2%;
  }

  .right-side {
    width: 50%;
  }

  .right-side img {
    width: 576px;
    height: 516px;
    left: 741px;
    top: 66px;
  }
`;
