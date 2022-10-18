import React, { useState } from "react";
import overviewIcon from "../../../assets/Vector.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import "./SidebarTeacher.css";
import { NavLink } from "react-router-dom";

const SidebarTeacher = () => {
  const [overview, setOverview] = useState(true);
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState(false);

  const handleOverview = () => {
    setOverview(true);
    setNotification(false);
    setMessage(false);
  };

  const handleNotification = () => {
    setNotification(true);
    setOverview(false);
    setMessage(false);
  };

  const handleMessage = () => {
    setMessage(true);
    setOverview(false);
    setNotification(false);
  };

  return (
    <aside className="sidebarTeacher">
      <ul className="sidebarItems">
        <NavLink to="/teacher/">
          {" "}
          <li
            className="overviewContainer"
            onClick={handleOverview}
            style={{ background: overview ? "#55A630" : "none" }}
          >
            <img src={overviewIcon} alt="" className="overviewImg" />
            <span className="overviewText">Overview</span>
          </li>
        </NavLink>
        <NavLink to="/teacher/notification">
          {" "}
          <li
            className="overviewContainer"
            onClick={handleNotification}
            style={{ background: notification ? "#55A630" : "none" }}
          >
            <i>
              <IoMdNotificationsOutline />{" "}
            </i>
            <span className="overviewText">Notifications</span>
          </li>
        </NavLink>
        <NavLink to="/teacher/message">
          {" "}
          <li
            className="overviewContainer"
            onClick={handleMessage}
            style={{ background: message ? "#55A630" : "none" }}
          >
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
export default SidebarTeacher;
