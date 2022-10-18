import styled from "styled-components";

export const NavBarStyles = styled.nav`
  width: 100%;
  display: flex;
  height: 92px;
  left: 0px;
  top: 0px;
  justify-content: space-between;
  padding: 2% 10%;
  background: #fff;
  position: sticky;
  z-index: 1;
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05));

  .logo-section {
    width: 30%;
    display: flex;
    align-items: center;
    gap: 2%;
    cursor: pointer;
  }

  .logo-section img {
    width: 39px;
    height: 39px;
  }

  .logo-section h3 {
    /* font-family: 'Inter'; */
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: #55a630;
  }

  .links-section {
    width: 60%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .links-section ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    gap: 2.3em;
  }

  .links-section li {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: #012a4a;
    cursor: pointer;
  }

  #home {
    font-weight: 700;
    color: #80b918;
  }

  .links-section button {
    background: #80b918;
    border-radius: 5px;
    padding: 2% 5%;
    border: none;
    color: #fff;
    margin-left: 5%;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
    gap: 10px;
    width: 6.25rem;
    height: 2.2rem;
    background: #80b918;
    border-radius: 4px;
    overflow-y:hidden
  }
`;
