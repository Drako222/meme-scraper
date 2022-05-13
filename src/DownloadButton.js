/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { fancyButton } from './Elements.js';

export default function DownloadButton(props) {
  // Adding the fetch function to download the file
  const download = async function () {
    await fetch(props.path)
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `your-meme.gif`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  };

  return (
    <button
      css={fancyButton}
      onClick={() => {
        download();
      }}
    >
      Download
    </button>
  );
}
