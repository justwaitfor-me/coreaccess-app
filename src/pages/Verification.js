import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormHandler from '../components/FormHandler';

function Verification() {
  const handleResendEmail = async () => {
    // Simulate an API call to resend the verification email
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8} lg={6}>
          <h2>Email Verification</h2>
          <p>Please check your email for a verification link. Click the link to verify your account.</p>
          <FormHandler
            onSubmit={handleResendEmail}
            buttonText="Resend Verification Email"
            successMessage="Verification email resent successfully."
            errorMessage="Failed to resend verification email. Please try again later."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Verification;