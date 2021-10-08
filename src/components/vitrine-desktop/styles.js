import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  position: absolute;
  top: 140px;
  display: none;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export default Container;
