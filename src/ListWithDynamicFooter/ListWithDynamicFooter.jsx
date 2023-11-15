import React, { useState, useEffect, useRef } from 'react';
import './ListWithDynamicFooter.css';

async function apiCall(pageNumber, pageSize) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const response = await fetch(
    `https://api.alquran.cloud/v1/juz/30/quran-uthmani?offset=${pageNumber}&limit=${pageSize}`,
    requestOptions
  );
  return await response.json();
}
export default function ListWithDynamicFooter() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const containerRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  function triggerApiCall(page, size) {
    apiCall(page, size).then((response) => {
      setList((prev) => [...prev, ...response.data.ayahs]);
    });
  }

  function onPageSizeChange(event) {
    setSize(event.target.value);
  }

  function updateScrollableLabel() {
    if (containerRef.current) {
      const container = containerRef.current;
      setIsScrollable(container.scrollHeight > container.clientHeight);
    }
  }

  useEffect(() => {
    setList([]);
    setPage(0);
    triggerApiCall(page, size);
  }, [size]);

  useEffect(() => {
    updateScrollableLabel();
    window.addEventListener('resize', updateScrollableLabel);
    return () => {
      window.removeEventListener('resize', updateScrollableLabel);
    };
  }, []);

  useEffect(() => {
    updateScrollableLabel();
  }, [list]);

  return (
    <>
      <div style={{ padding: '1em' }}>
        <label htmlFor="pageSize">Page Size:</label>
        <select name="pageSize" value={size} onChange={onPageSizeChange}>
          {[...Array(10).keys()].map((i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="wrapper">
        <div ref={containerRef} className="container">
          {list.map((x, index) => (
            <div key={index}>
              {index + 1}. {x.numberInSurah}
            </div>
          ))}
        </div>
      </div>
      {isScrollable && (
        <div style={{ textAlign: 'center', marginTop: '1em' }}>Scrollable</div>
      )}
    </>
  );
}
// export default function ListWithDynamicFooter() {
//   const [list, setList] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [size, setSize] = React.useState(5);
//   function triggerApiCall(page, size) {
//     apiCall(page, size).then((response) => {
//       setList((prev) => [...prev, ...response.data.ayahs]);
//     });
//   }
//   function onclk() {
//     setPage((prev) => prev + 1);
//   }
//   function DropDown() {
//     return (
//       <div
//         style={{
//           padding: '1em',
//           display: 'flex',
//           gap: '2em',
//           justifyContent: 'flex-start',
//           paddingLeft: '0em',
//         }}
//       >
//         <label for="pageSize">Page Size:</label>
//         <select
//           name="pageSize"
//           value={size}
//           onChange={(event) => setSize(event.target.value)}
//           // onChange={(e) => console.log(e)}
//         >
//           {[...Array(10).keys()].map((i) => (
//             <option value={i + 1}>{i + 1}</option>
//           ))}
//         </select>
//       </div>
//     );
//   }
//   // React.useEffect(() => {
//   //   triggerApiCall(page, size);
//   // }, [page]);
//   React.useEffect(() => {
//     setList([]);
//     setPage(0);
//     triggerApiCall(page, size);
//   }, [size]);
//   return (
//     <>
//       <DropDown />
//       <div className="wrapper">
//         <div className="container">
//           {list.map((x, index) => (
//             <div>
//               {index + 1}. {x.numberInSurah}
//               {/* {x.text} */}
//             </div>
//           ))}

//           {/* <button className="btn" onClick={onclk}>
//             see more
//           </button> */}
//         </div>
//       </div>
//     </>
//   );
// }
