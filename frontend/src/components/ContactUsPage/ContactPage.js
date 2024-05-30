// ContactPage.js
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5001/contacts', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Form submitted successfully:', result);
                setFormData({
                    name: '',
                    title: '',
                    message: '',
                    phoneNumber: '',
                    emailAddress: ''
                });
            } else {
                console.error('Form submission error:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
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

export default ContactPage;
