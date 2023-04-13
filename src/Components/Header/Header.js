import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div id='dHeader' className="site-header-section py-3 shadow-sm">
                <Container>
                    <div className="header-item d-flex justify-content-start">
                        <div className="logo-area">
                            <a className='text-decoration-none' href="/"><img src={logo} alt="Logo" /></a>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Header;