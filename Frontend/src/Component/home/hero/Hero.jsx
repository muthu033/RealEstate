import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const history = useHistory(); // Use history from useHistory
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Check location, propertyType, and priceRange to navigate or show error
    if (location === "Tamilnadu" && propertyType === "villa" && priceRange === "0-50000") {
      history.push('/villa1'); 
    } else if (location === "Tamilnadu" && propertyType === "plot" && priceRange === "0-50000") {
      history.push('/plotes1'); 
    } else if (location === "Tamilnadu" && propertyType === "apartment" && priceRange === "0-50000") {
      history.push('/aparts1');
    } else {
      toast.error("No properties match your criteria.");
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <Heading 
           title={
            <>
             <span style={{ color: "#C18501" }}> Let's Find </span> Your Dream Property
            </>
          }
          subtitle="Find new & featured property located in your local city."
        />
        <h3 style={{ color: "white", padding: "20px" }}>Instant Property Deals:</h3>
        <h2 style={{ color: "white", paddingLeft: "150px", fontFamily: "Poppins" }}>
          Buy, Sell, and Rent
        </h2>

        <form className="flex" onSubmit={handleSearch}>
          <div className="box">
            <span>City/Street</span>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">Select Location</option>
              <option value="Tamilnadu">Tamil Nadu</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>

          <div className="box">
            <span>Property Type</span>
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="">Select Type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="plot">Plot</option>
            </select>
          </div>

          <div className="box">
            <span>Price Range</span>
            <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
              <option value="">Select Price Range</option>
              <option value="0-50000">₹0 - ₹50,000</option>
              <option value="50000-100000">₹50,000 - ₹100,000</option>
              <option value="100000-200000">₹100,000 - ₹200,000</option>
              <option value="200000-500000">₹200,000 - ₹500,000</option>
              <option value="500000+">₹500,000+</option>
            </select>
          </div>

          <div className="box">
            <h4 className="text-black">Advance Filter</h4>
          </div>

          <button type="submit" className="btn4">
            <i className="fa fa-search"></i>
          </button>
        </form>

        {/* ToastContainer for displaying notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </div>
    </section>
  );
};

export default Hero;
