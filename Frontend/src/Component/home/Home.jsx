import React from "react"
import Featured from "../home/featured/Featured"
import Hero from "../home/hero/Hero"
import Location from "../home/location/Location"
import Recent from "../home/recent/Recent"
import Rent from "../home/rent/rent"
import Awards from "../home/awards/awards"
import Header from "../common/header/Header"
import Footer from "../common/footer/footer"
import Villa from "../home/Villa/villa"
import Plot from "../home/Plot/plot"
import Testimonials from "./Testimonial/Testimonials"
import RelatedImage from "./related Field/related"
// import BodyContent from "../home/bodycontent/content"
import 'bootstrap/dist/css/bootstrap.min.css';







const Home = () => {
  return (
    <>
    <Header />
    <Hero/>
    <Featured/>
    <Recent/> 
    <Rent/> 
    <Villa/>
    <Awards/>
    <Plot/>
    <RelatedImage/>
    <Location/>
    {/* <BodyContent/> */}
   <Testimonials/> 
   <Footer/>     
   
     
    </>
  )
}

export default Home
