import React from 'react';
import { FiUsers } from "react-icons/fi";

const AboutUs = () => {
    return (
        <>
        <div className='container'>
            <div className='aboutus'>
                <div className='aboutus-section'>
                    <div>
                     <h5>About us</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div>
                        <FiUsers className='aboutus-icon'/>
                    </div>
                </div>
                <div className='aboutus-section'>
                    <div>
                        <FiUsers className='aboutus-icon'/>
                    </div>
                    <div>
                     <h5>Our teams</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
        </> 
    )
}

export default AboutUs;
