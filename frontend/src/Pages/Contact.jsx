import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-body'>
        {/**left */}
        <div className='left-part'>
            <h1> Contact Information</h1>
            <div className='contact-infor'>
                <div className='tel'>
                <div><i class="fa-solid fa-phone-volume"></i></div>
                <p> 076-6445678</p>
                </div>
                <div className='mas'>
                <i class="fa-solid fa-envelope"></i>
                <p>demo@gmail.com</p>
                </div>
                <div className='loc'>
                <i class="fa-solid fa-location-dot"></i>
                <p>132 Dartmouth Street Boston,<br/> Massachusetts 02345 United states</p>
                </div>
            </div>
            <div className='social'>
                <a href='https://www.youtube.com/watch?v=IcrbM1l_BoI' className='what'><i class="fa-brands fa-square-whatsapp"></i></a>
                <a href='https://www.youtube.com/watch?v=IcrbM1l_BoI' className='face'><i class="fa-brands fa-facebook"></i></a>
                <a href='https://www.youtube.com/watch?v=IcrbM1l_BoI' className='inst'><i class="fa-brands fa-square-instagram"></i></a>            
            </div>
        </div>

        {/**right */}
        <div className='right-side'>
            <form className='right-container'>
                <div className='fist-line'>
                <div className='f-n'>
                    <p>First Name</p>
                    <input type='test' placeholder='First Name'/>
                </div>
                <div className='l-n'>
                    <p>Last Name</p>
                    <input type='test' placeholder='Last Name'/>
                </div>
                </div>
                <div className='seconed-line'>
                <div className='ep'>
                    <p>Email</p>
                    <input type="email" id="email" name="email" placeholder='Email'/>
                </div>
                <div className='ep1'>
                    <p>Phone Number</p>
                    <input type="tel" id="phone" name="phone" placeholder="+101 2345 678" pattern="\+94\s\d{9}" required/>
                </div>
                </div>
                <div className='third-line'>
                <div className='ms'>
                    <p>Message</p>
                    <input type='test' placeholder='Write your message'/>
                    <input type='test' placeholder='' className='line1'/>
                    <input type='test' placeholder='' className='line2'/>
                </div>
                </div>
                <div className='send-button'>
                    <button type='button'>Send Message</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact