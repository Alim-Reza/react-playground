import React, { useState, useEffect } from 'react';

const ProgressBarDiv = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [progress]);

  const borderLength = 4 * 150; // 150 is the width/height of the div
  const offset = (progress / 100) * borderLength;

  return (
    <div
      onClick={() => setProgress(0)}
      style={{
        position: 'relative',
        width: '150px',
        height: '150px',
        border: '10px solid #ccc',
        boxSizing: 'border-box',
        cursor: 'pointer',
      }}
    >
      <svg width="0" height="0">
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
            <rect x="10" y="10" width="130" height="130" fill="#000" />
          </mask>
        </defs>
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          width: 'calc(100% + 20px)',
          height: 'calc(100% + 20px)',
          border: '10px solid transparent',
          borderRightColor: '#f00',
          transform: `rotate(${offset}deg)`,
        }}
      />
    </div>
  );
};

export default ProgressBarDiv;
