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
import FileDownload from './FileDownload/FileDownload';

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
      {/* <RegistrationForm /> */}
      <FileDownload
        url={
          'https://s3.ap-northeast-2.amazonaws.com/new-commerce-dev-new/dev/admin-panel/product/attachment99dc36ce-8b1b-4888-b269-364af9d83a3600613672-b0e7-4006-8f72-dbb82d2eee52.pptx'
        }
      />
    </div>
  );
}
