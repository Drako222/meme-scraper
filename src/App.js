/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';
import Form from './Form';
import { saveAs } from 'file-saver';

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

const stackofbuttons = css`
  display: flex;
  justify-content: center;
`;

function App() {
  const [top, setTop] = useState('Meme');
  const [bottom, setBottom] = useState('Meme Again');
  const [image, setImage] = useState('bad');

  const urlSelector = (yourimage, yourtop, yourbottom) => {
    if (!yourtop && !yourbottom) {
      return `https://api.memegen.link/images/${yourimage}.png`;
    } else if (!yourbottom) {
      return `https://api.memegen.link/images/${yourimage}/${yourtop}.png`;
    } else {
      return `https://api.memegen.link/images/${yourimage}/${yourtop}/${yourbottom}.png`;
    }
  };

  return (
    <>
      <h1>Meme Scraper</h1>
      <Form
        setTop={setTop}
        setBottom={setBottom}
        setImage={setImage}
        top={top}
        bottom={bottom}
        image={image}
      />
      <br />
      <img
        src={urlSelector(image, top, bottom)}
        alt="meme"
        data-test-id="meme-image"
      />
      <br />
      <div css={stackofbuttons}>
        <button
          css={fancyButton}
          onClick={() => {
            saveAs(urlSelector(image, top, bottom), 'meme.png');
          }}
        >
          Download
        </button>
        <button
          css={fancyButton}
          onClick={() => {
            saveAs(
              `https://api.memegen.link/images/${image}/${top}/${bottom}.png`,
              'meme.png',
            );
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
