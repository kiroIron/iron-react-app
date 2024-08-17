import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='Header-page'>
    <div className='header-logo'>
    <h1>
      IRON</h1>
    </div>
  <nav className='nav-container'>
        <ul className='nav-ul'>
            <li><Link to={"/"}>Home</Link> </li>
            <li><Link to={"/About"}>About</Link> </li>
            <li><Link to={"/Contact"}>Contact</Link> </li>
            <li><Link to={"/Log_in"}>Log_in</Link></li>
            
        </ul>
    </nav>
  </header>
  )
}

export default Navbar