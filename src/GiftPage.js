// LetterPage.js
import React, { useState } from 'react';
import ribbon from './images/ribbon.svg';
import  gift from './images/gift.svg';
import  ticket from './images/ticket.svg';
import './App.css';

function GiftPage() {
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
        <img src={gift} className="gift" alt="gift" />
      </button>

      {showOverlay && (
        <div className="overlay-gift">
          <div className="overlay-con-gift">
            <button onClick={handleClose}>
              <img src={ribbon} className="ribbon" alt="ribbon" />
            </button>
            <img src={ticket} className="ticket" alt="ticket" />
          </div>
        </div>
      )}
    </div>
  );
}

export default GiftPage;
