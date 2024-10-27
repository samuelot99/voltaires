import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      visibleImages.push(images[(currentIndex + i) % images.length]);
    }
    return visibleImages;
  };

  return (
    <div className="carousel">
      {getVisibleImages().map((image, index) => (
        <div
          key={index}
          className="carousel-image"
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Carousel;
