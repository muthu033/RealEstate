import React, { Fragment, useState } from 'react';
import { Form, Button, Row, Col, InputGroup, Card } from 'react-bootstrap';
import axios from 'axios';
import './PropertyForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../common/footer/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../common/header/Header';

const PropertyForm = () => {
  const [propertyCategory, setPropertyCategory] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    // agent_id: '',
    city: '',
    district: '',
    state: '',
    country: '',
    building_name: '',
    street: '',
    zip_code: '',
    bedrooms: '',
    bathrooms: '',
    area_sqft: '',
    floor: '',
    unit_number: '',
    area_acres: '',
    zoning_type: '',
    floors: '',
    parking_spaces: '',
    images: [],
    videos: [],
  });

  const handleCategoryChange = (e) => {
    setPropertyCategory(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (key === 'images' || key === 'videos') {
        Array.from(formData[key]).forEach((file) => data.append(key, file));
      } else {
        data.append(key, formData[key]);
      }
    }
    data.append('propertyCategory', propertyCategory);

    try {
      const response = await axios.post('http://localhost:5003/api/createProperty', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success(response.data.message || 'Property created successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error creating property');
      toast.error(error);
    }
  };

  return (
    <Fragment>
     <Header/>
    <Card className="property-form-card shadow-lg">
      <Card.Body>
        <Form onSubmit={handleSubmit} className="property-form">
          <h2 className="text-center mb-4">Property Listing Form</h2>

          {/* Property Category Selection */}
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Property Category</Form.Label>
                <Form.Control as="select" name="propertyCategory" onChange={handleCategoryChange}>
                  <option value="">Select Category</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Plot">Plot</option>
                  <option value="Villa">Villa</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {/* Shared Location Fields */}
          <h5 className="mt-4 section-title">Location Details</h5>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Building Name</Form.Label>
                <Form.Control type="text" name="building_name" onChange={handleChange} placeholder="Building Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Street</Form.Label>
                <Form.Control type="text" name="street" onChange={handleChange} placeholder="Street Address" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>District</Form.Label>
                <Form.Control type="text" name="district" onChange={handleChange} placeholder="District" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control type="text" name="state" onChange={handleChange} placeholder="State" />
              </Form.Group>
            </Col>
          </Row>

          {/* Shared Property Details */}
          <h5 className="mt-4 section-title">Property Details</h5>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" onChange={handleChange} placeholder="Property Title" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control type="number" name="price" onChange={handleChange} placeholder="Enter Price" />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="description" onChange={handleChange} placeholder="Description" rows={3} />
              </Form.Group>
            </Col>
          </Row>

          {/* Conditional Fields for Apartment */}
          {propertyCategory === 'Apartment' && (
            <>
              <h5 className="mt-4 section-title">Apartment Details</h5>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Floor</Form.Label>
                    <Form.Control type="number" name="floor" onChange={handleChange} placeholder="Floor Number" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Unit Number</Form.Label>
                    <Form.Control type="text" name="unit_number" onChange={handleChange} placeholder="Unit Number" />
                  </Form.Group>
                </Col>
              </Row>
            </>
          )}

          {/* Conditional Fields for Plot */}
          {propertyCategory === 'Plot' && (
            <>
              <h5 className="mt-4 section-title">Plot Details</h5>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Area (in acres)</Form.Label>
                    <Form.Control type="number" step="any" name="area_acres" onChange={handleChange} placeholder="Area in Acres" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Zoning Type</Form.Label>
                    <Form.Control type="text" name="zoning_type" onChange={handleChange} placeholder="e.g., Residential, Commercial" />
                  </Form.Group>
                </Col>
              </Row>
            </>
          )}

          {/* Conditional Fields for Villa */}
          {propertyCategory === 'Villa' && (
            <>
              <h5 className="mt-4 section-title">Villa Details</h5>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Bedrooms</Form.Label>
                    <Form.Control type="number" name="bedrooms" onChange={handleChange} placeholder="Number of Bedrooms" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Bathrooms</Form.Label>
                    <Form.Control type="number" name="bathrooms" onChange={handleChange} placeholder="Number of Bathrooms" />
                  </Form.Group>
                </Col>
              </Row>
            </>
          )}

          {/* Image Upload */}
          <h5 className="mt-4 section-title">Property Images</h5>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Upload Images</Form.Label>
                <Form.Control
                  type="file"
                  name="images"
                  onChange={handleFileChange}
                  multiple
                  accept="image/*"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Video Upload (Optional) */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Upload Videos</Form.Label>
                <Form.Control
                  type="file"
                  name="videos"
                  onChange={handleFileChange}
                  multiple
                  accept="video/*"
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="w-100 mt-4 submit-button">
            Submit
          </Button>
        </Form>
      </Card.Body>
  <ToastContainer
  style={{ marginTop: '100px' }}
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
  />

    </Card>
    <Footer/>
  </Fragment>
    
    

  );
};

export default PropertyForm;
