import React from 'react';
import './ListWithDynamicFooter.css';

async function apiCall(pageNumber, pageSize = 10) {
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
  function triggerApiCall(page) {
    apiCall(page).then((response) => {
      setList((prev) => [...prev, ...response.data.ayahs]);
    });
  }
  function onclk() {
    setPage((prev) => prev + 1);
  }
  React.useEffect(() => {
    triggerApiCall(page);
  }, [page]);
  return (
    <>
      <div className="wrapper">
        <div className="container">
          {list.map((x, index) => (
            <div>
              {index + 1}. {x.text}
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
