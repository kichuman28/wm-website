import React, { useState } from 'react';

import Header from './header'; // Adjust the import path as needed
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Career = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        cv: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
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
                <h1 className="c-heading">Career - Welcome to Our Team!</h1>
                <p className="c-paragraph">
                    Welcome to WHITE MATRIX! Join us in simplifying technology and driving innovation. Enjoy the flexibility of working from home while contributing to cutting-edge projects. Grow your skills in a collaborative environment that celebrates creativity and supports career development. Explore opportunities to be part of our forward-thinking team. Join us and make an impact.
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
                        className="c-input-field c-input-field-3-4"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <label htmlFor="cv" className="c-file-label">Upload CV</label>
                    <input
                        type="file"
                        name="cv"
                        id="cv"
                        className="c-file-input"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="c-submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Career;
