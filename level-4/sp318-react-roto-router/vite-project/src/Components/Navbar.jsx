import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    
    return (
        <nav className="navbar">
            <h2><Link to='/'>Home</Link></h2>
            <h2><Link to='/about'>About</Link></h2>
            <h2><Link to='/services'>Services</Link></h2>
        </nav>
    )
}

export default Navbar