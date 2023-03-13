import React, { useState } from 'react';

function ParentDiv() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.target.scrollTop);
  };

  return (
    <div
      onScroll={handleScroll}
      style={{ height: '100vh', overflow: 'scroll' }}
    >
      <div style={{ backgroundColor: '#EC304c', height: '5em' }}>
        {' '}
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          hero section
        </h2>
      </div>
      <div style={{ position: 'relative', border: '1px solid blue' }}>
        <div style={{ position: 'sticky', top: 0, background: 'grey' }}>
          <h2>Header</h2>
        </div>
        <div style={{ marginTop: '5em', paddingTop: '1em' }}>
          <ul>
            <li
              style={{
                padding: '1em',
                border: '1px solid grey',
                borderRadius: '12px',
                margin: '1em',
              }}
            >
              List Item 1
            </li>
            <li
              style={{
                padding: '1em',
                border: '1px solid grey',
                borderRadius: '12px',
                margin: '1em',
              }}
            >
              List Item 2
            </li>
            <li
              style={{
                padding: '1em',
                border: '1px solid grey',
                borderRadius: '12px',
                margin: '1em',
              }}
            >
              List Item 3
            </li>
            <li
              style={{
                padding: '1em',
                border: '1px solid grey',
                borderRadius: '12px',
                margin: '1em',
              }}
            >
              List Item 4
            </li>
            <li
              style={{
                padding: '1em',
                border: '1px solid grey',
                borderRadius: '12px',
                margin: '1em',
              }}
            >
              List Item 5
            </li>
            <li
              style={{
                padding: '1em',
                border: '1px solid grey',
                borderRadius: '12px',
                margin: '1em',
              }}
            >
              List Item 6
            </li>
            <li
              style={{
                padding: '1em',
                border: '1px solid grey',
                borderRadius: '12px',
                margin: '1em',
              }}
            >
              List Item 7
            </li>
            <li
              style={{
                padding: '1em',
                border: '1px solid grey',
                borderRadius: '12px',
                margin: '1em',
              }}
            >
              List Item 8
            </li>
            <li
              style={{
                padding: '1em',
                border: '1px solid grey',
                borderRadius: '12px',
                margin: '1em',
              }}
            >
              List Item 9
            </li>
            <li
              style={{
                padding: '1em',
                border: '1px solid grey',
                borderRadius: '12px',
                margin: '1em',
              }}
            >
              List Item 10
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ParentDiv;
