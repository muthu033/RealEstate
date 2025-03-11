import React from "react";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Home from "../home/Home";
import ControlledCarousel from "../Apartment home/Apart 1/apart1";
import ControlledCarousels from "../Apartment home/Apart 2/apart2";
import ControlledCarouseles from "../Apartment home/Apart 3/apart3";
import Signup from "../Login/Signup";
import payment from '../Payment/PayApp'
import ControlledCarouselvilla1 from "../Villa/Villa 1/villa1";
import ControlledCarouselvilla2 from "../Villa/Villa 2/villa2";
import ControlledCarouselvilla3 from "../Villa/Villa 3/villa3";
import AgentForm from "../Agent/AgentForm"
import ControlledCarouselesesPlot1 from "../Plot/Plot1/Plot1"
import Propertyfetch from "../PropertyFetchdata/Propertyfetch"
import Propertyoverall from "../overall Property details/propertyoverall"
import ContactUs from "../Contact Us/Contact"
import AboutUs from "../About Page/About"
import PropertyDetails from "../PropertyFetchdata/Propertydetails"
import Sitevisit from "../Admin Panel/Adminpanel"
import Payapp from "../Payment/PayApp"
import Messagess from "../Admin Panel/messages"
import OverallProperty from "../PropertyFetchdata/Propertyfetch"

const Pages = () => {
  return (
    <Router>

        {/* //Home */}
        <Route exact path="/" component={Home} />
        <Route exact path="/Property" component={Propertyfetch}/>
        <Route exact path="/Contactus" component={ContactUs}/>
        <Route exact path="/adminpanel" component={Sitevisit}/>
        <Route exact path="/AboutUs"  component={AboutUs}/>
        

        {/* //Login Page */}
        <Route path="/login"  component={Signup}/>

        {/* //Payment */}
        <Route path="/payment" component={payment}/>

        {/* //ApartVillaPlot */}
        <Route path="/apart1" component={ControlledCarousel} />
        <Route path="/apart2" component={ControlledCarousels} />
        <Route path="/apart3" component={ControlledCarouseles} />
        <Route path="/villa1"  component={ControlledCarouselvilla1}/>
        <Route path="/villa2"  component={ControlledCarouselvilla2}/>
        <Route path="/villa3" component={ControlledCarouselvilla3}/>

        {/* //Agent Form */}
        <Route path="/postproperty" component={AgentForm}/>
        <Route path="/propertydetails" component={Propertyoverall}/>

        {/* //header search */}
        <Route path="/aparts1" component={ControlledCarousel} />
        <Route path="/villa1" component={ControlledCarouselvilla1}/>
        <Route path="/plotes1" component={ControlledCarouselesesPlot1}/>
        <Route path="/property/:id" component={PropertyDetails} />
        {/* <Route path="/detailedproperty" component={PropertyDetails}/> */}
        
        {/* // Payment page */}
        <Route path="/paymentspage" component={Payapp}/>
        <Route path="/Messag" component={Messagess}/>

        {/* //property explore */}
        <Route path="/proper" component={OverallProperty}/>
    </Router>
  );
};

export default Pages;
