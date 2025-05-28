import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBTextArea
} from 'mdb-react-ui-kit';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = L.icon({
    iconUrl: 'https://static.thenounproject.com/png/335079-200.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

function ReportResourceForm() {
    const [position, setPosition] = useState<[number, number]>([52.0648, 19.4794]); // Default location
    const [resourceName, setResourceName] = useState<string>('');
    const [resourceType, setResourceType] = useState<string>('Other');
    const [regionName, setRegionName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    // Component to handle map clicks and set position
    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                setPosition([e.latlng.lat, e.latlng.lng]);
            },
        });

        return (
            <Marker position={position} icon={customIcon}>
                <Popup>
                    Selected Location: <br /> Latitude: {position[0]} <br /> Longitude: {position[1]}
                </Popup>
            </Marker>
        );
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            
            resourceType: resourceType,
            description: description,
            regionName: regionName,
            trustLevel: 0, // Default value, can be updated later
            sourceName: resourceName,
            sourceContact: phoneNumber,
            status: "Pending", // Default status
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            longitude: position[1],
            latitude: position[0],
            range: 0,
            phoneNumber: phoneNumber
        };

        try {
            const response = await fetch('https://localhost:7261/api/Resources', {
                method: 'POST',
                headers: {
                    'accept': 'text/plain',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Resource reported successfully!');
                // Reset form fields
                setResourceName('');
                setResourceType('Other');
                setRegionName('');
                setDescription('');
                setPhoneNumber('');
            } else {
                alert('Failed to report resource.');
            }
        } catch (error) {
            console.error('Error reporting resource:', error);
            alert('An error occurred while reporting the resource.');
        }
    };

    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol sm='6'>
                    <div className='d-flex flex-row ps-5 pt-5'>
                        <span className="h1 fw-bold mb-0">Report Resource</span>
                    </div>

                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                        <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Fill the report form with valid data</h3>

                        <form onSubmit={handleSubmit}>
                            {/* Resource Name */}
                            <MDBInput
                                wrapperClass='mb-4 mx-5 w-100'
                                label='Resource Name'
                                id='formControlResourceName'
                                type='text'
                                size="lg"
                                value={resourceName}
                                onChange={(e) => setResourceName(e.target.value)}
                                required
                            />

                            {/* Resource Type (Dropdown List) */}
                            <div className="mb-4 mx-5 w-100">
                                <label htmlFor="formControlResourceType" className="form-label">Type of Resource</label>
                                <select
                                    id="formControlResourceType"
                                    className="form-select"
                                    value={resourceType}
                                    onChange={(e) => setResourceType(e.target.value)}
                                    required
                                >
                                    <option value="Other">Choose a resource type...</option>
                                    <option value="Water">Water</option>
                                    <option value="Food">Food</option>
                                    <option value="Medicine">Medicine</option>
                                    <option value="Equipment">Equipment</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Region Name */}
                            <MDBInput
                                wrapperClass='mb-4 mx-5 w-100'
                                label='Region Name'
                                id='formControlRegionName'
                                type='text'
                                size="lg"
                                value={regionName}
                                onChange={(e) => setRegionName(e.target.value)}
                                required
                            />

                            {/* Description */}
                            <MDBTextArea
                                wrapperClass='mb-4 mx-5 w-100'
                                label='Description of the Resource'
                                id='formControlDescription'
                                rows={4}
                                size="lg"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />

                            {/* Phone Number */}
                            <MDBInput
                                wrapperClass='mb-4 mx-5 w-100'
                                label='Phone Number'
                                id='formControlPhone'
                                type='tel'
                                size="lg"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                pattern="^\+?[0-9]{1,4}?[-.●]?[0-9]{1,3}[-.●]?[0-9]{1,4}[-.●]?[0-9]{1,4}[-.●]?[0-9]{1,9}$"
                                required
                            />


                        

                            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='danger' size='lg' type="submit">
                                Report Resource
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

export default ReportResourceForm;