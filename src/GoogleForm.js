import React, { useState } from 'react';
import './GoogleForm.css'; // Include your CSS styles here
import Modal from './Modal.js'; // Import the Modal component

const GoogleForm = () => {
  // State to control form visibility
  const [isFormVisible, setIsFormVisible] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Form field states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: {
      solarpower: false,
      windpower: ''
    },
    
    preferredTime: '',
    description: '',
    howDidYouHear: '',
    additionalComments: '',
    consent: false,
  });

  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSessionTypeChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        sessionType: {
          ...prevData.sessionType,
          [name]: checked,
        }
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        sessionType: {
          ...prevData.sessionType,
          supportGroup: value,
        }
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formActionUrl = "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse"; // Replace with your Google Form action URL
    const formBody = new FormData();

    // Map form data to Google Form entry IDs
    formBody.append("entry.123456789", formData.fullName); // Replace entry.123456789 with the actual ID from Google Form
    formBody.append("entry.987654321", formData.email);
    formBody.append("entry.111213141", formData.phone);
    formBody.append("entry.121314151", formData.sessionType.talkTherapy ? "Talk Therapy" : '');
    formBody.append("entry.131415161", formData.sessionType.supportGroup);
    
    formBody.append("entry.212223241", formData.preferredTime);
    formBody.append("entry.222324251", formData.description);
    formBody.append("entry.232425261", formData.howDidYouHear);
    formBody.append("entry.242526271", formData.additionalComments);
    formBody.append("entry.252627281", formData.consent ? "Yes" : '');

    fetch(formActionUrl, {
      method: 'POST',
      body: formBody,
      mode: 'no-cors', // Necessary to avoid CORS issues
    }).then(() => {
      alert("Form submitted successfully!");
    }).catch((error) => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <div>

      {/* Display form only if isFormVisible is true */}
      {isFormVisible && (
        <form className="google-form" onSubmit={handleSubmit}>
            {/* Form Fields */}
          <h1>Sign up here</h1>

          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />

          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />

          <label>Service (Select one or more)</label>
          <div className="service">
            <label>
              <input type="checkbox" name="solarpower" checked={formData.service.solarpower} onChange={handleSessionTypeChange} />
              Solar power installation
            </label>
            <label>
              <input type="checkbox" name="swindpower" value={formData.service.windpower} onChange={handleSessionTypeChange} />
              Wind power installation
            </label>
          </div>

          <label>Preferred Days (Select your availability)</label>

          <label>Preferred Time</label>
          <input type="text" name="preferredTime" value={formData.preferredTime} onChange={handleInputChange} />

          <label>Brief Description of Your Needs (Optional)</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange} />

          <label>How Did You Hear About Us?</label>
<div className="radio-group">
  {['Internet Search', 'Social Media', 'Friend/Family', 'Advertisement', 'Other'].map((option) => (
    <div key={option} className="radio-container">
      <input
        type="radio"
        id={option}
        name="howDidYouHear"
        value={option}
        checked={formData.howDidYouHear === option}
        onChange={(e) => setFormData((prevData) => ({
          ...prevData,
          howDidYouHear: e.target.value,
        }))}
      />
      <label htmlFor={option}>{option}</label>
    </div>
  ))}
</div>

          <label>Additional Comments or Questions</label>
          <textarea name="additionalComments" value={formData.additionalComments} onChange={handleInputChange} />

          <div>
          <label>
          <input type="checkbox" name="consent" required />
            I consent to the{' '}
            <span onClick={toggleModal} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
              terms and conditions
            </span>
            .
          </label>
        </div>

          <button type="submit">Submit</button>
        </form>
        
      )}
      {/* Render the Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />

    </div>
  );
};

export default GoogleForm;
