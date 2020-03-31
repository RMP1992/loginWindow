import React from 'react';
import LogoImg from './image/logo.svg';
import Logo from './component/Logo';
import Heading from './component/Heading';
import Email from './component/Email';

import Button from './component/Button';
import './App.css';


const App = () => {
  

    
      return (
        <div className="login-window">
          <Logo image={LogoImg} />
          <Heading heading="Example login screen" subHeading="Getting started with Green" />
          <Email />
          <Button button="Sign in"/>
        </div>
      );
  
}

export default App;
