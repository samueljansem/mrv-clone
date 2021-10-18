import React from 'react';
import Container from './styles';
import vitrine from '../../assets/img/vitrine-desktop-2.png';

const VitrineDesktop: React.FC = () => (
  <Container>
    <img alt="Vitrine" src={vitrine} />
  </Container>
);

export default VitrineDesktop;
