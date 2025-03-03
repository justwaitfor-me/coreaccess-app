import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

/**
 * A reusable CAPTCHA component.
 *
 * Props:
 * - siteKey: string (required) - Your Google reCAPTCHA site key.
 * - onSuccess: function (optional) - A callback function when CAPTCHA is successfully validated.
 * - onError: function (optional) - A callback function when CAPTCHA validation fails or is not completed.
 * - containerClass: string (optional) - Additional CSS classes for the CAPTCHA container.
 */
const Captcha = ({
    siteKey,
    onSuccess = () => { },
    onError = () => { },
    containerClass = ""
}) => {
    const [captchaToken, setCaptchaToken] = useState(null);

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
        if (token) {
            onSuccess(token); // Call onSuccess callback with the token
        }
    };

    const handleCaptchaExpired = () => {
        setCaptchaToken(null);
        onError("Captcha expired. Please verify again."); // Call onError callback
    };

    return (
        <div className={`captcha-container ${containerClass}`}>
            <ReCAPTCHA
                sitekey="6LdiEdQqAAAAALwT1VANBcJtlX3BKiHPbo1SHKcA"
                onChange={handleCaptchaChange}
                onExpired={handleCaptchaExpired}
            />
        </div>
    );
};

export default Captcha;
