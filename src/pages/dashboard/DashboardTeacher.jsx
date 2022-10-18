import React, { useState} from "react";
import DashboardNav from "../../components/teacherComponents/navbarTeacherDashboard/DashboardNavBarTeacher";
import Sidebar from "../../components/teacherComponents/sidebarTeacher/SidebarTeacher";
import Overview from "../../components/teacherComponents/overviewTeacher/overviewTeacher";
import Notification from "../../components/teacherComponents/notificationTeacher/NotificationTeacher";
import Message from "../../components/teacherComponents/messageTeacher/MessageTeacher";
import DashboardProfile from "../../components/teacherComponents/dashboardProfileTeacher/DashboardProfileTeacher";
import SettingsMenu from "../../components/teacherComponents/settingsMenuTeacher/SettingsMenuTeacher"
import { Routes, Route } from "react-router-dom";

const DashboardTeacher = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <DashboardNav setShowMenu={setShowMenu} />
      <div>
        <Sidebar />
        {showMenu && <SettingsMenu />}
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/message" element={<Message />} />
          <Route path="/account/profile" element={<DashboardProfile />} />
          <Route path="*" element={<h1>404 PAGE NOT FOUND</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardTeacher;
