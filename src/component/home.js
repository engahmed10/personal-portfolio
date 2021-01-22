import React,{Component} from 'react'
import Menue from './menue';
import FootBar from './footbar'
import { NavLink }  from 'react-router-dom'

class Home extends Component{



handleOpen=(e)=>{
  


}

    render(){
         return(
                <div  class="container-home" >
                 
                <img class="img-home"   src="./moon-design.gif" alt="back"/>
                
                <div class="github-icon" >
                    <a href="https://github.com/engahmed10" target="_blank"> <img src="./13974733961579688349-128.png" alt="github" />   </a>
                </div>

                <div  class="linkedin-icon">
                    <a href="https://www.linkedin.com/in/ahmed-afandy-52312986" target="_blank">  <img src="./linkedin.svg" alt="linkedin" /> </a>
                </div>

                <div  class="mail-icon">
                    <a href="mailto:eng.ahmedefendi@gmail.com" target="_blank">  <img src="./gmail.svg" alt="github" /> </a>
                </div>
                <div  class="resume-icon">
                      <a  target="_blank"  href="https://docs.google.com/document/d/1iMP7PonDSvU66JGannwcaPYABYseeRpsssWJ1Tq1prQ/edit">  <img src="./resume.png" alt="resume"  /> </a>
                </div>
       

                </div>
          )
    } 
   
}

export default Home