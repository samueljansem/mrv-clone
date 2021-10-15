import React from 'react';
import {
  HeaderDesktop,
  BuscaDesktop,
  VitrineDesktop,
  VitrineMobile,
  MenuMobile,
  CardImovel,
} from '../../components';
import {
  Container,
  DobraImoveis,
  TituloDobraImoveis,
  ListagemImoveis,
  TituloWrapper,
  Wrapper,
  ConhecaMais,
  ButtonWrapper,
} from './styles';

import CardImage from '../../assets/img/example-card.jpg';

function Home() {
  return (
    <Container>
      <HeaderDesktop />
      <BuscaDesktop />
      <VitrineDesktop />
      <VitrineMobile />
      <MenuMobile />
      <Wrapper>
        <DobraImoveis>
          <TituloWrapper>
            <TituloDobraImoveis>Imóveis à venda em Minas Gerais</TituloDobraImoveis>
          </TituloWrapper>
          <ListagemImoveis>
            <CardImovel cardImage={CardImage} />
            <CardImovel cardImage={CardImage} />
            <CardImovel cardImage={CardImage} />
            <CardImovel cardImage={CardImage} />
          </ListagemImoveis>
          <ButtonWrapper>
            <ConhecaMais>Conheça mais imóveis</ConhecaMais>
          </ButtonWrapper>
        </DobraImoveis>
      </Wrapper>
    </Container>
  );
}

export default Home;
