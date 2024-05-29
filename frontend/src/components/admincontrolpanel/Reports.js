import React, { useState, useEffect } from 'react';
import "./Drivers.css";

function Reports() {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await fetch('http://localhost:5001/contacts'); 
      if (!response.ok) {
        throw new Error('Failed to fetch reports');
      }
      const data = await response.json();
      console.log('Fetched reports:', data);
      setReports(data);
    } catch (error) {
      console.error('Error fetching reports:', error);
      setError(error.message);
    }
  };

  const showReportDetails = (report) => {
    setSelectedReport(report);
  };

  return (
    <div className="containerH">
      <div className="sidebarH">
        <h2>Reports List</h2>
        {error ? (
          <p>Error fetching reports: {error}</p>
        ) : (
          reports.map((report) => (
            <div key={report._id} onClick={() => showReportDetails(report)} className="driver-item">
              <p><strong>Name:</strong> {report.name}</p>
              <p><strong>Email:</strong> {report.emailAddress}</p>
              <p><strong>Phone Number:</strong> {report.phoneNumber}</p>
              <p><strong>Message:</strong> {report.message}</p>
              <p><strong>Date:</strong> {report.createdAt}</p>
            </div>
          ))
        )}
      </div>
      <div className="contentH">
        {selectedReport ? (
          <div className="driver-details">
            <h2>Report Details</h2>
            <p><strong>Name:</strong> {selectedReport.name}</p>
            <p><strong>Email:</strong> {selectedReport.emailAddress}</p>
            <p><strong>Phone Number:</strong> {selectedReport.phoneNumber}</p>
            <p><strong>Message:</strong> {selectedReport.message}</p>
            <p><strong>Date:</strong> {selectedReport.createdAt}</p>
          </div>
        ) : (
          <p>Select a report to see details</p>
        )}
      </div>
    </div>
  );
}

export default Reports;
