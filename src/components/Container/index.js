import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Wrapper } from './styles';

import GlobalStyle from '../../styles/global';
import Routes from '../../routes';

export default function Container() {
  return (
    <Wrapper>
      <Routes />
      <GlobalStyle />
      <ToastContainer />
    </Wrapper>
  );
}
