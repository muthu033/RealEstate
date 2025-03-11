import React, { useState, Fragment } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './Agent.css';
import Header from '../common/header/Header';
import Footer from '../common/footer/footer';
import { useHistory } from 'react-router-dom';

export default function AgentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bio: '',
    profilePhoto: null,
  });
  
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePhoto: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('bio', formData.bio);
    if (formData.profilePhoto) data.append('profile_picture', formData.profilePhoto);

    try {
      const response = await axios.post('http://localhost:5003/api/createAgent', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        toast.success(response.data.message || 'Agent profile created successfully!');
        
        setTimeout(() => {
          history.push('/propertydetails');
        }, 3000); 
      } else {
        toast.error(response.data.message || 'Failed to create agent profile.');
      }
    } catch (error) {
      console.error('Error creating agent profile:', error);
      toast.error('Error creating agent profile. Please try again.');
    }
  };

  return (
    <Fragment>
      <Header />
    
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="bg-background">
        <div className="container py-5">
          <div className="row py-5 g-3">
            <div className="col-md-6 first_col">
              <h1 className="text-center text-black mt-3">Register</h1>
              <form className="p-4 mt-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Enter your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    className="form-control"
                    id="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">Enter your bio</label>
                  <textarea
                    className="form-control"
                    id="bio"
                    rows="3"
                    name="bio"
                    onChange={handleChange}
                    value={formData.bio}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="profilePhoto">Profile Photo</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="profile_picture"
                    name="profile_picture"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary">Next</button>
                </div>
              </form>
              <ToastContainer
  style={{ marginTop: '100px' }}
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
  />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
