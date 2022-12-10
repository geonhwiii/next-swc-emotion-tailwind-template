import React from 'react';
import { Global } from '@emotion/react';
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro';

const defaultStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.transparent`,
    ...tw`antialiased`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={defaultStyles} />
  </>
);

export default GlobalStyles;
