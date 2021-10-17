import React from 'react';
import {
  Container,
  MrveCo,
  Navegue,
  // Wrapper,
  Links,
  Circle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  NavegueText,
  ChevronDown,
  Rights,
  LogoWrapper,
  Socials,
  LinksGrid,
  LinkList,
  LinkTitle,
  LinkSpan,
} from './styles';
import logo from '../../assets/img/mrveco.webp';

export default function FooterDesktop() {
  return (
    <Container>
      <Links>
        <Socials>
          <Circle>
            <Facebook />
          </Circle>
          <Circle>
            <Instagram />
          </Circle>
          <Circle>
            <Twitter />
          </Circle>
          <Circle>
            <Youtube />
          </Circle>
          <Circle>
            <Linkedin />
          </Circle>
        </Socials>
        <LinksGrid>
          <LinkList area="CONTATO">
            <LinkTitle>Contato</LinkTitle>
            <LinkSpan>Fale conosco</LinkSpan>
            <LinkSpan>Fale com um corretor</LinkSpan>
            <LinkSpan>Trabalhe conosco</LinkSpan>
            <LinkSpan>Agente dos sonhos</LinkSpan>
            <LinkSpan>Lojas e escritórios</LinkSpan>
            <LinkSpan>Compramos terrenos</LinkSpan>
            <LinkSpan>Fornecedores</LinkSpan>
            <LinkSpan>Ex-colaborador MRV</LinkSpan>
          </LinkList>
          <LinkList area="IMOVEIS">
            <LinkTitle>Imóveis a venda</LinkTitle>
            <LinkSpan>Buscar imóveis MRV</LinkSpan>
            <LinkSpan>Chat 24 horas</LinkSpan>
            <LinkSpan>Financiamento</LinkSpan>
            <LinkSpan>Casa Verde e Amarela</LinkSpan>
            <LinkSpan>Simulador de subsídio</LinkSpan>
            <LinkSpan>Como usar seu FGTS</LinkSpan>
            <LinkSpan>Usar Carta de Crédito</LinkSpan>
            <LinkSpan>Brasileiros no Exterior</LinkSpan>
            <LinkSpan>Imóveis prontos</LinkSpan>
            <LinkSpan>Ofertas</LinkSpan>
            <LinkSpan>Lojas</LinkSpan>
          </LinkList>
        </LinksGrid>
      </Links>
      <Navegue>
        <NavegueText>Navegue pelo mundo MRV&CO</NavegueText>
        <ChevronDown />
      </Navegue>
      <MrveCo>
        <LogoWrapper>
          <img src={logo} title="Logo MRV&CO" alt="Logo MRV&CO" width="136px" height="24px" />
        </LogoWrapper>
        <Rights>
          MRV todos os direitos reservados | Política de privacidade | Código de conduta | Nova
          marca | Mapa do site
        </Rights>
      </MrveCo>
    </Container>
  );
}
