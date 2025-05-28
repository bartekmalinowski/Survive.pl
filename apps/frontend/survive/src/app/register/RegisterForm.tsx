import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import Link from 'next/link';

function RegisterForm() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  const handleRegister = async () => {
    try {
      const response = await fetch('https://localhost:7261/api/Auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })

        
      });

      // if (!response.ok) {
      //   const errorText = await response.text();
      //   throw new Error(errorText);
      // }
      
      alert('Rejestracja zakończona sukcesem');
      await response.json();
      window.location.href = '/login';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      //setError(err.message);
    }

    console.log(username, email, password)

  };
  
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm='6'>
          <div className='d-flex flex-row  align-items-center ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
            <img src="logo.png" alt="Logo" className="h1 fw-bold mb-0" style={{ height: '10rem' }} />
          </div>
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Rejestracja</h3>
            {error && <p className="text-danger">{error}</p>}
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Nazwa użytkownika' id='formControlUsername' type='text' size="lg" value={username} onChange={(e) => setUsername(e.target.value)} />
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Adres e-mail' id='formControlEmail' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Hasło' id='formControlPassword' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />
            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={handleRegister} style={{ height: '50px' }}>
                            Register Now
                          </MDBBtn>
            <Link href='/login'><p className='ms-5'>Masz już konto? Zaloguj się tutaj</p></Link>
          </div>
        </MDBCol>
        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Register image"
            className="w-100"
            style={{ objectFit: 'cover', objectPosition: 'center', height: 'calc(100vh - 56px)' }} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegisterForm;
