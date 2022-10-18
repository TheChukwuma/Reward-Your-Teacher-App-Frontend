import React from 'react';
import logo from '../../assets/Successfully Done.png';
import { Link, useLocation } from 'react-router-dom';
import './SuccessMessage.css';

const SuccessMessage = () => {

    const notification = useLocation().state.notification;

     console.log(notification)

  return (
    <div className="successMessage_overlay">
      <div className="content">
        <img src={logo} alt="success logo" />
        <h2>Reward Successfully Sent</h2>
        <p>{notification}</p>
        <button className="btn">
          <Link to="/dashboard/">Return To Dashboard</Link>
        </button>
      </div>
    </div>
  );
}

export default SuccessMessage