// import React from "react";
// import Captcha from "../components/Captcha";

// const FormWithCaptcha = () => {
//     const siteKey = "6LdiEdQqAAAAALwT1VANBcJtlX3BKiHPbo1SHKcA"; // Replace with your Google reCAPTCHA site key

//     const handleCaptchaSuccess = (token) => {
//         console.log("CAPTCHA validated successfully. Token:", token);
//         // Perform additional logic, like enabling the submit button
//     };

//     const handleCaptchaError = (errorMessage) => {
//         console.error("CAPTCHA error:", errorMessage);
//         // Handle errors, such as showing a message to the user
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form submitted.");
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h1>Form with CAPTCHA</h1>

//             {/* Your form fields */}
//             <input type="text" name="name" placeholder="Enter your name" required />
//             <input type="email" name="email" placeholder="Enter your email" required />

//             {/* CAPTCHA Component */}
//             <Captcha
//                 siteKey={siteKey}
//                 onSuccess={handleCaptchaSuccess}
//                 onError={handleCaptchaError}
//                 containerClass="captcha"
//             />

//             <button type="submit">Submit</button>
//         </form>
//     );
// };

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const FormWithReCAPTCHA = () => {
    const siteKey = '6LeyGdQqAAAAAASobJ-sz9SaWSL8CXB4mwC8LCcU';  // Replace with your actual site key

    const [captchaValid, setCaptchaValid] = useState(false);  // State to track CAPTCHA validation
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleCaptchaChange = (value) => {
        console.log('Captcha value:', value);
        setCaptchaValid(!!value);  // Set captchaValid to true if CAPTCHA is solved
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (captchaValid) {
            console.log('Form data submitted:', formData);
            // Here you would typically send the form data along with the CAPTCHA token to your backend
        } else {
            console.log('Please verify that you are not a robot!');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with reCAPTCHA v2</h1>

            {/* Form Fields */}
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
            />

            {/* reCAPTCHA v2 Component */}
            <ReCAPTCHA
                sitekey={siteKey}
                onChange={handleCaptchaChange}
            />

            {/* Submit Button */}
            <button type="submit" disabled={!captchaValid}>
                Submit
            </button>
        </form>
    );
};

export default FormWithReCAPTCHA;
