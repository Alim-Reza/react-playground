import React, { useState } from 'react';
import './ShakeButton.css';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const ShakeAnimation = keyframes`${fadeIn}`;

const Button = styled.button`
  animation: 1s ${ShakeAnimation};
`;

const ShakeButton = () => {
  const [isShaking, setIsShaking] = useState(false);

  const handleButtonClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 5000);
  };

  return (
    <Button
      onClick={handleButtonClick}
      className={`shake ${isShaking ? 'shake-active' : ''}`}
    >
      Click me!
    </Button>
  );
};

export default ShakeButton;
