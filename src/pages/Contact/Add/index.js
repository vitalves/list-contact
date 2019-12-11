import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdPersonAdd, MdArrowBack } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import api from '../../../services/api';

import { Container, Nav, Section } from './styles';

const schema = Yup.object().shape({
  first_name: Yup.string()
    .trim()
    .min(2, 'Digite seu nome corretamente')
    .required('Por favor, digite seu nome'),
  last_name: Yup.string()
    .trim()
    .min(3, 'Por favor, digite seu sobrenome corretamente')
    .required('Por favor, digite seu sobrenome'),
  email: Yup.string()
    .trim()
    .email('Digite um email válido')
    .required('Por favor, digite seu email'),
  language: Yup.string()
    .trim()
    .min(2, 'Por favor, digite seu idioma corretamente')
    .required('Por favor, digite seu idioma'),
  birthday: Yup.string()
    .min(5, 'Por favor, digite a data corretamente')
    .max(
      10,
      `Por favor, digite a data de acordo com o modelo pedido. Exemplo: ${new Date(
        'aaa-MM-dd'
      )}`
    ),
});

export default function ContactAdd() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    document.title = 'Adicionar contato';

    const storageContacts = localStorage.getItem('contacts');

    if (storageContacts) {
      setContact(JSON.parse(storageContacts));

      // console.log(JSON.parse(storageContacts));
    }
  }, []);

  function handleSubmit(data) {
    setContact({ contact, ...data });
  }

  console.log(contact);

  return (
    <Container>
      <Nav>
        <h1>
          <MdPersonAdd color="#1A8E6E" size={22} />
          Adicionar contato
        </h1>

        <Link to="/" title="Voltar">
          <MdArrowBack color="#FFF" size={16} />
          Voltar
        </Link>
      </Nav>

      <Section>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Digite seu Nome"
          />
          <Input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Digite seu Sobrenome"
          />
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu  Email"
          />
          <Input type="gender" name="gender" id="gender" placeholder="gender" />
          <Input
            type="language"
            name="language"
            id="language"
            placeholder="Informe seu Idioma"
          />
          <Input
            type="birthday"
            name="birthday"
            id="birthday"
            placeholder="AAAA-MM-DD"
          />

          <button type="submit"> Cadastrar </button>
        </Form>
      </Section>
    </Container>
  );
}
