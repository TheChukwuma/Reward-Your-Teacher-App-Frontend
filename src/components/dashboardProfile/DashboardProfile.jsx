import React, { useState, useEffect } from "react";
import "./DashboardProfile.css";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";

const DashboardProfile = () => {
  const [schools, setSchools] = useState([]);
  const info = localStorage.getItem("data");
  const obj = JSON.parse(info);
  const token = localStorage.getItem("token");
  const userName = obj.name;
  const email = obj.email;
  const userPhone = obj.telephone;
  const userSchool = obj.school;
  const userId = obj.id;
  const initialValues = {
    id: userId,
    name: obj.name,
    email: email,
    telephone: userPhone,
    school: userSchool,
  };
  const [values, setValues] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await axios.put(
        `http://localhost:8081/api/v1/students/update`,
        values,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(response);
      console.log(values);
      const userInfo = values;
      localStorage.setItem("data", JSON.stringify(userInfo));
      window.location.reload();
      window.alert(`${userName}'s profile updated successfully!`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(
    (url, config) => {
      axios
        .get(`http://localhost:8081/api/v1/schools/all?page=0&size=115`)
        .then((response) => {
          setSchools(response.data.content);
        });
    },
    [schools]
  );

  return (
    <div className="dashboardProfile">
      <div className="heading">
        <h1>Profile</h1>
      </div>

      <div className="container">
        <div>
          <p className="dashboardProfileTextHeading">BASIC INFORMATION</p>
          <p className="dashboardProfileText">
            Only you can view or edit your information
          </p>
        </div>
        <div>
          <label for="name">Name</label>
          <div className="inputContainer">
            <input
              className="dashboardProfileInput"
              placeholder={userName}
              id="name"
              name="name"
              onChange={handleChange}
            />
            <i className="icon">
              <AiFillEdit />
            </i>
          </div>
        </div>
        <div>
          <label for="phone">Phone Number</label>
          <div className="inputContainer">
            <input
              className="dashboardProfileInput"
              placeholder={userPhone}
              id="phone"
              name="telephone"
              onChange={handleChange}
            />
            <i className="icon">
              <AiFillEdit />
            </i>
          </div>
        </div>
        <div>
          <label for="email">Email</label>
          <div className="inputContainer">
            <input
              className="dashboardProfileInput"
              placeholder={email}
              id="email"
              readOnly
            />
          </div>
        </div>
        <div>
          <label for="school">Name of School</label>
          <select
            className="dashboardProfileInput"
            onChange={handleChange}
            name="school"
            placeholder={userSchool}
          >
            <option value="">{userSchool}</option>
            {schools.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
