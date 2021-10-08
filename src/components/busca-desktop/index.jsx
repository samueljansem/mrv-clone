import React, { useState, useEffect } from 'react';
import {
  Container,
  BoxChat,
  SearchButton,
  MdMessageIcon,
  SearchTitle,
  SearchFilters,
  SearchSelect,
} from './styles';
import { BuscaService } from '../../services';

export default function Busca() {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    const estadosSelect = BuscaService.obterEstadosSelect();
    const cidadesSelect = BuscaService.obterCidadesSelect();
    setEstados(estadosSelect);
    setCidades(cidadesSelect);
  }, []);

  const handleEstadoChange = (selectedOption) => {
    if (selectedOption != null) {
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
            onChange={handleEstadoChange}
            isClearable
            options={estados}
            placeholder="Estado"
            isSearchable={false}
          />
          <SearchSelect isClearable options={cidades} placeholder="Cidade" isSearchable={false} />
        </SearchFilters>
      </main>
      <SearchButton type="button" aria-label="Buscar">
        Buscar
      </SearchButton>
      <BoxChat>
        Chat 24h <MdMessageIcon />
      </BoxChat>
    </Container>
  );
}
