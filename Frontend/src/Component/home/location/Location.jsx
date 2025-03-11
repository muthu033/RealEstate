import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "../location/style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='─ Explore Real Estate in Popular Indian Cities' subtitle='Choose a wide Property in your own style, and to become a member in the community, To be unique with the ways to buy a property as a customers for us.'/>
          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
