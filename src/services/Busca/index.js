const estados = [
  { value: 1, label: 'Minas Gerais' },
  { value: 2, label: 'São Paulo' },
  { value: 3, label: 'Rio de Janeiro' },
  { value: 4, label: 'Mato Grosso' },
];

const cidades = [
  { value: 1, label: 'Belo Horizonte', idEstado: 1 },
  { value: 2, label: 'Betim', idEstado: 1 },
  { value: 3, label: 'São Paulo', idEstado: 2 },
  { value: 4, label: 'Campinas', idEstado: 2 },
  { value: 5, label: 'Rio de Janeiro', idEstado: 3 },
  { value: 6, label: 'Cabo Frio', idEstado: 3 },
  { value: 7, label: 'Cuiabá', idEstado: 4 },
];

function obterEstadosSelect() {
  return estados;
}

function obterCidadesSelect(idEstado = undefined) {
  if (idEstado === undefined) return cidades;

  return cidades.filter((item) => item.idEstado === idEstado);
}

const BuscaService = {
  obterEstadosSelect,
  obterCidadesSelect,
};

export default BuscaService;
