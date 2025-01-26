import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FormHandler from '../components/FormHandler';

function Dashboard(arg) {
  // Check if user exists
  let username = arg.username;

  return (
    <Container className="mt-5">
      <h1>Hey, {username}!</h1>
      <Row className="mt-3">
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Welcome</Card.Title>
              <Card.Text>
                This is your dashboard where you can manage your account and access various features.
              </Card.Text>
              <FormHandler
                onSubmit={() => { document.location.href = `/${username}/account`; }}
                buttonText="Go to Account Management"
              />
            </Card.Body>
          </Card>
        </Col>
        <p></p>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Settings</Card.Title>
              <Card.Text>
                Adjust your account settings and preferences.
              </Card.Text>
              <FormHandler
                onSubmit={() => { document.location.href = `/${username}/settings`; }}
                buttonText="Go to Settings"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;