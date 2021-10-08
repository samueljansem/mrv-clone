import React from 'react';
import Container from './styles';
import vitrine from '../../assets/img/vitrine-mobile.jpg';

export default function VitrineMobile() {
  return (
    <Container>
      <img alt="Vitrine" src={vitrine} />
    </Container>
  );
}
