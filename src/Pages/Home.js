import React from 'react';
import Social from '../Components/Social';
import { Link } from 'react-router-dom';
import Testimonials from '../Components/Testimonials';
import { MdOutlineDesignServices, MdOutlineAdsClick } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { GiArrowScope } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";


const Home = () => {
    return (
        <>
        <div className='container'>
            <div className='home'>
                <div>
                    <Social/>
                </div>
                <div className='home-description'>
                    <h3>Welcome</h3>
                    <h5>We help you to grow your business</h5>
                    <h5>& Create your digital presence</h5>
                </div>
                <div>
                </div>
            </div>    
            
        </div>
        <div className='home-aboutus'>
            <div>
                <h3><FiUsers className='home-aboutus-icon'/></h3>
            </div>
            <div>
             <h2>About us</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <Link exact to="/DigitalAgency/aboutus" className='homelink'> more about us  <AiOutlineArrowRight style={{verticalAlign:'middle'}}/></Link>
            </div>
        </div>
        <div className='home-services'>
            <div>
                <h3>Our services</h3>
            </div>
            <div className='home-services-box'>
                <div className='first-box'>
                    <h4>Strategie</h4>
                    <GiArrowScope className='services-icon'/>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <h4>Design</h4>
                    <MdOutlineDesignServices className='services-icon'/>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <h4>Development</h4>
                    <BsCodeSlash className='services-icon'/>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <h4>Marketing</h4>
                    <MdOutlineAdsClick className='services-icon'/>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div>
             <Link exact to="/DigitalAgency/services" className='homelink'> more services <AiOutlineArrowRight style={{verticalAlign:'middle'}}/></Link>
            </div>
        </div>
        <div>
         <Testimonials/>
        </div>
        <div className='start'>
            <h2>Want to start? Contact us</h2>
            <Link exact to="/DigitalAgency/contact" className='homelink'>contact <AiOutlineArrowRight style={{verticalAlign:'middle'}}/></Link>
        </div>
        </>
    )
}

export default Home;
