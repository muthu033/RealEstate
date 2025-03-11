import React from "react"
import Heading from "../../common/Heading"
import "../recent/recent.css"
import RecentCard from "../../home/recent/RecentCard"


const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='─ Featured Property Listed' subtitle='Living in the heart of the city is good for your heart, Where skyline views, modern luxury, and amenities seamlessly merge, Discover the true definition of luxury' />
          <RecentCard/>
        </div>
      </section>
    </>
  )
}

export default Recent
