"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScroll() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loginData = localStorage.getItem('loginData');
    if (loginData) {
      const parsedData = JSON.parse(loginData);
      setUser(parsedData.user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">Survive</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              maxHeight: '100px'
            }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Report" id="navbarScrollingDropdown"> 
              <NavDropdown.Item href="\report">Report</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="\resource">Resource</NavDropdown.Item>
              
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          {user ? (
            <>
              <span className="me-3 ms-3">Witaj {user.username}</span>
              <Button className="ms-3" onClick={handleLogout}>Wyloguj</Button>
            </>
          ) : (
            <Nav.Link href="/login">
              <Button className="ms-3">Login</Button>
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;