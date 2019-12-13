import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, differenceInYears } from 'date-fns';
import { toast } from 'react-toastify';
import {
  MdContacts,
  MdPersonAdd,
  MdFilterList,
  MdPermContactCalendar,
  MdDelete,
} from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';

import api from '../../services/api';

import {
  Container,
  Nav,
  Filter,
  TopButton,
  BottomButton,
  TableList,
  Thead,
  Tbody,
  Delete,
} from './styles';

export default function Main() {
  const [contacts, setContacts] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [numContactGenderF, setNumContactGenderF] = useState();
  const [numContactGenderM, setNumContactGenderM] = useState();

  /* Filter states */
  const [filter, setFilter] = useState(false);
  const [genderFilter, setGenderFilter] = useState(false);
  const [languageFilter, setLanguageFilter] = useState(false);
  const [ageFilter, setAgeFilter] = useState(false);
  const [niverFilter, setNiverFilter] = useState(false);

  const languages = [...new Set(contacts.map(item => item.language))];

  const contactsLength = useMemo(() => contacts.length, [contacts]);

  const numLanguage = [...new Set(contacts.map(item => item.language))].length;

  useEffect(() => {
    setNumContactGenderF(contacts.filter(cgf => cgf.gender === 'F').length);
    setNumContactGenderM(contacts.filter(cgM => cgM.gender === 'M').length);
  }, [contacts]);

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

  function handleFilter() {
    setFilter(!filter);
  }

  function resetFilter() {
    setFilter(!filter);
    setGenderFilter(false);
    setLanguageFilter(false);
    setAgeFilter(false);
    setNiverFilter(false);

    const resetedContacts = JSON.parse(localStorage.getItem('contacts'));

    setContacts(resetedContacts);
  }
  /* FILTERS */
  // Genders:
  function handleContactGender(gender) {
    const resetContact = JSON.parse(localStorage.getItem('contacts'));
    const contactsGender = resetContact.filter(c => c.gender === gender && c);

    setContacts(contactsGender);
  }
  // language
  function handleContactLanguage(lang) {
    const resetContact = JSON.parse(localStorage.getItem('contacts'));
    const contactsLanguage = resetContact.filter(c => c.language === lang && c);

    setContacts(contactsLanguage);
  }

  // Age
  function handleContactAge(age) {
    const resetContact = JSON.parse(localStorage.getItem('contacts'));

    const d = new Date();
    const dateNow = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

    const contactsAges = resetContact.filter(
      c =>
        differenceInYears(parseISO(dateNow), new Date(c.birthday)) == age && c // eslint-disable-line
    );

    setContacts(contactsAges);
  }

  // Birthday
  function handleBirthday(birthday) {
    const resetContact = JSON.parse(localStorage.getItem('contacts'));

    const contactMounthBirthday = resetContact.filter(
      c => Number(new Date(c.birthday).getMonth() + 1) == birthday // eslint-disable-line
    );

    setContacts(contactMounthBirthday);
  }

  /* FILTERS */

  return (
    <Container>
      <Nav>
        <h1>
          <MdContacts color="#1A8E6E" size={22} />
          Contatos
          <small>Total: {contactsLength}</small>
        </h1>

        <button type="button" onClick={filter ? resetFilter : handleFilter}>
          <MdFilterList size={20} />
          {filter ? 'Resetar filtro' : 'Filtrar'}
        </button>

        <Link to="/contact/add">
          <MdPersonAdd color="#FFF" size={16} />
          Adicionar contato
        </Link>
      </Nav>

      {filter && (
        <Filter>
          <TopButton>
            <button
              type="button"
              onClick={() => setGenderFilter(!genderFilter)}
            >
              Gênero
            </button>
            <button
              type="button"
              onClick={() => setLanguageFilter(!languageFilter)}
            >
              Idioma
            </button>
            <button type="button" onClick={() => setAgeFilter(!ageFilter)}>
              Idade
            </button>
            <button type="button" onClick={() => setNiverFilter(!niverFilter)}>
              Aniversário
            </button>
          </TopButton>

          <BottomButton>
            {genderFilter && (
              <>
                <br />
                <label>Selecione o gênero:</label> { /* eslint-disable-line */ }
                <br />
                <button type="button" onClick={() => handleContactGender('M')}>
                  Masculinho
                </button>
                <button type="button" onClick={() => handleContactGender('F')}>
                  Feminino
                </button>
                <br />
              </>
            )}
            {languageFilter && (
              <>
                <br />
                <label>Selecione o idioma:</label> { /* eslint-disable-line */ }
                <br />
                {languages &&
                  languages.map(item => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleContactLanguage(item)}
                    >
                      {item}
                    </button>
                  ))}
                <br />
              </>
            )}
            {ageFilter && (
              <>
                <br />
                <label>Informe a idade:</label> { /* eslint-disable-line */ }
                <br />
                <input
                  type="number"
                  id="age"
                  onChange={e => handleContactAge(e.target.value)}
                />
                <br />
              </>
            )}
            {niverFilter && (
              <>
                <br />
                <label>Mês de aniversário (de 1 a 12)</label> { /* eslint-disable-line */ }
                <br />
                <input
                  type="number"
                  id="niver"
                  onChange={e => handleBirthday(e.target.value)}
                />
                <br />
              </>
            )}
          </BottomButton>
        </Filter>
      )}

      <p>
        {numContactGenderF} mulhere{numContactGenderF > 1 && 's'}
        <span> | </span>
        {numContactGenderM} home{numContactGenderM > 1 ? 'ns' : 'm'}
        <span> | </span>
        {numLanguage} idioma{numLanguage > 1 && 's'}
      </p>

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
              <td style={{ textAlign: 'center' }}>
                {contact.birthday
                  .substr(5, 10)
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
      {contactsLength === 0 && (
        <h5>
          Ops! <br /> Nenhum contato encontrado!
        </h5>
      )}
    </Container>
  );
}
