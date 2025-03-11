import React from "react"
import { lists } from "../../data/Data"
import { Link } from "react-router-dom"


const RecentCard = () => {
  
  
  return (
    <>
      <div className='content grid3 mtop'>
        {lists.map((val, index) => {
          const { cover, category, location, name, price, type, details } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img  src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
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
                <button className='btn2 ' ><Link className="text-decoration-none text-white" to={val.path}>{price}</Link></button>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
