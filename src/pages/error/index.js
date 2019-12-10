import React from 'react';
import { Link } from 'react-router-dom';
import { MdError, MdArrowBack } from 'react-icons/md';

import Error404 from '../../assets/error404.png';

// import api from '../../../services/api';

import { Container, Nav } from './styles';

export default function ErroNotFound() {
  document.title = 'ERROR 404 - PAGE NOT FOUND';

  return (
    <Container>
      <Nav>
        <h1>
          <MdError color="#F00" size={22} />
          Erro!
        </h1>

        <Link to="/" title="Voltar">
          <MdArrowBack color="#FFF" size={16} />
          Voltar
        </Link>
      </Nav>

      <h2>
        Ops! <br />
        Página não encontrada <br />
        =(
      </h2>

      <img src={Error404} alt="erro 404" />
    </Container>
  );
}
