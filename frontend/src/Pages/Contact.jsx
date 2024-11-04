import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/contact/submit', contactData);
      setResponseMessage(response.data);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });

      navigate('/home');
    } catch (error) {
      setResponseMessage('Failed to submit the form. Please try again.');
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-body">
          {/* Left Part */}
          <div className="left-part">
            <h1>Contact Information</h1>
            <div className="contact-infor">
              <div className="tel">
                <i className="fa-solid fa-phone-volume"></i>
                <p>076-6445678</p>
              </div>
              <div className="mas">
                <i className="fa-solid fa-envelope"></i>
                <p>demo@gmail.com</p>
              </div>
              <div className="loc">
                <i className="fa-solid fa-location-dot"></i>
                <p>132 Dartmouth Street Boston, Massachusetts 02345 United States</p>
              </div>
            </div>
            <div className="social">
              <a href="https://www.youtube.com/watch?v=IcrbM1l_BoI" className="what"><i className="fa-brands fa-square-whatsapp"></i></a>
              <a href="https://www.youtube.com/watch?v=IcrbM1l_BoI" className="face"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.youtube.com/watch?v=IcrbM1l_BoI" className="inst"><i className="fa-brands fa-square-instagram"></i></a>
            </div>
          </div>

          {/* Right Part */}
          <div className="right-side">
            <form className="right-container" onSubmit={handleSubmit}>
              <div className="fist-line">
                <div className="f-n">
                  <p>First Name</p>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="l-n">
                  <p>Last Name</p>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="seconed-line">
                <div className="ep">
                  <p>Email</p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="ep1">
                  <p>Phone Number</p>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+101 2345 678"
                    pattern="\+94\s\d{9}"
                    required
                  />
                </div>
              </div>
              <div className="third-line">
                <div className="ms">
                  <p>Message</p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    required
                  />
                </div>
              </div>
              <div className="send-button">
                <button type="submit">Send Message</button>
              </div>
            </form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
