import React from "react";
import {
  BsCarFrontFill,
  BsFileTextFill,
  BsGearFill,
  BsGrid1X2Fill,
  BsPeopleFill,
  BsTruck,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function AdminSidebar({ openSidebarToggle, openSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logo} className="logo_img" alt="logo" /> TaxiGo
        </div>
        <span className="icon close_icon" onClick={openSidebar}>
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/adminpanel/dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/adminpanel/deliveries">
            <BsTruck className="icon" /> Deliveries
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/adminpanel/taxi-rides">
            <BsCarFrontFill className="icon" /> Taxi Rides
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/adminpanel/drivers">
            <BsPeopleFill className="icon" /> Drivers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/adminpanel/customers">
            <BsPeopleFill className="icon" /> Customers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/adminpanel/reports">
            <BsFileTextFill className="icon" /> Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/adminpanel/settings">
            <BsGearFill className="icon" /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;