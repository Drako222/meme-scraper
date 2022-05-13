/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { fancyButton } from './Elements';

export default function GenerateButton(props) {
  return (
    <button
      css={fancyButton}
      onClick={() => {
        props.setTop(props.templatetop);
        props.setBottom(props.templatebottom);
        props.setImage(props.templateimage);
      }}
    >
      Generate
    </button>
  );
}
