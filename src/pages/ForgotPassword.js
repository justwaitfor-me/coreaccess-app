import React, { useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import FormHandler from '../components/FormHandler';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    // Simulate password reset logic
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <h2>Forgot Password</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <br />
          <FormHandler
            onSubmit={handlePasswordReset}
            buttonText="Send Reset Link"
            successMessage="Password reset link sent successfully."
            errorMessage="Failed to send password reset link. Please try again."
          />
        </Form>
      </Row>
    </Container>
  );
}

export default ForgotPassword;