import styled from 'styled-components';
import Select from 'react-select';
import { MdMessage } from 'react-icons/md';

const Container = styled.div`
  background: var(--color-search);
  padding: 0 15px;
  height: 92px;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 2;

  display: none;

  @media (min-width: 1180px) {
    display: flex;

    > main {
      margin: 0 100px;
    }
  }

  > main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 100px;
  }
`;

const SearchTitle = styled.span`
  color: var(--color-white);
  font-weight: bold;
`;

const BoxChat = styled.div`
  background: var(--color-orange);
  color: var(--color-search);
  height: 92px;
  width: 288px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 22px;
  margin-right: 15px;

  display: none;

  @media (min-width: 1128px) {
    display: flex;
  }
`;

const MdMessageIcon = styled(MdMessage)`
  color: var(--color-search);
  margin-left: 5px;
  font-size: 24px;
`;

const SearchFilters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SearchSelect = styled(Select)`
  border-radius: 8px;
  width: 328px;
  height: 48px;
  font-size: 18px;
  text-indent: 5%;
`;

const SearchButton = styled.button`
  background: var(--color-lightgreen);
  color: var(--color-white);
  font-weight: bold;
  width: 142px;
  height: 56px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  margin-right: 50px;
  cursor: pointer;
`;

export {
  Container,
  BoxChat,
  MdMessageIcon,
  SearchTitle,
  SearchFilters,
  SearchButton,
  SearchSelect,
};
