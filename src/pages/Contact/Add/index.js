import React from 'react';
import { Link } from 'react-router-dom';
import { MdPersonAdd, MdArrowBack } from 'react-icons/md';

// import api from '../../../services/api';

import { Container, Nav } from './styles';

export default function Main() {
  document.title = 'Adicionar contato';

  return (
    <Container>
      <Nav>
        <h1>
          <MdPersonAdd color="#1A8E6E" size={22} />
          Adicionar contato
        </h1>

        <Link to="/" title="Voltar">
          <MdArrowBack color="#FFF" size={16} />
          Voltar
        </Link>
      </Nav>
    </Container>
  );
}
