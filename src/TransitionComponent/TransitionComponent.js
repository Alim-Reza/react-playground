import React, { useState } from 'react';
import './CollapsibleText.css'; // Import CSS file for styling

export default function TransitionComponent() {
  //   return <>hello</>;
  // }

  // const CollapsibleText = ({ text }) => {
  const text =
    '=============1===================2=====================3================4=============5===============';
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapsible-text ${isCollapsed ? 'collapsed' : ''}`}>
      <p>{text}</p>
      <button className="collapse-btn" onClick={toggleCollapse}>
        {isCollapsed ? 'Read More' : 'Read Less'}
      </button>
    </div>
  );
}
