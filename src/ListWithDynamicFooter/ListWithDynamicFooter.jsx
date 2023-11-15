import React from 'react';
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
  const [list, setList] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [size, setSize] = React.useState(5);
  function triggerApiCall(page, size) {
    apiCall(page, size).then((response) => {
      setList((prev) => [...prev, ...response.data.ayahs]);
    });
  }
  function onclk() {
    setPage((prev) => prev + 1);
  }
  React.useEffect(() => {
    triggerApiCall(page, size);
  }, [page]);
  React.useEffect(() => {
    setList([]);
    setPage(0);
    triggerApiCall(page, size);
  }, [size]);
  return (
    <>
      <label for="pageSize">Page Size:</label>
      <select name="pageSize" id="pageSize">
        {[...Array(10).keys()].map((i) => (
          <option value={i} onClick={() => alert(i)}>
            {i}
          </option>
        ))}
      </select>

      <div className="wrapper">
        <div className="container">
          {list.map((x, index) => (
            <div>
              {index + 1}. {x.numberInSurah}
              {/* {x.text} */}
            </div>
          ))}
          <button className="btn" onClick={onclk}>
            see more
          </button>
        </div>
      </div>
    </>
  );
}
