import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Navbar.css"

function Nav() {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to ="/Fav" className="nav-link">Favorites</Link>
        </div>
    </nav>
  )
}

export default Nav