import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Nav } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo Movitec" />
      </Link>
      <Nav>
        <li>Home</li>
        <li>Produtos</li>
        <li>Qualidade</li>
        <li>Contato</li>
      </Nav>
    </Container>
  );
}
