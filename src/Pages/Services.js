import React from 'react';
import { MdOutlineDesignServices, MdOutlineAdsClick } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { GiArrowScope } from "react-icons/gi";

const Services = () => {
    return (
        <div className='container'>
            <div className='services'>
              <div className='services-page-box'>
                  <div>
                     <h3>Strategie <GiArrowScope className='servicesicon'/></h3>
                   </div>
                  <div className='services-box'>
                       <div className='box'>
                         <h4>Strategie</h4>
                         <p>Lorem ipsum dolor sit amet</p>
                       </div>
                       <div>
                         <h4>Strategie</h4>
                         <p>Lorem ipsum dolor sit amet</p>
                       </div>
                       <div>
                         <h4>Strategie</h4>
                         <p>Lorem ipsum dolor sit amet</p>
                       </div>
                  </div>
               </div>
               <div className='services-page-box'>
                  <div>
                     <h3>Design <MdOutlineDesignServices className='servicesicon'/></h3>
                   </div>
                  <div className='services-box'>
                       <div className='box'>
                         <h4>Design</h4>
                         <p>Lorem ipsum dolor sit amet</p>
                       </div>
                       <div>
                         <h4>Design</h4>
                         <p>Lorem ipsum dolor sit amet</p>
                       </div>
                       <div>
                         <h4>Design</h4>
                         <p>Lorem ipsum dolor sit amet</p>
                       </div>
                  </div>
               </div>
               <div className='services-page-box'>
                  <div>
                     <h3>Development <BsCodeSlash className='servicesicon'/></h3>
                   </div>
                  <div className='services-box'>
                       <div className='box'>
                         <h4>Development</h4>
                         <p>Lorem ipsum dolor sit amet</p>
                       </div>
                       <div>
                         <h4>Development</h4>
                         <p>Lorem ipsum dolor sit amet</p>
                       </div>
                       <div>
                         <h4>Development</h4>
                         <p>Lorem ipsum dolor sit amet</p>
                       </div>
                  </div>
               </div>
               <div className='services-page-box'>
                  <div>
                     <h3>Marketing <MdOutlineAdsClick className='servicesicon'/></h3>
                   </div>
                  <div className='services-box'>
                       <div className='box'>
                         <h4>Marketing</h4>
                         <p>Lorem ipsum dolor sit amet</p>
                       </div>
                       <div>
                         <h4>Marketing</h4>
                         <p>Lorem ipsum dolor sit amet</p>
                       </div>
                       <div>
                         <h4>Marketing</h4>
                         <p>Lorem ipsum dolor sit amet</p>
                       </div>
                  </div>
               </div>
            </div>
        </div>
    )
}

export default Services;

