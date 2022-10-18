import axios from "axios";
import React, { useEffect, useState } from "react";
import "./NotificationTeacher.css";

const Notification = () => {
  const [notifications, setNotification] = useState([]);
  const token = localStorage.getItem("token");

  const fetchNotification = async () => {
    try {
      const response = await axios
        .get(`http://localhost:8081/api/v1/notifications`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => {
          setNotification(response.data.data);
          console.log("all notifications ", notifications);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotification();
  }, []);

  return (
    <div className="notification">
      <div className="heading">
        <h1>Notification</h1>
      </div>
      {notifications.map((userNotification) => {
        const { id, notificationBody, createDate } = userNotification;
        return (
          <div className="container">
            <div className="content" key="id">
              <p>{createDate}</p>
              <p>{notificationBody}</p>
            </div>
            <div className="claimed">
              <p>Claimed</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notification;
