import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/common/TopBar';
import NavigationBar from './components/common/NavigationBar';
import ContactPage from './components/ContactUsPage/ContactPage'; 
import HomePage from './components/Home/HomePage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Order from "./components/TaxiRequest/TaxiRequest";
import Login from "./components/Login/Login";
import RegisterForm from "./components/CreateProfile/CreateProfile";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Map from "./components/Map/Map";
import MapWithCo from "./components/MapWithCo/MapWithCo"
import AdminPanel from "./components/admincontrolpanel/AdminPanel";
import Customers from "./components/admincontrolpanel/Customers";
import Dashboard from "./components/admincontrolpanel/Dashboard";
import Deliveries from "./components/admincontrolpanel/Deliveries";
import Drivers from "./components/admincontrolpanel/Drivers";
import Reports from "./components/admincontrolpanel/Reports";
import Settings from "./components/admincontrolpanel/Settings";
import TaxiRides from "./components/admincontrolpanel/TaxiRides";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/backend/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const location = useLocation();

  // Check if the current location matches the admin control panel route
  const isAdminControlPanel = location.pathname === '/admincontrolpanel';

  // Render the NavigationBar only if it's not the admin control panel route
  const renderNavigationBar = !isAdminControlPanel && <NavigationBar />;

  return (
    <Router>
      <div>
        <TopBar />
        {renderNavigationBar}

        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/order" Component={Order} />
          <Route path="/services" Component={ServicesPage} />
          <Route path="/login" Component={Login} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/adminpanel" Component={AdminPanel }>
            <Route path="" Component={Dashboard } />
            <Route path="dashboard" Component={Dashboard } />
            <Route path="deliveries" Component={Deliveries } />
            <Route path="taxi-rides" Component={TaxiRides } />
            <Route path="drivers" Component={Drivers } />
            <Route path="customers" Component={Customers } />
            <Route path="reports" Component={Reports } />
            <Route path="settings" Component={Settings} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;