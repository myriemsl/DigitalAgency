import React from 'react';
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div>
                    <h5>Digital Agency</h5>
                    <h6>Digital Creative Agency</h6>
                </div>
                <div>
                    <h5>Contact</h5>
                    <h6><MdOutlineEmail className='footericon'/>email@website.com</h6>
                    <h6><MdOutlinePhone className='footericon'/>+123 456 789</h6>                    
                </div>
                <div>
                    <h5>Social</h5>
                    <h6>Facebook</h6>
                    <h6>Instagram</h6>
                    <h6>Twitter</h6>
                </div>
                <div>
                    <h5>Support</h5>
                    <h6>FAQ</h6>
                    <h6>Help</h6>
                    <h6>Privacy Policy</h6>
                </div>
            </div>
            <div className='copyright'>
               <h6>© 2022 | developed by myriemsl.dev</h6>
            </div>
        </>
    )
}

export default Footer;
