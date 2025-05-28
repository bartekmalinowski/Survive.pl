// components/Header.tsx
"use client"; // Oznacz komponent jako Client Component

import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Header = () => {
  return (
    <MDBContainer fluid className="text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6">
          <h1 className="display-4 fw-bold mb-4" style={{ color: '#2c3e50' }}>
            Stay and Feel Safe!
          </h1>
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#2c3e50' }}>
            Report, Alert, React!
          </h1>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Header;