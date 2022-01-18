import React from 'react';
import Rating from '@mui/material/Rating';


const Testimonials = () => {
    return (

        <div className='testimonials-section'>
         <h3>What our clients say</h3>
         <div className='testimonials'>
            <div className='testimonial-card '>
                <div className='card-title'>
                    <h6>full name</h6>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </div>
                <div className='card-review'>
                    <p>“Lorem ipsum dolor sit amet, nam te nulla labore option.”</p>
                </div>
            </div>
            <div className='testimonial-card'>
                <div className='card-title'>
                    <h6>full name</h6>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                </div>
                <div className='card-review'>
                    <p>“Lorem ipsum dolor sit amet, nam te nulla labore option.”</p>
                </div>
            </div>
            <div className='testimonial-card'>
                <div className='card-title'>
                    <h6>full name</h6>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </div>
                <div className='card-review'>
                    <p>“Lorem ipsum dolor sit amet, nam te nulla labore option.”</p>
                </div>
            </div>
         </div>    
        </div>
    )
}

export default Testimonials;
