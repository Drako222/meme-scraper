import { useState } from 'react';

export default function Form(props) {
  return (
    <form
      style={{ display: 'Flex', justifyContent: 'center' }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>
        Top Text:
        <input
          value={props.templatetop}
          onChange={(event) => props.setTemplateTop(event.currentTarget.value)}
          onClick={() => props.setTemplateTop('')}
        />
      </label>
      <br />
      <label>
        Bottom Text:
        <input
          value={props.templatebottom}
          onChange={(event) =>
            props.setTemplateBottom(event.currentTarget.value)
          }
          onClick={() => props.setTemplateBottom('')}
        />
      </label>
      <br />
      <label>
        Meme template:
        <input
          value={props.templateimage}
          onChange={(event) =>
            props.setTemplateImage(event.currentTarget.value)
          }
          onClick={() => props.setTemplateImage('')}
        />
      </label>
    </form>
  );
}
