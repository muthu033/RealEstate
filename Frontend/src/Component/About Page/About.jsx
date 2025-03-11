import React, { Fragment } from "react";
import { FiAward, FiUsers, FiHome, FiThumbsUp } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../common/header/Header";
import OurTeam from "../Our Team/team"
import Footer from "../common/footer/footer";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Davis",
      position: "CEO & Founder",
      image: "images.unsplash.com/photo-1560250097-0b93528c311a",
      description: "With 15 years of experience in real estate, John leads our company with vision and expertise.",
    },
    {
      name: "Sarah Wilson",
      position: "Head of Sales",
      image: "images.unsplash.com/photo-1573496799652-408c2ac9fe98",
      description: "Sarah brings 10 years of sales excellence and customer relationship management to our team.",
    },
    {
      name: "Michael Brown",
      position: "Senior Property Consultant",
      image: "images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "Michael specializes in luxury properties and has closed over 500 successful deals.",
    },
  ];

  const stats = [
    { icon: <FiHome size={24} />, count: "1000+", label: "Properties Sold" },
    { icon: <FiUsers size={24} />, count: "50000+", label: "Happy Clients" },
    { icon: <FiAward size={24} />, count: "25+", label: "Years Experience" },
    { icon: <FiThumbsUp size={24} />, count: "100%", label: "Client Satisfaction" },
  ];

  return (
    <Fragment>
        <Header/>
    <div className="bg-white py-5 mt-5">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3">About Our Real Estate Company</h1>
          <h5 className="text-secondary">Building Dreams, Delivering Excellence</h5>
        </div>

        {/* Mission Statement */}
        <div className="row mb-5">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Office building"
              className="img-fluid rounded"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h4 className="fw-bold mb-3">Our Mission</h4>
              <p>
                At Premier Real Estate, we are dedicated to providing exceptional real estate services to our clients. Our mission is to help people find their perfect homes and make smart investment decisions in the real estate market.
              </p>
              <p>
                We believe in transparency, integrity, and building long-lasting relationships with our clients. Our team of experienced professionals works tirelessly to ensure that every real estate transaction is smooth and successful.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="row text-center mb-5">
          {stats.map((stat, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <div className="p-4 bg-light rounded">
                <div className="text-primary mb-2">{stat.icon}</div>
                <h4 className="fw-bold">{stat.count}</h4>
                <p className="text-secondary">{stat.label}</p>
              </div>
            </div>
          ))}
          
        </div>
        
     </div>
     
      </div>
      <OurTeam/>
      
      <Footer/>
      </Fragment>
   
  );
};

export default AboutUs;
