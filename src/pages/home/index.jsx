import React from 'react';
import {
  HeaderDesktop,
  BuscaDesktop,
  VitrineDesktop,
  VitrineMobile,
  MenuMobile,
  CardImovel,
} from '../../components';
import { Container, DobraImoveis, TituloDobraImoveis } from './styles';

function Home() {
  return (
    <Container>
      <HeaderDesktop />
      <BuscaDesktop />
      <VitrineDesktop />
      <VitrineMobile />
      <MenuMobile />
      <DobraImoveis>
        <TituloDobraImoveis>Imóveis à venda em Minas Gerais</TituloDobraImoveis>
        <CardImovel />
      </DobraImoveis>
    </Container>
  );
}

export default Home;
