import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo } from './styles';

import logo from '../../assets/logo2.png';

export default function Header() {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={logo} alt="logo" title="Página inicial" />
        </Link>
        <span>Contact</span>
      </Logo>
    </Container>
  );
}
