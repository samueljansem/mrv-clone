import styled from 'styled-components';

const Container = styled.div`
  width: 280px;
  height: 580px;
  background: var(--color-card-detail);
  box-shadow: 1px 1px 10px 1px rgba(1, 1, 1, 0.4);
  transition: all 0.2s ease-in-out;
  position: relative;
  border-radius: 15px;
  display: block;
  margin-right: 40px;
  margin-bottom: 40px;

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

const Selo = styled.div`
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

export { Container, CardImage, SaibaMais, ContentWrapper, ImageWrapper, Selo };
