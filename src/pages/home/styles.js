import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const DobraImoveis = styled.div`
  display: block;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  top: 659px;
  background: var(--color-background);
  margin: 50px 20% 1000px 20%;
`;

const TituloDobraImoveis = styled.h1`
  width: 100%;
  font-size: 40px;
  font-family: 'averta-bold';
  font-weight: 400;
  color: var(--color-lightblack);
  margin-bottom: 25px;
`;

export { Container, DobraImoveis, TituloDobraImoveis };
