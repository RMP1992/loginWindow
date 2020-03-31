import React from 'react';
import './Logo-style.css';

const Logo = (props) => {
    return(

        <img src={props.image} alt="green. logo" className="logo" />
    );
}

export default Logo;