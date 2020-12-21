import './App.css';
import { BrowserRouter as Router,Route,Switch,Link,NavLink}  from 'react-router-dom'
import  React,{Component}  from  'react'
import  { Redirect } from 'react-router';
import  About from './component/about'
import  Contact from './component/contact'
import  Home from './component/home'
import  Work from './component/works' 


function App() {
  return (
   
      <div class="App-container">

        <Router>
           
                <Route exact path="/"  render={routeProps => <Home {...routeProps} />} />
                <Route exact path="/About"     render={routeProps => <About {...routeProps}/>} />
                <Route exact path="/Work"      render={routeProps => <Work {...routeProps} />}  />
                <Route exact path="/Contact"   render={routeProps => <Contact {...routeProps} />} />
          
        </Router>

      </div>
    
  );
}

export default App;
