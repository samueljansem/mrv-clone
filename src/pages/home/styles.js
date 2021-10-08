import styled from 'styled-components';

const Container = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

const DobraImoveis = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 659px;
  background: var(--color-background);
  margin: 50px 20% 0px 20%;
`;

const TituloDobraImoveis = styled.h1`
  font-size: 40px;
  font-family: 'averta-bold';
  font-weight: 400;
  color: var(--color-lightblack);
`;

export { Container, DobraImoveis, TituloDobraImoveis };
