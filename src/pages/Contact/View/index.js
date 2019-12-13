import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdArrowBack } from 'react-icons/md';

import { Container, Nav, Section, Pic } from './styles';

export default function ContactView({ match }) {
  const { id } = match.params;

  const contacts = JSON.parse(localStorage.getItem('contacts'));

  const contact = contacts.find(c => c.id == id && c); // eslint-disable-line

  useEffect(() => {
    document.title = `${contact.first_name} ${contact.last_name}`;
  }, []);

  return (
    <Container>
      <Nav>
        <Link to="/" title="Voltar">
          <MdArrowBack color="#FFF" size={16} />
          Voltar
        </Link>
      </Nav>

      <Section>
        <Pic>
          <img src={contact.avatar} alt={contact.first_name} />
          <h1>
            {contact.first_name} {contact.last_name}
          </h1>
        </Pic>
        <p>
          <span>Email:</span> {contact.email}
        </p>
        <p>
          <span>Data de nascimento:</span>{' '}
          {contact.birthday
            .substr(0, 10)
            .split('-')
            .reverse()
            .join('/')}
        </p>
        <p>
          <span>Idioma:</span> {contact.language}
        </p>
      </Section>
    </Container>
  );
}

ContactView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
