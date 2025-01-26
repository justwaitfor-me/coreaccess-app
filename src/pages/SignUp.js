import React, { useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import FormHandler from '../components/FormHandler';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    // Simulate sign-up logic
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <h2>Sign Up</h2>
        <Form className="mt-3">
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
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
          <br />
          <FormHandler
            onSubmit={handleSignUp}
            buttonText="Sign Up"
            successMessage="Signed up successfully."
            errorMessage="Failed to sign up. Please try again."
          />
        </Form>
        <p className="mt-3 text-center">
          Already have an account? <a href="/">Sign In</a>
        </p>
      </Row>
    </Container>
  );
}

export default SignUp;