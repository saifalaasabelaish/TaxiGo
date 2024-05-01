import React from 'react';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <a className="navbar-brand" href="#">TaxiGo</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Order</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" >Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
