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

export default function GenerateButton(props) {
  return (
    <button
      css={fancyButton}
      onClick={() => {
        props.setTop(props.templateTop);
        props.setBottom(props.templateBottom);
        props.setImage(props.templateImage);
      }}
    >
      Generate
    </button>
  );
}
