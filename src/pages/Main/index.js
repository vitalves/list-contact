import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  MdContacts,
  MdPersonAdd,
  MdPermContactCalendar,
  MdDelete,
} from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Nav, TableList, Thead, Tbody, Delete } from './styles';

export default function Main() {
  const [contacts, setContacts] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  // const [deleteContact, setDeleteContact] = useState();

  useEffect(() => {
    document.title = 'Lista de contatos';

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

  function handleDeleteConfirm(id) {
    setConfirmDelete(id);
  }

  function handleDeleteContact(id) {
    try {
      const updateContacts = contacts.filter(c => c.id !== id);

      localStorage.setItem('contacts', JSON.stringify(updateContacts));

      setContacts(updateContacts);
      setConfirmDelete(false);

      toast.success('Contato excluido com sucesso', {
        position: 'top-center',
        autoClose: 3000,
      });
    } catch (error) {
      toast.error('Ops! Ocorreu um erro inesperado!', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  }

  function handleDeleteContactCancel() {
    setConfirmDelete(false);
  }

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
                {confirmDelete === contact.id ? (
                  <Delete>
                    <button
                      type="button"
                      onClick={() => handleDeleteContact(contact.id)}
                    >
                      Confirmar
                    </button>
                    <button type="button" onClick={handleDeleteContactCancel}>
                      Cancelar
                    </button>
                  </Delete>
                ) : (
                  <>
                    <Link
                      to={`/contact/edit/${contact.id}`}
                      title="editar contato"
                    >
                      <FaUserEdit size={20} />
                    </Link>
                    <Link to="/errr" title="Visualizar contato">
                      <MdPermContactCalendar size={20} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDeleteConfirm(contact.id)}
                    >
                      <MdDelete size={20} />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </Tbody>
      </TableList>
    </Container>
  );
}
