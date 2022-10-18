import React from "react";
import { LogoutStyles } from './LogoutStyles'

const Logout = ({handleLogout, closeModal}) => {
  return (
    <div>
      <LogoutStyles>
        <div className="Modal-Area">
          <div className="Modal-content">
            <div className="Modal-header">
              <p>Logout Confirmation</p>
            </div>
            <div className="Modal-body">
              <p>Are you sure you want to logout from your account?</p>
            </div>
            <div className="Modal-footer">
              <button id="yes" onClick={(e) => handleLogout(e)}>Yes</button>
              <button id="no" onClick={()=>closeModal(false)}>No</button>
            </div>
          </div>
        </div>
      </LogoutStyles>
    </div>
  );
};
export default Logout;