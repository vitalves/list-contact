import React from 'react';
import { Link } from 'react-router-dom';

import { MdContacts } from 'react-icons/md';

import { Container, List } from './styles';

export default function Main() {
  document.title = 'Lista de contatos';

  return (
    <Container>
      <h1>
        <MdContacts color="rgb(25, 139, 106, .9)" size={30} />
        Lista de contatos:
      </h1>

      <List>
        <ul>
          <li>
            <Link to="/contact" title="Ir">
              Lista
            </Link>
          </li>
          <li>
            <Link to="/contact" title="Ir">
              Lista
            </Link>
          </li>
          <li>
            <Link to="/contact" title="Ir">
              Lista
            </Link>
          </li>
          <li>
            <Link to="/contact" title="Ir">
              Lista
            </Link>
          </li>
          <li>
            <Link to="/contact" title="Ir">
              Lista
            </Link>
          </li>
        </ul>
      </List>
    </Container>
  );
}
