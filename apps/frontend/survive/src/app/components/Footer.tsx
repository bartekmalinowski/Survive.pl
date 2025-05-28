"use client"; // Komponent klientowy

import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid style={styles.footer}>
      <div className="row p-2" style={styles.container}>
        <div className="col" style={styles.section}>
          <h2 style={styles.heading}>About us</h2>
          <p style={styles.paragraph}>
            Our site is an intermediate platform where risk and critical risk management exist. Let's take care of safety together.
          </p>
        </div>
        <div className="col" style={styles.section}>
          <h2 style={styles.heading}>Useful links</h2>
          <p style={styles.paragraph}>
            <a href="/about" style={styles.link}>About app</a>
          </p>
        </div>
        <div className="col" style={styles.section}>
          <h2 style={styles.heading}>Contact</h2>
          <p style={styles.paragraph}>
            Email: <a href="email" style={styles.link}>survive.pl@gmail.com</a>
          </p>
          <p style={styles.paragraph}>
            Phone Number: <a href="PhoneNumber" style={styles.link}>+48 123 456 789</a>
          </p>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.footerText}>
          &copy; {new Date().getFullYear()} Survive.pl. All rights reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: '#2C2F33',
    color: '#F9F9F9',
    padding: '20px 20px',
    fontSize: '0.9rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    flex: '1',
    minWidth: '200px',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#FFFFFF',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#CCCCCC',
  },
  link: {
    color: '#1ABC9C',
    textDecoration: 'none',
  },
  footerBottom: {
    marginTop: '20px',
    borderTop: '1px solid #444',
    paddingTop: '10px',
    textAlign: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: '0.8rem',
  },
};