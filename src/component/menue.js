import React,{Component} from 'react'
import NavBar from './navbar'
import { slide as Menu } from 'react-burger-menu'
import { Link, animateScroll as scroll } from "react-scroll";


class  Main extends Component{
  
     render(){

         return (
         <div>
      
    
                <NavBar />
      
                <div class="sidebar">
                  <Menu right customBurgerIcon={ <img src="menuicon.png" />} width={ '30%' }   >
                   <Link  class="link"

                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="menu-item"

                  >Home
                  </Link>

                  <Link  class="link"

                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="menu-item"

                  >About
                  </Link>

                    <Link  class="link"

                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="menu-item"

                    >Work
                  </Link>

                
                   <Link  class="link"

                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="menu-item"

                    >Contact
                  </Link>

               
                  </Menu>
                </div>

         </div>
        
      )
     }

}

export default  Main
 
