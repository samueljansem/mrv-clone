import styled from 'styled-components';
import { GrAccessibility } from 'react-icons/gr';
import { GiBrazilFlag, GiUsaFlag } from 'react-icons/gi';
import { FaChevronDown } from 'react-icons/fa';

const Container = styled.header`
  background: var(--color-white);
  padding: 0 15px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: none;

  @media (min-width: 1180px) {
    display: flex;
  }

  > main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 17%;
    height: 100%auto;
    overflow: hidden;
  }
`;

const ImgLogo = styled.img``;

const GrAccessibilityIcon = styled(GrAccessibility)`
  color: var(--color-black);
  margin-left: 10px;
  font-size: 22px;
`;

const GiBrazilFlagIcon = styled(GiBrazilFlag)`
  color: var(--color-black);
  border: 1px solird var(--color-black);
  font-size: 22px;
`;

const GiUsaFlagIcon = styled(GiUsaFlag)`
  color: var(--color-black);
  margin-left: 10px;
  font-size: 22px;
`;

const FaChevronDownIcon = styled(FaChevronDown)`
  color: var(--color-search);
`;

const Links = styled.div`
  > a + a {
    margin-left: 35px;
  }

  > a {
    color: var(--color-search);
    font-weight: bold;
    text-decoration: none;
    align-items: center;
    justify-content: left;
    font-family: 'averta-bold';
    font-weight: 300;
  }
`;

export {
  Container,
  Links,
  GrAccessibilityIcon,
  GiBrazilFlagIcon,
  GiUsaFlagIcon,
  FaChevronDownIcon,
  ImgLogo,
};
