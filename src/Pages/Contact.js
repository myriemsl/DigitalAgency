import React from 'react';

const Contact = () => {
    return (
        <div className='container'>
            <div className='contactform'>
                <div>   
               <h3>Contact</h3>
                <form>
                   <div className='contactdetails'>
                      <div>
                         <label>Name & Surname</label>
                         <input type='text'/>
                      </div>
                      <div>
                         <label>Email Address</label>
                         <input type='email'/>
                       </div>
                   </div>
                   <div className='contactdescription'>
                      <label>Your Message</label>
                      <textarea rows='4' cols='40'/>
                   </div>
              </form>
              <button className='submitbtn'>Submit</button>
             </div>
            </div>
        </div>
    )
}

export default Contact;
