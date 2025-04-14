'use client';

import { FaBitcoin } from 'react-icons/fa';

const FallingBitcoinBackground = () => {
  const coins = new Array(25).fill(0);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      {coins.map((_, index) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 5;

        return (
          <FaBitcoin
            key={index}
            className="text-yellow-400 absolute text-3xl animate-fall drop-shadow-lg"
            style={{
              left: `${left}%`,
              top: '-10%',
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FallingBitcoinBackground;
