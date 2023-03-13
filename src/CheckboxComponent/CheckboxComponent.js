import React from 'react';
import ClickOutsideWrapperComponent from '../ClickOutsideWrapperComponent.js';

export default function CheckboxComponent() {
  const [showDiv, setShowDiv] = React.useState(false);
  const DropBtnComponent = ({ children, onclick }) => {
    return (
      <button
        onClick={onclick}
        style={{
          backgroundColor: 'white',
          color: 'red',
          padding: '16px',
          fontSize: '16px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {children}
      </button>
    );
  };
  const DropDownContentComponent = ({ children, displayStatus }) => {
    return (
      <div
        style={{
          display: `${displayStatus ? '' : 'none'}`,
          position: 'absolute',
          backgroundColor: 'white',
          minWidth: '6em',
          overflow: 'auto',
          boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.2)',
          zIndex: '1',
          marginLeft: '-4em',
        }}
      >
        {children}
      </div>
    );
  };
  const DropDownContentItemComponent = ({ children, onclick }) => {
    return (
      <a
        style={{
          color: 'black',
          padding: '12px 16px',
          textDecoration: 'none',
          display: 'block',
          cursor: 'pointer',

          '&:hover': {
            textDecoration: 'underline',
          },
        }}
        onClick={onclick}
      >
        {children}
      </a>
    );
  };
  const DropDownComponent = () => {
    return (
      <>
        <div class="dropdown">
          <DropBtnComponent onclick={() => setShowDiv((prev) => !prev)}>
            Create +
          </DropBtnComponent>
          <DropDownContentComponent displayStatus={showDiv}>
            {['Bitcoin', 'Ethereum', 'Konacoin', 'Token'].map((assetType) => (
              <DropDownContentItemComponent onclick={() => alert(assetType)}>
                {assetType}
              </DropDownContentItemComponent>
            ))}
          </DropDownContentComponent>
        </div>
      </>
    );
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <button> create </button>
      <ClickOutsideWrapperComponent>
        <DropDownComponent />
      </ClickOutsideWrapperComponent>
    </div>
  );
}
