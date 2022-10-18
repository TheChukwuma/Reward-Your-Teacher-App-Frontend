import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBarAll from "../../components/navbarAll/DashboardNavBar";
import School from "../../components/schools/Schools";
import Message from "../../components/message/Message";
import Notification from "../../components/notification/Notification";
import Overview from "../../components/overview/overview";
import Teacher from "../../components/teachers/Teacher";
import SettingsMenu from "../../components/settingsMenu/SettingsMenu";
import Profile from "../../components/dashboardProfile/DashboardProfile";
import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <NavBarAll setShowMenu={setShowMenu} />
      <div>
        <Sidebar />
        {showMenu && <SettingsMenu />}
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/message" element={<Message />} />
          <Route path="/school" element={<School />} />
          <Route path="/school/teachers" element={<Teacher />} />
          <Route path="/settings" element={<SettingsMenu />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="*" element={<h1>404 PAGE NOT FOUND</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default Dashboard;
