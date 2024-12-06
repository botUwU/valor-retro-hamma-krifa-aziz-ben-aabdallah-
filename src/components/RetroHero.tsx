import React from "react";
import styled from "styled-components";
export function RetroHero() {
  const Styledimg = styled.img`
    width: 400px;
    height: 400px;
    padding: 0px;
    margin: 0px;
  `;
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 retro-background"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* <div className="mb-8">
          <img
            src="https://raw.githubusercontent.com/RetroPixelIcons/8bit-icons/main/logos/game-controller.png"
            alt="Retro Controller"
            className="w-24 h-24 pixelated mx-auto"
          />
        </div> */}
        <div>
          <Styledimg src="src\data\valo.png" alt="" />
        </div>

        <p className="text-[#00ff00] text-xl md:text-2xl mb-12 font-mono">
          &gt; A 5v5 tactical shooter game_
        </p>

        <button
          className="bg-[#00ff00] text-black px-8 py-4 text-xl font-bold 
                         border-4 border-[#00ff00] hover:bg-black hover:text-[#00ff00] 
                         transition-all duration-300 font-['Press_Start_2P']
                         flex items-center gap-4"
        >
          PLAY NOW
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      <div className="scanline"></div>
    </div>
  );
}
