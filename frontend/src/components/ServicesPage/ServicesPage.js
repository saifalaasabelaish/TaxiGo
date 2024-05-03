// ServicesPage.js
import React from 'react';
import './ServicePage.css'; 
import backgroundImage from '../../assets/home_pic.png';

function ServicesPage() {
    return (
        <header className="masthead vh-100 d-flex align-items-center text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="blurry-box">
                            <h1 className="display-3 text-white fw-bold">Our Services</h1>
                            <ul className="lead text-white mt-3">
                                <li>
                                    <h4>Delivery:</h4>
                                    <p className="lead text-white mt-3">Need to deliver packages between different cities? We've got your back. No need for expensive shipment, we will deliver it for you!</p>
                                </li>
                                <li>
                                    <h4>Convenient Taxi Rides:</h4>
                                    <p className="lead text-white mt-3">Need a ride? TaxiGo connects you with nearby taxis instantly. No more waiting on street corners or searching for cab stands. It's like having a personal chauffeur at your fingertips.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="background-overlay"></div>
            </div>
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        </header>
    );
}

export default ServicesPage;