import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import FormHandler from '../components/FormHandler';

function Verification() {
  const handleResendEmail = async () => {
    // Simulate an API call to resend the verification email
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) {
      e.target.value = value.slice(0, 1);
    }
    if (value.length === 1 && index < 5) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8} lg={6}>
          <h2>Email Verification</h2>
          <p>Please check your email for a verification link. Click the link to verify your account.</p>
          <Row>
            <Form>
              <div className="d-flex justify-content-between">
                {[...Array(6)].map((_, index) => (
                  <Form.Control
                    key={index}
                    id={`input-${index}`}
                    type="text"
                    maxLength="1"
                    className="text-center mx-1"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                ))}
              </div>
              <br />
              <FormHandler
                onSubmit={handleResendEmail}
                buttonText="Submit Code"
                successMessage="Verification email resent successfully."
                errorMessage="Failed to resend verification email. Please try again later."
              />
            </Form>
          </Row>
          <small className="mt-3" style={{ width: '100%', display: 'flex', justifyContent: 'end' }}><a href="/resend-email" onClick={(e) => e.preventDefault()}>Resend Email</a></small>
        </Col>1
      </Row>
    </Container>
  );
}

export default Verification;
