import React from 'react';
import './DialogueComponent.css';

const DialogueComponent = ({
  open,
  onClose,
  onYesClick,
  title,
  buttonText,
}) => {
  if (!open) {
    return null;
  }

  const handleYesClick = () => {
    onYesClick();
    onClose();
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <p>{title || 'Are you sure you want to proceed?'}</p>
        <button onClick={handleYesClick}>{buttonText?.[0] || 'Yes'}</button>
        <button onClick={handleCancelClick}>
          {buttonText?.[1] || 'Cancel'}
        </button>
      </div>
    </div>
  );
};

export default DialogueComponent;
