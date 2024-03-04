import '../styles/navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="nav_first">
            <img className='logo' src="./assets/Logo-6.jpg" alt="" />
        </div>
        <div className="nav_second">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Project</a>
            <a href="">Contacts</a>
        </div>
        <div className="nav_third">
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-solid fa-phone"></i>

        </div>
    </nav>
    
  )
}

export default Navbar