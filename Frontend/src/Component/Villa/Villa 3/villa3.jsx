import React, { Fragment } from "react"
import Back from "../../common/Back"
import Heading from "../../common/Heading"
import "../Villa 3/villa3.css"
import imge from "../../Villa/VillaImage/Villa8.jpg"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaCheck } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';



import image1 from '../VillaImage/Villa20.png';
import image2 from '../VillaImage/Villa14.jpg';
import image3 from '../VillaImage/Villa13.jpg';
import Header from "../../common/header/Header"
import Footer from "../../common/footer/footer"




function ControlledCarouselvilla3() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <>
    <Fragment>
      <Header/>
      <section className='about'>
        <Back name='Apartment' title='High-Rise Apartment with City View' cover={imge} />
        
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Cozy 1-Bedroom Scenic Views' subtitle='Eco-Friendly Green Apartment' />
            
            <p>"Discover the ultimate in luxury living with our spacious 2-bedroom apartments. Featuring high-end finishes, a gourmet kitchen with stainless steel appliances, and stunning views of the city skyline, these apartments provide a sophisticated space for relaxation and entertainment. <br/>Each bedroom is designed as a private sanctuary with ample closet space and an en-suite bathroom. Located in a vibrant neighborhood with easy access to cafes, parks, and public transportation, this apartment is perfect for those seeking elegance and convenience."</p>
           
          </div>
          <div className='right row'>
             <img src='./Villa40.jpg' alt='' style={{width:"1400px",height:"300px"}} /> 
          </div>
        </div>
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


    <div>
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
      <span class="for-rent-badge">For Rent</span>
      <div>
      </div>
      
    </div>
    </div>
    <div>
     

    

    
    
    
    
    
    </div>
    <div className="property-details">
      <h3>Why should you consider this property?</h3>
      <div className="tags">
        <span className="tag">Close to School</span>
        <span className="tag">Close to Airport</span>
        <span className="tag">Close to Railway Station</span>
      </div>

      <div className="property-info">
        {/* <div className="info-row">
          <span>Bedrooms: <strong>3BHK</strong></span>
          <span>Bathroom: <strong>2</strong></span>
        </div> */}
        <div className="info-row">
          <span>Bedrooms: <strong>3BHK</strong></span>
          <span>Bathroom: <strong>2</strong></span>
          <span>Area_sqft: <strong>2956 sq.ft.</strong></span>
        </div>
      </div>

      <div className="about-property">
        <h4>Agent Information</h4>
        <p><strong>Agent Name:</strong> Dhanush </p>
        <p><strong>Agent Id:</strong>25368</p>
      </div>
    </div>


    <div className="container my-3">
      <h5>Why you should consider this property?</h5>
      <div className="card shadow-sm" style={{ backgroundColor: '#f7faff' }}>
        <div className="card-body d-flex align-items-center">
          <div className="d-flex flex-column align-items-center me-4">
            <div className="p-2 rounded-circle bg-primary text-white" style={{ fontSize: '1.5rem' }}>
              <FaCheck />
            </div>
            <span className="text-center fw-bold">Key Highlights</span>
            <span className="text-muted">of the property</span>
          </div>
          <div className="flex-grow-1">
            <div className="row">
              <div className="col-md-6 mb-2">
                <FaCheck className="text-success me-2" />
                <span>East Facing</span>
              </div>
              <div className="col-md-6 mb-2">
                <FaCheck className="text-success me-2" />
                <span>Close to Metro Station</span>
              </div>
              <div className="col-md-6 mb-2">
                <FaCheck className="text-success me-2" />
                <span>Close to Mall</span>
              </div>
              <div className="col-md-6 mb-2">
                <FaCheck className="text-success me-2" />
                <span>Close to Market</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>




    <div>
<Footer/>
    </div>
      </Fragment>
    </>
  )
}

export default ControlledCarouselvilla3

