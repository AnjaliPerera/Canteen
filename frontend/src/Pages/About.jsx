import React, { useState } from 'react';
import axios from 'axios';
import './About.css'; // Create a separate CSS file for AboutUs styles
import chefImage from '../assets/a1.png';
import canteenImage from '../assets/a2.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>

      <section className="intro">
        <h2>Welcome to Rome Canteen!!!!!</h2>
        <p>
          At Rome Canteen, food is more than just sustenance. It's an experience and a connection to our community.
          Since 2005, we've been a favorite gathering spot in the heart of campus for students, faculty, and staff.
          Whether you're grabbing a quick coffee, enjoying a meal with friends, or taking a break, our canteen offers
          a diverse menu with fresh, locally sourced ingredients.
        </p>
      </section>

      <section className="mission">
        <div className="mission-content">
          <img src={chefImage} alt="Chef preparing food" />
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is simple: to provide delicious, wholesome meals that bring people together. We are committed to
              sourcing the freshest ingredients, supporting local farmers, and serving a diverse menu that caters to every taste
              and dietary need. Whether you're looking for a quick bite between classes or a relaxing place to unwind with friends,
              Rome Canteen is here to nourish both body and soul.
            </p>
          </div>
        </div>
      </section>

      {/*  Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials-content">
          <div className="testimonials-text">
            <h2>What Our Customers Say</h2>
            <blockquote>
              "Rome Canteen is my go-to spot on campus. The food is always fresh, and the atmosphere is warm and welcoming."
              <span>– Thilini , University Student</span>
            </blockquote>
            <blockquote>
              "I love how they always have options for everyone, including vegan and gluten-free dishes. Plus, their coffee is the best!"
              <span>– Faculty Member</span>
            </blockquote>
          </div>
          <img src={canteenImage} alt="Students dining in the canteen" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
