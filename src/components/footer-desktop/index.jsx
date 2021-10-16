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
} from './styles';
import logo from '../../assets/img/mrveco.webp';

export default function FooterDesktop() {
  return (
    <Container>
      <Links>
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
