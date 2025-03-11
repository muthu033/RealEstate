import React, { Fragment, useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure toast styles are loaded
import Header from '../common/header/Header';
import Footer from '../common/footer/footer';
import { useHistory } from 'react-router-dom';

const ContactComponent = () => {
  const history = useHistory(); // Use history from react-router-dom

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    saySomething: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5003/api/contact', formData);
      if (response.status === 201) {
        toast.success(response.data.message || "Message sent successfully");

        setTimeout(() => {
          history.push('/');
        }, 3000);
      } else {
        toast.error(response.data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred while sending message");
    }
  };

  return (
    <Fragment>
      <Header />
      <div className='allthefield'>
        <div className="c-container">
          <div className="c-row row">

            {/* Left Section */}
            <section className="c-col col-md-5">
              <div className="c-contactTitle">
                <h2>Get In Touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
              </div>

              <div className="c-contactInfo">
                <div className="c-iconGroup">
                  <div className="c-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="c-details">
                    <span>Phone</span>
                    <span>+00 110 111 00</span>
                  </div>
                </div>

                <div className="c-iconGroup">
                  <div className="c-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="c-details">
                    <span>Email</span>
                    <span>name.tutorial@gmail.com</span>
                  </div>
                </div>

                <div className="c-iconGroup">
                  <div className="c-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="c-details">
                    <span>Location</span>
                    <span>X Street, Y Road, San Francisco</span>
                  </div>
                </div>
              </div>

              <div className="c-socialMedia">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </section>

            {/* Right Section */}
            <section className="c-col col-md-7">
              <form className="c-messageForm" onSubmit={handleSubmit}>
                <div className="c-inputGroup c-halfWidth">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label>Your Name</label>
                </div>

                <div className="c-inputGroup c-halfWidth">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label>Email</label>
                </div>

                <div className="c-inputGroup c-halfWidth">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label>Phone</label>
                </div>

                <div className="c-inputGroup c-fullWidth">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <label>Subject</label>
                </div>

                <div className="c-inputGroup c-fullWidth">
                  <textarea
                    name="saySomething"
                    value={formData.saySomething}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label>Say Something</label>
                </div>

                <div className="c-inputGroup c-fullWidth">
                  <button className="c-btn" type="submit">Send Message</button>
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
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ContactComponent;
