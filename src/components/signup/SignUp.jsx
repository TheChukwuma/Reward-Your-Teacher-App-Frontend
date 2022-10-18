import React, { useState, useEffect } from "react";
import RewardLogo from "../../assets/RewardLogo.svg";
import Google from "../../assets/Google.svg";
import { Link } from "react-router-dom";
import axios from "../../api/axiosInstance";
import {
  SignUpHeader,
  SignUpWrapper,
  InputBox,
  Input,
  FormWrapper,
  ImageWrapper,
  RewardYourTeacher,
  LineSection,
  GoogleSignUpLink,
  GoogleSignUpBox,
  AccountCheck,
  ImageWrapper1,
} from "./signup.style";

const initialValues = {
  name: "",
  email: "",
  password: "",
  school: "",
};

const SignUp = () => {
  const [schools, setSchools] = useState([]);
  const [values, setValues] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/register/student",
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect((url, config) => {
    axios
      .get(`http://localhost:8081/api/v1/schools/all?page=0&size=115`)
      .then((response) => {
        console.log(response.data.content);
        setSchools(response.data.content);
        console.log(schools);
      });
  }, [schools]);

  return (
    <>
      <SignUpWrapper>
        <RewardYourTeacher>
          <ImageWrapper>
            <img src={RewardLogo} alt="" />
          </ImageWrapper>
          <h1>Reward your Teacher</h1>
        </RewardYourTeacher>

        <FormWrapper onSubmit={handleSubmit} autoComplete="off">
          <SignUpHeader>Sign Up as an old Student</SignUpHeader>
          <InputBox>
            <label htmlFor="">Name</label>
            <Input
              placeholder="Enter your name"
              type="text"
              name="name"
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <label htmlFor="">Email</label>
            <Input
              placeholder="Enter your email"
              type="text"
              name="email"
              required
              onChange={handleChange}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="">Password</label>
            <Input
              placeholder="Enter your password"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="">Name of School</label>
            <select
              onChange={handleChange}
              name="school"
              required
              placeholder="Enter name of school"
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
            <Input
              style={{ background: "#55A630", color: "#FFFFFF" }}
              onClick={handleSubmit}
              type="submit"
              value=" Sign Up"
            />
          </InputBox>
          <LineSection>
            <span></span>
            <div>or</div> <span></span>
          </LineSection>
          <GoogleSignUpBox>
            <ImageWrapper1 style={{ background: "#fff" }}>
              <img src={Google} alt="" />
            </ImageWrapper1>
            <GoogleSignUpLink to=""> Sign Up with Google</GoogleSignUpLink>
          </GoogleSignUpBox>
          <AccountCheck>
            <p>
              Already have an account?
              <Link
                to="/login"
                style={{ color: "#80B918", textDecoration: "none" }}
              >
                {" "}
                Sign In
              </Link>
            </p>
          </AccountCheck>
        </FormWrapper>
      </SignUpWrapper>
    </>
  );
};

export default SignUp;
