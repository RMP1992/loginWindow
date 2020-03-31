import React from 'react'
import './Email-style.css';

const Login = (props) =>{
    return(
        <React.Fragment>
            <div className="login-form">
                <label htmlFor="Email Address" className="email"> Email Address</label>
                <input type="text" className="input" />
            </div> 
            
            
                
        </React.Fragment>  
        
    );
}

export default Login;