import React from 'react';
import PropTypes from 'prop-types';
import {
  Bairro,
  CardImage,
  Cidade,
  Container,
  ContentWrapper,
  DescricaoWrapper,
  ImageWrapper,
  SaibaMais,
  Nome,
  Diferenciais,
  Diferencial,
  Elevador,
  Bicicletario,
  Lazer,
  Classificacao,
  SeloWrapper,
  Selo,
  Linha,
} from './styles';

export default function CardImovel({ cardImage }) {
  return (
    <Container>
      <Classificacao>Casa Verde e Amarela</Classificacao>
      <ContentWrapper>
        <ImageWrapper>
          <CardImage alt="Imóvel" src={cardImage} />
        </ImageWrapper>
        <DescricaoWrapper>
          <Bairro>São Gabriel</Bairro>
          <Cidade>Belo Horizonte/MG</Cidade>
          <Nome>Plaza Cartagena</Nome>
        </DescricaoWrapper>
        <SeloWrapper>
          <Selo>Lazer equipado</Selo>
          <Linha />
        </SeloWrapper>
        <Diferenciais>
          <Diferencial>
            <Elevador />
            Elevador
          </Diferencial>
          <Diferencial>
            <Bicicletario />
            Bicicletário
          </Diferencial>
          <Diferencial>
            <Lazer />
            Área de lazer
          </Diferencial>
        </Diferenciais>
      </ContentWrapper>
      <SaibaMais>Saiba Mais</SaibaMais>
    </Container>
  );
}

CardImovel.propTypes = {
  cardImage: PropTypes.string.isRequired,
};
