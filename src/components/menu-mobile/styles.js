import styled, { css } from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImSearch, ImWhatsapp } from 'react-icons/im';

const Container = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 68px;
  display: none;
  justify-content: flex-start;
  background: #fcfcfc;
  align-items: center;
  box-shadow: 0 0 20px 0.1px rgba(1, 1, 1, 0.2);

  @media (max-width: 1180px) {
    display: flex;
  }
`;

const IconsCss = css`
  width: 32px;
  height: 32px;
`;

const GiHamburgerMenuIcon = styled(GiHamburgerMenu)`
  ${IconsCss}
  color: var(--color-search);
`;

const ImSearchIcon = styled(ImSearch)`
  ${IconsCss}
`;

const ImWhatsappIcon = styled(ImWhatsapp)`
  ${IconsCss}
  color: var(--color-white);
`;

const WhatsappWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-search);
`;

const SearchWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-orange);
`;

const LogoWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid var(--color-lightgray);
`;

export {
  Container,
  GiHamburgerMenuIcon,
  ImSearchIcon,
  ImWhatsappIcon,
  WhatsappWrapper,
  SearchWrapper,
  MenuWrapper,
  LogoWrapper,
};
