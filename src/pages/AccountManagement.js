import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import FormHandler from '../components/FormHandler';
import { Breadcrumb } from 'react-bootstrap';

function AccountManagement(arg) {
  const handleUpdateAccount = async () => {
    // Simulate account update logic
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  console.log(arg.username);


  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Breadcrumb>
          <Breadcrumb.Item href="/username">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Account Management</Breadcrumb.Item>
        </Breadcrumb>
        <h2>Account Management</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <br />
          <FormHandler
            onSubmit={handleUpdateAccount}
            buttonText="Update Account"
            successMessage="Account updated successfully."
            errorMessage="Failed to update account. Please try again."
          />
        </Form>
      </Row>
    </Container>
  );
}

export default AccountManagement;