import React from "react";
import { BsJustify, BsSearch } from "react-icons/bs";

function AdminPanelHeader({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
    </header>
  );
}

export default AdminPanelHeader;
