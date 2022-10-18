import React, { useState, useEffect } from "react";
import "./DashboardProfileTeacher.css";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";

const DashboardProfileTeacher = () => {
  const [schools, setSchools] = useState([]);
  const info = localStorage.getItem("data");
  const obj = JSON.parse(info);
  const token = localStorage.getItem("token");
  const userName = obj.name;
  const email = obj.email;
  const userId = obj.id;
  const userSchool = obj.school;
  const userYearsOfService = obj.yearsOfService;
  const userSchoolType = obj.schoolType;
  const userPhone = obj.telephone;
  const initialValues = {
    id: userId,
    name: obj.name,
    telephone: userPhone,
    email: email,
    school: userSchool,
    yearsOfService: userYearsOfService,
    subjectList: [],
    schoolType: userSchoolType,
  };
  const [values, setValues] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await axios.put(
        `http://localhost:8081/api/v1/teachers/update/${userId}`,
        values,
        {
          headers: {
            Accept: "application/json",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="dashboardProfileTeacher">
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
            id="school"
            required
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
          <label for="yearsOfService">Years of Teaching</label>
          <div className="inputContainer">
            <input
              placeholder={userYearsOfService}
              type="text"
              name="yearsOfService"
              id="yearsOfService"
              className="dashboardProfileInput"
              onChange={handleChange}
            />
            <i className="icon">
              <AiFillEdit />
            </i>
          </div>
        </div>
        <div>
          <div>
            <label for="subject">Subjects Taught</label>
            <select
              className="dashboardProfileInput"
              id="subject"
              name="subjectList"
              // onChange={handleChange}
            >
              <option value="Select Subjects">SELECT</option>
              <option value="mathematics">MATHEMATICS</option>
              <option value="english">ENGLISH</option>
              <option value="physics">PHYSICS</option>
              <option value="chemistry">CHEMISTRY</option>
              <option value="commerce">COMMERCE</option>
              <option value="french">FRENCH</option>
              <option value="economics">ECONOMICS</option>
              <option value="biology">BIOLOGY</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <label for="schoolType">School Type</label>

            <select
              className="dashboardProfileInput"
              id="schoolType"
              onChange={handleChange}
              name="schoolType"
            >
              <option value="select">{userSchoolType}</option>
              <option value="PRIMARY">PRIMARY</option>
              <option value="SECONDARY">SECONDARY</option>
            </select>
          </div>
          <div>
            <button onClick={handleSubmit} type="submit">
              {" "}
              Update{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfileTeacher;
