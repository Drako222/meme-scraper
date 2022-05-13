/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';
import DownloadButton from './DownloadButton.js';
import Form from './Form';
import GenerateButton from './GenerateButton.js';

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

  const path = `https://api.memegen.link/images/${image}/${top}/${bottom}.png`;

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
      <img src={path} alt="meme" data-test-id="meme-image" />
      <br />
      <div css={stackofbuttons}>
        <DownloadButton path={path} />
        <GenerateButton
          setTop={setTop}
          setBottom={setBottom}
          setImage={setImage}
          templateTop={templateTop}
          templateBottom={templateBottom}
          templateImage={templateImage}
        />
      </div>
    </>
  );
}

export default App;
