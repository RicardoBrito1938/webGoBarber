import React from 'react';

import { Container, Content, Background } from './styles';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="E-mail" />

          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>
        </form>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
