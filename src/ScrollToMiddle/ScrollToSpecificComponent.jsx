import React, { useEffect, useRef } from 'react';

const ScrollToSpecificComponent = () => {
  const scrollContainerRef = useRef(null);
  const componentToScrollRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current && componentToScrollRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const componentToScroll = componentToScrollRef.current;
      const containerRect = scrollContainer.getBoundingClientRect();
      const componentRect = componentToScroll.getBoundingClientRect();
      const scrollPosition =
        componentRect.top -
        containerRect.top -
        containerRect.height / 2 +
        componentRect.height / 2;

      scrollContainer.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{ height: '100vh', overflow: 'scroll' }}
    >
      <div
        style={{
          scrollSnapAlign: 'start',
          height: '50vh',
          backgroundColor: 'red',
        }}
      >
        Component A
      </div>
      <div
        style={{
          scrollSnapAlign: 'start',
          height: '50vh',
          backgroundColor: 'green',
        }}
      >
        Component B
      </div>
      <div
        style={{
          scrollSnapAlign: 'start',
          height: '50vh',
          backgroundColor: 'blue',
        }}
      >
        Component C
      </div>
      <div
        style={{
          scrollSnapAlign: 'start',
          height: '50vh',
          backgroundColor: 'yellow',
        }}
      >
        Component D
      </div>
      <div
        style={{
          scrollSnapAlign: 'start',
          height: '5em',
          backgroundColor: 'purple',
        }}
        ref={componentToScrollRef}
      >
        Component F (Scroll Target)
      </div>
      <div
        style={{
          scrollSnapAlign: 'start',
          height: '50vh',
          backgroundColor: 'pink',
        }}
      >
        Component G
      </div>
      {/* Add more components here */}
    </div>
  );
};

export default ScrollToSpecificComponent;
