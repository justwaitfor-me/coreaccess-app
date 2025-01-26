import React from 'react';
import { Container} from 'react-bootstrap';

const NotFound = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <Container className="mt-5">
            <div>
                <h1>404 - Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <br />
                <button onClick={handleGoBack} className='btn btn-primary'>Go back</button>
            </div>
        </Container>
    );
};

export default NotFound;