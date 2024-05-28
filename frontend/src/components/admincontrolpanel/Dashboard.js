import React from "react";
import axios from 'axios';
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
  const [counts, setCounts] = useState({
    deliveries: 0,
    taxiRides: 0,
    drivers: 0,
    customers: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/Order/counts');

        setCounts({
          deliveries: response.data.orders, 
          taxiRides: response.data.orders, 
          drivers: 0, 
          customers: 0, 
        });
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

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
          <h1>{counts.deliveries}</h1>
        </div>
        <div className="card card-taxi-rides">
          <div className="card-inner">
            <h3>Taxi Rides</h3>
            <BsCarFrontFill className="card_icon" />
          </div>
          <h1>{counts.taxiRides}</h1>
        </div>
        <div className="card card-drivers">
          <div className="card-inner">
            <h3>Drivers</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{counts.drivers}</h1>
        </div>
        <div className="card card-customers">
          <div className="card-inner">
            <h3>Customers</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{counts.customers}</h1>
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
