import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Propertyfetch.css';
import Header from '../common/header/Header';
import Footer from '../common/footer/footer';

const RecentCard = () => {
  const [properties, setProperties] = useState([]);
  const fallbackImage = '/placeholder-image.jpg'; // Provide the path to your fallback image

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5003/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <Fragment>
      <Header/>
    <div className="content grid3 mtop">
      {properties.map((property) => (
        <div className="box shadow" key={property._id}>
          <div className="img">
            <img
              src={property.images && property.images[0] ? `http://localhost:5003/${property.images[0]}` : fallbackImage}
              alt={property.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImage;
              }}
            />
          </div>
          <div className="text">
            <div className="category flex">
            <div className="text-center" style={{ backgroundColor: '#fff4e5', borderRadius: '5px' ,height:"" }}>
      <span className="fw-bold" style={{ color: '#ff9800', fontSize: '0.9rem' }}>
       {property.propertyCategory}
      </span>
    </div>
              <i className="fa fa-heart"></i>
            </div>
            <h4 className="text-black">{property.title}</h4>
            <p>
              <i className="fa fa-location-dot"></i> {property.district}, {property.state}
            </p>
            <h5 className="text-black">₹<strong>{property.price}</strong></h5> 
            <p>
              <h6 style={{color:"#808080"}}>{property.description}</h6>
            </p>
          </div>
          <div className="button flex">
            <div>
              <button className="btn2">
                <Link className="text-decoration-none text-white" to={`/property/${property._id}`}>
                  View Details
                </Link>
              </button>
            </div>
            <span>{property.floor}</span>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </Fragment>
  );
};

export default RecentCard;
