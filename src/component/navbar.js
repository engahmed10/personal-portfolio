import { NavLink }  from 'react-router-dom'


const NavBar=()=>{

    return(
        <header>

            <div class="navlink" >
                <NavLink  class="link" to="/" >Home</NavLink>
                <NavLink  class="link" to="/About" >About</NavLink>
                <NavLink  class="link" to="/Contact" >Contact</NavLink>
                <NavLink  class="link" to="/Work"  > Works</NavLink>
                <img  src="./logo.png" />
            </div>
        
        </header>

    )
}

export default NavBar