import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Container, Form } from 'react-bootstrap';
import logo from '../../../images/Logo.png';
import pp from '../../../images/dahsboard-pp.jpg'
import './DashboardHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowDown, faBell, faCirclePlus, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const DashboardHeader = () => {
    return (
        <div>
        <div className="site-header-section">      
                <Navbar className='px-4' expand="lg">
                    <Container>
                        <Navbar.Brand><Link className='text-decoration-none' to={'/dashboard'}><img src={logo} alt="Logo" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/dashboard"><Link className='text-decoration-none' to={'/dashboard'}>Home</Link></Nav.Link>
                            <Nav.Link href="#link"><Link className='text-decoration-none' to={'/dashboard'}>About</Link></Nav.Link>
                            <Nav.Link href="/dashboard"><Link className='text-decoration-none' to={'/blog-page'}>Blog</Link></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    <Form className="d-flex order-cls">
                        <Form.Control
                        type="search"
                        placeholder="Search..."
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button className='header-srch'>Search</Button>
                    </Form>
                    <div className="sign-ind-user-link w-50 p-2 d-flex align-items-center justify-content-center">
                            <div className="username-section d-flex flex-row align-items-center justify-content-end">
                                <div className="user-img pe-2"><Link className='text-decoration-none' to={'/user-profile'}><img className='w-100' src={pp} alt="user" /></Link></div>
                                <div className="username-link d-flex flex-column pe-2">
                                    <span>Login as</span>
                                    <p className='fw-bold'><a className='text-decoration-none text-secondary' href="/"><Link className='text-decoration-none' to={'/user-profile'}>Golan Ginya</Link></a></p>
                                </div>
                                <span className='d-flex align-items-center'><FontAwesomeIcon className='fa-sm' icon={faArrowAltCircleDown}/></span>
                            </div>
                            <div className="notification-bell ms-4"><a href="/"><FontAwesomeIcon icon={faBell}/></a></div>
                    </div>  
                </Navbar>
        </div>
    </div>
    );
};

export default DashboardHeader;