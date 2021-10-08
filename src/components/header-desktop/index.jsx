import React from 'react';
import {
  Container,
  Links,
  GrAccessibilityIcon,
  GiBrazilFlagIcon,
  GiUsaFlagIcon,
  FaChevronDownIcon,
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
          <a href="/imoveis">
            Imóveis a venda <FaChevronDownIcon />
          </a>
          <a href="/institucional">
            Institucional <FaChevronDownIcon />
          </a>
          <a href="/sustentabilidade">
            Sustentabilidade <FaChevronDownIcon />
          </a>
          <a href="/inovacao">
            Inovação <FaChevronDownIcon />
          </a>
          <a href="/investidores">
            Investidores <FaChevronDownIcon />
          </a>
          <a href="/clientes">
            Clientes <FaChevronDownIcon />
          </a>
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
