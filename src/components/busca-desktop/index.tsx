import React, { useRef } from 'react';
import {
  Container,
  BoxChat,
  SearchButton,
  MdMessageIcon,
  SearchTitle,
  SearchFilters,
  SearchSelect,
  RiFilter3FillIcon,
  SelectStyles,
} from './styles';

const Busca: React.FC = () => {
  const selectEstadoRef = useRef(null);
  const selectCidadeRef = useRef(null);

  return (
    <Container>
      <main>
        <SearchTitle>Encontre seu imóvel:</SearchTitle>
        <SearchFilters>
          <SearchSelect
            styles={SelectStyles}
            isClearable
            placeholder="Estado"
            isSearchable={false}
            ref={selectEstadoRef}
            className="margin-right-2"
          />
          <SearchSelect
            styles={SelectStyles}
            isClearable
            placeholder="Cidade"
            isSearchable={false}
            ref={selectCidadeRef}
          />
        </SearchFilters>
        <RiFilter3FillIcon />
        <SearchButton aria-label="Buscar">Buscar</SearchButton>
        <BoxChat>
          Chat 24h
          <MdMessageIcon />
        </BoxChat>
      </main>
    </Container>
  );
};

export default Busca;
