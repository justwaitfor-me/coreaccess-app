import React from 'react';
import '../assets/css/footer.css';


function Footer() {
    console.log('Footer component rendered');
    return (
        <footer className="navbar fixed-bottom bg-transparent">
            <div className="container-fluid">
                <span className="navbar-brand mx-auto">© 2025 justwaitforme.de. All rights reserved.</span>
                <a href="https://github.com/justwaitfor-me/coreaccess-app" className="btn btn-primary">
                    <i className="bi bi-github github-link"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;