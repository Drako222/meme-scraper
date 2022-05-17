/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';
import Form from './Form';
import GenerateButton from './GenerateButton.js';
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

  const [templateTop, setTemplateTop] = useState('Choose the top text');
  const [templateBottom, setTemplateBottom] = useState(
    'Choose the bottom text',
  );
  const [templateImage, setTemplateImage] = useState(
    'Choose the image keyword',
  );

  const path = (yourimage, yourtop, yourbottom) => {
    if (!templateTop & !templateBottom) {
      return `https://api.memegen.link/images/${yourimage}.png`;
    } else if (!templateBottom) {
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
        templateTop={templateTop}
        setTemplateTop={setTemplateTop}
        templateImage={templateImage}
        setTemplateImage={setTemplateImage}
        templateBottom={templateBottom}
        setTemplateBottom={setTemplateBottom}
      />
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
        <GenerateButton
          image={image}
          top={top}
          bottom={bottom}
          setTop={setTop}
          setBottom={setBottom}
          setImage={setImage}
          templateTop={templateTop}
          templateBottom={templateBottom}
          templateImage={templateImage}
        />
        <button
          css={fancyButton}
          onClick={() => {
            setTemplateImage('');
            setTemplateTop('');
            setTemplateBottom('');
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
