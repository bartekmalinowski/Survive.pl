import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea
} from 'mdb-react-ui-kit';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = L.icon({
  iconUrl: 'https://static.thenounproject.com/png/335079-200.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

function ReportThreatForm() {
  const [position, setPosition] = useState<[number, number]>([52.0648, 19.4794]);
  const [radius, setRadius] = useState<number>(1000);
  const [regionName, setRegionName] = useState('');
  const [threatType, setThreatType] = useState('Other');
  const [dangerLevel, setDangerLevel] = useState(1);
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const payload = {
      threatID: 0,
      regionName: regionName,
      userId: 1, // Zmień na prawidłowy UserId z tabeli Users
      threatType: threatType,
      dangerLevel: dangerLevel,
      trustLevel: 0,
      description: description,
      status: "Pending", // Upewnij się, że ta wartość jest zgodna z CHECK constraint
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      latitude: position[0],
      longitude: position[1],
      phoneNumber: 0
    };
  
    try {
      const response = await fetch('https://localhost:7261/api/Threats', {
        method: 'POST',
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      
      if (!response.ok) {
        console.error('Błąd przy wysyłce zgłoszenia:', await response.text());
      } else {
        alert('Zgłoszenie wysłane pomyślnie');
        console.log('Zgłoszenie wysłane pomyślnie');
        setRegionName('');
        setThreatType('Other');
        setDangerLevel(1);
        setDescription('');
      }
    } catch (error) {
      console.error('Błąd:', error);
    }
  };

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return (
      <>
        <Marker position={position} icon={customIcon}>
          <Popup>
            Wybrana lokalizacja: <br /> Szerokość: {position[0]} <br /> Długość: {position[1]}
          </Popup>
        </Marker>
        <Circle
          center={position}
          radius={radius}
          pathOptions={{ color: 'red', fillColor: 'pink', fillOpacity: 0.5 }}
        />
      </>
    );
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm='6'>
          <div className='d-flex flex-row ps-5 pt-5'>
            <span className="h1 fw-bold mb-0">Report a Threat</span>
          </div>
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>
              Wypełnij formularz zgłoszenia poprawnymi danymi
            </h3>
            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                label='Region Name'
                id='formControlRegionName'
                type='text'
                size="lg"
                value={regionName}
                onChange={(e) => setRegionName(e.target.value)}
              />
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                label='Threat Range (radius in meter)'
                type="range"
                className="form-range"
                id="formControlDiameter"
                min="10"
                max="500000"
                step="10"
                size="lg"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
              />
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                type="number"
                className="form-control w-25 ms-3"
                id="formControlDiameterInput"
                min="10"
                max="500000"
                step="10"
                size="lg"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
              />
              <div className="mb-4 mx-5 w-100">
                <label htmlFor="formControlThreatType" className="form-label">
                  Type of Threat
                </label>
                <select
                  id="formControlThreatType"
                  className="form-select"
                  value={threatType}
                  onChange={(e) => setThreatType(e.target.value)}
                >
                  <option value="Natural Disaster">Natural Disaster</option>
                  <option value="Fire">Fire</option>
                  <option value="Flood">Flood</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                label='Danger Level (1-5)'
                id='formControlDangerLevel'
                type='number'
                size="lg"
                min="1"
                max="5"
                value={dangerLevel}
                onChange={(e) => setDangerLevel(Number(e.target.value))}
              />
              <MDBTextArea
                wrapperClass='mb-4 mx-5 w-100'
                label='Description of the Threat'
                id='formControlDescription'
                rows={4}
                size="lg"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <MDBBtn className="mb-4 px-5 mx-5 w-100" color='danger' size='lg' type="submit">
                Report Threat
              </MDBBtn>
            </form>
          </div>
        </MDBCol>
        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <MapContainer
            center={position}
            zoom={7}
            style={{ height: "calc(100vh - 56px)", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
          </MapContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ReportThreatForm;