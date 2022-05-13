/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const fancyButton = css`
  cursor: pointer;
  outline: 0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #0d6efd;
  border-color: #0d6efd;
  margin: 5px;
`;

const url = `https://api.memegen.link/images/buzz/memes/memes_everywhere.gif`;

function download() {
  const a = document.createElement('a');
  a.href = url;
  a.download = url.split('/').pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function DownloadButton(props) {
  // Adding the fetch function to download the file which unfortunately doesn't work now.

  // const download = fetch(
  // props.path,
  // {
  // method: 'POST',
  // body: JSON.stringify(search),
  // headers: {
  // 'Content-Type': 'application/json; charset=utf-8',
  // },
  // }
  // .then((response) => {
  // if (response.status === 200) {
  // filename = response.headers.get('content-disposition');
  // filename = filename.match(/(?<=")(?:\\.|[^"\\])*(?=")/)[0];
  // return response.blob();
  // } else {
  // return;
  // }
  // })
  // .then((body) => {
  // download(body, filename, 'application/octet-stream');
  // }),
  // );

  // async function () {
  //   await fetch(props.path)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       // Create blob link to download
  //       const url = window.URL.createObjectURL(new Blob([blob]));
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.setAttribute('download', `your-meme.gif`);

  //       // Append to html link element page
  //       document.body.appendChild(link);

  //       // Start download
  //       link.click();

  //       // Clean up and remove the link
  //       link.parentNode.removeChild(link);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // <a href={props.path} download></a>

  return (
    <button css={fancyButton} onClick={() => download()}>
      Download
    </button>
  );
}
