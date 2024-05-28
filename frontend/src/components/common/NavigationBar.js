import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <Link className="navbar-brand" to="/">TaxiGo</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function AdminNavbar({ onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <Link className="navbar-brand" to="/">TaxiGo</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/adminpanel">Admin Panel</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/login" onClick={onLogout}>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function UserNavbar({ onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <Link className="navbar-brand" to="/">TaxiGo</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/order">Order</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mapwithco">Taxi Map</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/map">Map</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/login" onClick={onLogout}>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function AppNavbar() {
  const location = useLocation();
  const { acces: locationAcces } = location.state || {};
  const [userIn, setUserIn] = useState(() => {
    const savedAcces = localStorage.getItem('acces');
    return savedAcces === '1';
  });
  const [adminIn, setAdminIn] = useState(() => {
    const savedAcces = localStorage.getItem('acces');
    return savedAcces === '2';
  });

  useEffect(() => {
    if (locationAcces) {
      localStorage.setItem('acces', locationAcces);
      if (locationAcces === 1) {
        setUserIn(true);
        setAdminIn(false);
      } else if (locationAcces === 2) {
        setAdminIn(true);
        setUserIn(false);
      }
    }
  }, [locationAcces]);

  const handleLogout = () => {
    localStorage.removeItem('acces');
    setUserIn(false);
    setAdminIn(false);
  };

  if (userIn) {
    return <UserNavbar onLogout={handleLogout} />;
  } else if (adminIn) {
    return <AdminNavbar onLogout={handleLogout} />;
  } else {
    return <NavigationBar />;
  }
}

export default AppNavbar;
