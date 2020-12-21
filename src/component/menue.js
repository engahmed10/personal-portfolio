import React,{Component} from 'react'
import NavBar from './navbar'
import { slide as Menu } from 'react-burger-menu'


class  Menue extends Component{
     state={
         toggle:false
     }

     handleModal=(e)=>{
        e.preventDefault();
        this.setState(previousState=>{

             return { toggle: !previousState.toggle }
        })

     }
     render(){

         return (
         <div>
       
                  <div class="sidebar">
                    <Menu right customBurgerIcon={ <img src="menuicon.png" />}  width={ '30%' }   >
                     <a id="home" className="menu-item" href="/">Home</a>
                     <a id="about" className="menu-item" href="/about">About</a>
                     <a id="contact" className="menu-item" href="/contact">Contact</a>
                     <a id="works" className="menu-item" href="/work">Works</a>
                    </Menu>
                  </div>

                  <NavBar />
            
         </div>
     
        
      )
     }

}

export default  Menue
 
