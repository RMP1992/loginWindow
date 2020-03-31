import React from 'react';
import './Password-style.css';

const Password = ()=>{
    return(
        <div className="login-form">
            <label htmlFor="Password" className="password">Password</label>
            <input type="text" className="input" />

        </div>
    )
}
export default Password;