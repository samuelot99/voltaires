import React, { useState } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: 'Name',
    email: 'Email',
    phone: 'Phone number',
    sessionType: '', // Track selected session type
    message: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name} for ${formData.sessionType}`);
    // Handle form submission here (e.g., sending the data to a server)
  };

  return (
    
    <section className="contact-us" id="contact">
      
      <section className="address" id="address">
        <div>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'orange', fontSize: '24px' }} /> Email: voltaires@gmail.com
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} style={{ color: 'green', fontSize: '24px' }} /> +2547 43 833 513 / +353 87 478 9964
        </div>
        <a
          href="https://www.instagram.com/voltairestech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
          <nbsp/> @voltaires
        </a>
        
      </section>
    </section>
  );
}

export default ContactUs;
