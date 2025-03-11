import React, { Fragment, useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import'./apartplotvilla.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const PropertyForm = () => {
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);

  const handleBedroomChange = (value) => setBedrooms(value);
  const handleBathroomChange = (value) => setBathrooms(value);

  return (
    <Fragment>
    <div className="container mt-4">
      <h3>Tell us about your property</h3>

      <div className="mt-4">
        <h5>Add Room Details</h5>
        
        {/* Bedrooms */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>No. of Bedrooms</Form.Label>
          <Col sm={8} className="d-flex align-items-center">
            {[1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                variant={bedrooms === num ? 'primary' : 'outline-primary'}
                className="me-3"
                onClick={() => handleBedroomChange(num)}
              >
                {num}
              </Button>
            ))}
           
          </Col>
        </Form.Group>

        {/* Bathrooms */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>No. of Bathrooms</Form.Label>
          <Col sm={8} className="d-flex align-items-center">
            {[1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                variant={bathrooms === num ? 'primary' : 'outline-primary'}
                className="me-3"
                onClick={() => handleBathroomChange(num)}
              >
                {num}
              </Button>
            ))}
            
          </Col>
        </Form.Group>
      </div>
    </div>


    <div>

    <div className="container my-4" id='villass'>
      <h5>Price Details</h5>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="expectedPrice">
              <Form.Control type="text" placeholder="₹ Expected Price" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="pricePerSqFt">
              <Form.Control type="text" placeholder="₹ Price per sq.ft." />
            </Form.Group>
          </Col>
        </Row>

        <p className="text-muted">₹ Price in words</p>

        <Form.Check 
          type="checkbox"
          id="allInclusive"
          label="All inclusive price"
          className="mb-2"
        />

        <Form.Check 
          type="checkbox"
          id="taxExcluded"
          label="Tax and Govt. charges excluded"
          className="mb-2"
        />

        <Form.Check 
          type="checkbox"
          id="priceNegotiable"
          label="Price Negotiable"
        />
      </Form>
    </div>

    </div>
    </Fragment>
  );
};

export default PropertyForm;
