import React, { useState } from 'react';
import './style.css';
import Header from './header'; // Adjust the import path as needed
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Schedule = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: '',
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic (e.g., send data to server)
    };

    return (
        <div className="c-container">
            <Header />
            <div className="c-text-content">
                <h1 className="c-heading">Schedule a Meeting with Us!</h1>
                <p className="c-paragraph">
                    Welcome to WHITE MATRIX! We are excited to connect with you. Please fill out the form below to schedule a meeting. Our team is looking forward to discussing how we can collaborate and achieve great results together.
                </p>
            </div>
            <form className="c-form" onSubmit={handleSubmit}>
                <div className="c-form-field-row">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="c-input-field"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="c-input-field"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="c-form-field-row">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="c-input-field"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="c-form-field-row">
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="c-input-field"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="c-form-field-row">
                    <input
                        type="date"
                        name="date"
                        className="c-input-field c-input-field-3-4"
                        value={formData.date}
                        onChange={handleChange}
                    />
                    <input
                        type="time"
                        name="time"
                        className="c-input-field c-input-field-1-4"
                        value={formData.time}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="c-submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Schedule;
