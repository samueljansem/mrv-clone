import styled from 'styled-components';
import { GiElevator } from 'react-icons/gi';
import { MdDirectionsBike } from 'react-icons/md';
import { FaSwimmingPool } from 'react-icons/fa';

const Container = styled.div`
  width: 270px;
  height: 580px;
  background: var(--color-card-detail);
  box-shadow: 1px 1px 10px 1px rgba(1, 1, 1, 0.4);
  transition: all 0.2s ease-in-out;
  position: relative;
  border-radius: 15px;
  display: block;
  margin: 0 15px 40px 15px;

  &:hover {
    transform: scale(1.01);
  }
`;

const ContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 544px;
  background: var(--color-white);
  border-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const CardImage = styled.img`
  max-width: 100%;
  height: 266px;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 266px;
`;

const SaibaMais = styled.div`
  bottom: 0;
  height: 30px;
  width: 100%;
  display: flex;
  font-family: 'averta-bold';
  color: var(--color-white);
  justify-content: center;
  align-items: center;
`;

const Classificacao = styled.div`
  background: var(--color-card-detail);
  right: 0;
  top: 0;
  width: 170px;
  height: 21px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 5px;
  font-family: 'averta-regular';
  font-size: 14px;
  color: var(--color-white);
`;

const DescricaoWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  padding-left: 15px;
  padding-top: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

const Bairro = styled.span`
  width: 90%;
  color: var(--color-lightblack);
  font-family: 'averta-bold';
`;

const Cidade = styled.span`
  width: 90%;
  color: var(--color-lightblack);
  font-family: 'averta-regular';
`;

const Nome = styled.span`
  width: 90%;
  color: var(--color-lightblack);
  font-family: 'averta-bold';
  font-size: 14px;
`;

const SeloWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 15px;
  margin-bottom: 20px;
`;

const Selo = styled.span`
  width: 100%;
  font-family: 'averta-regular';
  font-size: 16px;
`;

const Diferenciais = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 15px;
`;

const Diferencial = styled.span`
  font-family: 'averta-regular';
  width: 100%;
  font-size: 15px;
  margin-bottom: 10px;
`;

const Elevador = styled(GiElevator)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: var(--color-gray);
`;

const Bicicletario = styled(MdDirectionsBike)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: var(--color-gray);
`;

const Lazer = styled(FaSwimmingPool)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: var(--color-gray);
`;

const Linha = styled.hr`
  border-radius: 4px;
  height: 4px;
  width: 50px;
  color: var(--color-card-detail);
  background: var(--color-card-detail);
`;

export {
  Container,
  CardImage,
  SaibaMais,
  ContentWrapper,
  ImageWrapper,
  Classificacao,
  DescricaoWrapper,
  Bairro,
  Cidade,
  Nome,
  Diferenciais,
  Diferencial,
  Elevador,
  Bicicletario,
  Lazer,
  SeloWrapper,
  Selo,
  Linha,
};