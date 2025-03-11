import React from 'react';
import Map from './Map';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="input-row">
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Your Surname" required />
          </div>
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Your Subject" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
};

export default ContactUs;
