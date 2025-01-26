import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';

function FormHandler({ onSubmit, buttonText, successMessage, errorMessage }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      await onSubmit();
      setMessage(successMessage || 'Action completed successfully.');
    } catch (err) {
      setError(errorMessage || 'Failed to complete the action. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  console.log("FormHandler component rendered");
  return (
    <>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Button variant="primary" onClick={handleSubmit} disabled={loading}>
        {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : buttonText}
      </Button>
    </>
  );
}

export default FormHandler;