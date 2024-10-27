import React from 'react';
import MyComponent from './MyComponent';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Services from './Services';

function MainContent() {
  return (
    <main>
      <MyComponent />
      <Services/>
      <AboutUs/>
      <ContactUs/>
      
    </main>
            
  );
}

export default MainContent;
