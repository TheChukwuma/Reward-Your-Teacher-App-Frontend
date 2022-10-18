import React from "react";
import ProfilePicture from "../../assets/LinkedlnProfilePic.jpeg";
import { ModalBodyStyles } from "./ModalBodyStyles";
import { Link } from "react-router-dom";

const ModalBody = ({ name, email, school, phoneNumber, id }) => {
  return (
    <ModalBodyStyles>
      <div className="body-top">
        <div className="profile-img">
          <img src={ProfilePicture} alt="Profile" />
        </div>
        <div className="top-text">
          <h4>{name}</h4>
          <p>{school}</p>
          <p>Teacher</p>
        </div>
      </div>
      <div className="body-middle">
        <div className="middle-heading">
          <p>About</p>
        </div>
        <div className="middle-text">
          <p>
            Hi, my name is {name}. I am a positive person who has an
            enthusiastic outlook on life. I love my job and I get a great sense
            of achievement from seeing my students develop and grow as
            individuals.
          </p>
        </div>
      </div>
      <div className="body-footer">
        <div className="footer-text">
          <p id="info">Other info</p>
          <p>{email}</p>
          <p>{phoneNumber}</p>
        </div>
        <div className="btn">
          <div className="btn1">
            <Link to="/reward" state={{ teacherName: name, phone: phoneNumber, id : id }}>
              <button>Send Reward</button>
            </Link>
          </div>
          <div className="btn2">
            <button>Send message</button>
          </div>
        </div>
      </div>
    </ModalBodyStyles>
  );
};

export default ModalBody;
