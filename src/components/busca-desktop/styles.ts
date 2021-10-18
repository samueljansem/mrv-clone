import styled from 'styled-components';
import Select, { StylesConfig } from 'react-select';
import { MdMessage, RiFilter3Fill } from '../../styles/Icons';
import COLORS from '../../styles/Colors';

const Container = styled.div`
  position: sticky;
  top: 0px;

  background: var(--color-search);
  padding: 0 15px;
  height: 92px;
  width: 100%;
  align-items: center;
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
  font-family: 'averta-regular';
`;

const BoxChat = styled.div`
  background: linear-gradient(45deg, var(--color-orange), var(--color-lightorange));
  color: var(--color-search);
  height: 92px;
  width: 278px;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 22px;
  right: 0;
  font-family: 'averta-bold';
  font-size: 18px;

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
  font-size: 35px;
`;

const SearchFilters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchSelect = styled(Select)`
  width: 330px;
  font-size: 18px;
  text-indent: 5%;
  color: var(--color-lightblack);
`;

const SelectStyles: StylesConfig = {
  option: (base) => ({
    ...base,
    color: COLORS.lightblack,
  }),
  control: (base, state) => ({
    ...base,
    color: COLORS.lightblack,
    borderRadius: '10px',
    height: '48px',
    boxShadow: state.isFocused ? `0 0 0 0.2rem ${COLORS.search}` : `0`,
    borderColor: state.isFocused ? COLORS.search : base.borderColor,
    '&:hover': {
      borderColor: state.isFocused ? COLORS.search : base.borderColor,
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: COLORS.lightblack,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: COLORS.search,
  }),
};

const SearchButton = styled.button`
  background: var(--color-lightgreen);
  color: var(--color-white);
  font-family: 'averta-bold';
  width: 142px;
  height: 56px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
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
