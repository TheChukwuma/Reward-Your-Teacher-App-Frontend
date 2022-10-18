import React, { useState } from "react";
import overviewIcon from "../../assets/Vector.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [overview, setOverview] = useState(true);
  const [school, setSchool] = useState(false);
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState(false);

  const handleOverview = () => {
    setOverview(true);
    setSchool(false);
    setNotification(false);
    setMessage(false);
  }

  const handleSchool = () => {
    setSchool(true);
    setOverview(false);
    setNotification(false);
    setMessage(false);
  }

  const handleNotification = () => {
    setNotification(true);
    setOverview(false);
    setSchool(false);
    setMessage(false);
  }

  const handleMessage = () => {
    setMessage(true);
    setOverview(false);
    setSchool(false);
    setNotification(false);
  }

  return (
    <aside className="sidebar">
      <ul className="sidebarItems">
        <NavLink to="/dashboard/">
          {" "}
          <li className="overviewContainer" onClick={handleOverview}
          style={{background: overview ? "#55A630" : "none"}}
          >
            <img src={overviewIcon} alt="" className="overviewImg" />
            <span className="overviewText">Overview</span>
          </li>
        </NavLink>
        <NavLink to="/dashboard/school">
          {" "}
          <li className="overviewContainer" onClick={handleSchool}
          style={{background: school ? "#55A630" : "none"}}>
            <i>
              {" "}
              <FaSchool />{" "}
            </i>
            <span className="overviewText">Schools</span>
          </li>
        </NavLink>
        <NavLink to="/dashboard/notification">
          {" "}
          <li className="overviewContainer" onClick={handleNotification}
          style={{background: notification ? "#55A630" : "none"}}>
            <i>
              <IoMdNotificationsOutline />{" "}
            </i>
            <span className="overviewText">Notifications</span>
          </li>
        </NavLink>
        <NavLink to="/dashboard/message">
          {" "}
          <li className="overviewContainer" onClick={handleMessage}
          style={{background: message ? "#55A630" : "none"}}>
            <i>
              {" "}
              <AiOutlineMessage />{" "}
            </i>
            <span className="overviewText">Messaging</span>
          </li>
        </NavLink>
        <li className="overviewContainer logout">
          <i>
            {" "}
            <MdOutlineLogout />{" "}
          </i>
          <span className="overviewText">Logout</span>
        </li>
      </ul>
      <span></span>
    </aside>
  );
};
export default Sidebar;
