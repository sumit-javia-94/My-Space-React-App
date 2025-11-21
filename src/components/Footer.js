import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from '../../src/assets/logo192.png';

const Footer = (props) => {
  return (
    <footer className='border-top bg-light bg-gradient'>
        <Container>
            <Row className='pt-5 pb-5'>
                <Col>
                    <Link to="/" className="text-start align-items-center link-dark text-decoration-none">
                        <div className='logo mb-2'>
                            <img className="w-25" src={logo} alt="Logo"/>
                        </div>
                        <div className='site-title'>
                            <h3 className='text-start'>{props.sitename}</h3>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <h5 className='border-bottom pb-3 text-start'>Company</h5>
                    <ul className="nav flex-column text-start">
                        <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About Us</Link></li>
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Community</Link></li>
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Rewards</Link></li>
                    </ul>
                </Col>
                <Col>
                    <h5 className='border-bottom pb-3 text-start'>Support</h5>
                    <ul className="nav flex-column text-start">
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Account</Link></li>
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Legal</Link></li>
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Contact</Link></li>
                    </ul>
                </Col>
                <Col>
                    <h5 className='border-bottom pb-3 text-start'>Contact Us</h5>

                    <ul className="nav flex-column text-start">
                        <li className="nav-item mb-2"><Link to="tel:96111 11125" className="nav-link p-0 text-muted">96111 11125</Link></li>
                        <li className="nav-item mb-2"><Link to="mailto:myreactapp.com" className="nav-link p-0 text-muted">myreactapp.com</Link></li>
                    </ul>
                </Col>
            </Row>
            <Row className='pt-3 border-top'>
                <p className="text-muted text-center">Copyright © 2024 by My react-app</p>
            </Row>
        </Container>
    </footer>
  );
};
export default Footer;