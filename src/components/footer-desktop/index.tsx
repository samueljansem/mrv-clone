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
  Separator,
} from './styles';
import logo from '../../assets/img/mrveco.webp';

const FooterDesktop: React.FC = () => (
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
          <LinkTitle>
            Contato
            <Separator />
          </LinkTitle>
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
          <LinkTitle>
            Imóveis a venda
            <Separator />
          </LinkTitle>
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
        <LinkList area="INSTITUCIONAL">
          <LinkTitle>
            Institucional
            <Separator />
          </LinkTitle>
          <LinkSpan>Site Institucional</LinkSpan>
          <LinkSpan>Por que a MRV?</LinkSpan>
          <LinkSpan>MRV em números</LinkSpan>
          <LinkSpan>Sala de Imprensa</LinkSpan>
          <LinkSpan>Programa de Integridade</LinkSpan>
          <LinkSpan>Portas Abertas MRV</LinkSpan>
          <LinkSpan>MRV Decora</LinkSpan>
          <LinkSpan>Blog da MRV</LinkSpan>
          <LinkSpan>Habitability</LinkSpan>
        </LinkList>
        <LinkList area="INOVACAO">
          <LinkTitle>
            Inovação
            <Separator />
          </LinkTitle>
          <LinkSpan>Desafios</LinkSpan>
          <LinkSpan>Parcerias</LinkSpan>
          <LinkSpan>Reconhecimento</LinkSpan>
          <LinkSpan>Notícias</LinkSpan>
        </LinkList>
        <LinkList area="SUSTENTABILIDADE">
          <LinkTitle>
            Sustentabilidade
            <Separator />
          </LinkTitle>
          <LinkSpan>Site de Sustentabilidade MRV</LinkSpan>
          <LinkSpan>Ações Sustentáveis</LinkSpan>
          <LinkSpan>Instituto MRV</LinkSpan>
          <LinkSpan>Relatório de Sustentabilidade</LinkSpan>
        </LinkList>
        <LinkList area="INVESTIDORES">
          <LinkTitle>
            Investidores
            <Separator />
          </LinkTitle>
          <LinkSpan>Portal de RI</LinkSpan>
          <LinkSpan>Fatos Relevantes</LinkSpan>
          <LinkSpan>Apresentações</LinkSpan>
          <LinkSpan>Estatuto e Políticas</LinkSpan>
          <LinkSpan>Estratégias e Produtos</LinkSpan>
          <LinkSpan>Diretoria e Conselho</LinkSpan>
          <LinkSpan>Agenda de RI</LinkSpan>
          <LinkSpan>Central de Resultados</LinkSpan>
          <LinkSpan>Ratings &amp; Covenants</LinkSpan>
        </LinkList>
        <LinkList area="CLIENTES">
          <LinkTitle>
            Clientes
            <Separator />
          </LinkTitle>
          <LinkSpan>Portal de Relacionamento</LinkSpan>
          <LinkSpan>Boleto</LinkSpan>
          <LinkSpan>Assistência Técnica</LinkSpan>
          <LinkSpan>Negociar Minhas Parcelas</LinkSpan>
          <LinkSpan>Indicação Premiada</LinkSpan>
          <LinkSpan>Clube de Vantagens</LinkSpan>
          <LinkSpan>Acabamentos</LinkSpan>
          <LinkSpan>MRV Responde</LinkSpan>
          <LinkSpan>Conexão MRV</LinkSpan>
        </LinkList>
      </LinksGrid>
    </Links>
    <Navegue>
      <NavegueText>Navegue pelo mundo MRV&amp;CO</NavegueText>
      <ChevronDown />
    </Navegue>
    <MrveCo>
      <LogoWrapper>
        <img src={logo} title="Logo MRV&amp;CO" alt="Logo MRV&amp;CO" width="136px" height="24px" />
      </LogoWrapper>
      <Rights>
        MRV todos os direitos reservados | Política de privacidade | Código de conduta | Nova marca
        | Mapa do site
      </Rights>
    </MrveCo>
  </Container>
);

export default FooterDesktop;
