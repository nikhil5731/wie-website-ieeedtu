import React from 'react'
import logo2 from "../Assets/IEEELOGO.png"
import logo1 from "../Assets/logo1.png"

/**
 * This function contains Navbar
 * @version 1.0.0
 * @since 1.0.0
 * @visibleName Navbar
 */
/// To add section in navbar, add Name in "../assets/navbarData.json"
const Navbar = () => {
    return (
        <>
            <div className='navbar-main'>
                <div className='logos-nav'>
                    <div className='nav-logo'>
                        <img src={logo1} alt="logo" className='navlogo-img' />
                    </div>
                    <a className='nav-logo1' href="https://www.ieeedtu.in" target="_blank" >
                        <img src={logo2} alt="logo" className='navlogo-img1' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar