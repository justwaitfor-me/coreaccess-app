import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import FormHandler from '../components/FormHandler';
import { Breadcrumb } from 'react-bootstrap';

function Settings(arg) {
  const handleSaveChanges = async () => {
    // Simulate save changes logic
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('profile-pic').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    document.getElementById('profile-pic-upload').click();
  };

  console.log(arg.username);

  return (
    <React.Fragment>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/username">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Settings</Breadcrumb.Item>
        </Breadcrumb>
        <h2>Account Settings</h2>
        <br />
        <div className="d-flex flex-column justify-content-center">
          <Row className="mb-3">
            <Col>
              <div className="me-3" onClick={triggerFileUpload} style={{ cursor: 'pointer' }}>
                <img
                  id="profile-pic"
                  src="https://picsum.photos/seed/auth/200"
                  alt="Profile"
                  className="img-thumbnail"
                  style={{ width: '150px', height: '150px' }}
                />
                <input
                  id="profile-pic-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className="d-none"
                />
              </div>
            </Col>
            <Col>
              <Form className="flex-grow-1">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form className="flex-grow-1">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form className="flex-grow-1">
                <Form.Group controlId="formTheme">
                  <Form.Label>Theme</Form.Label>
                  <Form.Control as="select">
                    <option>Light</option>
                    <option>Dark</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form className="flex-grow-1">
                <Form.Group controlId="formLanguage">
                  <Form.Label>Language</Form.Label>
                  <Form.Control as="select">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form className="flex-grow-1">
                <Form.Group controlId="formAnimation" className="mt-3">
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Enable Animations"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form className="flex-grow-1">
                <Form.Group controlId="formNotifications" className="mt-3">
                  <Form.Check
                    type="switch"
                    id="notifications-switch"
                    label="Enable Notifications"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <FormHandler
                onSubmit={handleSaveChanges}
                buttonText="Save Changes"
                successMessage="Changes saved successfully."
                errorMessage="Failed to save changes. Please try again."
                className="mt-3"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Settings;