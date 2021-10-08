import React from 'react';
import {
  Container,
  GiHamburgerMenuIcon,
  ImSearchIcon,
  ImWhatsappIcon,
  WhatsappWrapper,
  LogoWrapper,
  MenuWrapper,
  SearchWrapper,
} from './styles';
import logo from '../../assets/img/logo.png';

export default function MenuMobile() {
  return (
    <Container>
      <LogoWrapper>
        <img alt="Logo" src={logo} />
      </LogoWrapper>
      <MenuWrapper>
        <GiHamburgerMenuIcon />
      </MenuWrapper>
      <SearchWrapper>
        <ImSearchIcon />
      </SearchWrapper>
      <WhatsappWrapper>
        <ImWhatsappIcon />
      </WhatsappWrapper>
    </Container>
  );
}
