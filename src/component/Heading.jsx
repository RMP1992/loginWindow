import React from 'react';
import './Heading-style.css';

const Heading = (props) =>{
    return(
        <div className="heading-container">
            <h2 className="heading">{props.heading}</h2>
            <h5 className="sub-heading">{props.subHeading}</h5>
        </div>
    )
}

export default Heading