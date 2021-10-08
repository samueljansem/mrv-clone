import React from 'react';
import Container from './styles';
import vitrine from '../../assets/img/vitrine-desktop.png';

export default function VitrineDesktop() {
  return (
    <Container>
      <img alt="Vitrine" src={vitrine} />
    </Container>
  );
}
