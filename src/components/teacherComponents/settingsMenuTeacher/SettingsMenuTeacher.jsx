import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { IoIosHelpCircleOutline, IoMdLogOut } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import "./SettingsMenuTeacher.css";

const SettingsMenuTeacher = () => {
  return (
    <div className="settingsMenu">
      <ul className="list-items">
        <Link to="/teacher/account/profile">
          <li className="item">
            <VscAccount />
            <span className="text">Account</span>
          </li>
        </Link>
        <Link>
          <li className="item">
            <AiOutlineSetting />
            <span className="text">Settings</span>
          </li>
        </Link>
        <Link>
          <li className="item">
            <IoIosHelpCircleOutline />
            <span className="text">Help Centre</span>
          </li>
        </Link>
        <Link>
          <li className="item">
            <IoMdLogOut />
            <span className="text">Logout</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SettingsMenuTeacher;
