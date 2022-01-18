import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

    return (
        <div className='navbar'>
             <div className='navtitle'>
                <h5>Digital Creative Agency</h5>
            </div> 
            <div className={click ? "navitems active" : "navitems"}>
                <div className='navitem'>
                    <Link exact to="/DigitalAgency" activeClassName="active" className="navlink" onClick={handleClick}>Home</Link>
                </div>
                <div className='navitem'>
                    <Link exact to="/DigitalAgency/aboutus" activeClassName="active" className="navlink" onClick={handleClick}>About us</Link>
                </div>
                <div className='navitem'>
                    <Link exact to="/DigitalAgency/services" activeClassName="active" className="navlink" onClick={handleClick}>Services</Link>
                </div>
                <div className='navitem'>
                    <Link exact to="/DigitalAgency/contact" activeClassName="active" className="navlink" onClick={handleClick}><span>Contact</span></Link>
                </div>                    
            </div>
            <div className='navbaricon' onClick={handleClick}>
             { click ? <FaTimes/> : <FaBars/>}
           </div>
        </div>
    )
}

export default Navbar;
