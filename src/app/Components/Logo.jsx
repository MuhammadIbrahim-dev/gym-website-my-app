import React from 'react';

const Logo = () => {
  return (
    <div className="relative w-24 h-10 flex items-center">
      <svg
        viewBox="0 0 64 32"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
      >
        {/* Stylized tiger face */}
        <g>
          {/* Forehead and top stripes */}
          <path d="M32 4 Q34 8 32 12 Q30 8 32 4" fill="#fff"/>
          <path d="M28 6 Q29 9 28 12" stroke="#fff" strokeWidth="2" fill="none"/>
          <path d="M36 6 Q35 9 36 12" stroke="#fff" strokeWidth="2" fill="none"/>
          {/* Ears */}
          <path d="M20 10 Q18 4 26 8" fill="#fff"/>
          <path d="M44 10 Q46 4 38 8" fill="#fff"/>
          {/* Eyes */}
          <ellipse cx="26" cy="18" rx="2" ry="3" fill="#fff"/>
          <ellipse cx="38" cy="18" rx="2" ry="3" fill="#fff"/>
          {/* Nose */}
          <path d="M30 22 Q32 24 34 22 Q32 23 30 22" fill="#fff"/>
          {/* Cheeks */}
          <path d="M18 20 Q16 28 28 26" stroke="#fff" strokeWidth="2" fill="none"/>
          <path d="M46 20 Q48 28 36 26" stroke="#fff" strokeWidth="2" fill="none"/>
          {/* Mouth */}
          <path d="M28 26 Q32 30 36 26" stroke="#fff" strokeWidth="2" fill="none"/>
          {/* Whiskers */}
          <path d="M16 24 Q10 26 18 26" stroke="#fff" strokeWidth="1" fill="none"/>
          <path d="M48 24 Q54 26 46 26" stroke="#fff" strokeWidth="1" fill="none"/>
          {/* Unique cursor element integrated at the bottom right */}
          <polygon points="54,28 60,30 56,24" fill="#fff" opacity="0.7"/>
        </g>
      </svg>
    </div>
  );
};

export default Logo; 