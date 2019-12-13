import React from 'react';
import { GiSelfLove } from 'react-icons/gi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <GiSelfLove size={32} color="#309963" />
      <p>Feito com um pouco de pressa, mas com muito amor e café!</p>
      <p>
        <a
          href="https://vitalves.com/"
          target="_blank"
          title="vitalves"
          rel="external nofollow noopener noreferrer"
        >
          VITALVES
        </a>
        <a
          href="https://github.com/vitalves"
          target="_blank"
          title="github"
          rel="external nofollow noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://br.linkedin.com/in/vitalves"
          target="_blank"
          title="linkedin"
          rel="external nofollow noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </p>
    </Container>
  );
}
