import React from 'react';
import { RetroHeader } from './components/RetroHeader';
import { RetroHero } from './components/RetroHero';
import { RetroFeatures } from './components/RetroFeatures';

function App() {
  return (
    <div className="min-h-screen bg-black text-[#00ff00] relative">
      <div className="scanline"></div>
      <div className="crt">
        <RetroHeader />
        <RetroHero />
        <RetroFeatures />
      </div>
    </div>
  );
}

export default App;