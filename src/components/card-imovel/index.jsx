import React from 'react';
import PropTypes from 'prop-types';
import {
  CardImage,
  Container,
  ContentWrapper,
  ImageWrapper,
  SaibaMais,
  SeloWrapper,
} from './styles';

export default function CardImovel({ cardImage }) {
  return (
    <Container>
      <SeloWrapper>Casa Verde e Amarela</SeloWrapper>
      <ContentWrapper>
        <ImageWrapper>
          <CardImage alt="Imóvel" src={cardImage} />
        </ImageWrapper>
      </ContentWrapper>
      <SaibaMais>Saiba Mais</SaibaMais>
    </Container>
  );
}

CardImovel.propTypes = {
  cardImage: PropTypes.string.isRequired,
};
