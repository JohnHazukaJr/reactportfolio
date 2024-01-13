// src/pages/Contact.jsx
import React from 'react';
import './Contact.css'; // Make sure to create a corresponding CSS file for styling

function Contact() {
    const email = "johnmichaelhazukajr@gmail.com";
    const phone = "206-771-3345";
    // Add the path to your actual photo or leave as is for a placeholder
    const placeholderPhoto = 'path_to_your_photo.jpg';

    return (
        <div className="contact-page">
            <div className="contact-card">
                <div className="photo-container">
                    {/* If you have an actual photo, replace 'placeholderPhoto' with the path to your photo */}
                    <img src={placeholderPhoto} alt="John Michael Hazuka Jr." className="profile-photo" />
                </div>
                <div className="contact-info">
                    <h1>John Michael Hazuka Jr.</h1>
                    <p className="title">Software Developer</p>
                    <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                    <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
                </div>
            </div>
        </div>
    );
}

export default Contact;

