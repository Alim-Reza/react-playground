import React, { useState, useEffect, useRef } from 'react';

function HoldAndPressButton() {
  const [isHeldDown, setIsHeldDown] = useState(false);
  const [transitionTime, setTransitionTime] = useState(0);
  const timer = useRef();

  useEffect(() => {
    if (isHeldDown) {
      const startTime = new Date().getTime();
      timer.current = setInterval(() => {
        const elapsed = new Date().getTime() - startTime;
        if (elapsed >= 5000) {
          clearInterval(timer.current);
          alert('Time up!');
          setTransitionTime(0);
        } else {
          const progress = (elapsed / 5000) * 100;
          setTransitionTime(progress);
        }
      }, 50);
    } else {
      clearInterval(timer.current);
      setTransitionTime(0);
    }
  }, [isHeldDown, timer]);

  const handleMouseDown = () => {
    setIsHeldDown(true);
    setTransitionTime(0);
  };

  const handleMouseUp = () => {
    setIsHeldDown(false);
    if (transitionTime < 5000) {
      setTransitionTime(0);
    }
  };

  const buttonStyle = {
    background: `linear-gradient(to right, red ${transitionTime}%, transparent 0%)`,
    border: 'solid red 1px',
    transition: 'background 0.05s linear',
    padding: '10px 20px',
    margin: '10px',
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={buttonStyle}
    >
      Hold and Press Me
    </button>
  );
}

export default HoldAndPressButton;
