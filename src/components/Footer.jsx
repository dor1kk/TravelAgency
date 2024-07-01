import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
         
            <p>
              <img src={location} alt="Location" width="20" height="20" className="me-2" />
              123 Street, City, Country
            </p>
         
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/tickets">Tickets</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="/destinations">Destinations</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <Nav>
              <Nav.Link href="https://facebook.com">
              </Nav.Link>
              <Nav.Link href="https://instagram.com">
              </Nav.Link>
              <Nav.Link href="https://twitter.com">
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2024 Travel Agency. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
