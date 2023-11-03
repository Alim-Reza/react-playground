import React from 'react';

export default function DebouncedButton() {
  const [counter, setCounter] = React.useState(0);

  // Create the debounced function once
  const debouncedClick = debounce(() => setCounter((prev) => prev + 1), 1500);

  function debounce(fn, time) {
    let timeoutId;
    return wrapper;
    function wrapper(...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        timeoutId = null;
        fn(...args);
      }, time);
    }
  }

  function clik() {
    // Call the debounced function when the button is clicked
    debouncedClick();
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        gap: '2em',
      }}
    >
      {counter}
      <button onClick={clik} disabled={counter > 0}>
        click me
      </button>
    </div>
  );
}
