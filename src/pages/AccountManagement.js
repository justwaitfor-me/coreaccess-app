import React from 'react';
import { Container, Row} from 'react-bootstrap';
import { Breadcrumb } from 'react-bootstrap';

function AccountManagement(arg) {
  console.log(arg.username);


  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Breadcrumb>
          <Breadcrumb.Item href="/username">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Account Management</Breadcrumb.Item>
        </Breadcrumb>
        <h2>Account Management</h2>
        <div className="me-3" style={{ marginBottom: '15px' }}>
          <img
            id="profile-pic"
            src="https://picsum.photos/seed/auth/200"
            alt="Profile"
            className="img-thumbnail"
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <div className="d-flex flex-column">
          <p className='flex-inline justify-content-space-between bg-light rounded-2'><strong>Username:</strong> {arg.username} <button className='bg-dark rounded'>&gt;</button></p>
          <p className='flex-inline justify-content-space-between bg-light rounded-2'><strong>Username:</strong> {arg.username} <button>&gt;</button></p>
          <p className='flex-inline justify-content-space-between bg-light rounded-2'><strong>Username:</strong> {arg.username} <button>&gt;</button></p>
        </div>
      </Row>
    </Container>
  );
}

export default AccountManagement;