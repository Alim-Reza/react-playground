import React, { useState } from 'react';
import './style.css';
import Timer from './Timer/Timer.js';
import CheckboxComponent from './CheckboxComponent/CheckboxComponent.js';
import TreatManager from './TreatManager/TreatManager.js';
import FlashyScroll from './FlashyScroll/FlashyScroll.jsx';
import Navbar from './Navbar.js';

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <h1>Hello StackBlitz!</h1> */}
      {/* <CheckboxComponent /> */}
      {/* <p>Start editing to see some magic happen :)</p> */}
      {/* <TreatManager /> */}
      {/* <FlashyScroll /> */}
      {/* <FixButton /> */}
      <Timer />
    </div>
  );
}
