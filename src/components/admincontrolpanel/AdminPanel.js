import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminPanelHeader from "./AdminPanelHeader";
import AdminSidebar from "./AdminSidebar";
import "./adminpanel.css";

function AdminPanel() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <AdminPanelHeader OpenSidebar={OpenSidebar} />
      <AdminSidebar
        openSidebarToggle={openSidebarToggle}
        openSidebar={OpenSidebar}
      />
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPanel;
