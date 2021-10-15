import React from 'react';
import {
  Container,
  MrveCo,
  Navegue,
  Wrapper,
  Links,
  Circle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from './styles';

export default function FooterDesktop() {
  return (
    <Container>
      <Wrapper>
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
        <Navegue />
        <MrveCo />
      </Wrapper>
    </Container>
  );
}
