import React from 'react';
import './Button-style.css';

const Button = (props) =>{
    return(
        <React.Fragment>
            <div className="checkbox-container">
                    
                <input type="checkbox" className="checkbox"/>
                <label htmlFor="Checkbox" className="checkbox-label" >Remenber this device</label>
    
            </div> 
            <div>
                <button type="submit" className="submit-btn">{props.button}</button>
            </div>
        </React.Fragment>
        
    );
}
export default Button