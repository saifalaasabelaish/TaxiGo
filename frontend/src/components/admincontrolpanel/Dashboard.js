import React from "react";
import { BsCarFrontFill, BsPeopleFill, BsTruck } from "react-icons/bs";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Dashboard() {
  const data = [
    {
      name: "Mon",
      deliveries: 400,
      taxiRides: 240,
      drivers: 10,
      customers: 20,
    },
    {
      name: "Tue",
      deliveries: 300,
      taxiRides: 139,
      drivers: 12,
      customers: 25,
    },
    { name: "Wed", deliveries: 200, taxiRides: 980, drivers: 8, customers: 22 },
    {
      name: "Thu",
      deliveries: 278,
      taxiRides: 390,
      drivers: 11,
      customers: 18,
    },
    { name: "Fri", deliveries: 189, taxiRides: 480, drivers: 9, customers: 30 },
    {
      name: "Sat",
      deliveries: 239,
      taxiRides: 380,
      drivers: 10,
      customers: 28,
    },
    {
      name: "Sun",
      deliveries: 349,
      taxiRides: 430,
      drivers: 12,
      customers: 35,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Dashboard</h3>
      </div>

      <div className="main-cards">
        <div className="card card-deliveries">
          <div className="card-inner">
            <h3>Deliveries</h3>
            <BsTruck className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card card-taxi-rides">
          <div className="card-inner">
            <h3>Taxi Rides</h3>
            <BsCarFrontFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card card-drivers">
          <div className="card-inner">
            <h3>Drivers</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card card-customers">
          <div className="card-inner">
            <h3>Customers</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="deliveries"
              stroke="#ffd700"
              name="Deliveries"
            />
            <Line
              type="monotone"
              dataKey="taxiRides"
              stroke="#008000"
              name="Taxi Rides"
            />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="drivers" fill="#ffa500" name="Drivers" />
            <Bar dataKey="customers" fill="#1e90ff" name="Customers" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Dashboard;