import React, { useState } from 'react';
import './style.css';
import Timer from './Timer/Timer.js';
import HoldAndPressButton from './HoldAndPressButton/HoldAndPressButton.js';
import OldTimer from './Timer/OldTimer.js';
import CheckboxComponent from './CheckboxComponent/CheckboxComponent.js';
import FlashyScroll from './FlashyScroll/FlashyScroll.jsx';
import Navbar from './Navbar/Navbar.js';
import RegistrationForm from './RegistrationForm/RegistrationForm.js';
import FileDownload from './FileDownload/FileDownload';
import ShakeButton from './ShakeButton/ShakeButton';
import ProgressBarDiv from './ShakeButton/ProgressBarDiv';
import BookList from './DataFetch/BookList';
import FetchComponent from './FetchComponent/FetchComponent.js';
import TransitionComponent from './TransitionComponent/TransitionComponent.js';
import DualScroll from './DualScroll/DualScroll.jsx';
import ScrollToMiddle from './ScrollToMiddle/ScrollToMiddle.jsx';
import ScrollToSpecificComponent from './ScrollToMiddle/ScrollToSpecificComponent.jsx';
import WholeNumberInput from './WholeNumberInput/WholeNumberInput';
import DialogueComponent from './DialogueComponent/DialogueComponent';
import useConfirmationDialog from './DialogueComponent/useConfirmationDialog';
import LongLabel from './LongLabel/LongLabel';
export default function App() {
  const { dialogOpen, handleOpenDialog, handleCloseDialog } =
    useConfirmationDialog();

  return (
    <div>
      <LongLabel />
      {/* <button onClick={handleOpenDialog}>Open Dialog</button> 
      <DialogueComponent
        title={'tumi ki sure?'}
        buttonText={['ho', 'no']}
        open={dialogOpen}
        onClose={handleCloseDialog}
        onYesClick={handleCloseDialog}
      /> */}

      {/* <WholeNumberInput /> */}
      {/* <ScrollToSpecificComponent /> */}
      {/* <ScrollToMiddle /> */}
      {/* <DualScroll /> */}
      {/* <TransitionComponent /> */}
      {/* <Navbar /> */}
      {/* <CheckboxComponent /> */}
      {/* <FlashyScroll /> */}
      {/* <FixButton /> */}
      {/* <Timer /> */}
      {/* <OldTimer showHourValue={true} giveTimeInSecond={100} /> */}
      {/* <HoldAndPressButton /> */}
      {/* <RegistrationForm /> */}
      {/* <ShakeButton /> */}
      {/* <ProgressBarDiv /> */}
      {/* <BookList /> */}
      {/* <FetchComponent /> */}
      {/* <FileDownload
        url={
          'https://s3.ap-northeast-2.amazonaws.com/new-commerce-dev-new/dev/admin-panel/product/attachment99dc36ce-8b1b-4888-b269-364af9d83a3600613672-b0e7-4006-8f72-dbb82d2eee52.pptx'
        }
      /> */}
    </div>
  );
}
