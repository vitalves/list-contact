import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Contact() {
  document.title = 'Detalhes do contato';

  return (
    <Container>
      <h1>Page Contact</h1>
      <Link to="/">Voltar</Link>
    </Container>
  );
}
