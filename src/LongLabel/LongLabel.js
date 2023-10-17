import React from 'react';
import './LongLabel.css';

export default function LongLabel(props) {
  return (
    <>
      <div className="container">
        <div className="scrollable-content">123456789012345678901234567890</div>
      </div>
    </>
  );
}
