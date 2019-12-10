import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdContacts } from 'react-icons/md';

import api from '../../services/api';

import { Container, TableList, Thead, Tbody } from './styles';

export default function Main() {
  document.title = 'Lista de contatos';

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
      <h1>
        <MdContacts color="rgb(25, 139, 106, .9)" size={30} />
        Contatos
      </h1>
      <TableList>
        <Thead>
          <tr>
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
                {`${contact.first_name} ${contact.last_name}`}
              </td>
              <td>{contact.email}</td>
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
