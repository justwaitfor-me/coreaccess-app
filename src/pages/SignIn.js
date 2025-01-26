import React, { useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import FormHandler from '../components/FormHandler';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // Simulate sign-in logic
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
          <h2>Sign In</h2>
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
            <br />
            <FormHandler
              onSubmit={handleSignIn}
              buttonText="Sign In"
              successMessage="Signed in successfully."
              errorMessage="Failed to sign in. Please check your credentials and try again."
            />
          </Form>
          <p className="mt-3 text-center">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
          <p className="text-center">
            <a href="/forgot-password">Forgot Password?</a>
          </p>
      </Row>
    </Container>
  );
}

export default SignIn;