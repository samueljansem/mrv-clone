import styled from 'styled-components';

const Container = styled.div`
  width: 280px;
  height: 580px;
  border-radius: 14px;
  background: var(--color-card-detail);
  overflow: hidden;
  box-shadow: 1px 1px 10px 1px rgba(1, 1, 1, 0.4);
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.01);
  }
`;

const ContentWrapper = styled.div`
  width: 100%auto;
  height: 544px;
  top: 0;
  background: var(--color-white);
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

const SeloWrapper = styled.div`
  background: var(--color-card-detail);
  right: 0;
  top: 0;
  width: 170px;
  height: 21px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 5px;
  font-family: 'averta-regular';
  font-size: 14px;
  color: var(--color-white);
`;

const StatusWrapper = styled.div`
  width: 100%;
  padding-left: 15px;
`;

export {
  Container,
  CardImage,
  SaibaMais,
  ContentWrapper,
  ImageWrapper,
  SeloWrapper,
  StatusWrapper,
};
