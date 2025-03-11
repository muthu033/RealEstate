import React, { useState, useEffect, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';  // Import useParams to get the dynamic ID
import axios from 'axios';
import './Propertyfetch.css';
import Carousel from 'react-bootstrap/Carousel';
import Back from '../common/Back';  // Make sure this is correctly imported
import confetti from 'canvas-confetti';


import Header from '../common/header/Header';
import Footer from '../common/footer/footer';
import image1 from '../PropertyFetchdata/Images/fetch2.jpg';
import image2 from '../PropertyFetchdata/Images/fetch8.jpg';
import image3 from '../PropertyFetchdata/Images/fetch9.jpg';
import img from '../PropertyFetchdata/Images/fetch6.jpg';
// import { Link } from '@mui/material';

const RecentCard = () => {
  const { id } = useParams();  // Get the dynamic 'id' from the URL
  const [properties, setProperties] = useState([]);
  const [index, setIndex] = useState(0);  // State to track the current carousel index
  const fallbackImage = '/placeholder-image.jpg';

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);  // Update index when the user selects a different slide
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`http://localhost:5003/api/properties/${id}`); // Use dynamic 'id' in the URL
        setProperties([response.data]); // Assuming a single property will be returned for each id
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };
    console.log(properties[0])

  

    if (id) {
      fetchProperties();
    }
  }, [id]);

const confettiBtn =()=>{
  confetti({
    particleCount:250,
    spread:150,
  })
}

  return (
    <Fragment>
      <Header />
      
      <section className='about'>
        <Back name='Apartment' title='High-Rise Apartment with City View' cover={img} />
      </section>

   
      <section className="about">
        {properties.map((property) => (
          <div className="container flex mtop" key={property._id}>
            <div className="left row">
              <h2>{property.title}</h2>
              <h4>{property.propertyCategory}</h4>
              <p>{property.description}</p>
              <p>Located in {property.district}, {property.state}.</p>
              <h5 className="text-black">₹<strong>{property.price}</strong></h5> 
            </div>
            <div className="right row">
              <img
                src={property.images && property.images[0] ? `http://localhost:5003/${property.images[0]}` : fallbackImage}
                alt={property.title}
                style={{ width: "1400px", height: "300px" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImage;
                }}
              />
            </div>
          </div>
        ))}
      </section>
      
     
      <div className="carr">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}  style={{height:"600px",width:"auto"}}  
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Modern Studio Apartment</h2>
              <p>"Studio apartment with open-concept design, close to city amenities."</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image2}  style={{height:"600px",width:"auto"}}  
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2>Spacious and Cozy Living Room</h2>
              <p> "Bright, cozy living room perfect for family gatherings and relaxation."</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1} style={{height:"600px",width:"auto"}}  
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2>Luxurious Three-Bedroom Apartment</h2>
              <p>"High-end three-bedroom apartment with upscale amenities and stunning views."</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

     
      <div className="property-overview">
        <div className="property-item">
          <i className="fas fa-ruler-combined"></i>
          <div>
            <h4>Dimensions</h4>
            <p>Plot area 2956 <span className="unit">sq.ft.</span></p>
            <small>(274.62 sq.m.)</small>
          </div>
        </div>

        <div className="property-item">
          <i className="fas fa-tags"></i>
          <div>
            <h4>Price</h4>
            <p>₹ 1.05 Crore+ Govt Charges & Tax</p>
            <small>@ 3,552 per sq.ft. (Negotiable)</small>
          </div>
        </div>

        <div className="property-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h4>Address</h4>
            <p>Urapakkam, Chennai</p>
          </div>
        </div>

        <div className="property-item">
          <i className="fas fa-compass"></i>
          <div>
            <h4>State</h4>
            <p>TamilNadu</p>
          </div>
        </div>

        <div className="property-item">
          <i className="fas fa-check-circle"></i>
          <div>
            <h4>Building name</h4>
            <p>Adobe Valley</p>
          </div>
        </div>

        <div className="property-item">
          <i className="fas fa-vector-square"></i>
          <div>
            <h4>Country</h4>
            <p>India</p>
          </div>
        </div>

        <div className="property-item">
          <i className="fas fa-calendar-check"></i>
          <div>
            <h4>Posted On</h4>
            <p>04-Nov-24</p>
          </div>
        </div>

        <div className="property-item">
          <i className="fas fa-building"></i>
          <div>
            <h4>Floors Allowed For Construction</h4>
            <p>4 Floors</p>
          </div>
        </div>
      </div>

     <Link to={{ 
    pathname: "/paymentspage",
    state:{ property: properties[0] } }}  // Pass the property data as state 
    className='text-decoration-none' ><button onClick={confettiBtn} className='btn2 for-rent-badge my-4 mx-10'>Buy Now</button> </Link>
     

    
     
      
      <Footer />
    </Fragment>
  );
};

export default RecentCard;
