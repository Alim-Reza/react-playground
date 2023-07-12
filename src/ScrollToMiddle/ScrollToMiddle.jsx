import React, { useEffect, useRef } from 'react';

const ScrollToMiddle = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const middleScrollPosition =
        scrollContainer.scrollHeight / 2 - scrollContainer.clientHeight / 2;
      scrollContainer.scrollTo(0, middleScrollPosition);
    }
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{ height: '100vh', overflow: 'scroll' }}
    >
      <A />
      <B />
      <C />
    </div>
  );
};

const A = () => (
  <div
    style={{
      height: '100vh',
      backgroundColor: '#abebd2',
      borderRadius: '10px',
      margin: '1em',
      padding: '1em',
    }}
  >
    Component A
  </div>
);
const B = () => (
  <div
    style={{
      height: '1px',
      backgroundColor: '#9DCBBA',
      borderRadius: '10px',
      margin: '1em',
      padding: '1em',
    }}
  >
    Component B
  </div>
);
const C = () => (
  <div
    style={{
      height: '100vh',
      backgroundColor: '#6D5959',
      borderRadius: '10px',
      margin: '1em',
      padding: '1em',
    }}
  >
    Component C
  </div>
);

export default ScrollToMiddle;
