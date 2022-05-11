import { useState } from 'react';
import Form from './Form';
import fetch from 'node-fetch';

// function Blobcreator() {
//  let blob = await fetch(path).then((r) => r.blob());
//
//  return blob;
//}

//
//function download () {fetch await('https://api.memegen.link/images/bad/Meme/Meme_Again.gif'}
//  .then((response) => response.blob())
//  .then((blob) => {
//    // Create blob link to download
//    const url = window.URL.createObjectURL(
//      new Blob([blob]),
//    );
//    const link = document.createElement('a');
//    link.href = url;
//    link.setAttribute(
//      'download',
//      `your-meme.git`,
//    );
//
//    // Append to html link element page
//    document.body.appendChild(link);
//
//    // Start download
//    link.click();
//
//    // Clean up and remove the link
//    link.parentNode.removeChild(link);
//  });
//
let something = await fetch(
  `https://api.memegen.link/images/bad/Meme/Meme_Again.gif`,
)
  .then((r) => r.blob())
  .then((blobFile) => new File([blobFile], 'your-meme', { type: 'image/gif' }));

function App() {
  const [top, setTop] = useState('Meme');
  const [bottom, setBottom] = useState('Meme Again');
  const [image, setImage] = useState('bad');
  const path = `https://api.memegen.link/images/${image}/${top}/${bottom}.gif`;

  return (
    <>
      <h1>Meme Scraper</h1>
      <Form
        top={top}
        setTop={setTop}
        bottom={bottom}
        setBottom={setBottom}
        image={image}
        setImage={setImage}
      />
      <br />
      <img
        src="https://api.memegen.link/images/bad/Meme/Meme_Again.gif"
        alt="meme"
      />
      <br />

      <a href={something} download>
        Download
      </a>
    </>
  );
}

export default App;
