import React, { Fragment } from 'react';
import "../rent/rent.css"
import Heading from '../../common/Heading';
import rentImage from '../../../../public/rent.jpg';
import {Link} from "react-router-dom"


const RentalHomes = () => {
    return (


<Fragment>
        <div className='container' style={{fontSize:""}}>
        <Heading title='─ All Propery needs -One Place ' subtitle='Find Better Places to Live, Work and Wonder...'/>

        </div>
        <div className="rental-homes-section">
            
            <div className="image-container">

        
            <img src={rentImage} alt="Rental Homes" className="rental-image" />
        
            </div>
            <div className="content-container">
                <h2 style={{color:"#3C3C3C"}}>BUY A HOME</h2>
                <h3 className="titles" style={{fontSize:"30px"}}>Rental Homes for <br/>Everyone...!</h3>
                <p className="description" style={{fontSize:"18px"}}>
                    Explore from Apartments, land, builders, floors, Villas and more...
                </p>
              <Link to="/proper">  <button className="explore-button">Explore Buying</button> </Link>
            </div>
        </div>
        </Fragment>
    );
};

export default RentalHomes;
