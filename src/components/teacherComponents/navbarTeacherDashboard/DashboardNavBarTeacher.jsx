import React from "react";
import { NavBarTeacherStyles } from "./DashboardNavBarTeacherStyles";
import RewardLogo from "../../../assets/RewardLogo.svg";
import { Link } from "react-router-dom";
import pics from "../../../assets/Ellipse 25.png";

const NavBarTeacher = ({ setShowMenu }) => {
  const data2 = localStorage.getItem("data");
  const obj = JSON.parse(data2);
  const userName = obj.name;
  console.log("data2 ", data2);
  console.log("username ", userName);

  const toggleMenu = () => {
    setShowMenu((prev) => {
      return !prev;
    });
  };

  return (
    <NavBarTeacherStyles>
      <div className="logo">
        <Link to="/">
          <img src={RewardLogo} alt="Reward Logo" />
        </Link>
        <h3>Reward your Teacher</h3>
      </div>
      <div className="profile" onClick={toggleMenu}>
        <img src={pics} class="profilePicture" alt="Reward Logo" />
        <Link className="userName">
          <h3>{userName}</h3>
        </Link>
      </div>
    </NavBarTeacherStyles>
  );
};

export default NavBarTeacher;
