import React from 'react';
import './ListWithDynamicFooter.css';

async function apiCall() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const response = await fetch(
    'https://api.alquran.cloud/v1/juz/30/quran-uthmani?offset=0&limit=15',
    requestOptions
  );
  return await response.json();
}
export default function ListWithDynamicFooter() {
  const [list, setList] = React.useState([]);
  apiCall().then((response) => {
    setList(response.data.ayahs);
  });
  return (
    <>
      <div className="wrapper">
        <div className="container">
          {list.map((x, key) => (
            <div key={key}>{x.text}</div>
          ))}
        </div>
      </div>
    </>
  );
}
