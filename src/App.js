import React, { useState } from 'react';
import './style.css';
import Timer from './Timer/Timer.js';
import HoldAndPressButton from './HoldAndPressButton/HoldAndPressButton.js';
import OldTimer from './Timer/OldTimer.js';
import CheckboxComponent from './CheckboxComponent/CheckboxComponent.js';
import TreatManager from './TreatManager/TreatManager.js';
import FlashyScroll from './FlashyScroll/FlashyScroll.jsx';
import Navbar from './Navbar/Navbar.js';
import RegistrationForm from './RegistrationForm/RegistrationForm.js';

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <h1>Hello StackBlitz!</h1> */}
      {/* <CheckboxComponent /> */}
      {/* <p>Start editing to see some magic happen :)</p> */}
      {/* <TreatManager /> */}
      {/* <FlashyScroll /> */}
      {/* <FixButton /> */}
      {/* <Timer /> */}
      {/* <OldTimer showHourValue={true} giveTimeInSecond={100} /> */}
      {/* <HoldAndPressButton /> */}
      <RegistrationForm />
    </div>
  );
}
