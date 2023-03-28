import React, { useState } from 'react';
import './HoldAndPressButton.css';

const HoldAndPressButton = () => {
  const [gradientPosition, setGradientPosition] = useState(0);

  const handleMouseDown = () => {
    const interval = setInterval(() => {
      setGradientPosition((prevPosition) => {
        if (prevPosition < 100) {
          return prevPosition + 1;
        } else {
          clearInterval(interval);
          return prevPosition;
        }
      });
    }, 10);
  };

  const handleMouseUp = () => {
    setGradientPosition(0);
  };

  const gradientStyle = {
    background: `linear-gradient(to right, #E4A460 ${gradientPosition}%, #D2691E ${gradientPosition}%)`,
  };

  return (
    <button
      className="Button"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span className="Button-label" style={gradientStyle}>
        Click me!
      </span>
    </button>
  );
};

export default HoldAndPressButton;
