import React, { useState } from 'react';
import './Property.css';

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    type: 'plot', // Default to the first option
    title: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    lat: '',
    lng: '',
    price: '',
    size: '',
    features: [],
    images: [],
    videos: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: Array.from(files) // Store selected files
    });
  };

  const handleFeaturesChange = (e) => {
    setFormData({
      ...formData,
      features: e.target.value.split(',').map(feature => feature.trim()) // Split and trim features input
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic (e.g., API call)
  };

  return (
    <div className="background-container">
      <form className="form-overlay" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Property Form</h2>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        {/* Type Field */}
        <div className="mb-3">
          <label className="form-label">Property Type:</label>
          <select className="form-select" name="type" value={formData.type} onChange={handleChange} required>
            <option value="plot">Plot</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        {/* Title Field */}
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        {/* Description Field */}
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} rows="3"></textarea>
        </div>

        {/* Location Fields */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Address:</label>
            <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">City:</label>
            <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">State:</label>
            <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">ZIP Code:</label>
            <input type="text" className="form-control" name="zip" value={formData.zip} onChange={handleChange} required />
          </div>
        </div>
        {/* <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Latitude:</label>
            <input type="number" className="form-control" name="lat" value={formData.lat} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Longitude:</label>
            <input type="number" className="form-control" name="lng" value={formData.lng} onChange={handleChange} required />
          </div>
        </div> */}

        {/* Price and Size Fields */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Price:</label>
            <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Size (in sq ft):</label>
            <input type="number" className="form-control" name="size" value={formData.size} onChange={handleChange} />
          </div>
        </div>

        {/* Features Field */}
        {/* <div className="mb-3">
          <label className="form-label">Features (comma separated):</label>
          <input type="text" className="form-control" name="features" value={formData.features.join(', ')} onChange={handleFeaturesChange} />
        </div> */}

        {/* Images Upload Field */}
        <div className="mb-3">
          <label className="form-label">Images:</label>
          <input type="file" className="form-control" name="images" multiple accept="image/*" onChange={handleFileChange} />
        </div>

        {/* Videos Upload Field */}
        <div className="mb-3">
          <label className="form-label">Videos:</label>
          <input type="file" className="form-control" name="videos" multiple accept="video/*" onChange={handleFileChange} />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default PropertyForm;
