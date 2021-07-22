import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import { ImQuotesLeft } from "react-icons/im";
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavBar.css'



const NavBar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <ImQuotesLeft className='navbar-icon' />
                            QUOTES
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>Articles</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/docs' className="nav-links" onClick={closeMobileMenu}>Docs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default NavBar;