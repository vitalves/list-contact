import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdArrowBack } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';

import { toast } from 'react-toastify';
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
  { id: 'M', title: 'Masculinho' },
  { id: 'F', title: 'Feminino' },
];

export default function ContactEdit({ match }) {
  useEffect(() => {
    document.title = 'Editar contato';
  }, []);

  const { id } = match.params;

  const contacts = JSON.parse(localStorage.getItem('contacts'));

  const contact = contacts.find(c => c.id == id && c); // eslint-disable-line

  /*
  useEffect(() => {
    // const contact = JSON.parse(localStorage.getItem('contacts'));
  }, []);
  */

  function handleSubmit(data) {
    try {
      data.avatar = `https://robohash.org/${data.last_name}.png?size=100x100&set=set1`; // eslint-disable-line

      const newData = contacts.map(d => (d.id == id ? { id : parseInt(id), ...data } : d)); // eslint-disable-line

      localStorage.setItem('contacts', JSON.stringify(newData));

      toast.success('Cadastro realizado com sucesso', {
        position: 'top-center',
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(
        'Falha ao atualizar o cadastro, verifique os dados e tente novamente',
        {
          position: 'top-center',
          autoClose: 3000,
        }
      );
    }
  }

  return (
    <Container>
      <Nav>
        <h1>
          <FaUserEdit color="#1A8E6E" size={22} />
          Adicionar contato
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
