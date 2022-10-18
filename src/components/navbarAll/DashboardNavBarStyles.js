import styled from "styled-components";

export const NavBarStyles = styled.nav`
    display :flex;
    justify-content: space-between;
    position:fixed;
    z-index: 9999;
    align-items: center;
    padding: 0rem 2rem;
    width: 90rem;
    height: 6rem;
    left: 0;
    top: 0;
    background: #FFFFFF;
    box-shadow: 0px 1px 5px .1px rgb(186, 184, 184);

  .logo {
    width: 30%;
    display: flex;
    align-items: center;
    gap: 2%;
    cursor: pointer;
  }

  .logo img {
    width: 39px;
    height: 39px;
    
  }

  .logo h3 {
    /* font-family: 'Inter'; */
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: #55a630;
  }

  .profile {
    display :flex;
    justify-content: center;
    align-items: center;
  }

  .profile ul {
    list-style: none;
    gap: 2.3em;
  }

  .profile li {
    font-style: normal;
    font-weight: 400;
    font-size: .75rem;
    color: #ff55ff;
    cursor: pointer;
  }

  .profile .profilePicture{
    margin-right: 0.5rem;
  }

  .profile a {
    text-decoration: none;
  }

  .profile a : visited {color: #012A4A;}
  
  
`;
