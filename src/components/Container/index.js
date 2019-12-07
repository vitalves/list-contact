import React from 'react';

import { Wrapper } from './styles';

import GlobalStyle from '../../styles/global';
import Routes from '../../routes';

export default function Container() {
  return (
    <Wrapper>
      <Routes />
      <GlobalStyle />
    </Wrapper>
  );
}
