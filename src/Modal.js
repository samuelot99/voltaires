// Modal.js
import React from 'react';
import './Modal.css'; // Create this CSS file for styling

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render the modal if it's not open

    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose(); // Close the modal if clicking on the overlay (outside the modal content)
      }
    };
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h3>Terms and Conditions</h3>
        <p>Welcome to Maji Benders. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>
        <ol>
          <li><strong>Acceptance of Terms:</strong> By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</li>
          <li><strong>Services Provided:</strong> Voltaires offers renewable energy solutions aimed at improving sustainable practices,environmental conservation and curbing the effect of climate change.</li>
          <li><strong>Professional Guidance:</strong> While our practitioners are qualified and registered professionals, you understand that outcomes may vary.</li>
          <li><strong>Right to Refuse Services:</strong> Voltaires reserves the right to refuse to proceed with service delivery if it is deemed that the client’s needs may be better met by another professional.</li>
          <li><strong>Confidentiality:</strong> All information shared during therapy sessions is confidential and will only be disclosed with your consent or as required by law.</li>
          <li><strong>Cancellation and Rescheduling:</strong> If you need to cancel or reschedule an appointment, please provide at least 24 hours' notice.</li>
          <li><strong>Limitation of Liability:</strong> Voltaires will not be liable for any damages arising from your use of our services.</li>
          <li><strong>Changes to Terms:</strong> Voltaires reserves the right to modify these Terms and Conditions at any time.</li>
          <li><strong>Contact Information:</strong> For questions or concerns regarding these Terms and Conditions, please contact us at: <br />
            Email: voltaires@gmail.com <br />
            Phone: +254704913800 / +353 87 478 9964
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Modal;
