import React, { useState } from "react";  // Make sure useState is imported
import { list } from "../../data/Data";
import { Link, useHistory } from "react-router-dom";  // Import useHistory for navigation
import Loader from "../../Loader/Loader";

const RecentCard = ({ price, val }) => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();  // Initialize history hook for navigation

  const handleClick = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      history.push(path);  // Use history.push for navigation
    }, 1000); // Show loader for 1 second (adjust timing as needed)
  };

  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type, details, path } = val;
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>
                    {category}
                  </span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4 className="text-black">{name}</h4>

                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>

                <h5 className="text-black">{details}</h5>
              </div>
              <div className='button flex'>
                <div>
                  <button className="btn2" onClick={() => handleClick(path)} disabled={isLoading}>
                    {price} 
                  </button>
                  {/* Conditionally render loader when isLoading is true */}
                  {isLoading && <Loader />}
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
