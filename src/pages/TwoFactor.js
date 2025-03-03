import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import QRCode from "qrcode.react"; // Import QR code library

function TwoFactor(arg) {
  const [qrCodeVisible, setQrCodeVisible] = useState(true); // Toggle QR visibility
  const [secretKey, setSecretKey] = useState("JBSWY3DPEHPK3PXP"); // Example secret key
  const [verificationCode, setVerificationCode] = useState(""); // Store the 6-digit code

  // Simulate backend interaction to toggle the QR code (e.g., regenerate secret)
  const handleRegenerateQRCode = () => {
    // For demonstration purposes, we'll just use a random key
    const newSecretKey = Math.random().toString(36).substring(2, 18).toUpperCase();
    setSecretKey(newSecretKey);
    setQrCodeVisible(true);
  };

  // Handle input for the 6-digit code
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) {
      e.target.value = value.slice(0, 1); // Limit input to 1 digit
    }

    // Automatically move to the next input box if a digit is entered
    if (value.length === 1 && index < 5) {
      document.getElementById(`input-${index + 1}`).focus();
    }

    // Build the complete verification code as digits are entered
    const newCode =
      verificationCode.substring(0, index) + value + verificationCode.substring(index + 1);
    setVerificationCode(newCode);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verification Code Submitted:", verificationCode);
    alert("Submitted code: " + verificationCode);
  };

  console.log(arg.username);
  
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h2 className="mb-4">Two-Factor Authentication</h2>
          <p>
            Set up your two-factor authentication by scanning the QR code below
            with your authentication app.
          </p>

          {/* QR Code Section */}
          {qrCodeVisible && (
            <div className="mb-4">
              <div className="d-flex justify-content-center">
                <QRCode
                  value={`otpauth://totp/MyAppName?secret=${secretKey}&issuer=MyAppName`}
                  size={200}
                  className="border p-2"
                />
              </div>
              <p className="mt-3">
                Your Secret Key: <code>{secretKey}</code>
              </p>
            </div>
          )}

          <Button variant="link" className="mb-4" onClick={handleRegenerateQRCode}>
            Regenerate QR Code
          </Button>

          {/* Verification Code Input */}
          <Form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center mb-4">
              {[...Array(6)].map((_, index) => (
                <Form.Control
                  key={index}
                  id={`input-${index}`}
                  type="text"
                  maxLength="1"
                  className="text-center mx-1"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    fontSize: "1.5rem",
                    borderRadius: "0.5rem",
                  }}
                  onChange={(e) => handleInputChange(e, index)}
                />
              ))}
            </div>
            <Button variant="primary" type="submit" className="w-100">
              Submit Code
            </Button>
          </Form>

          <small className="mt-3 d-block">
            If you don't know which app to use, you can find more information on
            <a href="https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm" target="_blank" rel="noopener noreferrer"> this Wikipedia page</a>.
          </small>
        </Col>
      </Row>
    </Container>
  );
}

export default TwoFactor;
