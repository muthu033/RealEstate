import React, { Fragment, useState } from 'react';
import { Button, ButtonGroup, Form, Container } from 'react-bootstrap';
import './apartplotvilla.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function PropertyForm() {
  const [purpose, setPurpose] = useState('Sell');
  const [propertyType, setPropertyType] = useState('Residential');
  const [propertyCategory, setPropertyCategory] = useState('Flat/Apartment');

  const purposes = ['Sell'];
  const propertyTypes = ['Residential', 'Commercial'];
  const propertyCategories = [
    'Flat/Apartment',
    'Independent House / Villa',
    'Plot / Land',
  ];

  return (
    <Fragment>
      <div className="container my-4">
        <h5>I'm looking to</h5>
        <ButtonGroup>
          {purposes.map((item) => (
            <Button
              key={item}
              variant={purpose === item ? 'primary' : 'outline-secondary'}
              onClick={() => setPurpose(item)}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>

        <h5 className="mt-4" >What kind of property do you have?</h5>
        <Form>
          <div className="mb-3">
            {propertyTypes.map((type) => (
              <Form.Check
                inline
                key={type}
                type="radio"
                name="propertyType"
                label={type}
                checked={propertyType === type}
                onChange={() => setPropertyType(type)}
              />
            ))}
          </div>

          <div className="d-flex flex-wrap">
            {propertyCategories.map((category) => (
              <Button
                key={category}
                variant={propertyCategory === category ? 'primary' : 'outline-secondary'}
                className="m-1"
                onClick={() => setPropertyCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </Form>
      </div>

      <Container className="mt-4" id='plotss' >
        <h3>Where is your property located?</h3>
        <p className="text-muted">
          An accurate location helps you connect with the right buyers
        </p>

        <Form>
          {/* City */}
          <Form.Group controlId="formCity" className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter your city"  />
          </Form.Group>

          {/* Locality */}
          <Form.Group controlId="formLocality" className="mb-3">
            <Form.Label>Locality</Form.Label>
            <Form.Control type="text" placeholder="Enter your Location"  />
          </Form.Group>

          {/* Sub Locality (Optional) */}
          <Form.Group controlId="formSubLocality" className="mb-3">
            <Form.Label>Sub Locality (Optional)</Form.Label>
            <Form.Control type="text" placeholder="Sub Locality (Optional)" />
          </Form.Group>

          {/* Apartment / Society */}
          <Form.Group controlId="formApartmentSociety" className="mb-3">
            <Form.Label>Apartment / Society</Form.Label>
            <Form.Control type="text" placeholder="Shree Varu Trichy Loganathan Palace" defaultValue="Shree Varu Trichy Loganathan Palace" />
          </Form.Group>

          {/* House No. (Optional) */}
          <Form.Group controlId="formHouseNumber" className="mb-3">
            <Form.Label>House No. (Optional)</Form.Label>
            <Form.Control type="text" placeholder="House No. (Optional)" />
          </Form.Group>
        </Form>
      </Container>
    </Fragment>
  );
}

export default PropertyForm;
