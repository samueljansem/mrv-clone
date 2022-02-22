import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  top: 140px;
  display: none;
  box-shadow: 0 0 20px 0px rgba(1, 1, 1, 0.2);
  height: 518px;
  width: 100%;
  overflow: hidden;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export default Container;
