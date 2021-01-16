import './App.css';
import  About from './component/about'
import  Contact from './component/contact'
import  Home from './component/home'
import  Work from './component/work' 
import  NavBar from './component/navbar';
import  FootBar from './component/footbar' 
import React, { Component } from "react";
import Main from './component/menue';
import { slide as Menu } from 'react-burger-menu'

class App extends Component {

 
  render() {
    
          return (
                <div class="App-container">        
                        <Main />
                        <Home  />
                        <About/>
                        <Contact />
                        <Work />
                        <FootBar />             
                </div>

         )
    }

}

export default App;
