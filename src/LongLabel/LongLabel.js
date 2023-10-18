import React from 'react';
import './LongLabel.css';

// export default function LongLabel(props) {
//   return (
//     <>
//       <div className="container">
//         <div className="scrollable-content">123456789012345678901234567890</div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from 'react';

const LongLabel = ({
  text = '12345678901234567890123456789',
  width = '100',
}) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (text && text.length * 8 > width) {
      setScrolling(true);
    }
  }, [text, width]);

  return (
    <div className="scroll-text-container" style={{ width: `${width}px` }}>
      <div className={`scroll-text ${scrolling ? 'scrolling' : ''}`}>
        {text}
      </div>
    </div>
  );
};

export default LongLabel;
