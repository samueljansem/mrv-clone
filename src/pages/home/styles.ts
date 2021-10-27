import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DobraImoveis = styled.div`
  background: var(--color-background);
  margin-bottom: 50px;
  width: 1200px;
`;

const TituloDobraImoveis = styled.h1`
  width: 100%;
  font-size: 40px;
  font-family: 'averta-bold';
  font-weight: 400;
  color: var(--color-lightblack);
  margin-bottom: 25px;
`;

const TituloWrapper = styled.div`
  width: 100%;
`;

const ListagemImoveis = styled.div`
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  max-width: 100vw;
  align-items: center;
  justify-content: flex-start;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ConhecaMais = styled.button`
  background: transparent;
  border: solid 2px var(--color-orange);
  border-radius: 10px;
  width: 180px;
  height: 48px;
  color: var(--color-orange);
  font-family: 'averta-bold';
  font-size: 16px;
`;

export {
  Container,
  Wrapper,
  DobraImoveis,
  TituloDobraImoveis,
  TituloWrapper,
  ListagemImoveis,
  ConhecaMais,
  ButtonWrapper,
};
