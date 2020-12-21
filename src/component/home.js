import React,{Component} from 'react'
import Menue from './menue';
import FootBar from './footbar'
import { NavLink }  from 'react-router-dom'


class Home extends Component{

    render(){
         return(
             <div  class="container-home"   >
                 
                <Menue />

                    <img class="img-home"   src="./background.gif" alt="back"/>
                    
                    <button class="home-about-btn"> <NavLink style={{"color":"white","text-decoration":"none"}} to="/About" >About</NavLink> </button>
                    <button class="home-contact-btn">  <NavLink  style={{"color":"white","text-decoration":"none"}} to="/Contact" >Contact</NavLink> </button>
                    <div class="github-icon" >
                        <a href="https://github.com/engahmed10"> <img src="./iconfinder_github_273178.png" alt="github" />   </a>
                    </div>
                    <div  class="mail-icon">
                        <a href="mailto:eng.ahmedefendi@gmail.com" target="_blank">  <img src="./gmail-icon.png" alt="github" /> </a>
                    </div>
                    <FootBar/>

            </div>
          )
    } 
   
}

export default Home