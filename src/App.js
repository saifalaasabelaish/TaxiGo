import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactPage from "./components/ContactUsPage/ContactPage"; // Make sure the path is correct
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import Order from "./components/TaxiRequest/TaxiRequest";
import AdminPanel from "./components/admincontrolpanel/AdminPanel";
import Customers from "./components/admincontrolpanel/Customers";
import Dashboard from "./components/admincontrolpanel/Dashboard";
import Deliveries from "./components/admincontrolpanel/Deliveries";
import Drivers from "./components/admincontrolpanel/Drivers";
import Reports from "./components/admincontrolpanel/Reports";
import Settings from "./components/admincontrolpanel/Settings";
import TaxiRides from "./components/admincontrolpanel/TaxiRides";
import NavigationBar from "./components/common/NavigationBar";
import TopBar from "./components/common/TopBar";

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <NavigationBar />

        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/order" Component={Order} />
          <Route path="/services" Component={ServicesPage} />
          <Route path="/login" Component={Login} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/adminpanel" element={<AdminPanel />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="deliveries" element={<Deliveries />} />
            <Route path="taxi-rides" element={<TaxiRides />} />
            <Route path="drivers" element={<Drivers />} />
            <Route path="customers" element={<Customers />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
