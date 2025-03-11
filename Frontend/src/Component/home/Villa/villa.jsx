import React from "react"
import Heading from "../../common/Heading"
import "../Villa/villa.css"
import Villacard from "../../home/Villa/villacard"


const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='─ Recent Property Listed' subtitle='Living in the heart of the city is good for your heart, Where skyline views, modern luxury, and amenities seamlessly merge, Discover the true definition of luxury' />
          <Villacard/>
        </div>
      </section>
    </>
  )
}

export default Recent

