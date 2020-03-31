import React, { Component } from 'react';
import LogoImg from './image/logo.svg';
import Logo from './component/Logo';
import Heading from './component/Heading';
import Email from './component/Email';
import Password from './component/Password';
import Button from './component/Button';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      display: false,
      
    }
  }
    password = () =>{
      console.log('clicked')
      if(this.state.display === false){
        this.setState({display: this.setState.display = true})
      }else{
        this.setState({display: this.setState.display = false})
      }

    }

    render(){
      return (
        <div className="login-window">
          <Logo image={LogoImg} />
          <Heading heading="Example login screen" subHeading="Getting started with Green" />
          <Email />
          {this.state.display ? <Password /> : null } 
          <Button button="Sign in" func={this.password} myState={this.state.display}/>
        </div>
      );
    }
}

export default App;
