import React, { useState, useEffect, useRef } from 'react';
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
import { BuscaService } from '../../services';

export default function Busca() {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const selectEstadoRef = useRef();
  const selectCidadeRef = useRef();

  useEffect(() => {
    const estadosSelect = BuscaService.obterEstadosSelect();
    const cidadesSelect = BuscaService.obterCidadesSelect();
    setEstados(estadosSelect);
    setCidades(cidadesSelect);
  }, []);

  const handleEstadoChange = (selectedOption, triggeredAction) => {
    selectCidadeRef.current.clearValue();
    if (triggeredAction.action === 'clear') {
      const cidadesSelect = BuscaService.obterCidadesSelect();
      setCidades(cidadesSelect);
    } else {
      const cidadesSelect = BuscaService.obterCidadesSelect(selectedOption.value);
      setCidades(cidadesSelect);
    }
  };

  return (
    <Container>
      <main>
        <SearchTitle>Encontre seu imóvel:</SearchTitle>
        <SearchFilters>
          <SearchSelect
            styles={SelectStyles}
            onChange={handleEstadoChange}
            isClearable
            options={estados}
            placeholder="Estado"
            isSearchable={false}
            className="margin-right-2"
            ref={selectEstadoRef}
          />
          <SearchSelect
            styles={SelectStyles}
            isClearable
            options={cidades}
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
}
