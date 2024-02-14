import React, { useState } from 'react';
import ribbon from './images/ribbon.svg';
import camera from './images/camera.svg';
import aa from './images/aa.jpg';
import bb from './images/bb.jpg';
import cc from './images/cc.jpg';
import dd from './images/dd.jpg';
import ee from './images/ee.jpg';
import left from './images/left.svg';
import right from './images/right.svg';
import './App.css';

function CameraPage() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [aa,bb,cc,dd,ee]; // Add more images if needed

  const handleClick = () => {
    setShowOverlay(true);
  };

  const handleClose = () => {
    setShowOverlay(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src={camera} className="camera" alt="camera" />
      </button>

      {showOverlay && (
        <div className="overlay-pictures">
          <div className="overlay-content-pic">
            <button onClick={handleClose}>
              <img src={ribbon} className="ribbon" alt="ribbon" />
            </button>
            <div className="image-container">
              <img src={images[currentImageIndex]} className="slider-image" alt={`image-${currentImageIndex}`} />
              <button onClick={handlePrevImage}>
              <img src={right} className="left" alt="left" />
            </button>
              <button onClick={handleNextImage}>
              <img src={left} className="right" alt="right" />
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CameraPage;
