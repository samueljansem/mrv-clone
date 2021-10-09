import React from 'react';
import {
  Container,
  Links,
  GrAccessibilityIcon,
  GiBrazilFlagIcon,
  GiUsaFlagIcon,
  LinkWrapper,
  FaChevronDownIcon,
  ChevronDownWrapper,
  ImgLogo,
} from './styles';
import logo from '../../assets/img/logo-mrv.webp';

export default function Header() {
  return (
    <Container>
      <main>
        <div className="header-logo">
          <a href="/">
            <ImgLogo alt="MRV" src={logo} />
          </a>
        </div>
        <Links className="header-links">
          <LinkWrapper>
            <a href="/">Imóveis à venda</a>
            <ChevronDownWrapper>
              <FaChevronDownIcon />
            </ChevronDownWrapper>
          </LinkWrapper>
          <LinkWrapper>
            <a href="/">Institucional</a>
            <ChevronDownWrapper>
              <FaChevronDownIcon />
            </ChevronDownWrapper>
          </LinkWrapper>
          <LinkWrapper>
            <a href="/">Sustentabilidade</a>
            <ChevronDownWrapper>
              <FaChevronDownIcon />
            </ChevronDownWrapper>
          </LinkWrapper>
          <LinkWrapper>
            <a href="/">Inovação</a>
            <ChevronDownWrapper>
              <FaChevronDownIcon />
            </ChevronDownWrapper>
          </LinkWrapper>
          <LinkWrapper>
            <a href="/">Investidores</a>
            <ChevronDownWrapper>
              <FaChevronDownIcon />
            </ChevronDownWrapper>
          </LinkWrapper>
          <LinkWrapper>
            <a href="/">Clientes</a>
            <ChevronDownWrapper>
              <FaChevronDownIcon />
            </ChevronDownWrapper>
          </LinkWrapper>
        </Links>
        <div>
          <GiBrazilFlagIcon />
          <GiUsaFlagIcon />
          <GrAccessibilityIcon />
        </div>
      </main>
    </Container>
  );
}
