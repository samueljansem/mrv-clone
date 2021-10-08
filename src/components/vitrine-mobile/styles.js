import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  position: fixed;
  overflow: hidden;
  height: 250px;
  top: 0;
  left: 0;
  right: 0;
  display: none;

  @media (max-width: 1180px) {
    display: block;
  }

  > img {
    object-fit: cover;
    width: 100%;
    height: 100%auto;
  }
`;

export default Container;
