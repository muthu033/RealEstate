import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "../../../assets/Relatedimage.jpg";
import "./related.css";
import { Link } from 'react-router-dom';

const BoxSection = () => {
  return (
    <div className="c-box-container container py-5 text-white" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '350px', borderRadius: "30px" }}>
      <div className="row">
        <div className="col-md-6">
          <h6 className="c-box-title text-uppercase">Reach Your Dream</h6>
          <h1 className="c-box-heading display-4 fw-bold">Get the Right Help</h1>
          <p className="c-box-paragraph">
            Explain to you how all this mistaken idea of denouncing all praising pain was born and completed.
          </p>
          <Link to="/ContactUs" className="c-box-link btn btn-outline-light btn-lg">
            Contact Us
          </Link>
        </div>
        <div className="col-md-6">
          <ul className="c-box-list list-unstyled">
            <li className="my-3">
              <Link to="/entering-leaving-country" className="c-box-item text-white text-decoration-none">
                <span className="me-3">⭐</span>Featured Properties →
              </Link>
            </li>
            <li className="my-3">
              <Link to="/visas" className="c-box-item text-white text-decoration-none">
                <span className="me-4">⭐</span>Rental Properties →
              </Link>
            </li>
            <li className="my-3">
              <Link to="/citizenship" className="c-box-item text-white text-decoration-none">
                <span className="me-3">⭐</span>Real Estate News →
              </Link>
            </li>
            <li className="my-3">
              <Link to="/settling-in-country" className="c-box-item text-white text-decoration-none">
                <span className="me-4">⭐</span>Investment Guide →
              </Link>
            </li>
            <li className="my-3">
              <Link to="/help-support" className="c-box-item text-white text-decoration-none">
                <span className="me-5 ">⭐</span>Property Management →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
