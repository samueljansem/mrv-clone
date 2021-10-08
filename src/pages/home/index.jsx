import React from 'react';
import Container from './styles';
import {
  HeaderDesktop,
  BuscaDesktop,
  VitrineDesktop,
  VitrineMobile,
  MenuMobile,
} from '../../components';

function Home() {
  return (
    <Container>
      <HeaderDesktop />
      <BuscaDesktop />
      <VitrineDesktop />
      <VitrineMobile />
      <MenuMobile />
    </Container>
  );
}

export default Home;
