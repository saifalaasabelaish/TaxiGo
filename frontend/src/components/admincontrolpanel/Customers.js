import React, { useState, useEffect } from 'react';
import "./Drivers.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5001/User');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      console.log('Fetched users:', data);
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError(error.message);
    }
  };

  const showUserDetails = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="containerH">
      <div className="sidebarH">
        <h2>Users List</h2>
        {error ? (
          <p>Error fetching users: {error}</p>
        ) : (
          users.map((user) => (
            <div key={user._id} onClick={() => showUserDetails(user)} className="driver-item">
              <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone Number:</strong> {user.mobileNumber}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <p><strong>Date of Birth:</strong> {new Date(user.dateOfBirth).toLocaleDateString()}</p>
              <p><strong>Location:</strong> {user.location}</p>
            </div>
          ))
        )}
      </div>
      <div className="contentH">
        {selectedUser ? (
          <div className="driver-details">
            <h2>User Details</h2>
            <p><strong>First Name:</strong> {selectedUser.firstName}</p>
            <p><strong>Last Name:</strong> {selectedUser.lastName}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone Number:</strong> {selectedUser.mobileNumber}</p>
            <p><strong>Gender:</strong> {selectedUser.gender}</p>
            <p><strong>Date of Birth:</strong> {new Date(selectedUser.dateOfBirth).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {selectedUser.location}</p>
            <p><strong>Created At:</strong> {new Date(selectedUser.createdAt).toLocaleDateString()}</p>
          </div>
        ) : (
          <p>Select a user to see details</p>
        )}
      </div>
    </div>
  );
}

export default Users;
