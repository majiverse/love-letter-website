// App.js
import React from 'react';
import './App.css';
import LetterPage from './LetterPage';
import CameraPage from './CameraPage';
import GiftPage from './GiftPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LetterPage />
        <CameraPage />
        <GiftPage />
      </header>
    </div>
  );
}

export default App;
