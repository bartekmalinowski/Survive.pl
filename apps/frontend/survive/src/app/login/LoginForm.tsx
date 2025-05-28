import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import Link from 'next/link';




function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const loginData = localStorage.getItem('loginData');
    if (loginData) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://localhost:7261/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.status !== 200) {
        alert('Login failed');
      }

      if(response.status === 200) {
          window.location.href = '/';
      }

      const data = await response.json();
      localStorage.setItem('loginData', JSON.stringify(data));
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm='6'>
          <div className='d-flex flex-row  align-items-center ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
            <img src="logo.png" alt="Logo" className="h1 fw-bold mb-0" style={{ height: '10rem' }} />
          </div>
          {isLoggedIn ? (
            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Jesteś już zalogowany</h3>
            </div>
          ) : (
            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
              {error && <p className="text-danger">{error}</p>}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Username' id='formControlUsername' type='text' size="lg" value={username} onChange={(e) => setUsername(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlPassword' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />
              <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={handleLogin} style={{ height: '50px' }}>
                Login
              </MDBBtn>
              <Link href='/register'><p className='ms-5'>Do not have an account? Register here</p></Link>
            </div>
          )}
        </MDBCol>
        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image"
            className="w-100"
            style={{ objectFit: 'cover', objectPosition: 'center', height: 'calc(100vh - 56px)' }} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginForm;
