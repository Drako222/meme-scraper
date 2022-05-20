/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { saveAs } from 'file-saver';
import { useState } from 'react';

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

  const path = `https://api.memegen.link/images/${image ? image : 'bad'}/${
    top ? top : '_'
  }/${bottom ? bottom : '_'}.png`;

  return (
    <>
      <h1>Meme Scraper</h1>
      <form
        style={{ display: 'Flex', justifyContent: 'center' }}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          Top text
          <input
            onChange={(event) => {
              setTop(event.currentTarget.value);
            }}
          />
        </label>
        <br />
        <label htmlFor="bottomtext">Bottom text</label>
        <input
          id="bottomtext"
          onChange={(event) => {
            setBottom(event.currentTarget.value);
          }}
          onClick={() => setBottom('')}
        />
        <br />
        <label htmlFor="memetemplate">Meme template</label>
        <input
          id="memetemplate"
          onChange={(event) => {
            setImage(event.currentTarget.value);
          }}
          onClick={() => setImage('')}
        />
      </form>
      <br />
      <img
        src={path(image, top, bottom)}
        alt="meme"
        data-test-id="meme-image"
      />
      <br />
      <div css={stackofbuttons}>
        <button
          css={fancyButton}
          onClick={() => {
            saveAs(path(image, top, bottom), 'meme.png');
          }}
        >
          Download
        </button>
        <button
          css={fancyButton}
          onClick={() => {
            saveAs({ path }, 'meme.png');
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
