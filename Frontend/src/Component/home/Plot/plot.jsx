import React from "react"
import Heading from "../../common/Heading"
import "../Plot/plot.css"
import Plotcard from "../Plot/plotcard"


const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='─ Recent Property Listed' subtitle='Living in the heart of the city is good for your heart, Where skyline views, modern luxury, and amenities seamlessly merge, Discover the true definition of luxury' />
          <Plotcard/>
        </div>
      </section>
    </>
  )
}

export default Recent
