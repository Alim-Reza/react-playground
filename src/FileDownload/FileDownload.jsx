import React from 'react';
import './styles.css';

export default function FileDownload({ url }) {
  function download(fileUrl) {
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = url;
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    // const url = window.URL.createObjectURL(new Blob([blob]));
    // const link = document.createElement('a');
    // link.href = url;
    // link.setAttribute('download', `image.png`);

    // // Append to html link element page
    // document.body.appendChild(link);

    // // Start download
    // link.click();

    // // Clean up and remove the link
    // link.parentNode.removeChild(link);

    let fileName = url.split('/');
    fileName = fileName[fileName.length - 1];

    // fetch(fileUrl)
    //   .then((response) => response.blob())
    //   .then((blob) => {

    //     const url = window.URL.createObjectURL(new Blob([blob]));
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', fileName);
    //     document.body.appendChild(link);
    //     link.click();
    //   })
    //   .catch((error) => console.error(error));

    // const link = document.createElement('a');
    // link.href = fileUrl;
    // link.setAttribute('download', fileName);
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', fileUrl);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      const url = window.URL.createObjectURL(xhr.response);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    xhr.send();
  }
  return (
    <div className="wrapper-component">
      <div className="left-parent-component">
        <div className="left-component">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="svg"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <div className="truncate">dt.txt</div>
      </div>
      <a
        className="icon-anchor"
        // href="https://www.startech.com.bd/image/cache/catalog/keyboard/rapoo/v700-8a/v700-8a-01-228x228.webp"
        // download
        onClick={() => download(url)}
      >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="text-[18px]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          ></path>
        </svg>
      </a>
    </div>
  );
}
