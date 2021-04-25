import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Movie Booking</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/registration">
              <Nav.Link>Student Registration</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/parking">
              <Nav.Link>Parking Fees</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tickets">
              <Nav.Link>Buy Tickets</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
