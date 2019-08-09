import React from 'react';

import { Container, Services } from './styles';

import main from '../../assets/images/main.png';
import pintura from '../../assets/images/pintura.png';
import rack from '../../assets/images/rack.png';


export default function Main() {
  return (
    <>
      <Container>
        <img src={main} alt="Main" />
      </Container>

      <br />

      <Services>
        <img src={pintura} alt="Main" />
        <img src={rack} alt="Main" />
      </Services>
    </>
  );
}
