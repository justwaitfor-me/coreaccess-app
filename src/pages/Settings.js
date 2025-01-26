import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import FormHandler from '../components/FormHandler';
import { Breadcrumb } from 'react-bootstrap';

function Settings(arg) {
  const handleSaveChanges = async () => {
    // Simulate save changes logic
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  console.log(arg.username);


  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Breadcrumb>
          <Breadcrumb.Item href="/username">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Settings</Breadcrumb.Item>
        </Breadcrumb>
        <h2>Account Settings</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="New password" />
          </Form.Group>
          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm new password" />
          </Form.Group>
          <br />
          <FormHandler
            onSubmit={handleSaveChanges}
            buttonText="Save Changes"
            successMessage="Changes saved successfully."
            errorMessage="Failed to save changes. Please try again."
          />
        </Form>
      </Row>
    </Container>
  );
}

export default Settings;