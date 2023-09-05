import React from 'react';
import './WholeNumberInput.css';

export default function WholeNumberInput() {
  return (
    <div className="wni_wrapper">
      <input
        className="wni_cls"
        type="number"
        // onChange will not work here simply because
        // onchange only fires when the input value has changed
        // but onKeyDown fires before the changes
        onKeyDown={(e) => {
          if (e.key === '.') {
            // alert('Period entered.');
            e.preventDefault();
          }
        }}
      />
    </div>
  );
}
