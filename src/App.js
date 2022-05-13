/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import DownloadButton from './DownloadButton.js';
import { stackofbuttons } from './Elements';
import Form from './Form';
import GenerateButton from './GenerateButton.js';

function App() {
  const [top, setTop] = useState('Meme');
  const [bottom, setBottom] = useState('Meme Again');
  const [image, setImage] = useState('bad');

  const [templatetop, setTemplateTop] = useState('Choose the top text');
  const [templatebottom, setTemplateBottom] = useState(
    'Choose the bottom text',
  );
  const [templateimage, setTemplateImage] = useState(
    'Choose the image keyword',
  );

  const path = `https://api.memegen.link/images/${image}/${top}/${bottom}.gif`;

  return (
    <>
      <h1>Meme Scraper</h1>
      <Form
        templatetop={templatetop}
        setTemplateTop={setTemplateTop}
        templateimage={templateimage}
        setTemplateImage={setTemplateImage}
        templatebottom={templatebottom}
        setTemplateBottom={setTemplateBottom}
      />
      <br />
      <img src={path} alt="meme" />
      <br />
      <div css={stackofbuttons}>
        <DownloadButton path={path} />
        <GenerateButton
          setTop={setTop}
          setBottom={setBottom}
          setImage={setImage}
          templatetop={templatetop}
          templatebottom={templatebottom}
          templateimage={templateimage}
        />
      </div>
    </>
  );
}

export default App;
