import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdContacts, MdPersonAdd } from 'react-icons/md';

import api from '../../services/api';

import { Container, Nav, TableList, Thead, Tbody } from './styles';

export default function Main() {
  useEffect(() => {
    document.title = 'Lista de contatos';
  }, []);

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function onLoadPage() {
      const contactList = localStorage.getItem('contacts');

      if (contactList) {
        setContacts(JSON.parse(contactList));
      } else {
        const response = await api.get('/lestetelecom/test.json', {
          params: {
            key: 'f55c4060',
          },
        });

        localStorage.setItem('contacts', JSON.stringify(response.data));
        setContacts(response.data);
      }
    }
    onLoadPage();
  }, []);

  return (
    <Container>
      <Nav>
        <h1>
          <MdContacts color="#1A8E6E" size={22} />
          Contatos
        </h1>

        <Link to="/contact/add">
          <MdPersonAdd color="#FFF" size={16} />
          Adicionar contato
        </Link>
      </Nav>

      <TableList>
        <Thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Gênero</th>
            <th>Idioma</th>
            <th>Aniversário</th>
            <th>Ações</th>
          </tr>
        </Thead>
        <Tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>
                <img src={contact.avatar} alt={contact.first_name} />
              </td>
              <td>{`${contact.first_name} ${contact.last_name}`}</td>
              <td>
                <a
                  href={`mailto:${contact.email}?Subject=${contact.first_name}, esse contato é importante`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Enviar email"
                >
                  {contact.email}
                </a>
              </td>
              <td>{contact.gender === 'F' ? 'Feminino' : 'Masculino'}</td>
              <td>{contact.language}</td>
              <td>
                {contact.birthday
                  .substr(0, 10)
                  .split('-')
                  .reverse()
                  .join('/')}
              </td>
              <td>
                <Link to="/" title="ver contato">
                  Detalhes
                </Link>
              </td>
            </tr>
          ))}
        </Tbody>
      </TableList>
    </Container>
  );
}
