import React from 'react';

import { Container } from './styles';
import main from '../../assets/images/main.png'

export default function Home() {
  return (
    <Container>
      <img src={main} alt="main" />
    </Container>
  );
}
