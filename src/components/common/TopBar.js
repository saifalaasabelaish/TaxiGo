import React from 'react';

function TopBar() {
  return (
    <div className="top-bar bg-dark text-light py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <span className="me-2">Call Us 24/7</span>
          <a href="tel:123-456-7890" className="text-white me-3">123-456-7890</a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
