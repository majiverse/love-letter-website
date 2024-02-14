// LetterPage.js
import React, { useState } from 'react';
import ribbon from './images/ribbon.svg';
import envelope from './images/envelope.svg';
import './App.css';

function LetterPage() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
  };

  const handleClose = () => {
    setShowOverlay(false);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src={envelope} className="envelope" alt="envelope" />
      </button>

      {showOverlay && (
        <div className="overlay-letter">
          <div className="overlay-content">
            <p className='letter-content'>
              Hi Wilg, I need to apologize for the stress I've caused. It's time to think about where we stand. I've realized I'm not okay—I'm struggling to control my emotions, and it's hurting you. Please, give me space to figure things out. I need to be sure of my feelings for you and learn to handle them better. I've been unfair to you, and I'm sorry for that. 
            </p>
            <p className='letter-content'>
            If I can, I'll come back. Until then, I hope you understand.
            </p>
            <button onClick={handleClose}>
              <img src={ribbon} className="ribbon" alt="ribbon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LetterPage;
