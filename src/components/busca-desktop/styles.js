import styled from 'styled-components';
import Select from 'react-select';
import COLORS from '../../styles/Colors';
import { MdMessage } from 'react-icons/md';
import { RiFilter3Fill } from 'react-icons/ri';

const Container = styled.div`
  background: var(--color-search);
  padding: 0 15px;
  height: 92px;
  align-items: center;

  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 2;

  display: none;

  @media (min-width: 1180px) {
    display: flex;
  }

  > main {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 100px;
  }

  .margin-right-2 {
    margin-right: 20px;
  }
`;

const SearchTitle = styled.span`
  color: var(--color-white);
  font-weight: bold;
  box-sizing: border-box;
`;

const BoxChat = styled.div`
  background: var(--color-orange);
  color: var(--color-search);
  height: 92px;
  width: 348px;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 22px;
  right: 0;

  display: none;

  @media (min-width: 1128px) {
    display: flex;
  }
`;
const AdvancedBoxChat = styled.div`
  background: var(--color-orange);
  color: var(--color-search);
  height: 200px;
  width: 348px;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 22px;
  right: 0;

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
`;

const SearchSelect = styled(Select)`
  border-radius: 8px;
  width: 328px;
  padding: 10px 0px;
  font-size: 18px;
  text-indent: 5%;
  color: var(--color-lightblack);
`;

const SelectStyles = {
  option: (base) => ({
    ...base,
    color: COLORS.lightblack,
  }),
  control: (base) => ({
    ...base,
    color: COLORS.lightblack,
  }),
  singleValue: (base) => ({
    ...base,
    color: COLORS.lightblack,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: COLORS.search,
    fontSize: '20px',
  }),
};

const SearchButton = styled.button`
  background: var(--color-lightgreen);
  color: var(--color-white);
  font-weight: bold;
  width: 142px;
  height: 56px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
`;

const RiFilter3FillIcon = styled(RiFilter3Fill)`
  color: var(--color-white);
  font-size: 28px;
  cursor: pointer;
`;

const AdvancedContainer = styled.div`
  background: var(--color-search);
  padding: 0 15px;
  align-items: center;
  height: 200px;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 2;

  display: none;

  @media (min-width: 1180px) {
    display: flex;
  }

  > main {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 100px;
  }

  .margin-right-2 {
    margin-right: 20px;
  }
`;

export {
  Container,
  BoxChat,
  MdMessageIcon,
  SearchTitle,
  SearchFilters,
  SearchButton,
  SearchSelect,
  RiFilter3FillIcon,
  AdvancedContainer,
  AdvancedBoxChat,
  SelectStyles,
};
