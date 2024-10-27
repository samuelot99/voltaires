import React, { useState } from 'react';
import './Services.css';
import GoogleForm from './GoogleForm.js';

const Services = () => {
  // State to control the visibility of the form and the contact section
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };


  return (
    <div className="Services" id="Services">
      <h2>Our Services</h2>
      <div className="services-cards">
        <div className="card" onClick={toggleFormVisibility}>
          <h3>Solar plant installation</h3>
          <p>Assesment of power needs for the household, premises or aerodrome.</p>
          <p>Solar panel installation to suit your needs.</p>
          <p>Installation of battery cells for storage.</p>
          <p>Installation of charge control system and battery optimization software.</p>
          <button className="contact-button" onClick={toggleFormVisibility}>
            {isFormVisible ? 'Go Voltaires' : 'Go Voltaires'}
          </button>
        </div>
        
        <div className="card" onClick={toggleFormVisibility}>
          <h3>Wind turbine plant installation</h3>
          <p>Assesment of power needs for the household, premises or aerodrome.</p>
          <p>Determination of the best design for the project.</p>
          <p>Installation of wind turbines.</p>
          <p>Installation of storage facilities, charge control system and battery optimization.</p>
          <button className="service-button" onClick={toggleFormVisibility}>
            {isFormVisible ? 'Go Voltaires' : 'Go Voltaires'}
          </button>
        </div>
        <div className="card" onClick={toggleFormVisibility}>
          <h3>Sustainable practices education</h3>
          <p>Staff training on renewable energy.</p>
          <p>Short courses on renewable energy, sustainable practices and environmental conservation.</p>
          <p>Community awareness and sensitization drives for public education.</p>
          <button className="contact-button" onClick={toggleFormVisibility}>
            {isFormVisible ? 'Go Voltaires' : 'Go Voltaires'}
          </button>
        </div>
        
      </div>

       {/* Render GoogleForm only if isFormVisible is true */}
       {isFormVisible && <GoogleForm />}
    </div>
    
  );
};

export default Services;

