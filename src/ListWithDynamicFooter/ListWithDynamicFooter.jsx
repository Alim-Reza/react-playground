import React from 'react';
async function apiCall() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const response = await fetch(
    'https://api.alquran.cloud/v1/juz/30/quran-uthmani?offset=0&limit=5',
    requestOptions
  );
  // .then((response) => response.text())
  // .then((result) => result)
  // .catch((error) => error);

  return await response.json();
}
export default function ListWithDynamicFooter() {
  const [list, setList] = React.useState([]);
  apiCall().then((response) => {
    setList(response.data.ayahs);
  });
  return (
    <>
      {' '}
      {list.map((x, key) => (
        <div key={key}>{x.text}</div>
      ))}
    </>
  );
}
