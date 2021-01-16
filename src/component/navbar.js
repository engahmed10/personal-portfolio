import { NavLink }  from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import { slide as Menu } from 'react-burger-menu'


const NavBar=()=>{
  
    return(
       <>
          <div class="navlink" >
       
                <Link  class="link"

                    activeClass="active"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}

                  >Home
                  </Link>

                    <Link  class="link"

                    activeClass="active"
                    to="work"
                 
                    smooth={true}
                    offset={50}
                    duration={500}
                 
                  >Work
                  </Link>

                <Link  class="link" 

                    activeClass="active"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}

                >About
                </Link>

                <Link  class="link"

                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    
                 >Contact</Link>
          
            </div>

           
         </>

    )
}

export default NavBar

