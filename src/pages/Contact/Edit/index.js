import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';

// import api from '../../../services/api';

import { Container, Nav } from './styles';

export default function ContactEdit({ match }) {
  useEffect(() => {
    document.title = 'Editar contato';
  }, []);

  const { id } = match.params;

  console.log(id);

  return (
    <Container>
      <Nav>
        <h1>
          <FaUserEdit color="#1A8E6E" size={22} />
          Editar contato {id}
        </h1>

        <Link to="/" title="Voltar">
          <MdArrowBack color="#FFF" size={16} />
          Voltar
        </Link>
      </Nav>
    </Container>
  );
}
