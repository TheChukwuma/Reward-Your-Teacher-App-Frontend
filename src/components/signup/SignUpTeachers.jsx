import React, { useState, useEffect } from "react";
import RewardLogo from "../../assets/RewardLogo.svg";
import {
  SignUpHeader1,
  SignUpWrapper,
  InputBox,
  Input,
  FormWrapper,
  ImageWrapper,
  RewardYourTeacher,
  SignUpWrapper1,
  SignUpWrapper2,
} from "./signup.style";
import axios from "../../api/axiosInstance";

const initialValues = {
  name: "",
  email: "",
  password: "",
  school: "",
  yearsOfService: "",
  subjectList: [],
  schoolType: "",
};

const SignUpTeachers = () => {
  const [cont, setCont] = useState(false);
  const [schools, setSchools] = useState([]);
  const [x, setX] = useState(1);
  const [values, setValues] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/register/teacher",
        values,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log(response);
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect((url, config) => {
    axios
      .get(`http://localhost:8081/api/v1/schools/all?page=0&size=115`)
      .then((response) => {
        console.log(response);
        setSchools(response.data.content);
      });
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    cont ? setX(1) : setX(2);
    setCont(!cont);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <SignUpWrapper>
        <RewardYourTeacher>
          <ImageWrapper>
            <img src={RewardLogo} alt="" />
          </ImageWrapper>
          <h1>Reward your Teacher</h1>
        </RewardYourTeacher>

        <SignUpHeader1>
          Sign Up as a Teacher <span> STEP {x} OF 2</span>
        </SignUpHeader1>

        <FormWrapper onSubmit={handleSubmit}>
          <SignUpWrapper1 style={{ display: !cont ? "block" : "none" }}>
            <InputBox>
              <label htmlFor="">Name</label>
              <Input
                placeholder="Enter name"
                type="text"
                name="name"
                onChange={handleChange}
                required
              />
            </InputBox>
            <InputBox>
              <label htmlFor="">Email</label>
              <Input
                placeholder="Enter email"
                type="text"
                name="email"
                onChange={handleChange}
                required
              />
            </InputBox>
            <InputBox>
              <label htmlFor="">Password</label>
              <Input
                placeholder="Enter password"
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
            </InputBox>
            <InputBox>
              <label htmlFor="">School where you taught</label>
              <select
                onChange={handleChange}
                name="school"
                placeholder="Type name of schools"
              >
                <option value="">SELECT SCHOOL</option>
                {schools.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </InputBox>
            <InputBox>
              {/* <button  onClick={handleClick}>Continue</button> */}
              <Input
                style={{ background: "#55A630", color: "#FFFFFF" }}
                onClick={handleClick}
                type="button"
                value=" Continue"
              />
            </InputBox>
          </SignUpWrapper1>

          <SignUpWrapper2 style={{ display: cont ? "block" : "none" }}>
            <Input
              style={{ border: "none", background: "#ffff", color: "#55A630" }}
              onClick={handleClick}
              type="button"
              value="Back"
            />
            <InputBox>
              <label htmlFor="">Years of Teaching</label>
              <Input
                placeholder="e.g 2012-2022"
                type="text"
                name="yearsOfService"
                onChange={handleChange}
              />
            </InputBox>
            <InputBox>
              <label htmlFor="">Subjects Taught</label>

              <select>
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
            </InputBox>

            <InputBox>
              <label htmlFor="">School Type</label>
              <select onChange={handleChange} name="schoolType">
                <option value="select">SELECT</option>
                <option value="PRIMARY">PRIMARY</option>
                <option value="SECONDARY">SECONDARY</option>
              </select>
            </InputBox>
            <InputBox>
              <Input
                style={{ background: "#55A630", color: "#FFFFFF" }}
                onClick={handleSubmit}
                type="submit"
                value=" Sign Up"
              />
            </InputBox>
          </SignUpWrapper2>
        </FormWrapper>
      </SignUpWrapper>
    </>
  );
};

export default SignUpTeachers;
