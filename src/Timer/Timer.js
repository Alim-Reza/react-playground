import React, { useState, useRef, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(10000000);
  const requestRef = useRef();

  const animate = (timestamp) => {
    // console.log(timestamp)
    // console.log(time);
    requestRef.current = requestAnimationFrame(animate);
    setTime((prevTime) => prevTime - 1000);
    // setTime((prevTime) => prevTime + (timestamp - prevTime));
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString();
  };

  return (
    <div>
      <h2>Current time:</h2>
      <p>{formatTime(time)}</p>
    </div>
  );
}

export default Timer;
