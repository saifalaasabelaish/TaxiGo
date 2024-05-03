
import './ContactPage.css';
import backgroundImage from '../../assets/home_pic.png';
import React, { useState } from 'react';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        message: '',
        phoneNumber: '',
        emailAddress: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <header className="masthead vh-100 d-flex align-items-center text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="yellow-box">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Your Name:</label>
                                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="How would you like to be referred to" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Title:</label>
                                    <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="Optional" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message:</label>
                                    <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here"></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number:</label>
                                    <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailAddress">Email Address:</label>
                                    <input type="email" className="form-control" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="background-overlay"></div>
            </div>
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        </header>
    );
}



{/*
function ContactPage() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="yellow-box p-4">
                        <h2 className="mb-4">Contact Form</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Your Name:</label>
                                <input type="text" className="form-control" id="fullName" placeholder="How would you like to be referred to:" />
                            </div>
                          
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title:</label>
                                <input type="text" className="form-control" id="title" placeholder="Title (optional)" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message:</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Write your message here"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                                <input type="tel" className="form-control" id="phoneNumber" placeholder="Phone number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address:</label>
                                <input type="email" className="form-control" id="email" placeholder="Email address" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}*/}





{/* 
function ContactPage() {
    return (
        <header className="masthead vh-100 d-flex align-items-center text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                    <div className="blurry-box">
                        <h1 className="display-3 text-white fw-bold">Contact Us</h1>
                        <p className="lead text-white mt-3">Get in touch with us through any of the following platforms:</p>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="mailto:yahyazawadi278@example.com">
                                    Gmail
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                Call us: <a href="tel:+1234567890">+1 (234) 567-890</a>
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
*/}
export default ContactPage;
