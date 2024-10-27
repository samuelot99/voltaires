import React from 'react';
import './AboutUs.css';
import photo from "./samuelvoltaires.png";

function AboutUs() {
  return (
    <section className="about-us" id="about">
      <h2>About Us</h2>
      <p>
      Our mission at Voltaires is to embrace renewable energy solutions, particularly solar panels
       and wind turbines, to power the aerodromes we operate in. By electrifying these spaces, we aim 
       to support eco-friendly aviation practices, enabling electric aircraft to be used for training, 
       recreational flying,reaforestation and sightseeing. Through this initiative, we are not only reducing the 
       environmental impact of aviation but also advancing a sustainable future for air travel, where 
       green energy plays a key role in promoting cleaner skies and fostering innovation.
      </p>
      
      <h2>Team</h2>
      <p>
        Meet Samuel Otieno, the visionary behind Voltaires. Experienced pilot, aircraft mechanic,
         information technology expert and an enthusiast of various technologies.
         Greatly passionate about conservation, renewable energy and sustainablity. Dedicated to 
         contributing towards improvement of renewable energy technologies and sustainable aviation.
         Exploring various solutions to the vast effects of the aviation industry's carbon footprint 
         on climate change and global warming.
         There will be a future! 
        
      </p>

      <div className="image-section">
        <img src={photo} alt="Faiza Latif" className="team-photo" />
        <p className="team-name">Samuel Otieno, founder</p> {/* Adding the name under the image */}
      </div>
    </section>
  );
}

export default AboutUs;
