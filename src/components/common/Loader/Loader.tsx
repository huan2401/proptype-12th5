import React from 'react';
import { ClipLoader } from 'react-spinners';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -15px;
`;

const Loader = () => (
  <ClipLoader size="30px" color={theme.colors.primaryColor} css={override} />
);

export default Loader;
