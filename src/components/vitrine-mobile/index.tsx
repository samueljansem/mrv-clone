import React from 'react';
import Container from './styles';
import vitrine from '../../assets/img/vitrine-mobile.jpg';

const VitrineMobile: React.FC = () => (
  <Container>
    <img alt="Vitrine" src={vitrine} />
  </Container>
);

export default VitrineMobile;
