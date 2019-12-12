import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdArrowBack } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';

// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
// import history from '../../../services/history';

// import api from '../../../services/api';

import { Container, Nav, Section } from './styles';

const schema = Yup.object().shape({
  first_name: Yup.string()
    .trim()
    .min(2, 'Digite o nome corretamente')
    .required('Por favor, digite o nome'),
  last_name: Yup.string()
    .trim()
    .min(3, 'Por favor, digite o sobrenome corretamente')
    .required('Por favor, digite sobrenome'),
  email: Yup.string()
    .trim()
    .email('Digite um email válido')
    .required('Por favor, digite o email'),
  gender: Yup.string()
    .trim()
    .required('Por favor, selecione o gênero'),
  language: Yup.string()
    .trim()
    .min(2, 'Por favor, digite o idioma corretamente')
    .required('Por favor, informe o idioma'),
  birthday: Yup.string()
    .min(5, 'Por favor, digite a data corretamente')
    .max(
      10,
      `Por favor, digite a data de acordo com o modelo pedido. Exemplo: ${new Date(
        'aaa-MM-dd'
      )}`
    ),
});

const optionsGender = [
  { id: '1', value: 'M', title: 'Masculinho' },
  { id: '2', value: 'F', title: 'Feminino' },
];

export default function ContactEdit({ match }) {
  /// const [contact, setContact] = useState([]);

  useEffect(() => {
    document.title = 'Editar contato';
  }, []);

  const { id } = match.params;

  const contacts = JSON.parse(localStorage.getItem('contacts'));

  const contact = contacts.find(c => c.id == id && c );

  console.log('updateContacts: ', contact);

  /*
  useEffect(() => {
    // const contact = JSON.parse(localStorage.getItem('contacts'));
  }, []);
  */

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Nav>
        <h1>
          <FaUserEdit color="#1A8E6E" size={22} />
          Adicionar contato {id}
        </h1>

        <Link to="/" title="Voltar">
          <MdArrowBack color="#FFF" size={16} />
          Voltar
        </Link>
      </Nav>

      <Section>
        <Form schema={schema} initialData={contact} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Digite nome"
          />
          <Input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Digite o sobrenome"
          />
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Digite o email"
          />
          <Select
            options={optionsGender}
            name="gender"
            id="gender"
            placeholder="Selecione o gênero"
          />
          <Input
            type="text"
            name="language"
            id="language"
            placeholder="Informe o idioma"
          />
          <Input
            type="date"
            name="birthday"
            id="birthday"
            placeholder="dd/mm/yyyy"
          />

          <button type="submit"> Atualizar </button>
        </Form>
      </Section>
    </Container>
  );
}

ContactEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
