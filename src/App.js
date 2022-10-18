import React from "react";
import LandingPage from "./pages/landingpage/LandingPage";
import LoginPage from "./pages/loginpage/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";
import RequiredAuth from "./components/Login/RequiredAuth";
import Wallet from "../src/components/sendreward/SendReward";
import Paystack from "../src/components/sendreward/SendRewardPaystack";
import SuccessMessage from "./components/sendreward/SuccessMessage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RewardPage from "./pages/reward/RewardPage";
import DashboardTeacher from "./pages/dashboard/DashboardTeacher";
import SignupOption from "../src/components/signup/SignupOption";
import SignUp from "../src/components/signup/SignUp";
import SignUpTeachers from "../src/components/signup/SignUpTeachers"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/reward/*" element={<RewardPage />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/reward/wallet" element={<Wallet />} />
          <Route exact path="/reward/paystack" element={<Paystack />} />
          <Route exact path="/signoption" element={<SignupOption/>} />
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/signup-teacher" element={<SignUpTeachers/>}/>
            
          
          <Route
            exact
            path="/reward/wallet/success"
            element={<SuccessMessage />}
          />
          <Route
            exact
            path="/dashboard/*"
            element={
              <RequiredAuth>
                <Dashboard />
              </RequiredAuth>
            }
          />
          <Route
            exact
            path="/teacher/*"
            element={
              <RequiredAuth>
                <DashboardTeacher />
              </RequiredAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
